const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Khởi tạo trình duyệt Chrome
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().headless())
  .build();

async function loginToFacebook() {
  try {
    // Mở trang Facebook
    await driver.get('https://www.facebook.com/');

    // Điền thông tin đăng nhập
    await driver.findElement(By.id('email')).sendKeys('your_email@example.com', Key.RETURN);
    await driver.findElement(By.id('pass')).sendKeys('your_password', Key.RETURN);

    // Chờ cho trang đăng nhập thành công (bạn có thể điều chỉnh thời gian chờ)
    await driver.wait(until.titleIs('Facebook'), 10000);

    console.log('Đăng nhập thành công!');
  } catch (error) {
    console.error('Đăng nhập thất bại:', error);
  } finally {
    // Đóng trình duyệt sau khi hoàn thành
    await driver.quit();
  }
}

// Gọi hàm đăng nhập
loginToFacebook();