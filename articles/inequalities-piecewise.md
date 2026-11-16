
# Inequalities, Absolute Value, and Piecewise Boundaries

**Before reading.** Read [Linear Equations, Inequalities, and Systems](../books/algebra-and-functions/linear-equations-inequalities-systems.md) and [Expressions, Laws, and Factorising](../books/algebra-and-functions/expressions-laws-factorising.md). These are preparation for the ideas used below.

An equation asks where two quantities meet. An inequality asks where one stays above, below, inside, or outside another. Its answer is usually a set of intervals, and the endpoints deserve as much care as the algebra between them.

## 1. Order-preserving and order-reversing moves

On the real number line, $a<b$ means $a$ lies left of $b$. Adding the same $c$ translates both positions without changing their order:

$$a<b \Rightarrow a+c<b+c$$

Multiplying by positive $c$ stretches the line without changing orientation. Multiplying by negative $c$ stretches and reflects it, reversing left and right:

$$a<b \land c<0 \Rightarrow ac>bc$$

This explains the sign reversal; it is not an arbitrary rule. From $-4x>12$, divide by −4 to obtain $x<-3$.

Multiplying an inequality by an expression of unknown sign is unsafe without cases. From

$$1/x>2$$

we cannot simply multiply by $x$. If $x>0$, multiplication preserves the sign and gives $1>2x$, hence $0<x<1/2$. If $x<0$, multiplication reverses it and gives $1<2x$, impossible because $2x<0$. Thus the solution is $(0,1/2)$. A sign chart reaches the same result more systematically.

## 2. Interval language and endpoints

The interval $(a,b)$ contains real numbers strictly between $a$ and $b$; round brackets exclude endpoints. $[a,b]$ includes them. Mixed intervals such as $(-\infty,3]$ include 3 but never include infinity: $\infty$ is a direction, not a real endpoint.

Solve $2\le 5-x<9$. Treat it as two simultaneous conditions or preserve the chain:

Subtract 5:

$$-3\le -x<4$$

Multiply every part by −1 and reverse both signs:

$3\ge x>-4$, usually written $-4<x\le 3$ or $x\in (-4,3]$.

A boundary audit substitutes endpoints into the original. At −4, $5-(-4)=9$, but the original requires $<9$, so exclude it. At 3, the middle is 2, allowed by $\le$.

## 3. Absolute value as distance

Absolute value is distance from zero. More generally, $|x-c|$ is the distance from $x$ to $c$.

For $r\ge 0$:

- inside a radius: $|x-c|\le r \Longleftrightarrow c-r\le x\le c+r$;
- outside a radius: $|x-c|\ge r \Longleftrightarrow x\le c-r\text{ or }x\ge c+r$.

Solve $|3x+1|\le 7$. This says

$$-7\le 3x+1\le 7$$

so $-8\le 3x\le 6$ and $-8/3\le x\le 2$.

Solve $|2x-5|>3$. The distance outside condition gives

$2x-5<-3$ or $2x-5>3$,

so $x<1$ or $x>4$.

### Negative-radius counterexamples

Templates assume $r\ge 0$. Because absolute value is always nonnegative:

- $|u|\le -2$ has no solutions;
- $|u|>-2$ is true wherever $u$ is defined;
- $|u|=0$ exactly when $u=0$.

Check the radius before splitting cases.

## 4. Polynomial sign charts

To solve a factored polynomial inequality, mark roots, determine sign on each open interval, then include roots if equality permits.

Solve

$$(x+2)(x-1)^{2}(x-4)<0$$

Critical points are −2, 1, and 4. Each factor’s sign can be tracked, but multiplicity is quicker: sign flips at the simple roots −2 and 4, and does not flip at the double root 1. For large positive $x$, the product is positive. Moving left:

- $(4,\infty)$: positive;
- crossing 4: $(1,4)$ negative;
- crossing double root 1: $(-2,1)$ remains negative;
- crossing −2: $(-\infty,-2)$ positive.

Because the inequality is strict, roots are excluded. The solution is $(-2,1)\cup (1,4)$. Although both adjacent intervals have negative sign, $x=1$ must still be removed because the product equals zero there. For $\le 0$, the answer would be $[-2,4]$.

