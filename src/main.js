import moment from 'moment'
import template from './template.js'
import handlebars from 'handlebars/runtime'
import { autoLink } from 'twitter-text'
import { get } from 'axios'

handlebars.registerHelper('prettyDate', timestamp => {
  return moment(new Date(timestamp)).fromNow()
})

handlebars.registerHelper('autoLink', tweet => {
  return autoLink(tweet)
})

get('tweets.json').then(response => {
  let container = document.getElementById('twitter-timeline')
  container.innerHTML = template(response.data)
}).catch(error => {
  console.error(error)
})
