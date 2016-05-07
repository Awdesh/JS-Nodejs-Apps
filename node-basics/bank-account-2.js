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
	accounts.forEach(function(account){
		if(account.username === username){
			matchedAccount = account;		
		}
	});
	return matchedAccount;
};

var awdeshAccount = createAccount({
	username: 'Awdesh',
	balance: 100000
});

console.log("getting account for user..")
console.log(getAccount('Awdesh'));

var matchedAccount = getAccount('Awdesh');

function deposit(account, amount){
	account.balance += amount;
};

function withdraw(account, amount){
	account.balance = account.balance - amount;
	return account.balance;
};

function getBalance(account){
	console.log(account.balance);
};

deposit(account, 100);
deposit(account, 200);
getBalance(account);
withdraw(account, 50);
getBalance(account);

