import distanceInWords from 'date-fns/distance_in_words'
import template from './template.handlebars'
import handlebars from 'handlebars/runtime'
import { autoLink } from 'twitter-text'
import { get } from 'axios'

handlebars.registerHelper('prettyDate', timestamp => {
  return distanceInWords(new Date(), new Date(timestamp), {addSuffix: true})
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
