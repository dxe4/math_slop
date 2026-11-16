# Readiness, notation, and a study plan

Use these thirty public questions to choose preparation in [Algebra and Functions](#/books/algebra-and-functions), [Precalculus](#/books/precalculus), and [Introduction to Proof](#/books/introduction-to-proof). The books teach the full material; this refresher supplies a diagnostic and short reminders. Arithmetic with fractions, basic equations, and coordinate notation are enough to begin. An unfamiliar question identifies something to study, rather than a reason to stop.

## How to study

Plan 60–90 minutes for initial attempts at the thirty items, then 20–30 minutes to compare explanations and choose reading: about 80–120 minutes altogether. You can split this into three sittings of ten questions. These are planning estimates, not observed workload or deadlines. Reading remedial book chapters takes additional time. If your programme asks only for the original items 1–8, allow about 20–30 minutes for those attempts and 5–10 minutes for comparison and route choice: about 25–40 minutes for that subset.

Write an attempt before opening a hint or answer. Record whether you could explain the method, needed a hint, or need the linked chapter. Keep restrictions and units alongside calculations. After reading a repair chapter, try one of its exercises before returning to your diagnostic explanation. No total-score threshold here certifies readiness for calculus or analysis. Checkmarks are personal study reminders, not graded assessment or evidence of mastery.

For calculus, complete Chapters 2 and 3 before starting. For real analysis, complete all four chapters and be comfortable explaining each solution in words. These are preparation routes: use the linked full book chapters wherever a reminder is insufficient, and explain the work rather than treating a tick as evidence of readiness.

The next three refresher lessons take about five minutes each to read, with their retained written exercises taking additional time. They link to the full chapters and keep useful worked reminders. For any visual experiment, predict first, adjust a control, then explain with algebra; finite pixels do not prove a claim about every real input.

## Notation to recognise

$\mathbb R$ denotes the real numbers and $\mathbb Q$ the rational numbers. A rational number is $p/q$ for integers $p,q$ with $q\ne0$. The interval $(a,b)$ excludes its endpoints; $[a,b]$ includes both. Braces specify a set, so $\{x\in\mathbb R:x^2<1\}=(-1,1)$. The symbol $\in$ means “belongs to”.

The notation $f:D\to\mathbb R$ specifies a domain and real outputs. The value $f(x)$ is not multiplication of $f$ by $x$. An equation asks which allowed inputs make two expressions equal; an identity holds at every input in its stated domain. All unknowns below are real unless another domain is specified. Trigonometric inputs are in radians unless degrees are explicitly written.

## Diagnostic

Work without a calculator. The first eight questions retain the earlier diagnostic's problems; the remaining questions broaden the route into the three books. Every answer includes a named chapter to revisit if the answer or its justification was uncertain.

### Cancellation and the original domain

**Item 1.** Simplify $(x^2-1)/(x-1)$. At which real inputs is the original expression defined?

<details>
<summary>Hint</summary>

Factor a difference of squares, and record the denominator restriction before cancelling.

</details>
<details>
<summary>Answer and repair</summary>

The numerator is $(x-1)(x+1)$, so the expression equals $x+1$ for $x\ne1$. Its original domain is $\mathbb R\setminus\{1\}$. Giving all real numbers as the domain forgets that cancellation cannot restore an input at which the original denominator vanished. Revisit [Algebra and Functions: Rational Expressions](../algebra-and-functions/rational-expressions.md).

</details>

### Absolute value as distance

**Item 2.** Solve $|2x-3|<1$.

<details>
<summary>Hint</summary>

A distance below one means that the expression lies strictly between negative one and one.

</details>
<details>
<summary>Answer and repair</summary>

Write $-1<2x-3<1$. Adding three and dividing by two gives $1<x<2$, or $(1,2)$. A union of outside intervals would describe a distance greater than one, and including either endpoint would violate the strict comparison. Revisit [Algebra and Functions: Linear Equations, Inequalities, and Systems](../algebra-and-functions/linear-equations-inequalities-systems.md).

</details>

### A square-root domain

**Item 3.** Find the real domain of $\sqrt{9-x^2}$.

<details>
<summary>Hint</summary>

A real square root accepts zero as well as positive inputs.

</details>
<details>
<summary>Answer and repair</summary>

Require $9-x^2\ge0$, equivalent to $x^2\le9$, so the domain is $[-3,3]$. Both endpoints give the defined value zero. Excluding them confuses a nonnegative square-root input with the strictly positive input required by a logarithm. Revisit [Algebra and Functions: Functions, Domains, and Graphs](../algebra-and-functions/functions-domain-graphs.md).

</details>

### A domain through two stages

**Item 4.** If $f(t)=\sqrt{t}$ on $[0,\infty)$ and $g(x)=1-x^2$ on $\mathbb R$, find $f(g(x))$ and its domain.

<details>
<summary>Hint</summary>

The first stage accepts every real input, but its output must be admitted by the square root.

</details>
<details>
<summary>Answer and repair</summary>

The composition is $\sqrt{1-x^2}$. Require $g(x)=1-x^2\ge0$, giving domain $[-1,1]$. Merely reporting the domain of $g$, or multiplying $f(x)$ by $g(x)$, does not describe composition. Revisit [Precalculus: Composition and Inverses](../precalculus/composition-inverses.md).

</details>

### Unit-circle values

**Item 5.** Evaluate $\sin(\pi/6)$ and $\cos(\pi)$.

<details>
<summary>Hint</summary>

On the unit circle, cosine is the horizontal coordinate and sine the vertical coordinate. A half turn reaches the leftmost point.

</details>
<details>
<summary>Answer and repair</summary>

The values are $1/2$ and $-1$. The input $\pi$ is a half turn, not a small angle in degrees. If the angle unit or coordinate order caused difficulty, revisit [Precalculus: Radians and the Unit Circle](../precalculus/radians-unit-circle.md), then compare its exact-value examples.

</details>

### Logarithm product and power laws

**Item 6.** For $a,b>0$, rewrite $\ln(ab^2)$ using $\ln a$ and $\ln b$.

<details>
<summary>Hint</summary>

Separate the product first, then account for the square.

</details>
<details>
<summary>Answer and repair</summary>

We have $\ln(ab^2)=\ln a+\ln(b^2)=\ln a+2\ln b$. Positivity makes all displayed logarithms defined. Multiplying the two logarithms, or turning a logarithm of a sum into a sum of logarithms, uses a false law. Revisit [Algebra and Functions: Logarithms](../algebra-and-functions/logarithms.md).

</details>

### Negating a universal statement

**Item 7.** Negate: “For every real $x$, $x^2>0$.” Is the original statement true?

<details>
<summary>Hint</summary>

The negation of “every” asserts the existence of a counterexample, and the negation of a strict positive comparison includes equality.

</details>
<details>
<summary>Answer and repair</summary>

The negation is “There exists a real $x$ such that $x^2\le0$.” The original is false because $x=0$ is a counterexample. Changing only the comparison while retaining “every” gives a different statement. Revisit [Introduction to Proof: Quantifiers](../introduction-to-proof/quantifiers.md).

</details>

### A proof using the rational-number definition

**Item 8.** Explain why the sum of two rational numbers is rational.

<details>
<summary>Hint</summary>

Represent the two numbers using integer numerators and nonzero integer denominators, then add the fractions.

</details>
<details>
<summary>Answer and repair</summary>

Write them as $p/q$ and $r/s$, where $p,q,r,s$ are integers and $q,s\ne0$. Their sum is $(ps+rq)/(qs)$, with integer numerator and nonzero integer denominator. It therefore satisfies the definition of rationality. A few numerical sums would illustrate the claim without proving every case. Revisit [Introduction to Proof: Direct Proof and Proof by Cases](../introduction-to-proof/direct-proof-cases.md).

</details>

### Distributing a negative multiplier

**Item 9.** Simplify $3(2x-1)-2(x+4)$ for real $x$.

<details>
<summary>Hint</summary>

Distribute each multiplier to every term of its bracket before collecting like terms.

</details>
<details>
<summary>Answer and repair</summary>

Expansion gives $6x-3-2x-8=4x-11$. The constant in the second product is negative eight because the multiplier is negative two. The answer $4x+5$ changes only one sign in that product. Revisit [Algebra and Functions: Expressions, Laws, and Factorising](../algebra-and-functions/expressions-laws-factorising.md).

</details>

### Inequality direction

**Item 10.** Solve $5-3x\le14$ and describe whether its boundary is included.

<details>
<summary>Hint</summary>

After subtracting five, consider the sign of the number by which you divide.

</details>
<details>
<summary>Answer and repair</summary>

The inequality becomes $-3x\le9$, hence $x\ge-3$, or $[-3,\infty)$. Dividing by negative three reverses order. At negative three the original sides are equal, so that input is included. An answer $x\le-3$ selects the wrong side. Revisit [Algebra and Functions: Linear Equations, Inequalities, and Systems](../algebra-and-functions/linear-equations-inequalities-systems.md).

</details>

### Simultaneous equations

**Item 11.** Solve $2x+y=11$ and $x-y=1$ simultaneously.

<details>
<summary>Hint</summary>

Adding the two equations eliminates one unknown. Retain an original equation to recover the other.

</details>
<details>
<summary>Answer and repair</summary>

Adding gives $3x=12$, so $x=4$. Then $4-y=1$ gives $y=3$. The pair $(4,3)$ satisfies both originals: $8+3=11$ and $4-3=1$. A value of $x$ alone is not a complete pair, and satisfying only one equation is insufficient. Revisit [Algebra and Functions: Linear Equations, Inequalities, and Systems](../algebra-and-functions/linear-equations-inequalities-systems.md).

</details>

### A line from two points

**Item 12.** Find the equation of the line through $(1,3)$ and $(5,11)$ in the form $y=mx+c$.

<details>
<summary>Hint</summary>

The slope is the output change divided by the input change. Then substitute one point to find the constant.

</details>
<details>
<summary>Answer and repair</summary>

The slope is $(11-3)/(5-1)=8/4=2$. Using $(1,3)$ gives $3=2+c$, so $c=1$ and $y=2x+1$. Interchanging rise and run would give the reciprocal slope and fail one or both original points. Revisit [Algebra and Functions: Straight Lines and Linear Models](../algebra-and-functions/straight-lines-linear-models.md).

</details>

### Factored quadratic solutions

**Item 13.** Solve $x^2-5x+6=0$ by factorising, and explain why the factors yield every solution.

<details>
<summary>Hint</summary>

Seek two numbers with product six and sum negative five, then use the zero-product property.

</details>
<details>
<summary>Answer and repair</summary>

The polynomial is $(x-2)(x-3)$. A real product is zero exactly when at least one factor is zero, so the solutions are $x=2$ and $x=3$. Setting the factors equal to each other would impose a different condition and miss this reasoning. Revisit [Algebra and Functions: Quadratic Equations](../algebra-and-functions/quadratic-equations.md).

</details>

### Completing the square and the vertex

**Item 14.** Find the minimum value of $x^2-6x+5$ over the reals and the input where it occurs.

<details>
<summary>Hint</summary>

Add and subtract the constant needed to form $(x-3)^2$.

</details>
<details>
<summary>Answer and repair</summary>

We have $x^2-6x+5=(x-3)^2-4$. The square is nonnegative and equals zero at $x=3$, so the minimum is negative four and the vertex is $(3,-4)$. Reading negative six as the vertex input confuses a coefficient with the completed-square form. Revisit [Algebra and Functions: Quadratic Functions](../algebra-and-functions/quadratic-functions.md).

</details>

### Remainder at a linear divisor

**Item 15.** What remainder does $P(x)=x^3-2x+1$ leave on division by $x-2$? Is $x-2$ a factor?

<details>
<summary>Hint</summary>

If $P(x)=(x-2)Q(x)+r$, substituting two removes the multiple of the divisor.

</details>
<details>
<summary>Answer and repair</summary>

The remainder is $P(2)=8-4+1=5$. Because the remainder is nonzero, $x-2$ is not a factor. Evaluating at negative two would correspond to the different divisor $x+2$. Revisit [Algebra and Functions: Polynomials and the Factor Theorem](../algebra-and-functions/polynomials-factor-theorem.md).

</details>

### Fractional and negative indices

**Item 16.** Evaluate $27^{2/3}$ and write $x^{-2}$ as a fraction, stating its real domain.

<details>
<summary>Hint</summary>

The denominator of a fractional exponent gives a root. A negative integer exponent indicates a reciprocal, not a negative value.

</details>
<details>
<summary>Answer and repair</summary>

We get $27^{2/3}=(\sqrt[3]{27})^2=3^2=9$. Also $x^{-2}=1/x^2$ for $x\ne0$. The answer $-x^2$ misreads the negative exponent, and allowing zero would introduce division by zero. Revisit [Algebra and Functions: Surds and Indices](../algebra-and-functions/surds-indices.md).

</details>

### An exponential equation

**Item 17.** Solve $3^{2x}=27$ over the reals.

<details>
<summary>Hint</summary>

Express the right side using the same base and use the one-to-one behaviour of that exponential function.

</details>
<details>
<summary>Answer and repair</summary>

Since $27=3^3$, equality of outputs of the strictly increasing function $3^t$ gives $2x=3$, so $x=3/2$. Dividing twenty-seven by three instead of comparing the exponents does not undo exponentiation. Revisit [Algebra and Functions: Exponential Functions](../algebra-and-functions/exponential-functions.md).

</details>

### A sequence and its partial sum

**Item 18.** The arithmetic sequence begins $3,7,11,15,\ldots$. Give its $n$th term for integers $n\ge1$ and the sum of its first six terms.

<details>
<summary>Hint</summary>

There are $n-1$ steps of size four after the first term. For the sum, pair the first and last terms.

</details>
<details>
<summary>Answer and repair</summary>

The term is $3+4(n-1)=4n-1$. The sixth term is twenty-three, and the sum is $6(3+23)/2=78$. Using $3+4n$ shifts the numbering by one; reporting the sixth term instead of the sum answers a different question. Revisit [Algebra and Functions: Sequences, Series, and the Binomial Theorem](../algebra-and-functions/sequences-series-binomial-theorem.md).

</details>

### A restricted inverse

**Item 19.** The function $q:(-\infty,0]\to[0,\infty)$ is $q(x)=x^2$. Find its inverse, including domain and range.

<details>
<summary>Hint</summary>

The original input must be nonpositive. Choose the square-root branch that returns such inputs.

</details>
<details>
<summary>Answer and repair</summary>

The inverse is $q^{-1}(y)=-\sqrt y$ on $[0,\infty)$, with range $(-\infty,0]$. Indeed, $q(-\sqrt y)=y$ and $-\sqrt{x^2}=-|x|=x$ for $x\le0$. A positive root returns the wrong branch, and $\pm\sqrt y$ would supply two outputs rather than one. Revisit [Precalculus: Composition and Inverses](../precalculus/composition-inverses.md).

</details>

### Tracking a transformed point

**Item 20.** If $(2,5)$ is on the graph of $f$, find the corresponding point on $G(x)=-2f(3(x-1))+4$.

<details>
<summary>Hint</summary>

Solve $3(x-1)=2$ to reproduce the original input, then apply the outside operations to the old output.

</details>
<details>
<summary>Answer and repair</summary>

The new input is $x=1+2/3=5/3$, and the new output is $-2(5)+4=-6$. Thus the point is $(5/3,-6)$. Multiplying the old input by three gives the wrong horizontal scale: its new coordinate is found by solving the inside equation. Revisit [Precalculus: Transformations of Graphs](../precalculus/graph-transformations.md).

</details>

### Features of a rational graph

**Item 21.** For $R(x)=1/(x-2)+3$, identify the excluded input and the vertical and horizontal asymptote lines.

<details>
<summary>Hint</summary>

Compare with $1/x$: locate where the denominator vanishes and the constant approached when the reciprocal term becomes small.

</details>
<details>
<summary>Answer and repair</summary>

The domain excludes $x=2$. The vertical asymptote is $x=2$, and the horizontal asymptote is $y=3$. The graph is the reciprocal graph shifted right two and up three. Interchanging those lines confuses inputs with outputs; an excluded input is not automatically a removable hole. Revisit [Precalculus: Polynomial and Rational Graphs](../precalculus/polynomial-rational-graphs.md).

</details>

### All solutions of a trigonometric equation

**Item 22.** Find every real solution of $\sin x=1/2$.

<details>
<summary>Hint</summary>

There are two positions in one full turn, and the entire pattern repeats after $2\pi$.

</details>
<details>
<summary>Answer and repair</summary>

The solutions are $x=\pi/6+2k\pi$ or $x=5\pi/6+2k\pi$, where $k\in\mathbb Z$. A single principal value misses the second position and all repeated turns. The endpoint convention of one plotted window must not be mistaken for the real domain. Revisit [Precalculus: Trigonometric Equations](../precalculus/trigonometric-equations.md).

</details>

### An identity with exclusions

**Item 23.** Simplify $(1-\cos^2\theta)/\sin\theta$ and state where the original expression is defined.

<details>
<summary>Hint</summary>

Use the unit-circle identity before cancelling, and keep the denominator condition.

</details>
<details>
<summary>Answer and repair</summary>

Since $1-\cos^2\theta=\sin^2\theta$, the quotient equals $\sin\theta$ wherever $\sin\theta\ne0$, namely $\theta\ne k\pi$ for integer $k$. Claiming the identity at every real angle forgets the original denominator. Revisit [Precalculus: Trigonometric Identities](../precalculus/trigonometric-identities.md).

</details>

### The principal inverse-sine branch

**Item 24.** Evaluate $\arcsin(\sin(5\pi/6))$, where inverse sine takes values in $[-\pi/2,\pi/2]$.

<details>
<summary>Hint</summary>

Find the sine value first, then choose the angle with that sine in the specified inverse range.

</details>
<details>
<summary>Answer and repair</summary>

The inner sine is $1/2$, whose inverse-sine value is $\pi/6$. The original angle $5\pi/6$ lies outside the inverse range, so the two operations do not simply cancel there. Revisit [Precalculus: Inverse Trigonometric Functions](../precalculus/inverse-trigonometric-functions.md).

</details>

### An implication and its converse

**Item 25.** For integers, compare “divisible by four implies even” with its converse. State which is true and justify each answer.

<details>
<summary>Hint</summary>

One direction follows from writing a multiple of four as twice an integer. In the other direction, try a small even integer.

</details>
<details>
<summary>Answer and repair</summary>

The original implication is true: $n=4k=2(2k)$ is even. Its converse is false because two is even but not divisible by four. Swapping hypothesis and conclusion changes a statement; it is not a legitimate proof step. Revisit [Introduction to Proof: Statements and Truth Tables](../introduction-to-proof/statements-truth-tables.md).

</details>

### Choosing a contrapositive

**Item 26.** Prove: if an integer $n$ has an odd square, then $n$ is odd. State the contrapositive you use.

<details>
<summary>Hint</summary>

Instead of starting with an odd square, begin by supposing the integer is not odd.

</details>
<details>
<summary>Answer and repair</summary>

The contrapositive is “if $n$ is even, then $n^2$ is even”. Write $n=2k$ with integer $k$. Then $n^2=4k^2=2(2k^2)$, which is even. Every integer is even or odd, so this proves the stated implication. Proving the converse “odd integers have odd squares” alone would not prove this direction. Revisit [Introduction to Proof: Contrapositive and Contradiction](../introduction-to-proof/contrapositive-contradiction.md).

</details>

### Union and intersection

**Item 27.** For $A=\{1,2,3\}$ and $B=\{3,4\}$, find $A\cap B$ and $A\cup B$. Explain whether repeated elements should be listed twice.

<details>
<summary>Hint</summary>

Intersection requires both membership conditions; union requires at least one.

</details>
<details>
<summary>Answer and repair</summary>

The intersection is $\{3\}$ and the union is $\{1,2,3,4\}$. A set lists membership, not the number of times an object was encountered, so three occurs only once in the union. Swapping “and” and “or” exchanges these operations. Revisit [Introduction to Proof: Sets](../introduction-to-proof/sets.md).

</details>

### An induction base and step

**Item 28.** Prove $1+3+\cdots+(2n-1)=n^2$ for every integer $n\ge1$, showing both the base case and the induction step.

<details>
<summary>Hint</summary>

After assuming the formula for $n$, the next term to add is $2(n+1)-1$.

</details>
<details>
<summary>Answer and repair</summary>

At $n=1$, both sides equal one. Assume the sum through $2n-1$ is $n^2$. Adding $2n+1$ gives $n^2+2n+1=(n+1)^2$, the required next case. The base and step establish all positive integer cases. Checking several initial sums without the general step is evidence, not induction. Revisit [Introduction to Proof: Induction](../introduction-to-proof/induction.md).

</details>

### One-to-one and onto depend on the sets

**Item 29.** Is $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, one-to-one or onto? Explain what happens if both domain and codomain are instead $[0,\infty)$.

<details>
<summary>Hint</summary>

Ask whether distinct inputs repeat an output and whether every announced destination is reached.

</details>
<details>
<summary>Answer and repair</summary>

On the original sets it is neither: one and negative one share an output, and negative numbers are never outputs. On $[0,\infty)\to[0,\infty)$ it is bijective, with each target $y$ produced by the unique nonnegative input $\sqrt y$. Changing only the codomain would not remove repeated inputs. Revisit [Introduction to Proof: Functions](../introduction-to-proof/functions.md).

</details>

### Replacing examples by a general argument

**Item 30.** A proposed proof says: “The numbers one, three, and five have odd squares, so every odd integer has an odd square.” Identify the gap and replace it with a proof covering all odd integers, including negative ones.

<details>
<summary>Hint</summary>

Use the definition of an arbitrary odd integer rather than extending a finite list.

</details>
<details>
<summary>Answer and repair</summary>

Three examples do not cover every integer. Write an arbitrary odd integer as $n=2k+1$ with $k\in\mathbb Z$. Then $n^2=4k^2+4k+1=2(2k^2+2k)+1$, which is odd because $2k^2+2k$ is an integer. This includes negative $k$ and needs no positivity assumption. Revisit [Introduction to Proof: Reading and Writing Mathematics](../introduction-to-proof/reading-writing-mathematics.md).

</details>

## Choose your route

Follow the chapter named in each answer where your explanation was uncertain; work by topic rather than adding up ticks. For expression, equation, domain, logarithm, or sequence difficulties, use [Algebra and Functions](#/books/algebra-and-functions). For compositions, transformations, radians, or trigonometric branches, use [Precalculus](#/books/precalculus). For quantifiers and general arguments, use [Introduction to Proof](#/books/introduction-to-proof) with its stated preparation.

The next three refresher lessons are short linked summaries: [Algebra, functions, and domains](algebra-functions.md), [Trigonometric, exponential, and logarithmic functions](elementary-functions.md), and [Logic, proof, and the real numbers](logic-proof.md). Their retained exercises are available for a quick written return. Use the full books when a reminder is insufficient. Record a corrected explanation and a next chapter to study; a self-check mark remains a reminder, not a grade.
