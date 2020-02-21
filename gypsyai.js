module.exports.AIPlay = function() {
  var total = 0;
  for (var index in arguments) {
    total += arguments[index];
  }
  return total;
};
