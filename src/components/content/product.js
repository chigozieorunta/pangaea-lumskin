import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { Col, Image } from "react-bootstrap"

const colStyle = { textAlign: "center", fontSize: 16, marginBottom: "6em" }

const productTitleStyle = { marginTop: 10, marginBottom: 20 }

const buttonStyle = {
  backgroundColor: "#4b5548",
  color: "#fff",
  border: "none",
  fontWeight: "300",
  fontSize: 14,
  padding: "1em",
  width: "60%",
  marginTop: 10,
}

const GET_PRODUCTS = gql`
  query {
    product {
      title
      image_url
      price(currency: NGN)
    }
  }
`

const Product = () => {
  const { data } = useQuery(GET_PRODUCTS)
  return (
    <Col sm={6} md={4} style={colStyle}>
      <Image
        alt="Product Image"
        src={data.product.image_url}
        style={{ height: 170 }}
        fluid
      />
      <div style={productTitleStyle}>{data.product.title}</div>
      <div>From: NGN {data.product.price}</div>
      <button style={buttonStyle}>Add To Cart</button>
    </Col>
  )
}

export default Product
