import './App.css';
import NestedLists from './components/NestedLists';
import SwithRender from './components/SwithRender';
import Ternary from './components/Ternary';

function App() {
  return (
    <>
      {/* 1 - rendering with ternary */}
      <div>
        <h2>1 - renderizando com ternário</h2>
        <Ternary condition={true} />
      </div>

      {/* 2 - switch rendering */}
      <div>
        <h2>2 - renderização com swith</h2>
        <SwithRender programming_language='html' />
      </div>

      {/* 3 - nested lists */}
      <div>
        <h2>3 - Listas aninhadas</h2>
        <NestedLists />
      </div>
    </>
  );
}

export default App;
