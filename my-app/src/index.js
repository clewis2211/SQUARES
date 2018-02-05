import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import './test.js';
// import app from './containers/app.jsx';
import './components/react.component';
import './containers/app.jsx';

const App = () => {
return <h1>Hello World!</h1>;
}

// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }

ReactDom.render(<App/>, document.getElementById('root'));

  


