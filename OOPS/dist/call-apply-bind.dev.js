"use strict";

var userDtl = {
  fName: "Vikas",
  lName: "jain"
};

function fullName() {
  for (var _len = arguments.length, userInfo = new Array(_len), _key = 0; _key < _len; _key++) {
    userInfo[_key] = arguments[_key];
  }

  return "".concat(this.fName, " ").concat(this.lName, " ").concat(userInfo);
} // console.log(fullName.call(userDtl, 'Delhi', 'india'));


console.log(fullName.apply(userDtl, ['Delhi', 'india']));