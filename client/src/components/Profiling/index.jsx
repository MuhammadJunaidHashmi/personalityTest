

import React, {useEffect, useState} from 'react';
import './catalyst_profiling.css';
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';
import { edit } from "../../redux/actions";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Profiling = () => {
    
  const dispatch = useDispatch();
  // const signupLoading = useSelector((state) => state.auth.user_loading);
  const [btn, setBtn] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const [o,setO]=useState(0);
  const [c,setC]=useState(0);
  const [e,setE]=useState(0);
  const [a,setA]=useState(0);
  const [n,setN]=useState(0);
   
    const [qnumber, setQnumber] = useState(0);
    const [bar, setBar] = useState("0");
  
    const [array, setArray] = useState([]);

    function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }} >
              <LinearProgress variant="determinate"  style={{height:'20px',marginLeft:'20px'}}{...props} />
            </Box>
            <Box sx={{ minWidth: 35 }} >
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }
 
    const handleUpdate = (index, value) => {
    const newArray = [...array];
    newArray[index] = value;
    setArray(newArray);
  };
  const handleAdd = () => {
    for(var i=0;i<=50;i++)
    array[i]=0;
         setArray(array);
};
useEffect(() => {
handleAdd();
// alert("effect")
},[]);
  
      
    const questions = (index,ansName, question) => {
       
        const onOptionChange = e => {
           
           // handleUpdate(index,parseInt(e.target.value));
          //  alert("v"+ansName+e.target.id)
           // document.getElementById(ansName+e.target.value).checked = true;
            var node = document.getElementById(e.target.id);
         //   alert(e.target.id);
    var a = React.ReactDOM.findDOMNode(node);
   
            a.checked=true;;
            //var x = document.getElementById(e.target.name);
            //x.checked = true;
          }
        return (
            <div class="card">
                <label class="questions">{question}</label>
                    <div class = "ans" >
                        <input type="radio"name={ansName} id={ansName+"1"} value="1" onChange={onOptionChange}/>
                        <input type="radio"name={ansName} id={ansName+"2"} value="2" onChange={onOptionChange}/>
                        <input type="radio"name={ansName} id={ansName+"3"} value="3" onChange={onOptionChange}/>
                        <input type="radio"name={ansName} id={ansName+"4"} value="4" onChange={onOptionChange}/>
                        <input type="radio"name={ansName} id={ansName+"5"} value="5" onChange={onOptionChange}/>
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
                {questions(1,"ans1", "I am the life of the party.")}
                {questions(2,"ans2", "I feel little concern for others.")}
                {questions(3,"ans3", "I am always prepared.")}
                {questions(4,"ans4", "I get stressed out easily.")}
                {questions(5,"ans5", "I have a rich vocabulary.")}
                {questions(6,"ans6", "I don't talk alot.")}
                {questions(7,"ans7", "I am interested in people.")}
                {questions(8,"ans8", "I leave my belongings around.")}
                {questions(9,"ans9", "I am relaxed most of the time.")}
                {questions(10,"ans10", "I have difficulty understanding abstract ideas.")}
            </div>
        );
    }
    const [fun, setFun] = useState(q1());
    const q2 = () => {
    return (
        <div>        
            {questions(11,"ans11", "I feel comfortable around people.")}
            {questions(12,"ans12", "I insult people.")}
            {questions(13,"ans13", "I pay attention to details.")}
            {questions(14,"ans14", "I worry about things.")}
            {questions(15,"ans15", "I have a vivid imagination.")}
            {questions(16,"ans16", "I keep in the background.")}
            {questions(17,"ans17", "I sympathize with others' feelings.")}
            {questions(18,"ans18", "I make a mess of things.")}
            {questions(19,"ans19", "I seldom feel blue.")}
            {questions(20,"ans20", "I am not interested in abstract ideas.")}
        </div>
    );
    }
    
    const q3 = () => {
        return (
            <div>
                {questions(21,"ans21", "I start conversations.")}
                {questions(22,"ans22", "I am not interested in other people's problems.")}
                {questions(23,"ans23", "I get chores done right away.")}
                {questions(24,"ans24", "I am easily disturbed.")}
                {questions(25,"ans25", "I have excellent ideas.")}
                {questions(26,"ans26", "I have little to say.")}
                {questions(27,"ans27", "I have a soft heart.")}
                {questions(28,"ans28", "I often forget to put things back in their proper place.")}
                {questions(29,"ans29", "I get upset easily.")}
                {questions(30,"ans30", "I do not have a good imagination.")}
            </div>
        );
        }
    
    const q4 = () => {
    return (
        <div>
            {questions(31,"ans31", "I talk to a lot of different people at parties.")}
            {questions(32,"ans32", "I am not really interested in others.")}
            {questions(33,"ans33", "I like order.")}
            {questions(34,"ans34", "I change my mood a lot.")}
            {questions(35,"ans35", "I am quick to understand things.")}
            {questions(36,"ans36", "I don't like to draw attention to myself.")}
            {questions(37,"ans37", "I take time out for others.")}
            {questions(38,"ans38", "I shirk my duties.")}
            {questions(39,"ans39", "I have frequent mood swings.")}
            {questions(40,"ans40", "I use difficult words.")}
        </div>
    );
    }
    
    const q5 = () => {
        return (
            <div>
                {questions(41,"ans41", "I dont' mind being the center of attention.")}
                {questions(42,"ans42", "I feel others' emotions.")}
                {questions(43,"ans43", "I follow a schedule.")}
                {questions(44,"ans44", "I get irritated esily.")}
                {questions(45,"ans45", "I spend time reflecting on things.")}
                {questions(46,"ans46", "I am quiet around strangers.")}
                {questions(47,"ans47", "I make people feel at ease.")}
                {questions(48,"ans48", "I am exacting in my work.")}
                {questions(49,"ans49", "I often feel blue.")}
                {questions(50,"ans50", "I am full of ideas.")}
            </div>
        );
    }

   
  function onclicknext(){

 


    if(qnumber===0)

    { 
       
        for(var i =1;i<=10;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                          document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        setFun(q2());
        setQnumber(qnumber+1);
        for(var i =11;i<=20;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i-10)+array[i]).checked=true;
  
    }
    if(qnumber===1)
    {
      
      
        for(var i =11;i<=20;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                          document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        setFun(q3());
        setQnumber(qnumber+1);
      
        for(var i =21;i<=30;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i-10)+array[i]).checked=true;

    }
    if(qnumber===2)
    {
        for(var i =21;i<=30;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                          document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        setFun(q4());
        setQnumber(qnumber+1);
        for(var i =31;i<=40;i++)
             if(array[i]!=0)     
                    document.getElementById("ans"+(i-10)+array[i]).checked=true;

    }
    if(qnumber===3)
    {
        for(var i =31;i<=40;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                          document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        setFun(q5());
        setQnumber(qnumber+1);
        for(var i =41;i<=50;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i-10)+array[i]).checked=true;

    }
    if(qnumber===4)
    {
        if(btn)
        {
        for(var i =41;i<=50;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                         // document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }

        var e=20;
        var a=14;
        var c=14;
        var n=38;
        var o=8;
        
        for(var i =1;i<=50;i++)
        { //alert(array[i]);
                if((i-1)%5==0)
                {
                    if(i%2==0)
                        e=e-array[i];
                    else
                        e=e+array[i];
                }
            if((i-2)%5==0)
            {
                if(i%2==0)
                {
                    if(i==42)
                         a=a+array[i];
                    else
                        a=a-array[i]
                }
                else
                    a=a+array[i];
            }
            if((i-3)%5==0)
            {
                if(i%2==0)
                {
                    if(i==48)
                         a=a+array[i];
                    else
                        a=a-array[i]
                }
                else
                    c=c+array[i];
            }
            if((i-4)%5==0)
            {
                if(i==9||i==19)
                     n=n+array[i];
                else               
                    n=n-array[i];
            }
            if(i%5==0)
            {
                if(i==10||i==20)
                     n=n-array[i];
                else               
                    n=n+array[i];
            }
           

        }
        var total = parseInt(e+a+c+n+o);
        setE(parseInt((e/total)*100));
        setA(parseInt((a/total)*100));
        setC(parseInt((c/total)*100));
        setN(parseInt((n/total)*100));
        setO(parseInt((o/total)*100));
        setBtn(!btn);
       
    }
    
    if(!btn)
    
    formik.handleSubmit();
       
    }
    getProgress();
      
}
function getProgress()
{
    var progress=0;
    for(var i =1;i<=50;i++)
    {
        
        if(array[i]!=0)
        {
            progress++;
        }

    }
    setBar((progress/50)*100);
}

const formik = useFormik({
    initialValues: {
      _id: user?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      education: user?.education,
      interest: user?.interest,
      skills: user?.skills,
      points:user?.points,
      avatar: user?.avatar,
      report:{o,c,e,a,n},
      
    },
    onSubmit: (values, actions) => {
        if (true) {
            values.report.a=a;
            values.report.e=e;
            values.report.o=o;
            values.report.c=c;
            values.report.n=n;
            values.points=values.points+700;
          //  alert("e%:"+  e+"  a:"+ a+"  c:"+ c+"  o:"+o+"  n%:"+ n );
        function alterFormToAPIResult(error, success) {
        }
        dispatch(edit(values, alterFormToAPIResult));
       
        window.location.replace("/");

        }
    },
  });
function onclickback(){
    

    if(qnumber===1)
    {
        for(var i =11;i<=20;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        for(var i =1;i<=10;i++)
             if(array[i]!=0)
                   document.getElementById("ans"+(i+10)+array[i]).checked=true;

        setFun(q1());
        setQnumber(qnumber-1);
       // document.getElementById("ans115").checked=false
       // alert(document.getElementById("ans115").checked==false)
     
    }
    if(qnumber===2)
    {
        for(var i =21;i<=30;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
    
        for(var i =11;i<=20;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i+10)+array[i]).checked=true;
 
        
        setFun(q2());
        setQnumber(qnumber-1);
    }
    if(qnumber===3)
    {
        for(var i =31;i<=40;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        for(var i =21;i<=30;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i+10)+array[i]).checked=true;
      
        setFun(q3());
        setQnumber(qnumber-1);
    }
    if(qnumber===4)
    {
        setBtn(true);
        for(var i =41;i<=50;i++)
        {
            for(var j=1;j<=5;j++)
            {
                if(document.getElementById("ans"+i+j).checked==true)
                {
                  array[i]=j;
                  setArray(array);
                        // handleUpdate(i,j);
                document.getElementById("ans"+i+j).checked=false
                }               
            }  
        }
        for(var i =31;i<=40;i++)
             if(array[i]!=0)
                    document.getElementById("ans"+(i+10)+array[i]).checked=true;
        
        setFun(q4());
        setQnumber(qnumber-1);
    }
    getProgress();
}

 return (
        <div>
        <Box sx={{ width: '100%'  }} size={40} style={{marginTop:"30px"}}>
      <LinearProgressWithLabel value={bar} />
    </Box>

    <div class="stage_number">Stage {qnumber+1}
        <h2 class="disagree" style={{display:'flex'}}>Disagree &emsp;&emsp; Neutral &emsp; &emsp;  Agree</h2> 
            
    </div>

    <div class="q"  style={{width:"100%",height:"50%"}}>
        {fun}
        <div style={{ textDecoration: "none",padding:'30px', justifyContent:'center',alignItems:'flex-end',display:'flex'}}>
    {btn? <NavLink to={qnumber?"/dash/catalyst_profiling":"/dash/starting_page"} style={{ textDecoration: "none"}}>
        <Button variant="outlined" style={{color: 'black',border:'black',backgroundColor:'rgb(205, 174, 141)', fontSize:'2vw'}}  
         onClick={onclickback}>
        back
          </Button>
          </NavLink>:""}
          &emsp;&emsp;
    <NavLink to="#" style={{ textDecoration: "none",}}>
        <Button variant="outlined" id="submitBtn" style={{ color: 'black',border:'black',backgroundColor:(btn)?'rgb(205, 174, 141)':'rgba(25,118,210,255)', fontSize:'2vw'}} 
        onClick={onclicknext}

        >

        {btn ? "next" : "Finish"}
        
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


