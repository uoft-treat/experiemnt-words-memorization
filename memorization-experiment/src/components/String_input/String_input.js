import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './String_input.css';

const String_input = props => {

  // declare variables and hooks
  var count;
  const [correctguess, setcorrectguess] = React.useState([]);
  const [correctguessstring, setcorrectGuessedstring] = React.useState("");
  const [guessedstringlist, setGuessedstringlist] = React.useState([]);
  const [guessedstring, setGuessedstring] = React.useState('');
  const [mycount,setMycount] = React.useState(0);

  // update correctly guessed strings
  function toString(){
    var temp = "";
    for(var i = 0; i < correctguess.length; i++){
      temp = temp + correctguess[i] + " "
    }
    setcorrectGuessedstring(temp);
  }

  // handle each string from user input 
  function handleClick() {
    var temp = guessedstringlist;
    temp.push(guessedstring);
    setGuessedstringlist(temp);
    setGuessedstring("");
    checkwords(guessedstringlist, props.actual_string, props.num);
  }

  // check if the word is in the random words generated, update hooks value 
  function checkwords(input_array, actual_string, num){
    console.log(actual_string);
    console.log(input_array);
    for (var i = 0; i < num; i++){
        if (actual_string.indexOf(input_array[i]) > -1 && !correctguess.includes(input_array[i])){
            var temp = correctguess;
            correctguess.push(input_array[i]);
            setcorrectguess(temp);
            count = mycount + 1;
            setMycount(count);
        }
    }
    toString();
  }

  let content = (
    <React.Fragment>
        <div className = "string_input_field">
             <div className = "section">
                <TextField
                id="standard-password-input"
                label="Enter comma sperated words"
                margin="normal"
                fullWidth
                value = {guessedstring}
                onChange = {e => setGuessedstring(e.target.value)}
                />
            </div> 
            <div className = "section">
                <Button onClick={handleClick} variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Confirm</Button>
            </div>
            
            <div className = "string_section">
                You have memorized {mycount} words. Click Start to guess again. <p> Correctguesses: {correctguessstring} </p>
            </div>
        </div>
    </React.Fragment>
  );

  return content;
};







export default String_input;