import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HelpController extends Controller {

  verbose = false
  json = false
  @tracked cmdName = 'generate'

  @service command



  @action
  toggleVerbose() {
    this.verbose = !this.verbose;
    this.updateCommand();
  }  
  
  @action
  toggleJson() {
    this.json = !this.json;
    this.updateCommand();
  }  
  


  updateCommand() {

    this.command.update({
      name: 'help',
      options: {
        name: this.cmdName,
        json: this.json,
        verbose: this.verbose,
      }
    });
  }

  @action
  updateCommandName(event) {
    this.cmdName = event.target.value;
    this.updateCommand();
  }


}
