const start = require('./plots/start.plot');
const q1 = require('./plots/q1.plot');
const failure = require('./plots/failure.plot');

describe('start->q1->failure', () => {
  start();
  q1({ answer: '10000' });
  failure();
});
