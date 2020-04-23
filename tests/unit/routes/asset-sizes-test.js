import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | asset-sizes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:asset-sizes');
    assert.ok(route);
  });
});
