let cheerio = require('cheerio');
let request = require('request');
let url = 'https://data.bls.gov/projections/occupationProj';
let fs = require('fs');

// const dummy = `<ul id="blah"><li>test</li><li>test2</li><li>test3</li></ul>`
let $;
// let $ = cheerio.load(dummy)
// console.log(cheerio);


var companiesList = [];

request(url, function (error, response, body) {
  let results = [];
  let $ = cheerio.load(body);
  $('tr').each((index, element) => {
    let career = {};
    $(element).find('td').each((idx, elem) => {
      career[idx] = $(elem).text();
    });
    results.push(career);
  })
  let json = JSON.stringify(results);
  fs.writeFile('careers.json', json, 'utf8', () => console.log("Wrote the file"));
});

// console.log($);
// For each .item, we add all the structure of a company to the companiesList array
// Don't try to understand what follows because we will do it differently.
// $('tr').each(function (index, element) {
//   // console.log(index, element)
//   companiesList[index] = {};
//   companiesList[index]['header'] = $(element).text();

//   // var header = $(element).find('.header');
//   // companiesList[index]['name'] = $(header).find('[itemprop=name]').text();
//   // companiesList[index]['description'] = $(header).find('[rel=description]').text();
//   // companiesList[index]['url'] = $(header).find('.header [itemprop=name] a').getAttribute('href');
//   // var contact = $(element).find('.contact');
//   // companiesList[index]['contact'] = {};
//   // companiesList[index]['contact']['telephone'] = $(contact).find('[itemprop=telephone]').text();
//   // companiesList[index]['contact']['employee'] = {};
//   // companiesList[index]['contact']['employee']['name'] = $(contact).find('[itemprop=employeeName]').text();
//   // companiesList[index]['contact']['employee']['jobTitle'] = $(contact).find('[itemprop=employeeJobTitle]').text();
//   // companiesList[index]['contact']['employee']['email'] = $(contact).find('[itemprop=email]').text();
// });

const test = async () => {
  return await cheerio.load('https://google.com');
}

// console.log(test().then(some => console.log(some)));
console.log(companiesList);