$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/addToCart.feature");
formatter.feature({
  "name": "Add to cart",
  "description": "\tIn order to purchase an online product\n\tAs an open cart customer\n\tI want to add a product successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add to cart and verify the message is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@add_to_cart"
    }
  ]
});
formatter.step({
  "name": "the customer is on the application homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the customer searched for a product",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "adds the selected product to the cart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the customer should be able to see the shopping cart updated with the productname",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});