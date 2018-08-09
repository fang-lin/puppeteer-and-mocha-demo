const start = require('./plots/start.plot');
const question = require('./plots/question.plot');
const failure = require('./plots/failure.plot');

describe('Start -> Question 1 -> Question 2 -> Failure', () => {
  const baseURL = 'http://localhost:8080';

  start({ baseURL });

  question({
    answer: '5050',
    baseURL,
    pageURL: 'question-1.html',
    question: '1 + 2 + 3 + ... + 99 + 100 =',
    title: 'Question 1',
    inputSelector: '#answer-1'
  });

  question({
    answer: '99999',
    baseURL,
    pageURL: 'question-2.html',
    question: '1 * 2 * 3 * ... * 9 * 10 =',
    title: 'Question 2',
    inputSelector: '#answer-2'
  });

  failure({ baseURL });
});
