public class Enemy
{
  public string EnemyName;
  public int Health;
  public List<Attack> AttackList;

  public Enemy(string n, int h = 100)
  {
    EnemyName = n;
    Health = h;
    AttackList = new List<Attack>();
  }

  public virtual void ShowStats()
  {
    Console.WriteLine($"Name: {EnemyName}");
    Console.WriteLine("Attack List: ");
    foreach(var attack in AttackList)
    {
      Console.WriteLine($"{attack.Name}, {attack.DamageAmount}");
    }
    Console.WriteLine($"Health: {Health}");
  }

  public void RandomAttack()
  {
    Random rand = new Random();
    var RandomAttack = AttackList[rand.Next(0, AttackList.Count)];
    // Dictionary<string, int> RandomAttack = AttackList[rand.Next(0, AttackList.Count)];
    Console.WriteLine($" {EnemyName} used {RandomAttack.Name}, causing {RandomAttack.DamageAmount} damage!");
  }

  public void AddAttack(string n, int da)
  {
    AttackList.Add(new Attack(n, da));
  }

  public virtual void PerformAttack(Enemy Target, Attack ChosenAttack)
  {
    Target.Health -= ChosenAttack.DamageAmount;
    Console.WriteLine($"{EnemyName} attacks {Target.EnemyName}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.EnemyName}'s health to {Target.Health}!");
  }
}