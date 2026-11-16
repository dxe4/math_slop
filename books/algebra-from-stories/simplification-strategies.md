
# Simplification Strategies {#section-1-simplification-strategies}

<a id="section-1-building-a-systematic-approach"></a>
## Building a systematic approach {#section-3-building-a-systematic-approach}

In **Equivalent Expressions** we learned individual techniques: collecting like terms, expanding brackets, and factorising. This chapter combines those techniques into a coherent strategy. The goal is to take a complicated expression and reduce it to its simplest equivalent form, reliably and without sign errors.

<a id="section-5-the-order-of-simplification"></a>
## The order of simplification {#section-7-the-order-of-simplification}

When faced with a complex expression, work from the inside out:

1. **Simplify inside brackets** first.
2. **Expand** any brackets that remain.
3. **Collect like terms**.
4. **Factorise** if a simpler factored form is desired.

**Worked example.** Simplify $2(3x + 4) - 3(x - 2)$.

Step 1: Expand both sets of brackets.

$$2(3x + 4) = 6x + 8,$$
$$-3(x - 2) = -3x + 6.$$

Step 2: Collect like terms.

$$(6x - 3x) + (8 + 6) = 3x + 14.$$

The simplified expression is $3x + 14$.

<a id="section-27-common-error-mishandling-negative-multipliers"></a>
### Common error: mishandling negative multipliers {#section-29-common-error-mishandling-negative-multipliers}

In $-3(x - 2)$, the negative sign applies to both terms inside. A common mistake is $-3x - 6$. The correct expansion is $-3x + 6$ because $-3 \times (-2) = +6$.

<a id="section-31-nested-brackets"></a>
## Nested brackets {#section-33-nested-brackets}

When brackets are nested, work from the innermost outward.

**Worked example.** Simplify $2\bigl[x + 3(x - 1)\bigr]$.

First simplify inside the inner brackets: $3(x - 1) = 3x - 3$.

Now the expression is $2[x + 3x - 3] = 2[4x - 3] = 8x - 6$.

<a id="section-41-fractional-coefficients"></a>
## Fractional coefficients {#section-43-fractional-coefficients}

Expressions with fractions require careful handling of common denominators.

**Worked example.** Simplify $\frac{1}{2}x + \frac{1}{3}x$.

The common denominator of 2 and 3 is 6:

$$\frac{1}{2}x + \frac{1}{3}x = \frac{3}{6}x + \frac{2}{6}x = \frac{5}{6}x.$$

**Example.** Simplify $\frac{2x + 4}{2}$.

Divide each term in the numerator by 2:

$$\frac{2x + 4}{2} = \frac{2x}{2} + \frac{4}{2} = x + 2.$$

**Misconception.** Some students cancel only part of the numerator: $\frac{2x + 4}{2} = x + 4$. This is wrong because the 2 must divide every term in the numerator.

<a id="section-59-removing-brackets-by-multiplying-factors"></a>
## Removing brackets by multiplying factors {#section-61-removing-brackets-by-multiplying-factors}

When two bracketed expressions are multiplied, every term in the first bracket must multiply every term in the second.

**Example.** Expand $(x + 2)(x + 3)$.

$$x \cdot x + x \cdot 3 + 2 \cdot x + 2 \cdot 3 = x^{2} + 3x + 2x + 6 = x^{2} + 5x + 6.$$

A systematic way is the **FOIL** mnemonic: First, Outer, Inner, Last.

**Example.** Expand $(2x - 1)(x + 4)$.

$$2x \cdot x + 2x \cdot 4 + (-1) \cdot x + (-1) \cdot 4 = 2x^{2} + 8x - x - 4 = 2x^{2} + 7x - 4.$$

<a id="section-73-simplifying-before-substituting"></a>
## Simplifying before substituting {#section-75-simplifying-before-substituting}

When evaluating an expression for a specific value, simplify first if possible. It reduces arithmetic and catches structural errors.

