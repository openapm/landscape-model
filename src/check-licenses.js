const merge = require('./merge-all');

let model = merge.model();
let missingLicenseLinks = model['components'].reduce((a, component) => {
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

let componentsWithoutLicenses = model['components'].filter(c => c['license'] === undefined).map(c => c.id);


if (missingLicenseLinks.length > 0) {
    console.error('WARNING: There are licenses with missing links: ', missingLicenseLinks);
}

if (componentsWithoutLicenses.length > 0) {
    console.error('WARNING: The following components are missing license information: ', componentsWithoutLicenses);
}