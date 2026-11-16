
# Below Zero: Negative Numbers as Position and Change

**Before reading.** Read [Counting and Place Value](../books/number-and-arithmetic/counting-place-value.md). These are preparation for the ideas used below.

At noon the temperature is 3 degrees Celsius. Overnight it falls 7 degrees. The new temperature is $3 - 7 = -4$ degrees Celsius. The minus sign is not a warning that mathematics broke: $-4$ names a position four degrees below zero.

Negative numbers become friendlier when you separate two ideas:

- a **position**, such as $-4$ degrees Celsius or floor $-2$;
- a **change**, such as "down 7" or "gain 5."

## Build a floor number line

Put a strip of tape on the floor. Mark equally spaced positions $-5$ through $5$, with 0 in the middle. If vision or space makes a floor line inconvenient, use raised marks on string or a spoken list and move a counter.

Stand on 2. A positive move faces toward larger numbers; a negative move faces toward smaller numbers.

- $2 + 3$: start at 2, move three right, land at 5.
- $2 + (-3)$: start at 2, move three left, land at -1.
- $2 - 3$: removing a positive move also takes you three left, to -1.

This shows why adding a negative and subtracting a positive have the same effect.

**Misconception:** $-8$ is not larger than $-3$ because 8 is larger than 3. On the number line, $-8$ lies farther left, so $-8 < -3$. In temperature terms, -8 degrees Celsius is colder.

### The zero point is a choice

“Negative” depends on what zero means. An elevation of $-6$ metres relative to sea level is meaningful: it names a position six metres below that reference. The physical height of a person, measured from feet to head, cannot be negative under its usual definition. The same word *height* can describe different quantities, so name the reference and the direction before judging a negative answer.

A bank may record a balance of $-5$ pounds when £5 is owed, or a debt account of $-5$ pounds when an overpayment has created a £5 credit. Neither convention is forced by the number itself. The arithmetic is dependable only after the sign convention is stated.

## Subtracting a negative reverses a change

Suppose an account changes by $-6$ pounds: it loses 6 pounds. Cancelling that loss changes the balance by $+6$ pounds. Symbolically,

$$a - (-6) = a + 6$$

On the floor line, subtraction can mean "undo this move." To undo a move three places left, move three places right. Thus $1 - (-3) = 4$.

The phrase "minus minus becomes plus" is a memory aid, but the undoing story explains when and why.

## Multiplication records repeated direction

Three changes of $-2$ pounds total $3 \times (-2) = -6$ pounds. A positive count of negative changes stays negative.

Why is a negative times a negative positive? Use a pattern:

| Expression | Value |
|---|---:|
| $3 \times (-2)$ | -6 |
| $2 \times (-2)$ | -4 |
| $1 \times (-2)$ | -2 |
| $0 \times (-2)$ | 0 |
| $(-1) \times (-2)$ | 2 |

As the first factor drops by 1, the product rises by 2. Continuing the arithmetic pattern forces $(-1)(-2)=2$. The distributive rule agrees:

$$0 = (-1) \times 0 = (-1)(2 + -2) = -2 + (-1)(-2)$$

so the missing product must be 2.

## Division with negative numbers

Division asks "how many of these changes fit into that total?" If you lose 12 pounds through repeated losses of 3 pounds, the number of losses is $-12 \div (-3) = 4$. Four negative changes produce a negative total, so a negative divided by a negative is positive.

If you lose 12 pounds through gains of 3 pounds, something is wrong: $-12 \div 3 = -4$. Four positive changes would produce a gain, not a loss. The negative sign signals that the direction of change is opposite to what was assumed.

## Distance is never negative

The points -5 and 2 are seven units apart. Subtracting in one order gives $2 - (-5) = 7$; the other gives $-5 - 2 = -7$. Distance ignores direction, so use absolute value:

$$\text{distance between } a \text{ and } b = |a - b|$$

Absolute value means distance from zero. Therefore $|-9|=9$, while $|4|=4$. It does not mean "delete every minus sign" inside an expression: $|3-8|=|-5|=5$.

## Worked example: a lift journey

A lift begins on floor 2, goes down 5 floors, up 3, then down 2.

$$2 + (-5) + 3 + (-2) = -2$$

