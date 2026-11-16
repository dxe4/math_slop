
# A letter can hold a place {#section-1-a-letter-can-hold-a-place}

<a id="section-1-why-stories-come-first"></a>
## Why stories come first {#section-3-why-stories-come-first}

Many equations arise from questions about something real. A baker wonders how many loaves to prepare; a cyclist estimates arrival time; a student splits a bill. Algebra does not replace these stories with symbols---it compresses them so we can see the structure underneath. The letter is not a new kind of number; it is a placeholder, a label that says, "This quantity is important, and its value may change or may be unknown."

This chapter introduces variables and expressions through narrative. We will translate stories into symbols, read those symbols back into actions, evaluate them for specific numbers, and learn to avoid the most common misconceptions that trap new algebra students.

<a id="section-7-from-a-caf-order-to-a-rule"></a>
## From a café order to a rule {#section-9-from-a-caf-order-to-a-rule}

A small café charges £2 for delivery plus £3 for every sandwich ordered. If you order $s$ sandwiches, the total cost in pounds is

$$C = 3s + 2.$$

Read the expression in the order of operations: multiply the sandwich count by 3, then add 2. The letter $s$ stands for the number of sandwiches, which can vary from one order to the next. The letter $C$ stands for the resulting cost. We call $s$ the **independent variable** because we choose an allowed order count, and $C$ the **dependent variable** because its value follows from $s$.

For this model, an order contains at least one whole sandwich, so the allowed values of $s$ are $1,2,3,\ldots$. These values form the variable's **domain**. The price rule assumes £3 per sandwich and one £2 delivery fee per order. The formula can also be evaluated at $s=1/2$, but half a sandwich is outside this model's order choices. A calculation must respect both the rule and the allowed inputs.

If $s = 4$, then

$$C = 3 \times 4 + 2 = 12 + 2 = 14.$$

The total cost is £14. We can check this directly: four sandwiches at £3 each is £12, plus £2 delivery is £14.

In this story, $s$ and $C$ are **variables** because they can take different values. If we instead ask, "How many sandwiches give a total cost of £14?", then $s$ becomes an **unknown**: a specific value we must find. The expression $3s + 2$ is a **rule**; the equation $3s + 2 = 14$ is a **claim of equality** whose truth we test by finding the value of $s$ that makes it true.

**Definition 1.1 (variable).** A variable is a symbol used to represent a quantity that may vary within a given context.

**Definition 1.2 (unknown).** An unknown is a symbol used to represent a specific value that is to be determined from the conditions of a problem.

<a id="section-29-reading-expressions-structurally"></a>
## Reading expressions structurally {#section-31-reading-expressions-structurally}

The expression $3s + 2$ has two parts: the term $3s$, which scales with the number of sandwiches, and the constant $2$, which does not. This structure matters. If the delivery fee rises to £4, only the constant changes; if the per-sandwich price rises to £4, only the coefficient changes.

Consider a different story: a plumber charges £40 to visit a house and £25 per hour. For $h$ hours, the cost in pounds is

$$P = 25h + 40.$$

Even though the numbers and the story differ, the algebraic shape is the same: a rate multiplied by a variable, plus a fixed amount. Recognising this shape is the first step toward reading algebra structurally rather than letter by letter.

<a id="section-39-the-meaning-of-adjacent-symbols"></a>
## The meaning of adjacent symbols {#section-41-the-meaning-of-adjacent-symbols}

In arithmetic, $34$ means thirty-four: the digits sit side by side to form a single number. In algebra, $3s$ means $3 \times s$. The number and the letter are neighbours, but they signal multiplication, not a two-digit numeral.

**Misconception.** Some learners think $3s$ means the two-digit number "3s" or that it means $3 + s$. Neither is correct. Here each variable has a single-letter name, and adjacent factors such as $3s$ and $ab$ mean multiplication. This convention applies to the variables in these expressions: unit labels such as cm and named functions have their own notation.

