//Create an instance of an Enemy in Program.cs (you can create any enemy you would like)
Enemy Bandit = new Enemy("Bandit");

Attack Punch = new Attack("Punch", 5);
Attack Kick = new Attack("Kick", 10);
Attack Stab = new Attack("Stab", 15);

// Bandit.AttackList.Add(Punch);
// Bandit.AttackList.Add(Kick);
// Bandit.AttackList.Add(Stab);

Bandit.AddAttack("Punch", 5);
Bandit.AddAttack("Kick", 10);
Bandit.AddAttack("Stab", 15);

Bandit.RandomAttack();
Console.WriteLine("===================");
Bandit.ShowStats();
