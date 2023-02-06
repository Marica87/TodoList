
import './App.css';
import planner from './tdl12.jpg';
import td from './tdl22.jpg'
import { TodoList } from './Todolist';

function App() {
  return (
    <div className='app' >
      <div className='container'>

      <img className='img-todo' src={td} alt="plan2" width="250px" />
      </div>
      <div className='container'>
      <h1>TO DO LIST</h1>
      </div>
      <TodoList />
      <div className='containertwo'>
      <img className='img-todo' src={planner} alt="plan" width="200px" />
      </div>
     
   
      
      
    </div>
  );
}

export default App;
