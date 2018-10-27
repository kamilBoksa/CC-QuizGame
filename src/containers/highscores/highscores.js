import React, { Component } from 'react';
import Result from '../../components/result/result';
import Header from '../../components/header/header';
import SmallButton from '../../components/buttonSmall/buttonSmall';
import axios from 'axios';
import {connect} from "react-redux";
import Aux from '../../hoc/Auxillary';
import './highscores.css';

class Highscores extends Component {

    constructor() {
        super();
        this.state = {
            usersData: []
        }
    }

    componentDidMount() {
        axios.post("https://cc-quiz-game.herokuapp.com/players", {
            player_nick: sessionStorage.getItem("nickname"),
            player_score: this.props.userScore
        })
            .then(() => {
                axios.get("https://cc-quiz-game.herokuapp.com/highscores")
                    .then(response => {
                        this.setState({
                            usersData: response.data
                        });
                    });
            });
    }

    restartGameHandler = () => {
        this.props.history.push("/categories");
    };

    render() {
        this.state.usersData.sort((a,b) => {
            return b._score - a._score
        });
        let usersScores = this.state.usersData.slice(0,10).map((userData, index) => (
            <Result key={userData.id} position={index + 1} username={userData.player_nick} score = {userData.player_score}/>
            )
        );
        return(
            <Aux>
                <div className="ContentHighScores">
                    <Header title="Highscores"/>
                    <ol>
                        { usersScores }
                    </ol>
                    <SmallButton className="ButtonSmall" desc="Play again" clicked={this.restartGameHandler}/>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        userScore: state.game.currentScore
    }
};


export default connect(mapStateToProps)(Highscores);