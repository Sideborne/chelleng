import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Message() {
  return (
    <div className='msg'>
      <Welcome name="Slava" />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Message />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));