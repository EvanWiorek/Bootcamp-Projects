//Create an instance of an Enemy in Program.cs (you can create any enemy you would like)
MeleeFighter MeleeFighter = new MeleeFighter();
MeleeFighter.AddAttack("Punch", 20);
MeleeFighter.AddAttack("Kick", 15);
MeleeFighter.AddAttack("Tackle", 25);

RangedFighter RangedFighter = new RangedFighter();
RangedFighter.AddAttack("Shoot An Arrow", 20);
RangedFighter.AddAttack("Throw a Knife", 15);

MagicCaster MagicCaster = new MagicCaster();
MagicCaster.AddAttack("Fireball", 25);
MagicCaster.AddAttack("Lightning Bolt", 20);
MagicCaster.AddAttack("Staff Strike", 10);

// MeleeFighter.RandomAttack();
// MeleeFighter.RageMethod();
Console.WriteLine("\n===================");
MeleeFighter.ShowStats();
MeleeFighter.RageMethod(RangedFighter);
Console.WriteLine("\n===================");
RangedFighter.DashMethod();
RangedFighter.ShowStats();
RangedFighter.PerformAttack(MeleeFighter, RangedFighter.AttackList[0]);
Console.WriteLine("\n===================");
MagicCaster.ShowStats();
MagicCaster.Heal(RangedFighter);
Console.WriteLine("\n===================");


