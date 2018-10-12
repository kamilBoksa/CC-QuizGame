import React, { Component } from 'react';
import Header from '../../components/header/header';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import Aux from '../../hoc/Auxillary';
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import "./categorySelector.css";

class categorySelector extends Component {

    constructor(props) {
        super(props);
        this.props.onInitCategories();
    }

    categoryClickedHandler = (event) => {
        this.props.onCategorySelected(event.target.value);
        this.props.history.push('/game');
    };

    render() {
        let categories = this.props.categories.map(category => (
            <ButtonLarge
                className="ButtonLarge"
                clicked={this.categoryClickedHandler}
                desc={category}
                key={category}/>
        ));
        return(
            <Aux>
                <div className="Content">
                    <h1>Hello {this.props.nickname} !</h1>
                    <Header title="Select category from listed below:"/>
                    <div className="CategoriesContainer">
                        {categories}
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        nickname: sessionStorage.getItem("nickname"),
        categories: state.category.categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(actions.initCategories()),
        onCategorySelected: (categoryName) => dispatch(actions.setCategory(categoryName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(categorySelector);