
# Advanced Proof Techniques and Synthesis

## Motivation: from exercises to theorems

The preceding chapters built a library of definitions, examples, and proof patterns. This final chapter steps back to examine the proof techniques themselves: proof by induction, proof by contradiction, proof by construction, and proof by exhaustion. We then synthesize these tools to attack harder problems that draw on multiple chapters simultaneously. The goal is not to present a survey of all mathematics, but to show how the disciplined habits developed in this book---precise hypotheses, careful quantifiers, verified examples---scale to more ambitious claims.

## Proof by induction: a review and extension

**Principle of mathematical induction.** To prove $P(n)$ for all integers $n\ge n_{0}$:

1. **Base case:** Prove $P(n_{0})$.
2. **Inductive step:** Assume $P(k)$ holds for some $k\ge n_{0}$ (the inductive hypothesis), and prove $P(k+1)$.

Then $P(n)$ holds for all $n\ge n_{0}$.

**Strong induction.** In the inductive step, assume $P(j)$ holds for all $j$ with $n_{0}\le j\le k$, and prove $P(k+1)$. This is logically equivalent to ordinary induction but often more convenient.

**Example.** Every integer $n\ge 2$ is a product of primes.

**Proof by strong induction.** Base case: $2$ is prime. Assume every integer $j$ with $2\le j\le k$ is a product of primes. Consider $k+1$. If $k+1$ is prime, we are done. Otherwise $k+1=ab$ with $2\le a,b\le k$. By the inductive hypothesis, $a$ and $b$ are products of primes, so $k+1$ is too. ∎

## Proof by contradiction

To prove $P$, assume $\neg P$ and derive a statement known to be false (a contradiction). The validity rests on the law of excluded middle: $P\lor\neg P$.

**Example.** $\sqrt{2}$ is irrational.

**Proof.** Suppose $\sqrt{2}=p/q$ in lowest terms. Then $2q^{2}=p^{2}$, so $p^{2}$ is even, hence $p$ is even. Write $p=2r$. Then $2q^{2}=4r^{2}$, so $q^{2}=2r^{2}$, making $q$ even. But then $p$ and $q$ share a factor of $2$, contradicting lowest terms. ∎

**Common error.** A proof by contradiction must derive an actual contradiction, not merely an undesirable conclusion. "This would be complicated, therefore false" is not a valid argument.

## Proof by construction and counterexample

To prove an existential statement $\exists x\,P(x)$, exhibit a specific $x$ and verify $P(x)$. To disprove a universal statement $\forall x\,P(x)$, exhibit a counterexample.

**Example.** The claim "every continuous function is differentiable" is false. The counterexample $f(x)=|x|$ is continuous at $0$ but not differentiable there.

**Example.** There exists a function $f:\mathbb{R}\to\mathbb{R}$ that is continuous everywhere and differentiable nowhere. Weierstrass constructed

$$f(x)=\sum_{n=0}^{\infty}a^{n}\cos(b^{n}\pi x)$$

for suitable $0<a<1$ and odd integer $b$ with $ab>1+3\pi/2$. The uniform convergence theorem from **Uniform Convergence and Function Spaces** guarantees continuity; the choice of parameters destroys differentiability at every point.

## The pigeonhole principle

**Theorem 14.1 (Pigeonhole principle).** If $n$ objects are placed into $m$ containers with $n>m$, then at least one container contains more than one object.

**Example.** Among any $13$ people, at least two share a birth month.

**Example (Erdős-Szekeres).** Every sequence of $n^{2}+1$ distinct real numbers contains a monotone subsequence of length $n+1$.

## Diagonal arguments

Cantor's diagonal argument is one of the most versatile proof techniques in mathematics.

**Theorem 14.2 (Cantor).** The real numbers are uncountable.

**Proof.** Suppose $[0,1]$ were countable, enumerated as $x_{1},x_{2},\dots$. Write each in decimal form using the expansion that does not end in infinitely many $9$s. Construct $y=0.y_1y_2\ldots$ by setting $y_n=1$ when the $n$th digit of $x_n$ is not $1$, and $y_n=2$ when it is $1$. The constructed decimal uses only $1$ and $2$, so it has no alternate trailing-$9$ representation, and it differs from $x_n$ in its $n$th digit. Thus $y\ne x_n$ for every $n$, contradicting the enumeration. ∎

The same structure appears in proofs of the unsolvability of the halting problem, Gödel's incompleteness theorems, and the nonexistence of a universal set.

## Synthesis: a multi-chapter proof

We conclude with a theorem that draws on **Power Series**, **Complex Functions**, and **Special Functions**.

**Theorem 14.3.** For $\operatorname{Re}(s)>1$,

$$\zeta(s)=\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{t^{s-1}}{e^{t}-1}\,dt.$$

**Proof.** Expand the integrand using the geometric series for $e^{-t}$:

$$\frac{1}{e^{t}-1}=\frac{e^{-t}}{1-e^{-t}}=\sum_{n=1}^{\infty}e^{-nt}.$$

