const { generateReport } = require('./report')

function report() {
    const reportList = generateReport()
    console.log('1. pr=>', pr)
    console.log('2. reportList=>', reportList)
    if (Object.keys(reportList).length) {
        markdown('### Unit test coverage report:')
        const coverReportRows = []
        schedule(async () => {
            Object.keys(reportList).forEach(key => {
                coverReportRows.push(`| ${key} | ${reportList[key].statements.d || '-'} <br> ${reportList[key].statements.e || '-'} | ${reportList[key].branches.d || '-'} <br> ${reportList[key].branches.e || '-'} | ${reportList[key].functions.d || '-'} <br> ${reportList[key].functions.e || '-'} | ${reportList[key].lines.d || '-'} <br> ${reportList[key].lines.e || '-'} |`)
            })
            console.log('coverReportRows=>', coverReportRows)
            if (coverReportRows.length > 0) {
                markdown(
                    '\n | Packages | Statements | Branches | Functions | Lines |\n | --- | --- | --- | --- | --- |\n' + coverReportRows.join('\n')
                )
            }
        })
    }
}

if (require.main === module) {
    report()
}
