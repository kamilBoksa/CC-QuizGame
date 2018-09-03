import React, { Component } from 'react';
import Result from '../../components/result/result';
import Aux from '../../hoc/Auxillary';
import Header from '../../components/header/header';
import SmallButton from '../../components/buttonSmall/buttonSmall';

class Highscores extends Component {
    render() {
        return(
         <Aux>
             <Header title="Highscores"/>
             <ul>
                 <li><Result/></li>
                 <li><Result/></li>
                 <li><Result/></li>
             </ul>
             <SmallButton desc="Play again"/>
         </Aux>
        )
    }
}

export default Highscores;