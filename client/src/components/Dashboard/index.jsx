
import '../../homepage_style.css';

import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux"; 

const Dashboard = () => {
  const user = useSelector((state) => state?.auth?.user);
  return (
    <div className="mt-2">
      {/* <span className="text-muted">Welcome Dear {user?.firstName }</span> */}
      {/* <div
        className="border border-1 border-success rounded-1 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#F5F5F5", minHeight: 500 }}
      >
        <div>
          <div className="text-muted">You are viewing</div>
          <div className="display-6 text-success">Dashboard</div>
        </div>
      </div> */}
       <div class = "homepage-content">
         <h1 class = "content-text">
           <span class = "ct1">
             Understand yourself better with Catalyst Match
           </span>
           <br />
           <span class = "ct2">
             Take our personality test now to find out your personality type and what career paths are suitable for you!
           </span>
           <br /><br />
         </h1>

         <NavLink to="/dash/starting_page" style={{ textDecoration: "none" }}>
        <Button variant="outlined" style={{color: 'white',border:'black',backgroundColor:'#ac856e', fontSize:'1vw'}}  >
           Take personality test now
          </Button>
          </NavLink>
                    
      </div>
    </div>
  );
};

export default Dashboard;
