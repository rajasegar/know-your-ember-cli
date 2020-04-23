import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BuildController extends Controller {

  watch = false
  supressSizes = false
  outputPath = 'dist'
  watcher = ''

  @service command

  @action
  toggleWatch() {
    this.watch = !this.watch;
    this.updateCommand();
  }

  @action
  toggleSupressSizes() {
    this.supressSizes = !this.supressSizes;
    this.updateCommand();
  }  
  
  updateCommand() {

    this.command.update({
      name: 'addon',
      options: {
        watch: this.watch,
        watcher: this.watcher,
        supressSizes: this.supressSizes,
        outputPath: this.outputPath
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
