import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return < Stock 
      key={stock.id}
      stock={stock}
      handleStock={this.props.handleStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
