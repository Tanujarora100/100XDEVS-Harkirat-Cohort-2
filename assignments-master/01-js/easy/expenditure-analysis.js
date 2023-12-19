/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function getQuestionTopicWise(questionList) {
    const topicList = new Map();
    for (const {topic, questionName} of questionList) {
        if (!topicList.has(topic)) {
            topicList.set(topic, []);
        }
        topicList.get(topic).push(questionName);
    }
    return Array.from(topicList, ([topic, questionName]) => ({topic, questionName}));
}


function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = new Map();
    for (const {category, price} of transactions) {
        categoryTotals.set(category, (categoryTotals.get(category) || 0) + price)
    }
    return Array.from(categoryTotals, ([category, totalPrice]) => ({category, totalPrice}));

}

module.exports = calculateTotalSpentByCategory;

const transactions = [
    {id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza'},
    {id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger'},
    {id: 3, timestamp: 1656076800000, price: 15, category: 'Clothing', itemName: 'Shirt'},
];
let calculateTotalSpentByCategory1 = calculateTotalSpentByCategory(transactions);
console.log(calculateTotalSpentByCategory1)
const questions = [
    {topic: 'JavaScript', questionName: 'How does arrow function work?'},
    {topic: 'JavaScript', questionName: 'What is a closure?'},
    {topic: 'React', questionName: 'What is JSX?'},
    {topic: 'React', questionName: 'How to use state in React?'},
    {topic: 'Node.js', questionName: 'What is Node.js?'},
];
let questionTopicWise = getQuestionTopicWise(questions);
console.log(questionTopicWise);
