export const GetProducts = (gql, currency) => {
  return gql`
    query GetProducts {
      products {
        id
        title
        image_url
        price(currency: ${currency})
      }
    }
  `;
};
