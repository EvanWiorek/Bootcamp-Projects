class Enemy
{
  public string EnemyName;
  private int Health;
  public int _Health
  {
    get { return Health; }
  }
  public List<Attack> AttackList;

  public Enemy(string n)
  {
    EnemyName = n;
    Health = 100;
    AttackList = new List<Attack>();
  }

  public void ShowStats()
  {
    Console.WriteLine($"Name: {EnemyName}");
    Console.WriteLine("Attack List: ");
    foreach(var attack in AttackList)
    {
      Console.WriteLine($"{attack.Name}, {attack.DamageAmount}");
    }
    Console.WriteLine($"Health: {_Health}");
  }

  public void RandomAttack()
  {
    Random rand = new Random();
    var randomAttack = AttackList[rand.Next(0, AttackList.Count)];
    // Dictionary<string, int> randomAttack = AttackList[rand.Next(0, AttackList.Count)];
    Console.WriteLine($" {EnemyName} used {randomAttack.Name}, causing {randomAttack.DamageAmount} damage!");
  }

  public void AddAttack(string n, int da)
  {
    AttackList.Add(new Attack(n, da));
  }
}