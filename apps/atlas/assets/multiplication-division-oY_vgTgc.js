var e=`---
parent_id: book-number-and-arithmetic
chapter_id: multiplication-division
title: "Multiplication and Division"
level: foundation
license: CC BY-SA 4.0
---

# Multiplication and Division

Five packets containing six pencils each give thirty pencils. Thirty pencils
shared equally into five packets give six per packet. The same quantities
appear in two directions: multiplication builds equal groups, and division
recovers a missing group count or group size. Understanding which quantity is
missing matters as much as performing the numerical calculation.

The preparation is [Addition and Subtraction](addition-subtraction.md):
combine counts, subtract a smaller whole-number amount, and exchange ones,
tens and hundreds. We use nonnegative whole numbers and a positive divisor.
Fractions will later describe shares that are not whole numbers. For now,
leftovers are recorded explicitly as remainders rather than hidden or rounded
without explanation.

## Equal groups and arrays

**Definition 3.1 (Whole-number multiplication).** For whole numbers $a,b$,
the product $a\\times b$ counts $a$ separate groups each containing $b$
objects. It can be computed by adding $b$ a total of $a$ times. With zero
groups the count is zero.

The equal-size condition is essential. Three bags with four, six and seven
apples contain $4+6+7=17$ apples, not three groups of one common bag size.
Multiplication fits when the group size is specified and shared by every
group. It can count an empty group correctly: five bags with zero apples
each contain $5\\times0=0$ apples.

Arrange counters in $a$ rows and $b$ columns. Counting row by row gives
$a\\times b$ counters; counting column by column gives $b\\times a$.
These count the same array, proving the **commutative law of multiplication**
for whole numbers. Swapping the factors changes the description of the groups,
but preserves the total count. Six bags of four pencils and four bags of six
pencils are different packaging arrangements with the same pencil total.

**Worked example 3.2 (Four rows of six).** Make an array with four rows and
six counters in each row. The row totals give $6+6+6+6=24$ counters.
Dividing each row into three and three gives two four-by-three arrays,
each containing twelve counters, so $4\\times6=12+12=24$ again. Counting
six columns of four also gives $6\\times4=24$. The rearrangements explain
several calculations of one fixed total without changing the counted objects.

An array also proves the **distributive law**:

$$a\\times(b+c)=a\\times b+a\\times c.$$

Split its columns into a block of $b$ and a block of $c$. Each of its $a$
rows contains both parts, so the total is the sum of the two smaller arrays.
For example, $7\\times13=7\\times(10+3)=70+21=91$. The law justifies
breaking an unfamiliar multiplication into familiar products.

Grouping packets inside boxes gives the **associative law**:
$(a\\times b)\\times c=a\\times(b\\times c)$. Both count $a$ boxes,
with $b$ packets in every box and $c$ objects in every packet. The unit
being counted must remain clear: counting packets first and counting objects
per box first reach the same total number of objects.

## Place value in multiplication

Multiplying a whole number by ten replaces each unit by ten such units. A
count of twenty-three tens is $230$, so $23\\times10=230$. In whole-number
decimal notation, appending a zero records that exchange. The explanation is
place value; the visual rule is limited to the notation and operations being
used. Later, decimals require a more careful description than “always add a
zero”. A leading zero and a trailing whole-number zero have different jobs.

**Worked example 3.3 (A product with regrouping).** Compute $24\\times13$.
Treat thirteen as ten plus three. Twenty-four tens give $240$;
twenty-four groups of three give $72$. Add these parts:

$$24\\times13=24\\times10+24\\times3=240+72=312.$$

To calculate the $72$ by place value, three groups of four ones give twelve
ones, exchanged for one ten and two ones. Three groups of two tens give
six tens, plus that extra ten, making seven tens. A written long multiplication
records these same partial products. The row for ten begins in the tens
place because it counts tens, not because a zero is inserted arbitrarily.

An estimate uses twenty-five times twelve, which is $300$, as a nearby
benchmark. The exact answer $312$ has the expected scale. This estimate
does not prove the exact product, but it would expose an answer such as
$31$ or $3120$ as implausible for these factors.

## Two questions called division

**Definition 3.4 (Exact division).** For whole numbers $n$ and $d>0$,
$n\\div d=q$ is an exact whole-number division when $d\\times q=n$.
The number $d$ is the divisor and $q$ the quotient. Exactness means there
is no remainder.

Division can describe **sharing**. If twenty-four pencils are shared equally
among four people, each receives six pencils. Here the number of groups is
known and the group size is unknown. It can also describe **grouping**: if
each packet contains four pencils, twenty-four pencils make six packets.
Here the size of a group is known and the number of groups is unknown.
Both use $24\\div4=6$, but the quotient's unit differs: pencils per person
in the first story, packets in the second.

**Worked example 3.5 (Read the units before calculating).** Thirty-six buttons
are put into six equal boxes. The answer is $36\\div6=6$ buttons per box,
checked by six boxes times six buttons per box equalling thirty-six buttons.
If the rule instead requires six buttons per box, the same division gives six
boxes. This numerical coincidence can hide a misunderstanding, so change the
data: forty buttons shared between five boxes give eight buttons per box,
whereas forty buttons grouped into boxes of eight give five boxes.

An exact division is not generally reversible by swapping its two numbers:
$24\\div4=6$, whereas $4\\div24$ has no positive whole-number quotient.
Even where fractions later provide an answer, it will not be six. Division,
like subtraction, does not have the commutative law of its inverse operation.

## Quotients and remainders

**Definition 3.6 (Division with remainder).** For whole numbers $n$ and
$d>0$, a quotient $q$ and remainder $r$ satisfy

$$n=d\\times q+r,\\qquad 0\\le r<d.$$

The remainder is smaller than the divisor because another complete group of
size $d$ would otherwise fit. Repeatedly removing a group of $d$ eventually
stops: the remaining nonnegative whole-number count decreases each time.
When it stops, the remaining count is $r$ and the number of removed groups
is $q$. If two proposed quotients differed by at least one, their multiples
of $d$ would differ by at least $d$, too much to be offset by two remainders
between zero and $d-1$. Thus these conditions determine one quotient and
one remainder.

**Worked example 3.7 (The story determines the final answer).** There are
thirty-eight passengers and each vehicle has twelve passenger seats.
Since $38=12\\times3+2$, three vehicles hold thirty-six people, leaving
two passengers. Transporting everyone requires four vehicles. But if the
question asks how many vehicles can be filled completely, the answer is
three. If thirty-eight indivisible beads are shared among twelve children,
each can receive three beads with two beads left over. The arithmetic
relation is the same; “three remainder two” is intermediate information
that must be interpreted in the stated model.

A remainder need not mean an error. It means the quantity does not consist
entirely of complete groups of the given whole-number size. Fractions will
allow a different answer when the objects can be divided. Cutting a length
of ribbon into equal shares is different from handing out whole tickets.
Always state which operations the material and the question permit.

## Written division is organised grouping

Compute $156\\div4$ by splitting the count into convenient multiples of
four. There are thirty groups in $120$, leaving $36$; there are nine
more groups in $36$. Thus $156=4\\times30+4\\times9=4\\times39$, and
the quotient is thirty-nine. A standard written division works place by place:
one hundred is too large a unit to share as whole hundreds among four,
so regroup it as ten tens. Fifteen tens shared four ways give three tens
each, with three tens left. Exchange those three tens into thirty ones and
combine with the six ones. Thirty-six ones shared four ways give nine ones
each, completing thirty-nine per share.

Use multiplication to check every result. For a proposed quotient and
remainder, check both $d\\times q+r=n$ and $0\\le r<d$.
For example, $38=12\\times2+14$ is a true equality, but two remainder
fourteen is not the standard division result because fourteen contains another
complete group of twelve. Both conditions matter.

Division by zero is excluded. For a positive count $n$, no number $q$
satisfies $0\\times q=n$, so such a quotient cannot be defined by the
multiplication relation. For $n=0$, every whole number satisfies
$0\\times q=0$, so there is no unique quotient. In contrast, zero divided
by a positive divisor is zero: $0=d\\times0$, with remainder zero.
These are consequences of the definitions, rather than a prohibition without
a reason.

## Worked example: one collection, two division questions

A class has forty-eight counters. First ask how many groups of six can be
made. Put six counters in each group until none remain. There are eight
groups, and checking eight groups of six returns the original forty-eight.
Here six describes the size of a group and eight counts groups.

Now share those same counters equally among six children. Give one counter
to each child, then repeat until the collection is used. Each child receives
eight counters. The arithmetic division has the same numbers, but the units
of its answer have changed: eight counters per child, rather than eight
groups. Saying only “the answer is eight” hides this difference.

Finally suppose there are fifty counters instead. Groups of six make eight
complete groups with two counters left over. Equal sharing among six children
gives each eight whole counters and leaves two unassigned. If counters must
stay whole, those two cannot be shared equally by cutting them. A story about
ribbon would permit a different kind of remainder because ribbon can be
divided. Before discarding, rounding or cutting a remainder, state what the
objects and the question allow. Multiplication checks the complete groups;
adding the remainder reconstructs the whole original collection.

## Exercises

### Exercise 3.1
<a id="multiplication-division-ex-1"></a>

Six packets each hold seven pencils. Find the total using equal groups.

<details><summary>Hint 1</summary>

Each packet has the same count.

</details>
<details><summary>Hint 2</summary>

Six groups of seven can be split into five groups and one further group.

</details>
<details><summary>Solution</summary>

The total is $6\\times7=35+7=42$ pencils. Counting six packets alone
would count containers rather than the pencils inside them.

</details>

### Exercise 3.2
<a id="multiplication-division-ex-2"></a>

Explain $5\\times8=8\\times5$ using an array.

<details><summary>Hint 1</summary>

Arrange the counters in five rows and eight columns.

</details>
<details><summary>Hint 2</summary>

Count the same array by columns instead of rows.

</details>
<details><summary>Solution</summary>

Five rows of eight give forty counters. The same array has eight columns of
five, also forty. Counting each counter once in either direction proves the
equality for this array and illustrates commutativity.

</details>

### Exercise 3.3
<a id="multiplication-division-ex-3"></a>

Compute $16\\times7$ by splitting sixteen into ten and six.

<details><summary>Hint 1</summary>

Use the distributive law with two parts of the first factor.

</details>
<details><summary>Hint 2</summary>

Add ten groups of seven to six groups of seven.

</details>
<details><summary>Solution</summary>

$16\\times7=10\\times7+6\\times7=70+42=112$. The groups split into
two disjoint collections whose sizes add back to sixteen groups.

</details>

### Exercise 3.4
<a id="multiplication-division-ex-4"></a>

Compute $32\\times14$ using partial products.

<details><summary>Hint 1</summary>

Write fourteen as ten plus four.

</details>
<details><summary>Hint 2</summary>

Keep the product by ten in the tens place.

</details>
<details><summary>Solution</summary>

The partial products are $32\\times10=320$ and $32\\times4=128$.
Their sum is $448$. The first partial product counts thirty-two tens,
so writing $32$ instead of $320$ would lose its place value.

</details>

### Exercise 3.5
<a id="multiplication-division-ex-5"></a>

Forty-two buttons are shared equally among six boxes. What is the answer's
unit, and how can you check it?

<details><summary>Hint 1</summary>

The number of boxes is already known.

</details>
<details><summary>Hint 2</summary>

The unknown is the number of buttons in one box.

</details>
<details><summary>Solution</summary>

The quotient is $42\\div6=7$ buttons per box. Multiplying six boxes by
seven buttons per box recovers forty-two buttons. The quotient is not seven
boxes, because the story already specifies six boxes.

</details>

### Exercise 3.6
<a id="multiplication-division-ex-6"></a>

Forty-two buttons are packed seven per box. How many full boxes are made?

<details><summary>Hint 1</summary>

Here the size of one group is known.

</details>
<details><summary>Hint 2</summary>

Find how many groups of seven make forty-two.

</details>
<details><summary>Solution</summary>

$42\\div7=6$ full boxes, since $6\\times7=42$. This time the quotient
counts groups. The number seven has units of buttons per box.

</details>

### Exercise 3.7
<a id="multiplication-division-ex-7"></a>

Find the quotient and remainder when fifty-three counters are grouped in
sets of eight.

<details><summary>Hint 1</summary>

Find the greatest multiple of eight not exceeding fifty-three.

</details>
<details><summary>Hint 2</summary>

Six groups use forty-eight counters; compare the leftover with eight.

</details>
<details><summary>Solution</summary>

$53=8\\times6+5$. Thus the quotient is six and the remainder five.
The check $0\\le5<8$ shows that another complete group cannot be made.

</details>

### Exercise 3.8
<a id="multiplication-division-ex-8"></a>

Fifty-three visitors must all travel in vehicles with eight passenger seats
each. How many vehicles are needed, and how many can be filled completely?

<details><summary>Hint 1</summary>

Use the quotient and remainder from the preceding question.

</details>
<details><summary>Hint 2</summary>

A nonzero remainder requires space in another vehicle.

</details>
<details><summary>Solution</summary>

Six vehicles hold forty-eight people and leave five waiting, so seven
vehicles are needed to carry everyone. Six can be filled completely.
The two questions interpret the same remainder differently.

</details>

### Exercise 3.9
<a id="multiplication-division-ex-9"></a>

Someone writes $53\\div8=5$ remainder $13$, because $8\\times5+13=53$.
Explain why this is not the standard quotient-remainder answer.

<details><summary>Hint 1</summary>

The equality is necessary but is not the only condition.

</details>
<details><summary>Hint 2</summary>

A remainder must be smaller than the divisor.

</details>
<details><summary>Solution</summary>

Thirteen is at least eight, so one more complete group fits. Rewrite
$13=8+5$ to get $53=8\\times6+5$. The standard quotient is six and
the remainder five, with $0\\le5<8$.

</details>

### Exercise 3.10
<a id="multiplication-division-ex-10"></a>

Explain the difference between $0\\div5$ and $5\\div0$ using multiplication.

<details><summary>Hint 1</summary>

Ask what number multiplied by the divisor returns the starting amount.

</details>
<details><summary>Hint 2</summary>

Multiplication by zero always gives zero.

</details>
<details><summary>Solution</summary>

$0\\div5=0$ because $5\\times0=0$. But no whole number multiplied
by zero gives five, so $5\\div0$ is undefined. The divisor's positivity
is part of the division definition.

</details>

## Summary and next connection

Multiplication counts equal groups and arrays; its laws explain partial
products and place-value methods. Division finds a group size or number of
groups, with units supplied by the story. A quotient-remainder answer must
satisfy both the multiplication equation and a remainder smaller than the
divisor. Fractions extend this language to equal shares that need not be
whole-number counts.
`;export{e as default};