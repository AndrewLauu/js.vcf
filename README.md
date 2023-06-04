# js.vcf
[![npm](https://img.shields.io/npm/v/js.vcf.svg?style=flat-square)](https://npmjs.com/package/js.vcf)
[![npm license](https://img.shields.io/npm/l/js.vcf.svg?style=flat-square)](https://npmjs.com/package/js.vcf)
***

<!--ts-->
<!--te-->

## Introduction

This is a simple javascript lib which parses vCard file (\*.vcf) and generate vcf object.

- Only support vCard 2.1 version.
- Only support parse, generating is not currently (or permanently) supported.

## USE

### Install

`npm install js.vcf`

### parse one vCard

```javascript
const fs = require('fs')
const {parseVCard} = require('js.vcf')

const vcfText = fs.readFileSync('/path/to/vcf.vcf')
var vCard = parseVCard(vcfText)
console.log(vCard.NF[0].VALUE)
console.log(vCard)
```

```javascript
{
    VERSION:2.1,
    N:[
        {
            PROPERTY1:property,
            PROPERTY2:property,
            VALUE:value
        }
    ],
    NF:{...},
    TEL:{...},
    ...
}
```

### parse batch of vCards

```javascript
const fs = require('fs')
const {parseVCards} = require('js.vcf')

const vcfText = fs.readFileSync('/path/to/vcf.vcf')
var vCards = parseVCard(vcfText)

console.log(vCards)
```

```javascript
[
    vCardObj,
    vCardObj,
    ...
]
```
