import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  formValues: {},

  submit(ev) {
    ev.preventDefault();

    this.sendAction('onsubmit', this.get('formValues'));
  },
});
