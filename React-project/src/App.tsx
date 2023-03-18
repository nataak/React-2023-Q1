import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
