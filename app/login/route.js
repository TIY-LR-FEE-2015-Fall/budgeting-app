import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    loginUser(formValues) {
      this.get('session').authenticate('authenticator:application', formValues.email, formValues.password)
        .catch(() => {});
    },
  },
});
