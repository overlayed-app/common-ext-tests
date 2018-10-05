import React from 'react'
import renderer from 'react-test-renderer'

export = function includeCommonTests (absPathToExtension: string) {
  describe('common-ext-tests', () => {
    // this test ensures that overlayed can load the plugin
    test('loads safely', () => {
      return expect(import(absPathToExtension)).resolves.toBeDefined()
    })

    // this test ensures that overlayed can render the plugin
    test('renders safely', () => {
      return import(absPathToExtension)
        .then((extensionMain) => {
          const extensionType = extensionMain.default
          return expect(renderer.create(React.createElement(extensionType))).toBeDefined()
        })
    })
  })
}
