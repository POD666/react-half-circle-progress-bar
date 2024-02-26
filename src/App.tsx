import './App.css';
import { HalfCircleProgressBar } from './HalfCircleProgressBar';

function App() {
  const demo = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div className="App">
        { 
          demo.map(
            (progress) => 
              <HalfCircleProgressBar progress={progress} text={`${progress} of 100`} /> 
          ) 
        }
    </div>
  );
}

export default App;
