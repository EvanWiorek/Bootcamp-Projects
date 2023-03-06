class BankAccount:
    
    bank_name = "Coding Dojo Credit Union"

    all_accounts = []

    def __init__(self, name, balance, int_rate):
        self.name = name
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def yield_interest(self):
        self.balance *= (1 + self.int_rate)
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self
    
    @classmethod
    def all_info(cls):
        for account in cls.all_accounts:
            print(f"{account.name} has ${account.balance} in this account")


account_holder_1 = BankAccount("Tim", 1000, .03)
account_holder_2 = BankAccount("Bill" , 100, .015)

account_holder_1.deposit(300).deposit(100).deposit(200).withdraw(100).yield_interest().display_account_info()
account_holder_2.deposit(300).deposit(100).withdraw(200).withdraw(100).yield_interest().display_account_info()

BankAccount.all_info()