Examples:
- $5x$ means $5 \times x$.
- $ab$ means $a \times b$.
- $2(x + 3)$ means $2 \times (x + 3)$.

When multiplication involves two numbers, we still need a symbol: $3 \times 4$ or $3 \cdot 4$ or $(3)(4)$. We omit the multiplication sign only when at least one factor is a letter or when grouping symbols make the meaning clear.

<a id="section-52-the-distributive-property-from-a-story"></a>
## The distributive property from a story {#section-54-the-distributive-property-from-a-story}

Imagine two identical gift boxes. Each box contains one mystery book priced at $x$ pounds and three bookmarks priced at £1 each. The contents of one box are worth $x + 3$ pounds. Two boxes are worth

$$2(x + 3).$$

We can also count the items separately: two mystery books cost $2x$ pounds, and six bookmarks cost £6. So the total is

$$2x + 6.$$

Therefore

$$2(x + 3) = 2x + 6.$$

This is the **distributive property of multiplication over addition**: multiplying a sum by a number gives the same result as multiplying each addend by that number and adding the products.

**Definition 1.3 (distributive property).** For any numbers $a$, $b$, and $c$,

$$a(b + c) = ab + ac.$$

The property also works with subtraction: $a(b - c) = ab - ac$.

<a id="section-74-worked-example-expanding-4-y-5"></a>
### Worked example: expanding $4(y - 5)$ {#section-76-worked-example-expanding-4-y-5}

We distribute the 4 across both terms inside the parentheses:

$$4(y - 5) = 4 \times y - 4 \times 5 = 4y - 20.$$

To check, choose a value for $y$, say $y = 7$:
- Left side: $4(7 - 5) = 4 \times 2 = 8$.
- Right side: $4 \times 7 - 20 = 28 - 20 = 8$.

Both sides agree at $y=7$. This check would expose some mistakes, but agreement at one value cannot establish a rule for every $y$. The distributive property above establishes $4(y-5)=4y-20$ for every number $y$.

<a id="section-86-common-error-partial-distribution"></a>
### Common error: partial distribution {#section-88-common-error-partial-distribution}

A frequent mistake is to multiply only the first term inside the parentheses:

$$\text{Incorrect: } 3(x + 4) = 3x + 4.$$

The 3 must multiply both $x$ and $4$. To catch this error, test with $x = 1$:
- Correct left side: $3(1 + 4) = 15$.
- Incorrect right side: $3(1) + 4 = 7$.

Since $15 \neq 7$, the partial distribution is wrong.

<a id="section-98-evaluating-expressions-with-care"></a>
## Evaluating expressions with care {#section-100-evaluating-expressions-with-care}

When we substitute a number for a variable, we must respect the order of operations.

**Example.** Evaluate $2a + 5$ when $a = 3$.

$$2(3) + 5 = 6 + 5 = 11.$$

**Example.** Evaluate $10 - 3b$ when $b = 2$.

$$10 - 3(2) = 10 - 6 = 4.$$

**Example.** Evaluate $4(m + 1)$ when $m = 5$.

$$4(5 + 1) = 4 \times 6 = 24.$$

Notice that in each case we handle grouping first, then multiplication, then addition or subtraction.

<a id="section-116-practice-exercises"></a>
## quantities, equations and reasons {#section-284-further-development-quantities-equations-and-reasons}

<a id="section-286-naming-a-quantity-before-choosing-a-method"></a>
## Naming a quantity before choosing a method {#section-288-naming-a-quantity-before-choosing-a-method}

The café rule is easier to use when every symbol has a job. The quantity is the sandwich count; the symbol is $s$; the allowed inputs are positive whole numbers; and $3s+2$ calculates a cost in pounds. These four pieces of information belong together. A letter without a quantity could stand for almost anything, and a formula without an allowed input set could invite choices that the story does not permit.

A useful written record has the following form.

