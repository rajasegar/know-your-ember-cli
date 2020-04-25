import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BuildController extends Controller {

  watch = false
  supressSizes = false
  @tracked outputPath = 'dist'
  @tracked watcher = ''

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
      name: 'build',
      options: {
        watch: this.watch,
        watcher: this.watcher,
        supressSizes: this.supressSizes,
        outputPath: this.outputPath
      }
    });
  }

  @action
  updateOutputPath(event) {
    this.outputPath = event.target.value;
    this.updateCommand();
  }

  @action
  updateWatcher(event) {
    this.watcher = event.target.value;
    this.updateCommand();
  }  
  
}
