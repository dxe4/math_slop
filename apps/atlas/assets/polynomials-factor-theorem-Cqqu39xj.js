var e=`---
parent_id: book-algebra-and-functions
chapter_id: polynomials-factor-theorem
title: "Polynomials and the Factor Theorem"
level: secondary
license: "CC BY-SA 4.0"
---

# Polynomials and the Factor Theorem

A quadratic equation can be solved by completing the square or using the quadratic formula. What should we do with a cubic such as $x^3-2x^2-5x+6=0$? Expanding brackets is straightforward, but reversing an expansion can hide the structure we need. This chapter develops a bridge between evaluating a polynomial at one number and finding one of its factors. Once one linear factor is known, division reduces the problem to a lower degree.

The central question is simple: how much information does the value $P(r)$ give about the whole expression $P(x)$? We shall prove that it gives exactly the remainder on division by $x-r$. A zero value therefore certifies a factor. This is an algebraic fact about every input, rather than a conclusion drawn from the appearance of a graph.

Required preparation is [Expressions, Laws and Factorising](expressions-laws-factorising.md), [Functions, Domain and Graphs](functions-domain-graphs.md), and [Quadratic Equations](quadratic-equations.md). The discussion of crossings connects with [Quadratic Functions](quadratic-functions.md). Throughout the chapter, coefficients and inputs are real numbers. A *polynomial identity* is an equality that holds for every real input. An equation asking us to find particular inputs is a different kind of statement.

By the end, you should be able to organise a polynomial by degree, divide by a nonzero polynomial, prove and apply the remainder and factor theorems, and describe the sign near a repeated root. No calculus or abstract algebra is needed.

## Recognising the object

**Definition 7.1 (Polynomial, degree and leading coefficient).** A polynomial in $x$ is a finite sum of terms $a_kx^k$, where each coefficient $a_k$ is real and each exponent $k$ is a nonnegative integer. A nonzero polynomial written in descending powers has the form

$$
P(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0,
\\qquad a_n\\ne0.
$$

Its *degree* is $n$, its *leading coefficient* is $a_n$, and its *constant term* is $a_0$. A polynomial with leading coefficient $1$ is called *monic*.

Terms with zero coefficients may be omitted, but their places still matter. Thus $4x^4-7x+2$ has degree $4$, leading coefficient $4$, and zero coefficients for $x^3$ and $x^2$. Writing these missing terms explicitly is often useful in division. The leading term means the term of highest degree after like terms have been collected; it need not be the first term someone happened to write.

A nonzero constant, such as $-5$, has degree $0$, since it is $-5x^0$. The *zero polynomial*, all of whose coefficients are zero, needs separate treatment. We do not assign it a degree or leading coefficient in this chapter. It is not a degree-zero polynomial. For example, $x^2-x^2$ is the zero polynomial after simplification, whereas $x^2-x$ has degree $2$. This distinction prevents mistakes in degree arguments.

The expression $x^{-1}+2$ is not a polynomial in $x$, because $-1$ is not a permitted exponent. Neither is $\\sqrt{x}+3$. A real coefficient may itself be a square root: $\\sqrt{2}x^3-\\frac12x$ is a polynomial. The restriction concerns powers of the variable, not whether coefficients are whole numbers. A polynomial is defined for every real input; no division by a variable or square root of a variable appears in its definition.

**Result 7.2 (Degrees under multiplication).** If $A$ and $B$ are nonzero polynomials of degrees $m$ and $n$, then $AB$ has degree $m+n$, and its leading coefficient is the product of their leading coefficients.

*Proof.* Write the leading terms as $ax^m$ and $bx^n$, with $a,b\\ne0$. Their product is $abx^{m+n}$. Every other product of terms has a smaller exponent, so nothing else can cancel this term. Since a product of nonzero real numbers is nonzero, the claimed leading term survives. ∎

For sums, cancellation is possible: $(x^3+x)+(-x^3+2)=x+2$. Consequently we cannot generally add degrees when adding polynomials. Degree describes the final expression, not the amount of algebra used to produce it.

**Example 7.3 (Organising before calculating).** Find the degree and leading coefficient of

$$
(2x^2-3)(x^3+x)-2x^5.
$$

Multiplication alone would give a degree-five expression with leading coefficient $2$, but the final subtraction may cancel that term. Expand carefully:

$$
(2x^2-3)(x^3+x)=2x^5+2x^3-3x^3-3x
=2x^5-x^3-3x.
$$

After subtracting $2x^5$, the polynomial is $-x^3-3x$. Its degree is $3$ and its leading coefficient is $-1$. The example shows why the product rule applies to a product, while a later addition or subtraction requires a fresh look.

## Division as an identity

Ordinary integer division records both a quotient and a remainder. Polynomial division has the same purpose, but the stopping condition compares degrees rather than sizes. A negative remainder is perfectly acceptable. We do not require a remainder to be positive or numerically smaller than the divisor at every input.

**Theorem 7.4 (Polynomial division).** Let $P$ be any real polynomial and let $D$ be a nonzero real polynomial. There are unique polynomials $Q$ and $R$ such that

$$
P(x)=D(x)Q(x)+R(x),
$$

where $R=0$ or $\\deg R<\\deg D$. The polynomials $Q$ and $R$ are the *quotient* and *remainder*.

*Proof.* First suppose $D$ is nonconstant. If $P=0$, take $Q=R=0$. If $P$ has smaller degree than $D$, take $Q=0$ and $R=P$. Otherwise, let the current leading term be $cx^s$ and the divisor's leading term be $dx^t$, where $d\\ne0$ and $s\\ge t$. Subtract

$$
\\frac{c}{d}x^{s-t}D(x)
$$

from the current polynomial. The leading term cancels. What remains is zero or has smaller degree. Keep a running sum of the terms $(c/d)x^{s-t}$ used in these subtractions. Degrees are nonnegative integers and decrease at each nonterminal step, so eventually the remaining polynomial has degree below $t$, or is zero. The running sum is $Q$ and the final remainder is $R$; reversing the subtractions gives the identity.

If $D$ is a nonzero constant $d$, take $Q=P/d$ and $R=0$. This also covers division of the zero polynomial.

For uniqueness, suppose $DQ+R=D\\widetilde Q+\\widetilde R$ are two permitted representations. Then

$$
D(Q-\\widetilde Q)=\\widetilde R-R.
$$

If $Q-\\widetilde Q$ were nonzero, the multiplication rule would make the left side have degree at least $\\deg D$. The right side is either zero or has smaller degree than $D$, which is impossible. Thus $Q=\\widetilde Q$, and then $R=\\widetilde R$. For a constant divisor the required remainder is zero, so uniqueness follows directly. ∎

The divisor must be a nonzero *polynomial*. It may equal zero at some inputs; for instance, $x-2$ is a valid divisor even though it vanishes at $2$. The resulting polynomial identity still holds at those inputs. Only the fraction version

$$
\\frac{P(x)}{D(x)}=Q(x)+\\frac{R(x)}{D(x)}
$$

requires $D(x)\\ne0$. Keeping the identity separate from this fraction version will matter in the next chapter.

**Example 7.5 (Long division with a nonmonic divisor).** Divide $2x^3+3x^2-8x+6$ by $2x-1$.

The leading terms give $2x^3/(2x)=x^2$. Subtract $(2x-1)x^2=2x^3-x^2$ from the dividend. The first remainder is $4x^2-8x+6$. Its leading term divided by $2x$ is $2x$, so subtract $(2x-1)2x=4x^2-2x$. This leaves $-6x+6$. Finally subtract $(2x-1)(-3)=-6x+3$, leaving $3$.

The quotient is $x^2+2x-3$ and the remainder is $3$:

$$
2x^3+3x^2-8x+6=(2x-1)(x^2+2x-3)+3.
$$

The remainder is constant, so its degree is below the divisor's degree $1$. Multiplying the right side back out checks every coefficient. Subtraction deserves care: subtracting $4x^2-2x$ changes the signs of both terms. An error in the $x$ coefficient usually comes from forgetting those brackets.

For a divisor $ax-b$, we require $a\\ne0$ to call it linear. Its zero is $b/a$. The leading coefficient $a$ cannot be ignored when forming the quotient, although substitution at $b/a$ will still identify its constant remainder.

## From one value to a factor

**Theorem 7.6 (Remainder theorem).** If $P$ is a real polynomial and $r$ is a real number, the remainder when $P(x)$ is divided by $x-r$ is $P(r)$.

*Proof.* The divisor $x-r$ has degree $1$. Polynomial division therefore gives

$$
P(x)=(x-r)Q(x)+c
$$

for a constant $c$, including $c=0$. Substitute $x=r$ into this identity. Since a polynomial is defined at every real input,

$$
P(r)=(r-r)Q(r)+c=c.
$$

Thus the constant remainder is $P(r)$. The substitution is into an identity, not into a fraction with denominator zero. ∎

**Theorem 7.7 (Factor theorem).** For a real polynomial $P$ and real number $r$, $P(r)=0$ if and only if there is a polynomial $Q$ such that

$$
P(x)=(x-r)Q(x).
$$

In that case $r$ is called a *root* or *zero* of $P$, and $x-r$ is a factor of $P$.

*Proof.* If $P(r)=0$, the remainder theorem gives a zero remainder on division by $x-r$, so the division identity is precisely $P=(x-r)Q$. Conversely, if $P=(x-r)Q$, substitution at $r$ gives $P(r)=0\\cdot Q(r)=0$. Both directions are needed: a root supplies a factor, and a factor supplies a root. ∎

The sign in the factor matters. Testing $r=-3$ tests the factor $x+3$, because $x-(-3)=x+3$. A nonzero value of $P(r)$ rules out that one factor; it does not rule out all factorisations. A graph that seems to cross near $r$ only suggests where to investigate. Exact substitution can certify the proposed root.

**Example 7.8 (Reducing a cubic to a quadratic).** Solve

$$
P(x)=x^3-2x^2-5x+6=0
$$

over the real numbers. Small integer trials are convenient here. Since $P(1)=1-2-5+6=0$, the factor theorem gives a factor $x-1$.

Divide by $x-1$. Subtract $x^2(x-1)$ to leave $-x^2-5x+6$; subtract $-x(x-1)$ to leave $-6x+6$; subtract $-6(x-1)$ to leave zero. Thus

$$
P(x)=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2).
$$

A product of real numbers is zero exactly when at least one factor is zero. Hence the solutions are $1$, $3$ and $-2$. Each appears in the complete factorisation, so no other real solution remains. Notice the difference between a trial and a proof: the trial $P(1)=0$ identifies one factor; division and the quadratic factorisation account for the rest.

Integer trials are not a promise of success. For example, $x^2-2$ has no integer roots but has two real roots, $\\sqrt2$ and $-\\sqrt2$. The polynomial $x^2+1$ has no real roots, since its value is at least $1$. We shall not assume that every polynomial splits into real linear factors. A factorisation such as $(x-2)(x^2+1)$ is already enough to identify its only real root.

## Repeated roots and nearby signs

**Definition 7.9 (Multiplicity).** Let $P$ be a nonzero polynomial with root $r$. The root has *multiplicity* $m$ if

$$
P(x)=(x-r)^mG(x),\\qquad G(r)\\ne0,
$$

where $m$ is a positive integer. Equivalently, $x-r$ can be removed as a factor exactly $m$ times. Repeated division terminates because each removal lowers degree. Multiplicity is not assigned this way to roots of the zero polynomial, for which division could continue indefinitely.

For $(x-4)^2(x+1)$, the root $4$ has multiplicity $2$ and the root $-1$ has multiplicity $1$. Multiplicity counts factors, not different locations on the number line. The polynomial has three linear factors when repetitions are counted, but only two distinct roots.

**Proposition 7.10 (Sign at a repeated root).** Suppose $P(x)=(x-r)^mG(x)$ and $G(r)\\ne0$. For inputs sufficiently close to $r$ on either side, $P$ changes sign across $r$ exactly when $m$ is odd. For even $m$, its signs on the two sides agree.

*Proof.* First justify that $G$ keeps the sign of $G(r)$ near $r$. Expanding the polynomial in the input $r+h$ and collecting powers of $h$ gives

$$
G(r+h)=G(r)+hH(h)
$$

for some polynomial $H$. Write its coefficients as $b_0,\\ldots,b_k$. Whenever $|h|\\le1$, each $|h^j|\\le1$, so $|H(h)|\\le M$, where $M=|b_0|+\\cdots+|b_k|$; if $H=0$, take $M=0$. Choose

$$
0<|h|<\\min\\left(1,\\frac{|G(r)|}{2(M+1)}\\right).
$$

Then $|hH(h)|<|G(r)|/2$, so the added term cannot reverse the sign of the nonzero number $G(r)$. Thus $G(r+h)$ has the same sign on both sides of $r$ sufficiently nearby. Meanwhile $h^m$ is positive on both sides if $m$ is even, and negative on the left and positive on the right if $m$ is odd. Multiplying these signs proves the result. ∎

This argument supplies the needed small-change fact directly; it does not assume a calculus theorem. In graph language, an odd-multiplicity root crosses the horizontal axis, while an even-multiplicity root touches it and stays on the same side nearby. The claim concerns sign, not a scale drawing or the exact shape of the curve. A crossing at a triple root can look much flatter than a crossing at a simple root.

**Example 7.11 (Reading signs from factors).** Consider

$$
F(x)=-2(x+1)^2(x-3)^3.
$$

The leading coefficient is $-2$ and the degree is $5$. At $-1$, the squared factor vanishes, but $(x-3)^3$ is negative for nearby inputs on both sides. Away from the root the square is positive, so the product with $-2$ is positive on both sides. There is no sign change there.

At $3$, the factor $(x+1)^2$ is positive nearby. The cube is negative just to the left and positive just to the right. Multiplication by $-2$ makes $F$ positive to the left and negative to the right. This root has odd multiplicity and changes sign. In fact the same factor analysis gives $F(x)>0$ for every $x<3$ except $x=-1$, where $F$ is zero, and $F(x)<0$ for $x>3$.

## What degree does and does not tell us

**Theorem 7.12 (Bound on distinct roots).** A nonzero polynomial of degree $n$ has at most $n$ distinct real roots.

*Proof.* A nonzero constant has no roots. For degree $n\\ge1$, if there are no roots there is nothing to prove. Otherwise choose a root $r$. The factor theorem writes $P=(x-r)Q$, where the product-degree rule gives $\\deg Q=n-1$. Any other root $s\\ne r$ satisfies $0=(s-r)Q(s)$; since $s-r\\ne0$, it must satisfy $Q(s)=0$. Repeating the argument, or using induction on degree, leaves room for at most $n-1$ other distinct roots. Including $r$ gives at most $n$. ∎

“At most” cannot be replaced by “exactly” for real roots. The degree-four polynomial $(x^2+1)^2$ has none. The polynomial $(x-2)^4$ has one distinct real root, with multiplicity four. Also, a nonzero polynomial cannot vanish on an entire interval: that would provide more distinct roots than its degree permits. The zero polynomial is the explicit exception, since every real input makes it zero.

Common mistakes have a common cause: replacing a statement with a stronger one. Zero remainder means divisibility; a nonzero constant remainder does not. One verified root is one verified factor; it is not a complete solution of a cubic. A repeated root is one location with several factors; it is not several distinct intercepts. Keep the exact statement beside each calculation, and use multiplication to check a proposed factorisation.

## Exercises

### Exercise 7.1
<a id="polynomials-factor-theorem-ex-1"></a>

Classify $3x^4-x+2$, $2/x+1$, $\\sqrt3x^2$, $7$, and $x^2-x^2$ as polynomials or nonpolynomials in $x$. Give degree and leading coefficient whenever defined.

<details>
<summary>Hint 1</summary>

Look at exponents of the variable after simplifying, rather than at whether coefficients are integers.

</details>
<details>
<summary>Hint 2</summary>

A nonzero constant and the zero polynomial require different answers about degree.

</details>
<details>
<summary>Solution</summary>

The first expression is a polynomial of degree $4$ and leading coefficient $3$. The expression $2/x+1=2x^{-1}+1$ is not a polynomial. The expression $\\sqrt3x^2$ is a polynomial of degree $2$ and leading coefficient $\\sqrt3$; an irrational coefficient is allowed. The constant $7$ is a degree-zero polynomial with leading coefficient $7$. Finally $x^2-x^2=0$ is the zero polynomial; under this chapter's convention it has neither a degree nor a leading coefficient. Simplifying first is essential in the last case.

</details>

### Exercise 7.2
<a id="polynomials-factor-theorem-ex-2"></a>

Without expanding first, find the degree and leading coefficient of $(3x^2-1)(2x^3+x+4)$. Then find its constant term and explain why addition of the degrees was justified.

<details>
<summary>Hint 1</summary>

Identify the leading term of each nonzero factor.

</details>
<details>
<summary>Hint 2</summary>

The constant term can also be obtained by evaluating the product at zero.

</details>
<details>
<summary>Solution</summary>

The leading terms multiply to $(3x^2)(2x^3)=6x^5$. Every other product has smaller degree, so the degree is $5$ and the leading coefficient is $6$. At $x=0$ the factors are $-1$ and $4$, giving constant term $-4$. Adding degrees is valid because both factors are nonzero polynomials and the operation is multiplication. It would not in general be valid for their sum, where leading terms might cancel.

</details>

### Exercise 7.3
<a id="polynomials-factor-theorem-ex-3"></a>

Divide $x^3+2x^2+0x-5$ by $x+1$, and state a polynomial identity expressing the result.

<details>
<summary>Hint 1</summary>

Keep the zero coefficient of $x$ in its place when subtracting.

</details>
<details>
<summary>Hint 2</summary>

After subtracting $x^2(x+1)$, the next leading term is $x^2$.

</details>
<details>
<summary>Solution</summary>

Subtracting $x^2(x+1)$ leaves $x^2-5$. Subtracting $x(x+1)$ then leaves $-x-5$. Finally subtracting $-(x+1)$ leaves $-4$. Thus $Q=x^2+x-1$ and $R=-4$, and

$$
x^3+2x^2-5=(x+1)(x^2+x-1)-4.
$$

Multiplication gives $x^3+2x^2-1$ before subtracting $4$, confirming the identity. A negative remainder is permitted because the required condition is its degree, not its sign.

</details>

### Exercise 7.4
<a id="polynomials-factor-theorem-ex-4"></a>

Find the remainder when $P(x)=x^3+2x^2-5x+4$ is divided by $x+2$. Is $x+2$ a factor?

<details>
<summary>Hint 1</summary>

Write $x+2$ as $x-r$ to determine the substitution.

</details>
<details>
<summary>Hint 2</summary>

A factor requires a zero remainder, not merely a small remainder.

</details>
<details>
<summary>Solution</summary>

Here $r=-2$. The remainder theorem gives $P(-2)=-8+8+10+4=14$. Since this is nonzero, $x+2$ is not a factor. Substituting $2$ would test division by $x-2$ instead, so keeping track of the sign is part of applying the theorem correctly.

</details>

### Exercise 7.5
<a id="polynomials-factor-theorem-ex-5"></a>

Find the real value of $k$ for which $x+1$ is a factor of $x^3+kx^2-4x-4$. For that value, factor the polynomial completely into real linear factors and solve the corresponding equation.

<details>
<summary>Hint 1</summary>

Apply the factor theorem at the zero of $x+1$.

</details>
<details>
<summary>Hint 2</summary>

Once $k$ is known, group the cubic and quadratic terms together and the remaining two terms together.

</details>
<details>
<summary>Solution</summary>

At $x=-1$ the value is $-1+k+4-4=k-1$. It vanishes exactly when $k=1$. Then grouping gives

$$
x^3+x^2-4x-4=x^2(x+1)-4(x+1)
=(x+1)(x^2-4)=(x+1)(x-2)(x+2).
$$

The equation has solutions $-1$, $2$ and $-2$. The parameter condition was necessary and sufficient because the factor theorem works in both directions.

</details>

### Exercise 7.6
<a id="polynomials-factor-theorem-ex-6"></a>

Solve $x^4-5x^2+4=0$ over the reals. State the multiplicity of each root.

<details>
<summary>Hint 1</summary>

Treat the expression temporarily as a quadratic in $x^2$.

</details>
<details>
<summary>Hint 2</summary>

After factoring in $x^2$, use the difference of two squares twice.

</details>
<details>
<summary>Solution</summary>

The factorisation is

$$
x^4-5x^2+4=(x^2-1)(x^2-4)
=(x-1)(x+1)(x-2)(x+2).
$$

The roots are $-2,-1,1,2$. Every linear factor occurs once and the other factors are nonzero at its root, so every root has multiplicity one. Solving only for $x^2$ gives $x^2=1$ or $x^2=4$; taking only positive square roots would lose two solutions.

</details>

### Exercise 7.7
<a id="polynomials-factor-theorem-ex-7"></a>

For $H(x)=3(x-2)^4(x+3)$, give the degree, leading coefficient and roots with multiplicities. Decide its sign on each interval separated by its roots.

<details>
<summary>Hint 1</summary>

An even power is positive away from its zero, regardless of the sign of its base.

</details>
<details>
<summary>Hint 2</summary>

Away from the two roots, only the factor $x+3$ can determine whether the product is negative.

</details>
<details>
<summary>Solution</summary>

The degree is $4+1=5$, with leading coefficient $3$. The root $2$ has multiplicity four, and $-3$ has multiplicity one. On $(-\\infty,-3)$, $x+3<0$ and the remaining factors are positive, so $H<0$. On $(-3,2)$ and $(2,\\infty)$ all nonzero factors are positive, so $H>0$. At either root $H=0$. Thus the sign changes at $-3$ but not at $2$, in agreement with the parity of their multiplicities.

</details>

### Exercise 7.8
<a id="polynomials-factor-theorem-ex-8"></a>

Construct a monic cubic whose root $2$ has multiplicity two and whose root $-1$ has multiplicity one. Expand it and find its value at zero.

<details>
<summary>Hint 1</summary>

Translate each specified root into a linear factor, repeated the required number of times.

</details>
<details>
<summary>Hint 2</summary>

The factorised form already has leading coefficient one; no additional scale factor is needed.

</details>
<details>
<summary>Solution</summary>

The polynomial is $(x-2)^2(x+1)$. Expanding gives

$$
(x^2-4x+4)(x+1)=x^3-3x^2+4.
$$

Its value at zero is $4$, which also follows directly from $(-2)^2(1)=4$. The factor $x+1$ is nonzero at $2$, and $(x-2)^2$ is nonzero at $-1$, so the multiplicities are exactly those requested, not merely lower bounds.

</details>

### Exercise 7.9
<a id="polynomials-factor-theorem-ex-9"></a>

A learner says that two polynomials agreeing at $0$ and $1$ must be identical. Give a counterexample. Then explain why two polynomials of degree at most $2$ agreeing at three distinct real inputs must be identical.

<details>
<summary>Hint 1</summary>

Try comparing the zero polynomial with a polynomial that has roots $0$ and $1$.

</details>
<details>
<summary>Hint 2</summary>

Subtract the two polynomials and use the bound on the number of distinct roots.

</details>
<details>
<summary>Solution</summary>

The polynomials $A(x)=0$ and $B(x)=x(x-1)$ agree at $0$ and $1$, but $A(2)=0$ while $B(2)=2$. Thus two agreements alone do not prove an identity without a degree bound. For the second claim, let $C=A-B$. It is either zero or has degree at most two. Three distinct agreements would give three distinct roots of $C$. The root bound rules this out for a nonzero polynomial of degree at most two. Therefore $C$ is the zero polynomial and $A=B$ identically.

</details>

### Exercise 7.10
<a id="polynomials-factor-theorem-ex-10"></a>

Divide $x^4+3x^2+5$ by $x^2+1$. Use either the result or the original expression to show that the dividend has no real roots. Explain why its degree does not contradict that conclusion.

<details>
<summary>Hint 1</summary>

The first quotient term is $x^2$; remember the missing cubic and linear terms.

</details>
<details>
<summary>Hint 2</summary>

Both $x^2$ and $x^4$ are nonnegative at every real input.

</details>
<details>
<summary>Solution</summary>

Subtracting $x^2(x^2+1)$ leaves $2x^2+5$, and subtracting $2(x^2+1)$ leaves $3$. Hence

$$
x^4+3x^2+5=(x^2+1)(x^2+2)+3.
$$

Each quadratic factor on the right is positive, so the result is positive. More directly, $x^4+3x^2+5\\ge5>0$. It therefore has no real roots. Degree four gives an upper bound of four distinct real roots, not a requirement that any exist.

</details>

## Summary

A polynomial uses nonnegative integer powers, and its degree is determined after collecting terms. Nonzero products add degrees, while sums can cancel leading terms. Division by a nonzero polynomial gives a unique quotient and a remainder of lower degree. For a linear divisor $x-r$, that remainder is exactly $P(r)$, so a root and a linear factor are equivalent pieces of information. Repeated factors define multiplicity; odd multiplicity changes the nearby sign and even multiplicity preserves it. Degree bounds the number of distinct real roots without guaranteeing their existence. The next chapter keeps these factorisations but allows division by expressions involving $x$, so recording excluded inputs becomes essential.

## Sources

This chapter's exposition, proofs, worked examples and exercises are original. For another treatment of the standard topics, see OpenStax, *Algebra and Trigonometry 2e*: [5.4 Dividing Polynomials](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-4-dividing-polynomials), [5.5 Zeros of Polynomial Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-5-zeros-of-polynomial-functions), and [5.3 Graphs of Polynomial Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-3-graphs-of-polynomial-functions). These primary-source pages were consulted on 13 November 2026; no passages or exercises have been copied.
`;export{e as default};