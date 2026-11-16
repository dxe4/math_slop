
# Logarithms

## The exponent you are looking for

Suppose a quantity is multiplied by $3$ in every time interval. After $t$ intervals its multiplier is $3^t$. Finding the multiplier from the elapsed time is an exponential calculation. Finding the elapsed time from the multiplier asks the reverse question: which exponent produces this positive number? Some answers are familiar, such as the exponent $4$ that produces $81$. Other answers, such as the exponent that produces $20$, need a new notation. A logarithm names that exponent exactly, even when it is not a convenient fraction.

This chapter develops logarithms as inverse functions. The inverse viewpoint explains both their laws and their restrictions: the inputs must be positive, the base must be positive and different from $1$, and a decreasing exponential has a decreasing inverse. By the end, you should be able to justify logarithmic calculations, solve equations with domain checks, and decide which way a logarithmic inequality points.

Required preparation is [Exponential Functions](exponential-functions.md), especially the exponent laws and the range of a positive-base exponential. The rules for powers in [Surds and Indices](surds-indices.md) are also used. We work with real numbers throughout. The real exponential's existence and its range, established as properties in the preceding chapter, are taken as preparation here; no calculus is needed for the algebraic proofs below.

## Definition and inverse relationships

**Definition 11.1 (Logarithm).** Fix a real base $a>0$ with $a\ne1$. For each $x>0$, the number $\log_a x$ is the unique real exponent $y$ such that $a^y=x$. Thus

$$
\log_a x=y\quad\Longleftrightarrow\quad a^y=x.
$$

The existence and uniqueness follow from the exponential function being one-to-one from $\mathbb R$ onto $(0,\infty)$. Consequently $\log_a$ is a function with domain $(0,\infty)$ and range $\mathbb R$. The base is fixed while the argument varies. The subscript is essential: $\log_2 8=3$, whereas $\log_8 8=1$.

The restrictions are part of the definition. Base $1$ gives the constant exponential $1^y=1$: most positive outputs are never reached and the output $1$ has many exponents. It therefore has no inverse on this domain. Base $0$ does not define an exponential at every real exponent. A negative base does not give a real value at every real exponent either; for example, $(-2)^{1/2}$ has no real value. These are not permitted real logarithmic bases.

Likewise, no real exponent of a positive base produces $0$ or a negative number. Expressions such as $\log_3 0$ and $\log_3(-5)$ have no real value. An exponent itself can be zero or negative: $\log_3 1=0$ and $\log_3(1/9)=-2$. Confusing the sign of an argument with the sign of its logarithm is a frequent source of errors.

**Proposition 11.2 (Inverse identities).** For $a>0$, $a\ne1$,

$$
\log_a(a^t)=t\quad(t\in\mathbb R),
\qquad a^{\log_a x}=x\quad(x>0).
$$

In particular, $\log_a1=0$ and $\log_a a=1$.

*Proof.* The unique exponent producing $a^t$ is $t$, so the first identity follows directly from Definition 11.1. The definition of $\log_a x$ says that raising $a$ to that exponent produces $x$, which is the second identity. Finally $a^0=1$ and $a^1=a$ give the special values. ∎

The common logarithm is base $10$, often written $\log x$. The natural logarithm is base $e$, written $\ln x$. Here $e\approx2.71828$ denotes the constant called the natural base; its construction and special properties are deferred to calculus. This chapter uses only that it is a fixed real base greater than $1$. All algebraic laws in this chapter apply to these bases. When there could be doubt about a bare $\log$, write the base explicitly. The notation $\log_a x$ describes an exponent; it does not mean $x/a$, and it is not a product of three symbols.

**Example 11.3 (Exact values without a calculator).** Evaluate $\log_4 8$, $\log_{1/3}27$, and $\ln(e^{-5})$.

Since $4=2^2$ and $8=2^3$, the equation $4^y=8$ becomes $2^{2y}=2^3$. The exponential is one-to-one, so $2y=3$ and $\log_4 8=3/2$. Next $(1/3)^y=3^{-y}$; equating this to $27=3^3$ gives $-y=3$. Thus $\log_{1/3}27=-3$. Finally the inverse identity gives $\ln(e^{-5})=-5$. All three arguments are positive, including $e^{-5}$. A negative logarithm is entirely compatible with a positive argument.