| Quantity | Symbol and unit | Allowed values | What is fixed? |
| --- | --- | --- | --- |
| Sandwiches in one order | $s$, a count | $1,2,3,\ldots$ | Whole sandwiches only |
| Delivery fee | £2 | One fee per order | The same for every allowed order |
| Cost | $C$, pounds | Values produced by the rule | $C=3s+2$ |

The table is a description of this particular model. It does not assert that every café uses these prices. If a discount changes the price after ten sandwiches, the rule needs changing there. A formula is a precise answer to stated assumptions, rather than a promise that the assumptions describe every situation.

A quantity's role can change without its meaning changing. When $s$ is chosen, $C$ is calculated. When a receipt gives $C$, the question may ask for the unknown $s$. Calling a letter “independent” therefore describes a choice in the model, not a permanent property of that letter. We can also hold the count fixed and investigate a changing price. Before calculating, say which quantities are known, which can be chosen, and which are being sought.

<a id="section-302-worked-example-distinguish-the-actions-in-two-stories"></a>
### Worked example: distinguish the actions in two stories {#section-304-worked-example-distinguish-the-actions-in-two-stories}

Suppose each packet contains six counters. With $b$ packets, opening all the packets gives $6b$ counters. If three counters are then given away, the number left is $6b-3$. Here $b$ is a whole number and the story requires $b\ge1$ so that at least three counters are available.

A different story removes three unopened packets before counting their contents. Starting with $b\ge3$ packets, that leaves $b-3$ packets, hence $6(b-3)$ counters. The brackets record a different action: first subtract packets, then multiply by counters per packet. At $b=5$, the first story leaves 27 counters and the second leaves 12. The difference is explained by what was removed, not by a preference for one algebraic form.

Read each expression back into words before using it. In $6b-3$, the subtraction removes three counters. In $6(b-3)$, it removes three packets. Attaching units to the intermediate quantities exposes the difference: “six counters per packet times a packet count” produces counters, while subtracting a packet count directly from a counter count would mix different quantities.

<a id="section-310-equality-and-the-question-an-equation-asks"></a>
## Equality and the question an equation asks {#section-312-equality-and-the-question-an-equation-asks}

An expression such as $3s+2$ calculates a value when an allowed $s$ is supplied. An equation such as $3s+2=23$ asks for an input that makes two values equal. The equals sign means “has the same value as.” It does not mean “the next answer is.” Thus $23=3s+2$ asks exactly the same question as $3s+2=23$.

For example, the blank in $8+4=\square+5$ must be 7: both sides must have value 12. Writing 12 in the blank would make the right side 17. We need to read the whole equality, including what is already on the right.

An equation's **solution set** is the collection of allowed inputs that make it true. This definition includes the allowed domain. The equation $x+2=5$ has solution 3 among real numbers and also among positive whole numbers. The equation $x+2=5.5$ has real solution 3.5, but no whole-number solution. The arithmetic is consistent in both cases; the permitted choices differ.

A candidate becomes a solution only after two checks: it must be allowed, and it must satisfy the original equality. A decimal answer is not automatically wrong, and a whole-number answer is not automatically sensible. If a duration can be any nonnegative real number, 3.5 hours is allowed. If the same symbol counts unopened packets, 3.5 packets is outside the model.

<a id="section-320-undoing-a-one-variable-rule"></a>
## Undoing a one-variable rule {#section-322-undoing-a-one-variable-rule}

Return to the café equation

$$3s+2=23.$$

There are two actions between the input and the cost: multiply by 3, then add 2. To recover the input, undo those actions in reverse order. Subtract the delivery fee first; then divide the remaining sandwich charge by the price per sandwich.

$$3s+2=23,\qquad 3s=21,\qquad s=7.$$

This reasoning can be read as a calculation on the receipt: £23 minus £2 leaves £21 for sandwiches, and £21 divided by £3 per sandwich gives seven sandwiches. It can also be read as a sequence of equivalent equations.

