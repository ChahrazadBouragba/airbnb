import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// ? REVISION ..

const nums = [1, 2, 3, 4, 5, 6, 7]

const squared = nums.map((number) => {
  return number * number
})

console.log(squared)



const names = ["alice", "sam", "vironica", "marianne"]

const capitalize = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalize)



const rundomNames = ["Joy", "Tragidy", "Melancony"]

const jsx = rundomNames.map( name => `<p>${name}<p>`)
console.log(jsx)

// ? END OF REVISION





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
