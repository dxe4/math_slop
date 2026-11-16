var e=`---
id: course-algebra-functions-standard
title: "Algebra and functions"
level: secondary
estimated_minutes: 480
license: CC BY-SA 4.0
---

# Algebra and functions

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-algebra-functions-standard/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

Algebra is the practice of preserving meaning while changing representation. In this course, an equation is a claim, an inequality is a region of possibilities, a factor exposes a zero, and a function connects formulas with tables, graphs, and models. Every manipulation carries conditions.

## Outcomes and study route

After the course you should be able to:

1. distinguish expressions, identities, equations, and functions;
2. solve linear, quadratic, rational, exponential, and absolute-value conditions while preserving the solution set;
3. move among expanded, factored, and vertex forms of a polynomial;
4. state function domains, compose rules, and decide when an inverse exists;
5. interpret roots, holes, intercepts, and asymptotes;
6. describe sequences explicitly and recursively;
7. build and audit a simple model.

Keep a “condition margin” beside your work. Record statements such as $x\\ne 3$, $b>0$, or “time is nonnegative” before cancelling, taking logarithms, or interpreting an answer.

### Entry diagnostic

1. Simplify $3(x-2)+2x$.
2. Solve $4x-7=9$ and check the result.
3. State the domain of $1/(x-5)$.
4. Explain why $(a+b)^2=a^2+b^2$ is not an identity.

The answers are $5x-6$; $x=4$; all real $x$ except $5$; and the expansion
has the additional term $2ab$, with $a=b=1$ already giving a counterexample.
Repair signed arithmetic and distributivity before Unit 1 if these are
uncertain.

Required preparation is signed arithmetic, distributivity, and simple linear equations. For the source readings, $\\mathbb{R}$ denotes the real numbers, $\\mathbb{Z}$ the integers, $[0,\\infty)$ the nonnegative real numbers, and $(0,\\infty)$ the positive real numbers. The selected course does not require calculus or complex numbers.

The eight-hour authored estimate includes only the elementary selections below from
[Functions, Equations, and Proof](#/item/book-functions-equations-proof), together with this page's worked examples and practice; optional continuations are additional study.

| Stage | Units | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Equations and functions | 1–3 | [Typed functions](#/item/book-functions-equations-proof?chapter=functions-are-typed-assignments), limited to the selections below | Domain ledger, reversible equation solution, and inverse-function test |
| 2. Polynomial and rational structure | 4–6 | The worked derivations and mixed practice on this page | Factored, expanded, and graphical accounts of one function |
| 3. Growth and recurrence | 7–8 | The elementary selections below from [Exponential and logarithmic functions](#/item/book-functions-equations-proof?chapter=exponential-and-logarithmic-functions) and [Difference equations](#/item/book-functions-equations-proof?chapter=difference-equations) | Exact logarithmic solve and recursive/explicit sequence pair |
| 4. Modeling | 9 and capstone | The model audit on this page and the supplied capstone reference below | Two-model audit with residuals and assumptions |

### Required source selections

1. **Typed functions:** read “Why typing matters”, “Definitions”, “The same formula, different functions”, “The inverse theorem”, and “Common errors and how to avoid them”; attempt Exercises 2–4 before reading their solutions. Here “onto” always names a codomain, and an inverse must work in both directions. The “One-sided inverses” section and its arbitrary-set choice discussion are optional continuations.
2. **Exponential and logarithmic functions:** read “Motivation: growth, decay, and scale”; in “The real exponential function”, read the definition and the algebraic-properties and monotonicity/bijectivity statements as quoted facts. Read “The natural logarithm and general logarithms” for the inverse definition, logarithm laws, and the algebraic proof of the product law; use $e\\approx2.71828$ as a fixed base here. Then read “Domain obligations in composition”, “Exponential and logarithmic equations”, and “Common errors and how to avoid them”; attempt Exercises 1–5 before comparing their solutions. Keep all positive-argument and base restrictions in the condition margin.
3. **Difference equations:** in “First-order linear difference equations”, read the definition and the homogeneous solution theorem with its unfolding/induction proof, stopping before “Solution of the nonhomogeneous equation”; attempt Exercise 1 and check both the initial value and recurrence. Use the formula $a_n=a_0r^n$ for $r\\ne0$; if $r=0$, retain the given $a_0$ and use $a_n=0$ for every $n\\ge1$, without evaluating $0^0$. Unit 8 supplies the required arithmetic and geometric sequences and finite Fibonacci iteration. General forcing formulas and characteristic-root methods are optional continuations.

### Optional continuations and their preparation

The full book's later chapters have additional preparation. In the exponential chapter, the extension from rational to real powers by continuity, the intermediate value theorem proof of surjectivity, and the limit definition of $e$ require limits and continuity; their proofs are outside this secondary course. The required algebra uses the stated real-exponential properties without claiming to prove their analytic construction.

In the difference-equations chapter, second-order characteristic roots, repeated roots, and nonhomogeneous equations extend the required recurrence work. Its complex conjugate roots theorem and Exercise 4 additionally require complex numbers, trigonometry, and Euler's formula. They are optional, including when they appear alongside elementary exercises. [Dynamical systems](#/item/book-functions-equations-proof?chapter=dynamical-systems) is a further optional continuation requiring differential equations, derivatives, two-dimensional linear algebra, complex eigenvalues, and trigonometry; it is not part of the eight-hour secondary selection.

## Unit 1 — expressions, identities, and equations

An **expression** such as $3x-5$ names a quantity. An **equation** such as $3x-5=10$ claims two expressions are equal for selected values. An **identity** such as $(x+2)^{2}=x^{2}+4x+4$ is true for every allowed $x$.

The distributive law explains expansion:

$a(b+c)=ab+ac$.

It works backward too: $ab+ac=a(b+c)$. Combining $3x+5x=8x$ is legal because the two terms share the same variable part. Combining $3x+5x^{2}$ is not: they respond differently when $x$ changes.

To solve $4(2x-3)+5=3x+18$, expand and use reversible operations:

$8x-12+5=3x+18$, so $8x-7=3x+18$.

Subtract $3x$ and add 7 on both sides: $5x=25$, hence $x=5$. Check in the original: both sides are 33.

**Boundary warning:** multiplying both sides by zero destroys information. Dividing by an expression that might be zero can discard solutions. “Do the same thing to both sides” is safe only when the operation is reversible under the recorded conditions.

## Unit 2 — inequalities and absolute value

An inequality describes many possible values. Addition preserves order: from $u<v$, we get $u+c<v+c$. Multiplication by a positive number preserves order, while multiplication by a negative reverses it. For example, $2<5$, but multiplying by −3 gives $-6>-15$.

Solve $7-3x\\le 19$:

$-3x\\le 12$, then divide by −3 and reverse the sign: $x\\ge -4$.

Check one included value and one excluded value. At $x=0$, $7\\le 19$ is true. At $x=-5$, $22\\le 19$ is false.

Absolute value $|x|$ is distance from zero. Therefore

- $|x-c|\\le r$ means $c-r\\le x\\le c+r$ when $r\\ge 0$;
- $|x-c|\\ge r$ means $x\\le c-r$ or $x\\ge c+r$ when $r\\ge 0$.

Thus $|2x-1|<5$ becomes $-5<2x-1<5$. Add 1 and divide by 2: $-2<x<3$.

If the proposed radius is negative, cases change. $|x|<-1$ has no solution because distance is never negative, while $|x|\\ge -1$ is true for every real $x$. Do not apply a memorised two-case template before checking the boundary.

## Unit 3 — functions, pieces, transformations, and inverses

A function assigns exactly one output to every input in its domain. Notation $f(x)$ names the output at $x$; it does not mean $f\\times x$.

Consider

$f(x)=\\sqrt{x-2}$.

For real outputs, $x-2$ must be nonnegative, so the domain is $x\\ge 2$. The range is also nonnegative. A table and graph must respect this restriction.

A **piecewise function** uses different rules on different parts of the domain. The distance from zero is

\`\`\`text
|x| = −x  when x < 0,
       x  when x ≥ 0.
\`\`\`

The cases meet at zero and assign it only once. In contrast, rules “−x when $x\\le 0$” and “x+1 when $x\\ge 0$” overlap at zero and assign both 0 and 1; as written they do not define a function.

From a parent rule $g$, the transformation

$f(x)=a\\cdot g(x-h)+k$

shifts an anchor right by $h$, scales vertical differences by $|a|$, reflects across the horizontal axis if $a<0$, and then shifts up by $k$. Verify the allegedly backward horizontal sign using an anchor: the inside $x-h$ equals zero at $x=h$.

Composition means feeding one output into another. If $f(x)=2x+1$ and $g(x)=x^{2}$, then

$g(f(x))=(2x+1)^{2}$, while $f(g(x))=2x^{2}+1$.

They are usually different. Domains must also compose: $\\sqrt{f(x)}$ requires $f(x)\\ge 0$.

An inverse function reverses assignments. The rule $f(x)=3x-6$ is one-to-one, and solving $y=3x-6$ for $x$ gives $x=(y+6)/3$; hence $f^{-1}(y)=(y+6)/3$. Check both directions:

$f^{-1}(f(x))=((3x-6)+6)/3=x$.

Squaring on all real inputs has no inverse function because 2 and −2 both map to 4. Restricting its domain to $x\\ge 0$ produces inverse $\\sqrt{x}$.

## Unit 4 — polynomial structure

A polynomial is a finite sum $a_{n}x^{n}+\\cdots+a_{1}x+a_{0}$ with nonnegative whole-number exponents. Its degree is the highest exponent with nonzero coefficient. $3x^{4}-x+7$ has degree 4. Expressions such as $1/x$, $\\sqrt{x}$, and $2^{x}$ are not polynomials.

Three forms of a quadratic reveal different features:

- expanded: $x^{2}-6x+5$, showing coefficients;
- factored: $(x-1)(x-5)$, showing roots 1 and 5;
- vertex: $(x-3)^{2}-4$, showing lowest point $(3,-4)$.

All three are identical because expansion confirms them.

Common factoring patterns follow from multiplication:

$u^{2}-v^{2}=(u-v)(u+v)$

and

$u^{2}+2uv+v^{2}=(u+v)^{2}$.

Factor $2x^{2}-7x+3$. We need two numbers multiplying to $2\\times 3=6$ and adding to −7: −6 and −1.

$2x^{2}-6x-x+3=2x(x-3)-1(x-3)=(2x-1)(x-3)$.

The zero-product principle says if $AB=0$ for real numbers, then $A=0$ or $B=0$. Therefore the roots are $x=1/2$ and $x=3$.

Completing the square works even when integer factoring does not. For $x^{2}+4x-1=0$, add and subtract 4:

$(x+2)^{2}-5=0$, so $(x+2)^{2}=5$ and $x=-2\\pm \\sqrt{5}$.

The quadratic formula for $ax^{2}+bx+c=0$, $a\\ne 0$, is

$x = (-b \\pm \\sqrt{b^{2}-4ac})/(2a)$.

The discriminant $D=b^{2}-4ac$ predicts two distinct real roots when $D>0$, one repeated real root when $D=0$, and no real roots when $D<0$. It does not say the polynomial has no roots at all; complex numbers extend the picture.

## Unit 5 — roots, multiplicity, and polynomial behavior

The factor theorem states that $p(r)=0$ exactly when $(x-r)$ is a factor of $p(x)$. Repeated factors give **multiplicity**. For

$p(x)=(x+2)(x-1)^{2}$,

the root −2 has multiplicity 1 and the root 1 has multiplicity 2. Near a root of odd multiplicity, the sign changes; near a root of even multiplicity, it does not. Here the graph crosses at −2 and touches then turns at 1.

Why? Near $x=r$, all other nonzero factors keep a fixed sign. The sign of $(x-r)^m$ changes across $r$ exactly when $m$ is odd.

Long-run behavior is governed by the leading term. For large $|x|$, lower powers are small relative to $a_{n}x^{n}$. An even-degree polynomial has ends in the same vertical direction; an odd-degree polynomial has opposite end directions. The sign of the leading coefficient decides which direction is up.

Do not infer every wiggle from degree alone. A degree-4 polynomial has at most four real roots and at most three turning points, but it may have fewer.

## Unit 6 — rational expressions and rational functions

A rational expression is a quotient of polynomials. Record denominator exclusions before simplification:

$R(x)=(x^{2}-9)/(x-3)$, with $x\\ne 3$.

Factoring gives $(x-3)(x+3)/(x-3)=x+3$, but only for $x\\ne 3$. The graph is the line $y=x+3$ with a hole at $(3,6)$. Cancellation simplifies values; it does not restore an excluded input.

For

$S(x)=(2x+1)/(x-4)$,

the denominator is zero at 4 and the numerator is not, so $x=4$ is a vertical asymptote. Polynomial division gives

$S(x)=2+9/(x-4)$,

so values approach 2 for large positive or negative $x$; $y=2$ is a horizontal asymptote. “Approach” does not mean “never equal”: some rational functions cross their horizontal asymptote. This particular one cannot because $9/(x-4)$ is never zero.

Solve $(x+1)/(x-2)=3$. First require $x\\ne 2$. Multiply by $x-2$ under that condition:

$x+1=3x-6$, so $x=7/2$. It obeys the exclusion and checks. Cross-multiplying without writing exclusions invites invalid candidates.

## Unit 7 — exponential and logarithmic change

An exponential function has the variable in the exponent: $A(t)=A_{0}bᵗ$, with base $b>0$ and $b\\ne 1$. Equal steps in $t$ multiply the output by equal factors. Linear change adds equal amounts instead.

If a population starts at 800 and grows 6% per year, the multiplier is $1.06$:

$P(t)=800(1.06)ᵗ$.

After 3 years, $P(3)\\approx 800\\times 1.191016\\approx 952.8$. A population count might be rounded, but the model value should not be rounded during intermediate steps.

A logarithm answers an exponent question. $\\log_b(y)=x$ means exactly $b^{x}=y$. Therefore

$\\log_b(uv)=\\log_b(u)+\\log_b(v)$ for positive $u,v$,

because multiplying powers adds exponents. There is no corresponding rule $\\log(u+v)=\\log u+\\log v$; for base 10, $\\log(10+10)=\\log 20$, not 2.

Solve $5\\cdot 2ᵗ=70$: divide by 5 to obtain $2ᵗ=14$, then

$t=\\log_{2}(14)=\\ln(14)/\\ln(2)\\approx 3.807$.

The change-of-base formula works because if $2ᵗ=14$, taking natural logs gives $t \\ln 2=\\ln 14$.

An exponential decay model $M(t)=M_{0}(1/2)^{t/H}$ has half-life $H$: increasing time by $H$ multiplies the amount by 1/2. Negative time may be mathematically defined but outside a model’s evidential range.

## Unit 8 — sequences and recurrences

A sequence is a function whose inputs are positions such as $0,1,2,\\ldots$. An explicit rule computes a distant term directly. A recurrence computes it from earlier terms.

For the arithmetic sequence $4,7,10,13,\\ldots$,

$a_{0}=4$, $a_{n+1}=a_{n}+3$, and equivalently $a_{n}=4+3n$.

For the geometric sequence $5,10,20,40,\\ldots$,

$g_{0}=5$, $g_{n+1}=2g_{n}$, and $g_{n}=5\\cdot 2^{n}$.

The recurrence $F_{0}=0$, $F_{1}=1$, $F_{n+2}=F_{n+1}+F_{n}$ needs two initial values because each new term depends on the previous two. A recurrence without sufficient initial conditions describes a family, not one sequence.

To compute terms without recursion overhead:

\`\`\`text
procedure fibonacci(n):
    if n = 0: return 0
    previous := 0
    current := 1
    repeat n − 1 times:
        (previous, current) := (current, previous + current)
    return current
\`\`\`

The loop invariant is: before each update, \`previous\` and \`current\` are consecutive Fibonacci numbers. The algorithm uses $n-1$ updates, so time is proportional to $n$; it stores only two growing integers, so auxiliary storage is constant. (The integers themselves require more digits as $n$ grows.)

## Unit 9 — modelling and audit

Suppose two phone plans have costs $A(m)=18+0.04m$ and $B(m)=8+0.09m$, where $m$ is minutes. Equal cost satisfies

$18+0.04m=8+0.09m$, hence $10=0.05m$, so $m=200$.

Below 200 minutes, test $m=0$: B is cheaper. Above 200, A is cheaper. The algebraic intersection becomes a decision only after checking domain, units, and what the prices omit.

A model audit asks:

1. What do variables and parameters mean, with units?
2. Which inputs are meaningful?
3. Which relationship—additive, multiplicative, piecewise—is assumed?
4. What data fixed the parameters?
5. Do residuals (observed minus predicted values) show a pattern?
6. What decision would change if an assumption changed?

## Mixed practice

1. Solve $5-2(3x-1)>17$ and check a boundary-side value.
2. Solve $|3x+2|\\le 8$.
3. Convert $x^{2}-8x+7$ to vertex and factored forms.
4. State the domain and simplify $(x^{2}+x-6)/(x+3)$.
5. Find the roots and multiplicities of $(x-4)^{3}(x+1)^{2}$ and predict crossing or touching.
6. For $f(x)=\\sqrt{x+1}$ and $g(x)=x-4$, state the domain of $f(g(x))$.
7. Decide whether $f(x)=(x-2)^{2}$ on all real inputs has an inverse function. Repair it.
8. Solve $300(1.04)ᵗ=450$ and state an exact logarithmic answer.
9. Give explicit and recursive rules for $11,7,3,-1,\\ldots$, indexed from zero.
10. Explain why cancelling $x$ in $x^{2}/x=x$ does not prove equality at $x=0$.

## Solutions

1. Expand: $5-6x+2>17$, so $-6x>10$, hence $x<-5/3$. At $x=-2$, the original gives 19>17; at $x=0$, it fails.
2. $-8\\le 3x+2\\le 8$; subtract 2 and divide by 3 to obtain $-10/3\\le x\\le 2$.
3. Completing the square: $(x-4)^{2}-9$. Factoring: $(x-1)(x-7)$. These reveal vertex $(4,-9)$ and roots 1,7.
4. Factor numerator $(x+3)(x-2)$. The domain excludes $x=-3$; the simplified value is $x-2$ only on that domain. There is a hole at $(-3,-5)$.
5. Roots are 4 with multiplicity 3 and −1 with multiplicity 2. The graph crosses at 4 and touches at −1.
6. $f(g(x))=\\sqrt{x-3}$, which requires $x\\ge 3$.
7. No: inputs equally far from 2 share outputs. Restrict to $x\\ge 2$; then the inverse is $f^{-1}(y)=2+\\sqrt{y}$ for $y\\ge 0$. Restricting to $x\\le 2$ would give a different valid inverse, $2-\\sqrt{y}$.
8. Divide by 300: $(1.04)ᵗ=1.5$, so $t=\\ln(1.5)/\\ln(1.04)\\approx 10.34$ time units.
9. Explicit: $a_{n}=11-4n$. Recursive: $a_{0}=11$, $a_{n+1}=a_{n}-4$.
10. The original quotient is undefined at zero. Cancellation asserts equality only for $x\\ne 0$; the simplified expression has a larger natural domain, but simplification does not change the original domain.

If Questions 1–2 fail, keep each inequality operation on its own line and
test a value on both sides of the boundary. If Questions 3–6 fail, record
domain restrictions before simplifying or composing. If Questions 7–8 fail,
check one-to-one behavior and logarithm conditions. If Questions 9–10 fail,
distinguish a formula’s simplified expression from its original domain.

## Capstone

Choose a measured quantity that changes over time. Fit both a linear rule and an exponential rule using at least three observations. For each, state the domain, parameter units, one prediction, one residual, and one reason extrapolation might fail. Present a table and graph, then defend which structure is less misleading over the observed range. The capstone is not won by the smallest residual alone; it is won by transparent assumptions and a conclusion whose strength matches the evidence.

For a supplied version of this task, use “An algebra first attempt” in [Cooling-model validation](#/item/book-applied-modeling-proof-reference?chapter=cooling-model-validation). Fit both rules to the three calibration observations at 0, 10, and 20 minutes; freeze the fits before checking the 30-minute holdout. Model the positive temperature excess above the known ambient temperature rather than taking ratios of raw Celsius temperatures. Present the table, graph, units, and original-scale residuals before comparing with “Worked algebra comparison” and “Algebra self-review”. The later differential-equation and numerical sections are optional continuations; this algebra assignment needs no derivatives. For a fitting and residual-method reminder, read Sections 1–3 and 7 of [Fit and Audit an Exponential Model](#/item/recipe-exponential-model-audit); its log-space least-squares derivation and implementation in Sections 4–5 are optional.
`;export{e as default};