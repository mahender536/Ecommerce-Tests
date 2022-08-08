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
  "duration": 3258661100,
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
  "duration": 2401077500,
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
  "duration": 253040400,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_Login()"
});
formatter.result({
  "duration": 10039875800,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_view_Dashborad()"
});
formatter.result({
  "duration": 12193281100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d103.0.5060.134)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANUHYA\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\mahender\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56369}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2cf3af5a6e7b9b83bf2a9bf8d3329af0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat pageobjects.Newcustomer.getPageTitle(Newcustomer.java:31)\r\n\tat Steps.loginstephh.user_can_view_Dashborad(loginstephh.java:89)\r\n\tat ✽.Then User can view Dashborad(C:/Users/mahender/git/Ecommerce-Tests/ecomrce/featurefiles/customer.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginstephh.user_can_click_Customers_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Customers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Add_new_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_can_entered_customer_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.click_on_the_save_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1386248300,
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
  "duration": 19325597300,
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
  "duration": 249472500,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.click_Login()"
});
formatter.result({
  "duration": 4380730600,
  "status": "passed"
});
formatter.match({
  "location": "loginstephh.user_can_view_Dashborad()"
});
formatter.result({
  "duration": 6344500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d103.0.5060.134)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANUHYA\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\mahender\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56396}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30a95abdd958d3aebe1c4b27979c0cba\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat pageobjects.Newcustomer.getPageTitle(Newcustomer.java:31)\r\n\tat Steps.loginstephh.user_can_view_Dashborad(loginstephh.java:89)\r\n\tat ✽.Then User can view Dashborad(C:/Users/mahender/git/Ecommerce-Tests/ecomrce/featurefiles/customer.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginstephh.user_can_click_Customers_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_can_click_on_Customers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.enter_customer_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstephh.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});