import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          <h1>Contact list</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>ФИО</th>
                <th scope='col'>Телефон</th>
                <th scope='col'>Комментарий</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <th>ФИО 1</th>
                <th>Телефон 1</th>
                <th>Комментарий 1</th>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <th>ФИО 2</th>
                <th>Телефон 2</th>
                <th>Комментарий 2</th>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <th>ФИО 3</th>
                <th>Телефон 3</th>
                <th>Комментарий 3</th>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <th>ФИО 4</th>
                <th>Телефон 4</th>
                <th>Комментарий 4</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   </div>
    
  );
}

export default App;
