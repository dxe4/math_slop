
# Addition and Subtraction

A shelf gains six books, a bus loses three passengers, and two walking routes
have different lengths. Addition and subtraction describe these changes and
comparisons. They also give two ways to describe the same whole: a total can
be built from parts, or a missing part can be found from a known total.
The aim is to understand what the operations mean before using a written
method. A correct procedure is easier to remember when every step describes
an exchange or a combination of quantities.

Read [Counting and Place Value](counting-place-value.md) first. You should
be able to count small collections, read a whole-number numeral, and explain
ones, tens and hundreds. This chapter stays with whole numbers; subtraction
answers are required to be nonnegative. A later chapter introduces negative
answers and explains when they represent useful quantities. Keep the counted
unit visible: books combine with books, not with minutes or kilometres.

## Combining disjoint collections

**Definition 2.1 (Addition).** For whole-number counts $a$ and $b$, their sum
$a+b$ is the count obtained by combining a collection of $a$ objects with a
separate collection of $b$ objects. The sign $+$ means “add”, and the sign
$=$ asserts that the expressions on its two sides have the same value.

The separate-collection condition avoids counting one object twice. If one
shelf has eight books and another has six different books, their combined
count is $8+6=14$. If two reading lists each include the same four books,
adding their lengths counts those shared books twice. That may count list
entries correctly, but it does not automatically count distinct books.

**Worked example 2.2 (Combining two colours).** Put seven blue counters and
five red counters on a table. Move all seven blue counters into a counted
group, then count five further counters: eight, nine, ten, eleven, twelve.
Thus $7+5=12$. A different grouping first completes a ten: take three red
counters with the seven blue, leaving two red counters. The total is ten
and two, still twelve. The regrouping is useful because it fits the bundles
in our decimal notation.

Changing the order of the two collections does not change the whole. Thus
$a+b=b+a$, the **commutative law of addition**. Combining three disjoint
collections also does not depend on which two are combined first:
$(a+b)+c=a+(b+c)$, the **associative law**. Both sides count exactly the
same objects, each once. These explanations justify the laws for counts
instead of asking you to memorise mysterious symbol patterns.

Adding zero changes nothing: $a+0=a$. The zero collection brings no new
objects. The equality symbol is not an instruction meaning “write the answer
next”. For example, $12=7+5$ is as true as $7+5=12$, because both sides
name twelve. But $7+5=12+3=15$ is false: it claims twelve equals fifteen.
To record two separate calculations, write $7+5=12$, then $12+3=15$.

## Subtraction finds what is left or missing

**Definition 2.3 (Whole-number subtraction).** For whole numbers $a,b$ with
$a\ge b$, the difference $a-b$ is the unique whole number that combines with
$b$ to make $a$. In symbols, if $a-b=c$, then $b+c=a$.

In a removal story, begin with $a$ objects and remove $b$ of them; the
remaining collection has size $a-b$. In a comparison story, $a-b$ measures
how much larger the count $a$ is than $b$. You do not need to physically
remove the smaller collection to compare it with the larger one.
A missing-part story asks how much must be added to $b$ to reach $a$.
These are different situations described by the same arithmetic relation.

**Worked example 2.4 (A comparison rather than a removal).** One child has
thirty-two stickers and another has twenty-seven. Pair twenty-seven of the
first collection with all twenty-seven in the second. Five stickers in the
first are unpaired, so thirty-two is five more than twenty-seven. Thus
$32-27=5$, which is checked by $27+5=32$. No sticker needed to be thrown
away: the subtraction expresses the difference between two counts.

Subtraction is not commutative. Removing three from eight leaves five;
removing eight from three is outside the nonnegative whole-number setting
of this chapter. It is also unsafe to regroup subtraction as though it were
addition. For example, $(10-4)-2=4$, whereas $10-(4-2)=8$.
Brackets tell us which difference is formed first, and those two instructions
use different parts of the starting quantity.

## Written addition records place-value exchanges

To add multi-digit whole numbers, align equal-valued places. Ones belong
with ones, tens with tens, and hundreds with hundreds. Start at the ones
place and exchange each group of ten for one unit of the next place.
The exchanged unit is often called a carry; its value is determined by the
place to which it moves.

**Worked example 2.5 (Adding across two places).** Compute $268+157$.
The ones give $8+7=15$, or one ten and five ones. Record five ones and
combine the extra ten with the tens. The tens now give six tens plus five
tens plus one ten, or twelve tens. Exchange them for one hundred and two
tens. Finally two hundreds plus one hundred plus the exchanged hundred
make four hundreds. The result is $425$.

In expanded form the same calculation is

$$268+157=(200+60+8)+(100+50+7)=300+110+15=425.$$

The written method records these exchanges compactly. A carried one over
the hundreds column represents one hundred, not one loose object. Forgetting
its place value makes the procedure appear arbitrary and can cause mistakes
when zeros intervene.

