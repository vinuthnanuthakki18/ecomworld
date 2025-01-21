import React, { Component } from "react";
import getProducts from './getProducts'
import Product from './Product';
import './Home.css'
import ecomdelivery from './assets/courier-service-industry.jpg';
import Loadingif from './assets/loading-gif.gif'

class Home extends Component {
    state = {
      prods : []
    };
    componentDidMount = async () =>{
      const fetchedprods = await getProducts();
      this.setState({
        prods : fetchedprods
      });
    };
  
    render() {
      return (
        <div className="home">
          <div className="homepage-img">
            <img src={ecomdelivery} alt="ecomdeliveryagent" className="homeimg" />
            </div>
        <div className="home-prod">
            {this.state.prods.length!==0 ? this.state.prods.map(u=><Product key={u.id} id={u.id} name={u.name} desc={u.description} price={u.price} rating={u.rating} imgurl={u.image}/>) : 
              <img src={Loadingif} alt="Loading" className="loading" style={{margin: 'auto 0', width : '100px'
              }}/>
            }
        </div>
        </div>
        
      );
    }
  }

export default Home;
