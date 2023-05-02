public class RangedFighter : Enemy
{
  public int Distance;

  public RangedFighter(int d = 5) : base("Ranged Fighter")
  {
    Distance = d;
  }

  public override void ShowStats()
  {
    base.ShowStats();
    Console.WriteLine($"Distance: {Distance}");
  }

  public void DashMethod()
  {
    Distance = 20;
    Console.WriteLine($"{EnemyName}'s distance increaded to 20!");
  }

  public override void PerformAttack(Enemy Target, Attack ChosenAttack)
  {
    if(Distance > 10) 
    {
      base.PerformAttack(Target, ChosenAttack);
    }
  }
}