
# Rational Expressions

Sharing a total cost among several people, calculating a journey time from distance and speed, and comparing rates all introduce division. When the quantity underneath the division bar depends on $x$, the algebra must carry information about which inputs are allowed. That information is as much a part of the problem as the numerator and denominator.

Consider $(x^2-9)/(x+3)$. Factorisation suggests the simpler expression $x-3$. For every input except $-3$, the two expressions give the same value. At $-3$, however, the original expression asks us to divide zero by zero and has no value at all. The simplified expression gives $-6$. Simplification has described the permitted values more clearly; it has not supplied permission to add a new input.

This chapter develops that principle for arithmetic, equations and inequalities involving fractions of polynomials. You will learn to record restrictions before cancelling, combine fractions with a common denominator, check possible equation solutions, and use a sign chart without multiplying an inequality by an expression of unknown sign.

Required preparation is [Expressions, Laws and Factorising](expressions-laws-factorising.md), [Functions, Domain and Graphs](functions-domain-graphs.md), [Quadratic Equations](quadratic-equations.md), and [Polynomials and the Factor Theorem](polynomials-factor-theorem.md). Inputs and coefficients are real throughout. We use interval notation: a square bracket includes an endpoint, a round bracket excludes it, and $\cup$ joins sets. Infinity is never an included endpoint.

## A formula together with its domain

**Definition 8.1 (Rational expression and natural domain).** A *rational expression* in $x$ is a quotient

$$
\frac{P(x)}{Q(x)},
$$

where $P$ and $Q$ are real polynomials and $Q$ is not the zero polynomial. Its *natural real domain* consists of the real inputs satisfying $Q(x)\ne0$. A rational function is obtained by using such a formula on a stated domain contained in that set.

The condition that $Q$ is a nonzero polynomial does not say that it has no roots. For example, $Q(x)=x-4$ is a nonzero polynomial, but the fraction $1/(x-4)$ excludes $4$. A denominator $x^2+1$ excludes no real input because it is always positive. A denominator equal to the zero polynomial is not allowed at all.

To find the domain, solve the denominator equation before simplifying. For

$$
\frac{x^2-1}{x^2-5x+6},
$$

the denominator is $(x-2)(x-3)$, so the excluded inputs are $2$ and $3$. The zeros $1$ and $-1$ of the numerator are allowed, and the fraction equals zero there. A zero numerator is harmless when the denominator is nonzero. A zero denominator is never harmless, even if the numerator vanishes at the same input.

In an application there may be further restrictions. If $x$ counts items, $x$ might have to be a positive integer rather than an arbitrary nonzero real number. The algebraic domain gives the inputs at which the formula makes sense; the context then decides which of those inputs represent the situation. State both restrictions when both are relevant.

## Cancelling factors and keeping excluded inputs

**Theorem 8.2 (Cancellation on the original domain).** Let $A,B,C$ be real polynomials, with $B$ and $C$ nonzero polynomials. For every real input for which $B(x)C(x)\ne0$,

$$
\frac{A(x)C(x)}{B(x)C(x)}=\frac{A(x)}{B(x)}.
$$

The equality does not assign a value to the left side at any zero of $B$ or $C$.

*Proof.* Fix an allowed input. Its values $B(x)$ and $C(x)$ are both nonzero real numbers. Ordinary fraction arithmetic permits division of numerator and denominator by the same nonzero number $C(x)$, giving the stated equality. At a zero of either denominator factor, the left side is undefined, so the argument makes no claim there. ∎

Cancellation applies to multiplicative factors, not to separate terms of a sum. Thus

$$
\frac{x(x+4)}{x(x+1)}=\frac{x+4}{x+1}
\quad\text{for }x\ne0,-1
$$

is valid. Crossing out the $x$ terms in $(x+4)/(x+1)$ is invalid: neither numerator nor denominator is a product with factor $x$. One quick way to detect the error is substitution. At $x=1$, the fraction is $5/2$, whereas the proposed result $4$ is different.

A graph can help interpret a retained exclusion. If cancellation removes every denominator factor that vanishes at $r$, and the remaining denominator is nonzero at $r$, then the simplified formula has a value there. The original function's graph follows that formula at nearby allowed inputs but omits the point at $r$. We call that missing point a *hole*. The word describes a missing input and output pair; it does not mean the original fraction has secretly acquired the simplified value.

**Example 8.3 (A hole and a remaining denominator zero).** Simplify

