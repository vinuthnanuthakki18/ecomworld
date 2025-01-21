import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import AddressSelection from './AddressSelection';
import Login from './Login';

function ecom() {
  return (
    <div className="ecom">
      <Router>
        <Routes>
          <Route path="/checkout" element={
              <>
            <Header/>
            <Checkout/>
            </>}/>

            <Route path="/login" element={
              <>
            <Login/>
            </>}/>

          <Route path="/" element={
              <>
                <Header />
                <Home />
                <AddressSelection/>
              </>
          }/>

        </Routes>
      </Router>
    </div>
  );
}

export default ecom;