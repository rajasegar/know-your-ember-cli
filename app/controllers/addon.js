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
  addonName = 'my-addon'
  blueprint = ''
  dir = ''

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
        name: this.addonName,
        dryRun: this.dryRun,
        bower: this.bower,
        npm: this.npm,
        git: this.git,
        yarn: this.yarn,
        verbose: this.verbose,
        blueprint: this.blueprint,
        dir: this.dir
      }
    });
  }

  @action
  updateAddonName(event) {
    this.addonName = event.target.value;
    this.updateCommand();
  }

  @action
  updateBlueprint(event) {
    this.blueprint = event.target.value;
    this.updateCommand();
  }  
  
  @action
  updateDirectory(event) {
    this.dir = event.target.value;
    this.updateCommand();
  }
}
