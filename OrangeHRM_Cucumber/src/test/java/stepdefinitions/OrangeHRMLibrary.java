package stepdefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHRMLibrary 
{

	public static WebDriver driver;
	String empno;
	
	@Given("^i open browser with url \"([^\"]*)\"$")
	public static void launchApp(String url)	
	{
	    driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);		
	}

	@Then("^i should see login page$")
	public void i_should_see_login_page() 
	{
	    if(driver.findElement(By.id("btnLogin")).isDisplayed())
	    {
	    	System.out.println("System displayed Login Page");
	    }
	}

	@When("^i enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String uname) 
	{
	  driver.findElement(By.id("txtUsername")).sendKeys(uname);
	}

	@When("^i enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String pword) 
	{
		driver.findElement(By.id("txtPassword")).sendKeys(pword);
	}

	@When("^i click login$")
	public void i_click_login() 
	{
	   driver.findElement(By.id("btnLogin")).click();
	}

	@Then("^i should see admin module$")
	public void i_should_see_admin_module() 
	{
	    if(driver.findElement(By.linkText("Admin")).isDisplayed())
	    {
	    	System.out.println("Admin Login is Successful");
	    }
	}

	@When("^i click logout$")
	public void i_click_logout() 
	{
	    driver.findElement(By.partialLinkText("Welcome")).click();
	    driver.findElement(By.linkText("Logout")).click();
		
	}	
	
	@When("^i close browser$")
	public void i_close_browser() 
	{
	   driver.close();
	}
	
	@Then("^i should see error message$")
	public void i_should_see_error_message()
	{
	
		String errmsg;
		errmsg = driver.findElement(By.id("spanMessage")).getText();
		if(errmsg.toLowerCase().contains("invalid"))
		{
			System.out.println("Login displayed apprpriate Error Message for invalid inputs");
		}		
	}
	
	@When("^i goto add employee page$")
	public void i_goto_add_employee_page() 
	{
		driver.findElement(By.linkText("PIM")).click();
		driver.findElement(By.linkText("Add Employee")).click();		
	}

	@When("^i enter firstname as \"([^\"]*)\"$")
	public void i_enter_firstname_as(String fname) 
	{
		driver.findElement(By.id("firstName")).sendKeys(fname);
	}

	@When("^i enter lastname as \"([^\"]*)\"$")
	public void i_enter_lastname_as(String lname) 
	{
		driver.findElement(By.id("lastName")).sendKeys(lname);
	}

	@When("^i click save$")
	public void i_click_save() 
	{
		empno = driver.findElement(By.id("employeeId")).getAttribute("value");
		driver.findElement(By.id("btnSave")).click();
	}

	@Then("^i should see new employee created in employee details table$")
	public void i_should_see_new_employee_created_in_employee_details_table() 
	{
		driver.findElement(By.linkText("Employee List")).click();
		driver.findElement(By.id("empsearch_id")).sendKeys(empno);
		driver.findElement(By.id("searchBtn")).click();		
		
		WebElement restable = driver.findElement(By.id("resultTable"));
		List<WebElement> rows = restable.findElements(By.tagName("tr"));
		
		boolean isempdisplayed = false;
		for(int i=1;i<rows.size();i++)
		{
			List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
			if(cols.get(1).getText().equalsIgnoreCase(empno))
			{
				isempdisplayed = true;
				break;
			}
		}
		if(isempdisplayed)
		{
			System.out.println("New Employee Registered Successfully, test pass");
		}else
		{
			System.out.println("New Employee Registered not displayed in Employee Details table, test fail");
		}
		
	}
}
