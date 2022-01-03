

const commits = process.argv.slice(2)
console.log('argu====>', process.argv)
async function commit() {
    console.log('todo')
    console.log('commits====>', commits)
    console.log('type of commits1====>', typeof commits)
}

commit()