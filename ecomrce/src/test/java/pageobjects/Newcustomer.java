package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class Newcustomer {
	
	public WebDriver Idriver;
	public Newcustomer(WebDriver rdriver){
		Idriver=rdriver;
		PageFactory.initElements(rdriver,this);}
    By linkcustomersmenu = By.xpath("//a[@href='#']//p[contains(text(),'Customers')]");
    By linkcustomersmenuitem = By.xpath("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]");
	By addnewbtn = By.xpath(" //*/a[@href='/Admin/Customer/Create']");
	By emailtxt= By.xpath(" //input[@type='email']");
	By passwordtxt = By.xpath(" //input[@type='password']");
	By firstnametxt = By.xpath(" //input[@id='FirstName']");
	By lastnametxt = By.xpath(" //input[@id='LastName']");
	By genderclk = By.xpath(" //*[@id='Gender_Male']");
	By dateofbirth = By.xpath(" //*[@id='DateOfBirth']");
	By companyid = By.xpath(" //*[@id='Company']");
	By tax = By.xpath(" //*[@id='IsTaxExempt']");
	By customerroles = By.xpath(" //div[@class='k-multiselect-wrap k-floatwrap']");
	By guests = By.xpath("//li[contains(text(),'Guests')]");
	By checkbox = By.xpath(" //*[@id='Active']");
	By Admincomment = By.xpath(" //*[@name='AdminComment']");
	By btnsave=By.xpath(" //*[@name='save']");
	//actions
	public String getPageTitle(){
		return Idriver.getTitle();
	}
	public void clickoncustomermenu(){
		Idriver.findElement(linkcustomersmenu).click();		}
	public void clickoncustomermenuitam(){
		Idriver.findElement(linkcustomersmenuitem).click();
	}
	public void addnew(){
		Idriver.findElement(addnewbtn).click();
	}
	public void emailfield(String email){
		Idriver.findElement(emailtxt).sendKeys(email);
	}
	public void passwordfiels(String password){
		Idriver.findElement(passwordtxt).sendKeys(password);
	}
	public void firstnamer(String firstname){
		Idriver.findElement(firstnametxt).sendKeys(firstname);
	}
	public void lastname(String lastname){
		Idriver.findElement(lastnametxt).sendKeys(lastname);
		}
	public void genderselect(){
		Idriver.findElement(genderclk).click();}
		
	
	public void dateofbirth(String dateofbirt){
		Idriver.findElement(dateofbirth).sendKeys(dateofbirt);}
	public void companyid(String companyname){
		Idriver.findElement(companyid).sendKeys(companyname);
		}
	public void taxer(){
		Idriver.findElement(tax).click();
	}
	public void customerroless(String role){
		Idriver.findElement(customerroles).sendKeys(role);;
		///////
		
	}
	public void guest(){
		Idriver.findElement(guests).click();
		
	}
	public void checkbtn(){
		Idriver.findElement(checkbox).click();
		
	}
	
	public void addmincomment(String comment){
		Idriver.findElement(Admincomment).sendKeys(comment);
	}
	public void clicksubmit(){
		Idriver.findElement(btnsave).click();
		
	}
	
	
	
	
	
	
	
	
	
	
}
	
	