**Example.** Evaluate $3(x + 2) + 2(x - 1)$ when $x = 5$.

Simplify first:

$$3(x + 2) + 2(x - 1) = 3x + 6 + 2x - 2 = 5x + 4.$$

Now substitute:

$$5(5) + 4 = 25 + 4 = 29.$$

Check by direct substitution:

$$3(5 + 2) + 2(5 - 1) = 3(7) + 2(4) = 21 + 8 = 29.$$

Both methods agree.

<a id="section-93-practice-exercises"></a>
## structural simplification {#section-278-further-development-for-structural-simplification}

<a id="section-280-read-the-operations-before-choosing-a-strategy"></a>
## Read the operations before choosing a strategy {#section-282-read-the-operations-before-choosing-a-strategy}

An expression has an outer operation as well as smaller expressions inside it. In $4-[2x-3(x-1)]$, the outer operation subtracts the entire bracket from $4$. Inside the bracket, $2x$ is combined with the negative of $3(x-1)$. Reading those layers before calculating keeps a minus sign attached to the quantity it acts on.

One useful description is an operation tree written in words: start with $x$; subtract $1$; multiply that result by $3$; subtract it from $2x$; finally subtract the whole result from $4$. This description does not need a diagram. It shows why a sign cannot be moved past a bracket without changing every term inside. A bracket is part of the meaning, rather than decoration around the letters.

Here is the full simplification:

$$4-[2x-3(x-1)]=4-[2x-3x+3]
=4-[3-x]=4-3+x=x+1.$$

The first step distributes the negative multiplier through $(x-1)$. The last step subtracts both terms of $3-x$: subtracting $-x$ adds $x$. At $x=-2$, the original expression is $4-[-4-3(-3)]=4-5=-1$, and the simplified expression is $-2+1=-1$. The check supports this particular evaluation; the displayed algebraic laws establish the identity for every real $x$.

Do not use “brackets first” to mean “perform an impossible numerical calculation inside every bracket”. The bracket $(x-1)$ cannot become a single number until $x$ is given, but it is already a meaningful expression. We may distribute over it, preserve it as a factor, or replace it with an equivalent expression. The choice depends on the question we want the expression to answer.

<a id="section-295-terms-factors-and-the-role-of-a-coefficient"></a>
## Terms, factors and the role of a coefficient {#section-297-terms-factors-and-the-role-of-a-coefficient}

A **term** is a piece joined to other pieces by addition or subtraction at the level being examined. A **factor** is a piece multiplied by other pieces. In $3x+6$, the terms are $3x$ and $6$; in $3(x+2)$, the displayed factors are $3$ and $(x+2)$. The two expressions are equivalent, but their written structure highlights different operations.

Collecting like terms is reverse distribution. The equation $2x+5x=(2+5)x=7x$ is justified because the same quantity $x$ is multiplied by two coefficients. By contrast, $2x+5y$ cannot generally become $7x$ or $7y$: the quantities being counted may differ. It could simplify further if a problem supplied a relationship such as $y=x$, but that would be an additional assumption.

Likewise, $x^2$ and $x$ are not like terms. One multiplies $x$ by itself, while the other does not. At $x=2$, $x^2+x=6$, whereas the proposed replacement $2x^3$ gives $16$. That input disproves the replacement. We retain $x^2+x$, or factor it as $x(x+1)$, according to the purpose. Factoring explains the common factor without confusing the two original terms.

Signs belong to coefficients. In $5x-2x$, the second coefficient is $-2$, so collecting gives $(5-2)x=3x$. In $5x-2(x-3)$, however, the second displayed term contains a bracket; expansion gives $5x-2x+6=3x+6$. Dropping that final $6$ would treat multiplication by a whole expression as though it acted only on its first term.

<a id="section-305-there-can-be-more-than-one-useful-final-form"></a>
## There can be more than one useful final form {#section-307-there-can-be-more-than-one-useful-final-form}

