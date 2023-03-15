function scuberGreetingForFeet(distance){
  // Write your code here!
  let message = '';
  if(distance <= 400){
    message = "This one is on me!";
  }else if(distance >= 400 && distance <= 2000){
    message = "That will be twenty bucks."
  }else if(distance > 2000){
    if(distance > 2500){
      message = "No can do."
    }else{
      message = "I will gladly take your thirty bucks."
    }
  }

  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  let message = city == "NYC" ? "Ok, sounds good." : "No go.";

  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  
  switch(tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }

  return message;
}
