
# Negative Numbers

A temperature can lie below zero, a lift can go below its entrance level,
and a balance can record an amount owed. Whole numbers describe how many
steps are taken, but a signed number can also describe direction from a
reference. Negative numbers extend the number line to the left of zero
and make subtraction possible even when the second amount exceeds the first.
The sign needs an interpretation; it is not simply a warning that a number
is bad or a calculation has gone wrong.

The preparation is [Addition and Subtraction](addition-subtraction.md) and
[Multiplication and Division](multiplication-division.md). Fractions and
decimals can carry signs too, but the first arguments use whole-number
steps. We distinguish a position, a directed change, and the nonnegative
distance between positions. Examples of balances are arithmetic models,
not advice about financial products or transactions.

## Positions on both sides of zero

**Definition 8.1 (Signed integers).** The integers are
$\ldots,-3,-2,-1,0,1,2,3,\ldots$. On the number line, $-1$ is one
unit left of zero, $-2$ two units left, and so on. A positive sign may be
written explicitly, as in $+3$, or omitted for a positive number.

The reference zero must be stated. Floor zero might be a building's entrance
level, while a temperature scale supplies its own specified zero. A negative
floor label does not mean a negative number of floors exists. It indicates
a position relative to the chosen reference. Similarly, a temperature of
minus four degrees is a measurement on a signed scale, not a count of
minus four objects.

Order still follows the number line: farther right means larger.
Therefore $-2>-5$ because minus two lies to the right of minus five.
Comparing the unsigned digits two and five alone would give the wrong
order. Every negative number is below zero, and every positive number above
zero. Zero is neither positive nor negative.

**Worked example 8.2 (Position and distance).** A lift starts at floor
$-3$ and finishes at floor $2$, with adjacent floor labels one unit
apart. It moves upward five floor intervals: three to reach zero and
two more to reach two. Its starting position is negative, its directed
change is $+5$, and the travelled distance is five floor intervals.
These three quantities have different jobs even though they describe
one journey.

**Definition 8.3 (Opposite and absolute value).** The opposite of a nonzero number
lies the same distance from zero on the other side. Zero is its own opposite. The opposite of $a$
is written $-a$. Its absolute value $|a|$ is its nonnegative distance
from zero. Thus $|-5|=5$, $|5|=5$, and $|0|=0$.

An opposite sign is an operation, so $-(-5)=5$. The inner negative
number is minus five; taking its opposite sends it back to plus five.
This is different from claiming that an absolute value is always strictly
positive: the absolute value of zero is zero.

## Addition combines directed changes

Starting at position $a$, adding a positive number means move right by
that amount; adding a negative number means move left by its absolute
value. Adding zero makes no movement. This rule extends ordinary addition
on the nonnegative side and lets opposite changes undo one another.

**Worked example 8.4 (A warm-up and a cooling).** A temperature starts at
$-4$ degrees and rises by seven degrees. Move four steps right to reach
zero and three further steps to reach $3$ degrees:
$-4+7=3$. If it then changes by $-5$ degrees, move five steps left,
ending at $-2$ degrees. The combined directed change is $7+(-5)=2$,
and applying that directly gives $-4+2=-2$, the same final position.
The change has units of degrees; whether the event is a rise or fall is
recorded by its sign.

For same-sign additions, combine distances and retain the direction:
$-3+(-6)=-9$. For opposite signs, cancel equal steps in opposite
directions and keep the unmatched steps: $8+(-5)=3$, while
$5+(-8)=-3$. These rules can be remembered from cancellation rather
than as a list disconnected from the line.

Addition still has commutative and associative laws: combining directed
changes in different orders gives the same total displacement. The journey's
intermediate positions can differ, but its final position after the same
complete set of changes does not. A model may impose restrictions on those
intermediate positions, so equal final sums do not automatically make all
orders physically permitted.

## Subtraction adds the opposite

**Definition 8.5 (Signed subtraction).** Subtracting $b$ means adding its
opposite: $a-b=a+(-b)$. It is the change needed to undo addition of $b$.

Thus $4-7=4+(-7)=-3$. Subtracting a negative instead adds a positive:
$4-(-7)=4+7=11$. Brackets prevent confusing the operation of subtraction
with the sign of its input. The phrase “two negatives make a positive” is
too vague: $-4+(-7)=-11$ is still negative. The rule depends on the
operation being performed.

**Worked example 8.6 (A difference across zero).** The afternoon temperature
is $5$ degrees and the morning temperature was $-3$ degrees. The directed
change is final minus initial:

$$5-(-3)=5+3=8\text{ degrees}.$$

In the reverse direction, the change would be $-3-5=-8$ degrees.
The distance between the readings is eight degrees in either direction,
while the directed change reverses sign. Subtracting their absolute values,
$5-3=2$, would discard the fact that they lie on opposite sides of zero.

