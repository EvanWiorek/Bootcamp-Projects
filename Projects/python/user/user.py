class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        for attribute, value in self.__dict__.items():
            print(str(attribute)+ ": " + str(value))

    def enroll(self):
        if self.is_rewards_member == True:
            print(f"{self.first_name} {self.last_name} is already a member.")
            return False
        else: 
            self.is_rewards_member = True
            self.gold_card_points = 200
    
    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print(f"Sorry {self.first_name}, you only have {self.gold_card_points} Gold Card Points!")
        else:
            self.gold_card_points -= amount
            print(f"Thank you for your purchase! You have {self.gold_card_points} Gold Card Points remaining.")


user_1 = User("Evan", "Wiorek", "wiorek.evan@gmail.com", 26)
user_1.enroll()
user_1.spend_points(300)
user_1.spend_points(150)
user_1.spend_points(300)
user_1.display_info()
user_1.enroll()

user_2 = User("John", "Jones", "realemail@realemail.com", 297)
