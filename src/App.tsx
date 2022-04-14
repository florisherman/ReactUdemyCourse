import './App.css';
import Header from './Header';
import MultiForm from './MultiForm'
import TodoList from './TodoList';

let headerDataString = "Udemy Tutorial App" as string;
function App() {
  return (
    <div className="App">
     <Header name={headerDataString}></Header>
     <MultiForm></MultiForm>
     <TodoList></TodoList>
    </div>
  );
}

export default App;
