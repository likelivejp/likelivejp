import Vue from 'vue'

import { fileMap } from '../.tmp/summary.json';

Vue.prototype.$getContentsData = () => fileMap

