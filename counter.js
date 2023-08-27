const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
    this.rootSelector = rootSelector
    this._value = initialValue;
    this._step = step;
}

CounterPlugin.prototype.increment = function (){
    this._value += this._step;
}

CounterPlugin.prototype.decrement = function (){
    this._value -= this._step;
}

const counter1 = new CounterPlugin({rootSelector: '#counter-1', step: 10});

console.log(counter1)

const counter2 = new CounterPlugin({rootSelector: '#counter-2', step: 2});

console.log(counter2)
