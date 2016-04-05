var parseCount = function(body) {
  var stats = {timestamp: new Date(body.delState.timestamp).toString() }
  return body.delSuper.del
    .reduce(function(memo, party) {
      memo[party.pId] = party.State
        .find(function(state) { return state.sId == 'US' }).Cand
        .map(function(cand) { return {name: cand.cName, total: cand.dTot - cand.sdTot} })
      return memo
    }, {}).Dem
    .filter(function(cand) { return cand.name === 'Sanders' || cand.name == 'Clinton' })
    .reduce(function(memo, cand) { memo[cand.name] = cand.total; return memo }, stats)
}

var writeBody = function(object) {
  document.getElementById('bernie_count').innerHTML = object.Sanders
  document.getElementById('hilary_count').innerHTML = object.Clinton
  document.getElementById('timestamp'   ).innerHTML = object.timestamp
}

// XHR //
var url = 'http://vps.audibleblink.com/delegates/reports.json'
var xmlhttp = new XMLHttpRequest()

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var body  = JSON.parse(xmlhttp.responseText)
    writeBody( parseCount(body) )
  }
}

xmlhttp.open('GET', url)
xmlhttp.send()
