const mkdirp = require('mkdirp');
const yaml = require('js-yaml');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const components = 'components';
var parentDir = path.join(__dirname, '../');

// output file
var all = {
      components: []
}

// read all files
var sources = [parentDir + '/model/**/*.yml'];
var files = [].concat.apply([], sources.map(g => glob.sync(g, { nodir: true })));

files.forEach(file => {
      if (file.endsWith('.yml')) {
            console.log('Trying to merge file: ', file);
            var doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));

            if (doc !== undefined && doc[components] !== undefined) {
                  all[components] = all[components].concat(doc[components]);
                  console.info('Merged..');
            } else {
                  console.warn('Skipping as no components defined..');
            }
      }
});

// dump combined objects
const result = yaml.safeDump(all);

// write to file
console.info('Writing to build/output.yml');
mkdirp.sync(parentDir + '/build');
fs.writeFileSync(parentDir + '/build/output.yml', result);
