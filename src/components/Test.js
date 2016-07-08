import React, {Component} from 'react';
import {View, Text} from 'reactors'
import Cycle from './Cycle';

type PROPS = {
  component: Component,
  props: Object,
};

export default (props: PROPS) => {
  const children = Array.isArray(props.children) ?
    props.children : [props.children];
  const cycles = children
    .filter(child => child.type === Cycle)
    .map(child => child.props);
  if (!cycles.length) {
    cycles[0] = <Cycle>{props.children}</Cycle>;
  }
  return (
    <View>
      <Text>Testing is cool</Text>
    </View>
  )
};
