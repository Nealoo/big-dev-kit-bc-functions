# big-dev-kit-bc-functions

## Introduction

This is a function collection for the Bigcommerce development.

## how to use

````
npm install @big-dev-kit/bc-functions
````

````js
import bcHelper from '@big-dev-kit/bc-functions';
let name = bcHelper.getCustomerName(id);
````

````js
<script src="path/to/bc-functions.min.js"></script>
<script>
  var name = bcHelper.getCustomerName(id);
  // Use the bcHelper functions
</script>
````

````js
const bcHelper = require('@big-dev-kit/bc-functions');
let name = bcHelper.getCustomerName(id);
// Use the bcHelper functions
````


## function doc


## todo list

## changelog

## dev info

### dev environment
node 16.17.1  
npm 9.6.4

### versioning
Semantic Versioning: Follow the principles of Semantic Versioning (SemVer) for versioning your package. SemVer consists of three numbers separated by dots: MAJOR.MINOR.PATCH. Increment the version number based on the impact of changes:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner,
PATCH version when you make backwards-compatible bug fixes.
Git Tags: Use Git tags to mark specific commits that correspond to each version of your package. Tagging allows you to reference specific versions in your Git repository. Typically, you would tag the commit that represents the release. For example, you can create a tag with the version number like v1.0.0.

First, make sure you are in the repository's root directory using the command line or terminal.

Use the following command to create a new version tag:

````shell
git tag <tag-name> <commit-id>
````
Replace <tag-name> with the name of the version tag you want to create (e.g., v1.0.0), and <commit-id> with the ID of the commit you want to associate the tag with. The commit ID can be the full SHA-1 hash, a shortened version, or a branch name.

For example:

````shell
git tag v1.0.0 abc123
````
This will create a version tag v1.0.0 and associate it with the commit with the ID abc123.

After creating the version tag, you can push the tag to the remote repository using the following command:

````shell
git push origin <tag-name>
````
Replace <tag-name> with the name of the version tag you want to push.

For example:

````shell
git push origin v1.0.0
````