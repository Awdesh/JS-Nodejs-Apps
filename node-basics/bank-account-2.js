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
	accounts.forEach(function(account){
		if(account.username === username){
			return account;		
		} else {
			return -1;
		}
	});
};

var awdeshAccount = createAccount({
	username: 'Awdesh',
	balance: 100000
});

console.log("getting account for user..")
console.log(getAccount('Awdesh'));

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

