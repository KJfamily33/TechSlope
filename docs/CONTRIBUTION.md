# Contribution Guide

First of all GitHub itself has some excellent [guides](https://guides.github.com/) if you have little or no experience using a Git workflow. We will try our best to adhere to standards and stay organized by following the following flow...

##### **Issue/Milestone → New Branch → Commits → Pull Request → Review → Merge**

### Prerequisites

[Node.js, NPM](https://nodejs.org/en/), Git Manager ([git-Bash](https://git-scm.com/downloads) or other), [Vue CLI](https://cli.vuejs.org/guide/prototyping.html) *(recommended)*

### Client Development

1. The repository is first cloned with `git clone https://github.com/GoCodeColorado/TechSlope.git`.

2. All the dependencies from [NPM](https://docs.npmjs.com/about-npm/) will need to be installed by running `npm run installProject`.

3. Run `npm dev` to start a live development server of **only the client**.

4. The client development is done in the 'src' folder.

**More information on client development can be found in the client README.md*

### Deployment

Running `npm start` from root directory will install all dependencies, build the client, and launch the server.

### Before Making Pull Requests
- Document and comment your code.
- Increase the version numbers in any package.json and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [Semantic Versioning](http://semver.org/).
- It must build and run, and be verified/reviewed by at least one other person before merging.
