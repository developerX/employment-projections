const careers = require('./career-filtered.json');

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: careers
  })
}