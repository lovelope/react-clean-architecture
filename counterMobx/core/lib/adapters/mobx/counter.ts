import { observable, action, runInAction } from 'mobx';
import { Counter } from '../../entities';
import { CounterInteractor } from '../../useCases';
import { StateType } from '../../frameworks';

type StateSliceType = Counter;

export const counterSelector = (state: StateType): Counter => state.counter;

export class CounterStore {
  static mobxLoggerConfig = {
    enabled: true,
  };

  @observable
  counterInstance: StateSliceType = new Counter(0);

  @action
  incrementAction = (qty?: number): void => {
    const interactor = new CounterInteractor(this.counterInstance.count);
    interactor.increment(qty);
    this.counterInstance = new Counter(interactor.counter.count);
  };

  @action
  decrementAction = (qty?: number): void => {
    const interactor = new CounterInteractor(this.counterInstance.count);
    interactor.decrement(qty);
    this.counterInstance = new Counter(interactor.counter.count);
  };
}
