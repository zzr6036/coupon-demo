
const headCommit = String(process.argv.slice(2))
const jiraTicketRegex = /((SANFRANSOK|MH)-\d+)/
const sampleList = [
    '[MH-123] This is the testing (#28)',
    '',
    '* this is the first commit',
    '',
    '* this is the second commit'
]
function commit() {
    const commitList = typeof headCommit === 'string' ? headCommit.split(/\r?\n/) : []
    const { title, message } = getTicketInfo(commitList, headCommit)
    // console.log('process.argv.slice===>', process.argv.slice(2))
    // console.log(' process.argv ====>', process.argv)
    // console.log('headCommit==>', headCommit)
    // console.log('commitList==>', commitList)
    console.log('title==>', title)
    console.log('message==>', message)
}

function getTicketInfo(commitList, headCommit) {
    const titleResult = jiraTicketRegex.exec(headCommit)
    const jiraTicket = titleResult[0]
    const message = commitList[0]
    const isSkipDanger = headCommit.toLowerCase().includes('#skip-danger')
    // let messageObj = commitList.reduce((acc, item) => {
    //     if (item.includes(jiraTicket)) {
    //         return { ...acc, [jiraTicket]: [...([item] || [])] }
    //     }
    // }, {})
    // let messageObj = sampleList.reduce((acc, item) => {
    //     if (item.includes(jiraTicket)) {
    //         console.log('here')
    //         return { ...acc, [jiraTicket]: [...([item] || [])] }
    //     }

    // }, {})
    // console.log('jiraTicket===>', jiraTicket)
    // console.log('isSkipDanger===>', isSkipDanger)
    // console.log('messageObj===>', messageObj)
    if (isSkipDanger) {
        return {
            title: '',
            message: message
        }
    }
    return {
        title: jiraTicket,
        message: message
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
// node commit1.js "[MH-123] tHIS IS THE COMMIT (#26) \n*[MH-123] test" 

// '[MH-1111] This is the testing title (#27)\n' +
// '\n' +
// '* this is the first commit\r\n' +
// '\r\n' +
// '* this is the second commit'

// node commit1.js '[MH-1111] This is the testing title (#27)\n \n * this is the first commit\r\n \r\n * this is the second commit'
