
const headCommit = String(process.argv.slice(2))
const jiraTicketRegex = /((SANFRANSOK|MH)-\d+)/

function commit() {
    const commitList = typeof headCommit === 'string' ? headCommit.split(/\r?\n/) : []
    const { title, message } = getTicketInfo(commitList, headCommit)
    console.log('process.argv.slice===>', process.argv.slice(2))
    console.log(' process.argv ====>', process.argv)
    console.log('headCommit==>', headCommit)
    console.log('commitList==>', commitList)
}

function getTicketInfo(commitList, headCommit) {
    const titleResult = jiraTicketRegex.exec(headCommit)
    const isSkipDanger = headCommit.toLowerCase().includes('#skip-danger')
    let messageObj = commitList.reduce((acc, item) => {
        if (jiraTicketRegex.exec(item)) {
            return { ...acc, [jiraTicketRegex.exec(item)[0]]: [...([item] || [])] }
        }
    }, {})
    // console.log('titleResult===>', titleResult)
    console.log('messageObj===>', messageObj)
    return {
        title: '',
        message: ''
    }
}

// async function commit2() {
//     const fetch2 = new fetch({ auth: `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` });
//     const result2 = await fetch2('https://github.com/zzr6036/coupon-demo/commits')
//     console.log('result2===>', result2)
// }

commit()
// this is test1

// const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });

// node commit1.js "[MH-111] tHIS IS THE COMMIT (#26)" 
// node commit1.js "[MH-111] tHIS IS THE COMMIT (#26) \n*[MH-111] test" 

// '[MH-1111] This is the testing title (#27)\n' +
// '\n' +
// '* this is the first commit\r\n' +
// '\r\n' +
// '* this is the second commit'

// node commit1.js '[MH-1111] This is the testing title (#27)\n \n * this is the first commit\r\n \r\n * this is the second commit'
