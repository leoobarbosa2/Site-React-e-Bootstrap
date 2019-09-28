import React from 'react'

export default props =>
    <header className="text-center mb-5">
        <h1 className="display-3">{props.titulo}</h1>
        <p>{props.subtitulo}</p>
    </header>