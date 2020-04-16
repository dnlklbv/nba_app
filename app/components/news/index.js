import React, {Component} from 'react';
import Moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {getNews} from '../../store/actions/news_action';

class NewsComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = news => {
    return news.articles ? (
      news.articles.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => this.props.navigation.navigate('Article', {...item})}>
          <View style={styles.cardContainer}>
            <View>
              <Image
                style={{height: 150, justifyContent: 'space-around'}}
                source={{uri: `${item.image}`}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.titleCard}>{item.title}</Text>
              <View style={styles.bottomCard}>
                <Text style={styles.bottomCardTeam}>{item.team} - </Text>
                <Text style={styles.bottomCardText}>
                  Posted at {Moment(item.date).format('d MMMM')}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))
    ) : (
      <Text>Loading</Text>
    );
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: '#f0f0f0'}}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 1,
    borderRadius: 2,
  },
  contentCard: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titleCard: {
    color: '#323232',
    fontSize: 16,
    padding: 10,
    fontFamily: 'Roboto-Bold',
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10,
  },
  bottomCardTeam: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  bottomCardText: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
  },
});

function mapStateToProps(state) {
  return {
    News: state.News,
  };
}

export default connect(mapStateToProps)(NewsComponent);
