const isDebug = process.env.DEBUG === 'enable';

module.exports = async () => {
  if (!isDebug && global.BROWSER) {
    await global.BROWSER.close();
  }
};
