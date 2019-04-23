import { Counter, CounterStore } from 'core';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from './Header';
import { CounterComponent } from './Counter';
import { AppWrapper } from './AppWrapper';

interface IProps {
  counterStore?: CounterStore;
}

function noop() {}

export const AppModel = (props: IProps) => {
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
