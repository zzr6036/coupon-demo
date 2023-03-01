import { danger, markdown } from 'danger'

const pr = danger.github.pr

if (pr) {
    console.log('pr=>', pr)
}