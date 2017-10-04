### countPos

#### This function can return all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

````
charPos("lighthouse in the house")
````

#### returns: (++ returns push)

````
{
  l: [1, 2, 1, 4]
  i: [ ]
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
````