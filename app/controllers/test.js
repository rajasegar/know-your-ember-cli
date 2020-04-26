import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TestController extends Controller {

  server = false
  silent = false
  ssl = false
  config = ''

  @service command

  @action
  toggleServer() {
    this.server = !this.server;
    this.updateCommand();
  }

  @action
  toggleSilent() {
    this.silent = !this.silent;
    this.updateCommand();
  }  
  
  @action
  toggleSsl() {
    this.ssl = !this.ssl;
    this.updateCommand();
  }  
  
  updateCommand() {

    this.command.update({
      name: 'test',
      options: {
        server: this.server,
        silent: this.silent,
        ssl: this.ssl,
      }
    });
  }

  @action
  updateAddonName(event) {
    this.addonName = event.target.value;
    this.updateCommand();
  }


}
