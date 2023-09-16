import React, { useEffect, useState } from "react";
import "./catalyst_report.css";
import logo from "../../logo.png";
import report from "../../report.jpg";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Recommendation = () => {
  const [texts, setTexts] = useState("");
  const [auths, setAuths] = useState("");
  useEffect(() => {
    handleSubmit();
  }, []);
  function handleSubmit() {
    fetch("https://type.fit/api/quotes", {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTexts(data[Math.floor(Math.random() * 1500) + 1].text);
        setAuths(data[Math.floor(Math.random() * 1500) + 1].author);
        console.log(data, "userRegister");
        if (data.status === "ok") {
        }
      });
  }

  return (
    <div>
      <div class="catalyst_report">
        {/* <div class="exit">
                     <a href="#"><span class="material-symbols-outlined exitButton">Close</span></a>  
            </div> */}

        <NavLink
          to="/dash/catalyst_report"
          style={{ backgroundColor: "black", width: "100px", height: "100px" }}
        >
          <div style={{ display: "flex", float: "right" }}>
            <Avatar
              style={{
                display: "flex",
                backgroundColor: "white",
                color: "black",
                margin: "15px",
              }}
              alt="X"
              src="/static/images/avatar/2.jpg"
            />
          </div>
        </NavLink>
        <div class="catalyst_report-logo">
          {/* <img src={logo} class="" style={{ width: "1.5cm" }} alt="logo" />      */}
          <div
            src={logo}
            class=""
            style={{ width: "1.5cm", height: "1cm" }}
            alt="logo"
          ></div>
        </div>
        <div class="intro">Your career recommendation is</div>

        <div class="career_recommendation">
          <div class="poly_box">
            <div class="poly">
              <div class="field">Advice</div>
              <div class="field_description">
                “{texts}” -- {auths}.{" "}
            </div>
     <br/>
              <br />
            </div>
          </div>
        </div>

        {/* <div class="careers">
                    <ul>
                        <li>{careers("Web")}</li>
                        <li>{careers("programmer")}</li>
                        <li>{careers("ai developer")}</li>
                    </ul>
                </div> */}

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </div>
    </div>
  );
};

export default Recommendation;

