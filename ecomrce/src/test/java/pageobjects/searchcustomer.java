package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utility.WaitHelper;

public class searchcustomer {
	public WebDriver Idriver;
	WaitHelper waithelper;
	public searchcustomer(WebDriver rdriver){
		Idriver=rdriver;
		PageFactory.initElements(rdriver,this);
		waithelper = new WaitHelper(Idriver);}
	
	
		@FindBy(xpath="//input[@id='SearchFirstName']")
		@CacheLookup
		WebElement Firstnam;
		
		@FindBy(xpath="//input[@id='SearchLastName']")
		@CacheLookup
		WebElement Lastnam;
		

		@FindBy(xpath="//button[@id='search-customers']")
		@CacheLookup
		WebElement submitbtn;
		
		
		
		public void fname( String fnaame) throws InterruptedException{
			Firstnam.sendKeys(fnaame);
			Thread.sleep(2000);
					}
	public void lname(String lnaame) throws InterruptedException{
		
		Lastnam.sendKeys(lnaame);
		Thread.sleep(2000);
	}
	public void submiitt(){
		
		submitbtn.click();
		
	}


}


