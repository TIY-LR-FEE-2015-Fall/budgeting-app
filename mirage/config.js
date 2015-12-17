//jscs: disable
import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = 'http://localhost:3000';

  // Sets mirage to list all budgets
  this.get('/budgets');
  this.post('/budgets');
  this.get('/budgets/:id');
  this.put('/budgets/:id');

  this.get('/transactions');
  this.post('/transactions');
  this.get('/transactions/:id');
  this.put('/transactions/:id');

  this.post('/oauth/token', function(server, req) {
    var data = req.requestBody.split('&').reduce((carry, current) => {
      var [key, value] = current.split('=');

      carry[key] = decodeURIComponent(value);

      return carry;
    }, {});


    if (data.username !== 'valid@example.com' || data.password !== 'password1234') {
      return new Mirage.Response(401, {}, ('error: invalid credentials'));
    }
    //ONLY SENT FOR VALID@EXAMPLE.COM
    return {
      'token_type': 'bearer',
      'access_token': 'f1c5cb890586fea033c22b2ceff75f3fb6d37321',
      'expires_in': 3600,
      'refresh_token': '62fdd7267cba4e3a5784989acbd3a51f18ad0a05',
    };
  });
}
