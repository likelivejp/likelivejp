import Vue from 'vue'

import { sourceFileArray } from '../.tmp/summary.json';

const routes = sourceFileArray.map(sourceFileName => {
  return sourceFileNameToUrl(sourceFileName);
});

function sourceFileNameToUrl(filepath) {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const categloryName = deleteExt.split('/')[deleteExt.split('/').length - 2]
  const splitArray = fileName.split('-')

  return `/${categloryName}/${splitArray.slice(0, 3).join('-')}/${splitArray.slice(3).join('-')}`
};

Vue.prototype.$getPaths = () => routes

