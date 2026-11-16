var e=`---
id: deep-dive-collatz-large-deviation-models
title: "Large-Deviation Bounds and Their Arithmetic Scope"
license: CC BY-SA 4.0
---

# Large-Deviation Bounds and Their Arithmetic Scope
<a id="sec-collatz-large-deviations"></a>

Derive a Chernoff bound for independent Bernoulli increments, compare it with an exact finite tail, and identify the missing transfer to deterministic Collatz orbits.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](/textbooks/collatz_conjecture/_output/) and the relevant finite-model
foundations of the [Collatz Research Toolkit](/textbooks/collatz_research_toolkit/_output/).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](/textbooks/collatz_conjecture/_output/chapters/35-large-deviations.html).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

The average logarithmic multiplier in a random Collatz model is negative, yet
some finite orbits climb to enormous peaks. Large-deviation theory studies the
exponentially small chance that many small fluctuations cooperate to produce
an atypical average. It supplies a disciplined heuristic language for rare
excursions—and a precise checklist of assumptions that the arithmetic map does
not automatically satisfy.

We build the theory first for independent coin tosses, then translate it to a
declared Collatz model and isolate every gap between model and theorem.

## From averages to rare events

Let $X_1,\\ldots,X_n$ be independent identically distributed random variables
and

$$
\\overline X_n=\\frac1n\\sum_{i=1}^nX_i.
$$

The law of large numbers says $\\overline X_n$ is close to the mean
$m=\\mathbb E X_1$ with high probability. A large-deviation question asks for a
fixed $a>m$:

$$
\\mathbb P(\\overline X_n\\ge a).
$$

This probability often has exponential scale

$$
\\mathbb P(\\overline X_n\\ge a)
\\approx e^{-nI(a)}.
$$

The symbol $\\approx$ here means logarithmic equivalence, not equality of
probabilities:

$$
\\frac1n\\log\\mathbb P(\\overline X_n\\ge a)
\\longrightarrow-I(a)
$$

under suitable regularity.

The nonnegative function $I$ is a **rate function**, with $I(m)=0$. Larger
$I(a)$ means a rarer deviation.

## Exponential bounds

For $t>0$, Markov's inequality gives

$$
\\mathbb P\\left(\\sum X_i\\ge na\\right)
=\\mathbb P\\left(e^{t\\sum X_i}\\ge e^{tna}\\right)
\\le e^{-tna}\\mathbb E e^{t\\sum X_i}.
$$

Independence factors the expectation:

$$
\\mathbb E e^{t\\sum X_i}
=\\left(\\mathbb E e^{tX_1}\\right)^n.
$$

Define the log moment-generating function

$$
\\Lambda(t)=\\log\\mathbb E e^{tX_1}.
$$

Then

$$
\\mathbb P(\\overline X_n\\ge a)
\\le
\\exp\\{-n(ta-\\Lambda(t))\\}.
$$

Optimising over $t>0$ gives the Chernoff upper bound. The convex conjugate

$$
I(a)=\\sup_{t\\in\\mathbb R}\\{ta-\\Lambda(t)\\}
$$

is the candidate rate function.

This derivation shows exactly where independence enters: without it, the
moment-generating function of the sum does not become an $n$th power.

## Bernoulli calculation

Let $B_i$ be independent Bernoulli variables with
$\\mathbb P(B_i=1)=p$. Then

$$
\\Lambda(t)=\\log(1-p+pe^t).
$$

For $a\\in(0,1)$, optimisation gives

$$
I_p(a)
=a\\log\\frac ap+
(1-a)\\log\\frac{1-a}{1-p}.
$$

This is the binary relative entropy. It is zero at $a=p$, positive elsewhere,
and strictly convex.

There is also an exact finite probability:

$$
\\mathbb P(\\overline B_n\\ge a)
=\\sum_{k=\\lceil na\\rceil}^n
\\binom nk p^k(1-p)^{n-k}.
$$

Comparing its negative logarithm divided by $n$ with $I_p(a)$ reveals
finite-size corrections of order roughly $\\log n/n$.

## A shortcut Collatz model

For the shortcut map, an even step multiplies approximately by $1/2$ and an odd
step approximately by $3/2$ for large $n$:

$$
T(n)=
\\begin{cases}
n/2,&n\\text{ even},\\\\
(3n+1)/2,&n\\text{ odd}.
\\end{cases}
$$

Ignoring the additive $1/(2n)$ correction in logarithmic scale, define model
increments

$$
X_i=
\\begin{cases}
\\log(1/2),&\\text{with probability }1/2,\\\\
\\log(3/2),&\\text{with probability }1/2.
\\end{cases}
$$

The mean is

$$
\\mathbb E X_i
=\\frac12\\log\\frac12+\\frac12\\log\\frac32
=\\frac12\\log\\frac34<0.
$$

If $K_n$ odd steps occur among $n$, the modeled log multiplier is

$$
S_n
=K_n\\log\\frac32+(n-K_n)\\log\\frac12
=K_n\\log3-n\\log2.
$$

A nonnegative modeled excursion requires

$$
\\frac{K_n}{n}\\ge\\frac{\\log2}{\\log3}\\approx0.6309,
$$

well above the independent fair-coin mean $1/2$.

The Bernoulli rate prediction is

$$
\\mathbb P(S_n\\ge0)
\\asymp
\\exp\\left[
-nI_{1/2}\\left(\\frac{\\log2}{\\log3}\\right)
\\right]
$$

on logarithmic scale.



The rate calculation belongs to independent fair coin tosses. It is not an empirical theorem about Collatz parity vectors.

## Arithmetic corrections

Actual parity sequences are deterministic and constrained by starting residues.
For the shortcut map, every binary word of length $n$ corresponds to exactly
one residue class modulo $2^n$. Therefore a uniformly chosen residue modulo
$2^n$ has a uniformly distributed length-$n$ parity word. This gives an exact
finite uniformity statement.

But orbit sampling differs:

- choosing starting values uniformly from $[1,N]$ introduces boundary effects
  when $2^n$ is comparable with $N$;
- following one long orbit is not sampling independent new residue classes;
- conditioning on survival or high peak biases parity;
- the additive $+1$ accumulates through affine terms;
- an orbit's current magnitude and residue are linked.

For fixed $n$ with $N\\to\\infty$, residue uniformity supports binomial parity
counts. It does not establish an infinite-time independent process.

## Exact affine formula

For a parity word
$\\varepsilon_0,\\ldots,\\varepsilon_{n-1}\\in\\{0,1\\}$ under the shortcut map,
composition yields

$$
T^n(x)
=\\frac{3^k x+b(\\varepsilon)}{2^n},
\\qquad
k=\\sum_{i=0}^{n-1}\\varepsilon_i,
$$

where $b(\\varepsilon)$ is a nonnegative integer determined by the positions of
odd steps. The multiplicative estimate uses $3^k/2^n$; the affine correction
$b/2^n$ matters when $x$ is not much larger than it.

A rigorous finite excursion bound can:

1. group residue classes by parity word;
2. compute $k$ and $b$ exactly;
3. solve the inequality
   $(3^kx+b)/2^n\\ge x$ within that class;
4. count admissible starting values in a finite interval.

This retains arithmetic dependence rather than treating the increments as
random.

> **A correct model theorem is still a heuristic for the map**
>
> Cramér's theorem rigorously describes independent increments. Applying its
> rate to Collatz requires a proved sampling correspondence at the time scale and
> conditioning used. Finite parity-word uniformity is valuable, but it does not
> justify every infinite-orbit inference.

## Worked calculation: an exact tail, a bound, and an affine correction

Take twenty independent fair parity symbols. Multiplicative growth in the
shortcut model requires at least

$$
\\left\\lceil20\\frac{\\log2}{\\log3}\\right\\rceil=13
$$

odd symbols. The exact model probability is therefore

$$
\\mathbb P(K\\ge13)
=2^{-20}\\sum_{k=13}^{20}\\binom{20}{k}
=\\frac{137980}{1048576}
\\approx0.131588.
$$

There is no simulation error in this number. The binomial coefficients count
all length-$20$ words, and division by $2^{20}$ uses their equal model weights.
It is already a useful warning: at this short horizon the event is unusual but
not astronomically rare.

The exact tail is a finite count and should be computed as one. \`Fraction\`
preserves the integer numerator and denominator displayed in the text.


The result contains no Monte Carlo error. It is nevertheless a probability
inside the independent fair-word model; it is not a frequency theorem for one
classical Collatz orbit.

For comparison, demand an odd fraction of $0.65$. The fair-coin rate is

$$
I_{1/2}(0.65)
=0.65\\log(1.3)+0.35\\log(0.7)
\\approx0.0457005.
$$

Chernoff gives

$$
\\mathbb P(K\\ge0.65n)
\\le e^{-0.0457005n}.
$$

At $n=20$ the right side is about $0.401$, much larger than the exact tail; an
upper bound need not be a close approximation. At $n=100$ the same expression
is about $0.0104$, displaying the exponential scale more clearly. Rounding
$0.65n$ to an integer must be specified when an exact finite probability is
reported.

The odd count still does not determine the exact iterate. Consider the first
three shortcut branches. With \`1\` for odd and \`0\` for even, the word \`110\`
has

$$
T^3(x)=\\frac{9x+5}{8},
$$

whereas \`101\` has

$$
T^3(x)=\\frac{9x+7}{8}.
$$

Both words contain two odd steps. The constants differ because an early
addition is multiplied by later odd branches. The starts $x=3$ and $x=1$
realise these words respectively:

$$
3\\to5\\to8\\to4,
\\qquad
1\\to2\\to1\\to2.
$$

Thus the multiplicative approximation agrees for large $x$ at fixed horizon,
but it can be a poor description near the small cycle.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-large-deviation-models-ex-1"></a>

For four independent fair bits, find the exact probability of at least three ones and compare it with the event that all four bits are equal.

<details>
<summary>Hint 1</summary>

Count the favourable binary words.

</details>
<details>
<summary>Hint 2</summary>

The sample space has sixteen equiprobable words.

</details>
<details>
<summary>Solution</summary>

At least three ones occurs in the four words with exactly three ones and the all-one word, giving $5/16$. All four equal occurs in the all-zero and all-one words, giving $2/16=1/8$. Both are exact probabilities under the independent fair-word model. If instead four displayed bits are copies of one fair bit, the first probability is one half and the second one. Equal one-bit marginals therefore do not justify the independent tail count.

</details>

### Exercise 2
<a id="deep-dive-collatz-large-deviation-models-ex-2"></a>

The shortcut words \`110\` and \`101\` have the same odd count. Derive their affine maps and exhibit compatible starts, explaining why odd count does not determine the exact iterate.

<details>
<summary>Hint 1</summary>

Compose the branches in chronological order.

</details>
<details>
<summary>Hint 2</summary>

An early additive constant is multiplied by later odd branches.

</details>
<details>
<summary>Solution</summary>

For \`110\`, odd, odd, even composition gives $(9x+5)/8$. The start three follows $3\\to5\\to8\\to4$. For \`101\`, odd, even, odd gives $(9x+7)/8$, and one follows $1\\to2\\to1\\to2$. Both have multiplier nine eighths, but their constants differ. Parity admissibility must also be checked for a chosen start. A model retaining only the odd count loses this ordering information and cannot by itself determine exact arithmetic growth or universal convergence.

</details>

## Continue with the full argument

Return to the [research toolkit](/textbooks/collatz_research_toolkit/_output/) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
`;export{e as default};