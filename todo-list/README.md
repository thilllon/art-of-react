# class component

## method 1: class-properties(RECOMMEND)

- not standard js grammar

```javascript
// no need constructor

handleIncrease = () => {
  //
};
return <button onClick={this.handleIncrease}>+1</button>;
```

## method 2: bind this in contructor

```javascript
constructor(props) {
  super(props);
  this.handleIncrease = this.handleIncrease.bind(this);
}

handleIncrease(){
  //
};

return <button onClick={this.handleIncrease}>+1</button>;

```

## method 3: inline(NOT RECOMMEND)

- hard to optimize

```javascript
handleIncrease(){
  //
};

return <button onClick={() => this.handleIncrease()}>+1</button>;
```
