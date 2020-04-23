import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddonController extends Controller {

  dryRun = false
  verbose = false
  npm = false
  git = false
  yarn = false
  bower = false

  @service command

  @action
  toggleDryRun() {
    this.dryRun = !this.dryRun;
    this.updateCommand();
  }

  @action
  toggleVerbose() {
    this.verbose = !this.verbose;
    this.updateCommand();
  }  
  
  @action
  toggleSkipNpm() {
    this.npm = !this.npm;
    this.updateCommand();
  }  
  
  @action
  toggleSkipGit() {
    this.git = !this.git;

    this.updateCommand();
  }  
  
  @action
  toggleYarn() {
    this.yarn = !this.yarn;
    this.updateCommand();
    
  }  
  
  @action
  toggleSkipBower() {
    this.bower = !this.bower;
    this.updateCommand();
      }

  updateCommand() {

    this.command.update({
      name: 'addon',
      options: {
        dryRun: this.dryRun,
        bower: this.bower,
        npm: this.npm,
        git: this.git,
        yarn: this.yarn,
        verbose: this.verbose
      }
    });
  }
}
