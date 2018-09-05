import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import Result from '../../components/counter/result';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class gameHandler extends Component {

    answerClickedHandler = (event) => {
        this.props.onAnswerSelected(event.target.value)
      //this.props.history.push('/highscores');
    };

    render() {
        return(
            <Aux>
                <h1> SELECTED CATEGORY : {this.props.categoryName}</h1>
                <Header title="Select correct answer"/>
                <ButtonLarge desc="Ans 1" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 2" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 3" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 4" clicked={ this.answerClickedHandler }/>
                <Result score="Current score : 2"/>
                <p>Selected answer: {this.props.selectedAnswer}</p>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        categoryName: state.category.categoryName,
        selectedAnswer: state.game.selectedAnswer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAnswerSelected: (answer) => dispatch(actions.setAnswer(answer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(gameHandler);