A counter model offers another picture. Let a positive counter and a negative
counter together have value zero. Adding such a pair does not change the
represented number. To remove a negative counter from a model containing
only positive counters, first add a zero pair, then remove its negative
member. The remaining positive counter explains why subtracting one negative
increases the value by one. The model's rules must include the zero-pair
exchange; without that permission it would be a different puzzle.

## Multiplication signs preserve distributivity

Multiplying a signed number by a nonnegative whole number describes repeated
addition: three copies of $-4$ give $-12$. Commutativity also makes
$(-4)\times3=-12$. To extend multiplication to a negative second
factor while preserving the usual arithmetic laws, use the distributive law.
Since $4+(-4)=0$,

$$(-3)\times4+(-3)\times(-4)=(-3)\times0=0.$$

The first product is $-12$, so the second must be its opposite, $12$.
This explains why a product of two negatives is positive. It is a consequence
of extending the arithmetic laws consistently, rather than a claim that two
negative positions somehow become the same position on the number line.

The resulting sign rules are: equal nonzero signs produce a positive product,
and different nonzero signs produce a negative product. Any product with
zero is zero. Division by a nonzero signed number follows the missing-factor
relation, so $(-12)\div(-3)=4$ because $(-3)\times4=-12$.
Division by zero remains undefined for the reasons already established.

**Worked example 8.7 (Keep operation and sign separate).** Calculate
$-2\times(3-8)$. The bracket is $-5$, so the product is
$(-2)\times(-5)=10$. Expanding first gives
$(-2)\times3-(-2)\times8=-6-(-16)=10$.
The two routes agree because multiplication distributes over the difference.
Writing $-6-16$ at the second stage would lose the sign of the second
product and produce a different expression.

## Check meaning as well as signs

Not every situation permits every signed answer. Removing seven physical
beads from a pile of four cannot leave a pile of minus three beads under
the literal removal rules. A signed account can instead record a deficit
of three relative to a requirement of seven. The arithmetic $4-7=-3$
is valid, but its interpretation must fit the model. When a quantity must
be a nonnegative count, a negative result may show that the proposed action
is impossible with the available supply.

A useful explanation therefore includes the reference zero, the direction
attached to each sign, and whether the question asks for position, change
or distance. Check subtraction by reversing its addition relation and check
division by multiplying back. A memorised sign pattern without those meanings
can hide a correctly performed calculation of the wrong quantity.

The same directed-change interpretation applies to fractions and decimals.
Starting at $-1.5$ and adding $0.5$ moves half a unit right to the next whole
mark, reaching $-1$. Adding another $1$ reaches zero. The arithmetic
uses the same half-unit spacing as for positive fractions; only the direction
relative to zero is new. For instance, $-0.2>-0.7$ because minus two
tenths lies farther right than minus seven tenths. More written decimal
digits do not change that ordering principle. When a decimal sign is copied,
keep it with its value and use brackets if another operation might obscure
which number it belongs to.

## Worked example: compare a position with a journey

Imagine a straight corridor with numbered marks, including marks on both
sides of zero. A robot starts at minus four and finishes at three. Its
directed change is positive seven: moving four steps right reaches zero,
and three more steps right reaches the final mark. Its distance from its
starting point is seven steps. The final coordinate three is neither of
those quantities; it describes the final position relative to the chosen
zero mark.

If the robot returns directly to minus four, the directed change is negative
seven, but the distance travelled is again seven. Over the complete outward
and return journey, the total directed change is zero while the total
distance travelled is fourteen. Changes cancel when their directions are
opposite; travelled distances do not cancel.

This distinction also explains subtraction across zero. The finishing
coordinate minus the starting coordinate gives directed change. Reversing
their order reverses the sign. Taking the nonnegative distance between the
two marks removes that directional information, which may be appropriate
for measuring a gap but inappropriate for describing a movement. Sketching
the start, finish and arrow before calculating helps decide which question
is being asked. A minus sign can name a position or a directed change; it
does not automatically mean that a physical distance is negative.

## Exercises

### Exercise 8.1
<a id="negative-numbers-ex-1"></a>

Place $-6,-1,0,3$ in increasing order.

<details><summary>Hint 1</summary>

Increasing order follows left to right on the number line.

</details>
<details><summary>Hint 2</summary>

The negative number farther from zero is farther left.

</details>
<details><summary>Solution</summary>

$-6<-1<0<3$. Minus six is smaller than minus one even though
six is larger than one as an unsigned count.

</details>

### Exercise 8.2
<a id="negative-numbers-ex-2"></a>

Find the opposite and absolute value of $-7$.

<details><summary>Hint 1</summary>

The opposite is on the other side of zero.

