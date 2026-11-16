
# Expressions, Laws, and Factorising

## One quantity, several useful forms

A school orders identical packs of notebooks. Each pack contains six notebooks, and a supplier adds four extra notebooks to the whole order. For $p$ packs, the total is $6p+4$. If the notebooks are shared equally between two classrooms, each receives $3p+2$. The identity $6p+4=2(3p+2)$ explains the sharing before anyone chooses an order size. Algebra allows us to reason about a whole family of numerical calculations at once.

This chapter asks when a change in appearance preserves a quantity. You will distinguish expressions from equations and identities, evaluate expressions with negative inputs, use the arithmetic laws to expand and collect terms, and reverse expansion by factorising. You will also learn why a cancelled denominator leaves a restriction behind. These skills support the equation methods in the next chapter, and later make quadratic and rational expressions manageable.

## Preparation and notation

The required preparation is [Algebra from Stories: Unknowns, Rules, and Function Machines](#/books/algebra-from-stories), especially its work on signed numbers, fractions, brackets, and formulas. You should be able to calculate with ordinary fractions and explain what a letter stands for in a simple story. No calculus or proof course is assumed. The short arguments below explain the rules as they are introduced.

Unless a context says otherwise, letters denote real numbers: numbers on the usual number line, including integers, fractions, and irrational numbers such as $\sqrt{2}$. Juxtaposition means multiplication, so $3x$ means $3\times x$ and $ab$ means $a\times b$. A fraction bar groups its whole numerator and denominator. Thus $(x+1)/2$ divides the entire sum by two; $x+1/2$ usually means $x+\tfrac12$.

## Expressions, equations, and identities

**Definition 1.1 (Expression and evaluation).** An algebraic expression is a number, a variable, or a combination of numbers and variables using specified operations. Evaluating it means substituting allowed numbers for its variables and performing those operations. Its domain is the set of inputs for which every operation is defined.

The expression $4x-7$ has a value once $x$ is supplied. On its own it does not ask us to find $x$. By contrast, the instruction “find when $4x-7$ equals thirteen” supplies a condition, expressed by the equation $4x-7=13$. Keeping these roles separate prevents an unhelpful habit: trying to “solve” every expression that contains a letter.

**Definition 1.2 (Equation and identity).** An equation asserts equality between two expressions. A solution is an allowed input making that assertion true. An identity is an equality true for every input in the stated domain.

For example, $2(x+3)=2x+6$ is an identity over the real numbers, whereas $2(x+3)=14$ is an equation true only at $x=4$. An identity can justify replacing one expression by another inside a larger calculation. Solving an equation asks which inputs satisfy a condition. The same equals sign appears in both, so the surrounding claim matters.

Trying one value can disprove a proposed identity: one failure is enough because an identity claims every allowed value. Trying several values cannot normally prove one. The expressions $x^2$ and $x$ agree at zero and one but disagree at two. A dependable proof uses definitions and laws to account for arbitrary allowed inputs, as our expansions will do.

**Definition 1.3 (Terms, factors, and coefficients).** Terms are the parts added at the outermost level of a sum. Factors are the parts multiplied in a product. The coefficient of a specified variable part is its numerical multiplier. Like terms have the same variable part, with the same powers.

In $5x^2-3x+8$, the terms are $5x^2$, $-3x$, and $8$. The sign belongs to the term: write subtraction as addition of a negative if necessary. The coefficient of $x^2$ is five. In $5x(x+2)$, the displayed factors are $5$, $x$, and $(x+2)$. The whole bracket is a factor even though it contains a sum. That distinction will decide what can be cancelled later.

## Why the laws allow a rewrite

**Theorem 1.4 (Arithmetic laws for real numbers).** For all real $a,b,c$,

$$
a+b=b+a,\qquad ab=ba,
$$

$$
(a+b)+c=a+(b+c),\qquad (ab)c=a(bc),
$$

and

$$
a(b+c)=ab+ac.
$$

The first pair are the commutative laws, the second pair are the associative laws, and the last is the distributive law. Also $a+0=a$, $a\cdot1=a$, $a+(-a)=0$, and $a(1/a)=1$ when $a\ne0$.

These are the arithmetic laws of the real numbers, used here as our starting rules. The restriction on the reciprocal is essential: zero has no reciprocal because multiplying any real number by zero gives zero, never one. Commutativity permits a change in order; associativity permits a change in grouping; distributivity connects a product with a sum. Naming the particular law makes a calculation explainable rather than a sequence of remembered moves.

Neither subtraction nor division is commutative: $8-3$ differs from $3-8$, and $8/2$ differs from $2/8$. Grouping also matters: $10-(4-1)=7$, whereas $(10-4)-1=5$. We may use addition laws after writing subtraction as addition of the opposite. Thus $x-3+2x=x+(-3)+2x=3x-3$ is justified; rearranging the bare subtraction symbols carelessly is not.

Like terms combine by reversing distributivity: $7x+2x=(7+2)x=9x$. However, $7x+2x^2$ does not become $9x^3$. The two terms count different variable parts. If $x=2$, their values are fourteen and eight, totalling twenty-two; the proposed replacement gives seventy-two. A counterexample exposes the error, and the absence of a common variable part explains it.

### Worked example 1.5 (Substitution and a leading minus)

Evaluate $E=3x^2-2(x-y)$ when $x=-2$ and $y=5$.

Substitute with brackets so that each negative number remains a single input:

$$
E=3(-2)^2-2((-2)-5)=3\cdot4-2(-7)=12+14=26.
$$

The square applies to the whole substituted value $-2$. Writing $3\cdot-2^2$ would obscure the substitution because $-2^2$ conventionally means $-(2^2)$, which is negative four. Brackets carry meaning here.

We can also simplify first. Distributivity gives $-2(x-y)=-2x+2y$, hence $E=3x^2-2x+2y$. Evaluating this form gives $12+4+10=26$. The two routes agree because the rewrite is an identity. This is a useful check on signs, although agreement at this one input alone would not establish the identity.

A minus sign before brackets multiplies the entire bracket by negative one. Therefore $-(a+b)=-a-b$ and $-(a-b)=-a+b$. Every term changes sign. The meaning is “take the opposite of the whole quantity”, not “change the first sign and leave the rest alone”. With several bracketed quantities, it is often safest to distribute each multiplier before collecting terms.

## Powers and the structure of a polynomial

**Definition 1.6 (Positive integer power).** For a real number $a$ and positive integer $n$, $a^n$ is the product of $n$ copies of $a$. The number $a$ is the base and $n$ is the exponent.

**Theorem 1.7 (Positive integer power laws).** For real $a,b$ and positive integers $m,n$,

$$
a^m a^n=a^{m+n},\qquad (a^m)^n=a^{mn},\qquad (ab)^n=a^n b^n.
$$

*Proof.* The first product has $m$ copies of $a$ followed by $n$ more, giving $m+n$ copies altogether. The second has $n$ groups of $m$ copies, giving $mn$ copies. In the third, each of the $n$ factors contributes one $a$ and one $b$; commutativity and associativity collect the $a$ factors and the $b$ factors separately. These arguments apply to zero and negative bases too. ∎

The first rule concerns multiplication of powers with the same base. It does not say $a^m+a^n=a^{m+n}$, and the last rule concerns a product, not a sum. For example, $(2+3)^2=25$, but $2^2+3^2=13$. Zero, negative, and fractional exponents require further definitions and restrictions; [Surds and Indices](surds-indices.md) develops them. For now, positive integer powers are sufficient for our factorisation methods.

**Definition 1.8 (Polynomial in one variable).** A polynomial in $x$ is a finite sum of terms $c x^n$, where $c$ is real and $n$ is a nonnegative integer. A nonzero polynomial's degree is the largest exponent with nonzero coefficient after like terms are collected. The zero polynomial has no degree in this chapter's convention.

The constant term corresponds to $n=0$, written simply as $c$. Thus $4x^3-2x+7$ is a polynomial of degree three. By contrast, $1/x$ and $\sqrt{x}$ are not polynomials in $x$. A polynomial has a defined value at every real input. A degree should be read after simplification: $x^3+2x-x^3$ has degree one because its cubic terms cancel.

### Worked example 1.9 (Expanding two brackets)

Expand and collect $(2x-3)(x+4)-x(x-1)$.

Distribute the whole second bracket across the two terms of the first:

$$
(2x-3)(x+4)=2x(x+4)-3(x+4).
$$

Distribute again to obtain $2x^2+8x-3x-12=2x^2+5x-12$. The second product is $x^2-x$, and subtracting it changes both its signs:

$$
(2x^2+5x-12)-(x^2-x)=x^2+6x-12.
$$

All four products between the two brackets were needed. At $x=0$, both the original and final expressions give negative twelve, a quick check on the constant term. At $x=1$, the original gives $(-1)(5)-0=-5$, matching $1+6-12$. The distributive calculation establishes the identity for all real $x$; the numerical checks help detect copying errors.

## Factorising reverses distribution

**Definition 1.10 (Factorisation).** To factorise an expression is to write it as a product of simpler expressions equal to it throughout the stated domain. Expansion converts a product to a sum; factorisation converts a sum to a product.

There is no single “simplest” form for every purpose. An expanded polynomial makes like terms and degree easy to see. A factored expression makes repeated factors and possible zero values visible. Choosing a form should follow the question. A rectangle with side lengths $x$ and $x+5$ naturally gives the area $x(x+5)$; the expanded area $x^2+5x$ shows a square part and a rectangular strip.

The first factorisation question is whether every term has a common factor. For integer coefficients, their greatest common positive factor is a useful choice. For powers of a variable, choose the lowest power appearing in every term. Writing a common factor outside brackets does not divide an equation by that factor; it rewrites the original expression and remains valid even when the factor is zero.

### Worked example 1.11 (Common factors and grouping)

Factorise $12x^3-18x^2$ and $3x^2+6x+5x+10$.

In the first expression, both coefficients have factor six, and both variable parts contain $x^2$. Removing that common factor from each term gives

$$
12x^3-18x^2=6x^2(2x-3).
$$

Multiplying back confirms both terms. In particular, at $x=0$, both sides are zero; there was no need to exclude that value.

For the second expression, group terms to reveal a repeated bracket:

$$
\begin{aligned}
3x^2+6x+5x+10
&=3x(x+2)+5(x+2)\\
&=(3x+5)(x+2).
\end{aligned}
$$

The last step is distributivity in reverse, with the whole expression $x+2$ playing the role of the common factor. Expanding the answer gives $3x^2+11x+10$, exactly the collected original. Grouping is useful when there is no common factor in all terms but there is one within each carefully chosen group.

## Squares, differences, and trinomial patterns

**Theorem 1.12 (Square identities).** For all real $a,b$,

$$
(a+b)^2=a^2+2ab+b^2,\qquad
(a-b)^2=a^2-2ab+b^2,
$$

and

$$
a^2-b^2=(a-b)(a+b).
$$

*Proof.* Expand $(a+b)(a+b)$ to get $a^2+ab+ba+b^2$, whose middle terms combine to $2ab$. Replacing $b$ by $-b$ gives the second identity. Expanding $(a-b)(a+b)$ gives $a^2+ab-ab-b^2$; the middle terms cancel. ∎

A square of a sum contains two cross-products. Omitting them is an especially common error because the abbreviated exponent hides the multiplication. The difference of two squares has a different structure: two conjugate brackets, one with plus and one with minus. The cancellation of their cross-products is precisely why that pattern works.

### Worked example 1.13 (Recognising a difference of squares)

Factorise $9x^2-25$ and use the same idea to calculate $103\cdot97$ mentally.

Recognise $9x^2=(3x)^2$ and $25=5^2$. The third square identity gives

$$
9x^2-25=(3x-5)(3x+5).
$$

Multiplying the brackets gives $9x^2+15x-15x-25$, verifying the factorisation. For the numerical calculation, $103=100+3$ and $97=100-3$, so

$$
103\cdot97=100^2-3^2=10000-9=9991.
$$

The method is efficient because the two numbers are equally spaced around a convenient centre. It would not apply in that form to $103\cdot96$, whose distances from one hundred differ. Likewise, $9x^2+25$ is a sum of squares and does not equal $(3x-5)(3x+5)$. At $x=0$, the proposed product would give negative twenty-five instead of positive twenty-five.

**Theorem 1.14 (A trinomial factorisation criterion).** If real numbers $p,q$ satisfy $p+q=b$ and $pq=c$, then, for every real $x$,

$$
x^2+bx+c=(x+p)(x+q).
$$

*Proof.* Expansion gives $(x+p)(x+q)=x^2+(p+q)x+pq$. Substitute the two stated conditions. ∎

When integer factors are requested and $b,c$ are integers, list factor pairs of $c$ and test their sums. A positive product requires matching signs; a negative product requires opposite signs. Failure to find an integer pair does not prove there is no real factorisation. For instance, $x^2-2=(x-\sqrt2)(x+\sqrt2)$ has real factors involving irrational coefficients. Later chapters develop a systematic account of quadratics and their roots.

### Worked example 1.15 (A non-monic quadratic)

Factorise $2x^2+x-6$ into linear factors with integer coefficients.

The first terms of the brackets must multiply to $2x^2$, so try a form $(2x+p)(x+q)$. Its constant term is $pq$, and its coefficient of $x$ is $2q+p$. We require $pq=-6$ and $2q+p=1$. Choosing $p=-3$ and $q=2$ satisfies both:

$$
2x^2+x-6=(2x-3)(x+2).
$$

A second route splits the middle term into $4x-3x$:

$$
2x^2+4x-3x-6=2x(x+2)-3(x+2).
$$

Grouping then gives the same factors. Verification by expansion yields $2x^2+4x-3x-6$, so the signs and the middle coefficient are correct. The middle coefficient, not just the first and last terms, must be checked: $(2x+3)(x-2)$ has the wrong middle term.

## Cancellation and the original domain

**Definition 1.16 (Rational expression).** A rational expression is a quotient of polynomials. Its domain consists of the real inputs at which its denominator is nonzero.

**Theorem 1.17 (Cancellation of a nonzero factor).** If $A,B,C$ are real expressions and, at the input considered, $B\ne0$ and $C\ne0$, then

$$
\frac{AB}{CB}=\frac AC.
$$

*Proof.* Since $B$ has a reciprocal, multiply the numerator and denominator by $1/B$. The denominator remains nonzero, and the product laws give the stated quotient. ∎

Cancelling removes a factor from the formula, not a restriction from the original problem. If the cancelled factor could vanish, record its excluded inputs before simplifying. A polynomial identity such as $x^2-9=(x-3)(x+3)$ is valid everywhere. The quotient identity obtained by dividing by $x-3$ is valid only where that divisor is nonzero. Those are different assertions.

### Worked example 1.18 (A simpler formula with the same exclusions)

Simplify

$$
R(x)=\frac{x^2-9}{x^2-x-6}
$$

and state the domain inherited from the original expression.

Factor the denominator as $(x-3)(x+2)$. It vanishes at $x=3$ and $x=-2$, so exclude both. Factor the numerator as $(x-3)(x+3)$. For every remaining input, cancellation is allowed:

$$
R(x)=\frac{(x-3)(x+3)}{(x-3)(x+2)}
=\frac{x+3}{x+2},\qquad x\ne3,-2.
$$

The shorter formula can be evaluated at $x=3$, but doing so gives a value for a different, extended rule. It does not make the original zero denominator legal. At $x=0$, the original quotient is $(-9)/(-6)=3/2$, agreeing with the simplified form. At an excluded input, there is no original value to compare.

Cancellation within addition is invalid. For $x\ne0$, the expression $(x+6)/x$ equals $1+6/x$, not seven. The numerator does not have a common factor $x$ in all its terms. Taking $x=2$ gives four, immediately disproving the answer seven. Always factor the entire numerator and denominator before deciding whether a cancellation applies.

## Choosing a form and checking meaning

Algebraic rewrites should serve a purpose. Suppose two square gardens have side lengths $s+2$ metres and $s-2$ metres, with $s>2$. Their area difference is $(s+2)^2-(s-2)^2$. Expanding both squares gives $8s$ square metres. Alternatively, factor a difference of squares to obtain $[(s+2)-(s-2)][(s+2)+(s-2)]=4(2s)$. Both routes explain why the difference grows linearly with the central length.

The algebraic identity holds for every real $s$, but the garden interpretation requires positive side lengths. A formula's algebraic domain and a model's permitted inputs can therefore differ. Recording a context restriction is as necessary as recording a nonzero denominator. Neither restriction should disappear merely because a later expression looks easier to evaluate.

A reliable check asks several questions. Were signs distributed across every term? Were only like terms combined? Does expansion recover a proposed factorisation? Were original denominator restrictions retained? Does a numerical test contradict the result? Numerical checks are useful error detectors; the laws supply the general justification. These habits will make solving equations more dependable because each equation step uses expressions of exactly this kind.

## Exercises

### Exercise 1.1
<a id="expressions-laws-factorising-ex-1"></a>

Evaluate $2u^2-3(u-v)$ at $u=-3$ and $v=2$. Then evaluate the expanded form and compare.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute negative inputs with brackets and calculate the square before the other products.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distribute the multiplier $-3$ to both terms of $u-v$ before evaluating the second way.

</details>
<details>
<summary>Solution</summary>

**Solution.** Direct substitution gives $2(-3)^2-3(-3-2)=18-3(-5)=33$. Distributing gives $2u^2-3u+3v$, whose value is $18+9+6=33$. The agreement checks this evaluation; distributivity establishes why the expressions agree for all real inputs. In particular, the subtraction of a negative product contributes a positive fifteen in the direct calculation.

</details>

### Exercise 1.2
<a id="expressions-laws-factorising-ex-2"></a>

Classify each as an expression, an identity over the reals, or an equation that is not an identity: $5t-4$; $3(t+2)=3t+6$; $3t+6=12$. Explain what can be evaluated and what can be solved.

<details>
<summary>Hint 1</summary>

**Hint.** First look for a claim of equality. Then ask whether it holds at every input.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Expand the bracket in the second item. For the third, compare what happens at zero and at two.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first item is an expression, evaluated after supplying $t$. It has no condition to solve. The second is an identity, because distribution gives $3(t+2)=3t+6$ for every real $t$. The third is an equation with solution $t=2$: subtract six and divide by three. At zero its two sides differ, so it is not an identity. An identity is itself a particular kind of equation, distinguished by its universal validity.

</details>

### Exercise 1.3
<a id="expressions-laws-factorising-ex-3"></a>

Simplify $4(2x-3)-3(x+5)+2x^2-x^2$. State its degree and constant term.

<details>
<summary>Hint 1</summary>

**Hint.** Expand each bracket before collecting terms. The multiplier of the second bracket is negative three.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Collect squared terms, linear terms, and constants in separate groups.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expansion gives $8x-12-3x-15+2x^2-x^2$. The squared terms combine to $x^2$, the linear terms to $5x$, and the constants to $-27$. Thus the result is $x^2+5x-27$, of degree two with constant term negative twenty-seven. The polynomial is defined at every real input. In particular, its value at zero is its constant term, matching the original expression's value there.

</details>

### Exercise 1.4
<a id="expressions-laws-factorising-ex-4"></a>

Simplify $(2a^2b)^3(ab^2)$ for real $a,b$. Explain why adding the two original exponents of $a$ would not be the correct first step.

<details>
<summary>Hint 1</summary>

**Hint.** The outer cube applies to every factor inside its bracket.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After cubing, multiply the resulting power of $a$ by $a$, and the resulting power of $b$ by $b^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The cube gives $2^3(a^2)^3b^3=8a^6b^3$. Multiplying by $ab^2$ gives $8a^7b^5$. The exponent two is nested inside a cube, so it first becomes six by the power-of-a-power law. Only then do we add one for the extra factor $a$. Every exponent is positive, so zero values of $a$ or $b$ cause no restriction.

</details>

### Exercise 1.5
<a id="expressions-laws-factorising-ex-5"></a>

Expand $(x-5)^2$ and $(x-5)(x+5)$. Explain why the results are different.

<details>
<summary>Hint 1</summary>

**Hint.** Write the square as two identical brackets before distributing.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the signs of the two cross-products in each expansion.

</details>
<details>
<summary>Solution</summary>

**Solution.** The square is $(x-5)(x-5)=x^2-5x-5x+25=x^2-10x+25$. The second product is $x^2+5x-5x-25=x^2-25$. Identical brackets produce two negative cross-products, whereas conjugate brackets produce opposite cross-products that cancel. At zero the values are respectively twenty-five and negative twenty-five, so the expressions cannot be identical.

</details>

### Exercise 1.6
<a id="expressions-laws-factorising-ex-6"></a>

Factorise $15r^3s^2-10r^2s^3$ by taking out the greatest common positive integer coefficient and the highest common variable powers. Is the identity still valid at $r=0$?

<details>
<summary>Hint 1</summary>

**Hint.** Treat the integer coefficients and the powers of each variable separately.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The common powers use the smaller exponent of each variable. Multiply back to check the remaining bracket.

</details>
<details>
<summary>Solution</summary>

**Solution.** The coefficient factor is five; the common variable factor is $r^2s^2$. Hence the expression is $5r^2s^2(3r-2s)$. Multiplying gives $15r^3s^2-10r^2s^3$, proving the identity at all real $r,s$. At $r=0$, both forms give zero. Factoring rewrites a product and sum; it does not require dividing an equation by $r$, so no nonzero hypothesis is needed.

</details>

### Exercise 1.7
<a id="expressions-laws-factorising-ex-7"></a>

Factorise $2z^2-6z+5z-15$ by grouping and verify your answer by expansion.

<details>
<summary>Hint 1</summary>

**Hint.** Group the first two terms and the last two terms.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After taking out a factor from each group, look for the same whole bracket in both products.

</details>
<details>
<summary>Solution</summary>

**Solution.** The grouped form is $2z(z-3)+5(z-3)$, so reversing distribution gives $(2z+5)(z-3)$. Expansion produces $2z^2-6z+5z-15$, recovering the original. Collecting gives $2z^2-z-15$, which offers another middle-coefficient check. The factorisation is valid for every real $z$, including three, where both forms vanish.

</details>

### Exercise 1.8
<a id="expressions-laws-factorising-ex-8"></a>

Factorise $4w^2-81$ and use a related identity to calculate $48\cdot52$ without long multiplication. Explain why $4w^2+81$ cannot use the same difference-of-squares pattern.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the two squares in the polynomial and the midpoint of the two numerical factors.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use conjugate brackets. In the numerical calculation, the factors are equally spaced from fifty.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $4w^2-81=(2w-9)(2w+9)$. Also $48\cdot52=(50-2)(50+2)=2500-4=2496$. The product of conjugates always gives a difference of squares because the constant product is negative. Substituting zero disproves the proposed use of the same factors for $4w^2+81$: they give negative eighty-one instead of positive eighty-one. This rules out that pattern, rather than all imaginable kinds of factorisation.

</details>

### Exercise 1.9
<a id="expressions-laws-factorising-ex-9"></a>

Factorise $x^2-7x+12$ and $3x^2+7x+2$ into linear factors with integer coefficients. Verify both middle coefficients.

<details>
<summary>Hint 1</summary>

**Hint.** For the first expression, seek two numbers whose product is twelve and sum is negative seven.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the second, try $(3x+p)(x+q)$ and require $pq=2$ and $3q+p=7$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Negative three and negative four have product twelve and sum negative seven, so $x^2-7x+12=(x-3)(x-4)$. For the second, $p=1$ and $q=2$ give $3q+p=7$, hence $3x^2+7x+2=(3x+1)(x+2)$. Expanding produces middle terms $-4x-3x=-7x$ in the first case and $6x+x=7x$ in the second. Checking only the constant products would not distinguish all possible trial pairs.

</details>

### Exercise 1.10
<a id="expressions-laws-factorising-ex-10"></a>

Simplify $(t^2-16)/(t^2+2t-8)$ while retaining its original domain. A learner instead cancels the $t^2$ terms immediately. Explain the error and give an allowed numerical input that exposes it.

<details>
<summary>Hint 1</summary>

**Hint.** Factor both polynomials and find the original denominator's zero values before cancelling anything.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A legitimate cancellation removes a common factor of the entire numerator and denominator. The incorrect cancellation would produce $-16/(2t-8)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The numerator is $(t-4)(t+4)$ and denominator $(t+4)(t-2)$. The original domain excludes $t=-4,2$. Cancelling the nonzero common factor gives $(t-4)/(t-2)$ on precisely that domain. The $t^2$ pieces in the original were terms inside sums, not factors of the whole numerator and denominator. At $t=1$, the original is $(-15)/(-5)=3$, whereas the incorrect expression gives $(-16)/(-6)=8/3$. One allowed counterexample disproves the claimed identity. The valid shorter formula still excludes negative four even though its displayed denominator no longer does.

</details>

## Sources

This is original exposition and original worked material. OpenStax's *Algebra and Trigonometry 2e* supplies useful parallel reading: [1.1, Real Numbers: Algebra Essentials](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-1-real-numbers-algebra-essentials) on arithmetic laws; [1.2, Exponents and Scientific Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-2-exponents-and-scientific-notation) on powers; [1.5, Factoring Polynomials](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-5-factoring-polynomials) on factorisation; and [1.6, Rational Expressions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-6-rational-expressions) on quotient manipulation. These links are references, not copied exercise sources.

The local shared-foundations algebra chapter (`modules/textbooks/shared_foundations/00c-algebra.qmd`) and Lucent algebra refresher (`modules/lucent/courses/refresher/02-algebra-functions.md`) informed the scope and emphasis on equivalence and domains. They remain separate source materials. This chapter uses British spelling and is licensed CC BY-SA 4.0.

## Summary

An expression represents a quantity; an equation imposes a condition; an identity justifies replacing one expression by another throughout a stated domain. Commutativity, associativity, and distributivity explain collecting and expansion. Factoring reverses distribution, with common factors, grouping, square identities, and coefficient comparisons supplying useful methods. A factorisation should multiply back to the original, and cancellation requires a nonzero common factor while retaining all original exclusions.

In [Linear Equations, Inequalities, and Systems](linear-equations-inequalities-systems.md), we apply these expression skills to conditions on unknowns. The central question becomes whether an operation preserves the whole solution set, a direct continuation of preserving meaning in a rewrite.
