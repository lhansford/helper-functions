
/**
 * Runs a shell command asynchronously and returns the output.
 *
 * @param {string} command The shell command to execute.
 * @param {string} [shellCommand="zsh"] The shell to use for the command. Defaults to 'zsh'.
 * @return {*}  The Promise for the spawned process output.
 */
function asyncExec(command, shellCommand = "zsh") {
  return new Promise((resolve, reject) => {
    const process = spawn(shellCommand, ["-c", command]);
    let data = "";
    let error = "";
    process.stdout.on("data", (stdout) => {
      data += stdout.toString();
    });
    process.stderr.on("data", (stderr) => {
      error += stderr.toString();
    });
    process.on("error", (err) => {
      reject(err);
    });
    process.on("close", (code) => {
      if (code !== 0) {
        reject(error);
      } else {
        resolve(data);
      }
      process.stdin.end();
    });
  });
}
