import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InstallController extends Controller {

  save = false
  saveDev = false
  saveExact = false
  yarn = false
  addonName = 'my-addon'

  @service command

  @action
  toggleSave() {
    this.save = !this.save;
    this.updateCommand();
  }

  @action
  toggleSaveDev() {
    this.saveDev = !this.saveDev;
    this.updateCommand();
  }  
  
  @action
  toggleSaveExact() {
    this.saveExact = !this.saveExact;
    this.updateCommand();
  }  
  
  @action
  toggleYarn() {
    this.yarn = !this.yarn;
    this.updateCommand();
    
  }  
  

  updateCommand() {

    this.command.update({
      name: 'install',
      options: {
        name: this.addonName,
        save: this.save,
        saveDev: this.saveDev,
        saveExact: this.saveExact,
        yarn: this.yarn,
      }
    });
  }

  @action
  updateAddonName(event) {
    this.addonName = event.target.value;
    this.updateCommand();
  }

}
