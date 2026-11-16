
# Recipe: Turn an Unfamiliar Word Problem into a Checkable Solution

**Before reading.** Read [Addition and Subtraction](#/books/number-and-arithmetic/addition-subtraction).

Use this recipe when a problem feels like a wall of words. The goal is not to spot a magic formula. It is to build a small model, solve it, and check that the answer belongs to the original situation.

## Worked example: a bordered garden

The following seven steps solve one complete problem, keeping the same target
through the calculation and its independent area check.

## Step 1 — State the question in one sentence

Circle or rewrite exactly what must be found, including units.

> A rectangular garden is 8 m long and 5 m wide. A path 1 m wide runs inside every edge. What area remains for plants?

Target: **planting area in square metres**. This prevents solving for path perimeter or total garden area by accident.

## Step 2 — List facts and constraints

Write each fact separately:

- outer length: 8 m;
- outer width: 5 m;
- path width: 1 m on every side;
- shape: rectangle;
- wanted quantity: inner area.

Label units. Also note constraints: lengths and areas cannot be negative here.

## Step 3 — Draw, act, or make a tiny case

Sketch the outer rectangle and shade a border. A 1 m path appears on both left and right, so the inner length is not $8-1$; it is $8-2=6 m$. Similarly, the inner width is $5-2=3 m$.

If drawing is inaccessible, describe the boundary clockwise or place four strings around a smaller card model. A representation should reveal relationships, not merely decorate the page.

## Step 4 — Estimate the answer’s size

The whole area is $8\times 5=40 m^{2}$. The planting area must be positive and less than 40. The border looks substantial, so an answer such as 39 would deserve suspicion.

An estimate gives a test before exact arithmetic. It need not be close to be useful.

## Step 5 — Choose and name quantities

Use words first, then symbols if they help:

$inner length = 8 - 2(1) = 6 m$

$inner width = 5 - 2(1) = 3 m$

$planting area = 6 \times 3 = 18 m^{2}$.

Each line should have one reason. A formula copied without matching its quantities is fragile.

## Step 6 — Check in another way

Subtract the path pieces from the whole. Top and bottom strips contribute $2\times (8\times 1)=16 m^{2}$. Left and right strips between them contribute $2\times (3\times 1)=6 m^{2}$. Path area is 22, leaving $40-22=18 m^{2}$.

The two methods agree. Notice why using four full strips would double-count corners; the second construction shortened the side strips.

## Step 7 — Answer the actual question

Write: “The area remaining for plants is **18 m²**, assuming the path has uniform 1 m width and the garden corners are square.”

A bare $18$ loses units, meaning, and assumptions.

## When you are stuck

Try one controlled change:

- use smaller numbers;
- solve a one-dimensional version;
- work backward from the target;
- make a table;
- mark what stays constant;
- replace an exact number with a rough range;
- ask which operation could undo the story’s action.

For example, if 3 identical tickets plus a £2 fee cost £20, try one ticket price $t$: $3t+2=20$. Undo the fee, then share: $3t=18$, so $t=6$. Checking gives $3\times £6+£2=£20$.

## Common traps

**Using every number.** Some problems include irrelevant information. Ask what connection each number has to the target.

**Keyword hunting.** “More” does not always mean add. “Sam has 4 more than Lee” may require subtraction if Sam’s amount is known and Lee’s is wanted.

**Stopping at calculator output.** $5.8333\ldots$ may mean 5.83 kg, six whole buses, or five complete packs with leftovers. Interpretation depends on the question.

**Assuming the diagram is to scale.** Trust stated measures and relationships, not appearance.

## Worked example: decide when to round

A group of 41 people needs transport in vehicles holding at most eight people
each. Dividing gives $41/8=5.125$, but a fraction of a vehicle cannot carry the
last person. Five vehicles provide only 40 places; six provide 48. Thus six
is the minimum. The lower bound and the construction agree: put eight people
in each of five vehicles and the last person in the sixth. This answer assumes
the stated capacity already accounts for the driver and that no other seating
restrictions apply.

Compare a different question using the same division: how many full boxes of
eight items can be made from 41 items? There the answer is five boxes with one
item left. The operation is identical, but the target changes whether to round
up or down. Write a sentence explaining what the quotient and remainder mean
before choosing a rounded answer. “Round to the nearest whole number” is not a
universal rule for word problems.

## Practice with hints and complete solutions

### Exercise 1
<a id="unfamiliar-word-problems-ex-1"></a>

A £45 bill is shared equally by six people, then each adds a £2 tip. How much
does each pay?

<details><summary>Hint 1</summary>

Separate the shared bill from the individual tip.

</details>
<details><summary>Hint 2</summary>

Divide £45 by six before adding the £2 per person.

</details>
<details><summary>Solution</summary>

Each bill share is $£45/6=£7.50$. Adding that person's tip gives £9.50.
The six shares reconstruct £45; the six tips add £12, so the group pays £57
in total. Dividing £47 instead would incorrectly share just one £2 tip.

</details>

### Exercise 2
<a id="unfamiliar-word-problems-ex-2"></a>

A 10 m by 7 m room contains a 3 m by 2 m rug. What floor area is uncovered?

<details><summary>Hint 1</summary>

Find the area of each rectangle separately.

</details>
<details><summary>Hint 2</summary>

Assume the rug lies wholly inside the room; subtract covered area from total.

</details>
<details><summary>Solution</summary>

The room area is $10\cdot7=70$ square metres and the rug area is
$3\cdot2=6$ square metres. Uncovered area is $70-6=64$ square metres.
The units are squared because each product multiplies two lengths. If part
of the rug lay outside the room, its entire area could not be subtracted.

</details>

### Exercise 3
<a id="unfamiliar-word-problems-ex-3"></a>

Four notebooks and one £1.50 pen cost £11.50. Find one notebook's price.

<details><summary>Hint 1</summary>

Remove the pen's contribution first.

</details>
<details><summary>Hint 2</summary>

The remaining amount buys four identical notebooks.

</details>
<details><summary>Solution</summary>

Subtracting £1.50 leaves £10 for four notebooks, so each costs £2.50.
Checking gives $4\cdot£2.50+£1.50=£11.50$. Equal notebook prices are a
necessary assumption; without it the total would not determine each price.

</details>

### Exercise 4
<a id="unfamiliar-word-problems-ex-4"></a>

A 900 ml bottle fills cups holding 125 ml. How many completely full cups can
it make, and how much remains?

<details><summary>Hint 1</summary>

Find consecutive multiples of 125 around 900.

</details>
<details><summary>Hint 2</summary>

Seven cups use 875 ml; an eighth would require 1,000 ml.

</details>
<details><summary>Solution</summary>

Seven full cups use $7\cdot125=875$ ml, leaving $900-875=25$ ml. Eight
would require more liquid than available, so seven is maximal. A quotient
7.2 describes fractional capacity, not eight completely full cups. The check
$875+25=900$ accounts for all the liquid, assuming no spillage.

</details>

### Reusable solution card

For your next problem, fill in: **target and unit; facts; diagram/table; expected range; calculation with reasons; independent check; sentence answer; assumption.** A good solution is not only correct—it makes its correctness inspectable.
