import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//     type: 'a' ,
//     props: {
//        href: "https://googl.com",
//        target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const reactElement   = React.createElement(
    'a' ,
    {href: "https://google.com" , target: 'blank'},
    'click me to visit'

)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
 
)
