import logo from './logo.svg';
import { Component } from "react";
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import CarousselSfectoria from './components/CarousselSfectoria'
import Formationslist from './components/Formationslist';
import Reviewslist from './components/Reviewslist';
import Formu from './components/Formu';
import Discription from './components/Discription';




class App extends Component {
  constructor() {
    super()
    this.state = {
      showform: false,
      selectedItem:{}
    };
    this.showHome = this.showHome.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showHome() {
    this.setState({ showform: false });
  }
  showForm(item) {
    this.setState({ showform: true,selectedItem:item});
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.showform === false ? (
          <div>
            <CarousselSfectoria />
            <Formationslist showForm={this.showForm} />
          </div>
        ) : (
          <Formu showHome={this.showHome} selectedItem={this.state.selectedItem}/>
        )}
       <Reviewslist />
       <Discription/>
  
      </div>
      
        
      
      
    );
  }
}

export default App;