import Vue from 'vue'

import { sourceFileArray } from '../.tmp/summary.json';

Vue.prototype.$getPaths = (cat) => {
  let filteredArray = sourceFileArray.filter(v => v.split('/')[1]===cat)
  return filteredArray.map(sourceFileName => {
    const deleteExt = sourceFileName.replace('.md', '')
    let splited = deleteExt.split("/")
    splited.shift()
    const categoryName = splited[0]
    const fileName = splited[splited.length - 1]
    return `/${splited.slice(0, splited.length - 1).join('/')}/${fileName}`
  })
}
