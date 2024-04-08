import React, { useState, useEffect } from "react";

const Count = () => {
    const [count, setCount] = useState(0) 
    const [countSubstract, setCountSubstract] = useState(20) 
    function sumar(){
        console.log('sumar')
        setCount( count  + 1)
    }

    function restar(){
        console.log('restar')
        setCountSubstract( countSubstract  - 1)
    }

    // useEffect( callback , [elemnto/s que voy a revisar])
    useEffect( ()=> {
        console.log('Count cambio')
    }, [count])

    useEffect( ()=> {
        console.log('countSubstract cambio')
    }, [countSubstract])

    useEffect( ()=> {
        console.log('countSubstract o count cambio')
    }, [count,countSubstract])

    useEffect( ()=> {
        console.log('el componente cambio')
    }, [])


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Count</h1>
            <button onClick={sumar}>Sumar</button>
            <p>el valor de count es : {count}</p>
            <button onClick={restar}>Restar</button>
            <p>el valor de count es : {countSubstract}</p>
			
		</div>
	);
};

export default Count;
