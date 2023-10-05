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
          question: "According to a plan, a team of farmers decided to harvest 216 m³ of wheat in several days. In the first three days, the team fulfilled the daily assignment, and then it harvested 8 m³ of wheat over and above the plan everyday. Therefore, a day before the planned date, they had already harvested 232 m³ of wheat. How many cubic meters of wheat a day did the team have to cut according to the plan?",
          options: ['12', '24', '13', '25'],
          correctIndex: 1,
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
          question: "In a row of girls, Nita is 15th from the left and Vimla is 23rd from the right. If they interchange their positions, then Nita becomes 18 th from the left. Then at what position will Vimla be from the right?",
          options: ['25', '26', '28', '29'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:14,
          question: "20% of the voters did not cast their vote in an election between two candidates. 20% of the votes polled were found invalid. The successful candidate got 54% of the valid votes and won by a majority of 5120 votes. Find the total number of voters enrolled on the voter list.?",
          options: ['250000', '100000', '200000', '175000'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:15,
          question: "The savings of an employee equals income-expenditure. If the income of A, B, C is in the ratio 1:2:3, expenses 3:2:1. What is the order of employees A, B. C in the increasing order of the size of their savings?",
          options: ['a>c>b', 'b>a>c', 'b>c>a', 'c>b>a'],
          correctIndex: 3,
          ref: useRef(null),
        },{
          id:16,
          question: "A street seller bought sweet corn for Rs 40 per kg. In one kg there are approximately 6 heads of corns. He sells them for Rs 10 per piece. How many corns should he sell in order to make a profit of Rs 150 in a day?",
          options: ['48', '56', '45', '55'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:17,
          question: "Grace is twice as efficient as Garry and Garry is thrice as efficient as Guna, who can finish a job alone in 24 days. If Grace, Garry and Guna work on alternate days with Garce starting first, in how many days will the job finish?",
          options: ['6 1/2 days ', '6 2/3 days', '7 1/2 days', '8 days'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:18,
          question: "Couples sit around a bonfire together. Each husband sits to the right of his wife. M, N, O, and P are husbands and Q, R, S, and T are wives. N - R and O-S are married couples. P does not take a seat subsequent to S. Q sits to the left of M, who sits opposite P. N sits among ?",
          options: ['T and Q', 'R and S', 'R and P', 'Q and R'],
          correctIndex: 3,
          ref: useRef(null),
        },
        {
          id:19,
          question: "A train is going from Mumbai to Pune and makes 5 stops on the way. 3 persons enter the train after it has started from Mumbai with 3 different tickets. How many different sets of tickets they may have had?",
          options: ['512', '455', '712', '510'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:20,
          question: "12 men can complete a piece of work in 36 days. 18 women can complete the same piece of work in 60 days. 8 men and 20 women work together for 20 days. If only women were asked to complete the remaining work in 4 days, how many women would be required ?",
          options: ['65', '76', '57', '70'],
          correctIndex: 3,
          ref: useRef(null),
        },
        {
          id:21,
          question: "If the hour hand is between 4 and 5 and the angle between the minute hand and hour hand of the clock is 60 degrees, what time should the clock show? Considering both the possibilities for the minute hand?",
          options: ['80/11 min past 4; 280/11 min past 4', '120/11 min past 4; 360/11 min past 4', '90/11 min past 4; 270/11 min past 4 ', '45/6 min past 4; 245/6 min past 4'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:22,
          question: "Eesha bought two varities of rice costing SORS per kg and 60 Rs per kg and mixed them in some ratio. Then she sold that mixture at 70 Rs per kg making a profit of 20% What was the ratio of the mixture?",
          options: ['1:6', '1:5', '1:2', '2:5'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:23,
          question: "Harry and Binny have salaries that jointly amount to $10,000 per month. They spend the same amount monthly and then it is found that the ratio of their savings is 6:1. If Harry saves 40% of his salary, then which of the following is Harry's salary?",
          options: ['$6000', '$5000', '$4000', '$3000'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:24,
          question: "If 12 men can do a piece of work in 40 days by working 8 hours per day. How many men will it take to do 10 times the amount of work if they work for 4 hours per day for 15 days?",
          options: ['90', '160', '640', '600'],
          correctIndex: 0,
          ref: useRef(null),
        },
        {
          id:25,
          question: "A dairyman pays Rs. 6.40 per litre of milk. He adds water and sells the mixture at Rs. 8 per litre, thereby making 37.5% profit. The proportion of water to milk received by the customers is?",
          options: ['5:6', '1:25', '1:10', '3:10'],
          correctIndex: 2,
          ref: useRef(null),
        },
        {
          id:26,
          question: "Find the greatest number of five digits which when divided by 3, 5, 8, 12 leaves 2 as remainder?",
          options: ['99998', '99997', '99992', '99982'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:27,
          question: "In a T20 cricket match, a team needs to chase a score of 184 runs. The Strike rate of opening batsman Mike and Bob are 180 and 150 respectively. Mike has faced ten balls whereas Bob has faced 20 balls.What is the required (approximate) run rate for the team to win the match?",
          options: ['8', '6', '9', '12'],
          correctIndex: 2,
          ref: useRef(null),
        },
        {
          id:28,
          question: "The seller of the fruit juice shop has 20 liters of mango juice. If he mixes 5 liters of water, which is freely available, in 20 liters of pure mango juice.If the cost of pure mango juice is Rs.18 per liter,then find the profit of the seller, when he sells all the mixture at cost price?",
          options: ['15%', '25%', '20%', '18%'],
          correctIndex: 1,
          ref: useRef(null),
        },
        {
          id:29,
          question: "Anand is earning 30% more than Bhanu and Bhanu is earning 40% more than Charitha. Anand is spending 10% more than Bhanu and Bhanu is spending 8% more than Charitha. What percent of Charitha's income is Anand's saving?",
          options: ['65%', '75%', '80%', 'None'],
          correctIndex: 3,
          ref: useRef(null),
        },
        {
          id:30,
          question: "There is an equilateral triangle of which each side is 2 m. With all the three corners as centers, circles each of radius 1 m are described. Find the area of the remaining portion (i.e. excluding the area common to all the circles and triangles).",
          options: ['0.25', '0.04', '0.16', '0.05'],
          correctIndex: 2,
          ref: useRef(null),
        }
      ];
  return questions;
}

export default PBCQ;
