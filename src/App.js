import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CarousselSfectoria from "./components/CarousselSfectoria";
import AllCards from "./components/AllCards";
import Formulaire from "./components/Formulaire";
import { Component } from "react";
import FooterSfectoria from "./components/footer/FooterSfectoria";

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
            <AllCards showForm={this.showForm} />
          </div>
        ) : (
          <Formulaire showHome={this.showHome} selectedItem={this.state.selectedItem}/>
        )}
       
      </div>

      
    );
  }
}

export default App;
