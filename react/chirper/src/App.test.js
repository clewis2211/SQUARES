import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const Welcome = (props) => {
//   return (<h1> Hello World</h1>);
// }

// const App = () =>{
//   return(
//     <div>
//       Welcome()
//       </div>
//   )
// }


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

