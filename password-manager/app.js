console.log('starting password manager');

var storage = require("node-persist");
storage.initSync();

function createAccount(account){
    var accounts = storage.getItemSync('accounts');
    
    if(typeof accounts === 'undefined'){
        accounts = [];
    }
    
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

function getAccount(accountName){
    var acc = storage.getItemSync('accounts');
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

createAccount({
    name: 'Twitter',
    username: 'Awdesh',
    password: 'ramtajogi'
});

var acc = getAccount('Twitter');
console.log('acc. name is-:' + acc.name);
console.log('acc. username is-:' + acc.username);
console.log('acc. password  is-:' + acc.password);
