import React, { useEffect, useRef } from 'react';
import {
  ListRenderItem,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AppButton } from '../core/button';
import { AppText } from '../core/text';
import { useStyles } from 'react-native-unistyles';
import { useRouter } from 'expo-router';

interface ICustom<T> {
  renderItem: ListRenderItem<T>;
  data: T[];
  autoPlay?: boolean;
  style?: ViewStyle;
  renderPaginator?: ({
    scrollX,
    data,
  }: {
    scrollX: SharedValue<number>;
    data: T[];
  }) => React.ReactNode;
}

const CustomSlider = <T extends { id: string }>({
  renderItem,
  data,
  autoPlay,
  style,
  renderPaginator,
}: ICustom<T>) => {
  const flatListRef: any = useAnimatedRef();
  const flatListIndex = useSharedValue(0);
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event: any) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems.length > 0) {
      flatListIndex.value = viewableItems[0].index;
    }
  };
  const router = useRouter();
  const buttonWidth = useSharedValue(100);

  const scrollToNext = () => {
    'worklet';
    const nextIndex = flatListIndex.value + 1;
    if (nextIndex < data.length) {
      flatListRef?.current?.scrollToIndex({ index: nextIndex, animated: true });
      buttonWidth.value = withTiming(70);
    } else {
      router.push('/sign-in');
    }
  };

  //Autoplay functionality
  const autoPlayRef: any = useRef(null);

  useEffect(function () {
    const startAutoplay = () => {
      'worklet';
      if (autoPlay)
        autoPlayRef.current = setInterval(() => {
          scrollToNext();
        }, 5000);
    };
    const stopAutoplay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const backButtonState = useDerivedValue(() => {
    return flatListIndex.value > 0 ? true : false;
  }, []);

  const backButtonStyle = useAnimatedStyle(() => {
    return {
      width: backButtonState.value ? '30%' : 0,
    };
  });

  const { theme } = useStyles();

  const { width } = useWindowDimensions();
  return (
    <View style={{ marginBottom: 20 }}>
      <Animated.FlatList
        data={data}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        ref={flatListRef}
        style={[{ marginBottom: 20 }, style]}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
        onTouchStart={() => {
          if (autoPlayRef.current && autoPlay) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
          }
        }}
        onTouchEnd={() => {
          if (!autoPlayRef.current && autoPlay) {
            autoPlayRef.current = setInterval(() => {
              scrollToNext();
            }, 3000);
          }
        }}
        renderItem={renderItem}
        keyExtractor={(item: T) => 0.2 + item.id}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
      />

      {renderPaginator && renderPaginator({ scrollX, data })}

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 32 }}>
        <Animated.View style={backButtonStyle}>
          <TouchableOpacity
            style={{ justifyContent: 'center' }}
            onPress={() => {
              flatListRef.current.scrollToIndex({ index: flatListIndex.value - 1, animated: true });
            }}>
            <AppText
              style={[
                { color: '#156651', fontSize: 16, textAlign: 'center' },
                theme.typography.bold,
              ]}>
              Back
            </AppText>
          </TouchableOpacity>
        </Animated.View>

        <AppButton
          onPress={() => {
            scrollToNext();
          }}
          type="solid"
          title="Next"
          containerStyle={[{ marginLeft: 'auto', flex: 1 }]}
        />
      </View>
    </View>
  );
};

export default CustomSlider;
