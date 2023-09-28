import './App.css';
import Ternary from './components/Ternary';

function App() {
  return (
    <>
      {/* 1 - rendering with ternary */}
      <div>
        <h2>1 - rendering with ternary</h2>
        <Ternary condition={true} />
      </div>
    </>
  );
}

export default App;
