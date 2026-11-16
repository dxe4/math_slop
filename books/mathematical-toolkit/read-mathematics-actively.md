
# Read mathematics actively

Mathematical prose is compressed. A single line in a textbook may encode hours of deliberation, and every symbol carries obligations. Passive reading---skimming theorems and nodding at diagrams---creates an illusion of understanding that collapses the moment you must use the material. Active reading is the habit of expanding compressed statements back into their full meaning, checking every hypothesis, and translating between words and symbols until the logic becomes yours.

This chapter introduces a systematic reading protocol. It assumes only comfort with elementary algebra and the willingness to slow down. The skills here enable every later chapter in this book, from writing proofs to evaluating numerical software.

## Why active reading matters

Consider the statement: "The distance from $x$ to $3$ is less than $0.2$." A passive reader nods and moves on. An active reader immediately writes:

$$
\lvert x - 3 \rvert < 0.2
$$

and unpacks it into the equivalent double inequality $2.8 < x < 3.2$. The active reader also asks: What is the domain of $x$? Is it a real number, a complex number, or a point in some metric space? The original sentence says nothing about the domain, so the active reader notes that assumption explicitly.

The cost of passive reading is cumulative. Each unchecked assumption becomes a hidden dependency that resurfaces as an error in proofs, computations, or models. The remedy is a structured annotation habit.

## The five-mark system

When you meet any mathematical statement, mark five things:

1. **Objects:** What concrete entities are under discussion? Numbers, functions, spaces, graphs, matrices, distributions.
2. **Hypotheses:** What is assumed, and where does each assumption appear? A theorem may require three hypotheses; a proof that uses only two may be incomplete or may be proving something stronger.
3. **Quantifiers:** Does the statement claim something for *every* object of a type, or does it assert the *existence* of at least one? The order of mixed quantifiers changes meaning entirely.
4. **Conclusion:** What must be produced, proved, or ruled out?
5. **Dependencies:** Which definitions and prior results does this statement rely on? Can you state them without looking them up?

### Example: annotating a definition

> A function $f : \mathbb{R} \to \mathbb{R}$ is **continuous at $a$** if for every $\varepsilon > 0$ there exists $\delta > 0$ such that $\lvert x - a \rvert < \delta$ implies $\lvert f(x) - f(a) \rvert < \varepsilon$.

- **Objects:** A function $f$, a point $a \in \mathbb{R}$, real numbers $\varepsilon$ and $\delta$, and a variable point $x$.
- **Hypotheses:** $f$ is defined on all of $\mathbb{R}$; $a$ is a real number; $\varepsilon$ is positive.
- **Quantifiers:** Universal over $\varepsilon > 0$; existential over $\delta > 0$; universal over $x$ satisfying $\lvert x - a \rvert < \delta$.
- **Conclusion:** The implication $\lvert x - a \rvert < \delta \Rightarrow \lvert f(x) - f(a) \rvert < \varepsilon$ holds.
- **Dependencies:** The definition uses the absolute value function and the real numbers; it does not use derivatives, integrals, or limits of sequences.

Notice that the definition says nothing about the function being differentiable, monotonic, or polynomial. Those are separate properties. A common error is to assume that continuity implies some stronger regularity; it does not.

## Translation in both directions

Reliable understanding requires fluency in both directions: translating words into symbols and symbols back into words. If you can perform only one direction, you risk either missing the logical structure or losing contact with the intended meaning.

### Words to symbols

> The sum of the squares of two real numbers is at most the square of their sum.

Let the numbers be $a$ and $b$. The statement becomes:

$$
a^{2} + b^{2} \leq (a + b)^{2}
$$

Expanding the right-hand side gives $a^{2} + 2ab + b^{2}$, so the inequality simplifies to $0 \leq 2ab$, or $ab \geq 0$. The original verbal statement is therefore true exactly when $a$ and $b$ have the same sign (or one is zero). A reader who stops at the first symbolic translation misses this refinement.

### Symbols to words

$$
\forall \varepsilon > 0 \; \exists N \in \mathbb{N} \; \forall n \geq N : \lvert a_{n} - L \rvert < \varepsilon
$$

In words: for every positive tolerance $\varepsilon$, there is a threshold $N$ in the natural numbers such that every term $a_{n}$ with index $n$ at least $N$ lies within distance $\varepsilon$ of $L$. The quantifier order matters. Reversing $\forall \varepsilon$ and $\exists N$ would claim a single threshold works for all tolerances, which is false for any sequence that converges non-trivially.

**Common error:** Reading $\forall \varepsilon > 0 \; \exists N$ as if $N$ could depend on $\varepsilon$ is correct; reading $\exists N \; \forall \varepsilon > 0$ as equivalent is a quantifier-order mistake that destroys the meaning of convergence.

## Examples and nonexamples

Every definition should be populated with a structured family of examples. The goal is not memorization but understanding of boundaries.

For the definition of continuity, construct:

1. **Smallest example:** $f(x) = 0$, constant and continuous everywhere.
2. **Typical example:** $f(x) = x^{2} - 3x + 1$, a polynomial, continuous everywhere.
3. **Boundary example:** $f(x) = \lvert x \rvert$, continuous everywhere but not differentiable at $0$.
4. **Near miss:** $f(x) = \frac{x^{2} - 1}{x - 1}$ for $x \neq 1$ with $f(1) = 3$. This is discontinuous at $1$ because the limit is $2$, not $3$; one clause of the definition fails.
5. **Surprising example:** $f(x) = x$ if $x$ is rational and $f(x) = 0$ if $x$ is irrational. This function is continuous only at $0$. It satisfies the definition at that single point because both rational and irrational values near $0$ approach $0$.

