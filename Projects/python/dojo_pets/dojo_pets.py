class Pet:
    
    all_pets = []
    
    def __init__(self, name, type, tricks, sound):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 0
        self.health = 0
        self.sound = sound
        Pet.all_pets.append(self)

    def sleep(self):
        self.energy += 25
        print(f"{self.name} is feeling well rested! Energy increased 25 poitns. (Energy: {self.energy}). \n")
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"{self.name} is feeling well fed! Health increased 10 points, Energy increased 5. (Health: {self.health} | Energy: {self.energy}). \n")
        return self

    def play(self):
        self.health += 5
        print(f"{self.name} loves going for walks! Health increased 5 points. (Health: {self.health}).\n")
        return self

    def noise(self):
        self.energy += 5
        self.health += 5
        print(f"{self.sound}! {self.name} feels clean, and seems happy. Health and Energy increased 5 points. (Health: {self.health} | Energy: {self.energy}).\n")
        return self
    
    def display_stats(self):
        if self.health == 0 and self.energy == 0:
            print(f"{self.name} seems upset...\n(Health: {self.health} | Energy: {self.energy}) \n")
        else:
            print(f"{self.name} seems happy!\n(Health: {self.health} | Energy: {self.energy}) \n")
        return self
    
    @classmethod
    def list_pets(cls):
        for pet in cls.all_pets:
            print(f"Pet Name: {pet.name}")
        print("\n")
        return cls

class Ninja(Pet):
    
    all_ninjas = []
    
    def __init__(self, first_name, last_name, treats, pet_food, name, type, tricks, sound):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        super().__init__(name, type, tricks, sound)
        Ninja.all_ninjas.append(self)

    def walk(self):
        self.play()
        return self

    def feed(self):
        self.eat()
        return self

    def bathe(self):
        self.noise()
        return self
    
    def check_pet(self):
        self.display_stats()
        return self
    
    @classmethod
    def list_ninjas(cls):
        for ninja in cls.all_ninjas:
            print(f"Ninja Name: {ninja.first_name} {ninja.last_name}")
        print("\n")
        return cls

# dogmeat = Pet("Dogmeat", "Dog", "Fetch", "Woof")

evan = Ninja("Evan", "Wiorek", ["bone", "Scooby Snacks"], ["cooked steak", "dog food"], "Dogmeat", "Dog", "Fetch", "Woof") #just to be clear, the name is a reference to Fallout!

billy = Ninja("Billy", "Jenkins", "generic treats", "generic food", "Kitty Cat", "cat", "knock stuff off table", "Meow")

Pet.list_pets()
Ninja.list_ninjas()

evan.walk().feed().bathe().check_pet()

billy.check_pet()