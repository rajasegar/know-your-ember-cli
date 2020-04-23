import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addon', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addon');
    assert.ok(route);
  });
});
