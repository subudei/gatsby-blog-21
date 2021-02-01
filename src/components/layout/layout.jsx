import React from "react"
import "./layout.styles.scss"

import Header from "../header/header"
import Footer from "../footer/footer"

function Layout(props) {
  return (
    <div className="layout__container">
      <div className="layout__content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