$$
f(x)=\frac{x^2-9}{x^2+x-6}
$$

and describe its excluded inputs. First factor both polynomials:

$$
f(x)=\frac{(x-3)(x+3)}{(x+3)(x-2)}.
$$

The original domain excludes $-3$ and $2$. On that domain we may cancel $x+3$, obtaining

$$
f(x)=\frac{x-3}{x-2},\qquad x\ne-3,2.
$$

The simplified formula would give $6/5$ at $-3$, so the graph has a hole at $(-3,6/5)$. At $2$, the remaining denominator is zero and the numerator is $-1$. There is no finite value supplied by this cancellation. Indeed,

$$
\frac{x-3}{x-2}=1-\frac1{x-2},
$$

so inputs close to $2$ produce outputs with large magnitude. These two excluded inputs have different nearby behaviour, even though both are excluded for the same basic reason: the original denominator vanishes. Finally $x=3$ is allowed and gives $f(3)=0$.

The practical habit is to attach the original restrictions to every simplified answer. Two formulas may agree wherever both are defined and still define different functions on their natural domains. To claim equality of functions, their domains must also agree.

## Arithmetic with rational expressions

**Result 8.4 (Fraction operations with their hypotheses).** At a real input where $B(x)\ne0$ and $D(x)\ne0$,

$$
\frac{A}{B}+\frac{C}{D}=\frac{AD+BC}{BD},
\qquad
\frac{A}{B}-\frac{C}{D}=\frac{AD-BC}{BD},
\qquad
\frac{A}{B}\frac{C}{D}=\frac{AC}{BD}.
$$

Here each letter denotes its value at the same input. Division requires the additional condition $C(x)\ne0$:

$$
\frac{A/B}{C/D}=\frac{AD}{BC}.
$$

*Proof.* At an allowed input, all denominators in the addition and multiplication rules are nonzero real numbers. Multiplying the first fraction by $D/D=1$ and the second by $B/B=1$ gives the common denominator $BD$, proving the sum and difference rules. Multiplying numerators and denominators gives the product rule. For division, $C/D$ must itself be nonzero. Under the additional condition $C\ne0$, its reciprocal is $D/C$, and multiplication gives $AD/(BC)$. Every step is ordinary real-number arithmetic applied at an allowed input. ∎

A convenient common denominator need not be the full product. For denominators $(x-1)(x+2)$ and $(x+2)(x+3)$, the product $(x-1)(x+2)(x+3)$ is enough. It contains each required factor with at least the needed multiplicity. Using the full product remains valid, but may create unnecessary expansion. Whichever common denominator you choose, multiply the entire numerator by the missing factor.

Division deserves a separate restrictions list. There are three questions: is the first fraction defined, is the second fraction defined, and is the second fraction nonzero? Replacing division with multiplication by a reciprocal can make an original denominator disappear. Its original zeros remain forbidden.

**Example 8.5 (Three operations, three domain records).** First subtract

$$
\frac2{x-1}-\frac3{x+2}.
$$

The domain excludes $1$ and $-2$. Using the common denominator $(x-1)(x+2)$ gives

$$
\frac{2(x+2)-3(x-1)}{(x-1)(x+2)}
=\frac{7-x}{(x-1)(x+2)},\qquad x\ne1,-2.
$$

The subtraction affects the whole numerator $3(x-1)$; brackets prevent a sign error.

Next multiply

$$
\frac{x^2-4}{x^2-x-2}\cdot\frac{x-2}{x+2}.
$$

The first denominator is $(x-2)(x+1)$ and the second is $x+2$, so $2,-1,-2$ are excluded. Factoring before expanding gives

$$
\frac{(x-2)(x+2)}{(x-2)(x+1)}\cdot\frac{x-2}{x+2}
=\frac{x-2}{x+1},\qquad x\ne2,-1,-2.
$$

The final formula alone would hide two original exclusions.

Finally divide

$$
\frac{x^2-9}{x^2-4}\div\frac{x-3}{x+2}.
$$

The fractions require $x\ne2,-2$. The divisor must also be nonzero, which excludes $3$. Now take its reciprocal and cancel factors:

$$
\frac{(x-3)(x+3)}{(x-2)(x+2)}\cdot\frac{x+2}{x-3}
=\frac{x+3}{x-2},\qquad x\ne-2,2,3.
$$

