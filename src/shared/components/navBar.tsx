import { NavLink } from "solid-app-router";
import {Component} from "solid-js";
import { styled } from "solid-styled-components";
import { Container } from "../styles/components/container.styled";

const NavBar: Component = () => {

  const NavigationBar = styled('nav')`
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;

    img {
      height: 20px;
      width: auto;
      margin-bottom: -4px;
    }

    a{
        color: white !important;
    }

    ul {
      margin-top: -4px;
      margin-left: auto;
      overflow: visible;
      a {
        font-size: 14px;
        font-weight: normal !important;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: black;
      }
      .active {
        font-weight: bold !important;
      }
    }
  `

  return(
    <>
      <NavigationBar>
        <Container style={{
            padding: `18px 18px 14px 18px`,
            display: `flex`,
            "align-items": `center`,
            "gap": `4px`
        }}>
          <a href="/"><img src="src/assets/images/ambient_logo_white.png"/></a>
          <p>
            by <a href="https://kevintyj.com">Kevin (Taeyoon) Jin</a>
          </p>
          <ul>
            <li>
              <NavLink href="/doc">Documentation</NavLink>
            </li>
          </ul>
        </Container>
      </NavigationBar>
    </>
  )

}

export default NavBar;