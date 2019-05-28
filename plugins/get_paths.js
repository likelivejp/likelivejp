import Vue from 'vue'

import { sourceFileArray } from '../.tmp/summary.json';

const routes = sourceFileArray.map(sourceFileName => {
  return sourceFileNameToUrl(sourceFileName);
});

function sourceFileNameToUrl(filepath) {
  const deleteExt = filepath.replace('.md', '')
  let splited = deleteExt.split("/")
  splited.shift()
  const categoryName = splited[0]
  const fileName = splited[splited.length - 1]
  return `/${splited.slice(0, splited.length - 1).join('/')}/${fileName}`
};

Vue.prototype.$getPaths = () => routes
