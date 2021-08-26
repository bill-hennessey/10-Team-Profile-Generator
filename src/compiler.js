const mgrCard = require("./mgrCard");
const intCard = require("./intCard");
const engCard = require("./engCard");

const compiler = (teamArray) => {
  for (let i = 0; i < teamArray.length; i++) {
    if (this.role === "Manager") {
      let div = document.createElement("div");
      div.innerHTML = mgrCard(mgr);
      document.body.appendChild("#card-div");
    } else if (this.role === "Engineer") {
      let div = document.createElement("div");
      div.innerHTML = engCard(mgr);
      document.body.appendChild("#card-div");
    } else {
      let div = document.createElement("div");
      div.innerHTML = intCard(mgr);
      document.body.appendChild("#card-div");
    }
  }
};

module.exports = compiler;