Before calculating, estimate the scale. Here $268$ is near $270$ and $157$
is near $160$, so a total near $430$ is plausible. An answer of $4250$
is much too large. An estimate helps reject that error, but two different
answers can both be near the estimate; exact exchanges still determine the
exact sum.

## Written subtraction exchanges before removing

To subtract equal-valued places, first make sure the current place contains
enough units. If necessary, start at the nearest nonempty place to the left
and work toward the current place, exchanging one unit for ten units of the
place immediately to its right at each step. This is often called borrowing, but no quantity
is added to the total: the same starting amount is expressed in different
bundles. Record every changed place so that the exchange is not counted twice.

**Worked example 2.6 (A zero in the way).** Compute $402-178$. There are
not enough ones to remove eight, and there are zero tens to exchange. Exchange
one of the four hundreds for ten tens, leaving three hundreds. Then exchange
one of those ten tens for ten ones. The starting number is now described as
three hundreds, nine tens and twelve ones:

$$402=300+90+12.$$

Remove one hundred, seven tens and eight ones. What remains is two hundreds,
two tens and four ones, or $224$. Check with addition:
$178+224=402$. Both the hundreds and tens changed during the exchange;
keeping four hundreds or ten tens after giving away part of them would
count too much.

An alternative calculation counts up from $178$ to $402$: add two to reach
$180$, twenty to reach $200$, two hundred to reach $400$, then two to reach
$402$. The additions total $2+20+200+2=224$. This is useful when the smaller
number is near an easy landmark. Different sound methods should agree
because they find the same missing part.

## Choose the operation from the question

Words such as “more” do not always tell you to add. “Mina has five more
beads than Jo; Mina has seventeen; how many does Jo have?” asks for the
smaller part, $17-5=12$. The comparison uses “more”, but the unknown is
not the larger total. Draw a bar for each amount or write a complete
relation before choosing a calculation: Jo's count plus five equals seventeen.

Similarly, a question may give several numbers but require only some of them.
A bus with thirty seats carries nineteen passengers; five leave and three
board. The new passenger count is $19-5+3=17$. Thirty describes the capacity,
which can help interpret whether the result fits but is not added to the
passenger count. State what every number measures rather than treating every
available digit as an instruction.

Addition and subtraction check one another. If $a+b=c$, then $c-b=a$ and
$c-a=b$. If $a-b=c$, then $b+c=a$. A check using the original quantities
can expose a copied number or an incorrect exchange. It is especially useful
to choose a different method for the check, such as counting up after a
column subtraction, so that the same unnoticed mistake is less likely to
be repeated.

## Worked example: compare two differences before calculating

A shelf has forty-eight red counters and thirty-one blue counters. There
are seventeen more red counters, because adding seventeen to thirty-one gives
forty-eight. Now place five extra counters of each colour on the shelf.
The counts become fifty-three and thirty-six. Their difference is still seventeen:
each new red counter has a new blue partner, leaving the same unmatched
red counters as before.

This is why adding the same amount to both numbers preserves a subtraction
difference. It can make a calculation easier. To find sixty-three minus
twenty-eight, add two to both numbers and instead find sixty-five minus thirty.
That difference is thirty-five, so the original difference is also thirty-five.
Check by adding thirty-five to twenty-eight to recover sixty-three. Adding two
to just one of the two numbers would change the difference, so the
paired change is the essential part of the method, not merely choosing
a round number somewhere in the calculation.

## Exercises

### Exercise 2.1
<a id="addition-subtraction-ex-1"></a>

There are eight blue counters and six red counters, with no counter in both
collections. Find the total by first making a ten.

<details><summary>Hint 1</summary>

How many of the red counters complete ten with eight blue ones?

</details>
<details><summary>Hint 2</summary>

After using two red counters, count the red counters still left.

</details>
<details><summary>Solution</summary>

Eight blue and two red make ten. Four red remain, so the combined count is
$10+4=14$. This rearranges the same fourteen counters without duplicating
or omitting any.

</details>

### Exercise 2.2
<a id="addition-subtraction-ex-2"></a>

Compute $346+278$, explaining the ones and tens exchanges.

<details><summary>Hint 1</summary>

Start with six ones plus eight ones.

</details>
<details><summary>Hint 2</summary>

The exchanged ten must join the four and seven tens.

</details>
<details><summary>Solution</summary>

The ones total fourteen, giving four ones and one extra ten. The tens are
$4+7+1=12$ tens, giving two tens and one extra hundred. The hundreds are
$3+2+1=6$. Thus the total is $624$.

</details>

### Exercise 2.3
<a id="addition-subtraction-ex-3"></a>

Find $503-267$ and check by addition.

<details><summary>Hint 1</summary>

