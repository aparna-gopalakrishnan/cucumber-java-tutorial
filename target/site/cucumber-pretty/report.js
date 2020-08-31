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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the customer is on the application homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.launchApplicationHomePage() in file:/Users/aparnagopalakrishnan/Documents/Training/Projects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer searched for a product",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.serachForProduct() in file:/Users/aparnagopalakrishnan/Documents/Training/Projects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds the selected product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.Steps.addProductToTheCart() in file:/Users/aparnagopalakrishnan/Documents/Training/Projects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer should be able to see the shopping cart updated with the productname",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.verifyUserAddedProductToCart() in file:/Users/aparnagopalakrishnan/Documents/Training/Projects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});