import React, { Component } from 'react';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';
import Aux from '../../hoc/Auxillary';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class landingPage extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/categories');
    };

    handleChange = (event) => {
        this.props.onNicknameChanged(event.target.value);
    };

    render() {
        return(
            <Aux>
                <Header title="Welcome to Quizgame"/>
                <form onSubmit={this.handleSubmit}>
                    <Input value={this.props.nickname} desc="Enter your nickname" onChange={this.handleChange}/>
                    <ButtonSmall type="submit" desc="Start game"/>
                </form>
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
        onNicknameChanged: (nickName) => dispatch(actions.setUserNickname(nickName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(landingPage);