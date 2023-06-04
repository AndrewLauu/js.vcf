const fs = require('fs')

const { parseVCard } = require('..')
const { parseVCards } = require('..')
const vcardQuoted = require('./data/vcard-withQuotedPrintableEncoding.js')

console.log('This is the test of single csv.')
singleFiles = ['photo-base64.vcf', 'quoted-list.vcf', 'sample_one.vcf', 'xing.vcf']
for (var i = 0; i < singleFiles.length; i++) {
  const text = fs.readFileSync('./test/data/' + singleFiles[i]).toString()
  var cards = parseVCard(text)
  var json = JSON.stringify(cards, null, 2)

  console.log(json)
}

var cards = parseVCard(vcardQuoted)
var json = JSON.stringify(cards, null, 2)

console.log(json)


console.log('This is the test of batch csv.')

const text2 = fs.readFileSync('./test/data/sample_batch.vcf').toString()

var cards = parseVCards(text2)
var json = JSON.stringify(cards, null, 2)

console.log(json)