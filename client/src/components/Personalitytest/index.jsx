import React from 'react';
import '../../homepage_style.css';
import './starting_page_style.css';
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';

import "../../homepage_style.css";
import "../auth/style.css";


const Personalitytest = () => {


  return (
<div>
<div class="starting_page">
        <span class="title">
          <h1 class="title1">Catalyst Profiling</h1>
          <br />
          <span class="title2">Complete Catalyst Profiling to learn your personality type, <br />collect points and get career advise!</span>
        </span>

        <div class="stages">
          <div class="line">
            {dot(1,500)}
            {dot(2,550)}
            {dot(3,600)}
            {dot(4,650)}
            {dot(5,700)}
             
        
          </div>
          <NavLink to="/dash/catalyst_profiling" style={{ textDecoration: "none", lineHeight: '15cm', marginLeft:'12cm' }}>
        <Button variant="outlined" style={{color: 'black',border:'black',backgroundColor:'rgb(205, 174, 141)', fontSize:'2vw'}}  >
        Start test
          </Button>
          </NavLink>
        </div>

       

      </div>
</div>
  );
};

export default Personalitytest;


const dot = (number, points) => {
  return (
      <div>
          <span class="dot"><br />Stage<br />
            <span class="number">{number}</span>
              <span class="points"><br /><br />{points} points</span>
          </span>
      </div>
  );
}