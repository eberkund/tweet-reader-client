(function () {
  var template = Handlebars.templates['template'];

  Handlebars.registerHelper('prettyDate', function (timestamp) {
    return moment(new Date(timestamp)).format('MMMM Do')
  });

  Handlebars.registerHelper('autoLink', function (tweet) {
    return twttr.txt.autoLink(tweet);
  })

  $.get('tweets.json', function (data) {
    var html = template(data)
    $('#twitter-timeline').html(html)
  })
})()