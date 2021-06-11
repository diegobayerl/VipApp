import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface valueShimer{
    visible: boolean
    children: {}
}

export default function shimmer({ visible = false, children}: valueShimer){
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
        )
    }

    return(
        <>
            {children}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: "cover",
      borderRadius: 20,
      backgroundColor: "#ECEFF1",
      overflow: 'hidden',
    },
    viewScroll: {
      padding: 15,
      backgroundColor: "#fff",
      margin: 15,
      marginBottom: 10,
      marginTop: 0,
      borderRadius: 15,
      overflow: 'hidden',
      opacity: 0.8
    },
  
    viewCard: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    ViewTextScroll: {
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 8,
    },
    Text: {
      paddingHorizontal: 10,
      backgroundColor: "#ECEFF1",
      height: 30,
      width: 130,
      overflow: 'hidden',

      borderRadius: 2
    },
  });