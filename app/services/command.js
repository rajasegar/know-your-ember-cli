import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommandService extends Service {
  @tracked cmd = 'ember '
  @tracked alias = false

  update(cmd) {

    switch(cmd.name) {
      case 'addon':
        this.processAddon(cmd);
        break;

      case 'new':
        this.processNew(cmd);
        break;

      case 'asset-sizes':
        this.processAssetSizes(cmd);
        break;

      default:
        break;
    }

  }

  @action
  toggleAlias() {
    this.alias = !this.alias;
  }

  processAddon(cmd) {
    const dryRun = cmd.options.dryRun ? 
      this.alias ? '-d' : ' --dry-run' : '';

    const npm = cmd.options.npm ? this.alias ? '-sn' : '--skip-npm' : '';
    const git = cmd.options.git ? this.alias ? '-sg' : '--skip-git' : '';
    const bower = cmd.options.bower ? this.alias ? '-sb' : '--skip-bower' : '';
    const yarn = cmd.options.yarn ? '--yarn' : '';
    const verbose = cmd.options.verbose ? this.alias ? '-v' : '--verbose' : '';
    const blueprint = cmd.options.blueprint ? this.alias ? `-b ${cmd.options.blueprint}` : `--blueprint ${cmd.options.blueprint}` : '';
    const dir = cmd.options.dir ? this.alias ? `-dir ${cmd.options.dir}` : `--directory ${cmd.options.dir}` : '';
    this.cmd = `ember addon ${cmd.options.name} ${dryRun} ${npm} ${git} ${bower} ${yarn} ${verbose} ${blueprint} ${dir}`;
  }

  processNew(cmd) {
    const dryRun = cmd.options.dryRun ? 
      this.alias ? '-d' : ' --dry-run' : '';

    const npm = cmd.options.npm ? this.alias ? '-sn' : '--skip-npm' : '';
    const git = cmd.options.git ? this.alias ? '-sg' : '--skip-git' : '';
    const bower = cmd.options.bower ? this.alias ? '-sb' : '--skip-bower' : '';
    const yarn = cmd.options.yarn ? '--yarn' : '';
    const noWelcome = cmd.options.noWelcome ? '--no-welcome' : '';
    const verbose = cmd.options.verbose ? this.alias ? '-v' : '--verbose' : '';
    const blueprint = cmd.options.blueprint ? this.alias ? `-b ${cmd.options.blueprint}` : `--blueprint ${cmd.options.blueprint}` : '';
    const dir = cmd.options.dir ? this.alias ? `-dir ${cmd.options.dir}` : `--directory ${cmd.options.dir}` : '';
    this.cmd = `ember new ${cmd.options.name} ${dryRun} ${npm} ${git} ${bower} ${yarn} ${verbose} ${blueprint} ${dir} ${noWelcome}`;
  }

  processAssetSizes(cmd) {
    const json = cmd.options.json ? '--json' : '';
    const outputPath = cmd.options.outputPath ? this.alias ? `-o ${cmd.options.outputPath}` : `--output-path ${cmd.options.outputPath}` : '';
    this.cmd = `ember asset-sizes ${json} ${outputPath}`;
  }
}