At $3$ both displayed fractions are individually defined, but the second is zero. That is why checking denominators alone would miss one restriction in this division problem.

## Equations: possible solutions and actual solutions

**Theorem 8.6 (Clearing denominators on a permitted domain).** Suppose an equation consists of sums and differences of rational expressions. Let $S$ be their common permitted domain, and choose a polynomial $L$ that is a multiple of every denominator and has no zeros on $S$. For each $x\in S$, the original equation holds if and only if the equation obtained by multiplying both sides by $L(x)$ holds.

*Proof.* Fix $x\in S$. All terms are defined and $L(x)\ne0$. Multiplication by that nonzero real number preserves an equality, and division by it reverses the step. Thus the two equations are equivalent at this input. This reasoning applies to every input in $S$, but supplies no equivalence at an excluded input. ∎

The theorem explains the standard method. First find the common domain. Multiply by a common denominator. Solve the resulting equation, then retain only the solutions that belong to the original domain and satisfy the original equation. The polynomial equation may make sense at excluded inputs, which are therefore possible algebraic answers to that new equation without being solutions of the original problem.

**Example 8.7 (Two valid solutions).** Solve

$$
\frac1{x-1}+\frac2{x+1}=1.
$$

The domain excludes $1$ and $-1$. On that domain, multiply by $(x-1)(x+1)$:

$$
(x+1)+2(x-1)=x^2-1.
$$

The left side is $3x-1$, so the equation becomes $x^2-3x=0$, or $x(x-3)=0$. The possible solutions are $0$ and $3$, both allowed. Check them in the original equation. At $0$, the left side is $-1+2=1$. At $3$, it is $1/2+2/4=1$. Thus the solution set is $\{0,3\}$. These substitutions both confirm the result and catch any arithmetic error in clearing denominators.

**Example 8.8 (An excluded possible solution).** Solve

$$
\frac{x^2-1}{x-1}=2.
$$

First record $x\ne1$. Clearing the denominator gives $x^2-1=2x-2$, so

$$
x^2-2x+1=(x-1)^2=0.
$$

Its only possible solution is $1$, but that input is excluded. The original equation has no solution. The simplified route says the same thing: the left side is $x+1$ for $x\ne1$, so obtaining the value $2$ would require precisely the forbidden input. Writing “$x=1$” without the final domain check would answer a different equation.

If denominators are cleared within the permitted domain, the step itself has introduced no error. The mistake is forgetting that domain when solving the new polynomial equation. A check in the original equation is a useful final safeguard, particularly when several cancellations have occurred.

## Inequalities: where the sign is reliable

For equations, multiplying both sides by a nonzero quantity preserves equality regardless of whether it is positive or negative. For inequalities, that distinction matters. Multiplication by a negative number reverses the inequality sign. If a denominator depends on $x$, its sign may differ across the number line. Blindly multiplying by it therefore loses information.

**Result 8.9 (Sign rule for a quotient).** At every real input where $Q(x)\ne0$, the quotient $P(x)/Q(x)$ is positive when $P(x)$ and $Q(x)$ have the same nonzero sign, negative when they have opposite signs, and zero exactly when $P(x)=0$.

*Proof.* Since $Q(x)^2>0$, write

$$
\frac{P(x)}{Q(x)}=\frac{P(x)Q(x)}{Q(x)^2}.
$$

Division by a positive number preserves sign. The usual product-sign rules give all three conclusions. This argument also shows that multiplying an inequality by $Q(x)^2$ is safe on the original domain, although retaining factored signs is often simpler. ∎

To solve a rational inequality, move every term to one side and combine it into a single fraction. Record its original excluded inputs. Factor the numerator and denominator where possible, and list all their real zeros in increasing order. They divide the line into open intervals. On each interval, a linear factor $x-r$ has a fixed sign: negative to the left of $r$, positive to the right. Even powers are positive away from their zeros; odd powers keep the base's sign. Multiplying these factor signs determines the quotient's sign throughout the interval.

For the problems here, the factors are linear, powers of linear factors, or quadratics whose sign is established by completing the square. For instance, $x^2+1$ is always positive and contributes no dividing point. A sample input can help organise a chart, but the factor signs explain why the answer holds on the whole interval. Sampling an arbitrary expression without explaining why its sign stays fixed would not be a proof.

Finally inspect endpoints separately. A numerator zero may be included for $\ge$ or $\le$, provided it is allowed by the original domain. It is excluded for a strict inequality. Every original denominator zero stays excluded, whether or not a factor has cancelled.

