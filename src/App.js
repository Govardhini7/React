import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message  from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      <>
      {/* <Greet name="Arav" age="12" ><p>paragraph text</p></Greet>
      <Greet name="raj" age="13" ></Greet>
      <Greet name="mimi" age="11" ></Greet>
      <Welcome name="Arav" age="12" ><button>Click Me</button></Welcome>
      <Welcome name="raj" age="14" ></Welcome>
      <Welcome name="mimi" age="15" ></Welcome>
      <Hello/>
      <Message />
      <Counter />  */}
      <FunctionClick />
      <ClassClick />
      </>
      }
    </div>
  );
}

export default App;
