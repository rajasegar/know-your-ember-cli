import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action }

export default class CommandService extends Service {
  @tracked cmd = 'ember '

  update(cmd) {

    switch(cmd.name) {
      case 'addon':
        this.processAddon(cmd);
        break;

      default:
        break;
    }

  }

  processAddon(cmd) {
    const dryRun = cmd.options.dryRun ? ' --dry-run' : '';

    const npm = cmd.options.npm ? '--skip-npm' : '';
    const git = cmd.options.git ? '--skip-git' : '';
    const bower = cmd.options.bower ? '--skip-bower' : '';
    const yarn = cmd.options.yarn ? '--yarn' : '';
    const verbose = cmd.options.verbose ? '--verbose' : '';
    this.cmd = `ember ${cmd.name}  ${dryRun} ${npm} ${git} ${bower} ${yarn} ${verbose}`;
  }
}


