import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-form', 'Integration | Component | simple form', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:" + EOL +
  this.render(hbs`
    {{#simple-form}}
      template block text
    {{/simple-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it captures user input', function(assert) {
  this.on('captureEvent', captureEvent);

  this.render(hbs`
    {{#simple-form onsubmit="captureEvent" as |formValues|}}
      {{input value=formValues.firstName name="firstName"}}

      <button>Submit</button>
    {{/simple-form}}
  `);

  this.$('input').val('Tom');
  this.$('input').change();
  this.$('button').click();

  function captureEvent(formValues) {
    assert.deepEquals(formValues, {firstName: 'Tom'});
  }
});
