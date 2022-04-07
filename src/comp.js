import React, { useState, useEffect } from 'react'

const Comp = () => {
    const [text,setText] = useState('Arthur');

    return (
        <div>
            <h1>Hello {text}</h1>
            <p>How are u doing?</p>
        </div>
    )

}

export default Comp;