import React, { PropsWithChildren, ReactElement } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { IMGElementStateLoading } from './img-types';

/**
 * Default loading view for the {@link IMGElement} component.
 */
export default function IMGElementContentLoading({
  dimensions,
  altColor,
}: PropsWithChildren<IMGElementStateLoading>): ReactElement {
  return (
    <View style={[dimensions, { justifyContent: 'center', alignItems: 'center' }]} testID="image-loading">
      <ActivityIndicator color={altColor} />
    </View>
  );
}
