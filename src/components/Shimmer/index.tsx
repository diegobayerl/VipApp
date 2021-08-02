import React from 'react';
import { View, Animated } from 'react-native';

import styles from './styles';

interface valueShimer{
    visible: boolean
    children: object
}

export default function Shimmer({ visible = false, children}: valueShimer){
    const AnimatedValue = new Animated.Value(0)

    const AnimatedAnime = () => {
        AnimatedValue.setValue(0)
        Animated.timing(
            AnimatedValue,
            {
                toValue: 1,
                duration: 750,
                useNativeDriver: false,
            }
        ).start(() => {
            setTimeout(() => { 
            AnimatedAnime() 
        }, 80)}
        )
    }

    AnimatedAnime();

    const translateXX = AnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 130],
    })
    if(visible){
        return(
            <View style={styles.container}>
                <View style={[styles.viewScroll, {marginTop: 20}]}>
                    <View style={styles.viewCard}>
                      <View style={styles.ViewTextScroll}>
                        <View style={styles.Text} >
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                      </View>
                      <View style={styles.image}>
                          <Animated.View
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: 0.3,
                                backgroundColor: '#FFDEDE',
                                transform: [{ translateX: translateXX}]
                            }}
                          >
                          </Animated.View>
                      </View>
                    </View>
                </View>
                <View style={styles.viewScroll}>
                    <View style={styles.viewCard}>
                      <View style={styles.ViewTextScroll}>
                        <View style={styles.Text} >
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                      </View>
                      <View style={styles.image}>
                          <Animated.View
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: 0.3,
                                backgroundColor: '#FFDEDE',
                                transform: [{ translateX: translateXX}]
                            }}
                          >
                          </Animated.View>
                      </View>
                    </View>
                </View>
                <View style={styles.viewScroll}>
                    <View style={styles.viewCard}>
                      <View style={styles.ViewTextScroll}>
                        <View style={styles.Text} >
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                      </View>
                      <View style={styles.image}>
                          <Animated.View
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: 0.3,
                                backgroundColor: '#FFDEDE',
                                transform: [{ translateX: translateXX}]
                            }}
                          >
                          </Animated.View>
                      </View>
                    </View>
                </View>
    
                <View style={styles.viewScroll}>
                    <View style={styles.viewCard}>
                      <View style={styles.ViewTextScroll}>
                        <View style={styles.Text} >
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                        <View style={styles.Text}>
                        <Animated.View
                            style={{
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.3,
                                    backgroundColor: '#FFDEDE',
                                    transform: [{ translateX: translateXX}]
                                }}
                          >
                          </Animated.View>
                        </View>
                      </View>
                      <View style={styles.image}>
                          <Animated.View
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: 0.3,
                                backgroundColor: '#FFDEDE',
                                transform: [{ translateX: translateXX}]
                            }}
                          >
                          </Animated.View>
                      </View>
                    </View>
                </View>
                
            </View>
        );
    };

    return(
        <>
            {children}
        </>
    );
};