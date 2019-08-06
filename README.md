# formik-blueprint

A wrapper around blueprint inputs to provide a 'nice' API for formik

# Why?

[Formik](https://github.com/jaredpalmer/formik) and [Blueprint.js](https://blueprintjs.com/) are highly popular libraries (15k + stars on github each) which are often used together, however, the libraries do not have a simple way of transfering data between them. When developing forms using both, developers have to write custom wrappers in order to make sure the data which is inputted to the form is saved in the way they expect, this can be time consuming and error prone.

# Docs

[Read the Docs](https://readthedocs.org/projects/formik-blueprint/)

## Goals

- Provide a nice API to plug blueprint inputs into formik
- Have typescript type-safety
- Allow the full Blueprint styling API to be leveraged

## How to develop

- create a test app using create react app with formik and blueprint as dependencies, and the blueprint css added

- use `yarn add *path/to/library/* formik-blueprint`

- import any input you want to work on with `import { myInput } from 'formik-blueprint'`

- re-add for each change to the library and restart test app
