import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

    let x = 0;

    const [y, setY] = useState(0)

    const ref = useRef(0)
    console.log(ref);
    /*
    not like => ref = 0;
    ref = {current : 0}
    */

    console.log("Rendering");

    const i = useRef(null)

    useEffect(() => {

        i.current = setInterval(() => {
            console.log("Namaste React", Math.random());
        }, 1000)

        return () => clearInterval(i.current)
    }, [])

    return (
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-72'>
            <div>
                <button className='p-2 bg-green-500' onClick={() => { x = x + 1; console.log(x) }}>Increase X</button>
                <span className='font-bold text-xl'>{x}</span>
            </div>

            <div>
                <button className='p-2 bg-green-500' onClick={() => setY(y + 1)}>Increase Y</button>
                <span className='font-bold text-xl'>{y}</span>
            </div>

            <div>
                <button className='p-2 bg-green-500' onClick={() => { ref.current = ref.current + 1 }}>Increase Ref</button>
                <span className='font-bold text-xl'>Ref {ref.current}</span>
            </div>

            <button className='m-2 p-2 rounded-lg bg-red-900 text-white font-bold' onClick={() => clearInterval(i.current)}>Stop Printing</button>
        </div>
    )
}

export default Demo2