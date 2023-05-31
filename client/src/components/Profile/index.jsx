import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Avatar from "@mui/material/Avatar";
import { useNavigate  } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import "../../homepage_style.css";
import "../auth/style.css";
import { edit } from "../../redux/actions";
import { useFormik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!btn);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  // const signupLoading = useSelector((state) => state.auth.user_loading);
  const [btn, setBtn] = useState(true);
  const user = useSelector((state) => state.auth.user);
  function onclickbtn(e) {
    setBtn(!btn);
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
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      education: Yup.string().required("Required"),
    }),

    onSubmit: (values, actions) => {
      if (btn) {


        // values.avatar=values.firstName;
        //  alert(JSON.stringify(values, null, 2));
        function alterFormToAPIResult(error, success) {
          // if (error) {
          //   actions.setFieldTouched("password", false);
          //   actions.setFieldValue("password", "");
          //   actions.setFieldTouched("passwordConfirm", false);
          //   actions.setFieldValue("passwordConfirm", "");
          // }
        }
       
        dispatch(edit(values, alterFormToAPIResult));
       
        window.location.reload(true)
      }
    },
  });


  return (
    <div class="float-container" style={{ paddingTop: "30px" }}>
      <h2>Profile Details</h2>

      <div class="float-child" style={{ padding: "100px 160px 160px 0px" }}>
        <Card sx={{ minWidth: 275 }}>
          <span><span>          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             
            My badge{" "} 
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                float: "right",
                marginRight: "180px",
              }}
              alt="Iemy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/2378/2378382.png"
            />
          </Typography>
          </span>
          <span
          >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user?.points} 
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                float: "right",
                marginRight: "180px",
              }}
              alt="Iemy Sharp"
              src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
            />
          </Typography>
          </span>
          </span>


          <div style={{ display: "inline", float: "left", margin: "30px" }}>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Iemy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/9319/9319041.png"
            />
            <br></br>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Remy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/3211/3211415.png"
            />
            <br></br>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Remy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/6584/6584692.png"
            />
          </div>

          <div style={{ display: "inline", float: "left", margin: "30px" }}>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Pemy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/2378/2378382.png"
            />
            <br></br>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Wemy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/5759/5759987.png"
            />
            <br></br>
            <Avatar
              style={{ width: "70px", height: "70px" }}
              alt="Wemy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/340/340327.png"
            />
          </div>
        </Card>
      </div>

      <div class="float-child " style={{ padding: "50px 0px 160px 100px" }}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <div>
                <Avatar
                  style={{
                    display: "flex",
                    width: "100px",
                    height: "100px",
                  }}
                  className="avatar"
                  src={
                    user?.avatar
                      ? `https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=${formik.values.avatar}`
                      : "../u.png"
                  }
                  onClick={handleOpen}
                />
              </div>
              <br />
              <FormControl
                disabled={btn}
                variant="standard"
                style={{ float: "left" }}
              >
                <InputLabel htmlFor="component-disabled">First Name</InputLabel>
                <Input
                  style={{ width: "220px" }}
                  //id="component-disabled"
                  defaultValue={user?.firstName}
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // onChange={(e) => this.setState({ fname: e.target.value })}
                />
              </FormControl>
              &emsp;
              <FormControl disabled={btn} variant="standard">
                <InputLabel htmlFor="component-disabled">Last Name</InputLabel>
                <Input
                  style={{ width: "220px" }}
                  //  id="component-disabled"
                  defaultValue={user?.lastName}
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  //  onChange={(e) => this.setState({ lname: e.target.value })}
                />
              </FormControl>
              <div style={{ float: "left" }}>
                <br />
                <br />
                <FormControl disabled={btn} variant="standard">
                  <InputLabel htmlFor="component-disabled">Email</InputLabel>
                  <Input
                    style={{ width: "220px" }}
                    // id="component-disabled"
                    defaultValue={user?.email}
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //onChange={(e) =>
                    //this.setState({ email: e.target.value })
                    //}
                  />
                </FormControl>
                <br />
                <br />
                {/* <FormControl
                     disabled={btn}
                     variant="standard">
                      <InputLabel htmlFor="component-disabled">
                        Password
                      </InputLabel>
                      <Input
                        id="component-disabled"
                        defaultValue="********"
                        //  onChange={(e) => this.setState({ lname: e.target.value })}
                      />
                    </FormControl>
                    <br />
                    <br /> */}
                <FormControl disabled={btn} variant="standard">
                  <InputLabel htmlFor="component-disabled">
                    Education
                  </InputLabel>
                  <Input
                    style={{ width: "220px" }}
                    // id="component-disabled"
                    defaultValue={user?.education}
                    id="education"
                    name="education"
                    value={formik.values.education}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //  onChange={(e) => this.setState({ lname: e.target.value })}
                  />
                </FormControl>
                <br />
                <br />
                <FormControl disabled={btn} variant="standard">
                  <InputLabel htmlFor="component-disabled">Intrest</InputLabel>
                  <Input
                    style={{ width: "220px" }}
                    // id="component-disabled"
                    defaultValue={user?.interest}
                    id="interest"
                    name="interest"
                    value={formik.values.interest}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //  onChange={(e) => this.setState({ lname: e.target.value })}
                  />
                </FormControl>
                <br />
                <br />
                <FormControl disabled={btn} variant="standard">
                  <InputLabel htmlFor="component-disabled">Skills</InputLabel>
                  <Input
                    style={{ width: "220px" }}
                    // id="component-disabled"
                    defaultValue={user?.skills}
                    id="skills"
                    name="skills"
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //  onChange={(e) => this.setState({ lname: e.target.value })}
                  />
                </FormControl>
              </div>
            </div>
            {user?.skills.split(",").map((page, index) => (
                            (page)?
                            <span>
                            
                               <Button
                    key={page}
                    //  onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "inline",backgroundColor:'lightgray' }}
                  >
                    {page}
                  </Button>
                  &emsp;
                               </span>:""

                 
                //  alert(page)
                
              ))}
            <div className="d-grid" style={{ width: "300px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "rgb(205, 174, 141)",
                  width: "160px",
                  float: "left",
                }}
                class="login-button"
                onClick={onclickbtn}
              >
                {btn ? "Edit Profile" : "Save Profile"}
              </button>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div
                  style={{ display: "inline", float: "left", margin: "50px" }}
                >
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Iemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=a"
                    id="a"
                    name="a"
                    value="a"
                    onClick={() => {
                      formik.values.avatar = "a";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Remy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=b"
                    id="b"
                    name="b"
                    value="b"
                    onClick={() => {
                      formik.values.avatar = "b";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Remy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=c"
                    id="c"
                    name="c"
                    value="c"
                    onClick={() => {
                      formik.values.avatar = "c";
                      setOpen(false);
                    }}
                  />
                </div>

                <div
                  style={{ display: "inline", float: "left", margin: "45px" }}
                >
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Pemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=d"
                    id="d"
                    name="d"
                    value="d"
                    onClick={() => {
                      formik.values.avatar = "d";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Wemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=e"
                    id="e"
                    name="e"
                    value="e"
                    onClick={() => {
                      formik.values.avatar = "e";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Wemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=f"
                    id="f"
                    name="f"
                    value="f"
                    onClick={() => {
                      formik.values.avatar = "f";
                      setOpen(false);
                    }}
                  />
                </div>
                <div
                  style={{ display: "inline", float: "left", margin: "45px" }}
                >
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Pemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=g"
                    id="g"
                    name="g"
                    value="g"
                    onClick={() => {
                      formik.values.avatar = "g";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Wemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=h"
                    id="h"
                    name="h"
                    value="h"
                    onClick={() => {
                      formik.values.avatar = "h";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Wemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=i"
                    id="i"
                    name="i"
                    value="i"
                    onClick={() => (formik.values.avatar = "i")}
                  />
                </div>
                <div
                  style={{ display: "inline", float: "left", margin: "50px" }}
                >
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Iemy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=j"
                    id="j"
                    name="j"
                    value="j"
                    onClick={() => {
                      formik.values.avatar = "j";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Remy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=k"
                    id="k"
                    name="k"
                    value="k"
                    onClick={() => {
                      formik.values.avatar = "k";
                      setOpen(false);
                    }}
                  />
                  <br></br>
                  <Avatar
                    style={{ width: "70px", height: "70px" }}
                    alt="Remy Sharp"
                    className="avatar"
                    src="https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=ca9465&seed=l"
                    id="l"
                    name="l"
                    value="l"
                    onClick={() => {
                      formik.values.avatar = "l";
                      setOpen(false);
                    }}
                  />
                </div>
              </Box>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
