const mkdirp = require('mkdirp');
const yaml = require('js-yaml');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const components = 'components';
const parentDir = path.join(__dirname, '../');

generateModel = function (doFlush) {
      // output file
      var all = {
            components: []
      }

      // read all component files
      var sources = [parentDir + '/model/components/**/*.yml'];
      var files = [].concat.apply([], sources.map(g => glob.sync(g, { nodir: true })));

      files.forEach(file => {
            if (file.endsWith('.yml')) {
                  console.info('Trying to merge file: ', file);
                  var doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));

                  if (doc !== undefined && doc[components] !== undefined) {
                        all[components] = all[components].concat(doc[components]);
                        console.info('Merged..');
                  } else {
                        throw 'File ' + file + ' not valid as no components defined..\nBUILD FAILED';
                  }
            }
      });

      // add all general files
      var sources = [parentDir + '/model/*.yml'];
      var files = [].concat.apply([], sources.map(g => glob.sync(g, { nodir: true })));

      files.forEach(file => {
            if (file.endsWith('.yml')) {
                  console.info('Trying to merge file: ', file);
                  var doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));

                  if (doc !== undefined) {
                        for (var property in doc) {
                              all[property] = doc[property];
                              console.info('Merged ', property, '..');
                        }
                  } else {
                        console.warn('Skipping as no components defined..');
                  }
            }
      });

      if (doFlush) {
             // dump combined objects as JSON
            const result = JSON.stringify(all, null, 4);
            // write to file
            console.info('Writing to build/model.json');
            mkdirp.sync(parentDir + '/build');
            fs.writeFileSync(parentDir + '/build/model.json', result);
      }

      return all;
}

exports.model = function () {
      // silent info while running
      var ___info = console.info;
      console.info = function(){};

      var model = generateModel(false);

      console.info = ___info;
      return model; 
}

exports.modelAndFlush = function () {
      return generateModel(true);
}

