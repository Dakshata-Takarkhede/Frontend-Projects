import React from "react";

export default function TextContiner({Text, value}) {
    return (
        <>
        {Text && 
            <div className="p-5 flex">    
                <p className="text-3xl font-semibold text-red-700 m-5">{Text}</p>
                <p className="text-2xl text-black m-5">{value}</p>              
            </div>
        }
        </>
    )
} 