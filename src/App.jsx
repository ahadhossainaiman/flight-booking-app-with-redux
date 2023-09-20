
import './App.css'
import Navber from './component/navber/Navber'
import heroImg from './assets/Hero-Banner.webp';
import InputBooking from './component/InputBooking/InputBooking';
import DashBoard from './component/DashBoard/DashBoard';

function App() {


  return (
    <body style={{backgroundImage:`url(${heroImg})`,marginTop:"-20%"}}>
      <div>
      <Navber/>
      <InputBooking/>
      <DashBoard/>
      </div>
    
     
    </body>
  )
}

export default App
