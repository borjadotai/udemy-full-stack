if (process.env.NODE_ENV === 'production') {
    modeule.exports = require('./prod');
} else {
    modeule.exports = require('./dev');
}