import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import Result from '../../components/counter/result';

class gameHandler extends Component {

    answerClickedHandler = () => {
      this.props.history.push('/highscores');
    };

    render() {
        return(
            <Aux>
                <Header title="Select correct answer"/>
                <ButtonLarge desc="Ans 1" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 2" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 3" clicked={ this.answerClickedHandler }/>
                <ButtonLarge desc="Ans 4" clicked={ this.answerClickedHandler }/>
                <Result score="Current score : 2"/>
            </Aux>
        );
    }
}

export default gameHandler;