class BankAccount:
    
    bank_name = "Coding Dojo Credit Union"

    all_accounts = []

    def __init__(self, int_rate, checking_balance, savings_balance):
        self.checking_balance = checking_balance
        self.savings_balance = savings_balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)

    def deposit(self, amount, checking_or_savings):
        if checking_or_savings == "Checking Account":
            self.checking_balance += amount
        else:
            self.savings_balance += amount
        return self
    
    def withdraw(self, amount, checking_or_savings):
        if checking_or_savings == "Checking Account":
            if self.checking_balance > amount:
                self.checking_balance -= amount
            else:
                print("Insufficient funds: Charging a $5 fee")
                self.checking_balance -= 5
        else:
            if self.savings_balance > amount:
                self.savings_balance -= amount
            else:
                print("Insufficient funds: Charging a $5 fee")
                self.savings_balance -= 5
        return self

    def yield_interest(self):
        self.savings_balance *= (1 + self.int_rate)
        return self

    def display_account_info(self, checking_or_savings):
        if checking_or_savings == "Checking Account":
            return self.checking_balance
        else:
            return self.savings_balance
        
    def transfer_funds_to_checking(self, amount):
        self.savings_balance -= amount
        self.checking_balance += amount
        print(f"Transfer complete. Checking Account now has ${self.checking_balance}, Savings Account now has ${self.savings_balance}")
        return self

    def transfer_funds_to_savings(self, amount):
        self.checking_balance -= amount
        self.savings_balance += amount
        print(f"Transfer complete. Savings Account now has ${self.savings_balance}, Checking Account now has ${self.checking_balance}")
        return self
    
    def send_money_to_other_user(self, checking_or_savings, amount):
        if checking_or_savings == "Checking Account":
            self.checking_balance -= amount
            return amount
        else:
            self.savings_balance -= amount
            return amount

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, checking_balance=0, savings_balance=0)
    
    def make_deposit(self, amount, checking_or_savings):
        self.account.deposit(amount, checking_or_savings)
        return self

    def make_withdrawl(self, amount, checking_or_savings):
        self.account.withdraw(amount, checking_or_savings)
        return self
    
    def display_user_balance(self, checking_or_savings):
        if checking_or_savings == "Checking Account":
            print(f"{self.name} has ${self.account.display_account_info('Checking Account')} in Checking Account")
        else:
            print(f"{self.name} has ${self.account.display_account_info('Savings Account')} in Savings Account")
        return self
    
    def transfer_funds(self, checking_or_savings, amount):
        if checking_or_savings == "Checking Account":
            self.account.transfer_funds_to_checking(amount)
        else:
            self.account.transfer_funds_to_savings(amount)
        return self
    
    def send_money(self, checking_or_savings, amount, other_user):
        self.account.send_money_to_other_user(checking_or_savings, amount)
        other_user.account.deposit(amount, "Checking Account")
        print(f"{self.name}, you have transferred ${amount} to {other_user.name}'s account.")


user_1 = User("Bill", "bill@gmail.com")
user_2 = User("Dave", "dave@gmail.com")

user_1.make_deposit(500, "Checking Account").make_deposit(1000, "Savings Account").display_user_balance("Checking Account").display_user_balance("Savings Account").transfer_funds("Checking Account", 400)

user_2.make_deposit(1000, "Checking Account").make_deposit(9000, "Savings Account").send_money("Checking Account", 300, user_1)

user_1.display_user_balance("Checking Account").send_money("Savings Account", 900, user_2)

user_2.display_user_balance("Checking Account")
