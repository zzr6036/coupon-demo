
function generateReport() {
    const report = {
        packageA: {
            statements: {
                a: 100,
                b: 100,
                c: 200,
                d: '50%',
                e: '100/200'
            },
            branches: {
                a: 100,
                b: 100,
                c: 200,
                d: '50%',
                e: '100/200'
            },
            functions: {
                a: 100,
                b: 100,
                c: 200,
                d: '50%',
                e: '100/200'
            },
            lines: {
                a: 100,
                b: 100,
                c: 200,
                d: '50%',
                e: '100/200'
            }
        }
    }
    return report
}

module.exports = {
    generateReport
}
