const merge = require('./merge-all');

let model = merge.model();
let component_ids = model['components'].map((component) => { return component['id']; });
let missingConnections = model['components'].reduce((a, component) => {
    let conns = component['connections'];
    if (conns !== undefined) {
        conns.forEach(c => {
            if (!component_ids.includes(c)) {
                a.push(c + ' in ' + component['name']);
            }
        });
        return a;
    } else {
        return a;
    }
}, []);


if (missingConnections.length > 0) {
    console.error('WARNING: There are unmatched connections components: ', missingConnections);
}