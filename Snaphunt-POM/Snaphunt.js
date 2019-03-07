const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized", "--window-size=1920,1080"]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1348, height: 611 });

  await page.goto("https://beta.snaphunt.com");

  //let el = await page.$x('//*[@id="root"]/div/div[1]/div/div[2]/div/div[3]/div');
  await page.click(
    "div.App div.HomeHeader div.HomeHeader-Container div.HomeHeader-rightChild div.HomeHeader-rightContainerTextholder div.HomeHeader-headingTextHolder:nth-child(6) > div.HomeHeader-headingText"
  );
  //await page.$x("//div[contains(text(),'SIGN IN')]");
  await page.type(
    "div.ModalPanel div.ModalPanel-content div.Auth div.LoginFlow div.LoginFlow-panelContainer div.Login-popUp div.Login-inputContainer div.Login-emailContainer div.Input.Input-hollow > input.Input-box",
    "atul@manager.com",
    { delay: 10 }
  );

  await page.type(
    "div.ModalPanel div.ModalPanel-content div.Auth div.LoginFlow div.LoginFlow-panelContainer div.Login-popUp div.Login-inputContainer div.Login-passwordContainer div.Input.Input-hollow > input.Input-box",
    "admin123",
    { delay: 10 }
  );

  await page.click(
    "div.ModalPanel div.ModalPanel-content div.Auth div.LoginFlow div.LoginFlow-panelContainer div.Login-popUp div.CenteredContainer div.Login-loginButtonContainer > div.Button.Button-iconVisible"
  );
  await page.mouse.click(500, 500);

  await page.click(
    "div.App div.App-centeredContainer.ScreenResize div.SideNavigator div.SideNavigator-list div.SideNavigator-listHolder div.SideNavigatorItem:nth-child(2) div.SideNavigatorItem-buffer div.SideNavigatorItem-icon div.Icon.Icon-medium > div.Icon-activeImage"
  );

  await page.waitFor(15000);
  // window.scrollBy(0, document.body.scrollHeight);

  /*
  await page.click(
    "div.App div.App-centeredContainer.ScreenResize div.SideNavigator.SideNavigator-open div.SideNavigator-list div.SideNavigator-listHolder div.SideNavigatorItem:nth-child(2) div.SideNavigatorItem-buffer div.SideNavigatorItem-button div.Button.Button-iconVisible > span:nth-child(1)"
  );
*/

  /*
  await page.screenshot({ path: "Snaphunt.png" });
  */
  await browser.close();
})();