**Example 8.10 (A complete sign chart).** Solve

$$
\frac{(x+2)(x-1)}{x-3}\ge0.
$$

The domain excludes $3$. The relevant numbers are $-2$, $1$ and $3$. The chart records signs on the four open intervals:

| Factor or quotient | $x<-2$ | $-2<x<1$ | $1<x<3$ | $x>3$ |
| --- | --- | --- | --- | --- |
| $x+2$ | $-$ | $+$ | $+$ | $+$ |
| $x-1$ | $-$ | $-$ | $+$ | $+$ |
| $x-3$ | $-$ | $-$ | $-$ | $+$ |
| Quotient | $-$ | $+$ | $-$ | $+$ |

The nonnegative intervals are the second and fourth, together with any allowed zero endpoints. At $-2$ and $1$ the numerator vanishes and the denominator does not, so both are included. At $3$ the expression is undefined. The solution set is

$$
[-2,1]\cup(3,\infty).
$$

The chart uses exact factor signs, so it describes every input in each interval. No approximate graph or guess about where the curve crosses is required.

**Example 8.11 (Comparing two fractions).** Solve

$$
\frac1{x-1}\le\frac2{x+1}.
$$

The domain excludes $-1$ and $1$. Move the right side to the left and combine:

$$
\frac1{x-1}-\frac2{x+1}
=\frac{x+1-2(x-1)}{(x-1)(x+1)}
=\frac{3-x}{(x-1)(x+1)}\le0.
$$

The important inputs are $-1,1,3$. The numerator is positive before $3$ and negative after $3$. The denominator is positive outside $[-1,1]$ and negative between $-1$ and $1$. Therefore the quotient has signs $+,-,+,-$ on the four successive intervals. We include the negative intervals and the allowed zero at $3$, obtaining

$$
(-1,1)\cup[3,\infty).
$$

Cross multiplication without considering signs would have compared $x+1$ with $2(x-1)$ in the same direction everywhere, missing the entire interval $(-1,1)$. Bringing the comparison to a single quotient keeps the sign information visible.

## Errors worth recognising

Cancellation never changes which inputs the original question permitted. A cancelled factor can remove an obstacle to calculating nearby values while leaving a hole at its zero. Also, subtraction of fractions requires a common denominator and brackets around a multi-term numerator: $1/x+1/y$ is $(x+y)/(xy)$ for $x,y\ne0$, not $2/(x+y)$.

A fraction is zero exactly when its numerator is zero and its denominator is nonzero. A fraction with both numerator and denominator zero is undefined. In division, a zero divisor is forbidden even if taking its reciprocal would make the written expression look simpler. In inequalities, an undefined point can never become an included endpoint. These statements all follow from real-number division; treating them as one coherent principle is more reliable than memorising separate exceptions.

## Exercises

### Exercise 8.1
<a id="rational-expressions-ex-1"></a>

Find the domain of $(x^2-16)/(x^2-2x-8)$, simplify it with its restrictions, and identify any hole.

<details>
<summary>Hint 1</summary>

Factor the original denominator before cancelling anything.

</details>
<details>
<summary>Hint 2</summary>

Evaluate the simplified formula at a cancelled denominator zero only to locate a missing point, not to add an allowed input.

</details>
<details>
<summary>Solution</summary>

Factorisation gives

$$
\frac{(x-4)(x+4)}{(x-4)(x+2)}.
$$

The original denominator vanishes at $4$ and $-2$, so the domain is $\mathbb R\setminus\{4,-2\}$. On that domain the fraction equals $(x+4)/(x+2)$. At $4$ this simpler formula gives $8/6=4/3$, so the hole is $(4,4/3)$. The remaining denominator is still zero at $-2$, where the simpler formula supplies no value.

</details>

### Exercise 8.2
<a id="rational-expressions-ex-2"></a>

Explain why cancelling the $x$ terms to turn $(x+6)/(x+2)$ into $3$ is invalid. Rewrite the original fraction as a constant plus a simpler fraction, and determine the allowed inputs at which it actually equals $3$.

<details>
<summary>Hint 1</summary>

Cancellation concerns common factors of entire numerators and denominators.

</details>
<details>
<summary>Hint 2</summary>

Write $x+6=(x+2)+4$ before separating the fraction.

</details>
<details>
<summary>Solution</summary>

