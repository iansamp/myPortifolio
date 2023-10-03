import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  h1 {
    padding: 2em 0em 0em;
    text-align: center;
    font-size: 26px;
  }

  nav {
    margin-top: 20px;
    padding: 1.5em;
  }

  nav ul li a,
  li {
    list-style: none;
    text-decoration: none;
    color: #ffd800;
    font-size: 20px;
    padding: 0.5em;
    text-align: center;
  }

  div ul {
    display: flex;
    padding: 1em;
    margin-top: 25px;
  }

  div ul li a img {
    background-color: #ffd800;
    width: 35px;
    padding: 0.1em;
    margin: 0.5em;
    border-radius: 50%;
  }

  footer {
    color: #fff;
    font-size: 11px;
    margin-top: 90px;
    text-align: center;
  }

  nav ul li a {
    list-style: none;
    text-decoration: none;
    color: #ffd800;
    font-size: 20px;
    padding: 0.5em;
    text-align: center;
  }

  nav ul li:hover {
    background-color: #ffd9002f;
    transition: .3s;
}
`;

const Navbarres = () => {
  return (
    <Nav>
      <Burger/>
    </Nav>
  );
};

export default Navbarres;