Put $\sigma=\operatorname{Re}(s)>1$. Absolute interchange is justified because

$$\sum_{n=1}^{\infty}\int_0^{\infty}|t^{s-1}e^{-nt}|\,dt
=\sum_{n=1}^{\infty}\frac{\Gamma(\sigma)}{n^\sigma}
=\Gamma(\sigma)\zeta(\sigma)<\infty.$$

Tonelli's theorem applied to the absolute values, followed by Fubini's theorem, therefore permits us to substitute the series and interchange sum and integral:

$$\int_{0}^{\infty}\frac{t^{s-1}}{e^{t}-1}\,dt=\sum_{n=1}^{\infty}\int_{0}^{\infty}t^{s-1}e^{-nt}\,dt.$$

In the $n$th integral, substitute $u=nt$:

$$\int_{0}^{\infty}t^{s-1}e^{-nt}\,dt=\frac{1}{n^{s}}\int_{0}^{\infty}u^{s-1}e^{-u}\,du=\frac{\Gamma(s)}{n^{s}}.$$

Summing over $n$ gives $\Gamma(s)\zeta(s)$. The standard nonvanishing theorem for the gamma function says $\Gamma(s)\ne0$ (in particular on $\operatorname{Re}(s)>1$), so division by $\Gamma(s)$ yields the result. ∎

## Common errors in advanced proofs

**Error: Off-by-one in induction.** The inductive step must reach $k+1$ from the hypothesis at $k$. A step that only works for $k\ge 2$ needs a base case at $n=2$ as well as $n=1$.

**Error: Hiding quantifiers.** Statements like "$f$ is continuous" are universally quantified over the domain and over $\varepsilon>0$. Slipping into "for some $\varepsilon$" or "at some point" changes the meaning entirely.

**Error: Assuming what is to be proved.** In a proof by contradiction, the assumption $\neg P$ must be used to derive the contradiction. If the argument implicitly uses $P$, the proof is circular.

## Practice exercises

### Exercise 1
Prove by induction that $\sum_{k=1}^{n}k^{3}=\bigl(\frac{n(n+1)}{2}\bigr)^{2}$ for all $n\ge 1$.

**Solution.** Base case $n=1$: $1^{3}=1=(1\cdot 2/2)^{2}$. Assume true for $n$. Then

$$\sum_{k=1}^{n+1}k^{3}=\Bigl(\frac{n(n+1)}{2}\Bigr)^{2}+(n+1)^{3}=\frac{(n+1)^{2}}{4}\bigl(n^{2}+4(n+1)\bigr)=\frac{(n+1)^{2}(n+2)^{2}}{4}=\Bigl(\frac{(n+1)(n+2)}{2}\Bigr)^{2}.$$

∎

### Exercise 2
Prove that there are infinitely many primes.

**Solution.** Suppose $p_{1},\dots,p_{k}$ were all the primes. Let $N=p_{1}p_{2}\cdots p_{k}+1$. Then $N>1$, so $N$ has a prime divisor $q$. But $q$ cannot equal any $p_{i}$, since $N\equiv 1\pmod{p_{i}}$. Contradiction. ∎

### Exercise 3
Construct a bijection between $\mathbb{N}$ and $\mathbb{Z}$.

**Solution.** Define $f:\mathbb{N}\to\mathbb{Z}$ by $f(1)=0$, $f(2n)=n$, $f(2n+1)=-n$ for $n\ge 1$. This is injective because the parities and magnitudes distinguish images, and surjective because every integer appears. ∎

### Exercise 4
Use the pigeonhole principle to prove that in any group of $6$ people, there are either $3$ mutual acquaintances or $3$ mutual strangers.

**Solution.** Fix one person $A$. Among the other $5$ people, $A$ either knows at least $3$ or does not know at least $3$ (pigeonhole with $2$ boxes and $5$ objects). Suppose $A$ knows $B,C,D$. If any pair among $B,C,D$ knows each other, that pair with $A$ forms a trio of acquaintances. If no pair among $B,C,D$ knows each other, they form a trio of strangers. The other case is symmetric. ∎

### Exercise 5
Prove that the set of all functions $f:\mathbb{N}\to\{0,1\}$ is uncountable.

**Solution.** Suppose the set were countable, enumerated as $f_{1},f_{2},\dots$. Define $g(n)=1-f_{n}(n)$. Then $g:\mathbb{N}\to\{0,1\}$, but $g(n)\neq f_{n}(n)$ for all $n$, so $g\neq f_{n}$ for all $n$. Contradiction. ∎

## Looking forward and back

This book began with the simple idea that a function is a typed assignment and built through exponentials, trigonometric functions, complex analysis, series, special functions, equations, and dynamical systems to the proof techniques that unify them. The skills developed here---precise definitions, careful quantifiers, verified computations, and rigorous argument---are the foundation of mathematical reasoning. Whether your next step is analysis, algebra, geometry, or applied mathematics, the discipline of stating exactly what you know and proving exactly what you claim will serve you everywhere.
