// code your solution here


function saturdayFun(mypar = "roller-skate") {
    return "This Saturday, I want to " + mypar + "!";
  }

  function mondayWork(myparr = "go to the office") {

    return "This Monday, I will " + myparr + ".";
  }
  function wrapAdjective(myparrr) {

    return function (myDefault = "Special") {

      if (myparrr =="*") {  

        return `You are ${myparrr}${myDefault}${myparrr}!`;

      } else if (myparrr == "||") {

        return `You are ${myparrr}${myDefault}${myparrr}!`;
      }

    };
    
  }
  
  