The earlier inside-out procedure is a reliable route, but an expanded form is not always the most useful answer. Compare

$$(x+5)(x-5)+2(x+5).$$

Both terms contain the factor $(x+5)$. Factoring first gives

$$(x+5)\{(x-5)+2\}=(x+5)(x-3).$$

Expanding first gives $x^2-25+2x+10=x^2+2x-15$. The two routes agree because distribution can be used in either direction. At $x=3$, the factored form immediately gives zero; at $x=0$, the expanded form immediately gives $-15$. Neither form is universally simpler for every purpose.

Write the goal before choosing the route. “Collect the coefficients of each power” requests an expanded expression. “Expose a common factor” requests a factorisation. “Evaluate at this input” may favour whichever form needs fewer arithmetic steps. A legitimate simplification preserves the same values on the stated domain; it does not promise to minimise every possible kind of work simultaneously.

Repeated groups can be treated as temporary units. In $(x+1)^2+3(x+1)$, set $u=x+1$ for a moment. The expression becomes $u^2+3u=u(u+3)$. Replacing $u$ by its definition gives $(x+1)(x+4)$. Expanding this produces $x^2+5x+4$, which can be checked against the original expansion $x^2+2x+1+3x+3$.

The temporary letter does not create a second freely chosen input. Once $x$ is fixed, $u=x+1$ is fixed as well. It is a label for a repeated expression. This habit is especially useful when a large group appears several times: reason with the group as a whole, then restore its definition before interpreting the answer.

<a id="section-323-exact-fractional-coefficients-without-decimal-detours"></a>
## Exact fractional coefficients without decimal detours {#section-325-exact-fractional-coefficients-without-decimal-detours}

When coefficients are fractions, keep them exact while combining terms. Consider

$$E(x)=\frac{2x-1}{3}-\frac{x+2}{4}.$$

A common denominator is $12$. Multiplying both the numerator and denominator of each fraction by the same nonzero number preserves its value:

$$E(x)=\frac{4(2x-1)-3(x+2)}{12}
=\frac{8x-4-3x-6}{12}
=\frac{5x-10}{12}.$$

The minus sign before the second fraction affects its entire numerator. The result can also be written $5(x-2)/12$. There is no excluded real input here, because the original denominators are the fixed nonzero numbers $3$ and $4$.

A second route splits the original fractions into terms:

$$E(x)=\left(\frac23-\frac14\right)x-\frac13-\frac12
=\frac5{12}x-\frac56.$$

Combining this result over $12$ recovers $(5x-10)/12$. At $x=3$, the value is $5/12$; direct substitution gives $5/3-5/4=(20-15)/12=5/12$. The exact fraction makes the agreement visible without asking two rounded decimals to stand for an exact identity.

Be precise about what “multiply by $12$” means. Multiplying the expression itself produces a new expression $12E(x)=5x-10$; it does not show that $E(x)=5x-10$. In an equation such as $E(x)=2$, multiplying **both sides** by $12$ is a reversible equation step, giving $5x-10=24$. The expressions before and after scaling have different values, while the two equations have the same solution set.

This separates three operations that can look similar on paper: rewriting a fraction with an equal fraction; multiplying an expression by a number; and multiplying both sides of an equation by that number. Naming the operation helps prevent an unexplained cancellation from standing in for a valid reason.

<a id="section-348-cancellation-removes-a-factor-not-an-arbitrary-piece"></a>
## Cancellation removes a factor, not an arbitrary piece {#section-350-cancellation-removes-a-factor-not-an-arbitrary-piece}

The cancellation below reprises **Equivalent Expressions** so its retained domain restriction becomes a checkpoint for the variable common-denominator strategy developed later here.

For real $x\ne3$,

$$\frac{x^2-9}{x-3}
=\frac{(x-3)(x+3)}{x-3}=x+3.$$

