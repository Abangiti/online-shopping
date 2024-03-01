
import React from 'react';

import './home.css'
import h3 from './assets/h3.png';
import h4 from './assets/h4.png';
import h6 from './assets/h6.png';
import h7 from './assets/h7.png';
import bwa from './assets/bwa.png';
import head from './assets/head.png';
import boAt from './assets/boAt.png';


export default function Home() {
        return (
            <> 
        <div className='main'>
            <div class='wel'>
            
             <div id="welcome">
             <h1>Shop Your HeadSet</h1>
             <h2 >Categories</h2>
             </div>
             </div>
             <div class="we">
             <div id="welll">
                <h2 id="wei">Apple Headset</h2>
                 <img className="h3-image" src={h3} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Razer Headset</h2>
                <img className="h3-image" src={h4} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Sony Headset</h2>
                <img className="h3-image" src={h6} alt="My Image" />
                </div>
             </div>

             <div className='new'><h2>Our Latest arrivals</h2></div>

             <div class="we">
             <div id="welll">
                <h2 id="wei">Apple Headset</h2>
                 <img className="h3-image" src={h7} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Razer Headset</h2>
                <img className="h3-image" src={bwa} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Sony Headset</h2>
                <img className="h3-image" src={head} alt="My Image" />
                </div>
             </div>


             <div className='new'><h2>Our Products</h2></div>

             <div class="we">
             <div id="welll">
                <h2 id="wei">Apple Headset</h2>
                 <img className="h3-image" src={h3} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Razer Headset</h2>
                <img className="h3-image" src={boAt} alt="My Image" />
                </div>
             <div id="welll">
             <h2 id="wei">Sony Headset</h2>
                <img className="h3-image" src={head} alt="My Image" />
                </div>
             </div>


             </div>
             
             
        </>
        );
        };