Nonexamples reveal why each clause in a definition exists. If you cannot produce a nonexample, you probably do not know where the concept breaks down.

## Reading proofs actively

A proof is not a sequence of true statements; it is a sequence of statements each justified by what came before. When reading a proof, ask at every line:

- Which hypothesis or prior result justifies this step?
- Could this step fail under weaker hypotheses?
- Is there a hidden division by zero, empty set, or undefined expression?
- What would a counterexample look like if this step were invalid?

### Example: reading a direct proof

**Claim:** The sum of two even integers is even.

*Proof:* Let $m$ and $n$ be even integers. By definition, there exist integers $a$ and $b$ such that $m = 2a$ and $n = 2b$. Then:

$$
m + n = 2a + 2b = 2(a + b)
$$

Since $a + b$ is an integer, $m + n$ is even. $\square$

Active reading notes:
- The definition of "even" is invoked explicitly: an integer divisible by $2$.
- The existence of $a$ and $b$ is guaranteed by the hypothesis that $m$ and $n$ are even.
- The step $2a + 2b = 2(a + b)$ uses the distributive law in $\mathbb{Z}$.
- The conclusion requires that $a + b$ be an integer; this follows from closure of $\mathbb{Z}$ under addition.
- No division occurs, so no zero-divisor issue arises.

**Common error:** Stating "even + even = even" without naming the definition or exhibiting the factor of $2$. The conclusion is correct, but the proof is incomplete because it does not show *why* the definition is satisfied.

## Practice exercises

Work each problem before reading its solution.

### Exercise 1
Negate the statement: "For every real $x$, there is an integer $n$ with $n > x$."

### Exercise 2
A rectangle has measured sides $12.0 \pm 0.1$ cm and $5.0 \pm 0.1$ cm. Give a defensible interval for its area.

### Exercise 3
Prove directly that the sum of two even integers is even, naming the definition you use.

### Exercise 4
Prove by contrapositive: if $n^{2}$ is even for an integer $n$, then $n$ is even.

### Exercise 5
Show that repeatedly replacing a positive integer $m > 1$ by $\lfloor m/2 \rfloor$ must terminate at $1$. Identify a monovariant.

### Exercise 6
For large positive $x$, explain why $\frac{1}{\sqrt{x^{2} + 1} + x}$ is a more reliable floating-point form of $\sqrt{x^{2} + 1} - x$.

### Exercise 7
A model predicts $y = ax + b$. List one observation pattern that would make $a$ and $b$ non-identifiable.

### Exercise 8
A program verifies an identity for every integer from $1$ through one million. What has it proved, and what has it not proved?

## Solutions

**Solution 1.** The negation is: "There exists a real $x$ such that every integer $n$ satisfies $n \leq x$." Both quantifiers change type, and the inequality is negated. The original statement is true (the integers are unbounded above), so its negation is false; but the logical form of the negation is what the exercise tests.

**Solution 2.** The true side lengths lie in $[11.9, 12.1]$ and $[4.9, 5.1]$. Since all endpoints are positive, the area lies in:

$$
[11.9 \cdot 4.9,\; 12.1 \cdot 5.1] = [58.31,\; 61.71] \text{ cm}^{2}.
$$

This is an interval bound from the stated measurement uncertainties, not a probability interval.

**Solution 3.** Write the integers as $m = 2a$ and $n = 2b$ with $a, b \in \mathbb{Z}$. Their sum is:

$$
m + n = 2a + 2b = 2(a + b),
$$

and $a + b$ is an integer because $\mathbb{Z}$ is closed under addition. By the definition of evenness, the sum is even.

**Solution 4.** The contrapositive says that if $n$ is odd, then $n^{2}$ is odd. Write $n = 2k + 1$ for some integer $k$; then:

$$
n^{2} = (2k + 1)^{2} = 4k^{2} + 4k + 1 = 2(2k^{2} + 2k) + 1,
$$

which is odd. Therefore the original implication holds.

**Solution 5.** The current positive integer is a strictly decreasing monovariant whenever it exceeds $1$, because $1 \leq \lfloor m/2 \rfloor < m$ for all $m > 1$. A strictly decreasing sequence of positive integers cannot continue forever, so it reaches $1$.

**Solution 6.** The direct form subtracts two nearly equal numbers when $x$ is large, which destroys relative accuracy through catastrophic cancellation. Multiplying by the conjugate gives the exactly equal second form, which uses addition in the denominator and avoids that cancellation.

**Solution 7.** If every observed input has the same value $x = c$, then the data determine only the combination $ac + b$. Many pairs $(a, b)$ give the same predictions, so the parameters are not separately identifiable.

**Solution 8.** It proves the identity for the tested integers, assuming the implementation and arithmetic are correct. It does not prove an unrestricted statement for all integers; that needs a mathematical argument or a finite exhaustive domain.

## Looking backward and forward

This chapter established the foundational habit of expanding compressed mathematical prose into its full logical structure. The annotation system---objects, hypotheses, quantifiers, conclusion, dependencies---will be used in every subsequent chapter. In the next chapter, *Mathematical Writing*, we reverse the direction: given a clear understanding, how do we produce prose that guides another reader to the same understanding?
