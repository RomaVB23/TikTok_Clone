import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = props => {
  const [paused, setPaused] = useState(false);
  const [post, setPost] = useState(props.post);
  const [isLike, setIsLike] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const likeToAdd = isLike ? -1 : 1;

  const onLikePres = () => {
    setPost({
      ...post,
      likes: post.likes + likeToAdd,
    });
    setIsLike(!isLike);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
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
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePictures}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg',
                }}
              />
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePres}>
                <AntDesign
                  name={'heart'}
                  size={40}
                  color={isLike ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>123</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>124</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={40} color="white" />
                <Text style={styles.statsLabel}>124</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@romavb</Text>
                <Text style={styles.description}>work hard man @borat</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>Nf - The search</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg',
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
