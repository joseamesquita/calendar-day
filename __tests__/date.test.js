import {Days} from "../src/date"
import {Month} from "../src/month"


describe('Days', () => {
  const day1 = new Date('04/11/1996');
  let d = day1.getDay();
  let day = new Days();

  test("should return the day for 0", () => {
    expect(day.findDay(d)).toEqual("Thursday")
  });
});

describe('Month', () => {
  const day1 = new Date('04/11/1996');
  let d = day1.getMonth();
  let day = new Month();

  test("should return the day for 0", () => {
    expect(day.findMonth(d)).toEqual("April")
  });
});


  

