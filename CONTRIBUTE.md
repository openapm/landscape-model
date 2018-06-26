# Contributing to the OpenAPM landscape
Everyone is welcome and encouraged to enrich the OpenAPM landscape!
* Are you missing tools or connections in the landscape?
* Are you aware of open-source tools that would enrich the OpenAPM landscape?
* Are you aware of aspects and tool characteristics that are not reflected in the landscape yet?

Fork this repository, enrich the landscape and contribute your changes back through a pull request!


## How to contribute
The OpenAPM landscape is defined in by means of YAML files that reside in the ./model directory.
For each tool or tool set there is a .yml file in the ./model/components directory that describes the characteristics of the corresponding tool or tool set.
See examples for example for [Prometheus](https://github.com/openapm/landscape-model/blob/master/model/components/prometheus.yml), [inspectIT](https://github.com/openapm/landscape-model/blob/master/model/components/inspectit.yml) or [Zipkin](https://github.com/openapm/landscape-model/blob/master/model/components/zipkin.yml).

### Properties
The following table describes the individual properties:

| Property | Description | Required |
| --- |---| ---|
| id | Unique id of the component. | yes |
| name | Display name of the component | yes |
| description | A text (a few sentences) describing the component | yes |
| link | A link URL to the official website of the component / tool | yes |
| logo | The file name (without file extension) of the tool logo. Logo files must be located in the ./logos directory | yes |
| categories | A list of category names that the corresponding tool component belongs to. Categories are defined by means of the primary purpose of the components. Note that a component can belong to multiple categories, if reasonable. | yes |
| twitter | The name of the twitter account for that tool (without '@') | no |
| github | A list of GitHub repositories for that component. Only provide the organization (or username) and repository name in the following format: <ORG-NAME>/<REPO-NAME>. E.g. for https://github.com/elastic/kibana provide only 'elastic/kibana'. | no |
| connections | A list of component ids that this component can link to (which means can somehow be combined with). | no |
| license | A list of license names that apply to the tool / component. Valid license names are defined in the ./model/licenses.yml file. If a license is missing in that file, just add it there with a link to the license website. | no |
| capabilities | Describes the capabilities of data gathering for the corresponding tools. Which capabilities are valid for a specific category is defined in the categories.yml file.| no |
| capabilities.tech | A list of technologies / pragramming languages that this agent or instrumentation-lib can gather data from. | no |
| capabilities.aspects | What kind of data is the component dealing with? Options are: *tracing, tracing [app], tracing [eum], metrics, metrics [app], metrics [process], metrics [host]*. | no |
| capabilities.frameworks | Supported frameworks for data collection | no |
| capabilities.os | Supported operating systems | no |

For a new tool (set) just create a new .yml file in the ./model/components directory and corresponding logo in the ./logos directory.

### Requirements on logo files
Logo images must be in *PNG* format and have a 1:1 aspect ratio (quadratic). Place the logo files into the ./logos directory and give it a name that you use for the *logo*-propety in the model file.

### Adding new License definitions
Accepted license names are defined in the ./model/licenses.yml file, with corresponding links to the license websites. If you are missing some license in there, just extend the ./model/licenses.yml file.

### Adding new Categories
Valid categories are defined in the ./model/categories.yml file. If possible, categorize your tool or components into one or multiple of the available components. To keep a clean structure, new categories should only be introduced if it is absolutely necessary.

### When is my change refelcted on the OpenAPM website?
Once your pull request has been accepted and merged, the corresponding changes become visible on the [OpenAPM Landscape](https://openapm.io/landscape) latest on the next day.