Exchange one hundred into tens, then one ten into ones.

</details>
<details><summary>Hint 2</summary>

Express $503$ as four hundreds, nine tens and thirteen ones.

</details>
<details><summary>Solution</summary>

Using $503=400+90+13$, remove $200+60+7$ to leave $200+30+6=236$.
The check is $267+236=503$: ones give thirteen, tens give ten after carrying,
and hundreds give five after the next exchange.

</details>

### Exercise 2.4
<a id="addition-subtraction-ex-4"></a>

One shelf contains forty-three books and another twenty-eight. How many more
books are on the first shelf?

<details><summary>Hint 1</summary>

This asks for a difference, not a combined count.

</details>
<details><summary>Hint 2</summary>

Count up from twenty-eight to forty-three.

</details>
<details><summary>Solution</summary>

Add two to get thirty, then thirteen to get forty-three. The difference is
$2+13=15$ books. Equivalently $43-28=15$, checked by $28+15=43$.

</details>

### Exercise 2.5
<a id="addition-subtraction-ex-5"></a>

A bag has seventeen marbles, five more than another bag. How many marbles
are in the other bag?

<details><summary>Hint 1</summary>

Identify which bag has the larger count.

</details>
<details><summary>Hint 2</summary>

The unknown count plus five must equal seventeen.

</details>
<details><summary>Solution</summary>

The other bag has $17-5=12$ marbles. Checking gives $12+5=17$.
Adding five to seventeen would find a bag five larger than the known bag,
which is not the question asked.

</details>

### Exercise 2.6
<a id="addition-subtraction-ex-6"></a>

Is $9+4=13+2=15$ a correct chain of equalities? Rewrite it accurately.

<details><summary>Hint 1</summary>

Every expression in an equality chain must have the same value.

</details>
<details><summary>Hint 2</summary>

The expression $9+4$ equals thirteen, whereas $13+2$ equals fifteen.

</details>
<details><summary>Solution</summary>

The chain is false because it equates thirteen with fifteen. Write
$9+4=13$ and then $13+2=15$, or write the single total
$9+4+2=15$. These statements preserve the intended calculations without
misusing equality.

</details>

### Exercise 2.7
<a id="addition-subtraction-ex-7"></a>

Compute $38+27+12$ by a convenient regrouping, and explain the law used.

<details><summary>Hint 1</summary>

One pair of addends makes a multiple of ten.

</details>
<details><summary>Hint 2</summary>

Combine thirty-eight and twelve first.

</details>
<details><summary>Solution</summary>

Commutativity allows $38+27+12$ to be ordered as $38+12+27$;
associativity allows the first pair to be combined. Thus the sum is
$50+27=77$. The same disjoint collections are counted in a convenient order.

</details>

### Exercise 2.8
<a id="addition-subtraction-ex-8"></a>

Compare $(15-6)-3$ with $15-(6-3)$. Why can the brackets not be ignored?

<details><summary>Hint 1</summary>

Carry out the subtraction inside each bracket first.

</details>
<details><summary>Hint 2</summary>

The second expression removes only the difference between six and three.

</details>
<details><summary>Solution</summary>

The first gives $9-3=6$; the second gives $15-3=12$. The brackets specify
different removals, so the expressions are unequal. Subtraction does not have
the associative law that addition has.

</details>

### Exercise 2.9
<a id="addition-subtraction-ex-9"></a>

A bus with forty seats has twenty-six passengers. Seven leave and four
board. How many passengers are now on it?

<details><summary>Hint 1</summary>

Start from the passenger count, not the seating capacity.

</details>
<details><summary>Hint 2</summary>

Remove the people who leave before adding those who board.

</details>
<details><summary>Solution</summary>

The count becomes $26-7+4=19+4=23$ passengers. Forty describes available
seats and is not an additional passenger group. The result also fits within
the capacity.

</details>

### Exercise 2.10
<a id="addition-subtraction-ex-10"></a>

Two book lists each contain ten entries and have three books in common,
with no repetition inside either list. How many distinct books occur in
at least one list?

<details><summary>Hint 1</summary>

Adding the list lengths counts each shared book twice.

</details>
<details><summary>Hint 2</summary>

Keep the first list intact and add only new books from the second.

</details>
<details><summary>Solution</summary>

The first list contributes ten distinct books. Of the second list's ten,
three are already counted, leaving seven new books. The total is
$10+(10-3)=17$ distinct books. Twenty is the entry count across both lists,
not the count of different books.

</details>

## Summary and next connection

Addition combines separate parts, while subtraction finds a remaining,
missing or compared part. Place-value exchanges explain written methods;
reversing the operation checks the result. Decide what the unknown describes
before selecting an operation, and use equality only between expressions
with the same value. The next chapter groups equal collections and reverses
that grouping through multiplication and division.