</details>
<details><summary>Hint 2</summary>

Absolute value records distance, not direction.

</details>
<details><summary>Solution</summary>

The opposite is $7$, and $|-7|=7$. They have the same numerical
value in this example but describe different operations. For a positive
seven, the opposite would be negative while the absolute value stays positive.

</details>

### Exercise 8.3
<a id="negative-numbers-ex-3"></a>

Compute $-5+9$ using movement along the number line.

<details><summary>Hint 1</summary>

Start at minus five and move nine units right.

</details>
<details><summary>Hint 2</summary>

Five of the units reach zero; four remain.

</details>
<details><summary>Solution</summary>

The result is $4$. The first five rightward units cancel the starting
leftward displacement, and four additional units reach positive four.

</details>

### Exercise 8.4
<a id="negative-numbers-ex-4"></a>

Compute $-4+(-6)$ and explain why the sum is not positive.

<details><summary>Hint 1</summary>

Both changes point in the same direction.

</details>
<details><summary>Hint 2</summary>

The rule about two negative factors concerns multiplication, not addition.

</details>
<details><summary>Solution</summary>

The sum is $-10$: four leftward units followed by six leftward units
give ten leftward units. Adding negative quantities is not multiplying
two negative factors.

</details>

### Exercise 8.5
<a id="negative-numbers-ex-5"></a>

Find $3-(-8)$ and check by adding back the subtracted number.

<details><summary>Hint 1</summary>

Subtracting adds the opposite.

</details>
<details><summary>Hint 2</summary>

The opposite of minus eight is plus eight.

</details>
<details><summary>Solution</summary>

$3-(-8)=3+8=11$. Adding back minus eight gives $11+(-8)=3$,
recovering the original value and checking the subtraction.

</details>

### Exercise 8.6
<a id="negative-numbers-ex-6"></a>

A temperature falls from $2$ degrees to $-5$ degrees. Give its directed
change and the size of the fall.

<details><summary>Hint 1</summary>

Directed change is final minus initial.

</details>
<details><summary>Hint 2</summary>

The size of the fall is the nonnegative distance between the readings.

</details>
<details><summary>Solution</summary>

The directed change is $-5-2=-7$ degrees. The size of the fall is
seven degrees. One answer includes direction, while the other records only
its magnitude.

</details>

### Exercise 8.7
<a id="negative-numbers-ex-7"></a>

Calculate $(-6)\times(-4)$ and $(-6)\times4$.

<details><summary>Hint 1</summary>

The unsigned product is twenty-four.

</details>
<details><summary>Hint 2</summary>

Equal nonzero signs give positive; different signs give negative.

</details>
<details><summary>Solution</summary>

The products are $24$ and $-24$, respectively. Their sum is zero,
as required by $(-6)\times((-4)+4)=(-6)\times0=0$.

</details>

### Exercise 8.8
<a id="negative-numbers-ex-8"></a>

Find $(-35)\div7$ and check with multiplication.

<details><summary>Hint 1</summary>

Find the missing factor in seven times the answer equals minus thirty-five.

</details>
<details><summary>Hint 2</summary>

The factor needs negative sign and magnitude five.

</details>
<details><summary>Solution</summary>

The quotient is $-5$ because $7\times(-5)=-35$.
Division by a positive factor retains the negative sign of this dividend.

</details>

### Exercise 8.9
<a id="negative-numbers-ex-9"></a>

Compute $-3\times(2-6)$ in two ways.

<details><summary>Hint 1</summary>

First evaluate the bracket.

</details>
<details><summary>Hint 2</summary>

For the second way, distribute multiplication over the difference.

</details>
<details><summary>Solution</summary>

The bracket gives $-4$, so the product is $12$.
Distributing gives $(-3)\times2-(-3)\times6=-6-(-18)=12$.
Both calculations preserve the sign of each intermediate product.

</details>

### Exercise 8.10
<a id="negative-numbers-ex-10"></a>

A box has four beads, and a task requires seven. Interpret $4-7=-3$
without claiming that a physical box contains minus three beads.

<details><summary>Hint 1</summary>

The model may describe a difference from a requirement.

</details>
<details><summary>Hint 2</summary>

State whether the literal removal operation is possible.

</details>
<details><summary>Solution</summary>

There is a deficit of three beads relative to the seven needed. Removing
seven from the four available is impossible under ordinary bead-removal
rules. The negative difference records the shortage, not a negative count
of physical objects remaining.

</details>

## Summary and next connection

A sign can record direction from a reference zero. Addition combines changes,
subtraction adds an opposite, and absolute value records nonnegative distance.
Multiplication and division signs follow from extending the arithmetic laws
consistently. Interpret a signed result in its model. Powers and roots next
provide a concise language for repeated multiplication and its inverse.
