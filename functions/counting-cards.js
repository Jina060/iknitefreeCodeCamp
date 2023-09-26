let count = 0;

function cc(card) {
  // Only change code below this line
 
 switch (card) {
   case 2:
    count = count + 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + "Hold";
    }
  
   case 3:
    count = count + 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

   case 4:
    count = count + 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

   case 5:
    count = count + 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

   case 6:
    count = count + 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }
    break;

    case 7:
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 8:
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 9:
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }
    break;

    case 10:
    count = count - 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 'J':
    count = count - 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 'Q':
    count = count - 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 'K':
    count = count - 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }

    case 'A':
    count = count - 1;
    if (count > 0){
      return count + " " + "Bet";
    }else {
      return count + " " + "Hold";
    }
    break;
 }
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');