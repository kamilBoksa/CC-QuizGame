import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';

class categorySelector extends Component {

    categoryClickedHandler = () => {
        this.props.history.push('/game');
    };

    render() {
        return(
            <Aux>
                <Header title="Select category from listed below:"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Algorithms"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Videogames"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Data Structures"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Codecool"/>
            </Aux>
        );
    }
}

export default categorySelector;