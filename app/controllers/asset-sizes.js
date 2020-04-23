import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AssetSizesController extends Controller {
  json = false
  outputPath = '/dist'

  @service command

  @action
  toggleJson() {
    this.json = !this.json;
    this.updateCommand();
  }

  updateCommand() {
  this.command.update({
      name: 'asset-sizes',
      options: {
        json: this.json,
        outputPath: this.outputPath,
      }
    });
  }

  @action
  updateOutputPath(event) {
    this.outputPath = event.target.value;
    this.updateCommand();
  }
}
