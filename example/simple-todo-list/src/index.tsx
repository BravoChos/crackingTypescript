import React from 'react'
import ReactDom from 'react-dom'

export default function App():JSX.Element {
    const sum =(a: number, b: number):number => a + b
    return (
        <h1>
           Hello {sum(10,8)}
        </h1>
    )
}

const root = document.getElementById('app-root')

ReactDom.render(<App/>, root)