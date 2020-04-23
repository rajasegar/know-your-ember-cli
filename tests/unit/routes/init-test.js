import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | init', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:init');
    assert.ok(route);
  });
});
