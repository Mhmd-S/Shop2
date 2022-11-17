import React from 'react';
import '../Styles/Home.css'
import {Link} from 'react-router-dom';


const Home = () => {
    return(
        <div className='Home-Container'>
            <h1 className='Home-Title'>NOTHING IS IMPOSSIBLE</h1>
            <h4 className='Home-SubTitle'>In the footwear business since yesterday.</h4>
            <Link to="/Shop"><button className='Home-Button'>EXPLORE NOW</button></Link>
        </div>
    )
}

export default Home;