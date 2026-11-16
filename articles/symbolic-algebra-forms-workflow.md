
# Symbolic Algebra by Form: Domains, Factors, and Reliable Transformations

**Before reading.** Read [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md), [Linear Equations, Inequalities, and Systems](../books/algebra-and-functions/linear-equations-inequalities-systems.md) and [Powers and Roots](../books/number-and-arithmetic/powers-roots.md). These are preparation for the ideas used below.

An expression can be rewritten without changing its allowed value, yet different forms reveal different facts. Expanded form exposes coefficients. Factored form exposes roots and signs. Completed-square form exposes a vertex. A quotient-plus-remainder exposes end behavior. Reliable symbolic algebra is therefore not “simplify everything”; it is **choose a form that answers the next question while preserving the domain**.

This deep dive preserves the secondary-level material that originally occupied the `book-algebra-patterns-structure` catalog identity. That identity now develops a full abstract-algebra manuscript. The present resource remains the prerequisite-repair route for symbolic manipulation.

## 1. Keep a domain ledger

The equality

\[
\frac{x^2-1}{x-1}=x+1.
\]

holds only when $x\ne 1$. The left expression is undefined at $1$; the right expression is defined there. Cancellation preserves values on the original domain but can hide an excluded input.

Use a ledger:

| original restrictions | operation | candidates or new form | original check |
| --- | --- | --- | --- |
| denominator nonzero | cancel a common factor | simpler quotient | restore excluded inputs |
| radicand allowed | square both sides | polynomial candidates | substitute; reject extras |
| log arguments positive | combine logarithms | one logarithm | preserve positivity |
| substitution range | solve in new variable | candidate values | map back through range |

Three common corrections are:

- $\sqrt{x^{2}}=|x|$, not always $x$;
- squaring \(u=v\) gives \(u^2=v^2\), but reversing that step permits
  \(u=\pm v\);
- $\log(xy)=\log x+\log y$ over the reals requires $x>0$ and $y>0$.

## 2. Read the expression tree

In $3(x-2)^{2}+5$, the outer operations are: subtract two, square, multiply by three, add five. A substitution replaces a complete subtree. Setting $u=x-2$ gives $3u^{2}+5$.

Before manipulating, scan for:

- a greatest common factor;
- a repeated block;
- a standard identity;
- a hidden quadratic in $x^{2}$, $\sin x$, or an exponential;
- a form that exposes roots, extrema, sign, or long-run behavior.

For

$$12x^{5}-18x^{3}$$

the outer common factor is $6x^{3}$, giving

$$6x^{3}(2x^{2}-3)$$

This immediately shows a root at zero of multiplicity three. Whether $2x^{2}-3$ is “fully factored” depends on whether coefficients may be integers, rationals, reals, or complex numbers.

## 3. Worked comparison: three quadratic lenses

**Worked example.**

Consider

$$q(x)=2x^{2}-12x+10$$

Expanded form displays coefficients and leading behavior. Factoring gives

$$q(x)=2(x-1)(x-5)$$

so the roots are $1$ and $5$. Completing the square gives

$$q(x)=2(x-3)^{2}-8$$

so the vertex is $(3,-8)$ and the minimum is $-8$.

The quadratic formula should be derived with its conditions. For

$ax^{2}+bx+c=0$, $a\ne 0$,

divide by $a$, complete the square, and obtain

\[
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
\]

The discriminant classifies real roots only after the coefficient field is named. A negative discriminant prevents real roots but not complex roots.

## 4. Hidden quadratics and range conditions

Solve

$$x^{4}-13x^{2}+36=0$$

Let $u=x^{2}$. Then

$$u^{2}-13u+36=(u-4)(u-9)=0$$

so \(u=4\) or \(9\). Mapping back gives \(x=\pm2,\pm3\).

The substitution carries a range condition: for real $x$, $u=x^{2}\ge 0$. In

$$x^{4}+5x^{2}+4=0$$

the transformed roots $u=-1,-4$ yield no real solutions.

For exponentials, let $u=3^{x}>0$. Then

\[
9^x-10\cdot3^x+9=0.
\]

becomes $(u-1)(u-9)=0$, giving $x=0$ or $2$. The positivity of $u$ is part of the solution, not an afterthought.

## 5. Multiplicity controls local sign

For

$$p(x)=-2(x+3)(x-1)^{2}(x-4)^{3}$$

the roots have multiplicities $1,2,3$. A factor of odd multiplicity changes sign across its root; one of even multiplicity does not. The negative leading coefficient and even total degree make the far-right sign negative. Moving left:

- cross $4$ with odd multiplicity: sign becomes positive;
- cross $1$ with even multiplicity: sign stays positive;
- cross $-3$ with odd multiplicity: sign becomes negative.

A sign chart uses structure instead of restarting a test calculation on every interval.

## 6. Division, holes, and asymptotes

Polynomial division writes

\[
p=dq+r,\qquad \deg r<\deg d.
\]

When $d=x-a$, substitution gives $p(a)=r$, the remainder theorem.

For a rational function, factor before classifying denominator zeros:

\[
\frac{(x-2)(x+5)}{(x-2)(x-1)}.
\]

The original domain excludes $2$ and $1$. Cancellation shows allowed values agree with $(x+5)/(x-1)$. The cancelled zero at $2$ is a hole with missing value $7$; the surviving zero at $1$ is a vertical asymptote.

