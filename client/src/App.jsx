import './App.css';
import TableView from './layouts/TableView';

function App() {
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>Contact list</h1>
        </div>
        <div className='card-body'>
          <TableView />
        </div>
      </div>
   </div>
    
  );
}

export default App;
