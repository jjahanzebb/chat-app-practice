import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {changeCount} from '../redux/actions/counts';
import {bindActionCreators} from 'redux';

class HomeScreen extends Component {
  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const {count} = this.props;
    return (
      <View className="h-screen justify-center bg-emerald-50">
        <TouchableOpacity
          title="increment"
          onPress={() => this.incrementCount()}
          // style={styles.btn}
          className="w-max py-5 bg-mygreen shadow-trueGray-600 rounded-xl m-5 justify-center items-center">
          <Text
            // style={styles.btnTxt}
            className="text-lg font-bold text-amber-50">
            Increment
          </Text>
        </TouchableOpacity>

        <Text
          // style={styles.txt}
          className="text-2xl py-5 text-center bg-slate-200 mx-5 rounded-xl shadow-slate-50">
          {JSON.stringify(count)}
        </Text>

        <TouchableOpacity
          title="decrement"
          onPress={() => this.decrementCount()}
          // style={styles.btn}
          className="w-max py-5 bg-mygreen shadow-trueGray-600 rounded-xl m-5 justify-center items-center">
          <Text
            // style={styles.btnTxt}
            className="text-lg font-bold text-amber-50">
            Decrement
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign({}, {changeCount});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
