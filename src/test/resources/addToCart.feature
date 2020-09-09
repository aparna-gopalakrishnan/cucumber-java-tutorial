Feature: Add to cart 

	In order to purchase an online product
	As an open cart customer
	I want to add a product successfully

# Scenario Example
@add_to_cart	
Scenario: Add to cart and verify the message is displayed

Given the customer is on the application homepage
When the customer searched for a product
And adds the selected product to the cart 
Then the customer should be able to see the shopping cart updated with the productname