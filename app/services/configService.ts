const projectConfig = require("../../config/projectConfig.json");
const object = require("lodash/fp/object");

export function loadConfig() {
  let config = projectConfig;

  try {
    const localConfig = require(`../../config/projectConfig.local.json`);
    config = object.merge(config, localConfig);
    return config;
  } catch (e) {
    console.info(e);
    return config;
  }
}
