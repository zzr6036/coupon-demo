
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
        },
        packageB: {
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
        },
        packageC: {
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
        },
        packageD: {
            statements: {
                a: null,
                b: null,
                c: null,
                d: '',
                e: ''
            },
            branches: {
                a: 100,
                b: 100,
                c: 200,
                d: '50%',
                e: '100/200'
            },
            functions: {
                a: null,
                b: null,
                c: null,
                d: '',
                e: ''
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