The cancelled quantity is the entire common factor $(x-3)$. The first expression is undefined at $x=3$, even though the last expression can be evaluated there. Retain the original condition $x\ne3$ beside the simplified rule. Adding the value at $3$ would define an extension of the original rule, not merely rewrite the same rule on its original domain.

The distinction can be seen without any limit or graph. At $x=2$, both allowed formulas give $5$; at $x=4$, both give $7$. At $x=3$, the original denominator is zero and no division is defined. Two nearby permitted inputs do not grant permission to fill the missing input. The earlier chapter's common-domain definition tells us exactly where the identity applies.

Compare this valid cancellation with $(x+2)/(x+5)$. The $x$ symbols occur in sums; they are not displayed factors of both numerator and denominator. Cancelling them to obtain $2/5$ is invalid. At the permitted input $x=1$, the original value is $3/6=1/2$, different from $2/5$. A matching check at some other input would not rescue the proposed all-input rule.

A slightly longer example makes the factor test visible:

$$\frac{(x+2)(x-1)}{3(x+2)}=\frac{x-1}{3},
\qquad x\ne-2.$$

Before cancelling, record the excluded input $-2$. After cancelling, the remaining denominator $3$ is always nonzero, but the original exclusion stays. The simplified rule does not imply that the original expression equals $-1$ at $x=-2$; it was never defined there. This is the same domain discipline as formula rearrangement, applied to an expression rather than an equation.

<a id="section-370-two-structural-accounts-of-an-area"></a>
## Two structural accounts of an area {#section-372-two-structural-accounts-of-an-area}

Suppose an outer rectangle has width $(x+4)$ metres and height $(x+3)$ metres. A rectangular piece of width $x$ metres and height $(x+1)$ metres is removed from the lower-left corner. Let $x>0$ be a dimensionless numerical input, so all these lengths are positive and the removed piece fits inside the outer one. The remaining area in square metres is

$$A=(x+4)(x+3)-x(x+1).$$

One account expands both products, respecting the subtraction of the whole second area:

$$A=(x^2+7x+12)-(x^2+x)=6x+12.$$

The $x^2$ terms cancel because the same area contribution is removed. They do not disappear because a square is intrinsically unimportant. The linear terms combine as $7x-x=6x$; the subtraction applies to both terms in the inner area.

A second account divides the remaining shape into two nonoverlapping strips. A strip of width $4$ metres runs along the full outer height $(x+3)$ metres. Above the removed piece is another strip of width $x$ metres and height $2$ metres. Their areas add to

$$A=4(x+3)+2x=6x+12.$$

This text description supplies the decomposition without relying on colour or a picture. The strips do not overlap: the right strip occupies the width beyond the removed piece, while the top strip uses only the inner width. Their union is exactly the remaining part of the outer rectangle.

At $x=2$, the outer area is $6\cdot5=30$ square metres and the removed area is $2\cdot3=6$, leaving $24$. The strips give $4\cdot5+2\cdot2=24$, as does $6(2)+12$. The numerical check confirms this case. The two general decompositions explain why the identity holds for every positive $x$ allowed by the story.

<a id="section-390-a-repair-ledger-for-a-difficult-line"></a>
## A repair ledger for a difficult line {#section-392-a-repair-ledger-for-a-difficult-line}

When an answer looks wrong, locate the first invalid equality instead of starting an unrelated calculation. Consider the proposed chain

$$2(x-3)-[x+4]=2x-6-x+4=x-2.$$

The first expansion of $2(x-3)$ is correct. The error appears when $-[x+4]$ becomes $-x+4$: subtracting the whole bracket requires $-x-4$. Repair that equality and continue:

$$2(x-3)-[x+4]=2x-6-x-4=x-10.$$

At $x=0$, the original expression is $-6-4=-10$, so the proposed result $-2$ is refuted immediately. The correction is not justified only by that check; it follows from applying the negative multiplier to every term. A counterexample locates failure, while an applicable algebraic rule repairs the full claim.

