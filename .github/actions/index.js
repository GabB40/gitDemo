const core = require('@actions/core');
const { exec } = require('@actions/exec');

async function run() {
  try {
    const toLog = core.getInput('tolog');
    info(`*** [info] toLog: ${toLog}`);
    core.debug(`*** [debug] toLog: ${toLog}`)
    
    core.setOutput('my-output', 'Ploupi')

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
