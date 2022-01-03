const path = require('path')

console.log('path==>', path)
const commits = process.argv.slice(2)
console.log('commits====>', commits)
async function commit() {
    console.log('todo')
}

commit()