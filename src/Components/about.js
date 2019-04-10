import React, {Component} from 'react'
import Links from './links'
import Image from '../Images/image2.jpeg'

class About extends Component{
  render(){
    return(
      <div>
      <Links />
      <div className="container">

        <h3>About Page</h3>
        <img className="bannerPic" src={Image}/>
        <p>This is about page</p>
        <p>Depends where you want the link to go. If it's for
        internal app navigation, then the routing library will
         likely have a component that will do this for
          you, otherwise you will have to just use css to
          style it like a link. But again I would suggest
          making an independent component to do this. – Phil
           Hauser May 17 '17 at 6:42 </p>
      </div>
      </div>
    );
  }
}

export default About
