const axios = require('axios');
const DNS = 'http://localhost:5000'
const IdSession = localStorage.getItem('sessionID'); // Recupera o token do localStorage

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

export const getData = async(path) => {
    try {
        let URI = DNS + path;

        let response = await fetch(URI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify({ sessionID: IdSession }) // Converte o corpo para JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
