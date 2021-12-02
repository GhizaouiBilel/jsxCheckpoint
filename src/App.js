import 'bootstrap/dist/css/bootstrap.min.css';
import "./image/cat.jpg";
import Image from "./image/cat.jpg";
import HHHHHH from "./HHHHHH";
function App() {
  return (
    <div className="App" style={{background:"darkblue "}}>
      <HHHHHH />
        <h1 class="title red" style={{color:"skyblue"}}>CAAAAAAAAAAAATS</h1>
        <div   >
        <img src={Image} alt="" className="container col-md-4"/>
        <img src="/cat2.jpg" alt="myimage" className="container col-md-6"/>
        <video src="Nyan Cat 10 seconds.mp4"width="600" height="300" controls="controls" autoplay="true" />
      </div>
      <footer style={{background:"darkblue"}}>
      <h1 style={{color:"white"}}>copyright reseved all rights reserved  ©</h1>
      </footer>
    </div>
  );
}

export default App;
