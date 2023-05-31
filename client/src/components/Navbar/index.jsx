import React from "react";
import "../../homepage_style.css";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

//
import { useSelector } from "react-redux";
import { useContext } from "react";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Button from "react-bootstrap/Button";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout, logoutEveryDevice } from "../../redux/actions";
import { AuthenticationContext } from "../../context/authenticationContext";
import { closeNotify } from "../../redux/features/notify/notifySlice";


const pages = ["Home", "Catalyst Profiling", "Catalyst Report", "Connect"];
const links = [
  "/dash",
  "/dash/starting_page",
  "/dash/catalyst_report",
  "/dash/matching_page",
];
const settings = ["Profile", "Logout"];

function NavBar() {
  const user = useSelector((state) => state.auth.user);
 
  const dispatch = useDispatch();
  const { userIsAuthenticated } = useContext(AuthenticationContext);

  return (
 <>
      {/* <Navbar.Brand as={Link} to="/" tabIndex="1">
        Capital
      </Navbar.Brand> */}
      {userIsAuthenticated ? (
        <AppBar position="static" style={{ background: "#fffff3" }}>
        <Container maxWidth="xl" style={{color:'black'}}>
          <Toolbar disableGutters s>
          <NavLink to="/dash">
            <Typography
              variant="h6"
              noWrap
              component="a"
              
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              
            >
            
              <img src={logo} style={{ width: "1.5cm" }} alt="logo" />
              
            </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
                class="list-items"
              >
                <MenuIcon />

                <div class="dropdown">
                  <div style={{ listStyleType: "none"}} >
                    {pages.map((page, index) => (
                      <>
                       <NavLink to={links[index]}>
                        <Button>
                      <li style={{padding:"5px",width:"100px" }}>
                       {page}
                     
                      </li> 
                      </Button> 
                      </NavLink>
                    
                      </>
                    ))}
                  </div>
                </div>
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
              {pages.map((page, index) => (
                <NavLink to={links[index]} style={{ textDecoration: "none" }}>
                  <Button
                    key={page}
                    //  onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
           
                <IconButton
                
                  class="list-items"
                  //onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                 
                  <Avatar style={{display:"flex"}}  src= {(user?.avatar)?`https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=${user?.avatar}`:"../u.png"} />


                  <div
                    class="dropdown"
                    style={{  left: -60 ,display:"flow" }}
                  >
                    <div style={{ listStyleType: "none" }}>
                    <NavLink to="/dash/profile">
                      <Button>
                    <li style={{padding:"5px",width:"120px",height:"40px" }}>
                        Profile
                      </li>
                      </Button>
                      </NavLink>
                 
                      <NavLink to="/login">
                      <Button
                  
              
              onClick={() => {
                dispatch(closeNotify());
                dispatch(logout());
              }}
              // tabIndex="1"
            > 
                      <li style={{padding:"5px",width:"120px",height:"40px" }}>
                     
                Log Out
              
                      </li>
                      </Button></NavLink>
                    </div>
                  </div>
                  
                </IconButton>
            </Box>
          </Toolbar>
        </Container>
{/*       
        <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="px-2 mb-2 justify-content-between"
      >
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="My Account"
                id="collasible-nav-dropdown"
                tabIndex="1"
              >
                <NavDropdown.Item as={Link} to="/dash/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#sth" tabIndex="1">
                Something here
              </Nav.Link>

              <hr />
              <NavDropdown
                title="Security"
                id="collasible-nav-dropdown-2"
                tabIndex="1"
              >
                <Button
                  as={NavDropdown.Item}
                  onClick={() => {
                    dispatch(closeNotify());
                    dispatch(logoutEveryDevice());
                  }}
                >
                  Log Out From All Devices
                </Button>
              </NavDropdown>

              <Button
                as={Nav.Item}
                onClick={() => {
                  dispatch(closeNotify());
                  dispatch(logout());
                }}
                tabIndex="1"
              >
                Log Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </>
           </Navbar> */}
           </AppBar>
      ) : (
        // <Button
        //   as={Link}
        //   to="/login"
        //   className="text-uppercase fw-bolder"
        //   variant="outline-dark"
        //   tabIndex="1"
        // >
        //   Sign in
        // </Button>
        <></>
      )}
 </>
  );
}

export default NavBar;

