import React from 'react';
import ReactDOM from 'react-dom/client';



const myFirstElement=
<div>
<h1>Hello World</h1>
<p>This is Ayesha Asad</p>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  myFirstElement
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
);


