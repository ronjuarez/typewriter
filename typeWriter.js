

/*
print the first character before the next and then display all of them together
I think im supposed to use the reduce method.

my logic is that for every character previous to the last should be printed with
a 50mss gap as described by the lesson in order to animate

I'm going to read the mdn on reduce.

So heres what I'm able to put together. i have to return an array that prints
an acumulator value while it concatenates every char string that proceeds it.
it needs to happen at 0050ms intervals.

I should expect my reduce function to create a new array and to have all the 
char strings concatenated to it.
*/
const sentence = "hello there from lighthouse labs";

/*
if new is cur or greater than return new + cur every 0050s*/
  for (const char in sentence) {
    setTimeout(() => {
    process.stdout.write(sentence[char]);
}, 50 * char)
} // <= 1s delay to make it noticeable. Can dial it down later.