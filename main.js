module.exports =
    process.env.NODE_ENV === 'production'
        ? require('./dist/hello.cjs.prod.js')
        : require('./dist/hello.cjs.js')
