const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class DB {
  read() {
    return readFile('db/db.json', 'utf8');
  }
  getNotes() {
    return this.read().then(notes => {
      let notesPostParse;
      try {
        notesPostParse = [].concat(JSON.parse(notes))
      } catch (err) {
        notesPostParse = []
      }
      return notesPostParse
    })
  }
};

module.exports = new DB();