For your own work, a compact ledger can have three columns: the current expression, the operation used, and the retained domain. In the area example the domain is $x>0$ from the story. In a polynomial identity it is all real inputs. In a rational expression it may exclude a denominator's zero. Keeping that third column prevents a successful calculation from erasing a restriction.

There is no need to expand every line to obtain a long solution. A useful explanation records a step when it changes structure, uses a condition, or answers the question. Once a shared factor and its nonzero condition are visible, cancelling it can be one justified step. Once a repeated group is identified, preserving it may make the work clearer than expansion. The aim is a reliable reason for each change, rather than a fixed number of lines.

<a id="section-406-a-common-denominator-can-contain-variables"></a>
## A common denominator can contain variables {#section-408-a-common-denominator-can-contain-variables}

The same fraction laws work with variable denominators, but the domain must be recorded before multiplying. For

$$H(x)=\frac1x+\frac1{x+1},$$

the allowed real inputs exclude $0$ and $-1$. On that domain both denominator factors are nonzero. Rewriting each fraction gives

$$H(x)=\frac{x+1}{x(x+1)}+\frac{x}{x(x+1)}
=\frac{2x+1}{x(x+1)},\qquad x\ne0,-1.$$

The first numerator is $x+1$ because both numerator and denominator of $1/x$ were multiplied by that same nonzero expression. The second numerator is $x$ for the corresponding reason. The common denominator is a product, not the sum of the old denominators.

The proposed shortcut $1/x+1/(x+1)=2/(2x+1)$ changes the operation. At $x=1$, the original sum is $1+1/2=3/2$, whereas the shortcut gives $2/3$. Keeping denominators as named factors makes the error easier to see: adding two fractions counts their numerator contributions after expressing them in equal-sized units; it does not add the sizes of those units.

The numerator $2x+1$ cannot be cancelled with one of the displayed denominator factors merely because similar symbols appear. For instance, at $x=-1/2$ the numerator is zero but the denominator is nonzero, so $H(-1/2)=0$. A legitimate expression may have value zero. The danger is a zero denominator, not a zero numerator.

<a id="section-423-distribution-is-larger-than-a-four-product-mnemonic"></a>
## Distribution is larger than a four-product mnemonic {#section-425-distribution-is-larger-than-a-four-product-mnemonic}

FOIL names four products when each of two factors has exactly two terms. The distributive property explains why those products occur and also handles other numbers of terms. Consider

$$(x+1)(x+y+2).$$

The first factor has two terms and the second has three, so there are six pairings:

| Term from the first factor | Multiply by $x$ | Multiply by $y$ | Multiply by $2$ |
| --- | --- | --- | --- |
| $x$ | $x^2$ | $xy$ | $2x$ |
| $1$ | $x$ | $y$ | $2$ |

Adding every entry gives $x^2+xy+3x+y+2$. The terms $2x$ and $x$ combine; $xy$ and $y$ do not, because their variable parts differ. The table is a bookkeeping device for applying distribution twice. Its rows can also be read aloud as two complete products, so no visual position is needed to follow the reasoning.

A four-product mnemonic used without checking the number of terms could omit two contributions here. Instead ask: “Has every term in the first factor multiplied every term in the second exactly once?” The question applies to two, three or more terms. It supplies a reason for the method rather than a rule tied to one layout.

<a id="section-440-powers-and-a-leading-minus-sign"></a>
## Powers and a leading minus sign {#section-442-powers-and-a-leading-minus-sign}

Grouping also decides what a power acts on. For real $x$,

$$(-x)^2=(-x)(-x)=x^2,$$

whereas $-x^2$ means $-(x^2)$. At $x=2$, these values are $4$ and $-4$. A leading minus sign outside a square cannot be moved inside it unchanged.

For example, $-(x-1)^2$ is the negative of a nonnegative square, so it is never positive on the real domain. Expanding the square and then applying the minus sign gives

$$-(x-1)^2=-(x^2-2x+1)=-x^2+2x-1.$$

