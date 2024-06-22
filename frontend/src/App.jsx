import { TanstackProvider } from './providers/Tanstack.jsx';
import { ReactRouterProvider } from './providers/ReactRouter.jsx';
import './App.css';

function App() {

  return (
    <TanstackProvider>
      <ReactRouterProvider/>
    </TanstackProvider>
  )
}

export default App
