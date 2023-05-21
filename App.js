
import React from 'react';
import ReactDOM from 'react-dom/client';
/* 
<div id="parent">
  <div id="child">
    <h1> hI i AM H1 tag !!</h1>
    <h2> Hi I am H2 gtag!! </h2>
  </div>
</div>
*/

const Header = ()=> (
  <div className='header'>
    <div className='logo'>Logo</div>
    <input className='search-bar'  placeholder='enter to search' />
    <div className='user-icon'></div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);