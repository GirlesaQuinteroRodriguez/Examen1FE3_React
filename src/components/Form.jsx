import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [user, setUser] = useState(
        {
            nombre: "",
            libro: ""
        }
    )
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isUsernameValid && user.libro.length > 6) {
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }

    const validateUserName = () => { 
        const withoutSpaces = user.nombre.trim();
        if (withoutSpaces.length > 2) {
          return true;
        } else {
          return false;
       } };

    const isUsernameValid = validateUserName()

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})} />
                <label>Libro Favorito</label>
                <input type="text" value={user.libro} onChange={(e) => setUser({...user, libro: e.target.value})} />
                <button>Enviar</button>

            </form>

        {err ? 'Por favor chequea que la información sea correcta' : null}
        {show && <Card nombre={user.nombre} libro={user.libro}/>}

        </div>
    )
}

export default Form