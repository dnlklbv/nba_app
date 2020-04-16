import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import YouTube from 'react-native-youtube';

class GameArticleComponent extends Component {
  render() {
    return (
      <ScrollView>
        <YouTube
          videoId="KVZ-P-ZI6W4"
          style={{alignSelf: 'stretch', height: 300}}
        />
      </ScrollView>
    );
  }
}

export default GameArticleComponent;
