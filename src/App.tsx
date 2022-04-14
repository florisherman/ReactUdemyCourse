import './App.css';
import Header from './Header';
import Footer from './Footer'
import AppBody from './AppBody'
import TodoList from './TodoList';

let headerDataString = "Some Header" as string;
let footerData = "Some Footer" as string;

function App() {
  return (
    <div className="App">
     <Header name={headerDataString}></Header>
     <AppBody></AppBody>
     <TodoList></TodoList>
    </div>
  );
}

export default App;
