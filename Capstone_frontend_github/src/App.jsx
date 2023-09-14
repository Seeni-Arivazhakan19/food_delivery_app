import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/navFooter/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import HomePage from './Components/webpages/Homepage'
import Login from './Components/loginSignup/Login'
import Signup from './Components/loginSignup/Signup'
import Rlogin from '../src/Components/loginSignup/Rlogin'
import Rsignup from '../src/Components/loginSignup/Rsignup'
import About from './Components/webpages/About';
import Userdashboard from './Components/dashboards/Userdashboard';
import Hoteldashboard from './Components/dashboards/Hoteldashboard';
import Contact from './Components/webpages/Contact';
import Orders from './Components/webpages/Orders';
import History from './Components/webpages/History';
import Update from './Components/webpages/Cupdate';
import Addmenu from '../src/Components/RestaurantPages/Addmenu';
import UpdateMenu from './Components/RestaurantPages/UpdateMenu';

function App() {

  return (
    <>

      <div className="container">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Signup />} />
        <Route path = "/Rlogin" element = {<Rlogin />} />
        <Route path = "/Rsignup" element = {<Rsignup />} />
        <Route path = "/about" element = {<About />}/>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "/user-dashboard" element = {<Userdashboard />}/>
        <Route path = "/restaurant-dashboard" element = {<Hoteldashboard />}/>
        <Route path = "/orders" element = {<Orders />}/>
        <Route path = "/history" element = {<History />}/>
        <Route path = "/update" element = {<Update />}/>
        <Route path = "/menu-details" element = {<Addmenu />}/>
        <Route path = "/update-menu/:menu_id" element = {<UpdateMenu />}/>


      </Routes>
      </Router>
      </div>
      <Footer/>
    </>
  )
}

export default App
