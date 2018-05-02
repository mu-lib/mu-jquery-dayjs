(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["dayjs"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("dayjs"));
  } else {
    root["mu-jquery-dayjs/jquery.dayjs"] = factory(root["dayjs"]);
  }
})(this, function (dayjs) {
  var re = /^(isSame|isBefore|isAfter)(?:(?:\=(.+))|(?:([\+\-]\d+)(years|months|days|minutes|seconds)))/;

  function getDate(matches) {
    return matches[2]
      ? dayjs(matches[2])
      : dayjs().add(parseInt(matches[3]), matches[4]);
  }

  return function ($) {
    return $.expr.createPseudo
      ? $.expr.createPseudo(function (match) {
        var matches = re.exec(match);

        return function (element) {
          return matches && dayjs($(element).val())[matches[1]](getDate(matches));
        }
      })
      : function (element, index, match) {
        var matches = re.exec(match);
        return matches && dayjs($(element).val())[matches[1]](getDate(matches));
      };
  }
});