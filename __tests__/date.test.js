import {Days} from "../src/date"
import {inputDate} from "../src/inputDate"

const day1 = new Date('04/11/1996');
let d = day1.getDay();

describe('Days', () => {
  let day;
  beforeEach(() => {
    day = new Days(4)
  });

  test("should return the day for 0", () => {
    expect(day.findDay(d)).toEqual("Thursday")
  });
});

// describe('inputDate', () =>{
//   let date;
//   beforeEach(() => {
//     date = new inputDate("02", "04", "2021")
//   });

//   test("should return day of the day, month, and the year", () => {
//     expect(date.getResult()).toEqual("02042021")
//   });

// });