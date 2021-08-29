import React, { useContext, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { AppContext } from "../Context";
import CommonStyle from "../Theme/CommonStyle";
import { width } from "../Utils/Constant";
import { VolumeButton } from "./AppButton";

const styles = StyleSheet.create({
  videoView: {
    width,
    opacity: 1,
  },
  videoOuter: {
    width,
    ...CommonStyle.center,
  },
});

const VideoComponent = ({ post, isVisible, isNext }) => {
  const { displayHeight } = useContext(AppContext);
  const { isMute } = useContext(AppContext);
  const videoRef = useRef(null);
  const { url } = post;
  const { videoOuter, videoView } = styles;

  useEffect(() => {
    if (!isVisible && isNext && videoRef) {
      // videoRef.current.seek(0);
    }
  }, [isVisible, isNext]);

  const onPlaybackStatusUpdate = (status) => {
    // console.log(status);
  };

  return (
    <View style={[videoOuter, { height: displayHeight }]}>
      <Video
        ref={videoRef}
        style={[videoView, { height: displayHeight }]}
        source={url}
        useNativeControls={false}
        resizeMode={Video.RESIZE_MODE_COVER}
        isLooping
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={isVisible}
        isMuted={(!isVisible && true) || isMute}
      />
      <VolumeButton />
    </View>
  );
};

export { VideoComponent };
