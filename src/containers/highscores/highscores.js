import React, { Component } from 'react';
import Result from '../../components/result/result';
import Header from '../../components/header/header';
import SmallButton from '../../components/buttonSmall/buttonSmall';
import axios from 'axios';
import {connect} from "react-redux";

class Highscores extends Component {

    constructor() {
        super();
        this.state = {
            usersData: []
        }
    }

    componentDidMount() {
        axios.post("https://cc-quiz-game.herokuapp.com/users", {
            playerName: sessionStorage.getItem("nickname"),
        })
            .then(() => {
                axios.get("https://cc-quiz-game.herokuapp.com/users")
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
            <Result key={userData._id} position={index + 1} username={userData._nick} score = {userData._score}/>
            )
        );
        return(
         <div className="Content">
             <Header title="Highscores"/>
             <ol>
                 { usersScores }
             </ol>
             <SmallButton desc="Play again" clicked={this.restartGameHandler}/>
         </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userScore: state.game.currentScore
    }
};


export default connect(mapStateToProps)(Highscores);