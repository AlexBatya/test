import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.scss';

function Card(){
  return (
    <div className="card">
      <h1>Product</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in laudantium nisi! Aspernatur ipsam itaque dolore sunt minus aliquam libero.</p>
      <h3>price:</h3>
    </div>
  )
};



function App(){
  let Cards=[];
  for(let i=0; i<3;i++){
    Cards[i]=Card()
  }
  return (
    <div className="cardFlex">
      {Cards}
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);