At $x=0$, the original form gives $-1$; the expanded form gives the same result. The structural form also supplies an immediate bound: no real input can make this expression equal $3$. That conclusion does not require solving a quadratic equation. It follows from the meaning of the square and the outer negative sign.
<!-- EULER-AS-08-EXPOSITION-END -->

<!-- EULER-AS-08-QUESTIONS-START -->
<a id="section-456-practice-extensions"></a>

## Summary

<a id="section-271-looking-back-and-forward"></a>
This chapter assembled the techniques of earlier chapters into a systematic simplification strategy: brackets first, then expansion, then collecting, then factorising if needed. We practised with nested brackets, fractions, and products of binomials.

In the next chapter, **Checking and Estimation**, we turn from manipulation to verification. We will learn to estimate answers before calculating, to check solutions by substitution, and to catch errors before they propagate.

<!-- EULER-AS-08-EXPOSITION-START -->
<a id="section-276-further-development-for-structural-simplification"></a>

<a id="section-606-summary"></a>
Choose a clear order: inner brackets, complete distribution, then collection of like terms. Keep expressions distinct from equations, and preserve the domain when simplifying fractions or cancelling factors.

**Where next.** Continue with [Algebra and Functions](#/books/algebra-and-functions) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-95-practice-exercises}

<a id="section-95-exercise-1"></a>
### Exercise 1 {#section-97-exercise-1}
Simplify $4(2x - 3) - 2(x + 5)$.

<details>
<summary>Hint 1</summary>

**Hint.** Distribute each outside multiplier over its entire bracket.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the negative multiplier attached to both terms before collecting x terms and constants.

</details>

<details>
<summary>Solution</summary>

**Solution.** Expand:

$$8x - 12 - 2x - 10 = 6x - 22.$$

</details>

<a id="section-120-exercise-2"></a>
### Exercise 2 {#section-122-exercise-2}
Simplify $3\bigl[2(x + 1) - (x - 3)\bigr]$.

<details>
<summary>Hint 1</summary>

**Hint.** Simplify the expression inside the square brackets first.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtracting the second parenthesis changes both of its term signs; distribute the outer factor last.

</details>

<details>
<summary>Solution</summary>

**Solution.** Inner brackets first:

$$2(x + 1) = 2x + 2.$$

So inside the square brackets:

$$(2x + 2) - (x - 3) = 2x + 2 - x + 3 = x + 5.$$

Now multiply by 3:

$$3(x + 5) = 3x + 15.$$

</details>

<a id="section-153-exercise-3"></a>
### Exercise 3 {#section-155-exercise-3}
Simplify $\frac{3x + 9}{3} + \frac{4x - 8}{4}$.

<details>
<summary>Hint 1</summary>

**Hint.** Each numerator is a sum divided by a nonzero constant.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide every term in each numerator, then combine the resulting like terms.

</details>

<details>
<summary>Solution</summary>

**Solution.** Divide each term:

$$\frac{3x}{3} + \frac{9}{3} + \frac{4x}{4} - \frac{8}{4} = x + 3 + x - 2 = 2x + 1.$$

</details>

<a id="section-178-exercise-4"></a>
### Exercise 4 {#section-180-exercise-4}
Expand and simplify $(x + 3)(x - 3) + (x + 2)^{2}$.

<details>
<summary>Hint 1</summary>

**Hint.** Treat the two products separately before adding.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the difference of squares for one product and retain the cross term when squaring the other.

</details>

<details>
<summary>Solution</summary>

**Solution.** The first product is a difference of squares:

$$(x + 3)(x - 3) = x^{2} - 9.$$

The second is a perfect square:

$$(x + 2)^{2} = x^{2} + 4x + 4.$$

Add them:

$$(x^{2} - 9) + (x^{2} + 4x + 4) = 2x^{2} + 4x - 5.$$

</details>

<a id="section-211-exercise-5"></a>
### Exercise 5 {#section-213-exercise-5}
Evaluate $2(a + 3) - 3(2a - 1)$ when $a = 4$, first by simplifying and then by direct substitution. Show that both methods give the same result.

<details>
<summary>Hint 1</summary>

**Hint.** Keep a separate record of the simplified expression and the original expression.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute the same input into each, respecting brackets and the negative multiplier.

</details>

<details>
<summary>Solution</summary>

**Solution.** Simplify first:

$$2(a + 3) - 3(2a - 1) = 2a + 6 - 6a + 3 = -4a + 9.$$

Substitute $a = 4$: $-4(4) + 9 = -16 + 9 = -7$.

Direct substitution:

$$2(4 + 3) - 3(2 \times 4 - 1) = 2(7) - 3(7) = 14 - 21 = -7.$$

Both methods give $-7$.

</details>

<a id="section-244-exercise-6"></a>
### Exercise 6 {#section-246-exercise-6}
Explain why $\frac{x + 6}{2}$ is not equivalent to $x + 3$, and find the correct simplification.

<details>
<summary>Hint 1</summary>

**Hint.** Division by two applies to the entire numerator.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Split the quotient into two terms and compare the coefficient of x with the proposed expression.

</details>

<details>
<summary>Solution</summary>

**Solution.** Test with $x = 2$: $\frac{2 + 6}{2} = 4$, but $2 + 3 = 5$. The expressions differ. The correct simplification is $\frac{x}{2} + 3$, because

$$\frac{x + 6}{2} = \frac{x}{2} + \frac{6}{2} = \frac{x}{2} + 3.$$

</details>

<a id="section-269-looking-back-and-forward"></a>

<a id="section-458-practice-extensions"></a>
### Exercise 7 — AS-08-E07 — Find the first invalid equality {#section-462-as-08-e07-find-the-first-invalid-equality}

A proposed simplification is
$$7-2[3x-(x-4)]=7-6x-2x+8=15-8x.$$
Identify the first invalid equality. Give a correct simplification for every real $x$, explaining the sign changes. Compare the original expression and both proposed final forms at $x=-1$. Does one agreeing input, if you find one elsewhere, prove that the incorrect form is equivalent?

<details>
<summary>Hint 1</summary>

**Hint.** Work from the innermost subtraction outward.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the outer negative multiplier on the complete inner result, then substitute the requested negative input into every original bracket.

</details>



<a id="section-481-as-08-e08-scaling-an-expression-or-an-equation"></a>
### Exercise 8 — AS-08-E08 — Scaling an expression or an equation {#section-483-as-08-e08-scaling-an-expression-or-an-equation}

Let $E(x)=(x+1)/2-(x-2)/3$. Find one exact simplified expression on its full real domain. Explain the difference between saying $6E(x)=x+7$ and saying $E(x)=x+7$. Then solve $E(x)=2$ by a reversible equation step and check the solution in the original fractions.

<details>
<summary>Hint 1</summary>

**Hint.** Put the fractions over a common nonzero denominator.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distinguish multiplying a whole expression from replacing its value; scale both sides only when solving an equation.

</details>



<a id="section-500-as-08-e09-a-constant-rule-with-a-missing-input"></a>
### Exercise 9 — AS-08-E09 — A constant rule with a missing input {#section-502-as-08-e09-a-constant-rule-with-a-missing-input}

For
$$J(x)=\frac{x^2-4}{x-2}-(x+1),$$
state the original real domain and simplify on that domain. Calculate $J(3)$ and $J(-2)$, and explain why the simplified expression does not supply a value of the original $J$ at $x=2$. Give a general algebraic reason for the simplification rather than relying on those two checks.

<details>
<summary>Hint 1</summary>

**Hint.** State the denominator restriction before factoring.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cancel the factor only where allowed, then collect the remaining terms and retain the original domain.

</details>

<!-- EULER-AS-08-QUESTIONS-END -->

<!-- EULER-AS-08-SOLUTIONS-START -->

<a id="section-523-solutions-to-practice-extensions"></a>

<a id="section-580-a-further-practice-problem"></a>
<a id="section-580-exercise-10"></a>
### Exercise 10 {#section-582-exercise-10}
<a id="simplification-strategies-ex-10"></a>

For real $x$, simplify $E(x)=2(3x-1)-(x+4)-(2x-3)$ and then solve $E(x)=12$. Check your result by substituting into the original expression with all three brackets intact.

<details>
<summary>Hint 1</summary>

**Hint.** Distribute the initial factor and then each of the two subtractions separately.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Collect x terms and constants before solving; the final subtraction changes the sign of the negative constant inside its bracket.

</details>
<details>
<summary>Solution</summary>

**Solution.** The expression becomes $E(x)=6x-2-x-4-2x+3=3x-3$. This identity holds for every real $x$. Thus $E(x)=12$ gives $3x-3=12$, so $3x=15$ and $x=5$. The original brackets give $2(3(5)-1)-(5+4)-(2(5)-3)=2(14)-9-7=28-16=12$. This independent substitution checks the signs in the simplification and confirms the equation solution.

</details>

<a id="section-604-summary"></a>

## Solutions {#section-525-solutions-to-practice-extensions}

<a id="section-525-as-08-e07-solution"></a>
### AS-08-E07 — solution {#section-527-as-08-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The bracket contains $3x-(x-4)=3x-x+4=2x+4$. Thus
$$7-2[3x-(x-4)]=7-2(2x+4)=7-4x-8=-4x-1.$$
The proposed first equality fails to distribute the outer negative multiplier consistently. If expanded directly, the contribution from $-2[-(x-4)]$ is $+2(x-4)=2x-8$, rather than $-2x+8$.

At $x=-1$, the original bracket is $-3-(-5)=2$, so the original expression is $7-2(2)=3$. The correct form gives $-4(-1)-1=3$, while the proposed form gives $15-8(-1)=23$. This disproves equivalence of the proposed form. Even if two expressions agree at some input, agreement at one input does not establish an identity for every real input; the valid distributive steps establish the corrected identity.

</details>

<a id="section-540-as-08-e08-solution"></a>
### AS-08-E08 — solution {#section-542-as-08-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

Both denominators are fixed nonzero numbers, so the domain is all real numbers. A common denominator gives
$$E(x)=\frac{3(x+1)-2(x-2)}6
=\frac{3x+3-2x+4}6=\frac{x+7}6.$$
Consequently $6E(x)=x+7$ is an identity, while $E(x)=x+7$ generally changes the value. For example, at $x=5$ the former expression $E(5)$ equals $2$, not $12$.

The equation $E(x)=2$ can be multiplied on both sides by nonzero $6$, yielding $x+7=12$, so $x=5$. The operation is reversible by division by $6$. Direct substitution into the original expression gives $(5+1)/2-(5-2)/3=3-1=2$, confirming the solution.

</details>

<a id="section-556-as-08-e09-solution"></a>
### AS-08-E09 — solution {#section-558-as-08-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

The original denominator requires $x\ne2$. On that domain,
$$J(x)=\frac{(x-2)(x+2)}{x-2}-(x+1)
=(x+2)-(x+1)=1.$$
The factorisation uses the difference-of-squares identity, and cancellation uses the already recorded nonzero factor $x-2$.

Both $3$ and $-2$ belong to the domain, so $J(3)=J(-2)=1$. Directly, $J(3)=5-4=1$ and $J(-2)=0-(-1)=1$. These are checks of two cases; the factorisation and cancellation justify every allowed input.

At $x=2$ the original quotient is $0/0$, which is undefined. The constant formula $1$ extends to that input, but the original rule does not. Retain $x\ne2$ after simplifying instead of silently replacing the domain by all real numbers.

</details>

<!-- EULER-AS-08-SOLUTIONS-END -->



<a id="section-578-a-further-practice-problem"></a>
