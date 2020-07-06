import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Header />
      About m<Link to="/contact/">contact</Link>
    </div>
  )
}
