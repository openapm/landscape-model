# Contributing to the OpenAPM landscape
Everyone is welcome and encouraged to enrich the OpenAPM landscape!
* Are you missing tools or connections in the landscape?
* Are you aware of open-source tools that would enrich the OpenAPM landscape?
* Are you aware of aspects and tool characteristics that are not reflected in the landscape yet?

Fork this repository, enrich the landscape and contribute your changes back through a pull request!


## How to contribute
The OpenAPM landscape is defined by YAML files that reside in the ./model directory.
For each tool or tool set, there is a .yml file in the ./model/components directory that describes the characteristics of the corresponding tool or tool set.
For example, see [Prometheus](https://github.com/openapm/landscape-model/blob/master/model/components/prometheus.yml), [inspectIT](https://github.com/openapm/landscape-model/blob/master/model/components/inspectit.yml), or [Zipkin](https://github.com/openapm/landscape-model/blob/master/model/components/zipkin.yml).

### Properties
The following table describes the individual properties:

| Property | Description | Required |
| --- |---| ---|
| id | Unique id of the component. | yes |
| name | Display name of the component | yes |
| description | A text (a few sentences) describing the component | yes |
| link | Link (URL) to the official website of the component | yes |
| logo | File name (without file extension) of the component logo. Logo files must be located in the ./logos directory. | yes |
| categories | List of category names the component belongs to. Categories are defined by the primary purpose of components. Note that components may belong to multiple categories, if reasonable. | yes |
| twitter | Name of the Twitter account for the component (without '@') | no |
| github | List of GitHub repositories for the component. Only provide the organization (or username) and repository name in the following format: ORG-NAME/REPO-NAME. E.g. for https://github.com/elastic/kibana provide only 'elastic/kibana'. | no |
| connections | List of component IDs that this component can link to, to indicate a possible combination. | no |
| license | List of license names that apply to the component. Valid license names are defined in ./model/licenses.yml. If a license is missing there, just add it with a link to the license website. | no |
| capabilities | Describes data gathering capabilities of the component. Capabilities valid for a specific category are defined in categories.yml. | no |
| capabilities.tech | List of technologies / programming languages the agent or instrumentation-lib can gather data from. | no |
| capabilities.aspects | What kind of data is the component dealing with? Options are: *tracing, tracing [app], tracing [eum], metrics, metrics [app], metrics [process], metrics [host]*. | no |
| capabilities.frameworks | Supported frameworks for data collection | no |
| capabilities.os | Supported operating systems | no |

For a new tool (set), just create a new .yml file in ./model/components and add the corresponding logo in ./logos.

### Requirements for logo files
Logo images must be in *PNG* format and have a 1:1 aspect ratio (quadratic). Place the logo files in ./logos and use its name for the *logo*-property in the model file.

### Adding new license definitions
Accepted license names are defined in ./model/licenses.yml, with corresponding links to the license websites. If a required license is missing, just extend ./model/licenses.yml.

### Adding new Categories
Valid categories are defined in ./model/categories.yml. If possible, assign your tool or component one or multiple of the available categories. To keep the structure clean, introduce new categories only if absolutely necessary.

### When is my change reflected on the OpenAPM website?
Once your pull request has been accepted and merged, the corresponding changes become visible on [OpenAPM](https://openapm.io/landscape) the next day at the latest.
