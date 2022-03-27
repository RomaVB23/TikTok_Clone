import {View, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';

import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
          onError={e => console.log(e)}
          source={{
            uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
function data(data: any, arg1: string) {
  throw new Error('Function not implemented.');
}