| Equality | Action applied to both sides | Why it preserves the same inputs |
| --- | --- | --- |
| $3s+2=23$ | Subtract 2 | Adding 2 would undo the action |
| $3s=21$ | Divide by 3 | Multiplying by 3 would undo the action |
| $s=7$ | Check the allowed domain | Seven is a positive whole number |

Applying the same reversible action to both sides preserves equality in both directions. If the first equation is true, subtracting 2 makes the second true. Conversely, adding 2 to the second recovers the first. This explains why the method finds every solution, rather than merely producing a plausible candidate.

Finally substitute in the original rule: $3(7)+2=21+2=23$. This checks the calculation against the given question. The reversible steps establish that no different real number can satisfy the equation; the domain check admits seven as an order.

<a id="section-342-worked-example-an-affordable-value-need-not-be-a-possib"></a>
### Worked example: an affordable value need not be a possible receipt {#section-344-worked-example-an-affordable-value-need-not-be-a-possib}

If the target cost were £24, the same inverse steps would give

$$3s+2=24,\qquad 3s=22,\qquad s=\frac{22}{3}.$$

The fraction solves the equation over the real numbers, since $3(22/3)+2=24$. It does not solve the café problem because the count must be a whole number. Seven sandwiches cost £23 and eight cost £26; £24 is between two possible receipts. Rounding $22/3$ to seven would answer a different question, because £23 is not £24.

This is a useful distinction between solving an equation and interpreting its solution. First obtain the exact candidate; then apply the story's restrictions. If no candidate survives, report that the stated target is unavailable under the model rather than silently changing the count or price.

<a id="section-352-the-order-of-operations-determines-the-inverse-order"></a>
## The order of operations determines the inverse order {#section-354-the-order-of-operations-determines-the-inverse-order}

Compare the rules $u=3s+2$ and $v=3(s+2)$. The first adds 2 after multiplying. The second adds 2 before multiplying. They should therefore be undone differently.

For $u=23$, subtract 2 and divide by 3, giving $s=7$. For $v=23$, divide by 3 and then subtract 2, giving $s=23/3-2=17/3$. Checking gives $3(17/3+2)=3(23/3)=23$. If a story required whole $s$, that second equation would again have no allowed solution.

A verbal “divide by three and subtract two” is therefore insufficient unless we know which machine is being reversed. Draw the chain in words: input, add 2, multiply by 3, output. Reverse its arrows: output, divide by 3, subtract 2, input. This is a text alternative to a machine diagram and makes the grouping visible.

The same care applies to subtraction. From $10-3b=4$, subtract 10 from both sides to obtain $-3b=-6$, then divide by $-3$, giving $b=2$. The minus sign belongs to the coefficient being divided. Substitution gives $10-3(2)=4$. There is no instruction here to “move a term and change its sign” without explanation; each line records an action on both sides.

<a id="section-362-when-the-unknown-occurs-on-both-sides"></a>
## When the unknown occurs on both sides {#section-364-when-the-unknown-occurs-on-both-sides}

Suppose two descriptions of a quantity give the condition

$$5x+6=3x+18,\qquad x\in\mathbb R.$$

Undoing only the final addition on the left does not immediately isolate $x$, because the right side also contains it. Instead subtract the same expression $3x$ from both sides:

$$2x+6=18.$$

Subtract 6, then divide by 2, obtaining $2x=12$ and $x=6$. In the original equality the left side is $5(6)+6=36$ and the right side is $3(6)+18=36$.

Subtracting $3x$ is legitimate for every real candidate: once a value is chosen, the same number is subtracted from each side. We do not need to know that value in advance. What would fail is subtracting $3x$ from only one side, or treating $3x$ as the number 3.

A second route subtracts $5x$ instead. It gives $6=-2x+18$, then $-12=-2x$, and again $x=6$. Different valid routes can lead to the same solution. Choose the route whose arithmetic you can explain; the reason matters more than matching a particular layout.