## Laws derived from powers

The logarithm laws are translations of exponent laws. They should be used together with their hypotheses rather than as rules about the appearance of symbols.

**Theorem 11.4 (Product, quotient, and power laws).** Let $a>0$, $a\ne1$, and let $u,v>0$. Then

$$
\log_a(uv)=\log_a u+\log_a v,
$$

$$
\log_a(u/v)=\log_a u-\log_a v.
$$

For every real $c$ and every $u>0$, also

$$
\log_a(u^c)=c\log_a u.
$$

*Proof.* Put $p=\log_a u$ and $q=\log_a v$. These exponents exist because $u,v>0$, and $u=a^p$, $v=a^q$. The exponent law gives $uv=a^{p+q}$. The unique exponent producing $uv$ is therefore $p+q$, proving the product law. Similarly $u/v=a^p/a^q=a^{p-q}$, so its logarithm is $p-q$. For the final identity, $u^c=(a^p)^c=a^{pc}$, using the positive-base power law for real exponents. Its logarithm is $pc=c\log_a u$. The arguments of all logarithms used in these steps are positive. ∎

Notice that $c$ need not be positive or an integer. Choosing $c=-1$ gives $\log_a(1/u)=-\log_a u$, and choosing $c=1/2$ gives $\log_a\sqrt u=\tfrac12\log_a u$. The positive hypothesis belongs to $u$, while $c$ may be any real number.

There is a domain distinction between $\log_a(x^2)$ and $2\log_a x$. The first is defined whenever $x\ne0$, because $x^2>0$ there. The second is defined only for $x>0$. They agree on their common domain, but do not define the same function on all nonzero reals. Since $|x|>0$ and $x^2=|x|^2$ for $x\ne0$, the identity with the full domain is

$$
\log_a(x^2)=2\log_a|x|\qquad(x\ne0).
$$

**Nonexample.** Although $(-2)(-5)=10>0$, the product law cannot turn $\log_a10$ into $\log_a(-2)+\log_a(-5)$. The two individual logarithms on the right are undefined in real arithmetic. Positivity of a product does not establish positivity of its factors.

There is also no general law $\log_a(u+v)=\log_a u+\log_a v$. For instance, at base $2$ with $u=v=2$, the left side is $\log_2 4=2$, while the right side is $1+1=2$; that particular choice happens to agree. Replacing $u,v$ by $1,1$ gives $\log_2 2=1$ on the left and $0+0=0$ on the right, disproving the proposed identity. A single coincidental success cannot justify a universal law. When a logarithm contains a sum, factorisation may sometimes help, but splitting the sum itself is invalid.

**Example 11.5 (Expanding while retaining the domain).** For $x>2$ and $y>0$, expand

$$
L=\log_3\left(\frac{(x-2)^2\sqrt y}{9}\right).
$$

The assumptions give $x-2>0$, $\sqrt y>0$, and a positive quotient. Applying the quotient law first and then the product and power laws gives

$$
L=\log_3((x-2)^2)+\log_3(y^{1/2})-\log_3 9
 =2\log_3(x-2)+\tfrac12\log_3 y-2.
$$

Every transformation has its required positive arguments. If the original problem had allowed any $x\ne2$, the squared factor would still be positive, but the correct expansion would use $2\log_3|x-2|$. The formula is sensitive to the original domain, not just to the visible square.

## Changing the base

A calculator may provide only $\log$ and $\ln$, while a problem uses another base. More generally, the same exponent question can be expressed using any allowed base.

**Theorem 11.6 (Change of base).** If $a,b>0$, $a\ne1$, $b\ne1$, and $x>0$, then

$$
\log_a x=\frac{\log_b x}{\log_b a}.
$$

