import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import "../homepage_style.css";
import "./auth/style.css";
import logo from "../logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { forgotPassword } from "../redux/actions";

function ForgotPass() {
  const dispatch = useDispatch();
  const { user_loading: loginLoading } = useSelector(({ auth }) => auth);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email address is invalid")
        .required("Email is required"),
    }),
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(forgotPassword(values));
    },
  });

  return (
    <div class="float-container">

    <div class="float-child"  style={{backgroundColor:'#cdae8d'}}>
    <form onSubmit={formik.handleSubmit}>
          <h1 style={{color:'white',margin:"30px",display:'flex',}}>Forgot password?</h1>
  


      <p className="text-muted disply-6">
        Confirm your email and we'll send instructions.
      </p>
      <p style={{color:'gray'}}>
          <NavLink to="/login" style={{ color:"", float:'left'}}>
           Back to Sign in
            </NavLink>  
          </p>
          <div class="input-field">
            
              <span class="input-item">
                <i class="fa-solid fa-user"></i>
              </span>
              
              <input style={{width:'350px'}} class="form-input"  placeholder="Email" autocomplete="off" required
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
  
          <div className="d-grid">
         
           <button style={{width:"150px",marginTop:"50px"}}   type="submit"
           className="login-button"   disabled={loginLoading}
          tabIndex={3}> {loginLoading ? "Loading..." : "Confirm"}</button>
         
          </div>
         
        </form>
      </div>
      <div class="float-child ">
        <img  src={logo} style={{ width: "5cm", }} alt="logo" />
      </div>
   
    
    {/*<div style={{ maxWidth: 500, marginInline: "auto" }}>
      <h2 className="text-uppercase mb-3">Forgot your password?</h2>
      <h4 className="lead">We've got you covered.</h4>
      <p className="text-muted disply-6">
        Confirm your email and we'll send instructions.
      </p>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Email"
            tabIndex={1}
          />

          {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="text-uppercase"
          disabled={loginLoading}
          tabIndex={3}
        >
          {loginLoading ? "Loading..." : "Confirm"}
        </Button>
      </Form>
    </div> */}
      </div>
  );
}

export default ForgotPass;
