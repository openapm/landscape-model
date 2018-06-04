const merge = require('./merge-all');

let model = merge.model();
let missingLicenses = model['components'].reduce((a, component) => {
    let licenses = component['license'];
    if (licenses !== undefined) {
        licenses.forEach(licenseName => {
            if (model['licenses'][licenseName] === undefined) {
                a.push(licenseName + ' in ' + component['name']);
            }
        });
        return a;
    } else {
        return a;
    }
}, []);


if (missingLicenses.length > 0) {
    console.error('WARNING: There are unmatched licenses: ', missingLicenses);
}