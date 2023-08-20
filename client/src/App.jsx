import './App.css';
import TableView from './layouts/TableView';

const items = [
  { id: '123', fullName: '123', phone: '+7 123 456 789', comment: 'comment 123' },
  { id: '123', fullName: '123', phone: '+7 123 456 789', comment: 'comment 123' },
  { id: '123', fullName: '123', phone: '+7 123 456 789', comment: 'comment 123' },
  { id: '123', fullName: '123', phone: '+7 123 456 789', comment: 'comment 123' },
  { id: '123', fullName: '123', phone: '+7 123 456 789',comment: 'comment 123'},
  { id: '123', fullName: '123', phone: '+7 123 456 789',comment: 'comment 123'},
  { id: '123', fullName: '123', phone: '+7 123 456 789',comment: 'comment 123'},
  { id: '123', fullName: '123', phone: '+7 123 456 789',comment: 'comment 123'},
];

function App() {
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>Contact list</h1>
        </div>
        <div className='card-body'>
          <TableView data={ items } />
        </div>
      </div>
   </div>
    
  );
}

export default App;
