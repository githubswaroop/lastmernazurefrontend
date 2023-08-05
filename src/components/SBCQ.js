import React, { useRef } from 'react';
function SBCQ() {
    const questions = [
        {
          id:1,
          question: "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
          options: ['20m/s', '30m/s', '60m/s', '40m/s'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:2,
          question: "Two friends shayam and Kailash own two versions of a car. Shayam owns the diesel version of the car, while kailash owns the petrol version. Kailash's car gives an average that is 20% higher than Shayam's (in terms of litres per kilometre). It is known that petrol costs 60% of its price higher than diesel.",
          options: ['3:1', '1:3', '1:2', '2:1'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:3,
          question: "In the product of two fractional values 13/425 and 17/1625. How many zeros are there between the decimal point and the first non-zero digit after the decimal point?",
          options: ['3','4', '5', '6'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:4,
          question: "Arjun, Ankit, and Anil can complete a task in 40 days, 50 days, and 64 days respectively. Amar is twice as efficient as Arjun. All of them worked together for five days. Then, Arjun and Anil worked together for a few days alone completed the task. If Amar was paid Rs. 1920 for his work, how much was Anil paid for his work?",
          options: ['3840', '960', '1920', '640'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:5,
          question: "The ratio of balls in three boxes is 6:8:9 In what ratio should the balls in the second and third boxes be increased, So that the final ratio becomes 1:3:4?",
          options: ['3:9', '30:40', '2:3', '24:45'],
          correctIndex: 2,
          ref: useRef(null),
        },
        {
          id:6,
          question: "The average price of 16 pens is Rs. 64 while the average price of 14 of these pens is Rs. 44. Of the remaining two pens, if the price of one pen is 40% more than the other, what is the price of each of these two pens?",
          options: ['250,238', '170,238', '160,238', '170,248'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:7,
          question: "At what Percentage above the cost price must an article be marked, so as to gain 33% after allowing the customer a discount of 5%",
          options: ['33%', '45%', '40%', '51%'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:8,
          question: "Anuj, Bibhuti and Chandu can lay 432 m of wires together in 8 days. In a day, Chandu can lay as many more meters of wire than Bibhuti as Bibhuti can lay more than Anuj. Chandu's 5 days of work is equivalent to Anuj's 7 days of work. How many meters of wire can Anuj alone lay in a day?",
          options: ['12', '15', '17', '20'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:9,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:10,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:11,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:12,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:13,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:14,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:15,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },{
          id:16,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:17,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:18,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:19,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:20,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:21,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:22,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:23,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:24,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:25,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:26,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:27,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:28,
          question: "Find the smallest number",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:29,
          question: "What is the smallest number?",
          options: ['5', '6', '7', '8'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:30,
          question: "What is the smallest number?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        }
      ];
  return questions;
}

export default SBCQ;