*Proof.* Let $t=\log_a x$, so $a^t=x$. Taking $\log_b$ is valid because both sides are positive. By the power law, $t\log_b a=\log_b x$. The denominator $\log_b a$ is nonzero: if it were zero, the inverse identity would give $a=b^0=1$, contrary to the hypothesis. Dividing by this nonzero number establishes the formula. ∎

In particular $\log_a x=\ln x/\ln a$. The formula changes the notation for a number, not its value. If $0<a<1$, then $\ln a<0$; this negative denominator is expected and matters when solving inequalities. It cannot be replaced by its absolute value.

**Example 11.7 (An unknown time).** A model assigns a positive quantity $Q(t)=150(1.08)^t$ after $t$ years, with $t\ge0$. Find exactly when the model first reaches $300$.

The equation is $150(1.08)^t=300$, so division by $150$ gives $(1.08)^t=2$. By definition,

$$
t=\log_{1.08}2=\frac{\ln2}{\ln1.08}.
$$

Both numerator and denominator are positive, hence $t>0$, within the stated time domain. Substituting the exact value gives $(1.08)^{\log_{1.08}2}=2$, so the model gives $300$ as required. The base exceeds $1$, making $Q$ strictly increasing; this is the unique reaching time and therefore the first one. If observations are made only at integer years, the question changes: one seeks the least integer at least this real time. An exact continuous time should not silently be presented as an integer observation time.

## Domains before equations

A logarithmic formula may impose several restrictions simultaneously. For example, $f(x)=\ln(x-1)+\ln(5-x)$ requires both $x>1$ and $x<5$, giving domain $(1,5)$. Combining the logarithms into $\ln((x-1)(5-x))$ is legitimate on that domain. Even when an algebraic replacement looks simpler, retain the original conditions alongside it.

For a nested expression, work from the definitions of all operations. To define $\sqrt{\log_2(x-1)}$, the logarithm's input must be positive and its output must be nonnegative. The second requirement gives $\log_2(x-1)\ge0$, equivalently $x-1\ge1$, because base $2$ is increasing. Thus $x\ge2$, which also meets the first requirement $x>1$. The endpoint $2$ is included because a square root may equal zero, although a logarithm's argument may not.

A reliable equation method has three parts: write the original domain, solve the transformed algebraic equation on that domain, and substitute the resulting values into the original equation. If a transformation loses a restriction, its extra algebraic answers are only candidates until checked.

**Example 11.8 (A quadratic appears).** Solve

$$
\log_2(x-1)+\log_2(x-3)=3.
$$

The two original arguments require $x>3$. On this domain the product law makes the equation equivalent to $\log_2((x-1)(x-3))=3$. Converting to exponential form gives

$$
(x-1)(x-3)=8,
\qquad x^2-4x-5=0,
\qquad (x-5)(x+1)=0.
$$

The algebraic candidates are $5$ and $-1$. The value $-1$ violates $x>3$; in fact both original logarithmic arguments would be negative. At $x=5$, the original left side is $\log_2 4+\log_2 2=2+1=3$. Therefore the solution set is $\{5\}$. The rejected value solves the product equation because two negative factors can have a positive product, precisely the circumstance excluded by the individual logarithms.

Logarithms can also solve an equation whose unknown starts in an exponent. For $7^{2x-1}=11$, both sides are positive, so taking $\ln$ gives $(2x-1)\ln7=\ln11$. As $\ln7\ne0$, the solution is $x=\tfrac12(1+\ln11/\ln7)$. Taking a logarithm of an expression containing a subtraction, such as $\ln(7^x-2)$, requires checking that the entire difference is positive. It does not permit taking separate logarithms of its terms.

## Order and inequalities

**Theorem 11.9 (Order under a logarithm).** Fix $a>0$, $a\ne1$, and let $u,v>0$. If $a>1$, then

$$
\log_a u<\log_a v\quad\Longleftrightarrow\quad u<v.
$$

If $0<a<1$, then

$$
\log_a u<\log_a v\quad\Longleftrightarrow\quad u>v.
$$

The analogous statements hold for non-strict inequalities.

