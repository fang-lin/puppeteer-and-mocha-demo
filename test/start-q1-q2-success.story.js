const start = require('./plots/start.plot');
const q1 = require('./plots/q1.plot');
const q2 = require('./plots/q2.plot');
const success = require('./plots/success.plot');

describe('start->q1->q2->failure', () => {
  start();
  q1({ answer: '5050' });
  q2({ answer: '3628800' });
  success();
});
