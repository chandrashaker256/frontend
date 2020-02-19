import React, { Component } from 'react';
import classes from './QuestionBox.module.css';
import axios from 'axios';
class QuestionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            answer1: null,
            answer2: [],
            answer3: [],
            answer4: []
        }
    }

    componentDidMount = () => {
        axios.post('http://127.0.0.1:8000/api/getAnswers').then(response => {
            if (response.status === 200) {
                this.setState({
                    loaded: true,
                    answer1: response.data.longest_opening_crawl_movie,
                    answer2: response.data.max_occurence_names,
                    answer3: response.data.spieces_count_results,
                    answer4: response.data.planets_count_results,
                })
            }
            console.log('Response', response);
        });
    }

    render() {
        let loadingData = (<div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`${classes.questionbox}`}>
                        <p className={`${classes.question}`}>Which of all StarWars movies has longest opening crawel?</p>
                        <h2 className={`${classes.answer}`}>{this.state.answer1}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`${classes.questionbox}`}>
                        <p className={`${classes.question}`}>What charactar (person) appeared in the most of StarWars film?</p>
                        {this.state.answer2.map(function (answer, idx) { return (<h2 key={idx} className={`${classes.answer}`}>{answer}</h2>) })}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`${classes.questionbox}`}>
                        <p className={`${classes.question}`}>What species appeared in the most number of StarWars film?</p>
                        {this.state.answer3.map(function (answer, idx) { return (<h2 key={idx} className={`${classes.answer}`}>{answer.spieces_name}({answer.count})</h2>) })}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`${classes.questionbox}`}>
                        <p className={`${classes.question}`}>What planet in StarWars universe provided largest number of vehicle pilots?</p>
                        {this.state.answer4.map(function (answer, idx) { return (<h2 key={idx} className={`${classes.answer}`}>Planet: {answer.planet_name} - Pilots: ({answer.count}) - {answer.vehicle}, {answer.people}</h2>) })}
                    </div>
                </div>
            </div>
            <br />
        </div>);
        let loadingProgress = (
            <span className={`${classes.spinnericon}`}><i className="fa fa-spinner fa-pulse"></i> Loading...</span>
        )
        return (
            this.state.loaded ? loadingData : loadingProgress
        );
    }
}

export default QuestionBox;