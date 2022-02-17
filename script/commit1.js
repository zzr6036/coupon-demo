// import { default as fetch } from 'node-fetch'
// const { default: fetch } = require('node-fetch')

const commits = process.argv.slice(2)
console.log('argu====>', process.argv)
async function commit() {
    console.log('todo')
    console.log('commits====>', commits)
    console.log('type of commits1====>', typeof commits)
    const commitList = []
    if (commits && commits.length > 0) {
        commits.forEach(commit => {
            console.log('commit===>', commit)
        })
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

commit()


// const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });