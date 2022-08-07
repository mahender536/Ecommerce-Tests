package runs;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\mahender\\git\\Ecommerce-Tests\\ecomrce\\featurefiles\\customer.feature",
glue="Steps",dryRun=false,monochrome=true,plugin ={"pretty",
		"html:test-output"})

public class runclasss {

}
