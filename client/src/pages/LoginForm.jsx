
import {NavLink} from 'react-router-dom';
import "../homepage_style.css";
import "./auth/style.css";
import logo from "../logo.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux/actions";

function Login() {
  const dispatch = useDispatch();
  const { user_loading: loginLoading } = useSelector(({ auth }) => auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email address is invalid")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      function alterFormToAPIResult(error, success) {
        if (error) {

          
          actions.setFieldTouched("password", false);
          actions.setFieldValue("password", "");
        }
      }
      dispatch(login(values, alterFormToAPIResult));
    },
  });

  return (
    <div >
        <div class="float-container">

<div class="float-child"  style={{backgroundColor:'#cdae8d'}}>
   <form onSubmit={formik.handleSubmit}>
      <h1 style={{color:'white'}}>Sign In</h1>

    
      <div class="input-field">
          <span class="input-item">
            <i class="fa-solid fa-user"></i>
          </span>
          <input class="form-input"  placeholder="Email" autocomplete="off" required 
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            tabIndex={1}
            // onChange={(e) => this.setState({ email: e.target.value })}
            />
           
        </div>
        {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : null}
        <div class="input-field">
          <span class="input-item">
            <i class="fa-solid fa-key"></i>
          </span>
          <input class="form-input" type="password" placeholder="Password" 
            autocomplete="off"  required
            id="password"
            name="password"
           
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            tabIndex={2}
            // onChange={(e) => this.setState({ password: e.target.value })}
            />
        </div>
        {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : null}

        <p style={{color:'gray'}}>
      <NavLink to="/recoverpass" style={{ color:"", float:'left'}}>
       Forgot Password?
        </NavLink>
      </p>
             <div className="mb-3">
       
      </div>

      <div className="d-grid">
    
        <button class="login-button" type="submit"
         // className="text-uppercase"
          disabled={loginLoading}
          tabIndex={3}
        >
          {loginLoading ? "Loading..." : "Login"}</button>
       

      </div>
      <p style={{color:'gray'}}>
      Don't have an account? <NavLink to="/signup" tabIndex={4} style={{ color:"black" }}>
       Sign Up
        </NavLink>
      </p>
    </form>
</div>

<div class="float-child ">
<img  src={logo} style={{ width: "5cm", }} alt="logo" />
</div>


   
    </div>

    </div>
  );
}

export default Login;
