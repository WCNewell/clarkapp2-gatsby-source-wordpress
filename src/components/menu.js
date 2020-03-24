import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledMenu = styled.nav`
display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 720px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: green;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 720px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: green;
    }
  }
`
const Menu = () => {
  return (
    <StyledMenu>
        <Link to="/about">
            <span aria-label="about">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            about
        </Link>
        <Link to="/blog">
            <span aria-label="blog">&#x1f4b8;</span>
            blog
        </Link>
            <Link href="/portfolio">
            <span aria-label="portfolio">&#x1f4e9;</span>
            portfolio
        </Link>
    </StyledMenu>
  )
}

export default Menu
