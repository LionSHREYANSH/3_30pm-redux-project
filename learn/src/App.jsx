import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Appbar from './components/Appbar';
import ProductCards from "./components/ProductCards";
import Cartpage from "./components/Cartpage";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div>
        <Router>
      <Appbar/>
          <Routes>
            <Route path="/" element = {<ProductCards/>}/>
            <Route path='/cartpage' element = {<Cartpage/>}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App