module.exports = function tDays () {
  var election = new Date(2016, 10, 8)
  var now = new Date()
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  var delta = today - election
  return delta / 1000 / 60 / 60 / 24
}

