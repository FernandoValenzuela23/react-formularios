import React from 'react'
import { useState } from 'react';

export const FormComponent = () => {
    const [usuario, setUsuario] = useState({});

    const getDatos = e =>{
        e.preventDefault();
        let fields = e.target;
        const usu = {
            nombre: fields.nombre.value,
            apellido: fields.apellido.value,
            genero: fields.genero.value,
            biografia: fields.biografia.value
        };
        console.log(usuario);
        setUsuario(usu);
    }

    const cambiarDatos = e => {
        /* En teoria deberia ser asi, pero no funciona
        let nameInput = e.target.name;
        let tmp = usuario;
        
        if(nameInput) {
            tmp[nameInput] = e.target.value;
        }
        setUsuario(tmp);
        */

        // por lo tant asi se actualiza un estado
        let nameInput = e.target.name;
        setUsuario(estadoPrevio => {            
            return {
                ...estadoPrevio,
                [nameInput]: e.target.value
            }
        });
    }


    
  return (
    <div>
        <h1>Formularios con React</h1>
        <br/>

        {(usuario.nombre !== undefined) 
            &&
            (<div className='info'>
                {usuario.nombre} {usuario.apellido}, es un(a) {usuario.genero} y su biografia dice: <p>{usuario.biografia}</p>
            </div>)
            
        }
        
        

        <form onSubmit={ getDatos }>
            <input type="text" name="nombre" placeholder="Ingrese nombre" onChange={ cambiarDatos } />
            <input type="text" name="apellido" placeholder="Ingrese apellido" onChange={ cambiarDatos } />
            <select name="genero" onChange={ cambiarDatos } >
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea name="biografia" placeholder='Biografia' onChange={ cambiarDatos } ></textarea>
            <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}