<a id="section-378-worked-example-an-unknown-garden-length"></a>
### Worked example: an unknown garden length {#section-380-worked-example-an-unknown-garden-length}

A rectangular garden has width 7 metres and perimeter 38 metres. Its unknown length $l$ must be positive. The two long sides contribute $2l$ metres and the two short sides contribute $2(7)=14$ metres, so

$$2l+14=38.$$

Subtracting 14 and dividing by 2 gives $l=12$. The check is $2(12)+2(7)=38$ metres, with both lengths positive. Dividing the perimeter by four would impose an extra assumption that all four sides are equal. The rectangle conditions allow two different side lengths; the equation must preserve that information.

Notice the units through the rearrangement. The coefficient 2 counts sides, so it has no length unit of its own. Subtracting the 14-metre contribution from a 38-metre perimeter leaves 24 metres; splitting that between two equal long sides gives 12 metres per side. The algebra and the geometric explanation describe the same calculation.

<a id="section-388-zero-coefficients-impossible-equalities-and-identities"></a>
## Zero coefficients, impossible equalities and identities {#section-390-zero-coefficients-impossible-equalities-and-identities}

The familiar instruction to divide needs a nonzero divisor. To see the boundary, consider

$$ax+b=c,$$

where $a,b,c$ are specified real numbers and $x$ is the unknown real number. If $a\ne0$, subtracting $b$ and dividing by $a$ gives the unique candidate $x=(c-b)/a$. Substituting it returns $a(c-b)/a+b=c$, so it is indeed a solution.

If $a=0$, division by $a$ is unavailable. The equation becomes $b=c$. When these constants are equal, every allowed $x$ works; when they differ, no allowed $x$ works. This is not an arithmetic accident. Multiplying an input by zero has erased all information about that input.

For example, $0x+5=5$ is true for every real $x$, while $0x+5=17$ is false for every real $x$. If a story restricts $x$ to positive whole numbers, the first equation is true for all those allowed choices. An equation with no solutions cannot acquire one by writing a fraction with denominator zero.

A similar distinction appears without an explicit zero coefficient. Expanding $2(x+3)=2x+6$ produces the same expression on both sides, so every real input works. Subtracting $x$ from $x+4=x+7$ produces $4=7$, so none works. In contrast, $x+4=7$ selects the single value 3. Ask whether an equation is selecting an input, accepting every input, or rejecting them all.

<a id="section-402-a-rule-describes-changes-as-well-as-individual-values"></a>
## A rule describes changes as well as individual values {#section-404-a-rule-describes-changes-as-well-as-individual-values}

The café formula can answer a question about change without choosing one particular order. If an allowed count $s$ rises to $s+1$, the new cost is

$C_{\mathrm{new}}=3(s+1)+2=3s+5.$

The original cost was $3s+2$, so the increase is $(3s+5)-(3s+2)=3$ pounds. The fixed delivery fee appears once in both costs and cancels in the comparison. This is why the same rule produces £5, £8 and £11 for one, two and three sandwiches.

An equal increase in the input therefore gives an equal increase in cost, but doubling the input does not double this total cost. For an allowed $s$,

$C(2s)=6s+2,\qquad 2C(s)=2(3s+2)=6s+4.$

The doubled order has one delivery fee; two separate copies of the first order have two fees. The difference is £2. For example, four sandwiches in one order cost £14, while two separate two-sandwich orders cost £16. This is a model-based explanation, not a rule that every purchase must behave this way.

Here $C(s)$ is another way to write “the cost produced when the input is $s$.” The parentheses name the input; they do not mean multiply $C$ by $s$. We will use this input-output reading in tables and graphs. If notation feels unfamiliar, read $C(2s)$ aloud as “the cost at twice the original count.”

