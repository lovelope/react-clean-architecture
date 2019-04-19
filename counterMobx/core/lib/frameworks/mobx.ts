import { CounterStore } from '../adapters/mobx';
import { Counter } from '../entities';

export type StateType = {
  counter: Counter;
};

export type StoresType = {
  counterStore: CounterStore;
};

export const configureStore = (): StoresType => {
  // 这里可以添加 logger 等中间件
  return {
    counterStore: new CounterStore(),
  };
};
