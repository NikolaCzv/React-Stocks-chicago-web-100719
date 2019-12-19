import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()

    this.state = {
      stocks: [],
      myStocks: [],
      alphabetically: false,
      price: false,
      displayStocks: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocksData => this.setState({
      stocks: stocksData
    }))
  }

  handleStock = (stock) => {
    if(!this.state.myStocks.includes(stock)){
      this.setState({
        myStocks: [...this.state.myStocks, stock]
      })}
  }

  handlePortofolioStock = (stock) => {
    const sellStock = this.state.myStocks.filter(s => s.id !== stock.id)
      this.setState({
        myStocks: sellStock
      })
  }

  sortAlphabetically = () => {
    this.setState({
      alphabetically: !this.state.alphabetically,
      price: false
    })

    this.state.stocks.sort(function (a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
  }

  sortPrice = () => {
    this.setState({
      price: !this.state.price,
      alphabetically: false
    })

    this.state.stocks.sort(function (a, b) {
      if (a.price < b.price) return -1;
      else if (a.price > b.price) return 1;
      return 0;
    });
  }

  
  filterStocks = (type="All") => {
    if(type !== "All"){
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === type)        
      })
    }else if (type === "All"){
      this.setState({
        displayStocks: this.state.stocks
      })
    }
  }


  render() {
    return (
      <div>
        <SearchBar  sortAlphabetically={this.sortAlphabetically}
                    alphabetically={this.state.alphabetically}
                    price={this.state.price}
                    sortPrice={this.sortPrice}
                    filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks}
                              handleStock={this.handleStock}
                              alphabetically={this.state.alphabetically}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks}
                                  handlePortofolioStock={this.handlePortofolioStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
