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
        if (user.nombre.length > 3 && user.nombre !== "" && user.libro.length > 6) {
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div>
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