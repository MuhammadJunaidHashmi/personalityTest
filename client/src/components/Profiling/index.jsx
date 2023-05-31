

import React, {Component,useState} from 'react';
import './catalyst_profiling.css';

import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';


const Profiling = () => {
    const [qnumber, setQnumber] = useState(0);
    const [fun, setFun] = useState(q1());
    
function onclicknext(){
    if(qnumber==0)
    {
        setFun(q2());
        setQnumber(qnumber+1);
    }
    if(qnumber==1)
    {
        setFun(q3());
        setQnumber(qnumber+1);
    }
    if(qnumber==2)
    {
        setFun(q4());
        setQnumber(qnumber+1);
    }
    if(qnumber==3)
    {
        setFun(q5());
        setQnumber(qnumber+1);
    }
      
}
function onclickback(){
    
    if(qnumber==1)
    {
        setFun(q1());
        setQnumber(qnumber-1);
    }
    if(qnumber==2)
    {
        setFun(q2());
        setQnumber(qnumber-1);
    }
    if(qnumber==3)
    {
        setFun(q3());
        setQnumber(qnumber-1);
    }
    if(qnumber==4)
    {
        setFun(q4());
        setQnumber(qnumber-1);
    }
      
}
    return (
        <div>
       

    <div class="stage_number">Stage {qnumber+1}
        <h2 class="disagree" style={{display:'flex'}}>Disagree &emsp;&emsp; Neutral &emsp; &emsp;  Agree</h2> 
            
    </div>

    <div class="q">
        {fun}
        <div style={{ textDecoration: "none",padding:'30px', justifyContent:'center',alignItems:'flex-end',display:'flex'}}>
    <NavLink to={qnumber?"/dash/catalyst_profiling":"/dash/starting_page"} style={{ textDecoration: "none"}}>
        <Button variant="outlined" style={{color: 'black',border:'black',backgroundColor:'rgb(205, 174, 141)', fontSize:'2vw'}}  
         onClick={onclickback}>
        back
          </Button>
          </NavLink>
          &emsp;&emsp;
    <NavLink to="#" style={{ textDecoration: "none",}}>
        <Button variant="outlined" style={{color: 'black',border:'black',backgroundColor:'rgb(205, 174, 141)', fontSize:'2vw'}} 
        onClick={onclicknext}
        >
        next
          </Button>
          </NavLink>
          </div>
    </div>
    
    {/* <section class="submit">
      <div class="submit_button" onclick="displayAnsValue()">
        <NavLink to="/starting_page" class="submit_b1">Submit</NavLink>
      </div>
    </section> */}

    <div id="result"> </div>
        
    </div>
    
  );
};

export default Profiling;




  const questions = (ansName, question) => {
    return (
        <div class="card">
            <label class="questions">{question}</label>
                <div class = "ans" >
                    <input type="radio"name={ansName} id={ansName} value="1"/>
                    <input type="radio"name={ansName} id={ansName} value="2"/>
                    <input type="radio"name={ansName} id={ansName} value="3"/>
                    <input type="radio"name={ansName} id={ansName} value="4"/>
                    <input type="radio"name={ansName} id={ansName} value="5"/>
                </div><br /><br />
        </div>

    );
  }

    // function displayAnsValue() {
    //     var ele = document.getElementsByName('ansName');
        
    //     for(i = 0; i < ele.length; i++) {
    //         if(ele[i].checked)
    //         document.getElementById("result").innerHTML
    //                 = "AnsValue: "+ele[i].value;
    //     }
    // }

const q1 = () => {
    return (
        <div>
            {questions("ans1", "I am the life of the party.")}
            {questions("ans2", "I feel little concern for others.")}
            {questions("ans3", "I am always prepared.")}
            {questions("ans4", "I get stressed out easily.")}
            {questions("ans5", "I have a rich vocabulary.")}
            {questions("ans6", "I don't talk alot.")}
            {questions("ans7", "I am interested in people.")}
            {questions("ans8", "I leave my belongings around.")}
            {questions("ans9", "I am relaxed most of the time.")}
            {questions("ans10", "I have difficulty understanding abstract ideas.")}
        </div>
    );
}
  
const q2 = () => {
return (
    <div>        
        {questions("ans11", "I feel comfortable around people.")}
        {questions("ans12", "I insult people.")}
        {questions("ans13", "I pay attention to details.")}
        {questions("ans14", "I worry about things.")}
        {questions("ans15", "I have a vivid imagination.")}
        {questions("ans16", "I keep in the background.")}
        {questions("ans17", "I sympathize with others' feelings.")}
        {questions("ans18", "I make a mess of things.")}
        {questions("ans19", "I seldom feel blue.")}
        {questions("ans20", "I am not interested in abstract ideas.")}
    </div>
);
}

const q3 = () => {
    return (
        <div>
            {questions("ans21", "I start conversations.")}
            {questions("ans22", "I am not interested in other people's problems.")}
            {questions("ans23", "I get chores done right away.")}
            {questions("ans24", "I am easily disturbed.")}
            {questions("ans25", "I have excellent ideas.")}
            {questions("ans26", "I have little to say.")}
            {questions("ans27", "I have a soft heart.")}
            {questions("ans28", "I often forget to put things back in their proper place.")}
            {questions("ans29", "I get upset easily.")}
            {questions("ans30", "I do not have a good imagination.")}
        </div>
    );
    }

const q4 = () => {
return (
    <div>
        {questions("ans31", "I talk to a lot of different people at parties.")}
        {questions("ans32", "I am not really interested in others.")}
        {questions("ans33", "I like order.")}
        {questions("ans34", "I change my mood a lot.")}
        {questions("ans35", "I am quick to understand things.")}
        {questions("ans36", "I don't like to draw attention to myself.")}
        {questions("ans37", "I take time out for others.")}
        {questions("ans38", "I shirk my duties.")}
        {questions("ans39", "I have frequent mood swings.")}
        {questions("ans40", "I use difficult words.")}
    </div>
);
}

const q5 = () => {
    return (
        <div>
            {questions("ans41", "I dont' mind being the center of attention.")}
            {questions("ans42", "I feel others' emotions.")}
            {questions("ans43", "I follow a schedule.")}
            {questions("ans44", "I get irritated esily.")}
            {questions("ans45", "I spend time reflecting on things.")}
            {questions("ans46", "I am quiet around strangers.")}
            {questions("ans47", "I make people feel at ease.")}
            {questions("ans48", "I am exacting in my work.")}
            {questions("ans49", "I often feel blue.")}
            {questions("ans50", "I am full of ideas.")}
        </div>
    );
}

  

