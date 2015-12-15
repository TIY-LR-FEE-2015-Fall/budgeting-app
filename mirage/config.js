// jscs:disable

export default function() {
  // Sets mirage to list all budgets
  this.get('/budgets');
  this.post('/budgets');
  this.get('/budgets/:id');
  this.put('/budgets/:id');

  this.post('/token', function() {
    return {
      token_type: 'bearer',
      access_token: 'b95384153145e8803babfcc335c5b990b1c72495',
      expires_in: 3600,
      refresh_token: 'b0de62840bef5760772566d0faeb79be7cfb20d8',
    };
  });
}
