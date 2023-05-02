public class MagicCaster : Enemy
{
  public MagicCaster() : base("Magic Caster")
  {
    Health = 80;
  }

  public void Heal(Enemy Target)
  {
    Target.Health += 40;
    Console.WriteLine($"{EnemyName} used Heal on {Target.EnemyName}! {Target.EnemyName}'s health increased to {Target.Health}.");
  }
}