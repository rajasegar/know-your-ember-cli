import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class VersionController extends Controller {
  verbose = false

  @service command

  @action
  toggleVerbose() {
    this.verbose = !this.verbose;
    this.updateCommand();
  }

  updateCommand() {
    this.command.update({
      name: 'version',
      options: {
        verbose: this.verbose,
      }
    });
  }
}
