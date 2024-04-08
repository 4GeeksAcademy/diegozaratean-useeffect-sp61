import React, { useEffect, useState } from "react";

const Getdata = () => {
    const [characters, setCharacters] = useState([])

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json() )
        .then( (data)=> setCharacters(data.results))
    }

    // '' 'dieg' 'aaaa' 'b'
    // 0     12 45 56785678
    // [].  ['a' 'b'] [3 , 4 ,5]. [{}]
    useEffect(()=>{
        console.log('se cargo la pagina')
        getCharacters()
    },[])
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Getdata</h1>
            <ol>
                { characters.map( (element,index)=> <li key={element.id}>{element.name} <img src={element.image} alt="" srcSet="" /> </li> ) }
            </ol>
		    { characters.map( (element,index)=> <p key={element.id}>{element.name} <img src={element.image} alt="" srcSet="" /> </p> ) }
		</div>
	);
};

export default Getdata;
