import React from "react";

const Test = () => {

    function llamarTareas(){
        console.log('llamar api ')
        fetch('https://playground.4geeks.com/todo/users/rick')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data.todos))

    }

    function crearTareas(){
        console.log('lcrearTareas ')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react 2",
                "is_done": false
              })
        };

        fetch('https://playground.4geeks.com/todo/todos/rick',requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data))

    }


    function eliminarTareas(){
        console.log('eliminarTareas ')
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };

        fetch('https://playground.4geeks.com/todo/todos/40',requestOptions)
        .then( (data)=> console.log(data))

    }

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Test</h1>
            <button onClick={llamarTareas}>Lammar tareas</button>
            <button onClick={crearTareas}>crear tareas</button>
            <button onClick={eliminarTareas}>eliminar tareas</button>
			
		</div>
	);
};

export default Test;
