const fs = require('fs')

const testOutput = fs.readFileSync('./test-output.log', 'utf-8')

function checkTest(name, expected) {
  if (!testOutput.includes(expected)) {
    console.log('[FAIL] ' + name)
    process.exit(1)
  } else {
    console.log('[PASS] ' + name)
  }
}

checkTest('outputs a single string message to the terminal', 'Hello world')
checkTest('outputs a single object message to the terminal', '{ foo: 123 }')
checkTest('outputs multiple messages to the terminal', "catJAM 9001 Foo [ 'Bar', 'Bar' ]")
