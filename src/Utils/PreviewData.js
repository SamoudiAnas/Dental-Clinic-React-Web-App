import { v4 } from "uuid";

export const previewData = [
  //January
  [],

  //February
  [],

  //March
  [],

  //April
  [],

  //May
  [],

  //June
  [],

  //July
  [],

  //August
  [],

  //September
  [],

  //October
  [
    //week 1
    [],

    //week 2
    [],

    //week 3
    [],

    //week 4
    [
      //day 1
      {},

      //day 2
      {},

      //day 3
      {},

      //day 4
      {
        date: "date",
        clients: new Map([
          ["8-9", "anas samoudi"],
          ["9-10", "azdsfdsiz"],
          ["10-11", "amina"],
          ["11-12", "sd12"],
          ["12-1", "qsdqsd"],
          ["1-2", "vcvh"],
          ["2-3", "kul"],
          ["3-4", "cfg"],
        ]),
      },

      //day 5
      {},

      //day 6
      {},

      //day 7
      {},
    ],

    //week 5
    [],
  ],

  //November
  [],

  //December
  [],
];

/**
 *
 * Data Structure
 * ==============
 *
 * Year => Array of 12 Months
 * Month => Array of X weeks (X is the number of weeks, it depends from month to other how many weeks in it)
 * Week => Array of Y day (Y is the number of days in a week)
 * day => Object (it holds: the date,clients of that day in a array)
 *
 */

export const testData = [
  {
    id: v4(),
    content: "First task",
  },
  {
    id: v4(),
    content: "Second task",
  },
];
