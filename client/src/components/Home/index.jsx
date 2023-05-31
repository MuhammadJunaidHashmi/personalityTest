import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import image from "../../images/logo.png";

function Home() {
  return (
    <Stack direction="horizontal" gap={2}>
      <div>
        <img
          src={image}
          alt="banner"
          width={400}
          height={500}
          className="rounded-2"
        />
      </div>
      <div className="mx-auto">
        <h1 className="text-uppercase">Welcome !!</h1>
        <p className="lead">
          Thank you for choosing <span className="fw-bold">Catalyst Match</span>
          <br />
          <span className="fst-italic text-muted">Sign Up to get started.</span>
        </p>
        <div>
          <Button
            as={Link}
            to="/signup"
            className="text-uppercase fw-bolder"
            variant="primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Stack>
  );
}

export default Home;