The terms $x$ are parts of sums, not common multiplicative factors, so they cannot be cancelled. For example, at $x=1$ the fraction is $7/3$, not $3$. The valid rewriting is

$$
\frac{x+6}{x+2}=1+\frac4{x+2},\qquad x\ne-2.
$$

For this to equal $3$, we need $4/(x+2)=2$. On the domain, multiplying by $x+2$ gives $4=2x+4$, hence $x=0$. It is allowed and gives $6/2=3$. Agreement at this one input does not make the invalid simplification an identity.

</details>

### Exercise 8.3
<a id="rational-expressions-ex-3"></a>

Combine $3/(x-2)+1/(x+2)$ into one fraction, retaining its domain restrictions. Find the zero of the resulting function.

<details>
<summary>Hint 1</summary>

Use $(x-2)(x+2)$ as a common denominator.

</details>
<details>
<summary>Hint 2</summary>

A numerator zero gives a function zero only if it is not an excluded input.

</details>
<details>
<summary>Solution</summary>

The domain excludes $2$ and $-2$. On that domain,

$$
\frac{3(x+2)+(x-2)}{(x-2)(x+2)}
=\frac{4x+4}{x^2-4}
=\frac{4(x+1)}{(x-2)(x+2)}.
$$

The numerator vanishes at $x=-1$, which is allowed. Thus $-1$ is the only zero. Checking in the original sum gives $3/(-3)+1/1=0$, confirming the result directly.

</details>

### Exercise 8.4
<a id="rational-expressions-ex-4"></a>

Simplify $\dfrac{x^2-1}{x^2-4}\cdot\dfrac{x-2}{x+1}$ and give all original excluded inputs.

<details>
<summary>Hint 1</summary>

Both quadratics are differences of squares.

</details>
<details>
<summary>Hint 2</summary>

List restrictions from both original denominators, even when their factors later cancel.

</details>
<details>
<summary>Solution</summary>

The denominators exclude $-2,2,-1$. Factoring and multiplying gives

$$
\frac{(x-1)(x+1)}{(x-2)(x+2)}\cdot\frac{x-2}{x+1}
=\frac{x-1}{x+2},\qquad x\ne-2,2,-1.
$$

The formula on the right would be defined at $2$ and $-1$, but the original product is not. Cancellation establishes agreement only on the original common domain.

</details>

### Exercise 8.5
<a id="rational-expressions-ex-5"></a>

Simplify $\dfrac{x^2-1}{x-3}\div\dfrac{x+1}{x-3}$. Explain all restrictions, including the restriction created by division.

<details>
<summary>Hint 1</summary>

Check that each fraction is defined before asking whether the divisor is nonzero.

</details>
<details>
<summary>Hint 2</summary>

For $x\ne3$, the second fraction vanishes exactly when $x+1=0$.

</details>
<details>
<summary>Solution</summary>

Both denominators require $x\ne3$. Division further requires $(x+1)/(x-3)\ne0$, so $x\ne-1$. For allowed inputs,

$$
\frac{(x-1)(x+1)}{x-3}\cdot\frac{x-3}{x+1}=x-1.
$$

The answer is $x-1$ with $x\ne3,-1$. At $3$ the original fractions are undefined. At $-1$ they are defined but the divisor is zero. These are different reasons for exclusion, and both must survive the simplification.

</details>

### Exercise 8.6
<a id="rational-expressions-ex-6"></a>

Solve $3/(x-2)=x$ over the real numbers and check each possible solution in the original equation.

<details>
<summary>Hint 1</summary>

Record the excluded input, then multiply by the denominator on the permitted domain.

</details>
<details>
<summary>Hint 2</summary>

Bring all terms to one side and factor the resulting quadratic.

</details>
<details>
<summary>Solution</summary>

The domain is $x\ne2$. Clearing the denominator gives $3=x(x-2)$, so $x^2-2x-3=(x-3)(x+1)=0$. The possible solutions are $3$ and $-1$, neither excluded. At $3$, $3/(3-2)=3$; at $-1$, $3/(-1-2)=-1$. Both satisfy the original equation, so the solution set is $\{-1,3\}$.

</details>

### Exercise 8.7
<a id="rational-expressions-ex-7"></a>

Solve $(x^2-4)/(x-2)=4$. Explain why solving the equation obtained by clearing the denominator is not the final step.

<details>
<summary>Hint 1</summary>

