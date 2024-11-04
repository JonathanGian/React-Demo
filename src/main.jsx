import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* These are the varibles */
const name = "Jonathan Gian"
const first_webpage = 2024
const demo = 
(<div>
  <h1>Hello World! My name is {name}</h1>
  <p>I have {2024- first_webpage} years of building webpages experience</p>
  </div>)

/*  This is a component */
const Demo = () => {
  return (
    <div>
  <h1>Hello Component! My name is {name}</h1>
  <p>I have {2024- first_webpage} years of building webpages experience</p>
  </div>
  );
};


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>
    
      </StrictMode>
)
