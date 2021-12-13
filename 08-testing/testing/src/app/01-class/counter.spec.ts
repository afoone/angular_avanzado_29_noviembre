import { identifierModuleUrl } from '@angular/compiler';
import { Counter } from './counter';

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => (counter = new Counter()));

  it('should create an instance ', () => {
    expect(counter).toBeDefined();
  });

  it('should start by 0', () => {
    expect(counter.counter).toBe(0);
  });

  it('should incremente by one', () => {
    counter.increment();
    expect(counter.counter).toBe(1);
    counter.counter = 9
    counter.increment()
    expect(counter.counter).toBe(10)
  });

  it('should decrement by one', () => {
    counter.decrement();
    expect(counter.counter).toBe(-1);
    counter.counter = 9
    counter.decrement()
    expect(counter.counter).toBe(8)
  });
});
