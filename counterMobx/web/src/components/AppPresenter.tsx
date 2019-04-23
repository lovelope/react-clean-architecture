import { Counter, CounterStore } from 'core';
import React from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import { Header } from './Header';
import { CounterComponent } from './Counter';
import { AppWrapper } from './AppWrapper';

interface Props {
  counterStore?: CounterStore;
}

function noop() {}

const AppModel = (props: Props) => {
  const {
    counterInstance = { count: 0 },
    incrementAction = noop,
    decrementAction = noop,
  } = props.counterStore || {};
  const increment = () => incrementAction(1);
  const decrement = () => decrementAction(1);

  return (
    <AppWrapper>
      <Header />
      <CounterComponent
        decrement={decrement}
        increment={increment}
        counter={counterInstance.count}
      />
    </AppWrapper>
  );
};

export default inject('counterStore')(observer(AppModel));
