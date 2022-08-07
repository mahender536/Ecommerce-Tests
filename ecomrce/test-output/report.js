$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/mahender/git/Ecommerce-Tests/ecomrce/featurefiles/customer.feature");
formatter.feature({
  "line": 1,
  "name": "customer",
  "description": "",
  "id": "customer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Add customer",
  "description": "",
  "id": "customer;add-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User entered Email id as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User can view Dashborad",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User can click Customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can click on Customers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can click on Add new customer",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user can entered customer info",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on the save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user can view conformation \"The new customer has been added sucussfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginstephh.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 3350616600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "loginstephh.user_opens_URL(String)"
});
formatter.result({
  "duration": 19452887999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 26
    },
    {
      "val": "admin",
      "offset": 64
    }
  ],
  "location": "loginstephh.user_entered_Email_id_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 264586900,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_Login()"
});
formatter.result({
  "duration": 24485711000,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_view_Dashborad()"
});
formatter.result({
  "duration": 2020023699,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_click_Customers_menu()"
});
formatter.result({
  "duration": 2114583500,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Customers()"
});
formatter.result({
  "duration": 23742455600,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Add_new_customer()"
});
formatter.result({
  "duration": 6922007600,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_entered_customer_info()"
});
formatter.result({
  "duration": 2878545600,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_on_the_save_button()"
});
formatter.result({
  "duration": 1619998501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added sucussfully",
      "offset": 28
    }
  ],
  "location": "loginstephh.user_can_view_conformation(String)"
});
formatter.result({
  "duration": 616733599,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_close_browser()"
});
formatter.result({
  "duration": 217304200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search Customer by EMailID",
  "description": "",
  "id": "customer;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User entered Email id as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User can view Dashborad",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User can click Customers menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User can click on Customers",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginstephh.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 1501707599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "loginstephh.user_opens_URL(String)"
});
formatter.result({
  "duration": 17268491099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 26
    },
    {
      "val": "admin",
      "offset": 64
    }
  ],
  "location": "loginstephh.user_entered_Email_id_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 265740200,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_Login()"
});
formatter.result({
  "duration": 9063808899,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_view_Dashborad()"
});
formatter.result({
  "duration": 2009616000,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_click_Customers_menu()"
});
formatter.result({
  "duration": 2094172600,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Customers()"
});
formatter.result({
  "duration": 21790935400,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.enter_customer_Email()"
});
formatter.result({
  "duration": 2138433800,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_on_search_button()"
});
formatter.result({
  "duration": 2124295100,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 98586800,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.close_browser()"
});
formatter.result({
  "duration": 193289100,
  "status": "passed"
});
});