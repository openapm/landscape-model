const merge = require('./merge-all');

let model = merge.model();

/**
 * Check connections
 */
let component_ids = model['components'].map((component) => { return component['id']; });
let missingConnections = model['components'].reduce((a, component) => {
    let conns = component['connections'];
    if (conns !== undefined) {
        if(conns.dataFrom !== undefined){
            conns.dataFrom.forEach(c => {
                if (!component_ids.includes(c)) {
                    a.push(c + ' in ' + component['name']);
                }
            });
        }
        if(conns.dataTo !== undefined){
            conns.dataTo.forEach(c => {
                if (!component_ids.includes(c)) {
                    a.push(c + ' in ' + component['name']);
                }
            });
        }

        return a;
    } else {
        return a;
    }
}, []);


if (missingConnections.length > 0) {
    console.error('ERROR: There are unmatched connections components: ', missingConnections);
    process.exit(1);
}


/**
 * Check licenses
 */
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

let componentsWithoutLicenses = model['components'].filter(c => c['isCommercial'] === undefined || c['isCommercial'] === false).filter(c => c['license'] === undefined).map(c => c.id);


if (missingLicenseLinks.length > 0) {
    console.error('WARNING: There are licenses with missing links: ', missingLicenseLinks);
}

if (componentsWithoutLicenses.length > 0) {
    console.error('WARNING: The following components are missing license information: ', componentsWithoutLicenses);
}

/**
 * Merge model
 */
merge.modelAndFlush();

console.log('\x1b[42m%s\x1b[0m', 'Model has been successfully merged.');