*Proof.* Write $p=\log_a u$ and $q=\log_a v$, so $u=a^p$ and $v=a^q$. For $a>1$, the exponential is strictly increasing, giving $p<q$ exactly when $a^p<a^q$. For $0<a<1$, it is strictly decreasing, giving $p<q$ exactly when $a^p>a^q$. Equality is preserved by both inverse functions. Combining equality with the strict cases gives the non-strict versions. ∎

As a consequence, $\log_a x$ is positive for $x>1$ when $a>1$, but negative for $x>1$ when $0<a<1$. In both cases it equals zero at $x=1$. These sign facts follow from comparing with $\log_a1=0$, rather than from a separate memorised rule.

**Example 11.10 (A decreasing base).** Solve $\log_{1/2}(2x-1)\ge-2$.

First $2x-1>0$, so $x>1/2$. The number $-2$ equals $\log_{1/2}4$. Because this logarithm decreases, the displayed inequality is equivalent, on its domain, to $2x-1\le4$. This gives $x\le5/2$. Combining the two conditions yields

$$
\frac12<x\le\frac52.
$$

At $x=5/2$ the argument is $4$, producing equality. The excluded lower endpoint would give argument zero, so it cannot be added even though it satisfies the linear inequality. Checking $x=1$ gives logarithm $0\ge-2$; checking $x=3$ gives an argument larger than $4$ and hence a logarithm less than $-2$. These checks agree with the interval, while the monotonicity argument proves it for every point.

## Exercises

Each exercise is over the real numbers. State domain restrictions whenever an unknown occurs inside a logarithm. Keep exact logarithmic answers unless an approximation is specifically requested.

### Exercise 11.1
<a id="logarithms-ex-1"></a>

Evaluate $\log_5(1/125)$, $\log_9 3$, and $\log_{1/4}16$ by converting each to an exponent question.

<details>
<summary>Hint 1</summary>

Write each argument as a power of the base, or express base and argument using the same smaller base.

</details>
<details>
<summary>Hint 2</summary>

Use $125=5^3$, $9=3^2$, and $1/4=4^{-1}$. A reciprocal base changes the sign of the exponent.

</details>
<details>
<summary>Solution</summary>

Since $5^{-3}=1/125$, the first logarithm is $-3$. For the second, $9^t=3$ becomes $3^{2t}=3^1$, so $2t=1$ and $t=1/2$. For the third, $(1/4)^t=16$ becomes $4^{-t}=4^2$, so $-t=2$ and $t=-2$. Each logarithm has an allowed base and a positive argument, so these exponent calculations define real values.

</details>

### Exercise 11.2
<a id="logarithms-ex-2"></a>

Find the domain of $f(x)=\ln(x-2)+\ln(7-x)$. Explain why neither endpoint belongs to it.

<details>
<summary>Hint 1</summary>

There are two logarithms, so impose two positive-argument conditions before combining anything.

</details>
<details>
<summary>Hint 2</summary>

Intersect $x-2>0$ with $7-x>0$. Logarithms, unlike square roots, do not allow argument zero.

</details>
<details>
<summary>Solution</summary>

The first argument requires $x>2$, and the second requires $x<7$. Both hold exactly for $2<x<7$, so the domain is $(2,7)$. At $2$ the first argument is zero; at $7$ the second is zero. Neither $\ln0$ exists as a real number. Within the interval the product law may combine the terms, but it does not make the original endpoint expressions defined.

</details>

### Exercise 11.3
<a id="logarithms-ex-3"></a>

For $u,v>0$, expand $\log_2(8u^3/\sqrt v)$. State which hypotheses permit the power laws.

<details>
<summary>Hint 1</summary>

Separate the positive factors in the numerator and subtract the logarithm of the positive denominator.

</details>
<details>
<summary>Hint 2</summary>

The square root is $v^{1/2}$, and $8=2^3$. Apply the power law separately to each positive base.

</details>
<details>
<summary>Solution</summary>

The assumptions make $u^3$ and $\sqrt v$ positive. Thus the expression equals $\log_2 8+\log_2(u^3)-\log_2(v^{1/2})=3+3\log_2u-\tfrac12\log_2v$. The power law uses $u>0$ and $v>0$; its exponent may be $3$ or $1/2$. No assumption that either logarithm itself be positive is needed.

