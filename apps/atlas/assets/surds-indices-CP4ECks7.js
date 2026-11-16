var e=`---
parent_id: book-algebra-and-functions
chapter_id: surds-indices
title: "Surds and Indices"
level: secondary
license: CC BY-SA 4.0
---

# Surds and Indices

## What does a fractional power mean?

A square with area $18$ square centimetres has side length $\\sqrt{18}$ centimetres. A calculator can approximate this length, but $3\\sqrt2$ describes it exactly. Likewise, the instruction to multiply by $2$ three times is expressed by $2^3$, whereas multiplying by $2^{-3}$ reverses that change. These notations become useful when their meanings fit together: roots extend powers, and negative indices express reciprocals.

This chapter develops those connections without forgetting their domains. You will simplify expressions with integer and rational indices, calculate with real radicals, rationalise denominators, and solve equations that contain a square root. The important habit is to ask which expressions are defined before applying a rule. A plausible manipulation with an undefined intermediate expression cannot establish an identity of real numbers.

The preparation is [expressions and algebraic laws](expressions-laws-factorising.md), [linear equations and inequalities](linear-equations-inequalities-systems.md), and [quadratic equations](quadratic-equations.md). The language of domain comes from [functions, domain and graphs](functions-domain-graphs.md). All roots and powers in this chapter are real unless stated otherwise. An index is an exponent; the two words mean the same thing here.

## Integer indices: multiplication and reciprocals

**Definition 9.1 (Integer powers).** For a real number $a$ and a positive integer $n$, $a^n$ is the product of $n$ copies of $a$. For $a\\ne0$, define $a^0=1$ and $a^{-n}=1/a^n$. We leave $0^0$ and negative powers of zero undefined in this chapter.

The base includes precisely what is enclosed in parentheses. Thus $(-3)^2=9$, while $-3^2=-(3^2)=-9$. Similarly, $(-3)^3=-27$. An even number of negative factors gives a positive product; an odd number gives a negative product. The minus sign in an exponent has a different job: $3^{-2}=1/9$, rather than $-9$ or $-1/9$.

**Proposition 9.2 (Integer index laws).** If $a,b$ are nonzero real numbers and $m,n$ are integers, then

$$
a^ma^n=a^{m+n},\\qquad \\frac{a^m}{a^n}=a^{m-n},\\qquad (a^m)^n=a^{mn},
$$

$$
(ab)^n=a^nb^n,\\qquad \\left(\\frac ab\\right)^n=\\frac{a^n}{b^n}.
$$

*Proof.* For positive indices, the first law counts the factors in two adjacent products. Raising a product to a positive integer power repeats each factor the same number of times; regrouping gives the third and fourth laws. Taking reciprocals gives the corresponding statements for negative outer indices. To check the first law when one index is negative, write, for example, $a^m a^{-k}=a^m/a^k$ with $m,k$ positive. Cancelling $k$ factors when $m\\ge k$, or $m$ factors when $m<k$, gives respectively $a^{m-k}$ or $1/a^{k-m}=a^{m-k}$. Two negative indices give $a^{-j}a^{-k}=1/(a^ja^k)=a^{-(j+k)}$. The zero cases follow from $a^0=1$. The quotient law now follows by multiplying by $a^{-n}$. For the power law with negative inner index, $(a^{-j})^n=(1/a^j)^n=a^{-jn}$; the same reciprocal argument handles negative $n$. The quotient-of-bases law follows by writing $a/b=a b^{-1}$. All divisions are permitted because the bases are nonzero. ∎

Positive integer powers of zero still obey familiar multiplication rules where no zero or negative exponent occurs. The nonzero assumptions above deliberately give one safe statement valid for every integer index. They do not claim that $0^3$ is forbidden.

**Example 9.3 (Simplifying without losing a restriction).** Simplify

$$
\\frac{(2x^{-2}y^3)^2}{4x^{-1}y},\\qquad x\\ne0,\\quad y\\ne0.
$$

Squaring the product gives $4x^{-4}y^6$. Dividing by $4x^{-1}y$ cancels the numerical factor and subtracts the indices:

$$
\\frac{4x^{-4}y^6}{4x^{-1}y}=x^{-3}y^5=\\frac{y^5}{x^3}.
$$

The original expression excludes $y=0$ because its denominator contains $y$. The final formula has a value there, but that extra value is not part of the original domain. Therefore the simplification is an equality for $x\\ne0$ and $y\\ne0$. Recording a shorter formula and recording its domain are separate tasks.

## Roots select particular numbers

**Definition 9.4 (Real roots and principal roots).** Let $n\\ge2$ be an integer. If $n$ is even and $a\\ge0$, the notation $\\sqrt[n]{a}$ means the unique nonnegative real number whose $n$th power is $a$. If $n$ is odd and $a$ is any real number, it means the unique real number whose $n$th power is $a$. The square root $\\sqrt a$ is $\\sqrt[2]{a}$. For completeness, set $\\sqrt[1]{a}=a$; this convention will include integer powers in the rational-power notation below.

The existence of these roots is a property of the real numbers used here; a full construction belongs to real analysis. Their uniqueness can be understood algebraically. If $0\\le u<v$, then

$$
v^n-u^n=(v-u)(v^{n-1}+v^{n-2}u+\\cdots+u^{n-1})>0.
$$

The second factor is positive because $v>0$. Hence two different nonnegative numbers cannot have the same positive integer power. For odd powers, negative inputs give negative outputs and positive inputs give positive outputs; reflecting the nonnegative comparison proves uniqueness on the negative side as well.

A root symbol denotes one number. Although the equation $t^2=25$ has solutions $5$ and $-5$, the expression $\\sqrt{25}$ is $5$. The notation $\\pm\\sqrt{25}$ lists the two solutions when solving the equation. The number zero has just one square root, so $t^2=0$ has only the solution $t=0$.

**Proposition 9.5 (Undoing a square).** For every real $x$,

$$
\\sqrt{x^2}=|x|.
$$

*Proof.* The number $|x|$ is nonnegative and its square is $x^2$, whether $x$ is positive, negative or zero. Uniqueness of the nonnegative square root proves the formula. ∎

The order of the operations matters. We also have $(\\sqrt x)^2=x$ for $x\\ge0$, but here the domain is restricted by the inner root. In $\\sqrt{x^2}$ the radicand is nonnegative for every real $x$. For instance, $\\sqrt{(-7)^2}=7$, so replacing $\\sqrt{x^2}$ by $x$ would fail at $x=-7$.

## Fractional indices and negative bases

**Definition 9.6 (Rational powers of a positive base).** For $a>0$, an integer $m$ and a positive integer $n$, define

$$
a^{m/n}=\\left(\\sqrt[n]{a}\\right)^m.
$$

This agrees with integer powers when $n=1$. A negative numerator takes a reciprocal after the root is found. For example, $16^{3/4}=2^3=8$ and $16^{-3/4}=1/8$.

This definition must give the same answer for equal fractions. Suppose $m/n=p/q$, and let $c=\\sqrt[nq]{a}>0$. Uniqueness of positive roots gives $\\sqrt[n]{a}=c^q$ and $\\sqrt[q]{a}=c^n$. Therefore the two proposed values are $c^{mq}$ and $c^{pn}$; these agree because $mq=pn$. This also works with negative numerators because $c\\ne0$. Thus reducing or expanding a fraction does not alter a positive-base power.

**Proposition 9.7 (Rational index laws for positive bases).** For $a,b>0$ and rational $r,s$,

$$
a^r a^s=a^{r+s},\\qquad \\frac{a^r}{a^s}=a^{r-s},\\qquad (a^r)^s=a^{rs},\\qquad (ab)^r=a^rb^r.
$$

*Proof.* Write $r=m/n$ and $s=p/q$ with positive denominators, and set $c=\\sqrt[nq]{a}$. Then $a^r=c^{mq}$ and $a^s=c^{pn}$, so the product rule follows from the integer rule. The quotient rule follows in the same way. If $d=\\sqrt[q]{a^{m/n}}$, uniqueness of positive roots gives $d=c^m$, since $(c^m)^q=a^{m/n}$. Hence $(a^{m/n})^{p/q}=c^{mp}=a^{mp/(nq)}$. Finally, the positive number $\\sqrt[n]{a}\\sqrt[n]{b}$ has $n$th power $ab$. It is therefore $\\sqrt[n]{ab}$; raising to the integer power $m$ proves the product-of-bases rule. ∎

Zero needs separate care: $0^r=0$ for positive rational $r$, but $0^0$ and $0^r$ for negative $r$ remain undefined. Negative bases require more care still. If $a<0$, this chapter permits $a^{m/n}$ when $m/n$ is in lowest terms and its positive denominator $n$ is odd, using the real odd root followed by the integer power. Thus $(-8)^{1/3}=-2$ and $(-8)^{2/3}=4$. A reduced even denominator, such as $1/2$, does not give a real value for a negative base.

The instruction to reduce first matters. The fraction $2/6$ equals $1/3$, so $(-8)^{2/6}$ is interpreted here as $(-8)^{1/3}=-2$. Taking a sixth root of $(-8)^2$ instead would give $2$ and would change the definition. For this reason the unrestricted positive-base laws must not be transferred to negative bases. A sharp counterexample is

$$
\\left((-8)^{2/3}\\right)^{3/2}=4^{3/2}=8,
\\qquad
(-8)^{(2/3)(3/2)}=(-8)^1=-8.
$$

Both sides exist, but they differ. Keep an expression with a negative base in its stated root form unless the particular transformation has been justified. The next chapter uses positive bases precisely so that powers can be defined for every real exponent.

## Exact radical calculations

**Proposition 9.8 (Square-root product and quotient laws).** If $a,b\\ge0$, then $\\sqrt{ab}=\\sqrt a\\sqrt b$. If also $b>0$, then $\\sqrt{a/b}=\\sqrt a/\\sqrt b$.

*Proof.* The proposed product is nonnegative and its square is $ab$. The proposed quotient is nonnegative, has nonzero denominator, and its square is $a/b$. Each is therefore the required principal root. ∎

The assumptions are essential. With $a=b=-1$, the expression $\\sqrt{ab}=1$ exists, but neither $\\sqrt a$ nor $\\sqrt b$ is real. Even when a radicand is a product, splitting it may be invalid.

An irrational root expression such as $\\sqrt2$ is called a surd. In exact calculations, leave these numbers as roots rather than replacing them prematurely with decimals. Extract a perfect-square factor when possible: $\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2$. Once the root parts agree, combine coefficients as with like algebraic terms. There is no addition law $\\sqrt{a+b}=\\sqrt a+\\sqrt b$: choosing $a=9$, $b=16$ gives $5\\ne7$.

**Example 9.9 (Like surds and absolute values).** Simplify

$$
2\\sqrt{50}-\\sqrt8+\\sqrt{18x^2},\\qquad x\\in\\mathbb R.
$$

The first two terms become $10\\sqrt2-2\\sqrt2$. For the variable term, $18x^2=9\\cdot2\\cdot x^2$ is a product of nonnegative factors, so

$$
\\sqrt{18x^2}=3\\sqrt2\\sqrt{x^2}=3|x|\\sqrt2.
$$

Consequently the expression equals $(8+3|x|)\\sqrt2$. If additional information says $x<0$, this can be written $(8-3x)\\sqrt2$. Without that information, deleting the absolute value would introduce an error. Substituting $x=-2$ checks the distinction: the last root is $\\sqrt{72}=6\\sqrt2$, never $-6\\sqrt2$.

Multiplication uses distributivity as usual. For example, $(\\sqrt3+2)(\\sqrt3-2)=3-4=-1$. The two middle terms cancel because the brackets are conjugates: they have the same two terms with opposite connecting signs. This cancellation is useful when simplifying a fraction whose denominator contains a root.

**Example 9.10 (Rationalising a denominator).** Rewrite $3/(\\sqrt5-2)$ with a rational denominator. Since $\\sqrt5\\ne2$, the original denominator is nonzero. Multiplying numerator and denominator by its conjugate gives

$$
\\frac3{\\sqrt5-2}\\cdot\\frac{\\sqrt5+2}{\\sqrt5+2}
=\\frac{3(\\sqrt5+2)}{5-4}=3\\sqrt5+6.
$$

The multiplier is $1$ because $\\sqrt5+2\\ne0$. The answer is positive, as expected from the positive original denominator. Rationalising changes the form, not the number; a fraction with a radical denominator was already a legitimate exact expression. It is often helpful because addition and comparison become easier after the denominator is simplified.

With variables, check both conjugates. The fraction $1/(\\sqrt x+1)$ is defined for every $x\\ge0$, including $x=1$. Multiplying by $(\\sqrt x-1)/(\\sqrt x-1)$ is allowed only for $x\\ne1$. Thus the rationalised formula $(\\sqrt x-1)/(x-1)$ represents the original function only away from $1$; the original value at $1$ is $1/2$. A method that creates a new denominator must preserve such exceptions explicitly.

## Root equations and the direction of an implication

Squaring preserves an equality: $u=v$ implies $u^2=v^2$. The reverse implication fails because $u^2=v^2$ permits $u=-v$ as well. Consequently squaring an equation can introduce candidate answers that must be checked in the original equation. Domain restrictions alone may not remove all such candidates; signs of both sides matter too.

**Example 9.11 (Checking a candidate after squaring).** Solve $\\sqrt{x+5}=x-1$ over the real numbers. The radicand requires $x\\ge-5$. In addition, the nonnegative left side forces $x-1\\ge0$, so every solution has $x\\ge1$.

Squaring gives $x+5=(x-1)^2=x^2-2x+1$. Hence $x^2-3x-4=0$, or $(x-4)(x+1)=0$. The candidates are $4$ and $-1$. The value $-1$ violates $x\\ge1$ and indeed gives $2=-2$ in the original equation. The value $4$ gives $\\sqrt9=3=4-1$, so the solution set is $\\{4\\}$.

There is also a useful reversible route: on $x\\ge1$, both sides are nonnegative, and squaring is one-to-one there. Thus the squared equation together with $x\\ge1$ is equivalent to the original one. Whichever route you use, write the restrictions before solving, and finish with a substitution that checks the original statement.

## Exercises

### Exercise 9.1
<a id="surds-indices-ex-1"></a>

Evaluate $(-2)^4$, $-2^4$, $2^{-4}$ and $(-2)^{-3}$. Explain what each minus sign does.

<details>
<summary>Hint 1</summary>

Identify the entire base before considering the index. Parentheses decide whether the sign belongs to the base.

</details>
<details>
<summary>Hint 2</summary>

For a negative index, take the reciprocal of the corresponding positive integer power.

</details>
<details>
<summary>Solution</summary>

The four values are $16$, $-16$, $1/16$ and $-1/8$. In $(-2)^4$, four negative factors make a positive product. In $-2^4$, the power is evaluated first and the sign negates its result. In $2^{-4}$, the negative index means $1/2^4$, with no negative factor. Finally, $(-2)^{-3}=1/(-2)^3=1/(-8)$. Thus the location of a minus sign changes the operation it describes.

</details>

### Exercise 9.2
<a id="surds-indices-ex-2"></a>

Simplify $\\dfrac{(3a^{-2}b)^2}{9a^{-1}b^3}$ using positive indices. State the original restrictions.

<details>
<summary>Hint 1</summary>

Find which bases occur in negative powers and which factors occur in the denominator.

</details>
<details>
<summary>Hint 2</summary>

Expand the squared product, then subtract denominator indices from numerator indices.

</details>
<details>
<summary>Solution</summary>

The expression requires $a\\ne0$ because of negative powers, and $b\\ne0$ because the denominator contains $b^3$. Its numerator is $9a^{-4}b^2$, so division gives $a^{-4-(-1)}b^{2-3}=a^{-3}b^{-1}=1/(a^3b)$. The restrictions are retained. Substituting nonzero values would therefore compare two defined expressions; substituting zero into an intermediate negative power would not.

</details>

### Exercise 9.3
<a id="surds-indices-ex-3"></a>

For real $t$, simplify $\\sqrt{49t^2}$. Then solve $\\sqrt{49t^2}=14$.

<details>
<summary>Hint 1</summary>

A square root is nonnegative even if $t$ is negative.

</details>
<details>
<summary>Hint 2</summary>

Use $\\sqrt{t^2}=|t|$, then solve an absolute-value equation.

</details>
<details>
<summary>Solution</summary>

Since both factors are nonnegative, $\\sqrt{49t^2}=7\\sqrt{t^2}=7|t|$ for every real $t$. The equation becomes $|t|=2$, giving $t=2$ or $t=-2$. Both yield radicand $196$ and principal root $14$, so both solve the original equation. Writing $7t$ would wrongly discard the negative solution.

</details>

### Exercise 9.4
<a id="surds-indices-ex-4"></a>

Evaluate $81^{3/4}$, $32^{-2/5}$ and $(-27)^{2/3}$. Explain why $(-27)^{1/2}$ has no real value.

<details>
<summary>Hint 1</summary>

Use the denominator to choose the root and the numerator to choose the integer power.

</details>
<details>
<summary>Hint 2</summary>

The fourth root of $81$ is $3$, the fifth root of $32$ is $2$, and the cube root of $-27$ is $-3$.

</details>
<details>
<summary>Solution</summary>

We obtain $81^{3/4}=3^3=27$, $32^{-2/5}=2^{-2}=1/4$, and $(-27)^{2/3}=(-3)^2=9$. These use positive-base roots or an allowed odd root of a negative number. No real number has square $-27$, because every real square is nonnegative. Hence the final expression has no value in the real-number setting of this chapter.

</details>

### Exercise 9.5
<a id="surds-indices-ex-5"></a>

Simplify $\\sqrt{75}+2\\sqrt{12}-\\sqrt{27}$. Give an exact answer and explain why adding the radicands would be invalid.

<details>
<summary>Hint 1</summary>

Extract the largest convenient perfect-square factor from each radicand.

</details>
<details>
<summary>Hint 2</summary>

All three roots can be expressed as a whole-number multiple of $\\sqrt3$.

</details>
<details>
<summary>Solution</summary>

The roots are $5\\sqrt3$, $2\\sqrt3$ and $3\\sqrt3$, respectively. Remembering the extra coefficient $2$, the expression is $(5+4-3)\\sqrt3=6\\sqrt3$. Square-root laws concern products and quotients of suitable nonnegative radicands, not sums. For example, $\\sqrt1+\\sqrt1=2$, whereas $\\sqrt{1+1}=\\sqrt2\\ne2$. Distributivity combines like root terms after simplification.

</details>

### Exercise 9.6
<a id="surds-indices-ex-6"></a>

Rationalise $\\dfrac2{\\sqrt7+\\sqrt3}$ and verify your answer by multiplication.

<details>
<summary>Hint 1</summary>

Choose a conjugate that cancels the middle terms in the denominator product.

</details>
<details>
<summary>Hint 2</summary>

The product $(\\sqrt7+\\sqrt3)(\\sqrt7-\\sqrt3)$ equals $7-3$.

</details>
<details>
<summary>Solution</summary>

The denominator is positive. Its conjugate is nonzero because $\\sqrt7>\\sqrt3$. Multiplication by the conjugate over itself gives $2(\\sqrt7-\\sqrt3)/4=(\\sqrt7-\\sqrt3)/2$. To verify, multiply this answer by the original denominator: the result is $(7-3)/2=2$, exactly the original numerator. Every denominator used is nonzero, so the rationalisation is valid.

</details>

### Exercise 9.7
<a id="surds-indices-ex-7"></a>

Find the real domain of $\\sqrt{(x-2)(x+1)}$. On which inputs may it also be written as $\\sqrt{x-2}\\sqrt{x+1}$?

<details>
<summary>Hint 1</summary>

For the original expression, only the product under the single root must be nonnegative.

</details>
<details>
<summary>Hint 2</summary>

For the separated expression, each of the two radicands must be nonnegative individually.

</details>
<details>
<summary>Solution</summary>

The product is nonnegative for $x\\le-1$ or $x\\ge2$, including its zeros. Thus the original domain is $(-\\infty,-1]\\cup[2,\\infty)$. The separated expression requires both $x\\ge2$ and $x\\ge-1$, hence $x\\ge2$. The product law establishes equality there. For $x\\le-1$, the factor $x-2$ is negative, so the separated real expression is undefined, even though the original root exists. The domains therefore cannot be silently identified.

</details>

### Exercise 9.8
<a id="surds-indices-ex-8"></a>

Solve $\\sqrt{2x+3}=x$ over the real numbers. List and check every candidate produced by squaring.

<details>
<summary>Hint 1</summary>

The radicand condition is necessary, but the nonnegative left side also imposes a sign on $x$.

</details>
<details>
<summary>Hint 2</summary>

After squaring, factor $x^2-2x-3$.

</details>
<details>
<summary>Solution</summary>

We need $2x+3\\ge0$ and $x\\ge0$, so any solution has $x\\ge0$. Squaring yields $2x+3=x^2$, giving $(x-3)(x+1)=0$. The candidates are $3$ and $-1$. At $3$, the original equation reads $\\sqrt9=3$, which is true. At $-1$, it reads $\\sqrt1=-1$, which is false. The only solution is $x=3$. The rejected candidate was created by a step that forgot the sign of the right side.

</details>

### Exercise 9.9
<a id="surds-indices-ex-9"></a>

For $u>0$, simplify $(u^{1/2}u^{-1/3})^6$. Explain why this calculation does not justify the same written expression for every negative $u$.

<details>
<summary>Hint 1</summary>

Combine the inner powers with a common denominator for their indices.

</details>
<details>
<summary>Hint 2</summary>

The difference $1/2-1/3$ is $1/6$. Check the domain of the original square-root factor.

</details>
<details>
<summary>Solution</summary>

For $u>0$, the inner product is $u^{1/6}$, so its sixth power is $u^{6/6}=u$. All the rational index laws apply because the base is positive. For a negative $u$, the factor $u^{1/2}$ has no real value, even though $u^{-1/3}$ exists. Obtaining the polynomial formula $u$ on the positive domain does not define the original expression on negative inputs. At zero, the negative index causes another obstruction.

</details>

### Exercise 9.10
<a id="surds-indices-ex-10"></a>

A student writes $\\dfrac1{\\sqrt{x}+2}=\\dfrac{\\sqrt{x}-2}{x-4}$ for all $x\\ge0$. Give the precise domain on which this equality is valid, and recover the original value at the excluded input.

<details>
<summary>Hint 1</summary>

Identify the value at which the proposed conjugate multiplier is zero.

</details>
<details>
<summary>Hint 2</summary>

The original denominator is always positive on its domain. The new denominator need not be.

</details>
<details>
<summary>Solution</summary>

The original expression is defined for every $x\\ge0$, since $\\sqrt{x}+2\\ge2$. Its conjugate is zero at $x=4$. For $x\\ge0$ with $x\\ne4$, multiplying by $(\\sqrt{x}-2)/(\\sqrt{x}-2)$ is valid and gives the stated fraction. At $4$, the rationalised expression is $0/0$, which is undefined. The original value is $1/(2+2)=1/4$. Thus an equivalent description uses the rationalised formula away from $4$ and retains that original value separately.

</details>

## Summary

Integer indices count repeated multiplication or its reciprocal, with zero and negative powers requiring nonzero bases. Positive-base rational powers use roots and obey the familiar index laws. Negative bases admit some rational powers, but unrestricted nesting laws fail. Principal even roots are nonnegative, which is why $\\sqrt{x^2}=|x|$.

Exact radical calculations use justified product laws, like terms and conjugates. Each transformation carries its domain with it. Squaring an equation creates candidates; sign conditions and substitution decide which candidates solve the original problem. In [exponential functions](exponential-functions.md), positive-base powers will be extended to real exponents, allowing a variable to appear in the index while preserving a coherent function on the whole real line.

## Sources

The exposition, examples and exercises here are newly written. For further explanations of integer powers and root notation, see OpenStax, *Algebra and Trigonometry 2e*, [§1.2, Exponents and Scientific Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-2-exponents-and-scientific-notation) and [§1.3, Radicals and Rational Exponents](https://openstax.org/books/algebra-and-trigonometry-2e/pages/1-3-radicals-and-rational-exponents), consulted 13 November 2026. The domain qualifications in this chapter are part of each stated law.
`;export{e as default};