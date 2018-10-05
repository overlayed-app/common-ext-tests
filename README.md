# common-ext-tests

[![Build Status](https://travis-ci.org/overlayed-app/common-ext-tests.svg?branch=master)](https://travis-ci.org/overlayed-app/common-ext-tests)

Common extension tests for overlayed app extensions.

## Why

There are some tests that all extensions should run to ensure that overlayed will be able to properly handle the extension. This module provides an easy way to include those tests in an extension project's `jest` tests.

## How

`npm i -D @overlayed-app/common-ext-tests`

Then, in code (if `js`):

```
const includeCommonTests = require('@overlayed-app/common-ext-tests')

// include the common tests
includeCommonTests(`${__dirname}/fixture`)
```

or (if `ts`):

```
import includeCommonTests from '@overlayed-app/common-ext-tests'

// include the common tests
includeCommonTests(`${__dirname}/fixture`)
```

## Contributing

+ To build `npm run build`.
+ To publish `npm run publish`.
+ To test `npm test`.

## Authors

Ben Greenier - Initial work - [bengreenier](https://github.com/bengreenier)

## License

Common-ext-tests is licensed under the MIT License - [Click here for details](https://github.com/overlayed-app/common-ext-tests/blob/master/LICENSE)
