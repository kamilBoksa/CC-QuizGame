import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import Result from '../../components/counter/result';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class gameHandler extends Component {

    constructor(props) {
        super(props);
        this.props.onInitAnswers();
    }

    answerClickedHandler = (event) => {
        this.props.onAnswerSelected(event.target.value)
      //this.props.history.push('/highscores');
    };

    render() {
        let answers = this.props.answers.map(answer => (
            <ButtonLarge
                clicked={this.answerClickedHandler}
                desc={answer}
                key={answer}/>
        ));
        return(
            <Aux>
                <h1> SELECTED CATEGORY : {this.props.categoryName}</h1>
                <h1> "QUESTION" </h1>
                <Header title="Select correct answer"/>
                {answers}
                <Result score="Current score : 2"/>
                <p>Selected answer: {this.props.selectedAnswer}</p>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        categoryName: state.category.categoryName,
        selectedAnswer: state.game.selectedAnswer,
        answers: state.game.answers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitAnswers: () => dispatch(actions.getAnswers()),
        onAnswerSelected: (answer) => dispatch(actions.setAnswer(answer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(gameHandler);