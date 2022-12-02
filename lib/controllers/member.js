const MemberMD = require("../models/member");

class MemberCT {
  getMember(req, res) {
    return res.status(200).json(MemberMD.getMember());
  }
}

module.exports = new MemberCT();