There is also a difference between total cost and cost per sandwich. Dividing an allowed order's cost by its nonzero count gives $C(s)/s=3+2/s$ pounds per sandwich. The delivery fee is shared across the order. At $s=1$ the average is £5 per sandwich, and at $s=2$ it is £4. The sandwich price in the stated rule remains £3; the additional amount is the delivery share.

These comparisons give us two ways to explain a formula. One follows the actions used to calculate a single output. The other follows what changes and what stays fixed when we compare inputs. Both depend on the original assumptions: if the price, delivery arrangement or allowed count changes, begin by rewriting the model rather than keeping a formula whose terms no longer describe it.

<a id="section-422-from-a-worked-answer-to-an-explanation"></a>
## From a worked answer to an explanation {#section-424-from-a-worked-answer-to-an-explanation}

A complete elementary solution can be short while still stating its reasons. Name the quantity and domain, write the original equality, show reversible actions, and check the surviving candidate in the original context. For the receipt problem, this is more informative than the isolated answer “7,” because it explains what seven counts and why it is the only permitted answer.

When checking someone else's work, locate the first unsupported line rather than replacing the entire attempt. If $4(x+2)=20$ is changed to $4x+2=20$, the first problem is partial distribution. The corrected equality is $4x+8=20$, which gives $x=3$ and checks as $4(3+2)=20$. Merely checking that a later subtraction was accurate would not repair the earlier expression.

These habits connect this chapter's rules to later work. Sequences vary the input repeatedly; graphs display input-output pairs; systems impose two equalities at once. The meaning of a letter, the allowed inputs and the requirement to preserve the original condition remain the same throughout.

<a id="section-430-practice-extensions"></a>

## Summary

<a id="section-278-looking-back-and-forward"></a>
This chapter introduced variables as placeholders, showed how to translate stories into expressions, and practised evaluating and expanding those expressions. The key habits are: read the structure before calculating, check with numbers, and watch for the common error of partial distribution.

In the next chapter, **Patterns and Sequences**, we will let variables run through ordered lists of numbers. Instead of asking "What is the cost for 4 sandwiches?", we will ask "How does the cost change as the sandwich count grows?" That shift from single values to sequences prepares us for the idea of a function.

<a id="section-282-further-development-quantities-equations-and-reasons"></a>

<a id="section-564-summary"></a>
An expression records the order of operations and the meaning of each quantity. Solve and check using that original rule, then impose the stated domain: an algebraic value need not be a possible count.

