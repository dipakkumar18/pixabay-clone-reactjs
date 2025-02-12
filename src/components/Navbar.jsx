import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Navbar = () => {
    const {fetchImageByCategory,setQuery} = useContext(PixabayContext);
    return (
        <>
            <div className='container text-center my-3'>
                <button type="button" onClick={()=>fetchImageByCategory('animals')} className="btn btn-outline-primary mx-3">Animals</button>
                <button type="button" onClick={()=>fetchImageByCategory('science')} className="btn btn-outline-warning mx-3">Science</button>
                <button type="button" onClick={()=>fetchImageByCategory('fashion')} className="btn btn-outline-info mx-3">Fashion</button>
                <button type="button" onClick={()=>fetchImageByCategory('buildings')} className="btn btn-outline-danger mx-3">Buildings</button>
                <button type="button" onClick={()=>fetchImageByCategory('sports')} className="btn btn-outline-warning mx-3">Sports</button>
                <button type="button" onClick={()=>fetchImageByCategory('transportation')} className="btn btn-outline-info mx-3">Transportation</button>
                <button type="button" onClick={()=>fetchImageByCategory('travel')} className="btn btn-outline-light mx-3">Travel</button>
                <button type="button" onClick={()=>fetchImageByCategory('backgrounds')} className="btn btn-outline-primary mx-3">Background</button>
                <button type="button" onClick={()=>fetchImageByCategory('music')} className="btn btn-outline-warning mx-3">Music</button>
            </div>
            <div className="container" style={{width:"700px"}}>
                <input type="text" onChange={(e)=>setQuery(e.target.value)} className='form-control bg-dark text-light'></input>
            </div>
        </>
    )
}

export default Navbar