</details>

### Exercise 11.4
<a id="logarithms-ex-4"></a>

Solve $\log_3(x-2)+\log_3 x=1$ and check every algebraic candidate against the original expression.

<details>
<summary>Hint 1</summary>

The domain is determined by $x-2>0$ and $x>0$. Use the product law only after recording it.

</details>
<details>
<summary>Hint 2</summary>

The resulting product must equal $3$. Factor $x^2-2x-3$ and then use the domain restriction.

</details>
<details>
<summary>Solution</summary>

The original domain is $x>2$. There the equation becomes $\log_3(x(x-2))=1$, so $x^2-2x=3$ and $(x-3)(x+1)=0$. The candidates are $3$ and $-1$. The latter is excluded because the original arguments would be $-3$ and $-1$. At $x=3$ the original sum is $\log_3 1+\log_3 3=0+1=1$. Therefore $x=3$ is the only solution.

</details>

### Exercise 11.5
<a id="logarithms-ex-5"></a>

Solve $\log_5(x+4)-\log_5(x-1)=1$.

<details>
<summary>Hint 1</summary>

Use the original arguments to find the domain, then combine the difference by the quotient law.

</details>
<details>
<summary>Hint 2</summary>

On the domain, the quotient $(x+4)/(x-1)$ must equal $5$, and its denominator is nonzero.

</details>
<details>
<summary>Solution</summary>

The original conditions $x+4>0$ and $x-1>0$ give $x>1$. The quotient equation is $(x+4)/(x-1)=5$. Multiplication by the nonzero denominator gives $x+4=5x-5$, hence $x=9/4$. It belongs to the domain. Its original arguments are $25/4$ and $5/4$; their ratio is $5$, so the original difference equals $\log_5 5=1$. Thus the solution set is $\{9/4\}$.

</details>

### Exercise 11.6
<a id="logarithms-ex-6"></a>

Solve $\log_{1/3}(x+2)<-1$, retaining the argument condition.

<details>
<summary>Hint 1</summary>

Replace $-1$ by the logarithm of a positive number with base $1/3$.

</details>
<details>
<summary>Hint 2</summary>

Since $(1/3)^{-1}=3$ and the logarithm decreases, the argument must lie on the opposite side of $3$.

</details>
<details>
<summary>Solution</summary>

First $x+2>0$, so $x>-2$. As $-1=\log_{1/3}3$, decreasing monotonicity gives $x+2>3$, or $x>1$. This automatically satisfies the original domain, so the answer is $(1,\infty)$. The endpoint $1$ gives equality and is excluded by the strict inequality. Reversing the argument comparison is essential for a base between zero and one.

</details>

### Exercise 11.7
<a id="logarithms-ex-7"></a>

For allowed bases $a,b>0$ with $a,b\ne1$, prove $\log_a b\,\log_b a=1$. Explain why neither factor is zero.

<details>
<summary>Hint 1</summary>

Express both factors using natural logarithms.

</details>
<details>
<summary>Hint 2</summary>

A logarithm equals zero exactly when its argument equals $1$. Use the base hypotheses before cancelling.

</details>
<details>
<summary>Solution</summary>

The change-of-base formula gives $\log_a b=\ln b/\ln a$ and $\log_b a=\ln a/\ln b$. Because $a,b\ne1$, both $\ln a$ and $\ln b$ are nonzero. Their product therefore cancels to $1$. Alternatively, $\log_a b=0$ would imply $b=a^0=1$, a contradiction, and the other factor is nonzero for the same reason. This also confirms that the reciprocal relation does not involve division by zero.

</details>

### Exercise 11.8
<a id="logarithms-ex-8"></a>

Solve $4\cdot3^{2t}=28$ exactly for real $t$. Check that your expression satisfies the equation.

<details>
<summary>Hint 1</summary>

Divide by the positive coefficient before taking a logarithm.

</details>
<details>
<summary>Hint 2</summary>

