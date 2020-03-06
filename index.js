#!/usr/bin/env node

const Network = require('hsd/lib/protocol/network')
const rules = require('hsd/lib/covenants/rules.js')
const network = Network.primary
const DAY_TIME = 24 * 60 * 60 * 1000
const WEEK_TIME = 7 * DAY_TIME
const HANDSHAKE_START = new Date('02/17/2020').getTime()

module.exports = domaimTimeToRollout

function domaimTimeToRollout (name) {
  const week = rules.getRollout(rules.hashString(name), network)[1] - 1
  const time = HANDSHAKE_START + week * WEEK_TIME - Date.now()
  return time < 0 ? 0 : time
}

if (require.main === process.mainModule) {
  const domain = process.argv[2]
  if (!domain) {
    console.log('usage: hns-domain-ttr <domain-name>')
    return process.exit(1)
  }

  const time = domaimTimeToRollout(domain)

  console.log(!time
    ? `IT'S OUT! :)\ntry bidding at:\nhttps://www.namebase.io/domains/${domain}`
    : `hasn't rolled out yet.. :( approx. in ${+(time / DAY_TIME).toFixed(1)} days`
  )
}
