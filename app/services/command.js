import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommandService extends Service {
  @tracked cmd = 'ember '
  @tracked alias = false // Alias for command options/flags
  @tracked cmdAlias = false // Alias for command
  @tracked currentCommand

  update(cmd) {
    this.currentCommand = cmd;

    switch(cmd.name) {
      case 'addon':
        this.processAddon(cmd);
        break;

      case 'new':
        this.processNew(cmd);
        break;

      case 'generate':
        this.processGenerate(cmd);
        break;

      case 'destroy':
        this.processDestroy(cmd);
        break;

      case 'version':
        this.processVersion(cmd);
        break;

      case 'asset-sizes':
        this.processAssetSizes(cmd);
        break;

      case 'build':
        this.processBuild(cmd);
        break;

      case 'serve':
        this.processServe(cmd);
        break;

      case 'help':
        this.processHelp(cmd);
        break;

      case 'init':
        this.processInit(cmd);
        break;

      case 'install':
        this.processInstall(cmd);
        break;

      case 'test':
        this.processTest(cmd);
        break;

      default:
        break;
    }

  }

  @action
  toggleAlias() {
    this.alias = !this.alias;
    this.update(this.currentCommand);
  }

  @action
  toggleCmdAlias() {
    this.cmdAlias = !this.cmdAlias;
    this.update(this.currentCommand);
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

  processInit(cmd) {
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
    this.cmd = `ember init ${cmd.options.name} ${dryRun} ${npm} ${git} ${bower} ${yarn} ${verbose} ${blueprint} ${dir} ${noWelcome}`;
  }

  processGenerate(cmd) {
    const dryRun = cmd.options.dryRun ? 
      this.alias ? '-d' : ' --dry-run' : '';

    const pod = cmd.options.pod ? this.alias ? '-p' : '--pod' : '';
    const classic = cmd.options.classic ? this.alias ? '-c' : '--classic' : '';
    const dummy = cmd.options.dummy ? this.alias ? '-dum' : '--dummy' : '';
    const verbose = cmd.options.verbose ? this.alias ? '-v' : '--verbose' : '';
    const inRepoAddon = cmd.options.inRepoAddon ? this.alias ? `-ir ${cmd.options.inRepoAddon}` : `--in-repo-addon ${cmd.options.inRepoAddon}` : '';
    const ir = cmd.options.ir ?  `--in ${cmd.options.ir}` : '';
    const _cmd = this.cmdAlias ? 'g' : 'generate';
    const name = cmd.options.name;
    this.cmd = `ember ${_cmd} ${cmd.options.blueprint} ${name} ${dryRun} ${pod} ${classic} ${dummy} ${verbose}  ${inRepoAddon} ${ir}`;
  }

  processDestroy(cmd) {
    const dryRun = cmd.options.dryRun ? 
      this.alias ? '-d' : ' --dry-run' : '';

    const pod = cmd.options.pod ? this.alias ? '-p' : '--pod' : '';
    const classic = cmd.options.classic ? this.alias ? '-c' : '--classic' : '';
    const dummy = cmd.options.dummy ? this.alias ? '-dum' : '--dummy' : '';
    const verbose = cmd.options.verbose ? this.alias ? '-v' : '--verbose' : '';
    const inRepoAddon = cmd.options.inRepoAddon ? this.alias ? `-ir ${cmd.options.inRepoAddon}` : `--in-repo-addon ${cmd.options.inRepoAddon}` : '';
    const ir = cmd.options.ir ?  `--in ${cmd.options.ir}` : '';
    const _cmd = this.cmdAlias ? 'd' : 'destroy';
    this.cmd = `ember ${_cmd} ${cmd.options.blueprint} ${dryRun} ${pod} ${classic} ${dummy} ${verbose}  ${inRepoAddon} ${ir}`;
  }

  processAssetSizes(cmd) {
    const json = cmd.options.json ? '--json' : '';
    const outputPath = cmd.options.outputPath ? this.alias ? `-o ${cmd.options.outputPath}` : `--output-path ${cmd.options.outputPath}` : '';
    this.cmd = `ember asset-sizes ${json} ${outputPath}`;
  }


  processVersion(cmd) {
    const verbose = cmd.options.verbose ? '--verbose' : '';
    const _cmd = this.cmdAlias ? 'v' : 'version';
    this.cmd = `ember ${_cmd} ${verbose}`;
  }

  processBuild(cmd) {
    const watch = cmd.options.watch ? this.alias ?  '-w' : '--watch' : '';
    const ss = cmd.options.supressSizes ? '--suppress-sizes' : '';
    const outputPath = cmd.options.outputPath ? this.alias ? '-o' : '--output-path': '';
    const _cmd = this.cmdAlias ? 'b' : 'build';
    this.cmd = `ember ${_cmd} ${watch} ${ss} ${outputPath} ${cmd.options.outputPath}`;
  }

  processServe(cmd) {
    const port = cmd.options.port ? this.alias?  '-p' : '--port' : '';
    const host = cmd.options.host ? this.alias ?  '-H' : '--host' : '';
    const _cmd = this.cmdAlias ? 's' : 'serve';
    this.cmd = `ember ${_cmd} ${port} ${host}`;
  }


  processHelp(cmd) {
    const verbose = cmd.options.verbose ? this.alias?  '-v' : '--verbose' : '';
    const name = cmd.options.name;
    const json = cmd.options.json ?  '--json' : '';
    const _cmd = this.cmdAlias ? 'h' : 'help';
    this.cmd = `ember ${_cmd} ${name} ${verbose} ${json}`;
  }

  processInstall(cmd) {
    const save = cmd.options.save ? this.alias?  '-S' : '--save' : '';
    const saveDev = cmd.options.saveDev ? this.alias?  '-D' : '--save-dev' : '';
    const saveExact = cmd.options.saveExact ? this.alias?  '-E' : '--save-exact' : '';
    const yarn = cmd.options.yarn ?  '--yarn' : '';
    const name = cmd.options.name;
    const _cmd = this.cmdAlias ? 'i' : 'install';
    this.cmd = `ember ${_cmd} ${name} ${save} ${saveDev} ${saveExact} ${yarn}`;
  }

  processTest(cmd) {
    const server = cmd.options.server ? this.alias?  '-s' : '--server' : '';
    const silent = cmd.options.silent ?  '--silent' : '';
    const ssl = cmd.options.ssl ?  '--ssl' : '';
    const _cmd = this.cmdAlias ? 't' : 'test';
    this.cmd = `ember ${_cmd} ${server} ${silent} ${ssl}`;
  }
}


