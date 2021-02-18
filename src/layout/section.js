import React from "react"

const Section = props => {
  return (
    <section style={{ backgroundColor: props.bgcolor }}>
      {props.children}
    </section>
  )
}

export default Section
