var fs = require('fs');

module.exports = function () {
    var data = fs.readFileSync('./state.json');
    try {
        return JSON.parse(data);
    } catch (err) {
        console.log("Error parsing JSON file");
        console.log(err);
    }
}