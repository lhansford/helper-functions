
/**
 * A replication of the browser's prompt function in Node.
 */
async function prompt(message) {
  const _interface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    _interface.question(message, (response) => {
      _interface.pause();
      resolve(response);
    });
  });
}
