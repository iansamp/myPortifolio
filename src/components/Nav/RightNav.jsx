import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  height: 100vh;
  width: 250px;
  background-color: #000000;
  color: #ffd800;

  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <section>
        <h1>Ian Sampaio</h1>
        <nav>
          <ul>
            <li>
              <a href="http://localhost:5173/#Home">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/#Biography">Biografia</a>
            </li>
            <li>
              <a href="http://localhost:5173/#Skills">Habilidades</a>
            </li>
            <li>
              <a href="http://localhost:5173/#Portfolio">Portfólio</a>
            </li>
            <li>
              <a href="http://localhost:5173/#Contact">Contato</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/ian.sampaio015/"
                target="_blank"
              >
                <img src="../public/svgs/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ian-sampaio-204483246/"
                target="_blank"
              >
                <img src="../public/svgs/linkedin.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/iansamp" target="_blank">
                <img src="../public/svgs/github.svg" alt="github" />
              </a>
            </li>
          </ul>
        </div>
        <footer>
          <p>© 2023 Ian S. Todos os direitos reservados</p>
        </footer>
      </section>
    </Ul>
  );
};

export default RightNav;
