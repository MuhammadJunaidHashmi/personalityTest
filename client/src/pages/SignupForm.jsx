import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from 'react-router-dom';
import "../homepage_style.css";
import "./auth/style.css";
import Input from "@mui/material/Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { signup } from "../redux/actions";

function Signup() {
  const dispatch = useDispatch();
  const signupLoading = useSelector((state) => state.auth.user_loading);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      education:"",
      interest:"",
      skills:"",
      points: 1500,
      avatar:"",
      report:{"o":"","c":"","e":"","a":"","n":""}
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Password is required"),
      passwordConfirm: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
        education: Yup.string()
        .required("Required")
    }),
    onSubmit: (values, actions) => {
      values.avatar=values.firstName;
      // alert(JSON.stringify(values, null, 2));
      function alterFormToAPIResult(error, success) {
        if (error) {
          actions.setFieldTouched("password", false);
          actions.setFieldValue("password", "");

          actions.setFieldTouched("passwordConfirm", false);
          actions.setFieldValue("passwordConfirm", "");
        }
      }

      dispatch(signup(values, alterFormToAPIResult));
    },
  });

  return (
<div class="float-container" style={{ paddingTop: "30px"}}>
        <h2 >
          Registration Form 
        </h2>
     <form onSubmit={formik.handleSubmit}>
      <div class="float-child" style={{  padding: "100px 160px 160px 0px"}} >
      <div>
      
            <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-key"></i>
                </span>
                <input class="form-input" type="password" placeholder="Password"  autocomplete="off"  required
                  // onChange={(e) => this.setState({ password: e.target.value })}
                  id="password"
            name="password"
            
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           
          />
              </div>
            
              {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}
    
              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-key"></i>
                </span>
                <input class="form-input" type="password" placeholder="Confirm Password"  
                  autocomplete="off"  required
                  id="passwordConfirm"
                  name="passwordConfirm"
               
                  value={formik.values.passwordConfirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  //  onChange={(e) => this.setState({ CPassword: e.target.value })}
                />
              </div>
              {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <Form.Text className="text-danger">
              {formik.errors.passwordConfirm}
            </Form.Text>
          ) : null}
          
            <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input"  type="text" placeholder="Education" autocomplete="off" required 
                    // onChange={(e) => this.setState({ EducationalBackground: e.target.value })}
                    id="education"
                  name="education"
               
                  value={formik.values.education}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                   />
              </div>
              
                   <div className="mb-3">
              {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div> */}
            </div>
    
           </div>
        
      </div>
      
      <div class="float-child "  style={{  padding: "100px 0px 160px 160px"}} >
    
    

      <div >

        <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input" type="text" placeholder="First name" autocomplete="off" required 
                // onChange={(e) => this.setState({ fname: e.target.value })}
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
               
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName ? (
            <Form.Text className="text-danger">
              {formik.errors.firstName}
            </Form.Text>
          ) : null}
     
              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input"  type="text" placeholder="Last name" autocomplete="off" required 
            //  onChange={(e) => this.setState({ lname: e.target.value })}
            id="lastName"
            name="lastName"

            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           
             />
              </div>
     
              {formik.touched.lastName && formik.errors.lastName ? (
            <Form.Text className="text-danger">
              {formik.errors.lastName}
            </Form.Text>
          ) : null}

              <div class="input-field">
                <span class="input-item">
                  <i class="fa-solid fa-user"></i>
                </span>
                <input class="form-input"  type="email" placeholder="Email" autocomplete="off" required 
                  // onChange={(e) => this.setState({ email: e.target.value })}
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                 />
              </div>
              {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : (
            <Form.Text className="text-muted">
              Your email will not be shared.
            </Form.Text>
          )}

              <p style={{color:'gray'}}>
              Already registered ? <NavLink to="/login" style={{ color:"black" }}>
              Sign In
             </NavLink>
           </p>
              <div className="d-grid">
             <br></br>
             <button type="submit" style={{backgroundColor:'rgb(205, 174, 141)',width:"160px",float:"left"}} class="login-button"> Sign Up</button>
   
           </div>
           </div>
     </div>
    
      </form>
         
          </div>



    
  );
}

export default Signup;



{/* <div style={{ maxWidth: 500, marginInline: "auto" }}> */}
      {/* <h2 className="text-uppercase mb-3">Create account</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            id="firstName"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter first name"
          />

          {formik.touched.firstName && formik.errors.firstName ? (
            <Form.Text className="text-danger">
              {formik.errors.firstName}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter last name"
          />

          {formik.touched.lastName && formik.errors.lastName ? (
            <Form.Text className="text-danger">
              {formik.errors.lastName}
            </Form.Text>
          ) : null}
        </Form.Group>
 */}
        {/* <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Email"
          />

          {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : (
            <Form.Text className="text-muted">
              Your email will not be shared.
            </Form.Text>
          )}
        </Form.Group> */}

        {/* <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Password"
          />

          {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
          />

          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <Form.Text className="text-danger">
              {formik.errors.passwordConfirm}
            </Form.Text>
          ) : null}
        </Form.Group> */}

        // <Button variant="primary" type="submit" disabled={signupLoading}>
        //   {signupLoading ? "Loading..." : "Submit"}
        // </Button>
      // </Form>
    // </div>