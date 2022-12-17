import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

import ReactDOM from 'react-dom';
import  App  from 'components/App';




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
     <App />
 </React.StrictMode>,
document.getElementById('root'));





ReactDOM.render(<App />, document.querySelector('#root')); 