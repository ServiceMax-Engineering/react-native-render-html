import React, { ReactElement, useCallback } from 'react';
import {
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent
} from 'react-native';
import { IMGElementStateSuccess } from './img-types';
import {CachedImage} from './CachedImage';
const defaultImageStyle: ImageStyle = { resizeMode: 'cover' };

/**
 * Default success "image" view for the {@link IMGElement} component.
 */
export default function IMGElementContentSuccess({
  source,
  imageStyle,
  dimensions,
  onError
}: IMGElementStateSuccess): ReactElement {
  const onImageError = useCallback(
    ({ nativeEvent: { error } }: NativeSyntheticEvent<ImageErrorEventData>) =>
      onError(error),
    [onError]
  );
  return (
    <CachedImage
      source={source}
      onError={onImageError}
      style={[defaultImageStyle, dimensions, imageStyle]}
      testID="image-success"
    />
  );
}
