var e=`---
id: deep-dive-collatz-entropy-information-loss
title: "Entropy Measures What an Odd Count Forgets"
license: CC BY-SA 4.0
---

# Entropy Measures What an Odd Count Forgets
<a id="sec-collatz-entropy-information"></a>

The entropy chain rule exactly divides a finite parity word into its odd-count information and the ordering information discarded by that summary.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](/textbooks/collatz_conjecture/_output/) and the relevant finite-model
foundations of the [Collatz Research Toolkit](/textbooks/collatz_research_toolkit/_output/).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](/textbooks/collatz_conjecture/_output/chapters/41-entropy-information.html).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

## Self-information and entropy

If an outcome $x$ has probability $p(x)>0$, its **self-information** is

$$
I(x)=-\\log_2p(x).
$$

A probability-one event carries zero surprise. An event of probability $1/8$
carries three bits. The logarithm turns products into sums: observing independent
events of probabilities $p$ and $q$ carries
$-\\log_2(pq)=-\\log_2p-\\log_2q$ bits.

For a finite random variable $X$, its **Shannon entropy** is the average
self-information

$$
H(X)=-\\sum_xp(x)\\log_2p(x),
$$

where a zero-probability term is defined as zero by continuity. Entropy is
measured in bits because the logarithm base is two. Natural logarithms give
nats; changing the base changes units, not substance.

For a fair bit, $H=1$. For a bit that equals one with probability $p$,

$$
h_2(p)=-p\\log_2p-(1-p)\\log_2(1-p).
$$

This binary entropy is zero at $p=0,1$ and maximal at $p=1/2$. A biased bit can
be hard to predict on one trial while still carrying less than one bit on
average.

If $X$ takes at most $m$ values, then

$$
0\\le H(X)\\le\\log_2m.
$$

The lower bound occurs for a constant variable; the upper bound occurs for the
uniform distribution. The relative-entropy argument below proves the upper bound.

A useful nonexample is the number of rows in a dataset. A million duplicate
rows do not contain a million independent pieces of information. Entropy uses
the distribution of possibilities, and inferential information also depends on
how rows share tails or selection rules.

## Joint and conditional entropy

For a pair $(X,Y)$ with joint probabilities $p(x,y)$,

$$
H(X,Y)=-\\sum_{x,y}p(x,y)\\log_2p(x,y).
$$

The **conditional entropy** after learning $Y$ is

$$
H(X\\mid Y)
=\\sum_y p(y)H(X\\mid Y=y).
$$

It averages the uncertainty remaining in $X$ over the possible revealed values
of $Y$. Expanding $p(x,y)=p(y)p(x\\mid y)$ gives the chain rule

$$
H(X,Y)=H(Y)+H(X\\mid Y).
$$

Indeed,

$$
-\\log_2p(x,y)
=-\\log_2p(y)-\\log_2p(x\\mid y),
$$

and averaging separates the two terms. The symmetric version also gives

$$
H(X,Y)=H(X)+H(Y\\mid X).
$$

If $Y=f(X)$ is a deterministic summary, then $H(Y\\mid X)=0$, so

$$
H(X)=H(Y)+H(X\\mid Y).
$$

The summary's information plus the unresolved detail equals the original
information exactly.

## Mutual information

The **mutual information** is

$$
I(X;Y)=H(X)-H(X\\mid Y)
=H(Y)-H(Y\\mid X).
$$

It measures the expected reduction in uncertainty about either variable after
the other is known. It is symmetric and nonnegative. If $X$ and $Y$ are
independent, learning one does not change the law of the other, so $I=0$.
Conversely, for finite variables, $I=0$ implies independence.

Zero covariance is weaker. Let $X$ be uniform on $\\{-1,0,1\\}$ and set
$Y=X^2$. Symmetry gives $\\mathbb E[XY]=\\mathbb E[X^3]=0$, and
$\\mathbb E[X]=0$, so covariance is zero. Yet $Y$ is completely determined by
$X$ and therefore carries information about it.

For deterministic $Y=f(X)$,

$$
I(X;Y)=H(Y).
$$

The summary cannot reveal more bits about $X$ than the summary itself can
carry.

## Relative entropy and model mismatch

Let $p$ and $q$ be distributions on the same finite set, with $q(x)>0$ whenever
$p(x)>0$. Their **relative entropy** or Kullback--Leibler divergence is

$$
D(p\\Vert q)=\\sum_xp(x)\\log_2\\frac{p(x)}{q(x)}.
$$

It is not a distance: it is generally asymmetric and does not obey the triangle
inequality. It is nevertheless nonnegative, with equality exactly when the two
distributions agree.

Terms with $p(x)=0$ contribute zero, including when $q(x)=0$. The bound $\\ln t\\le t-1$ holds for $t>0$, with equality only at $t=1$; apply it to $q(x)/p(x)$ only on $S=\\{x:p(x)>0\\}$:

$$
-\\ln\\frac{q(x)}{p(x)}\\ge1-\\frac{q(x)}{p(x)}.
$$

Multiply by $p(x)$ and sum over $S$, where $p$ has total mass one and $q$ has at most one. The right side becomes
$1-\\sum_{x\\in S}q(x)\\ge0$. Dividing by $\\ln2$ proves
$D(p\\Vert q)\\ge0$ in bits. Equality in the logarithm bound requires $q=p$ on $S$, and equality in the mass bound leaves no $q$-mass outside $S$.

Taking $q$ uniform on $m$ outcomes gives

$$
D(p\\Vert q)=\\log_2m-H(p)\\ge0,
$$

which proves the entropy upper bound.

Chapter 35's Bernoulli rate function is a relative entropy. That calculation
measures the exponential cost of a biased empirical frequency under an
independent coin model. It is not evidence that actual orbit windows are
independent coins.

## Data processing and coarse summaries

Suppose $X\\to Y\\to Z$ is a processing chain: conditional on $Y$, the output $Z$
does not depend further on $X$. The **data-processing inequality** says

$$
I(X;Z)\\le I(X;Y).
$$

Further processing cannot recover distinctions already erased. For a
deterministic coarsening $Z=g(Y)$, the result follows from the chain rule:

$$
I(X;Y)=I(X;Z)+I(X;Y\\mid Z),
$$

and conditional mutual information is nonnegative.

In Collatz work, a residue modulo $2^k$ determines its full length-$k$ parity
word. Replacing the word by its odd count forgets ordering. Replacing the odd
count by the label “multiplicative slope below one” forgets still more. No later
regression or plot can recreate which affine additions occurred unless that
information was retained elsewhere.

This principle is not pessimism. It helps choose a sufficient data schema. If a
research question depends on the affine constant, store the word or the
constant; an odd count alone is not sufficient.

## Complete case study: the parity information budget

Choose $R$ uniformly from $\\{0,1,\\ldots,2^k-1\\}$. Let $W$ be the first $k$
shortcut parity symbols and let $K=o(W)$ be their number of ones. The parity
bijection makes $R\\mapsto W$ one-to-one, so

$$
H(R)=H(W)=\\log_2 2^k=k.
$$

Every length-$k$ word is equally likely. Exactly $\\binom kj$ words have
$K=j$, hence

$$
\\Pr(K=j)=2^{-k}\\binom kj.
$$

Conditional on $K=j$, those words remain equiprobable. Therefore

$$
H(W\\mid K=j)=\\log_2\\binom kj.
$$

Because $K$ is a deterministic function of $W$, the chain rule gives

$$
k
=H(K)+H(W\\mid K)
=H(K)+2^{-k}\\sum_{j=0}^k
\\binom kj\\log_2\\binom kj. \\tag{41.1}
$$

Equation (41.1) accounts for every input bit. At $k=8$,

$$
H(K)\\approx2.5442,
\\qquad
H(W\\mid K)\\approx5.4558.
$$

Only about 2.54 bits remain in the odd count; more than 5.45 bits describe the
discarded order. At $k=32$, $H(K)\\approx3.5470$ while ordering retains about
$28.4530$ bits. The count has only $k+1$ possible values, so its entropy grows
at most like $\\log_2(k+1)$ even though the word contains $k$ bits.

## Information sufficient for a research question

A statistic $T(X)$ is **sufficient** for a target question only when the
conditional law or exact predicate of interest depends on $X$ through $T$.
For the leading multiplier of a length-$k$ parity word, the odd count is
sufficient: it determines $3^K/2^k$. For the exact iterate, it is not sufficient
because the affine constant depends on order.

Compare \`110\` and \`101\`. Both have two odd symbols, so both have leading slope
$9/8$. Their exact formulas are

$$
\\frac{9x+5}{8}
\\quad\\text{and}\\quad
\\frac{9x+7}{8}.
$$

The two-bit summary “there were two odd steps” cannot decide which offset
occurred. Information theory names the loss; the affine calculation shows why
it matters mathematically.

For a reproducible dataset, choose fields by the intended downstream claims.
Store the full parity word or affine constant when exact endpoints matter. Store
only $K$ when the declared result concerns the multiplier histogram. A smaller
schema is not automatically better if it makes the advertised theorem
uncheckable.

## Residue refinement as an information ladder

Let $R$ be uniform modulo $2^k$ and reveal only

$$
R_j=R\\bmod2^j,
\\qquad 0\\le j\\le k.
$$

There are $2^j$ equally likely revealed residues, so $H(R_j)=j$. Because
$R_j$ is determined by $R$,

$$
I(R;R_j)=j.
$$

Each revealed class has exactly $2^{k-j}$ compatible fine residues, giving

$$
H(R\\mid R_j)=k-j.
$$

One additional low bit transfers exactly one bit from unresolved detail to the
revealed summary. Through parity coding, the same ladder reveals one additional
parity symbol. This is a finite identity, not a statement that a positive
integer orbit obtains a fresh random bit at each time.

Now compare revealing only the odd count $K$. It does not refine in a nested
one-bit ladder: learning $K$ for a longer prefix can change the interpretation
of the earlier total, and many orders remain merged. Information diagrams should
therefore name the actual variables rather than drawing every summary as though
it were a residue truncation.

### Exact tables versus entropy estimation

If every residue modulo $2^k$ is enumerated once, the parity and odd-count
probabilities are exact finite-population proportions. There is no sampling
standard error. Numerical logarithms still need enough precision for a reported
decimal, but the underlying rational probabilities are known.

If only sampled starts are used, a plug-in entropy can miss unobserved
categories and is typically biased downward. If overlapping windows are sampled
from one orbit, dependence also invalidates independent-row error bars. A sound
report separates exact table construction, numerical evaluation, sampling
variation, and extrapolation to a larger population.

## Theorem-scope and failure audit

- Shannon identities are theorems for a declared probability distribution.
- Uniform residues give exactly uniform finite parity words.
- A deterministic function may have positive entropy when its input is random.
- Odd-count entropy measures retained uncertainty, not orbit growth.
- Relative entropy is a model-comparison quantity, not a probability that the
  model or conjecture is true.
- Entropy rate of a finite language does not control a specified exceptional
  infinite word.
- Empirical entropy from overlapping windows requires a dependence analysis.
- No elementary entropy calculation presently removes every exceptional
  positive Collatz orbit.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-entropy-information-loss-ex-1"></a>

Choose a binary word of length two uniformly. Compute the entropy of its odd count and the conditional entropy of the word given that count.

<details>
<summary>Hint 1</summary>

The count probabilities are one quarter, one half, one quarter.

</details>

<details>
<summary>Hint 2</summary>

Only count one leaves a choice between two equiprobable orders.

</details>

<details>
<summary>Solution</summary>

The count entropy is $-(1/4)\\log_2(1/4)-(1/2)\\log_2(1/2)-(1/4)\\log_2(1/4)=3/2$ bits. For counts zero and two the word is determined. For count one, the words \`01\` and \`10\` each have conditional probability one half, giving one conditional bit. Averaging over counts gives conditional entropy one half bit. Their sum is two bits, matching the uniform word entropy. The calculation depends on the specified uniform finite population.

</details>

### Exercise 2
<a id="deep-dive-collatz-entropy-information-loss-ex-2"></a>

A summary stores only the number of ones in a length-four word. Exhibit two words with the same summary and state why equal summary entropy cannot recover their affine effects.

<details>
<summary>Hint 1</summary>

Use the same positions as the source three-letter contrast, with an extra even branch.

</details>

<details>
<summary>Hint 2</summary>

The additive constants depend on order, not only on count.

</details>

<details>
<summary>Solution</summary>

The words \`1100\` and \`1010\` both have two ones. Their first three branches give $(9x+5)/8$ and $(9x+7)/8$ respectively; the final even branch gives $(9x+5)/16$ and $(9x+7)/16$ on their compatible residue classes. The count retains the common multiplier but loses the ordering distinction in the constants. Entropy quantifies uncertainty under a distribution; it does not reconstruct information a deterministic summary discards or prove that a particular arithmetic orbit follows a random model.

</details>

## Continue with the full argument

Return to the [research toolkit](/textbooks/collatz_research_toolkit/_output/) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
`;export{e as default};