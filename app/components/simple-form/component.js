import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  formValues: null,

  resetFormValue: Ember.on('init', function() {
    this.set('formValues', {});
  }),

  submit(ev) {
    ev.preventDefault();

    this.sendAction('onsubmit', this.get('formValues'));
  },
});
