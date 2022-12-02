const member = require("../../json/member.json");

class MemberMD {
  getMember() {
    return member;
  }
}

module.exports = new MemberMD();
