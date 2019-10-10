import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store/store";

@Module({ dynamic: true, store, name: "counter1", namespaced: true })
class Counter1 extends VuexModule {
  // state
  incrementCounter: number = 0;
  decrementCounter: number = 1000;
  // mutation
  @Mutation // counter
  public setIncrementCounter(num: number) {
    this.incrementCounter = num;
  }
  @Mutation
  public setDecrementCounter(num: number) {
    this.decrementCounter = num;
  }

  @Action({})
  public increment100() {
    this.setIncrementCounter(this.incrementCounter + 100);
  }
  @Action({})
  public decrement100() {
    this.setDecrementCounter(this.decrementCounter - 100);
  }
  @MutationAction({ mutate: ["incrementCounter", "decrementCounter"] })
  async resetCounter() {
    return {
      incrementCounter: 0,
      decrementCounter: 1000
    };
  }
}

export const counter1 = getModule(Counter1);