Keep $x\ne2$ visible throughout the calculation.

</details>
<details>
<summary>Hint 2</summary>

The polynomial equation after clearing denominators has a repeated root.

</details>
<details>
<summary>Solution</summary>

The original domain excludes $2$. On that domain, clearing the denominator gives $x^2-4=4x-8$, hence $(x-2)^2=0$. Its only possible solution, $2$, is forbidden, so there are no solutions. Alternatively the original left side simplifies to $x+2$ for $x\ne2$, and $x+2=4$ again demands the excluded input. The cleared equation can be evaluated at $2$, but the original one cannot.

</details>

### Exercise 8.8
<a id="rational-expressions-ex-8"></a>

Solve $(x+1)/(x-2)>0$ using a sign chart, explaining the treatment of both important endpoints.

<details>
<summary>Hint 1</summary>

The numerator zero and denominator zero split the number line at $-1$ and $2$.

</details>
<details>
<summary>Hint 2</summary>

The quotient is positive when numerator and denominator have the same sign.

</details>
<details>
<summary>Solution</summary>

For $x<-1$, both factors are negative, giving a positive quotient. For $-1<x<2$, the numerator is positive and the denominator negative, giving a negative quotient. For $x>2$, both are positive. At $-1$ the quotient is zero, so the strict inequality excludes it. At $2$ the quotient is undefined, so it must also be excluded. The solution is $(-\infty,-1)\cup(2,\infty)$.

</details>

### Exercise 8.9
<a id="rational-expressions-ex-9"></a>

Solve $\dfrac{(x-1)^2}{(x+2)(x-3)}\le0$. Explain why the sign does not reverse at $1$.

<details>
<summary>Hint 1</summary>

Away from $1$, the squared numerator is positive, so the denominator determines the quotient's sign.

</details>
<details>
<summary>Hint 2</summary>

Check the value at $1$ separately, and exclude both denominator zeros.

</details>
<details>
<summary>Solution</summary>

The denominator is positive for $x<-2$, negative for $-2<x<3$, and positive for $x>3$. The numerator is positive except at $1$, where it is zero. Thus the quotient is negative on $(-2,1)$ and $(1,3)$, positive outside $[-2,3]$, and zero at $1$. The allowed nonpositive set is the whole interval $(-2,3)$. Both endpoints are excluded because the denominator vanishes. The sign does not reverse at $1$ because $(x-1)^2$ has an even power; it is positive on both nearby sides.

</details>

### Exercise 8.10
<a id="rational-expressions-ex-10"></a>

Solve $(x^2-1)/(x-1)\ge0$. Give an answer in interval notation that explicitly retains any hole.

<details>
<summary>Hint 1</summary>

Factor and cancel only after recording the original restriction.

</details>
<details>
<summary>Hint 2</summary>

Solve the simplified inequality, then remove the original forbidden input even if the simplified value there is positive.

</details>
<details>
<summary>Solution</summary>

The original domain excludes $1$. Since $x^2-1=(x-1)(x+1)$, the inequality is equivalent on that domain to $x+1\ge0$, giving $x\ge-1$ with $x\ne1$. Hence the solution is

$$
[-1,1)\cup(1,\infty).
$$

The input $-1$ is allowed and gives zero, so it is included. The input $1$ would give the simplified value $2$, but the original expression is undefined there. Its hole must remain absent from the solution set.

</details>

## Summary

A rational expression is a quotient of polynomials with a nonzero denominator polynomial, and its permitted inputs exclude every zero of the original denominator. Cancellation removes common factors only on that domain; it can reveal a hole without filling it. Addition and multiplication use the common domain of the fractions, while division also excludes every zero of the divisor. Clearing denominators produces an equivalent equation on the permitted domain, so possible solutions must be checked there. Rational inequalities are solved by following signs across numerator zeros and undefined points, keeping original exclusions even after cancellation. The next chapter extends the algebraic toolkit to surds and noninteger indices, where stating real domains remains just as important.

## Sources

This chapter's exposition, proofs, worked examples and exercises are original. For additional explanations of the standard topics, see OpenStax, *Algebra and Trigonometry 2e*: [1.6 Rational Expressions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-6-rational-expressions), [5.6 Rational Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-6-rational-functions), and [2.6 Other Types of Equations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-6-other-types-of-equations). These primary-source pages were consulted on 13 November 2026; no passages or exercises have been copied.
