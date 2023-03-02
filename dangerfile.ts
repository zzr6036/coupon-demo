import { danger, markdown, warn, schedule } from 'danger'
const { generateReport } = require('./script/report')
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
        let coverReportRows: string[] = []
        schedule(async () => {
            Object.keys(reportList).forEach(key => {
                coverReportRows.push(`| ${key} | ${reportList[key].statements.c} | ${reportList[key].branches.c} | ${reportList[key].functions.c} | ${reportList[key].lines.c} |`)
            })
            if (coverReportRows.length > 0) {
                markdown(
                    '\n | Packages | Statements | Branches | Functions | Lines |\n | --- | --- | --- | --- | --- |\n' + coverReportRows.join('\n')
                )
            }
        })
    }
    // markdown(`This is test\n${data.join(', ')}`)

}