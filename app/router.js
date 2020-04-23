import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('addon');
  this.route('asset-sizes');
  this.route('build');
  this.route('destroy');
  this.route('generate');
  this.route('help');
  this.route('init');
  this.route('install');
  this.route('new');
  this.route('serve');
  this.route('test');
  this.route('uninstall-npm');
  this.route('unknown');
  this.route('version');
});
