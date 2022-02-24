
const headCommit = String(process.argv.slice(2))
const jiraTicketRegex = /((SANFRANSOK|MH|sanfransok|mh)-\d+)/g
const sampleList = [
    '[MH-123] This is the testing (#28)',
    '',
    '* this is the first commit',
    '',
    '* this is the second commit'
]

function commit() {

    const { title, message } = getTicketInfo(headCommit)
    // console.log('process.argv.slice===>', process.argv.slice(2))
    console.log(' process.argv ====>', process.argv)
    // console.log('headCommit==>', headCommit)
    // console.log('commitList==>', commitList)
    console.log('title1==>', title)
    console.log('message==>', message)
}

function getTicketInfo(headCommit) {
    // const commitList = typeof headCommit === 'string' ? headCommit.split(/\r?\n/) : []
    // const strHeadCommit = String(headCommit)
    const commitList = headCommit.split(/\r\n|\n\r|\n|\r|\\r\n|\\n\r|\\r|\\n/) || []
    let ticketList = headCommit.match(jiraTicketRegex) || []
    ticketList = ticketList.map(x => typeof x === 'string' ? x.toUpperCase() : x)
    const uniqTicketList = [...new Set(ticketList)];
    let ticket = '';
    uniqTicketList.forEach(item => {
        ticket += `[${item}](http://xx/${item})  `;
    })
    const message = commitList[0]
    console.log('1. headCommit==>', headCommit)
    console.log('2. commitList===>', commitList)
    return {
        title: ticket ? `Jira Ticket: ${ticket}` : '',
        message
    }
}

commit()
// this is test4
// this is test456

// const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });

// node commit1.js "[MH-111] tHIS IS THE COMMIT (#26)" 
// node commit1.js "[MH-123][SANFRANSOK-1234] tHIS IS THE COMMIT (#26) \n*[MH-123] test" 

// '[MH-1111] This is the testing title (#27)\n' +
// '\n' +
// '* this is the first commit\r\n' +
// '\r\n' +
// '* this is the second commit'

// node commit1.js '[MH-1111] This is the testing title (#27)\n \n * this is the first commit\r\n \r\n * this is the second commit'
// node commit1.js '[MH-1111][mh-123][MH-123] This is the testing title (#27)\n \n * this is the first commit\r\n \r\n * this is the second commit'
// node commit1.js 'This is the testing title (#27)#skip-danger\n \n * this is the first commit\r\n \r\n * this is the second commit'