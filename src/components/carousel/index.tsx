import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { DsBox, DsIcon } from 'native-flow';

import { DsCarouselTypes } from './types';

const { width } = Dimensions.get('window');

const DsCarousel: React.FC<DsCarouselTypes> = (props) => {
    const {
        children,
        showArrows,
        showDots,
        autoPlay = false,
        interval = 3000,
        ...attr
    } = props;

    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const timerRef = useRef<number | NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(() => {
                const nextSlide = (currentSlide + 1) % children.length;
                setCurrentSlide(nextSlide);
            }, interval);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [autoPlay, interval, currentSlide, children.length]);

    useEffect(() => {
        scrollViewRef.current?.scrollTo({
            x: width * currentSlide,
            animated: true,
        });
    }, [currentSlide]);

    const handleArrowClick = (direction: string) => {
        const newSlide =
            direction === 'left'
                ? (currentSlide - 1 + children.length) % children.length
                : (currentSlide + 1) % children.length;
        setCurrentSlide(newSlide);
    };

    return (
        <DsBox flex={1} position={'relative'} {...attr}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                scrollEventThrottle={16}
            >
                {children.map((child, index) => (
                    <DsBox
                        key={index}
                        width={width}
                        flex={1}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        {child}
                    </DsBox>
                ))}
            </ScrollView>

            {showArrows && (
                <DsBox
                    flexDirection={'row'}
                    position={'absolute'}
                    top={'50%'}
                    width={'100%'}
                    justifyContent={'space-between'}
                    paddingHorizontal={10}
                >
                    {['left', 'right'].map((direction) => (
                        <DsIcon
                            icon={direction === 'left' ? 'close' : 'close'}
                            color="#fff"
                            key={direction}
                            backgroundColor={'rgba(0, 0, 0, 0.6)'}
                            padding={10}
                            style={{
                                borderRadius: 30,
                            }}
                            onPress={() => handleArrowClick(direction)}
                        />
                    ))}
                </DsBox>
            )}

            {showDots && (
                <DsBox
                    flexDirection={'row'}
                    justifyContent={'center'}
                    position={'absolute'}
                    bottom={15}
                    width={'100%'}
                >
                    {children.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                {
                                    height: 16,
                                    width: 16,
                                    borderRadius: 12,
                                    marginHorizontal: 6,
                                    borderColor: 'transparent',
                                    borderWidth: 1,
                                    backgroundColor:
                                        index === currentSlide
                                            ? 'blue'
                                            : 'grey',
                                },
                            ]}
                            onPress={() => setCurrentSlide(index)}
                        />
                    ))}
                </DsBox>
            )}
        </DsBox>
    );
};

export default DsCarousel;