For end behavior, division is more reliable than slogans. For example,

\[
\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1},
\]

so the graph approaches the slant line $y=x+1$. An asymptote is a limiting statement, not automatically a line the graph can never cross.

## 7. A dependable workflow

1. Classify the object and the task: solve, prove, factor, bound, or model.
2. Record exclusions and range conditions.
3. Scan for factors, repeated blocks, symmetry, and useful target forms.
4. Transform for a stated reason.
5. Mark nonreversible steps such as squaring.
6. Generate candidates.
7. Check in the original problem.
8. Report a solution set with its domain, not merely a final expression.

### When a parameter becomes a forbidden divisor

A domain ledger also belongs beside a parameter-dependent system. From
$x+y+z=1$ and $x+ay+z=b$, subtraction gives $(a-1)y=b-1$.
The expression $y=(b-1)/(a-1)$ describes only the branch $a\ne1$.
At $a=1$, return to the undivided equation: $0=b-1$. It either repeats a
constraint when $b=1$ or rules out every solution when $b\ne1$.
Neither case can be recovered by substituting into the divided expression.

Try predicting those cases in the
[exact parameter laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-parameter-systems), then
read its [full investigation](../apps/atlas/index.html#/labs?lab=visual-lab-parameter-systems) for the
linear-map interpretation and a changed three-equation task. This is the
same workflow as cancellation: preserve the conditions that made each step
reversible, and revisit the original statement at exceptional inputs.

## Boundaries and nonexamples

An algebra system can verify an identity on a declared domain, but it cannot
choose the intended domain silently. For example,
\(\sqrt{x^2}=x\) is valid for \(x\ge0\), while
\(\sqrt{x^2}=|x|\) is valid for every real \(x\). Over complex numbers, even
the meaning of a square-root symbol requires a branch convention.

“Simplest form” is also task dependent. The expanded polynomial
\(x^2-6x+5\), its factorization \((x-1)(x-5)\), and its completed square
\((x-3)^2-4\) encode the same polynomial, but no one form simultaneously makes
coefficients, roots, and minimum most visible. A reliable answer names the
question that selected the form.

Numerical checking remains valuable as falsification. If two proposed forms
disagree at one allowed input, they are not identical. Agreement at a handful
of inputs is not a proof over an infinite domain. Exact symbolic steps, stated
identities, or a polynomial-root bound must carry the general conclusion.

## Practice with solutions

### 1. Factor completely over the integers

<a id="deep-dive-symbolic-algebra-forms-workflow-ex-1"></a>

**Exercise 1.**

Factor $6x^{3}-24x$.


<details>
<summary>Hint 1</summary>

Before factoring the quadratic piece, remove the greatest common factor from all terms.
</details>
<details>
<summary>Hint 2</summary>

Recognize the remaining difference of two squares and factor it into conjugate linear terms.
</details>
<details>
<summary>Solution</summary>

Take the greatest common factor first:

$$6x(x^{2}-4)=6x(x-2)(x+2)$$

</details>

### 2. Vertex form

<a id="deep-dive-symbolic-algebra-forms-workflow-ex-2"></a>

**Exercise 2.**

Rewrite $-3x^{2}+12x+1$ and state its real range.


<details>
<summary>Hint 1</summary>

A downward-opening quadratic reaches its maximum at the completed-square vertex.
</details>
<details>
<summary>Hint 2</summary>

Factor out negative three from the quadratic terms, complete the square, then read the maximum and range.
</details>
<details>
<summary>Solution</summary>

Factor $-3$ from the quadratic terms and complete the square:

$$-3(x^{2}-4x)+1=-3((x-2)^{2}-4)+1=-3(x-2)^{2}+13$$

The maximum is $13$, so the range is $y\le 13$.

</details>

### 3. Hidden quadratic

Solve $x^{4}-13x^{2}+36=0$ over the reals.

**Solution.** With \(u=x^2\), factor \((u-4)(u-9)=0\). Thus
\(x=\pm2,\pm3\).

### 4. Grouping

Factor $2x^{3}-x^{2}-18x+9$.

**Solution.** Group:

$$x^{2}(2x-1)-9(2x-1)=(x^{2}-9)(2x-1)$$

$$=(x-3)(x+3)(2x-1)$$

### 5. Remainder

Find the remainder when $x^{5}-2x^{3}+7$ is divided by $x+1$.

**Solution.** Substitute $x=-1$: $-1-2(-1)+7=8$.

### 6. Rational classification

Classify discontinuities and asymptotes of $(x^{2}-4)/(x^{2}-x-2)$.

**Solution.** Factor as
\(\frac{(x-2)(x+2)}{(x-2)(x+1)}\). There is a hole at \(x=2\) with missing
value \(4/3\), a vertical asymptote at \(x=-1\), and a horizontal asymptote
\(y=1\) from equal leading degrees.

### 7. Rational inequality

Solve $(x-1)/(x+2)\le 0$.

**Solution.** Critical values are excluded $-2$ and zero $1$. The sign is negative on $(-2,1)$ and zero at $1$, so the solution is $(-2,1]$.

### 8. Domain loss

Give a simplification that changes the apparent natural domain.

**Solution.** $(x^{2}-1)/(x-1)$ simplifies to $x+1$, but the original excludes $x=1$. The correct equivalence retains $x\ne 1$.
