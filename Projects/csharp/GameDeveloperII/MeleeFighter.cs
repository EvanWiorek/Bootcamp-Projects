public class MeleeFighter : Enemy
{
  public MeleeFighter() : base("Melee Fighter")
  {
    Health = 120;
  }

  public void RageMethod(Enemy Target)
  {
    Random rand = new Random();
    var RandomAttack = AttackList[rand.Next(0, AttackList.Count)];
    Target.Health -= (RandomAttack.DamageAmount + 10);
    Console.WriteLine($"{EnemyName} uses Rage, and attacks {Target.EnemyName} with {RandomAttack.Name}, dealing {RandomAttack.DamageAmount + 10} damage and reducing {Target.EnemyName}'s health to {Target.Health}!");
  }
}