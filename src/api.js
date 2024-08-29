const DNS = 'http://localhost:5000'
export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/movies/popular",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/movies/netflixOriginals",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movies/topRated",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/movies/comedy",
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