
import './App.css';
import React, {useState , useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todoList , setTodoList] = useState([{}])
  const [title ,setTitle] = useState('')
  const [desc , setDesc] = useState('')

  // Read all todos
  useEffect(() => {
    axios.get('https://localhost:8000/api/todo')
    .then(res => {
      setTodoList(res.data)
    })
  });

  //Post a todo

  const addTodoHandler = () => {
    axios.post('https://localhost:8000/api/todo/' , {'title':
    title , 'description':desc})
    .then(res => console.log(res))
  };


  

  return (
    <div className="App">
      <div className="list-group-item justify-content-center
      align-items-center mx-auto" style={{ width: "400px",
      backgroundColor: "white", marginTop: "15px" }}>
      <h1 className="card text-white bg-primary mb-1" 
      styleName={{ maxWidth: "20rem" }}>Task Manager</h1>
      <h6 className= "card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
      <h5 className=" card text-white bg-dark mb-3"> Gorev Ekleyin</h5>
        <span className="card-text">
        <input className="mb-2 form-control titleIn"
        placeholder='Gorev Girin'/> 
        <input className="mb-2 form-control desIn"
        placeholder="Gorev Aciklamasi"/>
        <button className="btn btn-outline-primary mx-2 mb-5" style={
          {'borderRadius':'50px',"fontWeight":"bold"}}>Gorevi Kaydet</button>
        </span>
      <h5 className="card text-white bg-dark mb-3"> Kayitli Gorevlerin</h5>
      <div>
        {/* Todo items -external component */}
      </div>

      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0"> Made with love by Meric</h6>
      </div>
    </div>
  );
}


export default App;
