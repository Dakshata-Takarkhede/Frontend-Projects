// DogDataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {

    const URL = "https://api.freeapi.app/api/v1/public/dogs?page=1&limit=21";
    const [dogInfo, setDogInfo] = useState([]);
    const [currDog, setCurrDog] = useState(null);

  useEffect(() => {
    const getDog = async() => {
      try {
        const response = await fetch(URL);
        const jsonResponse = await response.json();
        const data = jsonResponse.data.data;
        // console.log(data)
        setDogInfo(data);
      }
      catch(e){
        console.log("Error : " + e);
      }
    }
  
    getDog(); 
  }, [])

  return (
    <DogDataContext.Provider value={{ dogInfo, setDogInfo, currDog, setCurrDog }}>
      {children}
    </DogDataContext.Provider>
  );
};

export const useDogData = () => useContext(DogDataContext);