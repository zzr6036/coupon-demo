
const { commits } = require('minimist')(process.argv.slice(2))
console.log('commits===>', commits)
async function commit() {
    console.log('todo')
}

commit()