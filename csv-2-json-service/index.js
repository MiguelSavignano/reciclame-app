const fs = require('fs')
const _ = require('lodash')
const { typeShortDescription } = require("./mappings")
const { CSVColumn } = require('./utils/readCsv')

const csvFilePath = __dirname + '/data/Tipos_Residuos.csv'
const content = fs.readFileSync(csvFilePath, 'latin1')

const run = async () => {
  let { result } = await CSVColumn(content, { parseName: (name) => name.replace(//, '').trim() })

  const resultparsed = _.uniqBy(result.map(it => {
    return {
      ...it,
      group: typeShortDescription[it.type]
    }
  }).reduce((memo, it) => {
    const elements = it.name.split(", ")

    if (elements && elements.length) {
      elements.forEach(el => {
        memo.push({ ...it, name: el })
      })
    } else {
      memo.push({ ...it })
    }
    return memo
  }, []), 'name')

  const items = _.orderBy(resultparsed, ['name', 'group'])
  fs.writeFileSync('src/data/tipos_residuos.json', JSON.stringify(items, null, 2))

  const groups = Object.keys(_.groupBy(resultparsed, 'group'))
  fs.writeFileSync('src/data/groups.json', JSON.stringify(groups, null, 2))


  const types = Object.keys(_.groupBy(resultparsed, 'type'))
  fs.writeFileSync('src/data/types.json', JSON.stringify(types, null, 2))
}

run()
