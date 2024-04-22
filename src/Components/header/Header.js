import React from 'react'
import "./header.css"



function Header({styledAtom}) {


    const reactDescription = ["Crucial", "Fundamental", "Important", "Vital"]
    console.log(reactDescription.length)

    function getRandomInt(max){
        return Math.floor(Math.random() * (max + 1));
    }


    const description = reactDescription[getRandomInt(reactDescription.length) - 1];
    console.log(description)

    return (
        <>
            <div className='header'>
                <img src={styledAtom} alt='stylized atom' />
                <h1>React Essentials</h1>

                <p>{description} React concepts you will need for almost any
                    app you are going to build
                </p>
            </div>

            {/* <main className='main'>
                <h2>Time to get started.</h2>
            </main> */}
        </>
    )
}

export default Header