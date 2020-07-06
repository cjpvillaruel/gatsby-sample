import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <div>
      <Header />
      About m<Link to="/contact/">contact</Link>
      <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
      </Container>
    </div>
  )
}
