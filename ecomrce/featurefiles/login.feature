 Feature: Login
 Scenario: Successful Login with valid Credentials
 Given User Launch Chrome Browser
 When User opens URL "http://admin-demo.nopcommerce.com/login"
 And User entered Email id as "admin@yourstore.com" and Password as "admin"
 And Click Login
 Then Page Title should be "Dashboard / nopCommerce administration"
 When User Click Logout link
 Then Page Title should be "Your store. Login"
 And close browser
 
 
 
 Scenario Outline: Data Driven Testing
 Given User Launch Chrome Browser
 When User opens URL "http://admin-demo.nopcommerce.com/login"
 And User entered Email id as "<email>" and Password as "<Password>"
 And Click Login
 Then Page Title should be "Dashboard / nopCommerce administration"
 When User Click Logout link
 Then Page Title should be "Your store. Login"
 And close browser
 
 Examples:
 |email|Password|
 |admin@yourstore.com|admin|
 |admin1@yourstore.com|admin123|
 