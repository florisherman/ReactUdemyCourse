import './App.css';
import Header from './Header';
import Footer from './Footer'
import AppBody from './AppBody'

let headerDataString = "Some Header" as string;
let footerData = "Some Footer" as string;

function App() {
  return (
    <div className="App">
     <Header name={headerDataString}></Header>
     <AppBody></AppBody>
     <Footer name={footerData}></Footer>
    </div>
  );
}

export default App;
