var storage = require("node-persist");
var crypto = require("crypto-js");
storage.initSync();

var argv = require('yargs')
      .command('create', 'Create the account', function(yargs){
          yargs.options({
              name:{
                  demand: true,
                  alias: 'n',
                  description: 'Your first name',
                  type: 'string'
              },
              password:{
                  demand: true,
                  alias: 'pwd',
                  description: 'Your account password',
                  type: 'string'
              },
              username:{
                  demand: true,
                  alias: 'un',
                  description: 'Your user name',
                  type: 'string'
              },
              masterPassword:{
                  demand: true,
                  alias: 'mpwd',
                  description: 'Your masterPassword',
                  type: 'string'
              }
          }).help('help');
        })
      .command('get', 'Get the account', function(yargs){
          yargs.options({
              name:{
                  demand: true,
                  alias: 'n',
                  description: 'Your first name',
                  type: 'string'
              },
              masterPassword:{
                  demand: true,
                  alias: 'mpwd',
                  description: 'Your masterPassword',
                  type: 'string'
              }
          }).help('help')
      })
      .help('help')
      .argv;

function createAccount(account, masterPassword){
    var accounts = getAccounts(masterPassword);
    
    accounts.push(account);
    saveAccounts(accounts, masterPassword);
    return account;
}

function getAccount(accountName, masterPassword){
    var acc = getAccounts(masterPassword);
    var matchedAccount;
    
    acc.forEach(function (account) {
        if(account.name === accountName){
            matchedAccount = account;
            return matchedAccount;
        } else {
            return undefined;
        }
    });
    
    return matchedAccount;
}

function saveAccounts(accounts, masterPassword) {
    
    var stringJSON = JSON.stringify(accounts);
    var encryptedAccounts = crypto.AES.encrypt(stringJSON, masterPassword);
    
    storage.setItemSync('accounts', encryptedAccounts.toString());
    return accounts;
}

function getAccounts(masterPassword) {
    var encryptedAccounts = storage.getItemSync('accounts');
    var accounts = [];
    
    if(typeof encryptedAccounts !== 'undefined'){
        var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
        var accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    
    return accounts;
}

var command = argv._[0];

if(command === 'create'){
    try{
       var createdAccount = createAccount({
            name: argv.name,
            username: argv.username,
            password: argv.password
        }, argv.masterPassword);
        console.log('Account is created')
        console.log(createdAccount);     
    } catch(e) {
        console.log("Unable to create account.")
    }    
   
} else if (command === 'get'){
    try {
        // below will return record based on passed in name and password.
        var fetchedAccount = getAccount(argv.name, argv.masterPassword);
        if(fetchedAccount === 'undefined'){
            console.log('account does not exists');
        }
        else{
            console.log(fetchedAccount);
        }
    }
    catch(e){
        console.log('Unable to fetched account');
    }
}
