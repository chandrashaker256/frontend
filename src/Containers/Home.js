import React, { Component } from 'react'
import classes from './Home.module.css'
import Logo from '../assets/images/starlogo.png'
import QuestionBox from '../Components/QuestionBox'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check: false
        }
    }

    btnclick = () => {
        this.setState(prevState => ({
            check: !prevState.check
        }));
    }

    render() {
        return (
            <div id="homepage">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><img className={`${classes.logo}`} src={Logo} alt="Logo" /></div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <button type="button" onClick={this.btnclick} className={`btn btn-primary ${classes.btncustom}`}><i className={`fa fa-star ${classes.fastar}`}></i>   Do. Or do not. There is no try   <i className={`fa fa-star ${classes.fastar}`}></i></button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                {this.state.check ? <QuestionBox /> : ''}
            </div>
        )
    }
}

export default Home;