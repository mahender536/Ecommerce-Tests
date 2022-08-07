package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage {
	public WebDriver Idriver;
	public Loginpage(WebDriver rdriver){
		Idriver=rdriver;
		PageFactory.initElements(rdriver,this);}
		
	@FindBy(id="Email")
	@CacheLookup
	WebElement txtEmail;
	@FindBy(id="Password")
	@CacheLookup
	WebElement txtPassword;
	@FindBy(xpath="//button[@type='submit']")
	@CacheLookup
	WebElement btnsubmit;
	@FindBy(linkText="Logout")
	@CacheLookup
	WebElement btnlogout;
	
	
	public void setUserName(String uname){
		txtEmail.clear();
		txtEmail.sendKeys(uname);
		
		
	}
	
	public void setPassword(String password){
		txtPassword.clear();
		txtPassword.sendKeys(password);
	
	
}
	
	public void login() throws InterruptedException{
		btnsubmit.click();
		Thread.sleep(4000);
		
		
	}
	
public void logout(){
	
	btnlogout.click();
}
}
