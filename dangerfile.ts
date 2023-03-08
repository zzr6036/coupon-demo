import { danger, markdown, warn, schedule } from 'danger'
const { generateReport } = require('./script/report')
// import { generateReport } from './script/report'
// import defineConfig from './vitest.config'
const { defineConfig } = require('./vitest.config')

const pr = danger.github.pr
const modifiedFiles = danger.git.modified_files;
const isPRMerged = false
console.log('1.danger github=>\n', danger)
console.log('1.danger github=>\n', danger.github)
// console.log('test=>', danger.github.api.pulls.checkIfMerged)


if (pr) {
    // 1) No assigner
    if (pr.assignee === null) {
        warn("Please assign someone to merge this PR, and optionally include people who should review.")
        markdown('Please assign someone to merge this PR')
    }

    // 2) If there are changes, but not unit test
    if (!isPRMerged) {
        const hasPackageChanges = modifiedFiles.length > 0;
        const noUnitTestFiles = [];
        const typescriptFilePattern = /.ts|.tsx/
        const ignoreFiles = [/*'dangerfile.ts'*/]
        modifiedFiles.filter(filepath => {
            const pieces = filepath.split('/');
            const lastPieces = pieces.pop();
            const fileName = lastPieces?.split('.')[0];
            const isIncludeIgnoreFiles = ignoreFiles.some(f => lastPieces.includes(f))
            if (!isIncludeIgnoreFiles && typescriptFilePattern.test(lastPieces) && !filepath.includes(`${fileName}.test`)) {
                noUnitTestFiles.push(filepath);
            }
        });
        if (hasPackageChanges && noUnitTestFiles.length) {
            markdown('### No unit test files : \n - ' + noUnitTestFiles.join('\n-'));
        }
    }
    console.log('defineConfig=>', defineConfig)

    // 3) Generate report
    // if (!isPRMerged) {
    //     const reportList = generateReport()
    //     console.log('1. pr=>', pr)
    //     console.log('2. reportList=>', reportList)
    //     if (Object.keys(reportList).length) {
    //         markdown('### Unit test coverage report:')
    //         const coverReportRows = []
    //         schedule(async () => {
    //             Object.keys(reportList).forEach(key => {
    //                 coverReportRows.push(`| ${key} | ${reportList[key].statements.d || '-'} (${reportList[key].statements.e || '-'}) | ${reportList[key].branches.d || '-'} (${reportList[key].branches.e || '-'}) | ${reportList[key].functions.d || '-'} (${reportList[key].functions.e || '-'}) | ${reportList[key].lines.d || '-'} (${reportList[key].lines.e || '-'}) |`)
    //             })
    //             console.log('coverReportRows=>', coverReportRows)
    //             if (coverReportRows.length > 0) {
    //                 markdown(
    //                     '\n | Packages | Statements | Branches | Functions | Lines |\n | --- | --- | --- | --- | --- |\n' + coverReportRows.join('\n')
    //                 )
    //             }
    //         })
    //     }
    // }
}