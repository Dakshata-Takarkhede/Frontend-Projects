import React, { useEffect, useState } from "react";
import { useDogData } from '../../Context/DogDataContext';
import Container from '../container/Container'
import TextContainer from "../container/TextContainer";

function DogPage() {

  const { currDog } = useDogData();
  const [dog, setDog] = useState({});
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    async function getCurrDog() {
      try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/dogs/${currDog}`);
        const jsonResponse = await response.json();
        const data = jsonResponse.data;
        setDog(data);
        // console.log(data);
      } 
      catch (error) {
        console.log("Error : " + error);
      }
    }
    getCurrDog(); 
  }, [currDog])

  useEffect(() => {
    const storedDog = localStorage.getItem('selectedDog');
    if (storedDog) {
      setSelectedDog(JSON.parse(storedDog));
    }
  }, []);

  useEffect(() => {
    if (selectedDog) {
      localStorage.setItem('selectedDog', JSON.stringify(selectedDog));
    }
  }, [selectedDog]);

  // useEffect(() => {
  //   const storedDogData = JSON.parse(localStorage.getItem("dog"));



  //   if(dog && dog.length > 0) {
  //     setDog(dog);
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("dog", JSON.stringify(dog));
  // }, [dog])

  // console.log(dog.image.url)

  return (
    <>
    {dog.length === 0 ? (<p>Data is loading...</p>) : dog.image ? (

    <Container>
      <div className="h-screen w-full flex">
        <div className="w-1/2 mt-20">
          <div className=" w-[550px] h-[400px] m-auto">
            <img 
              className="w-full h-full"
              src={dog.image.url} 
              alt={dog.name} 
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center mt-20 ">
          <div>
            <h1 className="md:text-3xl lg:text-5xl font-semibold">
              {dog.name}
            </h1>
          </div>

          <div className="text-2xl mt-10 w-[400px] text-left">
            
           {/* <TextContainer>
              Text="Breed : "
              value={dog.bred_for}
            </TextContainer> */}

            <p>Breed : {dog.bred_for}</p>
            <p>Breed Group : {dog.breed_group}</p>
            <p>Height : {dog.height.imperial}</p>
            <p>Weight : {dog.weight.imperial}</p>
            <p>Life Span : {dog.life_span}</p>
            <p>Origin : {dog.origin}</p>
            <p>Temperament : {dog.temperament}</p>
          </div>
        </div>
      </div>
    </Container>
    ) : (
    <p>No data is available</p>
    )}
  </>
  );
}


export default DogPage;