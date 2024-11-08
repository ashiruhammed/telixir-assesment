import React from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

export const Pagination = ({
  data,
  scrollX,
  activeColor,
  nonActiveColor,
  style,
}: {
  data: any[];
  scrollX: SharedValue<number>;
  activeColor?: string;
  nonActiveColor?: string;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      {[...data].map((_: any, index: number) => {
        return (
          <PaginationElement
            key={index}
            index={index}
            scrollX={scrollX}
            activeColor={activeColor}
            nonActiveColor={nonActiveColor}
          />
        );
      })}
    </View>
  );
};

function PaginationElement({
  index,
  scrollX,
  activeColor,
  nonActiveColor,
}: {
  index: number;
  scrollX: SharedValue<number>;
  activeColor?: string;
  nonActiveColor?: string;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      ['#1819453D', activeColor || '#156651', '#1819453D']
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View key={index} style={[styles.dot, animatedStyle]}>
      <Animated.View style={[animatedStyle]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 20,
    // flex: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#111',
  },
});
