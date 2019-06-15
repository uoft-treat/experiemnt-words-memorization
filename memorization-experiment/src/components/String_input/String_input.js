import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './String_input.css';

const String_input = props => {

   
  var count;
  const [guessedstring, setGuessedstring] = React.useState('');
  const [mycountdisplay, setmycountdisplay] = React.useState(false);
  const [mycount,setMycount] = React.useState({
    newcount: 0,
  });
  function handleClick() {
    checkwords(guessedstring, props.actual_string, props.num);
  }

  function checkwords(input_string, actual_string, num){
    var count = 0;
    var input_array = input_string.split(',');
    for (var i = 0; i < num; i++){
        if (actual_string.indexOf(input_array[i]) > -1){
            count++;
            setMycount(oldValues => ({
              ...oldValues,
              newcount: count,
          })); 
        }
    }
    setmycountdisplay(true)
  }

  let content = (
    <React.Fragment>
        <div className = "string_input_field">
            {!mycountdisplay && <div className = "section">
                <TextField
                id="standard-password-input"
                label="Enter comma sperated words"
                margin="normal"
                fullWidth
                value = {guessedstring}
                onChange = {e => setGuessedstring(e.target.value)}
                />
            </div> }
            { !mycountdisplay && <div className = "section">
                <Button onClick={handleClick} variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Confirm</Button>
            </div>}
            
            {mycountdisplay && <div className = "string_section">
                You have memorized {mycount.newcount} words. Click Start to guess again.
            </div>}
        </div>
    </React.Fragment>
  );

  return content;
};







export default String_input;