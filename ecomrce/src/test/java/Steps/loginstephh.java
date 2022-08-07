package Steps;



 

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


import pageobjects.Loginpage;
import pageobjects.Newcustomer;
import pageobjects.searchcustomer;



public class loginstephh extends Base{
	

@Given("^User Launch Chrome Browser$")
public void user_Launch_Chrome_Browser()  {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\mahender\\git\\Ecommerce-Tests\\ecomrce\\driver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	driver.manage().window().maximize();
	lp = new Loginpage(driver);
    
}

@When("^User opens URL \"([^\"]*)\"$")
public void user_opens_URL(String url)  {
   driver.get(url);  
}

@When("^User entered Email id as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
public void user_entered_Email_id_as_and_Password_as(String uname, String password)   {
    lp.setUserName(uname); 
    lp.setPassword(password);
}

@When("^Click Login$")
public void click_Login() throws InterruptedException   {
	lp.login();
	 
	//WebDriverWait wait = new WebDriverWait(driver,30);
    //wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Logout")));
}
@Then("^Page Title should be \"([^\"]*)\"$")
public void page_Title_should_be(String title) throws InterruptedException  {
	if (driver.getPageSource().contains("Login was unsuccessful. ")){
		driver.close();
		Assert.assertTrue(false);
		
	}else {Assert.assertEquals(title,driver.getTitle());  
	
	
	
	
	
	Thread.sleep(3000);}
    
}
@When("^User Click Logout link$")
public void user_Click_Logout_link() throws InterruptedException {
    lp.logout();
    Thread.sleep(3000);
}

@Then("^close browser$")
public void close_browser() {
	driver.close();	
}
//customer add
@Then("^User can view Dashborad$")
public void user_can_view_Dashborad() throws InterruptedException   {
    addcst = new Newcustomer(driver);
     Assert.assertEquals("Dashboard / nopCommerce administration",addcst.getPageTitle());
     Thread.sleep(2000);
}

@When("^User can click Customers menu$")
public void user_can_click_Customers_menu() throws InterruptedException   {
   addcst.clickoncustomermenu();
   Thread.sleep(2000);
   ;
}

@When("^User can click on Customers$")
public void user_can_click_on_Customers() throws InterruptedException  {
    addcst.clickoncustomermenuitam();
    Thread.sleep(20000);
     ;
}

@When("^User can click on Add new customer$")
public void user_can_click_on_Add_new_customer() throws InterruptedException   {
     addcst.addnew();
     Thread.sleep(2000);
     ;
}

//@Then("^User can View new Customers page$")
//public void user_can_View_new_Customers_page() throws InterruptedException   {
    //Assert.assertEquals("Add a new customer/ nopCommerce administration",addcst.getPageTitle());
    // ; Thread.sleep(2000);
//}

@When("^user can entered customer info$")
public void user_can_entered_customer_info() throws InterruptedException  {
   
    addcst.emailfield("nnwhbhq@gmail.com");
    addcst.passwordfiels("test123");
    addcst.firstnamer("mahi");
    addcst.lastname("nani");
    addcst.genderselect();
    addcst.dateofbirth("7/06/1992");
    addcst.companyid("busy QAA");
    addcst.taxer();
    addcst.addmincomment("for testing");
    Thread.sleep(2000);
    
     ;
}

@When("^click on the save button$")
public void click_on_the_save_button()  {
    addcst.clicksubmit();
}

@Then("^user can view conformation \"([^\"]*)\"$")
public void user_can_view_conformation(String msg)  {
	Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
    
   
}


//steps for search registred user




@When("^Enter customer Email$")
public void enter_customer_Email() throws InterruptedException   {
     searchcustomer srcm = new searchcustomer(driver);
     srcm.fname("mahi");
}

@When("^Click on search button$")
public void click_on_search_button() throws InterruptedException   {
	searchcustomer srcm = new searchcustomer(driver);
    srcm.lname("nani");
   ;
}

@Then("^User should found Email in the Search table$")
public void user_should_found_Email_in_the_Search_table()  {
	searchcustomer srcm = new searchcustomer(driver);
	srcm.submiitt();
     
}
    ;




@Then("^user close browser$")
public void user_close_browser()   {
   driver.close();
     ;
}

}

