import React, {Component} from 'react';
import characters from './characters.json'
import Container from "./components/Container/";
import Image from './components/Img/';
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Nav from "./components/Nav/";

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        characters
    }

    // componentDidMount() {     this.setState({         characters:
    // this.shuffle(this.state.characters)     }) };

    shuffle = () => {
        let {game} = this.state;
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        this.setState({game});
        console.log(characters);
    };

    //resets all clicked properties to false
    reset = () => {
        const resetGame = characters.map(item => ({
            ...item,
            clicked: false
        }));
        return this.shuffle(resetGame);
    };

    //update score and replace top score if score is greater than current topScore
    correctClick = newData => {
        let newScore = this.state.score;
        newScore++;
        let newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            data: this.shuffle(newData),
            score: newScore,
            topScore: newTopScore
        })
    }

    //restarts game and sets score back to 0
    newGame = newData => {
        this.setState({
            data: this.reset(newData),
            score: 0
        })
    }

    // checking the clicked property of the image. If it has been clicked, reset
    // game. If it hasn't, update clicked to true
    imageClick = id => {
        let click = false;
        const newData = this
            .state
            .characters
            .map(image => {
                if (image.id === id) {
                    if (!image.clicked) {
                        image.clicked = true;
                        click = true;
                    }
                }
                return image;
            });
        click ? this.correctClick(newData): this.newGame(newData);
    }
    render() {
        // let {characters} = this.state;
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore}/>
                <Header message={this.state.message}/>
                <Container>
                    <div className="row">
                        {this.state.characters.map(image => (<Image
                                url={image.url}
                                id={image.id}
                                key={image.id}
                                clicked={image.clicked}
                                handleClick={this.imageClick}/>))}
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;
