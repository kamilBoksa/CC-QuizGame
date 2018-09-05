import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class categorySelector extends Component {

    categoryClickedHandler = (event) => {
        this.props.onCategorySelected(event.target.value);
        this.props.history.push('/game');
    };

    render() {
        return(
            <Aux>
                <h1>Hello {this.props.nickname} !</h1>
                <Header title="Select category from listed below:"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Algorithms"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Videogames"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Data Structures"/>
                <ButtonLarge clicked = {this.categoryClickedHandler} desc="Codecool"/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        nickname: state.landingPage.userNickname,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCategorySelected: (categoryName) => dispatch(actions.setCategory(categoryName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(categorySelector);