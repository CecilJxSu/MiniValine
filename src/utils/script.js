import { pf, JSDELIVR_CDN } from '../Default'
import getScript from './plugins/getScript'
import getScriptfun from './plugins/getScriptfun'
import GetIP from './plugins/GetIP'
const script = (root, init = false) => {
  if(init) {
    var vendor = []
    
    if (!window.autosize) {
      vendor.push('npm/autosize@4.0.2/dist/autosize.min.js')
    }
    if (!window.filterXSS) {
      vendor.push('npm/xss@1.0.8/dist/xss.min.js')
    }
    if (!root.config.closeUA && !window.UAParser) {
      vendor.push('npm/ua-parser-js@0.7.22/src/ua-parser.min.js')
    }
    if ((root.math || typeof root.config.math == 'undefined') && typeof MathJax === 'undefined') {
      vendor.push('npm/mathjax@3.2.2/es5/tex-svg.js')
    }
    if ((root.md || typeof root.config.md == 'undefined') && !window.marked) {
      vendor.push('npm/marked@1.2.0/lib/marked.min.js')
    }

    getScriptfun(JSDELIVR_CDN + '/combine/' + vendor.join(','), function() {
      root.initBody()
      window.MV.scriptEle = true
    }, window.MV.scriptEle == true || vendor.length == 0 )
  } else {
    if (!root.config.NoRecordIP) {
      if (typeof window.MV.ip == 'undefined') {
        GetIP(root)
      } else {
        root.C.ip = window.MV.ip
      }
    }

    var vendor = []

    if (!window.md5) {
      vendor.push('npm/blueimp-md5@2.18.0/js/md5.min.js')
    }

    if (!window.AV) {
      vendor.push('npm/leancloud-storage@4.15.0/dist/av-min.js')
    }

    getScriptfun(JSDELIVR_CDN + '/combine/' + vendor.join(','), function() {
      root.initCheck()
      window.MV.scriptInit = true
    }, window.MV.scriptInit == true || vendor.length == 0 )
  }
}
module.exports = script
