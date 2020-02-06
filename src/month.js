export class Month {
  constructor(){
    this.month;
  }

  findMonth(month){
    if (month === 0){
      return "January";
    } else if (month === 1 ) {
      return "February";
    } else if (month === 2 ) {
      return "March";
    }  else if (month === 3 ) {
      return "April";
    }  else if (month === 4 ) {
      return "May";
    }  else if (month === 5 ) {
      return "June";
    }  else if (month === 6 ) {
      return "July";
    } else if (month === 7 ) {
      return "August";
    } else if (month === 8 ) {
      return "September";
    } else if (month === 9 ) {
      return "October";
    } else if (month === 10 ) {
      return "November";
    } else if (month === 11 ) {
      return "December";
    } else {
      return "Please enter a month"
    }
    
  }
}
