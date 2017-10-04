### charPos

#### This function can return all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

````
charPos("test")
````

#### returns: (++ returns push)

````
{
  t: [0, 1]
  e: [1],
  s: [2],
}
````