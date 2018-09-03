import React, { Component } from 'react';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';
import Aux from '../../hoc/Auxillary';

class landingPage extends Component {

    state = {
      username: " "
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.username);
        this.props.history.push('/categories');
    };

    handleChange = (event) => {
        this.setState({
           username: event.target.value
        });
    };

    render() {
        return(
            <Aux>
                <Header title="Welcome to Quizgame"/>
                <form onSubmit={this.handleSubmit}>
                    <Input value={this.state.username} desc="Enter your nickname" onChange={this.handleChange}/>
                    <ButtonSmall type="submit" desc="Start game"/>
                </form>
            </Aux>
        );
    }
}

export default landingPage;