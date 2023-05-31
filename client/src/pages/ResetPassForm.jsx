import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from 'react-router-dom';
import "../homepage_style.css";
import "./auth/style.css";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate  } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { resetPassword } from "../redux/actions";

function ResetPass() {
  const navigate = useNavigate();
  const { resetToken } = useParams();
  const dispatch = useDispatch();
  const resetLoading = useSelector((state) => state.auth.user_loading);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Password is required"),
      passwordConfirm: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values, actions) => {
      // Attach resetToken to values
      values.resetToken = resetToken;
      dispatch(resetPassword(values));
      navigate('/login', { replace: true });
    },
  });

  return (
    <div class="float-container">

    <div class="float-child"  style={{backgroundColor:'#cdae8d'}}>
       <form onSubmit={formik.handleSubmit}>
          <h1 style={{color:'white'}}>Change Password</h1>
  
        
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
               // onChange={(e) => this.setState({ password: e.target.value })}
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
                //onChange={(e) => this.setState({ password: e.target.value })}
                />
            </div>
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <Form.Text className="text-danger">
              {formik.errors.passwordConfirm}
            </Form.Text>
          ) : null}
          
        
  
          <div className="d-grid">
          
            {/* <button class="login-button">Save</button> */}
            
            {/* <NavLink to="/homepage" style={{ color:"black" }}> */}
            <button class="login-button" type="submit" disabled={resetLoading}>
          {resetLoading ? "Loading..." : "Submit"}
        </button>
        {/* </NavLink> */}
          </div>
         
        </form>
    </div>
    
    <div class="float-child ">
    <img  src={logo} style={{ width: "5cm", }} alt="logo" />
    </div>
  
  
{/*        
    <div style={{ maxWidth: 500, marginInline: "auto" }}>
      <h2 className="text-uppercase mb-3">Change your password</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter new Password"
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
        </Form.Group>

        <Button variant="primary" type="submit" disabled={resetLoading}>
          {resetLoading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </div> */}

    
    </div>
  );
}

export default ResetPass;
