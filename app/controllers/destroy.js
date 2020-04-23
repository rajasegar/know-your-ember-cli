import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DestroyController extends Controller {

  dryRun = false
  verbose = false
  pod = false
  classic = false
  dummy = false
  inRepoAddon = ''
  ir = ''
  @tracked blueprint = ''

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
  togglePod() {
    this.pod = !this.pod;
    this.updateCommand();
  }  
  
  @action
  toggleClassic() {
    this.classic = !this.classic;

    this.updateCommand();
  }  
  
  @action
  toggleDummy() {
    this.dummy = !this.dummy;
    this.updateCommand();
    
  }  
  
  updateCommand() {

    this.command.update({
      name: 'destroy',
      options: {
        dryRun: this.dryRun,
        pod: this.pod,
        classic: this.classic,
        dummy: this.dummy,
        inRepoAddon: this.inRepoAddon,
        blueprint: this.blueprint,
        ir: this.ir,
        verbose: this.verbose
      }
    });
  }

  @action
  updateInRepoAddonName(event) {
    this.inrepoaddon = event.target.value;
    this.updateCommand();
  }

  @action
  updateBlueprint(event) {
    this.blueprint = event.target.value;
    this.updateCommand();
  }  
  
  @action
  updateIn(event) {
    this.againstir = event.target.value;
    this.updateCommand();
  }
}
