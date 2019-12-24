const parse = require('csv-parse');

const output = []
const result = []
let headers = []

const CSVColumn = (content, { parseName = (it) => it }) => new Promise((resolve, reject) => {
  parse(content, {
    delimiter: ';',
    trim: true,
    skip_empty_lines: true,
  })
  // Use the readable stream api
  .on('readable', function(){
    let record
    while (record = this.read()) {
      output.push(record)
    }
  })
  // When we are done, test that the parsed output matched what expected
  .on('end', function(){
    output.forEach((it, index) => {
      if (index == 0) {
        headers = it
      } else {
        it.forEach((item, index) => {
          const name = parseName(item)
          const data = { name, type: headers[index] }
          if (item) {
            result.push(data)
          }
        })
      }
    })
    resolve({ result, headers })
  })
})

module.exports.CSVColumn = CSVColumn
