let jobs = require('./jobs.json');
let fs = require('fs');

let json = jobs.map(job => {
  let full = job['0'].split('\n')
  let extraTitles = full[3].split('*');
  let removeFirst = extraTitles.shift();

  return {
    title: full[0],
    otherTitles: extraTitles.map(t => t.trim()),
    socCode: job['1'],
    employment2016: +job['2'].replace(',', ''),
    employment2026: +job['3'].replace(',', ''),
    empChangeThousands: +job['4'],
    empChangePerc: +job['5'],
    occupationalOpenings20162026: +job['6'],
    medianSalary: +job['7'].replace(/\D+/g, ''),
    educationLevel: job['8'],
    workExperienceRelated: job['10'],
    typicalOnTheJobTraining: job['12']
  };
})

fs.writeFile('career-filtered.json', JSON.stringify(json), 'utf8', () => console.log("Wrote the file"));