It ends on floor -2. Its **net change** is $-4$ floors. Its total travel distance is $5 + 3 + 2 = 10$ floors. Net change and distance answer different questions.

### Worked example: temperature over three days

Monday's low is $-5$ degrees Celsius. Tuesday it rises 8 degrees, then Wednesday it falls 12 degrees.

$$-5 + 8 + (-12) = -9$$

Wednesday's low is $-9$ degrees Celsius. The net change from Monday to Wednesday is $-4$ degrees. But the total temperature movement is $8 + 12 = 20$ degrees. A weather report might say "temperatures swung 20 degrees across the period" while the net change tells you only that Wednesday ended 4 degrees colder than Monday.

## Common errors and repairs

- **Assuming $-a$ is always negative:** If $a=-3$, then $-a=3$, which is positive. The symbol $-a$ means "the opposite of $a$" on the number line, not "a negative number." Repair it by substituting: when $a$ is negative, $-a$ flips to the right of zero.
- **Writing $|a-b| = a-b$:** Absolute value removes sign, but it does not remove operation. For $a=2$ and $b=5$, the expression inside is negative, so $|2-5|=|-3|=3$. Repair it by computing the inner expression first, then taking distance from zero.
- **Adding distances instead of finding net change:** A hiker descends 30 m, then ascends 15 m. The total distance traveled is 45 m, but the net change in elevation is $-15$ m. The question being asked determines which calculation applies.
- **Ignoring sign in multiplication:** A student writes $(-3) \times 4 = 12$. The product of a negative and a positive is negative because repeated negative changes produce a negative total. Repair by counting the direction of each change.

## Application: reading a bank statement

A statement lists transactions as positive (deposits) and negative (withdrawals). Starting balance 120 pounds, transactions: $-45$ pounds, $+30$ pounds, $-80$ pounds, $+200$ pounds.

Net change: $-45 + 30 - 80 + 200 = 105$ pounds.

Final balance: $120 + 105 = 225$ pounds.

Total movement (sum of absolute values): $45 + 30 + 80 + 200 = 355$ pounds. This matters for fraud detection: large total movement against small net change can signal suspicious activity.

## Connections and next steps

Negative numbers extend the counting numbers to a full number line. This extension makes subtraction always possible, just as fractions make division always possible (except by zero). The number-line picture connects backward to counting and measurement, and forward to algebra: expressions like $x - 5$ are meaningful even when $x < 5$, and equations like $x + 7 = 2$ have solutions.

Coordinate geometry places the number line in two dimensions, giving every point a pair of signed coordinates. Physics uses negative numbers for opposite directions: velocity east versus west, force upward versus downward. The habit of tracking both position and change, and of asking which question is being answered, serves throughout mathematics and its applications.

## Practice

<a id="deep-dive-negative-numbers-directions-ex-1"></a>

### Exercise 1

1. Order from least to greatest: $-2, 4, -7, 0$.

<details>
<summary>Hint 1</summary>

Place the four values on one number line relative to zero.
</details>

<details>
<summary>Hint 2</summary>

Among negative positions, the value farther left is smaller even if its digit is larger.
</details>

<details>
<summary>Solution</summary>

$-7, -2, 0, 4$.

</details>

<a id="deep-dive-negative-numbers-directions-ex-2"></a>

### Exercise 2

2. Calculate $-3 + 8$ using a number-line story.

<details>
<summary>Hint 1</summary>

Treat positive eight as a directed move to the right from the starting position.
</details>

<details>
<summary>Hint 2</summary>

Move from negative three through zero, then count the remaining rightward steps.
</details>

<details>
<summary>Solution</summary>

Start at -3 and move 8 right: 5.

</details>

### Further exercises

3. Calculate $5 - (-4)$ and explain the reversal.
4. A diver is at -6 m and rises 9 m. What is the new position?
5. Find the distance between -4 and 7.
6. A game score changes by $-3, +5, -4, +1$. Find net change and total amount of movement.
7. If $a=-5$, what is $-a$? Explain why it is not negative.
8. A submarine is at -120 m. It dives 45 m, then rises 80 m. Find its final position and total distance traveled.

## Answers


