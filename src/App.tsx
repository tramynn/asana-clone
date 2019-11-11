import React from 'react';
import './styles/App/App.css';
import routes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
