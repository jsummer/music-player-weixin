function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatPlaytime (seconds) {
  let minutes = Math.floor(seconds / 60)
  seconds %= 60
  if (seconds < 10) seconds = '0' + seconds
  if (minutes < 10) minutes = '0' + minutes
  return `${minutes}:${seconds}`
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  formatPlaytime: formatPlaytime
}
