import { danger, markdown, warn } from 'danger'
const { generateReport } = require('./script/report')
const pr = danger.github.pr

if (pr) {
    if (pr.assignee === null) {
        warn("Please assign someone to merge this PR, and optionally include people who should review.")
        markdown('Please assign someone to merge this PR')
    }
    // const data = generateReport()
    // console.log('1. pr=>', pr)
    // console.log('2. data=>', data)
}