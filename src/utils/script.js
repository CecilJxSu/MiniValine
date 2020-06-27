import { pf } from '../Default'
import getScript from './plugins/getScript'
import GetIP from './plugins/GetIP'
const script = (root) => {
  if (!root.config.NoRecordIP) {
    if (typeof window.MV.ip == 'undefined') {
      GetIP(root)
    } else {
      root.C.ip = window.MV.ip
    }
  }
  if (typeof window.MV.pf == 'undefined') {
    getScript(pf)
    window.MV.pf = true
  }
  if ((typeof root.config.danmu == 'undefined') || (root.config.danmu)) {
    if (typeof window.MV.jq == 'undefined') {
      if (typeof jQuery == 'undefined') {
        getScript('https://cdn.jsdelivr.net/npm/jquery')
      }
      window.MV.jq = true
    }
  }
}
module.exports = script