**Where next.** Continue with [Algebra and Functions](#/books/algebra-and-functions) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-118-practice-exercises}

<a id="section-118-exercise-1"></a>
### Exercise 1 {#section-120-exercise-1}
Translate the phrase "seven less than twice a number $n$" into an algebraic expression.

<details>
<summary>Hint 1</summary>

**Hint.** Translate twice a number before interpreting seven less than.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtract seven from the doubled quantity, keeping that order.

</details>

<details>
<summary>Solution</summary>

**Solution.** "Twice a number $n$" is $2n$. "Seven less than" that quantity means subtract 7 from it, not subtract from 7. The expression is $2n - 7$.

</details>

<a id="section-141-exercise-2"></a>
### Exercise 2 {#section-143-exercise-2}
Expand $3(y + 4)$.

<details>
<summary>Hint 1</summary>

**Hint.** Picture three copies of the whole bracket.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply both the variable term and the constant term by three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Distribute the 3 across both terms:

$$3(y + 4) = 3y + 12.$$

Check with $y = 2$: left side $3(2 + 4) = 18$; right side $3(2) + 12 = 18$. Both agree.

</details>

<a id="section-168-exercise-3"></a>
### Exercise 3 {#section-170-exercise-3}
A taxi company charges £5 fixed fee plus £3 per mile. Write an expression for the fare $F$ in pounds for $m$ miles, then find the fare for 8 miles.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the fee paid once from the charge paid for every mile.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Write the per-mile contribution using m, then substitute eight for m.

</details>

<details>
<summary>Solution</summary>

**Solution.** The rule is $F = 3m + 5$. For $m = 8$:

$$F = 3 \times 8 + 5 = 24 + 5 = 29.$$

The fare for 8 miles is £29.

</details>

<a id="section-195-exercise-4"></a>
### Exercise 4 {#section-197-exercise-4}
Evaluate $5x - 2$ when $x = 4$, and check by substituting back into the original expression.

<details>
<summary>Hint 1</summary>

**Hint.** Replace the letter by its given value before calculating.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply first, then subtract the constant; compare with the original expression.

</details>

<details>
<summary>Solution</summary>

**Solution.**

$$5(4) - 2 = 20 - 2 = 18.$$

Check: the expression $5x - 2$ with $x = 4$ gives $20 - 2 = 18$. The evaluation is consistent.

</details>

<a id="section-222-exercise-5"></a>
### Exercise 5 {#section-224-exercise-5}
A rectangular garden has length $l$ metres and width $w$ metres. Write an expression for the perimeter, then find the perimeter when $l = 12$ and $w = 7$.

<details>
<summary>Hint 1</summary>

**Hint.** A rectangle has two sides of each length.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Add both lengths and both widths before substituting the dimensions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The perimeter of a rectangle is the sum of all four sides:

$$P = 2l + 2w.$$

With $l = 12$ and $w = 7$:

$$P = 2(12) + 2(7) = 24 + 14 = 38.$$

The perimeter is 38 metres.

</details>

<a id="section-253-exercise-6"></a>
### Exercise 6 {#section-255-exercise-6}
Explain why $2x + 3x = 5x$ using a story about groups of items.

<details>
<summary>Hint 1</summary>

**Hint.** Let one x represent a group containing the same number of items each time.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Combine the number of equal groups without changing the size of a group.

</details>

<details>
<summary>Solution</summary>

**Solution.** Imagine you have two bags, each containing $x$ marbles, and three more bags, each also containing $x$ marbles. In total you have five bags of $x$ marbles, so $5x$ marbles. The variable $x$ acts as a unit, and we simply count how many of that unit we possess.

</details>

<a id="section-276-looking-back-and-forward"></a>

<a id="section-432-practice-extensions"></a>
### Exercise 7 — AS-01-E07 — a receipt with an input restriction {#section-436-as-01-e07-a-receipt-with-an-input-restriction}

A workshop charges £4 per order plus £2.50 for each kit. Every order contains a positive whole number $k$ of kits. Write the total-cost rule, then determine whether a single order can cost (a) £21.50 and (b) £22. Explain why rounding an intermediate answer would change the question. Check every admitted count in the original rule.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the order fee from the kit charge, and retain the positive-integer restriction.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For each proposed bill subtract the order fee, divide by the kit price, then test the count in the original rule.

</details>



<a id="section-453-as-01-e08-explain-the-first-unsupported-line"></a>
### Exercise 8 — AS-01-E08 — explain the first unsupported line {#section-455-as-01-e08-explain-the-first-unsupported-line}

For real $x$, solve $3(2x-1)=4x+9$ using reversible steps and verify the result in the original equation. A proposed solution begins by dividing by 3 and writing $2x-1=4x+3$. Identify the first unsupported step and give its correct replacement.

<details>
<summary>Hint 1</summary>

**Hint.** Expand both sides carefully, or divide every term of a whole side by the same nonzero number.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After collecting the x terms, check the result in the original brackets; compare the proposed division term by term.

</details>



<a id="section-472-as-01-e09-the-coefficient-can-be-zero"></a>
### Exercise 9 — AS-01-E09 — the coefficient can be zero {#section-474-as-01-e09-the-coefficient-can-be-zero}

For each specified value $a=0,-2,3$, find all real solutions of $ax+5=17$. Then state which of those solutions remain if $x$ must be a nonnegative whole number. Explain why the case $a=0$ must be examined before division.

<details>
<summary>Hint 1</summary>

**Hint.** Consider each coefficient before trying to divide by it.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For a nonzero coefficient isolate x; for zero compare the resulting constant equality, then impose the count restriction.

</details>



<a id="section-491-solutions-to-practice-extensions"></a>

<a id="section-538-a-further-practice-problem"></a>
<a id="section-538-exercise-10"></a>
### Exercise 10 {#section-540-exercise-10}
<a id="a-letter-can-hold-a-place-ex-10"></a>

A club charges a £7 registration fee and £3 for each visit. The supplied rule applies to a positive whole number $v$ of visits, with no other charges. Write the total-cost rule. A learner has £22: find the greatest number of visits they can buy, and check the next count. Can a bill under this rule be exactly £24?

<details>
<summary>Hint 1</summary>

**Hint.** Write the one-off registration cost separately from the repeated visit cost.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the budget compare the whole cost with £22; for an exact bill solve equality and then test the count domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** The total cost in pounds is $C(v)=7+3v$, for positive integers $v$. The budget condition is $7+3v\le22$, so $3v\le15$ and $v\le5$. Thus five visits are affordable: $C(5)=7+15=22$. The next allowed count is six, for which $C(6)=25>22$, so five is greatest. An exact £24 bill would require $7+3v=24$, giving $v=17/3$. This is not a whole number, so no allowed count produces that bill. Rounding would answer a different question.

</details>

<a id="section-562-summary"></a>

## Solutions {#section-493-solutions-to-practice-extensions}

<a id="section-493-as-01-e07-solution"></a>
### AS-01-E07 — solution {#section-495-as-01-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The rule is $C=2.5k+4$ pounds, with $k=1,2,3,\ldots$. For £21.50, subtracting 4 gives $2.5k=17.5$, and dividing by the nonzero price gives $k=7$. This is allowed, and $2.5(7)+4=17.5+4=21.5$ checks the receipt.

For £22, the same reversible actions give $k=(22-4)/2.5=18/(5/2)=36/5=7.2$. This real candidate is outside the allowed count domain, so no single order has that cost. Rounding it to 7 would give £21.50; rounding to 8 would give £24. Neither is £22. The exact equation and the whole-count restriction are both needed.

</details>

<a id="section-506-as-01-e08-solution"></a>
### AS-01-E08 — solution {#section-508-as-01-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

Distributivity gives $6x-3=4x+9$. Subtracting $4x$ gives $2x-3=9$; adding 3 gives $2x=12$; dividing by 2 gives $x=6$. These actions are reversible for real $x$, so this is the only real solution. In the original equation, $3(2(6)-1)=3(11)=33$ and $4(6)+9=33$.

The proposed division fails to divide the whole right side by 3. Its correct replacement is $2x-1=(4x+9)/3=(4/3)x+3$. This route also yields $x=6$: subtracting $(4/3)x$ gives $(2/3)x-1=3$, then $(2/3)x=4$, and multiplication by $3/2$ gives 6.

</details>

<a id="section-519-as-01-e09-solution"></a>
### AS-01-E09 — solution {#section-521-as-01-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

For $a=0$, the equation is $5=17$, false for every real input; there are no solutions. Dividing by the coefficient would mean dividing by zero and would not produce an equation equivalent to the original.

For $a=-2$, subtracting 5 gives $-2x=12$, so $x=-6$. The check is $(-2)(-6)+5=12+5=17$. For $a=3$, subtraction and division give $3x=12$ and $x=4$, checking as $3(4)+5=17$. Each nonzero-coefficient equation has exactly one real solution because the steps reverse.

With the nonnegative-whole-number restriction, $-6$ is excluded and 4 remains. The zero-coefficient case still has no solutions. A valid real solution may fail a story's domain condition even when its substitution check succeeds.

</details>



<a id="section-536-a-further-practice-problem"></a>