Expanded form hides this local structure; factoring is the useful representation.

## 5. Rational sign charts and forbidden points

Solve

$$(x+1)/(x-3)\ge 0$$

The numerator is zero at −1; the denominator is zero at 3, which is excluded. Test intervals:

- $x<-1$: negative divided by negative is positive;
- $-1<x<3$: positive divided by negative is negative;
- $x>3$: positive divided by positive is positive.

Include −1 because equality is allowed, but never include 3. The answer is $(-\infty,-1]\cup (3,\infty)$.

If factors cancel, keep their original exclusions. For

$$(x-2)(x+1)/[(x-2)(x-3)]\ge 0$$

the simplified sign is $(x+1)/(x-3)$, but $x=2$ remains a hole. Starting from the previous solution and removing 2 gives $(-\infty,-1]\cup (3,\infty)$ anyway because 2 was already outside; in other problems, the cancelled point may split an otherwise included interval.

Example:

$$(x-2)^{2}/[(x-2)(x+1)]>0$$

simplifies to $(x-2)/(x+1)>0$ for $x\ne 2,-1$. The sign solution is $(-\infty,-1)\cup (2,\infty)$. Strictness already excludes 2, but for $\ge 0$, one might be tempted to include it from the simplified numerator; the original domain forbids it.

## 6. Quadratic inequalities through geometry

Solve $x^{2}-6x+5\le 0$. Factoring gives $(x-1)(x-5)\le 0$. The upward-opening quadratic is nonpositive between its roots, so the answer is $[1,5]$.

Completing the square gives the same geometry:

$$(x-3)^{2}-4\le 0 \Longleftrightarrow (x-3)^{2}\le 4 \Longleftrightarrow |x-3|\le 2$$

again $[1,5]$.

For $-x^{2}+6x-5\le 0$, multiplying by −1 reverses the inequality to $x^{2}-6x+5\ge 0$, giving $x\le 1$ or $x\ge 5$. A flipped parabola reverses where it is below the axis.

If the discriminant is negative, there are no real roots, but the sign question remains. $x^{2}+1>0$ for every real $x$; $-x^{2}-1>0$ for none. The leading coefficient plus one test point decides the constant sign.

## 7. Piecewise functions and boundary contracts

Define

```text
f(x) = 2x + 1   when x < 0,
       x²        when 0 ≤ x ≤ 2,
       5         when x > 2.
```

Each input belongs to exactly one case. Evaluate by choosing the case first:

- $f(-3)=-5$;
- $f(0)=0$, from the middle rule;
- $f(2)=4$, from the middle rule;
- $f(2.1)=5$, from the last rule.

At 0 the left-hand outputs approach 1, while the function value is 0, so there is a jump. At 2 the middle values approach 4, while values just to the right are 5, another jump. A function need not be continuous.

To solve $f(x)\ge 3$, solve inside each case and intersect with that case’s domain:

- when $x<0$, $2x+1\ge 3$ gives $x\ge 1$, incompatible: none;
- when $0\le x\le 2$, $x^{2}\ge 3$ gives $x\ge \sqrt{3}$, so $[\sqrt{3},2]$;
- when $x>2$, $5\ge 3$ is always true, so $(2,\infty)$.

Union gives $[\sqrt{3},\infty)$. The endpoint 2 is covered by the middle case and the values beyond it by the last.

## 8. A worked proof inequality: AM–GM for two numbers

**Worked example.**

For nonnegative real $a,b$,

$$(a+b)/2 \ge \sqrt{ab}$$

Because squares are nonnegative,

$$(\sqrt{a}-\sqrt{b})^{2}\ge 0$$

Expanding gives $a-2\sqrt{ab}+b\ge 0$, hence $a+b\ge 2\sqrt{ab}$. Divide by 2. Equality occurs exactly when $\sqrt{a}=\sqrt{b}$, or $a=b$.

The hypotheses matter. Over real numbers, $\sqrt{ab}$ may be defined for two negative numbers, but the claim fails: with $a=b=-1$, the left side is −1 and the right is 1. Nonnegativity is not optional.

### Application

