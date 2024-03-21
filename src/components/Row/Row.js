import { useEffect, useState } from 'react';
import './Row.css';
import { getData } from '../../api';
export default function Row(props){
const[filmes,setFilmes ] = useState()
const image_host = 'https://image.tmdb.org/t/p/original/';
    let fetchData = async () => {

        let resutl = getData(props.path)
        return resutl
    }
    useEffect(()=>{
        let teste = fetchData();
        teste.then((data)=>{
            setFilmes(data?.results)
        })
    },[])
    return(
        <div>
            {props.title}

            { <div className='imagens'>
                {filmes?.map((filme)=>{
                    return <img key={filme?.id} src={image_host + filme?.backdrop_path}></img>
                })}
            </div> }

        </div>
    )
}