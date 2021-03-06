'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { styles } from './newTweetButton.style';


class NewTweetButton extends Component {
    constructor(props) {
        super(props);

        this.handleOnPress = this.handleOnPress.bind(this);
    }
    
    handleOnPress() {
      this.props.onPress()
    }

    render() {
        return(
          <Button onPress={this.handleOnPress} style={styles.floatingButton}>
            <Text style={styles.buttonText}>+</Text>
          </Button>
        );
    }
};

export default NewTweetButton;