The equation becomes $3^{2t}=7$. Either use the definition of $\log_3$ or take natural logarithms.

</details>
<details>
<summary>Solution</summary>

Dividing by $4$ gives $3^{2t}=7$, so $2t=\log_3 7=\ln7/\ln3$. Since $\ln3\ne0$, the unique answer is $t=\ln7/(2\ln3)$. Substitution gives $3^{2t}=3^{\log_3 7}=7$ and hence the original left side is $28$. The exponent is real and has no additional domain restriction. Uniqueness follows because $t\mapsto3^{2t}$ is strictly increasing.

</details>

### Exercise 11.9
<a id="logarithms-ex-9"></a>

Find the domain of $g(x)=\sqrt{\log_{1/2}(x-1)}$.

<details>
<summary>Hint 1</summary>

The logarithm needs a positive argument, and the square root needs a nonnegative input.

</details>
<details>
<summary>Hint 2</summary>

Compare the logarithm with $\log_{1/2}1=0$, remembering that this base makes it decreasing.

</details>
<details>
<summary>Solution</summary>

The first condition is $x-1>0$, or $x>1$. The second is $\log_{1/2}(x-1)\ge0=\log_{1/2}1$. Decreasing monotonicity makes it equivalent to $x-1\le1$, or $x\le2$, within the positive-argument domain. The intersection is $(1,2]$. At $2$ the logarithm and square root both equal zero; at $1$ the logarithm is undefined. Thus the endpoint decisions come from different operations.

</details>

### Exercise 11.10
<a id="logarithms-ex-10"></a>

A proposed identity is $\ln(x^2-1)=2\ln x$ for all $x>1$. Disprove it with an exact example. Then give a correct logarithmic expansion on $x>1$.

<details>
<summary>Hint 1</summary>

Test $x=2$. Compare the two sides using the power law and the one-to-one property of $\ln$.

</details>
<details>
<summary>Hint 2</summary>

Factor $x^2-1$ as a product. Both factors are positive on the specified domain.

</details>
<details>
<summary>Solution</summary>

At $x=2$, the left side is $\ln3$ and the proposed right side is $2\ln2=\ln4$. They differ because $3\ne4$ and $\ln$ is one-to-one. For every $x>1$, factorisation gives $x^2-1=(x-1)(x+1)$ with both factors positive. The correct expansion is therefore $\ln(x^2-1)=\ln(x-1)+\ln(x+1)$. The power law applies to a whole positive power; it does not remove a subtraction inside an argument.

</details>

## Summary

A logarithm records the unique exponent producing a positive argument from an allowed positive base. The inverse identities turn exponent laws into the product, quotient, and power laws, and give the change-of-base formula with a justified nonzero denominator. Each law has a domain: a positive product alone does not justify taking separate logarithms of its factors. Equations require candidate checks against the original arguments. Inequalities preserve order for bases above one and reverse it for bases between zero and one.

The next chapter, [Sequences, Series, and the Binomial Theorem](sequences-series-binomial-theorem.md), applies powers to quantities indexed by whole numbers. Logarithms will help answer questions about how many multiplicative steps are needed, while finite sums organise the totals of those steps.

## Sources and acknowledgements

This chapter develops original explanations, examples, exercises, and algebraic proofs from the inverse-function viewpoint. It uses the topic framework of the existing Euler chapter [Exponential and Logarithmic Functions](../functions-equations-proof/exponential-and-logarithmic-functions.md) and the logarithm preparation in `modules/textbooks/shared_foundations/00f-exp-log-trig.qmd`; those source texts remain available with their proofs and attribution.

For an additional textbook treatment, see Jay Abramson et al., *Algebra and Trigonometry 2e*, OpenStax, [6.3 Logarithmic Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-3-logarithmic-functions) and [6.5 Logarithmic Properties](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-5-logarithmic-properties), consulted 13 November 2026. The linked OpenStax text is licensed CC BY-NC-SA 4.0; it is cited for further reading, and no text or figures are reproduced here. This Euler chapter is licensed CC BY-SA 4.0.
