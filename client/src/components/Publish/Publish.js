import Create from './publishComponents/Create';
import './Publish.css';
import Navbar from '../Header/Navbar';

function Publish() {
  return (
    
    <div className="App">
       <Navbar/>   
        <div className="bar">
        <Create/>
        
        </div>
        
      
    </div>
  );
}

export default Publish;
