const metaphorlism = require("../../json/metaphorlism.json");

class MetaphorlismMD {
  getInfo() {
    return metaphorlism;
  }
}

module.exports = new MetaphorlismMD();
