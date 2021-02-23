export const getProducts = (gql, currency) => {
  return gql`
    query getProducts {
      products {
        id
        title
        image_url
        price(currency: ${currency})
      }
    }
  `;
};
