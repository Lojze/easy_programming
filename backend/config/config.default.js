/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585808226590_5699';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql',
      // 这里也可以通过 .env 文件注入环境变量，然后通过 process.env 获取
      host: 'xxx',
      port: 'xxx',
      database: 'xxx',
      username: 'xxx',
      password: 'xxx',
    },
  };

  config.redis = {
    client: {
      // Redis port
      port: 6379,
      // Redis host
      host: '127.0.0.1',
      password: 'auth',
      db: 0,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
