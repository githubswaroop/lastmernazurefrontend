import React, { useRef } from 'react';
function PBCQ() {
    const questions = [
        {
          id: 1,
          question: "In a test in which 240 students appeared, 180 qualified in Quantitative Ability, 130 qualified in Reasoning Ability and 150 qualified in Verbal Ability. 60 students qualified in only one section and 110 students qualified in only two sections. 10 students not qualified in all the sections. Find the number of students who qualified in at least two sections.",
          options: ['170', '180', '200', '220'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id: 2,
          question: "According to a plan, a team of farmers decided to harvest 216 m³ of wheat in several days. In the first three days, the team fulfilled the daily assignment, and then it harvested 8 m' of wheat over and above the plan everyday. Therefore, a day before the planned date, they had already harvested 232 m³ of wheat. How many cubic meters of wheat a day did the team have to cut according to the plan?",
          options: ['12', '14', '24', '26'],
          correctIndex: 2,
          ref: useRef(null),
        },
        {
          id: 3,
          question: "Three cards are drawn simultaneously from a well shuffled pack of 52 cards. What is the probability that two of them are odd numbered cards and one is an even numbered card?",
          options: ['912/1105', '152/3315', '152/1105', '8/221'],
          correctIndex: 3,
          ref: useRef(null),
        },{
          id:4,
          question: "Amandeep starts running on a circular track of length 1200 metres. He completes the first round in 4 min 48 sec. For all subsequent rounds, his speed decreases by 0.1 times of his previous round's speed. What will be amandeep's speed when he is running the third round?",
          options: ['15.25 km/hr', '10.93 km/hr', '12.15 km/hr', '18.15 km/hr'],
          correctIndex: 2,
          ref: useRef(null),
        },
        {
          id:5,
          question: "Loshini spent Rs. 18 lakh on purchasing and altering his new Audi car. She spent 14% on speakers and woofers, 10% on metalic wheels, 4% on insurance, 8% on repainting, 14% on interiors and the remaining was the actual cost of the car. If Road Tax, charged at 20%, is included in the actual cost of the car, calculate the amount of Road Tax?",
          options: ['1.5L', '1L', '15L', '1.25L'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:6,
          question: "Roshini spent Rs. 18 lakh on purchasing and altering his new Audi car. She spent 14% on speakers and woofers, 10% on metalic wheels, 4% on insurance, 8% on repainting, 14% on interiors and the remaining was the actual cost of the car. If Road Tax, charged at 20%, is included in the actual cost of the car, calculate the amount of Road Tax?",
          options: ['1', '2', '3', '4'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:7,
          question: "Anandi brings a certain number of chocolates to her class on her birthday. She distributes 1 chocolate less than half the number of chocolates in the 1st period.  Then in the 2nd period she distributes 2 chocolates less than one-third of the remaining and then in the 3rd period she distributes 3 chocolates less than one- fourth of the remaining.If there are still 36 chocolates left with her. What was the initial number of chocolates?",
          options: ['128', '124', '72', '64'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:8,
          question: "Santa Claus came on Christmas Eve distributing 50 people and 12 gifts remained undistributed. some gifts equally among 50 people and 12 gifts remained undistributed.If the number of people had been 49, 24 gifts would have been left after equally distributing. What was the total number of gifts distributed by Santa Claus on the Christmas Eve??",
          options: ['588', '612', '657', '712'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:9,
          question: "Madhav started a new business with accounts in two different banks (i.e. HDFC and ICICI). He deposited the earnings of each day in either of the two banks.However there were some days he did not deposit in any of the banks because of non-business days. Somehow he could not carry the business for long and had to shut it down. Find the total no of days Madhav carried on the business if 1) He did not deposit in HDFC bank on 40 days and in ICICI on 48 days. 2) He deposited on either HDFC bank or ICICI on 56 days.",
          options: ['72', '64', '32', '144'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:10,
          question: "In a city street of 3000 people, each person reads at least one of the three News papers. The number of people who read only Hindu is 400. While the number of people who read at least two paper is 1000, the number of people who read all the three News Papers is 100.The number of people who read only Times of India as well as those who read only Economic Times are multiples of 200. If the number of people who read only Economic Times is 600, and the people who read Times of India and Economic Times but not Hindu is 200.What is possible number of people who read Hindu and Times of India but not Economic Times if the difference is need to be minimum with people who read Hindu and Economic Times but not Time of India?",
          options: ['351', '349', 'Either A and B', 'None'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:11,
          question: "An artist got a challenge that he needs to draw a picture using some particular number of dots. If he tried to make those dots in shape of square, he was left with 46 dots in excess.When he increased the size of the square by one dot each side, he was 27 dots short of completing the square. What is the number of dots given to the artist to complete this challenge?",
          options: ['1432', '1342', '1394', '1250'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:12,
          question: "In a local city center, a well known Publisher was running a News paper business. The fixed cost of running is Rs. 60,000 per month.The cost of paper and ink is Rs. 200 per 1000 copies and printing cost is Rs. 100 per 500 copies. In the last month 40,000 copies were printed but only half of those could be sold at Rs. 4 each.There is one more source of income for the Publisher, which is advertising. If the total profit was 25% of the revenue from selling copies, what sum of money was obtained by advertising in the News paper?",
          options: ['24000', '20500', '15000', '200000'],
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

export default PBCQ;