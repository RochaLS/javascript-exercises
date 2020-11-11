const ftoc = function(temp) {
  return Number(((temp - 32) / 1.8).toFixed(1))
}

const ctof = function(temp) {
  return Number(((temp * 1.8) + 32).toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
