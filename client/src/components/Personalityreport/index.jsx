import React from 'react';
import './catalyst_report.css';
import logo from '../../logo.png';
import report from '../../report.jpg';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";


const Personalityreport = () => {
  const user = useSelector((state) => state.auth.user);

  return (
<div>
<div class="catalyst_report">
         {/* <div class="exit">
                
            
                     <a href="#"><span class="material-symbols-outlined exitButton">Close</span></a>
      
                
            </div> */}
  
  <NavLink to="/dash" style={{backgroundColor:'black' ,width:'100px',height:'100px' } }>
          
<div style={{display:"flex",float:"right"}}>
<Avatar style={{display:"flex" ,backgroundColor:"white",color:'black',margin:'15px'}} alt="X" src="/static/images/avatar/2.jpg" />

</div>
</NavLink>    
            <div class = "catalyst_report-logo">
                {/* <img src={logo} class="" style={{ width: "1.5cm" }} alt="logo" />      */}
                <div src={logo} class="" style={{ width: "1.5cm",height:'1cm' }} alt="logo" >     
            </div>
            </div>
            
            {/* <div class="intro">Your career recommendation is</div> */}
            
           <div class="career_recommendation">
                {/* <div class="poly_box">
                    <div class="poly">
                  
                        <div class="field">Internet Technology</div>
                        <div class="field_description">“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”
-- Bill Gates, Co-founder of Microsoft.</div>
                    </div>
                </div> */}
                <div>
                <img src={report} style={{display:"inline",marginTop:"-80px"}} alt="Italian Trulli"/>
                <div>
                <p style={{display:'flex',float:'inline-start',marginTop:'-320px'}}>
                  <span style={{marginLeft:"100px",fontSize:"28px"}}>
                   {user?.report[0].o}%
                  </span>
                  <span style={{marginLeft:"130px",fontSize:"28px"}}>
                  {user?.report[0].c}%
                  </span>
                  <span style={{marginLeft:"100px",fontSize:"28px"}}>
                  {user?.report[0].e}%
                  </span>
                  <span style={{marginLeft:"120px",fontSize:"28px"}}>
                  {user?.report[0].a}%
                  </span>
                  <span style={{marginLeft:"100px",fontSize:"28px"}}>
                  {user?.report[0].n}%
                  </span>
</p>
                </div>
               
                </div>
                 
                {/* <div class="careers">
                    <ul>
                        <li>{careers("Web")}</li>
                        <li>{careers("programmer")}</li>
                        <li>{careers("ai developer")}</li>
                    </ul>
                </div> */} 
            </div>
           

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

        </div>
        <div style={{alignItems:'center',textAlign:'center',justifyContent:"center", marginTop:"450px",}}>
        <NavLink to="/dash/advice" style={{ textDecoration: "none",}}>
        <Button variant="outlined" style={{ color: 'black',border:'black',backgroundColor:'rgb(205, 174, 141)', fontSize:'1.5vw'}} 
        // onClick={onclicknext}
        >
        View Career Advice
          </Button>
          </NavLink>
          </div>
</div>
  );
};

export default Personalityreport;


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