import * as React from 'react'
import renderer from 'react-test-renderer'

import { ThemedText } from '../themed-text'

it(`renders correctly`, () => {
  // eslint-disable-next-line import/no-named-as-default-member, react-native/no-raw-text -- taken from preset
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON()

  expect(tree).toMatchSnapshot()
})
