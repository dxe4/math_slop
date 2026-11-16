var e=`---
parent_id: book-number-and-arithmetic
chapter_id: estimation-number-sense
title: "Estimation and Number Sense"
level: foundation
license: CC BY-SA 4.0
---

# Estimation and Number Sense

A calculator can carry out the operation entered and still answer the wrong
question. A copied digit, a misplaced decimal point or a missing unit can
produce an impressive-looking number without a sensible meaning.
Estimation predicts the scale before exact arithmetic, while bounds and
inverse calculations provide additional checks. Number sense combines these
habits with a clear account of the quantities involved.

The preparation is the preceding arithmetic chapters, especially
[Decimals](decimals.md), [Ratio and Proportion](ratio-proportion.md),
[Units and Measurement](units-measurement.md), and
[Shapes, Perimeter, and Area](shapes-perimeter-area.md).
You should be able to explain the chosen operation, retain units and
separate exact values from approximations. This final chapter does not
replace exact calculation when the exact answer matters; it helps choose
and assess that calculation.

## A point estimate predicts a useful scale

**Definition 12.1 (Point estimate).** A point estimate is one approximate
value chosen to represent or predict a quantity. Its usefulness depends on
the purpose and the assumptions; a nearby convenient number is not
necessarily a guaranteed upper or lower bound.

To estimate $19\\times4.98$, use $20\\times5=100$.
The exact product is a little smaller because both replacements increased
a positive factor. That makes one hundred an upper bound in this particular
calculation. But rounding one factor upward and the other downward can
produce an estimate on either side of the answer. The direction needs
reasoning, not merely a claim that rounded numbers are “close”.

**Worked example 12.2 (Predict a purchase total).** Nine items cost
$£2.98$ each with no other charge. Three pounds per item predicts
$9\\times£3=£27$. The exact total is
$9\\times£2.98=£26.82$, eighteen pence below the estimate.
Because each replacement price was two pence higher, nine replacements
add eighteen pence. An entered answer of $£268.20$ has the wrong
scale; the estimate exposes a likely decimal error. A different wrong
answer such as $£26.72$ might still be close to twenty-seven, so
estimation alone does not certify the exact digits.

Choose the estimate to answer the actual decision. To decide whether a
bill is nearer five, fifty or five hundred pounds, a broad approximation
is sufficient. To decide whether a fixed cash amount covers the purchase,
a bound on the correct side may be needed. Spending time on many decimal
places is unhelpful when the given quantities themselves are only rough.

## A bound makes a one-sided guarantee

**Definition 12.3 (Lower and upper bounds).** A lower bound is no larger
than every permitted value of a quantity; an upper bound is no smaller
than every permitted value. Together they give an enclosing range under
the stated assumptions.

If each of nine items costs between $£2.95$ and $£3.00$,
with endpoints permitted and no extra charges, the total lies between
$9\\times£2.95=£26.55$ and $9\\times£3.00=£27.00$.
Adding nine allowed prices cannot make a total below nine lower endpoints
or above nine upper endpoints. The upper estimate $£27$ overstates
the bill by at most forty-five pence. That is a maximum possible error
for the model, not a statement that the error will usually be forty-five
pence or that every amount in the range is equally likely.

**Worked example 12.4 (A measured rectangle).** A rectangular board has
length between $1.9$ and $2.1$ metres and width between $0.9$ and
$1.1$ metres. All these quantities are positive. Its area is at least
$1.9\\times0.9=1.71$ square metres and at most
$2.1\\times1.1=2.31$ square metres. The point estimate two square
metres comes from the middle dimensions two and one, but the enclosing
range comes from multiplying endpoints. Positivity matters: increasing
either positive side increases the area. No probability distribution for
the measurements is supplied or needed for this range.

Bounds can sometimes answer a question without an exact result.
Since $198<200$ and a unit price is at most $£4$, buying
$198$ items costs below $£800$ under a fixed-price, no-extra-charge
model. If the question asks only whether the bill can exceed one thousand
pounds, the bound settles it. A delivery fee or tax not already included
would change the model and must not be silently ignored.

## Quotient bounds reverse the denominator direction

For positive quantities, a larger available amount allows more groups
of a fixed size, while a larger group size allows fewer groups in a
fixed amount. Thus a quotient's lower bound uses the lower numerator
and upper positive denominator; its upper bound uses the upper numerator
and lower positive denominator.

**Worked example 12.5 (A range for a rate).** A journey covers between
$90$ and $100$ kilometres and takes between two and two and a half
hours. Its average speed is at least $90\\div2.5=36$
kilometres per hour and at most $100\\div2=50$ kilometres per hour.
Choosing both lower endpoints would give $45$, which is not a valid
lower bound: ninety kilometres in two and a half hours is a permitted
case with lower speed. The numerator and denominator directions must
be considered separately. The calculation concerns the whole-journey
average and does not bound every momentary speed.

A denominator range containing zero needs a different argument: dividing
by ever smaller positive numbers can make a quotient arbitrarily large.
Do not mechanically divide interval endpoints when the divisor may be
zero or change sign. The positive-denominator hypothesis is part of
the simple rule just used.

## Use a different kind of check

An inverse check asks whether the result recovers the starting relation.
For $468\\div6=78$, multiplication gives $6\\times78=468$.
For $503-267=236$, addition gives $267+236=503$.
If a quotient includes a remainder, verify both the multiplication
relation and that the remainder is nonnegative and smaller than the positive divisor.
Checking only one condition can accept a nonstandard answer.

A unit check asks whether the result measures the requested kind of
quantity. Area should have square units; length should have length
units. Cost divided by item count gives cost per item. A percentage
comparison uses a named reference whole. These checks can reveal an
incorrectly chosen operation even when every numerical step was accurate.

A special-case check changes a model to a simple known value. A proposed
cost rule with no fixed charge should give zero cost for zero items.
A rule for rectangle perimeter should agree with four equal sides when
the rectangle is a square. Such checks can reject a false general rule,
but passing a few examples does not prove the rule for all inputs.
The underlying reasoning still needs to explain the complete permitted
set of situations.

## Report what the answer establishes

Write an answer with its unit, reference and status: exact result,
approximation, or guaranteed range under specified assumptions.
“About forty” differs from “at most forty”; the first is a nearby value,
while the second is a bound. “Between thirty-eight and forty-two” does
not mean that forty is the observed value, nor does it describe a
probability without additional information.

Rounding can alter a discrete decision. If forty-one people travel in
vehicles with ten passenger seats, the quotient $41\\div10=4.1$
does not mean that four vehicles carry everyone. Five are needed because
the remaining passenger still needs a seat. If the question asks for
completely filled vehicles, four is correct. Interpret the quotient before
rounding according to a model, rather than applying one universal
“nearest whole number” rule.

A practical workflow is to name the unknown, list the units and assumptions,
predict a scale, calculate, and check by an inverse relation or an
independent representation. If the checks disagree, return to the original
statement rather than repeatedly operating on the last number displayed.
An understandable explanation is more useful than a lucky matching numeral.

## Worked example: decide whether an estimate can settle a choice

A classroom needs eighty-four sheets of paper. One packet holds twenty
sheets. Rounding the need to eighty suggests about four packets, but four
packets supply only eighty sheets, leaving four missing. Five packets are
needed. The rounded estimate gave a useful scale while failing to settle
the exact purchasing decision.

A bound settles it safely. Four packets are fewer than the requirement,
and five packets provide one hundred sheets, which is enough. Those two
comparisons certify the smallest whole number of packets. There is no
need to pretend that the estimate was an exact count or that an
extra fraction of a packet can be bought. When a task includes whole
boxes, seats or trips, ask whether rounding down would violate the
requirement. An estimate is still valuable for catching an answer such as
forty packets, but the final decision needs the one-sided capacity comparison
appropriate to the task.

## Exercises

### Exercise 12.1
<a id="estimation-number-sense-ex-1"></a>

Estimate $39\\times£5.02$ using nearby whole numbers. Is an answer
near $£2000$ plausible?

<details><summary>Hint 1</summary>

Replace thirty-nine by forty and the price by five pounds.

</details>
<details><summary>Hint 2</summary>

Forty groups of five pounds give the scale.

</details>
<details><summary>Solution</summary>

The point estimate is $40\\times£5=£200$. An answer near two
thousand is about ten times the expected scale and is implausible.
This estimate alone is not a guaranteed upper or lower bound, since one
factor was rounded up and the other down.

</details>

### Exercise 12.2
<a id="estimation-number-sense-ex-2"></a>

Five items each cost between $£3.90$ and $£4.00$, endpoints included,
with no other charges. Give a guaranteed bill range.

<details><summary>Hint 1</summary>

Use five copies of each price endpoint.

</details>
<details><summary>Hint 2</summary>

Every individual price is at least the lower and at most the upper endpoint.

</details>
<details><summary>Solution</summary>

The bill lies between $5\\times£3.90=£19.50$ and
$5\\times£4.00=£20.00$, including both endpoints. This range
follows from the supplied bounds, not a guess about the usual price.

</details>

### Exercise 12.3
<a id="estimation-number-sense-ex-3"></a>

In the preceding question, use $£20$ as an estimate. What is its
largest possible overestimate?

<details><summary>Hint 1</summary>

The largest overestimate occurs at the smallest permitted bill.

</details>
<details><summary>Hint 2</summary>

Compare twenty pounds with nineteen pounds fifty pence.

</details>
<details><summary>Solution</summary>

The maximum is $£20-£19.50=£0.50$. Five prices at the lower
endpoint attain that bound. The actual error could be smaller, including
zero if every item costs four pounds.

</details>

### Exercise 12.4
<a id="estimation-number-sense-ex-4"></a>

A rectangle has length between four and five metres and width between
two and three metres. Give an enclosing area range.

<details><summary>Hint 1</summary>

Both dimensions are positive.

</details>
<details><summary>Hint 2</summary>

Use both lower endpoints for the least area and both upper endpoints
for the greatest.

</details>
<details><summary>Solution</summary>

The area lies between $4\\times2=8$ and $5\\times3=15$
square metres. Increasing either positive dimension increases the product,
which justifies the endpoint choices.

</details>

### Exercise 12.5
<a id="estimation-number-sense-ex-5"></a>

A journey covers between sixty and seventy kilometres in between two
and three hours. Bound its average speed.

<details><summary>Hint 1</summary>

A larger elapsed time gives a smaller speed at fixed distance.

</details>
<details><summary>Hint 2</summary>

Use sixty divided by three below, and seventy divided by two above.

</details>
<details><summary>Solution</summary>

The average speed lies between $20$ and $35$ kilometres per hour.
The lower bound combines the smallest distance with the largest positive
time; the upper bound uses the reverse pairing.

</details>

### Exercise 12.6
<a id="estimation-number-sense-ex-6"></a>

Check the claimed subtraction $702-468=234$ using addition.

<details><summary>Hint 1</summary>

The difference plus the subtracted quantity must recover the starting number.

</details>
<details><summary>Hint 2</summary>

Add two hundred and thirty-four to four hundred and sixty-eight.

</details>
<details><summary>Solution</summary>

$468+234=702$, so the proposed difference has the required inverse
relation. The check confirms this numerical subtraction; it does not by
itself establish whether subtraction was the correct model for a story.

</details>

### Exercise 12.7
<a id="estimation-number-sense-ex-7"></a>

A rectangle is three metres by four metres. A learner reports its area
as twelve metres. Identify and repair the error.

<details><summary>Hint 1</summary>

The numerical product uses two length factors.

</details>
<details><summary>Hint 2</summary>

The result counts square metre units, not metre intervals.

</details>
<details><summary>Solution</summary>

The numerical product twelve is correct, but the area unit is square
metres. Write twelve square metres. Twelve metres names a length and
therefore does not describe the requested quantity.

</details>

### Exercise 12.8
<a id="estimation-number-sense-ex-8"></a>

Forty-one people require transport in vehicles with ten passenger seats.
Explain why rounding $4.1$ to the nearest whole number is unsuitable.

<details><summary>Hint 1</summary>

The final requirement is to carry every person.

</details>
<details><summary>Hint 2</summary>

Four vehicles provide only forty seats.

</details>
<details><summary>Solution</summary>

Nearest-whole rounding gives four, leaving one person without a seat.
The requirement needs the next whole vehicle count, five. The rounding
direction is determined by the capacity constraint, not by a universal
nearest-number convention.

</details>

### Exercise 12.9
<a id="estimation-number-sense-ex-9"></a>

A rule for a fixed-price purchase with no extra charges gives $£7$
when zero items are bought. What does this special case reveal?

<details><summary>Hint 1</summary>

Zero equal-priced groups contain no charged items.

</details>
<details><summary>Hint 2</summary>

Compare the rule with the stated absence of a fixed charge.

</details>
<details><summary>Solution</summary>

The rule fails the stated model: no items and no extra charge should
cost zero. A seven-pound starting fee could describe a different model,
but it cannot be introduced silently. One failing permitted case refutes
the rule as a rule for the given model.

</details>

### Exercise 12.10
<a id="estimation-number-sense-ex-10"></a>

Explain the difference between “about fifty litres” and “at most fifty
litres”. Does either statement imply exactly fifty litres?

<details><summary>Hint 1</summary>

One is an approximation and the other an upper bound.

</details>
<details><summary>Hint 2</summary>

An approximate value can lie on either side; a bound controls one side.

</details>
<details><summary>Solution</summary>

“About fifty” gives a nearby scale without a precise error guarantee unless
one is supplied. “At most fifty” says the amount cannot exceed fifty,
though it may be much smaller. Neither asserts exact equality to fifty.

</details>

## Summary and where next

Predict a scale before calculating, and distinguish a point estimate from
a bound. Positive endpoint arguments give useful ranges, while units,
inverse operations and simple cases provide different checks. Interpret
remainders and rounding in the original question. Exactness, approximation
and uncertainty are statements to explain, not extra digits to display.

Continue to [Algebra from Stories](/books/library-book-algebra-from-stories/).
Its variables and equations extend the same habits: name the unknown,
state the permitted quantities, preserve a relation and check its meaning.
Return to an arithmetic chapter whenever a calculation hides a step you
cannot yet explain.
`;export{e as default};