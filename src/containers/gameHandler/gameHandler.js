import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import ScoreCounter from '../../components/counter/counter';
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import Spinner from '../../components/spinner/spinner';
import "./gameHandler.css";

class gameHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            isLoading: true
        };
    }

    componentDidMount() {
        this.setInitialState();
        this.props.onResetGameData();
        if(this.props.categoryName === " "){
            this.props.history.push("/");
        } else {
            this.props.onGetQuestions(this.props.categoryName);
            setTimeout(()=> {
                this.props.onInitQuestion(this.state.questionIndex);
                this.props.onUpdateScore(0);
                this.setState({isLoading: false})
            }, 2000);
        }
    }

    setInitialState() {
        this.setState({
            answeredQuestionsIds: [],
            questionIndex: 0
        })
    }

    answerClickedHandler = (event) => {
        this.props.onAnswerSelected(event.target.value);
        this.setState({questionIndex: this.state.questionIndex += 1});
        if(this.state.questionIndex < 8) {
            this.props.onInitQuestion(this.state.questionIndex);
        }
        if(event.target.value === this.props.question.correctAnswer) {
            this.props.onUpdateScore(this.props.currentScore + 1);
        }
        if(this.state.questionIndex === 8) {
            this.props.history.push('/highscores');
        }
    };

    render() {
        let answers = this.props.answers.map(answer => (
            <ButtonLarge
                className="AnswerButton"
                clicked={this.answerClickedHandler}
                desc={answer._text}
                key={answer._text}/>
        ));

        let question =(
            <Aux>
                <h1> Question: {this.props.question.description}
                    <span className="QuestionCounter">
                                {this.state.questionIndex + 1}/8
                            </span>
                </h1>
                <Header title="Select correct answer"/>
                <div className="AnswersContainer">
                    {answers}
                </div>
                <ScoreCounter score={this.props.currentScore}/>
            </Aux>);

        if(this.state.isLoading === true) {
            question = <span>Loading Questions<div><Spinner/></div></span>;
        }
        return(
            <Aux>
                <div className="Content">
                    <h1> Selected Category : {this.props.categoryName}</h1>
                    {question}
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        categoryName: state.category.categoryName,
        question: state.game.question,
        questions: state.game.questions,
        selectedAnswer: state.game.selectedAnswer,
        answers: state.game.question.answers,
        currentScore: state.game.currentScore,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetQuestions: (categoryName) => dispatch(actions.getQuestions(categoryName)),
        onInitQuestion: (index) => dispatch(actions.initQuestion(index)),
        onAnswerSelected: (answer) => dispatch(actions.setAnswer(answer)),
        onUpdateScore: (newScore) => dispatch(actions.updateScore(newScore)),
        onResetGameData: () => dispatch(actions.resetGameData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(gameHandler);