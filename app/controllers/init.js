import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InitController extends Controller {

  dryRun = false
  verbose = false
  npm = false
  git = false
  yarn = false
  bower = false
  appName = 'my-app'
  blueprint = ''
  dir = ''
  noWelcome = false

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

  @action
  toggleWelcome() {
    this.noWelcome = !this.noWelcome;
    this.updateCommand();
      }

  updateCommand() {

    this.command.update({
      name: 'init',
      options: {
        name: this.appName,
        dryRun: this.dryRun,
        bower: this.bower,
        npm: this.npm,
        git: this.git,
        yarn: this.yarn,
        verbose: this.verbose,
        blueprint: this.blueprint,
        dir: this.dir,
        noWelcome: this.noWelcome
      }
    });
  }

  @action
  updateAppName(event) {
    this.appName = event.target.value;
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
