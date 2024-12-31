const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = low(adapter);

db.defaults({ interactions: 0 }).write();

function updateInteractions() {
    db.update('interactions', n => n + 1).write();
}

module.exports = { updateInteractions };
