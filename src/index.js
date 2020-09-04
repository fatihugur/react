/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myfirstelement = <h1>Welcome my first react page!</h1>
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Fatih</td>
    </tr>
    <tr>
      <td>Yavuz</td>
    </tr>
  </table>
);
const mytitle = <h3>Everybody kan learn React easly</h3>
const myopinion = <h3>Because React is {5 + 5} times beter with JSX and other syntax</h3>

ReactDOM.render(<p>Hallo I am Fatih</p>, document.getElementById('sandy'));
ReactDOM.render(myelement, document.getElementById('root2'));
ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(mytitle, document.getElementById('title'));
ReactDOM.render(myopinion, document.getElementById("opinion"));
ReactDOM.render(<p>Copyright, 2020</p>, document.getElementById("copyright"));
