function tDays () {
  var election = new Date(2016, 10, 8)
  var now = new Date()
  return Math.floor((now - election) / (1000 * 60 * 60 * 24))
}

if (require.main === module) {
  console.log(tDays())
}

module.exports = tDays
