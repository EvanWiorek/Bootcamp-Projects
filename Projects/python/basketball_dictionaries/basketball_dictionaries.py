players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33,
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32,
        "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]


class Player:
    
    all_players = []

    def __init__(self, dict):
        self.name = dict["name"]
        self.age = dict["age"]
        self.position = dict["position"]
        self.team = dict["team"]
        Player.all_players.append(self)

    @classmethod
    def print_player_list(cls):
        for player in cls.all_players:
            print(f"Player Name: {player.name}")
            print(f"Player Age: {player.age}")
            print(f"Player Position: {player.position}")
            print(f"Player Team: {player.team}")
            print("\n")

    def __repr__(self):
        display = f"Player: {self.name}, {self.age} y/o, pos: {self.position}, team: {self.team}"
        return display
    


player_kevin = Player(players[0])
player_jason = Player(players[1])
player_kyrie = Player(players[2])
player_damian = Player(players[3])
player_joel = Player(players[4])
player_demar = Player(players[5])


Player.print_player_list()

# in charge of creating a new list of player objects
