import { danger, markdown, warn, schedule } from 'danger'
// const { generateReport } = require('./script/report')
import { generateReport } from './script/report'

const pr = danger.github.pr
if (pr) {
    if (pr.assignee === null) {
        warn("Please assign someone to merge this PR, and optionally include people who should review.")
        markdown('Please assign someone to merge this PR')
    }

    const reportList = generateReport()
    console.log('1. pr=>', pr)
    console.log('2. reportList=>', reportList)

    if (Object.keys(reportList).length) {
        markdown('### Unit test coverage report:')
        const coverReportRows = []
        schedule(async () => {
            Object.keys(reportList).forEach(key => {
                coverReportRows.push(`| ${key} | ${reportList[key].statements.d} (${reportList[key].statements.e}) | ${reportList[key].branches.c} (${reportList[key].branches.e}) | ${reportList[key].functions.c} (${reportList[key].functions.e}) | ${reportList[key].lines.c} (${reportList[key].lines.e}) |`)
            })
            console.log('coverReportRows=>', coverReportRows)
            if (coverReportRows.length > 0) {
                markdown(
                    '\n | Packages | Statements | Branches | Functions | Lines |\n | --- | --- | --- | --- | --- |\n' + coverReportRows.join('\n')
                )
            }
        })
    }
    // markdown(`This is test\n${data.join(', ')}`)

}