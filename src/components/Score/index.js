import React, {Component} from "react";
import "./score.css";

class Score extends Component {
    state = {
        message: ""
    }

    componentDidUpdate(prevProps) {
        let newState={
            message: ""
        };
        const {score, topScore} = prevProps
        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score !== 0 && topScore > 0) {
            newState.message = "correct";
        } else {
            newState.message = "incorrect";
        };

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        };
    };

    switchMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "You guessed correctly!";
        case "incorrect":
          return "You guessed incorrectly!";
        default:
          return "Click a character to begin!";
        }
    };

    render(){
        return(
            <li>
                {this.switchMessage()}
            </li>
        );
    }
}

export default Score;