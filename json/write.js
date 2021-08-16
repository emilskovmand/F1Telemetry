var fs = require('fs');

function toJson(JSONdata) {
    if (data !== undefined) {
        return JSON.stringify(JSONdata, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v)
            .replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
}

module.exports = function (data, category = undefined) {
    fs.writeFileSync('./state.json', toJson(data), function (err) {
        console.log("Error saving state data.");
        console.log(err);
        return;
    });
}