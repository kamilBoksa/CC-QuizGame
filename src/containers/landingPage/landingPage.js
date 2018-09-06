import React, { Component } from 'react';
import './landingPage.css'
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';
import Aux from '../../hoc/Auxillary';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class landingPage extends Component {

    constructor(props) {
        super(props);
        this.username = "";
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onNicknameChanged(this.username);
        this.props.history.push('/categories');
    };

    handleChange = (event) => {
        this.username = event.target.value;
    };

    render() {
        return(
            <Aux>
                <div className="Content">
                    <Header title="Welcome to Quizgame"/>
                    <form onSubmit={this.handleSubmit}>
                        <Input value={this.props.nickname} desc="Enter your nickname" onChange={this.handleChange}/>
                        <ButtonSmall type="submit" desc="Start game"/>
                    </form>
                </div>
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