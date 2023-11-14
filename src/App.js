import './App.css';
import JSXRules from './JSXRules.tsx';
import FancyTable from './FancyTable.tsx';
import Multiple from './Multiple.tsx';


function App() {
  return (
    <div className="App">
      <JSXRules text="This is a blockquote with JSX Rules." />
      <h2>Fancy Table</h2>
      <FancyTable n={5}/>
      <Multiple name='Multiple Component' number={4}/>
    </div>
  );
}

export default App;
