// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons'
import { type IconProps } from '@expo/vector-icons/build/createIconSet'
import { type ComponentProps } from 'react'

export const TabBarIcon = ({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) => {
  // eslint-disable-next-line react-native/no-inline-styles -- rn thing
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
}
