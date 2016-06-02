var argv = require('yargs')
      .command('hello', 'Greet the user', function(yargs){
          yargs.options({
              name: {
                  demand: true,
                  alias: 'n',
                  description: 'Your first name goes here',
                  type: 'string'
              },
              lastName: {
                  demand: true,
                  alias: 'ln',
                  description: 'Your lastName goes here',
                  type: 'string'
              }
          }).help('help');
      })
      .help('help')
      .argv;
      
console.log(argv);
var command = argv._[0];

if(command === 'hello' && typeof argv.name !== undefined || typeof argv.lastName !== undefined){
    console.log('Hello ' + argv.name + ' ' + argv.lastName);
} else {
    console.log('Hello World')
}