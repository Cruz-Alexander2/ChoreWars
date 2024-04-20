import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function App(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div style= {{maxHeight: 200, overflow: 'auto'}}>
        <NumberList numbers={numbers}/>
      </div>
    </div>
  );
}


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li className='scrollList'>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<NumberList numbers={numbers} />);


export default App;