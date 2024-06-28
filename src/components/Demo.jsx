import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {

    const [text, setText] = useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    // console.log("Rendering the Demo Component");

    // Memoize the heavy operation.
    const prime = useMemo(() => findNthPrime(text), [text])

    return (

        <div className={'m-4 p-2 w-96 h-72 border border-black ' + (isDarkTheme && 'bg-black text-white')}>
            <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='p-2 bg-sky-500 text-white'>{isDarkTheme ? "Light" : "Dark"}</button>
            <div>
                <input className='border border-black w-72 p-2 text-black' type="number" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div>
                <h1>Nth Prime : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo