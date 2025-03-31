"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Halo,nama saya ", ",saya ", " tahun email", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// // Tagged templates
// const nama = "Fauzan";
// const umur = 17;
//
// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;
//
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
//
// const str = coba`Halo,nama saya ${nama},saya ${umur} tahun`;
// console.log(str);
var nama = "Fauzan";
var umur = 17;
var email = "fauzanmasud628@gmail.com";

function highlight(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (result, str, i) {
    return "".concat(result).concat(str, "<span class=\"hl\">").concat(values[i] || "", "</span>");
  }, "");
}

var str = highlight(_templateObject(), nama, umur, emailmm);
console.log(str);
document.body.innerHTML = str;