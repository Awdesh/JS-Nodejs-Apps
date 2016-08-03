var account = {
	balance:0
};

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

