import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
    const api_key = "17909648-f7fcda3621481e98a12ffbea1";
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState('');


    useEffect(() => {
      const fetchData = async () =>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
        const data = await api.json();
        setImageData(data.hits)
        // console.log(data.hits);
      }
      fetchData();
    }, [query])
    

    const fetchImageByCategory = async(category) =>{
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${category}&image_type=photo&pretty=true&per_page=100`);
        const data = await api.json();
        setImageData(data.hits)
        console.log(data.hits);

    }

  return (
    <PixabayContext.Provider value={{imageData,fetchImageByCategory,setQuery}}>
        {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState