const API_KEY = 'b5e4e9d884cf44a5aea758a85d305554'
const DNS = 'https://api.themoviedb.org/3'
export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?api_key="+API_KEY+"&language=pt-BR",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/discover/tv?api_key="+API_KEY+"&with_networks=213",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated?api_key="+API_KEY+"&language=pt-BR",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/discover/tv?api_key="+API_KEY+"&with_genres=35",
        isLarge: false,
    },  
]

export const getData = async(path) =>{
    try{
        let URI = DNS + path

        let result = await fetch(URI)
    
        return result.json()
    
    }catch(error){
        console.log(error)
    }

}