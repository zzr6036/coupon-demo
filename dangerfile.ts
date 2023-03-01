import { danger, markdown } from 'danger'
const { generateReport } = require('./script/report')
const pr = danger.github.pr

if (pr) {
    const data = generateReport()
    console.log('1. pr=>', pr)
    console.log('2. data=>', data)
    markdown(`This is test\n${data.join(', ')}`)
}