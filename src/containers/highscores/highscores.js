import React, { Component } from 'react';
import Result from '../../components/result/result';
import Header from '../../components/header/header';
import SmallButton from '../../components/buttonSmall/buttonSmall';
import { connect } from 'react-redux';

class Highscores extends Component {

    componentDidMount() {
        alert(this.props.currentScore);
    }

    restartGameHandler = () => {
        this.props.history.push("/categories");
    };

    render() {
        return(
         <div className="Content">
             <Header title="Highscores"/>
             <ol>
                 <li><Result/></li>
                 <li><Result/></li>
                 <li><Result/></li>
             </ol>
             <SmallButton desc="Play again" clicked={this.restartGameHandler}/>
         </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentScore: state.game.currentScore
    }
};

export default connect(mapStateToProps)(Highscores);