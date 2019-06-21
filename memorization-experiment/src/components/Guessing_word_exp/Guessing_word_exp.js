import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Randomwords from 'random-words';
import String_input from '../String_input/String_input';
import ReactCountdownClock from 'react-countdown-clock';
import './Guessing_word_exp.css';

const Guessing_word = props => {


    // declare variables and hooks
    const num = 10;
    const [mystringlist, setMystringlist] = React.useState({
        stringlist: [],
      });

    const [generatestring, setGeneratestring] = React.useState({
        strings: '',
      });
    
    const [displayclock, setdisplayclock] = React.useState({
        isdisplay: false,
      });

    const [displayinput, setdisplayinput] = React.useState({
        isdisplay: false,
      });

    // basically convert an array to comma sperated string
    function toString(words_array){
        var result = '';
        for(let i = 0;  i < num-1; i++){
            result += words_array[i];
            result += ', '
        }
        result += words_array[num-1];
        setGeneratestring(oldValues => ({
            ...oldValues,
            strings: result,
        }));
    }

    // turn on and off on different blocks of components and set value from hooks
    function guessstring(){
        setdisplayclock(oldValues => ({
            ...oldValues,
            isdisplay: false,
        })); 
        setGeneratestring(oldValues => ({
            ...oldValues,
            strings: '',
        }));
        setdisplayinput(oldValues => ({
            ...oldValues,
            isdisplay: true,
        })); 
    }

    // start the program, strings will be generated and clock will start as well
    function handleClick() {
        if(displayclock.isdisplay == false){

            setdisplayinput(oldValues => ({
                ...oldValues,
                isdisplay: false,
            }));
            setdisplayclock(oldValues => ({
                ...oldValues,
                isdisplay: true,
            }));
            var new_string = Randomwords(10);
            setMystringlist(oldValues => ({
                ...oldValues,
                stringlist: new_string,
            }));
            toString(new_string);  
        }
    }



  const page_title = "Enter the Key to join"
  let content = (
    <React.Fragment>
        <div className = "main">
            <h1>Click Begin to start</h1>
            <div className = "section"> 
                {!displayclock.isdisplay && <Button onClick={handleClick} variant="contained" color="primary" className = "button" style={{fontSize: '18px'}} size="large">Begin</Button>}
            </div>
            <div className = "section">
                {!displayclock.isdisplay && displayinput.isdisplay && <String_input actual_string = {mystringlist.stringlist} num = {num}/>}
            </div>
            <div className = "string_section">
                {generatestring.strings}
            </div>
            <div className = "section">
                {displayclock.isdisplay && !displayinput.isdisplay && <ReactCountdownClock seconds={num}
                        color="#000"
                        alpha={0.9}
                        size={150}
                        onComplete = {guessstring}/>}
            </div>
            

        </div>
    </React.Fragment>
  );

  return content;
};





export default Guessing_word;