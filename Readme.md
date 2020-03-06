# hns-domain-ttr

check whether a domain has been rolled out for Handshake registering

### install

```shell
$ npm install -g hns-domain-ttr
```

### cli

```shell
$ hns-domain-ttr <domain-name>
```

### node.js

```javascript
const ttr = require('hns-domain-ttr')

const timeToRollout = ttr('foo')

if (!timeToRollout) { // returns 0 when it has rolled out
  console.log('it has rolled out')
} else { // or the time in milliseconds until the rollout
  console.log('time to rollout:', timeToRollout)
}
```

### notes

i still haven't figured out the exact algorithm that calculates
the rollout time but this seems to work approximately well,
sooooo, if someone knows the right math please provide a PR! :)

### donate

coin | wallet
 --- | ---
bitcoin (BTC) | 3LV3Gpgg75exSPdyEzwPb2BFeVpdXp51rX
handshake (HNS) | hs1qpaa2xsk74dqvecrcgf8llceysqxp09lzqwvz76

### license

MIT
