# Pangaea Lumskin Challenge

For this challenge we'll be recreating the luminskin.com product page and cart using a GraphQL API in ReactJS. This doesn't need to be a pixel perfect recreation, but the more accurate you make it the better. Overall the things we are evaluating on are functionality, polish (is this production quality) and code quality.

## Product Page Requirements

<ul>
  <li>Should query from https://pangaea-interviews.now.sh/api/graphql , retrieve the products and display them in a grid. Feel free to use graphql client libraries such as Apollo Client.</li>
  <li>Each item should display the image, title, price and a "Add to Cart" button.</li>
  <li>For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.</li>
</ul>

## Cart Requirements

<ul>
  <li>When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.</li>
  <li>If the item already exists it should increment the quantity.</li>
  <li>Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.</li>
  <li>In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.</li>
  <li>It should sum the items in the cart and display them in the correct selected currency.</li>
  <li>Ignore anything related to subscriptions</li>
</ul>
