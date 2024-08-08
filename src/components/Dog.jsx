import React from "react";
import { Link } from "react-router-dom";
import { useDogData } from "../Context/DogDataContext";

function Dog({ DogData, id}) { //bredFor, bredGrp, height, weight, id, image, lifeSpan, name

    const {setCurrDog} = useDogData();
    // console.log(dogInfo)

    function checkDog() {
        setCurrDog(id);
    }

    return (
        <>
            <div className="relative h-[300px] w-[400px] rounded-md mx-3 mb-10 transition hover:scale-105 cursor-pointer">
                <img
                    src={DogData.image.url}
                    alt="Dog Image"
                    className="z-0 h-full w-full rounded-md object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{DogData.name}</h1>

                    <p className="mt-2 text-sm text-gray-300">
                    {DogData.temperament}
                    </p>

                    <Link to={ `/about-dog/${id}`}> 
                        <button 
                        onClick={checkDog}
                        className="mt-5 inline-flex cursor-pointer items-center text-sm font-semibold text-white border-white border-y-2 py-1 px-5 rounded-md">
                            See more →
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

//

export default Dog;

