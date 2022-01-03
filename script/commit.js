

const commits = process.argv.slice(2)
// console.log('commits====>', commits)
async function commit() {
    console.log('todo')
    console.log('commits====>', commits)
    console.log('type of commits1====>', typeof commits)
}

commit()