Among positive rectangles with fixed perimeter 20, let side lengths be $x$ and $10-x$, with $0<x<10$. AM–GM gives

$$x(10-x)\le [(x+10-x)/2]^{2}=25$$

with equality when $x=10-x=5$. The square maximizes area.

## 9. An interval algorithm

For a rational inequality whose numerator and denominator are factored:

```text
procedure rational_sign_intervals(numerator factors, denominator factors):
    collect every real zero, labelled root or exclusion
    sort the critical values
    for each open interval:
        choose one test point
        multiply factor signs at that point
    include numerator roots only when ≤ or ≥ allows equality
    never include denominator roots or original cancelled exclusions
```

With $m$ critical values, sorting takes on the order of $m \log m$ comparisons. Testing $m+1$ intervals against $m$ factors directly takes on the order of $m^{2}$ sign checks; multiplicity tracking can reduce the post-sort scan to linear time once the far-right sign is known.

## Exercises

<a id="deep-dive-inequalities-piecewise-ex-1"></a>

### Exercise 1

1. Solve $4-5x\ge 19$.

<details>
<summary>Hint 1</summary>

First isolate the term containing x by subtracting four.
</details>

<details>
<summary>Hint 2</summary>

Dividing an inequality by a negative coefficient reverses its direction.
</details>

<details>
<summary>Solution</summary>

$-5x\ge 15$, so $x\le -3$ after reversing on division by −5.

</details>

<a id="deep-dive-inequalities-piecewise-ex-2"></a>

### Exercise 2

2. Solve $-3<2x+1\le 9$.

<details>
<summary>Hint 1</summary>

Treat the double inequality as two bounds that must both hold.
</details>

<details>
<summary>Hint 2</summary>

Subtract one from every part and divide every part by the positive coefficient two.
</details>

<details>
<summary>Solution</summary>

Subtract 1: $-4<2x\le 8$; divide by 2: $-2<x\le 4$.

</details>

### Further exercises

3. Solve $|x-4|<6$ and interpret it as distance.
4. Solve $|3-2x|\ge 5$.
5. Solve $(x-3)^{2}(x+1)>0$.
6. Solve $(x-2)/(x^{2}-9)\le 0$.
7. Solve $x^{2}+2x-8>0$.
8. For the piecewise $g(x)=-x$ when $x<1$, and $g(x)=x-2$ when $x\ge 1$, calculate $g(1)$ and solve $g(x)=0$.
9. Identify the flaw: from $x<1$, multiply by $x-2$ to conclude $x(x-2)<x-2$.
10. Prove $x+1/x\ge 2$ for $x>0$, and give a counterexample if $x<0$ is allowed.

## Answers


3. $-2<x<10$: inputs within 6 units of 4.
4. $3-2x\ge 5$ or $3-2x\le -5$, giving $x\le -1$ or $x\ge 4$.
5. The squared factor is positive except at 3 and does not change sign. The product’s sign follows $x+1$; require $x>-1$ but exclude the zero at 3 because the inequality is strict: $(-1,3)\cup (3,\infty)$.
6. Critical values are −3,2,3; −3 and 3 are excluded. Testing gives negative on $(-\infty,-3)$ and $(2,3)$, zero at 2. Answer $(-\infty,-3)\cup [2,3)$.
7. Factor $(x+4)(x-2)>0$; outside the roots: $x<-4$ or $x>2$.
8. At 1 use the second case: $g(1)=-1$. For $x<1$, $-x=0$ gives $x=0$, allowed. For $x\ge 1$, $x-2=0$ gives $x=2$, allowed. Both are solutions.
9. The multiplier $x-2$ is negative when $x<1$, so the inequality must reverse. The claimed conclusion has the wrong direction.
10. $(\sqrt{x}-1/\sqrt{x})^{2}\ge 0$ gives $x-2+1/x\ge 0$. Hence the claim, with equality at 1. If $x=-1$, the left side is −2, not at least 2; positivity is essential.

## Exit test

Solve one polynomial and one rational inequality, then explain every endpoint in words: zero included, zero excluded by strictness, or denominator exclusion. If your final interval notation cannot be reconstructed from that explanation, the reasoning is not yet auditable.