3. 9. Subtracting the move "4 left" means undoing it, so move 4 right.
4. $-6 + 9 = 3$ m, so the diver is 3 m above the reference level.
5. $|7 - (-4)| = 11$ units.
6. Net change is $-3+5-4+1=-1$; total movement is $3+5+4+1=13$ score units.
7. $-a = -(-5) = 5$. It is positive because $-a$ means the opposite of $a$ on the number line, and the opposite of a negative number is positive.
8. Final position: $-120 + (-45) + 80 = -85$ m. Total distance: $45 + 80 = 125$ m.

### Takeaway

Whenever signs feel slippery, draw or imagine a number line and name whether each number is a position, a directed change, or a distance. The rules then describe movements instead of mysterious punctuation.

## What survives a change of reference?

Suppose a surveyor records elevations relative to sea level, then switches to a local benchmark 20 metres above sea level. Every recorded position becomes $p'=p-20$. A point formerly at $-5$ metres is now at $-25$ metres. Its coordinate changed, but its distance from a point formerly at 7 metres did not:

$$|(-5)-7|=12,\qquad |(-25)-(-13)|=12.$$

In general, if both positions are shifted by the same amount $c$, then $(p-c)-(q-c)=p-q$. Differences between positions do not depend on the arbitrary location of zero. This is why “change in temperature” and “change in elevation” can be compared even when their reference conventions differ. Celsius and Fahrenheit also change *scale*, so a difference of one degree Celsius is not a difference of one degree Fahrenheit; shifting the zero alone is the simpler operation illustrated here.

The same principle explains why an account can go from $-£20$ to $+£5$ by a deposit of £25. Compute final minus initial: $5-(-20)=25$. The initial balance's negative sign is part of a position, while the positive 25 is a change.

## Why the multiplication signs are forced

The pattern table is suggestive, but the sign rule also follows from the distributive law. For any numbers $a,b$,

$$ab+(-a)b=(a+(-a))b=0b=0.$$

So $(-a)b$ must be the additive opposite of $ab$: $(-a)b=-(ab)$. Applying that rule again gives

$$(-a)(-b)=-\bigl(a(-b)\bigr)=-\bigl(-(ab)\bigr)=ab.$$

This explains a negative times a negative without pretending that a “negative number of groups” is a literal count of objects. The sign rule is what lets multiplication keep the distributive property when numbers are extended to include opposites.

## Directed change and total movement

Imagine a lift visiting floors $-2,3,1,4$ in that order. The successive changes are $+5,-2,+3$. Adding them gives net change $+6$, and indeed final minus initial is $4-(-2)=6$. Adding their absolute values gives travel distance $5+2+3=10$ floors. A trip can have net change zero and still involve substantial travel.

For any sequence of positions $p_0,p_1,\ldots,p_n$, adding signed changes telescopes:

$$(p_1-p_0)+(p_2-p_1)+\cdots+(p_n-p_{n-1})=p_n-p_0.$$

The intermediate positions cancel. Total travel is $\sum_{i=1}^n|p_i-p_{i-1}|$, which depends on the route. It is always at least $|p_n-p_0|$: a detour cannot be shorter than the direct distance. Equality holds when every move goes in one direction or is zero.

### Try it and check

1. A submarine moves from $-40$ m to $-70$ m and then to $-10$ m. Find net change and total vertical travel.
2. A room is 18°C and outdoors is $-4$°C. If both readings are shifted upward by 7 degrees on a fictional scale, what is their difference before and after the shift?
3. Explain why $(-3)(-4)=12$ using distributivity, starting from $0=(-3)(4+(-4))$.

**Answers.** (1) Changes are $-30$ m and $+60$ m, so net change is $+30$ m and travel is 90 m. Final minus initial is $-10-(-40)=30$ m. (2) The difference is $18-(-4)=22$ degrees; shifted readings are 25 and 3, whose difference remains 22. (3) Distributivity gives $0=(-3)4+(-3)(-4)=-12+(-3)(-4)$, so the unknown product must be 12. A rule that assigned it $-12$ would break distributivity.

## Boundaries of the number-line model

A signed number needs an interpreted quantity and unit. A negative temperature
on the Celsius scale is below that scale's zero; it is not “less heat than
nothing.” A negative account balance represents a liability under stated
accounting rules, while a negative distance usually signals that position or
displacement has been confused with path length. Multiplying directed
quantities also requires a model: the algebraic sign rule is universal in the
real numbers, but a physical interpretation depends on what each factor means.
