const NodeEnvironment = require('jest-environment-node'); // eslint-disable-line import/no-extraneous-dependencies

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.global.BROWSER = global.BROWSER;
    this.global.PAGE = global.PAGE;
  }
}

module.exports = PuppeteerEnvironment;
