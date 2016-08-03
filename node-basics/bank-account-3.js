var accounts = [];

var account = {
	balance:0,
	username:1
};

function createAccount(account){
	accounts.push(account);
	return account;
};

function getAccount(username){
	var matchedAccount;
	// remember to use diff. var here not var 'account'.
	// since account is the part of the loop iteration.
	for(var i=0; i < accounts.length; i++)
	{
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
			return matchedAccount;
		}
	}
};

var awdeshAccount = createAccount({
	username: 'Awdesh',
	balance: 100000
});


var NibhaAccount = createAccount({
	username: 'Nibha',
	balance: 50000
});

var HoneyAccount = createAccount({
	username: 'yoyo',
	balance: 30000
});

var len = accounts.length;
accounts.forEach(function(account) {
   if(len === 0){
   	  return;
   };
   console.log(account);
   len--; 
});

function deposit(account, amount){
	if(typeof amount === 'number'){
		account.balance += amount;	
		return account.balance;
	}else{
		console.log('please pass amount as a number');
	}
};

function withdraw(account, amount){
	if(typeof amount === 'number'){
		account.balance -= amount;
		return account.balance;
	} else{
		console.log('please pass amount as a number');
	}
};

function getBalance(account){
	console.log(account.balance);
};

function createBalanceGetter(account){
	return function(){
		return account.balance;
	}
}

deposit(account, 100);
deposit(account, 200);
getBalance(account);
withdraw(account, 50);
getBalance(account);
var getPersonBalance = createBalanceGetter(account);
console.log(getPersonBalance());

