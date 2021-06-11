import React, { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface valueShimer {
  visible: boolean;
  children: {};
}

export default function shimmer({ visible = false, children }: valueShimer) {
  const AnimatedValue = new Animated.Value(0);

  const AnimatedAnime = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 750,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        AnimatedAnime();
      }, 50);
    });
  };

  AnimatedAnime()

  const translateXX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 130],
  });

  if (visible) {
    return (
      <View style={styles.container}>
        <View style={[styles.viewText, { marginTop: 20 }]}>
          <View style={styles.viewName}>
            <View style={styles.textName}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>
            <View style={styles.textName}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>
          </View>

          <View style={styles.aling}>
            <View style={styles.ViewItensLeft}>

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            </View>

            <View style={styles.ViewItensRigth}>
              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.4,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.BottonNavigate}>
            <Animated.View
              style={{
                width: "100%",
                height: "100%",
                opacity: 0.4,
                backgroundColor: "#FFDEDE",
                transform: [{ translateX: translateXX }],
              }}
            />
          </View>
        </View>
        <View style={styles.viewText}>
          <View style={styles.viewName}>
            <View style={styles.textName}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>
            <View style={styles.textName}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>
          </View>

          <View style={styles.aling}>
            <View style={styles.ViewItensLeft}>

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            <View style={styles.viewTitleItens} />

            </View>

            <View style={styles.ViewItensRigth}>
              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.3,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>

              <View style={styles.viewTitleItens}>
                <Animated.View
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.4,
                    backgroundColor: "#FFDEDE",
                    transform: [{ translateX: translateXX }],
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.BottonNavigate}>
            <Animated.View
              style={{
                width: "100%",
                height: "100%",
                opacity: 0.4,
                backgroundColor: "#FFDEDE",
                transform: [{ translateX: translateXX }],
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#D8D6D6",
    opacity: 0.8,
  },
  aling: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  viewText: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  viewName: {
    marginHorizontal: 5,
    backgroundColor: "#3333",
    borderRadius: 10,
    padding: 5,
    height: 60,
    overflow: "hidden",
  },
  textName: {
    marginLeft: 5,
    height: 20,
    width: "95%",
    backgroundColor: "#ECEFF1",
    marginTop: 3,
    overflow: "hidden",
  },

  viewTitleItens: {
    marginLeft: 5,
    height: 22,
    width: "90%",
    backgroundColor: "#ECEFF1",
    marginTop: 8,
    overflow: "hidden",
  },
  ViewItensRigth: {
    width: "40%",
    height: "100%",
  },
  ViewItensLeft: {
    width: "50%",
    height: "100%",
  },
  BottonNavigate: {
    height: 60,
    width: 80,
    backgroundColor: "#ECEFF1",
    marginTop: 15,
    marginLeft: 18,
    overflow: "hidden",
    borderRadius: 10,
  },
});

/*


<View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>

            <View style={styles.viewTitleItens}>
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 0.4,
                  backgroundColor: "#FFDEDE",
                  transform: [{ translateX: translateXX }],
                }}
              />
            </View>


*/
