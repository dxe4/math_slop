var e=`---
id: book-functions-equations-proof
title: "Functions and Equations: A Proof-Building Book"
level: undergraduate
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Functions and Equations: A Proof-Building Book

This earlier book is retired from the main shelf. Continue with [Introduction to Proof](/books/library-book-introduction-to-proof/) or the developed destinations in its chapter concordance. All fifteen earlier readings and their notes remain available; scaling and regularity is retained as PDE source material.


## Current reading routes

This earlier mixed-level collection remains available as a source reading.
Its elementary foundation route is now developed in
[Algebra and Functions](/books/library-book-algebra-and-functions/),
[Precalculus](/books/library-book-precalculus/) and
[Introduction to Proof](/books/library-book-introduction-to-proof/).
Existing chapter addresses and exercise records are preserved.

| Earlier chapter | Current developed destination |
|---|---|
| Functions are typed assignments | Introduction to Proof: Functions |
| Exponential and logarithmic functions | Algebra and Functions: Exponentials and Logarithms |
| Trigonometric functions | Precalculus: Sine, Cosine and Tangent |
| Complex functions | Complex Analysis: Exponential, Logarithm and Powers |
| Power series | Complex Analysis: Power Series and Analytic Functions |
| Analytic continuation | Complex Analysis: Analytic Continuation |
| Special functions | Complex Analysis: Gamma and Zeta Functions |
| Difference equations | Discrete Mathematics: Recurrences and Generating Functions |
| Differential equations | ODE: A First Course: Separable and Linear First-order Equations |
| Dynamical systems | Dynamical Systems: A First Course: Linearisation and Hartman–Grobman |
| Project: Prove a New Result | Introduction to Proof: Proof Workshop |
| Chapter 12: Uniform Convergence | Real Analysis: Uniform Convergence |
| Chapter 13: Fourier Series and Transforms | Retained source; the Fourier Analysis series chapters are available while its transform chapters are written |
| Chapter 14: Advanced Proof Techniques | Introduction to Proof: Proof Workshop |
| Scaling Laws and Regularity | Retained source for the developing PDE route |

The later routes can be entered through [Complex Analysis](/books/library-book-complex-analysis/),
[Discrete Mathematics](/books/library-book-discrete-mathematics-proof-counting-structure/),
[ODE: A First Course](/books/library-book-ode-first-course/),
[Dynamical Systems](/books/library-book-dynamical-systems-first-course/),
[Real Analysis](/books/library-book-proof-safe-real-analysis/) and
[Fourier Analysis](/books/library-book-fourier-analysis/). Each destination
states its own prerequisites and current manuscript status. A recorded
destination identifies the next developed treatment; it does not delete the
earlier source or attach its learner notes to a different resource.

Elementary algebra asks for values; proof-oriented algebra asks why a transformation preserves all and only those values. This book rebuilds familiar functions, polynomials, recurrences, and functional equations around definitions and quantifiers. Its purpose is not faster calculation but dependable reasoning.

This overview requires only elementary algebra and familiarity with real numbers. It introduces sets, function notation, induction, and proof language as they are used. The full chapter sequence later moves into power series, complex analysis, differential equations, and Fourier methods; those chapters assume a first calculus course, as the book's reader guide and prerequisite diagnostic explain.

## 1. Functions are typed assignments

A function $f:A\\to B$ consists of a domain $A$, codomain $B$, and an assignment sending each $a\\in A$ to exactly one $f(a)\\in B$. The range or image is

$f(A)=\\{f(a):a\\in A\\}$,

which may be smaller than the codomain.

This typing distinguishes functions with the same formula. Let

- $f:\\mathbb{R}\\to \\mathbb{R}$, $f(x)=x^{2}$;
- $g:[0,\\infty )\\to [0,\\infty )$, $g(x)=x^{2}$.

The first is neither one-to-one nor onto: $f(1)=f(-1)$ and no negative real is an output. The second is both.

A function is **injective** if $f(x_{1})=f(x_{2})$ implies $x_{1}=x_{2}$. It is **surjective** onto $B$ if for every $b\\in B$ there exists $a\\in A$ with $f(a)=b$. It is **bijective** if both hold.

### The inverse theorem

**Theorem 1.** A function $f:A\\to B$ has a two-sided inverse $g:B\\to A$ satisfying $g\\circ f=id_{A}$ and $f\\circ g=id_{B}$ exactly when $f$ is bijective.

**Proof.** Suppose such $g$ exists. If $f(x_{1})=f(x_{2})$, apply $g$ to get $g(f(x_{1}))=g(f(x_{2}))$, hence $x_{1}=x_{2}$; thus $f$ is injective. For any $b\\in B$, take $a=g(b)$. Then $f(a)=f(g(b))=b$, so $f$ is surjective.

Conversely, suppose $f$ is bijective. For each $b\\in B$, surjectivity gives at least one $a$ with $f(a)=b$, and injectivity makes it unique. Define $g(b)$ to be this unique $a$. Then both required identities follow. ∎

One-sided inverses reveal half the story: $g\\circ f=id_{A}$ forces $f$ injective, while $f\\circ g=id_{B}$ forces $f$ surjective.

## 2. Composition carries domain obligations

For $f:A\\to B$ and $g:B\\to C$, the composition $g\\circ f:A\\to C$ is $(g\\circ f)(x)=g(f(x))$. More generally, if formulas are given without explicit types, the natural domain is

$\\{x\\in\\operatorname{dom}(f):f(x)\\in\\operatorname{dom}(g)\\}$.

Example: $f(x)=1-x^{2}$ and $g(u)=\\sqrt u$ as real functions. Then $g\\circ f(x)=\\sqrt (1-x^{2})$ has domain $[-1,1]$. In the opposite order, $f\\circ g(x)=1-x$ has domain $[0,\\infty )$, inherited from the square-root input. Algebraically simplifying the output does not enlarge that compositional domain.

Composition is associative. If types fit, then for every $x$,

$((h\\circ g)\\circ f)(x)=h(g(f(x)))=(h\\circ (g\\circ f))(x)$.

It is not generally commutative. With $f(x)=x+1$ and $g(x)=2x$, $g\\circ f(x)=2x+2$ while $f\\circ g(x)=2x+1$.

## 3. Equivalence transformations and candidate transformations

To solve a statement $\\mathbb{P}(x)$, an operation is an **equivalence transformation** if it produces $Q(x)$ with $\\mathbb{P}(x)⇔Q(x)$ on the working domain. It is only a **candidate transformation** if $\\mathbb{P}(x)\\Rightarrow Q(x)$ but the reverse may fail.

Adding the same defined expression to both sides is equivalent. Multiplying by a nonzero expression is equivalent. Squaring is generally one-way:

$x=-2 \\Rightarrow x^{2}=4$,

but $x^{2}=4$ does not imply $x=-2$ because $x=2$ also works.

Solve $\\sqrt (x+3)=x-1$. Domain conditions require $x\\ge -3$ and, because the left side is nonnegative, $x-1\\ge 0$, so $x\\ge 1$. Squaring gives

$x+3=(x-1)^{2}=x^{2}-2x+1$,

so $x^{2}-3x-2=0$ and candidates $x=(3\\pm \\sqrt 17)/2$. Only the positive candidate is at least 1; direct substitution confirms it. The negative root came from a transformed equation outside the sign condition.

The logical structure is:

\`\`\`text
derive necessary candidates → filter by conditions → verify in original.
\`\`\`

## 4. Polynomial division and the factor theorem

Let $F$ be a field such as $\\mathbb{Q}$, $\\mathbb{R}$, or $\\mathbb{C}$. For polynomials $p,d\\in F[x]$ with $d\\ne 0$, there are unique $q,r$ such that

$p=dq+r$ and either $r=0$ or $\\deg r<\\deg d$.

### Existence idea

If $\\deg p<\\deg d$, choose $q=0,r=p$. Otherwise, cancel the leading term of $p$ by a suitable monomial multiple of $d$, leaving a polynomial of smaller degree, and repeat. Degree decreases at every iteration, so the process terminates after finitely many steps.

### Uniqueness proof

Suppose $p=dq_{1}+r_{1}=dq_{2}+r_{2}$ with both remainders of degree below $\\operatorname{deg} d$. Then

$d(q_{1}-q_{2})=r_{2}-r_{1}$.

If $q_{1}-q_{2}$ were nonzero, the left side would have degree at least $\\operatorname{deg} d$, while the right side has degree below $\\operatorname{deg} d$, impossible. Thus $q_{1}=q_{2}$ and then $r_{1}=r_{2}$. ∎

Divide by $x-a$. The remainder has degree below 1, so it is a constant $r$. Evaluating

$p(x)=(x-a)q(x)+r$

at $x=a$ gives $p(a)=r$. This proves the remainder theorem. Consequently $p(a)=0$ exactly when $r=0$, which is exactly when $(x-a)$ divides $p$: the factor theorem.

## 5. Multiplicity and local behavior

A root $a$ has multiplicity $m\\ge 1$ if

$p(x)=(x-a)^{m} q(x)$ with $q(a)\\ne 0$.

Because polynomials are continuous and $q(a)\\ne 0$, there is a small interval around $a$ on which $q$ keeps a constant nonzero sign. Therefore the sign behavior of $p$ near $a$ is determined by $(x-a)^{m}$. If $m$ is odd, it changes sign across $a$; if $m$ is even, it does not.

There is also a derivative characterization over characteristic zero:

$a$ has multiplicity $m$ exactly when

$p(a)=p'(a)=\\cdots=p^{(m-1)}(a)=0$ but $p^{(m)}(a)\\ne0$.

To see the forward direction, differentiate $(x-a)^{m} q(x)$: every derivative of order below $m$ retains at least one factor $(x-a)$. The $m$th derivative at $a$ is $m!q(a)$, nonzero. The converse follows by the Taylor expansion of a polynomial around $a$, whose first nonzero coefficient occurs at degree $m$.

**Counterexample to a common overclaim:** a graph touching the axis suggests even multiplicity for a polynomial, but “touching” by itself is not an algebraic definition, and nonpolynomial functions can behave differently. The proof relies on a factorization and nonvanishing remainder.

## 6. Roots over different number systems

A nonzero polynomial of degree $n$ over a field has at most $n$ distinct roots.

**Proof by induction.** A degree-0 nonzero polynomial has none. If degree $n$ polynomial $p$ has a root $a$, write $p=(x-a)q$ with $q$ of degree $n-1$. Any other root $b\\ne a$ makes $0=p(b)=(b-a)q(b)$, so $q(b)=0$. By induction, $q$ has at most $n-1$ distinct roots, giving at most $n$ including $a$. If $p$ has no root, the result is immediate. ∎

This bound does not promise $n$ real roots. $x^{2}+1$ has none over $\\mathbb{R}$ but roots $i$ and $-i$ over $\\mathbb{C}$. The fundamental theorem of algebra states that every nonconstant complex polynomial factors into complex linear factors, counted with multiplicity. It is a deeper existence theorem, not a consequence of the elementary bound alone.

## 7. Rational functions as domain-plus-rule

A rational function represented by $p(x)/q(x)$ has natural domain excluding roots of $q$. If $p$ and $q$ share a factor, cancelling gives an equal rule on that original domain, not an identical typed function on a larger domain.

Let

$r(x)=(x^{2}-1)/(x-1)$ on $\\mathbb{R}\\setminus\\{1\\}$

and $s(x)=x+1$ on $\\mathbb{R}$. They agree wherever $r$ is defined, but they are not equal as functions because their domains differ. Restrict $s$ to $\\mathbb{R}\\setminus\\{1\\}$ and equality holds.

For a noncancelled denominator root $a$, a vertical asymptote requires more than “denominator equals zero.” If, after cancellation, the denominator contains $(x-a)^{m}$ while the numerator is nonzero at $a$, magnitudes become unbounded as $x\\to a$. A cancelled root instead gives a removable discontinuity: a finite limit but missing function value.

At infinity, polynomial division gives

$p/q = S + R/q$, with $\\deg R<\\deg q$.

If the denominator degree exceeds the remainder degree, $R(x)/q(x)\\to 0$ as $\\lvert x\\rvert \\to \\infty$, so the quotient approaches the polynomial $S$. This unifies horizontal, slant, and higher-degree polynomial asymptotes.

## 8. Recurrences and induction

A recurrence defines a sequence only when enough initial information is supplied. Consider

$a_{n+2}=3a_{n+1}-2a_n$.

Two initial values determine all later terms. Guess solutions of the form $a_n=r^n$. Substitution gives

$r^n(r^{2}-3r+2)=0$,

so the characteristic equation has roots 1 and 2. Candidate sequences are therefore

$a_n=A+B\\cdot2^n$.

If $a_{0}=3,a_{1}=5$, then $A+B=3$ and $A+2B=5$, yielding $B=2,A=1$. Thus $a_n=1+2^{n+1}$.

Verification should not rest on the guess. Check initial terms: formula gives 3 and 5. Then

$3a_{n+1}-2a_n=3[1+2^{n+2}]-2[1+2^{n+1}]=1+2^{n+3}=a_{n+2}$.

By induction, matching initial values and recurrence prove equality for every $n\\ge 0$.

## 9. Functional equations: unknown functions

In a functional equation, the unknown is a whole function. Hypotheses matter dramatically.

### A translation equation

Find functions $f:\\mathbb{R}\\to \\mathbb{R}$ satisfying

$f(x+1)=f(x)+2$ for all real $x$.

The obvious solution is $f(x)=2x+c$. But it is not the only one. If $p$ is any period-1 function ($p(x+1)=p(x)$), then

$f(x)=2x+p(x)$

works. Conversely, for any solution define $p(x)=f(x)-2x$; then

$p(x+1)=f(x+1)-2x-2=f(x)+2-2x-2=p(x)$.

So all solutions have that form. A single plausible family is not a classification until the converse is proved.

### Cauchy’s additive equation with regularity

Suppose $f:\\mathbb{R}\\to \\mathbb{R}$ satisfies

$f(x+y)=f(x)+f(y)$

for all real $x,y$, and suppose $f$ is continuous at 0. We prove $f(x)=cx$ for some constant $c$.

First, $f(0)=f(0)+f(0)$, so $f(0)=0$. Then $0=f(x-x)=f(x)+f(-x)$, so $f(-x)=-f(x)$. Repeated addition gives $f(nx)=nf(x)$ for integers $n$. Taking $x=1/n$ shows $f(1/n)=f(1)/n$, and hence for rational $m/n$,

$f(m/n)=(m/n)f(1)$.

Let $c=f(1)$. For real $x$, choose rationals $q_{j}\\to x$. Additivity gives

$f(x)-f(q_{j})=f(x-q_{j})$.

Continuity at 0 makes the right side approach 0, while $f(q_{j})=cq_{j}\\to cx$. Thus $f(x)=cx$.

Without a regularity condition such as continuity at one point, measurability, or boundedness on a suitable interval, non-linear additive functions exist assuming a basis of $\\mathbb{R}$ over $\\mathbb{Q}$. Therefore the bare equation does not justify the familiar answer. The hypothesis is doing real work.

## 10. Proof diagnostics

For any algebraic proof, audit:

- **Objects:** Are domains, codomains, coefficient systems, and index sets stated?
- **Direction:** Is each step reversible, or are candidates later checked?
- **Existence and uniqueness:** Did you prove both when claiming “the” solution?
- **Boundary cases:** What happens when a leading coefficient, denominator, multiplier, or interval length is zero?
- **Quantifiers:** Did examples stand in for a universal statement?
- **Converse:** If you constructed solutions, did you show every solution has that form?

## Exercises

1. Prove that if $g\\circ f=id_{A}$, then $f$ is injective and $g$ is surjective.
2. Find the natural domain of $h(x)=1/\\sqrt (2-x)$ over the reals.
3. Solve $\\sqrt (2x+3)=x$ with conditions and verification.
4. Prove a polynomial of degree 3 with four distinct roots is the zero polynomial only if “degree 3” is relaxed; identify the contradiction for a nonzero polynomial.
5. Find the multiplicity of 2 as a root of $p(x)=x^{4}-8x^{3}+24x^{2}-32x+16$ without graphing.
6. Classify $x=1$ for $(x^{2}-1)/(x-1)^{2}$, and justify after cancellation.
7. Solve $a_{n+2}=5a_{n+1}-6a_n$, $a_{0}=2,a_{1}=5$, and verify your formula.
8. Classify all functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying $f(x+2)=f(x)$ for every real $x$.
9. Suppose $f:\\mathbb{R}\\to \\mathbb{R}$ is strictly increasing. Prove it is injective. Is it necessarily surjective onto $\\mathbb{R}$?
10. Find all continuous $f:\\mathbb{R}\\to \\mathbb{R}$ satisfying both $f(x+y)=f(x)+f(y)$ and $f(1)=3$.

## Solutions

1. If $f(x_{1})=f(x_{2})$, applying $g$ gives $x_{1}=x_{2}$, so $f$ is injective. For each $a\\in A$, $a=g(f(a))$, so every $a$ is hit by $g$; thus $g$ is surjective.
2. A square-root denominator must be real and nonzero: $2-x>0$, so $x<2$.
3. Because the left side is nonnegative, require $x\\ge 0$; the radicand then is positive. Squaring gives $2x+3=x^{2}$, or $(x-3)(x+1)=0$. Candidates 3 and −1; only 3 satisfies the sign condition and original equation.
4. The root bound says a nonzero degree-3 polynomial has at most three distinct roots. Four roots contradict that bound. The zero polynomial has every number as a root, but its degree is not 3 (under the standard convention its degree is undefined or $-\\infty$).
5. The expression is $(x-2)^{4}$ by binomial expansion, so multiplicity 4. Equivalently, the first three derivatives vanish at 2 and the fourth does not.
6. Factor to $(x-1)(x+1)/(x-1)^{2}=(x+1)/(x-1)$ for $x\\ne 1$. One denominator factor remains and numerator approaches 2, so $x=1$ is a vertical asymptote, not a hole.
7. Characteristic roots 2 and 3 give $aₙ=A2ⁿ+B3ⁿ$. From $A+B=2$, $2A+3B=5$, obtain $B=1,A=1$. Thus $aₙ=2ⁿ+3ⁿ$; substitution verifies the recurrence and initial values.
8. Exactly the period-2 functions. The equation itself is the classification; on $[0,2)$ choose arbitrary values, then repeat them every two units. Extra hypotheses such as continuity restrict the arbitrary seed but do not force constancy.
9. If $x_{1}<x_{2}$, strict increase gives $f(x_{1})<f(x_{2})$, so equal outputs cannot come from distinct inputs. It need not be onto: $f(x)=e^{x}$ is strictly increasing from $\\mathbb{R}$ into $\\mathbb{R}$ but never outputs a nonpositive value.
10. The additive theorem with continuity gives $f(x)=cx$; $f(1)=3$ forces $c=3$. Therefore the unique solution is $f(x)=3x$, which directly satisfies both conditions.

## Capstone proof

Choose one transformation used in elementary algebra—cancelling, squaring, taking logs, composing inverses, or solving a recurrence. State a theorem with explicit domains and hypotheses, prove both directions where appropriate, give one boundary counterexample when a hypothesis is removed, and finish with a worked calculation that instantiates the theorem. A proof-worthy algebraic habit is knowing not only what works but the jurisdiction in which it works.
`;export{e as default};