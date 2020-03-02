import React from 'react';
import './App.css';
import { GoodsList, Good } from './Components/GoodsList';
import { getGoods } from './Api';
import { Button } from './Button';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadFiveGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.slice(0, 5),
        });
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .filter((good: Good) => good.color === 'red'),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button onClick={this.loadAllGoods}>Load Goods</Button>
        <Button onClick={this.loadFiveGoods}>Load Five Goods</Button>
        <Button onClick={this.loadRedGoods}>Load Red Goods</Button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
