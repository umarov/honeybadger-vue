import Vue from 'vue';
import Honeybadger from 'honeybadger-js';

interface HoneybadgerVue {
  notify(...args: any[]): any;
  setContext<T extends object>(context: T): Honeybadger;
  resetContext(): Honeybadger;
}

declare module '@honeybadger-io/vue' {
  export default {
    install(Vue: typeof Vue, options?: T): void
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $honeybadger: HoneybadgerVue;
  }
}
