// import { default as fetch } from 'node-fetch'
// const { default: fetch } = require('node-fetch')

const commits = process.argv.slice(2)
console.log('argu====>', process)
function commit(allCommits) {
    console.log('todo')
    console.log('allCommits====>', allCommits)
    const list = allCommits.split('|| ') || []
    console.log('list====>', list)
    // console.log('allCommits json====>', JSON.parse(allCommits))
    const commitList = []
    for (const commit of list) {
        console.log('commit===>', commit)
        console.log('commit message===>', commit.message)
    }
    // const result1 = await fetch('https://github.com/zzr6036/coupon-demo/commits')
    // console.log('result 1===>', result1)
    // commit2()
}

// async function commit2() {
//     const fetch2 = new fetch({ auth: `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` });
//     const result2 = await fetch2('https://github.com/zzr6036/coupon-demo/commits')
//     console.log('result2===>', result2)
// }

commit(commits)


// const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });