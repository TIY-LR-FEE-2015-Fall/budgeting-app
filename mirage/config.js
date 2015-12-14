export default function() {
  // Sets mirage to list all budgets
  this.get('/budgets');
  this.post('/budgets');
  this.get('/budgets/:id');
}
