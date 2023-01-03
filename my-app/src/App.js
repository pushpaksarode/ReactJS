import './App.css';
import Navbar from'./components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar heading='TextUtilsPro' about='About TU'/>
    <div className="container">
      <TextForm heading="Enter Text to Analyze"/>
    </div>
    </>
  );
}

export default App; 