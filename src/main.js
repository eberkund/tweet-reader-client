import moment from 'moment'
import template from './template.handlebars'
import handlebars from 'handlebars/runtime'
import twitter from 'twitter-text'
import axios from 'axios'

handlebars.registerHelper('prettyDate', timestamp => {
  return moment(new Date(timestamp)).fromNow()
})

handlebars.registerHelper('autoLink', tweet => {
  return twitter.autoLink(tweet)
})

axios.get('tweets.json').then(response => {
  let container = document.getElementById('twitter-timeline')
  container.innerHTML = template(response.data)
}).catch(error => {
  console.error(error)
})
