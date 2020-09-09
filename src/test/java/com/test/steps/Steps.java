package com.test.steps;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {
	
	private WebDriver driver;
	
	@Before()
	public void setup() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}
	
	
	@Given("the customer is on the application homepage")
	public void launchApplicationHomePage() {
	
		
		driver.get("https://demo.opencart.com/");
	}
	
	@When("the customer searched for a product")
	public void serachForProduct() {
				
		driver.findElement(By.name("search")).sendKeys("iphone");
		driver.findElement(By.xpath("//*[@class='btn btn-default btn-lg']")).click();

	}


	@When("adds the selected product to the cart")
	public void addProductToTheCart() {
		
		driver.findElement(By.xpath("//*[@id=\"content\"]/div[3]/div/div/div[1]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"button-cart\"]")).click();

	}
	  

	@Then("the customer should be able to see the shopping cart updated with the productname")
	public void verifyUserAddedProductToCart() throws Exception {
		
		boolean isMsgDisplayed = driver.findElement(By.xpath("//*[@class='alert alert-success alert-dismissible']")).isDisplayed();
		assertTrue(isMsgDisplayed);
	}

	@After()
	public void quitBrowser() {
		driver.quit();
		
	}

}
