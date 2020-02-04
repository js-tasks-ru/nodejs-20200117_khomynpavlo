const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const lines = ((this.last != null ? this.last : '') + chunk.toString()).split(`${os.EOL}`);
    this.last = lines.pop();
    lines.forEach(line => this.push(line));
    callback();
  }

 _flush(callback) {
   this.push(this.last != null ? this.last: '')
    callback();
  }
}

const lines = new LineSplitStream({ encoding: 'utf-8',});

function onData(line) {
}

lines.on('data', onData);

lines.write(`first line${os.EOL}second line${os.EOL}third line`);

lines.end();

module.exports = LineSplitStream;