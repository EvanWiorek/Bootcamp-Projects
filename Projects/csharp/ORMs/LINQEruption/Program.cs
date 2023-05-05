List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Console.WriteLine(stratovolcanoEruptions);
// Execute Assignment Tasks here!

//1.
Eruption? firstChile = eruptions.FirstOrDefault(erup => erup.Location == "Chile");
// Console.WriteLine(firstChile?.ToString());

//2.
Eruption? firstHawaiian = eruptions.FirstOrDefault(erup => erup.Location == "Hawaiian Is");
// Console.WriteLine(firstHawaiian == null? "No Hawaiian Is Eruption found." : firstHawaiian.ToString());

//3.
Eruption? firstGreenland = eruptions.FirstOrDefault(erup => erup.Location == "Greenland");
// Console.WriteLine(firstGreenland == null? "No Greenland Eruption found." : firstGreenland.ToString());

//4.
IEnumerable<Eruption> newZealAfter1900 = eruptions.Where(erup => erup.Year > 1900 && erup.Location == "New Zealand");
// Console.WriteLine(newZealAfter1900.FirstOrDefault()?.ToString());

//5.
IEnumerable<Eruption> elevationOver2000 = eruptions.Where(erup => erup.ElevationInMeters > 2000);
// PrintEach(elevationOver2000);

//6.
IEnumerable<Eruption> startsWithL = eruptions.Where(erup => erup.Volcano.StartsWith("L"));
// PrintEach(startsWithL);
// Console.WriteLine($"Number of volcanoes that start with L: {startsWithL.Count()}");

//7. 
int highestElevationInt = eruptions.Max(erup => erup.ElevationInMeters);
// Console.WriteLine(highestElevationInt);

//8.
IEnumerable<Eruption> highestElevationVolcano = eruptions.Where(erup => erup.ElevationInMeters == highestElevationInt);
// Console.WriteLine(highestElevationVolcano.First());

//9.
IEnumerable<Eruption> volcanosAlphabetical = eruptions.OrderBy(erup => erup.Volcano).ToList();
// PrintEach(volcanosAlphabetical);

//10.
int sumOfElevations = eruptions.Sum(erup => erup.ElevationInMeters);
// Console.WriteLine(sumOfElevations);

//11.
bool any2000Eruptions = eruptions.Any(erup => erup.Year == 2000);
// Console.WriteLine(any2000Eruptions);

//12.
IEnumerable<Eruption> firstThreeStrato = eruptions.Where(erup => erup.Type == "Stratovolcano").Take(3);
// PrintEach(firstThreeStrato);

//13.
IEnumerable<Eruption> alphabeticalBefore1000 = eruptions.Where(erup => erup.Year < 1000).OrderBy(erup => erup.Volcano);
// PrintEach(alphabeticalBefore1000);

//14
IEnumerable<String> alphabeticalBefore1000Names = alphabeticalBefore1000.Select(erup => erup.Volcano);
Console.WriteLine(String.Join(", ", alphabeticalBefore1000Names));


// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
  Console.WriteLine("\n" + msg);
  foreach (Eruption item in items)
  {
    Console.WriteLine(item.ToString());
  }
}
