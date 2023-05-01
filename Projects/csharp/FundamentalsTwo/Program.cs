int[] IntArray = new int[10] {0,1,2,3,4,5,6,7,8,9};
string[] NamesArray = new string[] {"Tim", "Martin", "Nikki", "Sara"};
bool[] BoolArray = new bool[10];

for(int i = 0; i < BoolArray.Length; i++)
{
  if(i % 2 == 0)
  {
    BoolArray[i] = true;
  }
  else
  {
    BoolArray[i] = false;
  }
// Console.WriteLine(BoolArray[i]);
}

List<string> FlavorsList = new List<string>() {"Vanilla", "Chocolate", "Mint", "Butter Pecan", "Pistachio"};
// Console.WriteLine(FlavorsList.Count);
// Console.WriteLine(FlavorsList[2]);
FlavorsList.RemoveAt(2);
// Console.WriteLine(FlavorsList.Count);

Dictionary<string, string> UserDictionary = new Dictionary<string, string>();
for(int i = 0; i < NamesArray.Length; i++)
{
  UserDictionary.Add(NamesArray[i], FlavorsList[i]);
}

foreach(KeyValuePair<string, string> entry in UserDictionary)
{
    Console.WriteLine($"{entry.Key} - {entry.Value}");
}
