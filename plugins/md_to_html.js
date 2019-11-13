import Vue from 'vue'
import MarkdownIt from 'markdown-it'

Vue.prototype.$mdToHtml = md => {
  let mdit = new MarkdownIt({
    html: true
  })
  return mdit.render(md)
}
