import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      About <Link to="/contact/">contact</Link>
      <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
      </Container>
    </Layout>
  )
}
