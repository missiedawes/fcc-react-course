import React from 'react';
import ReactDOM from 'react-dom/client';
import reactIcon from './React-icon.svg';

const page = (
  <div>

  <div>
    <img src={reactIcon} alt=""></img>
  </div>
  <div>
    <div>
      <h1>My awesome website in React</h1>
      <h3>Reasons I should love React</h3>
      <ol>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </div>
  </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);
