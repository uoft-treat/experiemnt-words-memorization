import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {TreatService} from "../../services/impl/TreatService";
import {requireTreatSession} from "../hocs/requireTreatSession";
import './Survey_page.css';

const Survey_page = props => {

  // declare variables and hooks
  const [gender, setGender] = React.useState("");
  const [year, setYear] = React.useState("");
  const [program, setProgram] = React.useState("");



  // handle each string from user input 
  function handleClick() {
    TreatService.getInstance().setSurveyData(gender, year, program);
  }


  let content = (
    <React.Fragment>
        <div className = "main">
            <h1>Please fill the survey</h1>
                <div className = "string_input_field">
                    <div className = "section">
                        <TextField
                        id="standard-password-input"
                        label="Please tell us your gender"
                        margin="normal"
                        fullWidth
                        value = {gender}
                        onChange = {e => setGender(e.target.value)}
                        />
                    </div> 
                    <div className = "section">
                        <TextField
                        id="standard-password-input"
                        label="Please tell us your year of study"
                        margin="normal"
                        fullWidth
                        value = {year}
                        onChange = {e => setYear(e.target.value)}
                        />
                    </div> 
                    <div className = "section">
                        <TextField
                        id="standard-password-input"
                        label="Please tell us your Program"
                        margin="normal"
                        fullWidth
                        value = {program}
                        onChange = {e => setProgram(e.target.value)}
                        />
                    </div> 
                    <div className = "section">
                        <Button component={Link} to='/experiment1' onClick={handleClick} variant="contained" color="primary" className = "button" style={{fontSize: '15px'}} size="large">Go to Experiment</Button>
                    </div>
                </div>
        </div>
    </React.Fragment>
  );

  return content;
};




export default Survey_page;