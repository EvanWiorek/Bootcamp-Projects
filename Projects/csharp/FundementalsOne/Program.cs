//1
for(int i = 1; i<256; i++)
{
  // Console.WriteLine(i);
}

//2
Random rand = new Random();
for(int i = 1; i<6; i++)
{
  // Console.WriteLine(rand.Next(10,21));
}

//3
int sum = 0;
for(int i = 1; i<256; i++)
{
  sum += i;
}
// Console.WriteLine(sum);

//4
for(int i = 1; i<101; i++)
{
  if(i % 3 == 0 || i % 5 == 0)
  {
    // Console.WriteLine(i);
  }
}

//5
for(int i = 1; i<101; i++)
{
  if(i % 3 == 0)
  {
    // Console.WriteLine($"Fizz {i}");
  }
  else if( i % 5 == 0)
  {
    // Console.WriteLine($"Buzz {i}");
  }
}

//6
for(int i = 1; i<101; i++)
{
  if(i % 3 == 0 && i % 5 == 0)
  {
    Console.WriteLine($"FizzBuzz {i}");
  }
  else if(i % 3 == 0) {
    Console.WriteLine($"Fizz {i}");
  }
  else if(i % 5 == 0)
  {Console.WriteLine($"Buzz {i}");}
}