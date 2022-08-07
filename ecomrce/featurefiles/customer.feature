 Feature: customer
 Scenario: Add customer
 Given User Launch Chrome Browser
 When User opens URL "http://admin-demo.nopcommerce.com/login"
 And User entered Email id as "admin@yourstore.com" and Password as "admin"
 And Click Login
 Then User can view Dashborad
 When User can click Customers menu
 And User can click on Customers
 And User can click on Add new customer
 When user can entered customer info
 And click on the save button
 Then user can view conformation "The new customer has been added sucussfully"
 And user close browser
 Scenario: Search Customer by EMailID
  Given User Launch Chrome Browser
 When User opens URL "http://admin-demo.nopcommerce.com/login"
 And User entered Email id as "admin@yourstore.com" and Password as "admin"
 And Click Login
 Then User can view Dashborad
 When User can click Customers menu
 And User can click on Customers
 And Enter customer Email
 When Click on search button
 Then User should found Email in the Search table
 And close browser
 