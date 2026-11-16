var e=`---
id: deep-dive-collatz-coupling-overlap-dependence
title: "Coupling and the Dependence of Overlapping Windows"
license: CC BY-SA 4.0
---

# Coupling and the Dependence of Overlapping Windows
<a id="sec-collatz-coupling-concentration"></a>

A maximal coupling attains total variation, while an exact overlap-variance calculation shows why equal marginals do not justify independent-data bounds.

## Preparation and source scope

This L4 article assumes the map conventions and proof language of the
[Collatz elective](/textbooks/collatz_conjecture/_output/) and the relevant finite-model
foundations of the [Collatz Research Toolkit](/textbooks/collatz_research_toolkit/_output/).
The preparation is named in the native prerequisite metadata; the discussion
below isolates one method rather than rebuilding the entire research course.

This is an abridged adaptation of [the retained source chapter](/textbooks/collatz_conjecture/_output/chapters/43-coupling-concentration.html).
The original formulas, worked material, exercise solutions and section anchors
remain at that source. No new mathematics, execution, empirical result or
independent review is claimed by the adaptation. The classical conjecture remains
open in the dated record used by the source; this article presents no proof of it.

The **joint distribution** of $(X,Y)$ records probabilities of pairs. Its
**marginals** are obtained by summing over the other coordinate. Equal marginals
do not determine a joint distribution. If $X$ is a fair bit, both $Y=X$ and
$Y=1-X$ are fair, but the first pair always agrees and the second never agrees.

Covariance is

$$
\\operatorname{Cov}(X,Y)
=\\mathbb E[(X-\\mathbb EX)(Y-\\mathbb EY)].
$$

It measures linear association, not every dependence. Chapter 41 gave a
zero-covariance dependent example. Coupling uses the entire joint law instead.

## Couplings and total variation

Let $\\mu$ and $\\nu$ be probability distributions on the same finite state
space. A **coupling** is a pair $(X,Y)$ on one probability space such that
$X\\sim\\mu$ and $Y\\sim\\nu$. The joint law is chosen; the two marginals remain
fixed.

The **total variation distance** is

$$
\\|\\mu-\\nu\\|_{\\mathrm{TV}}
=\\max_A|\\mu(A)-\\nu(A)|
=\\frac12\\sum_x|\\mu(x)-\\nu(x)|.
$$

For every coupling,

$$
\\|\\mu-\\nu\\|_{\\mathrm{TV}}\\le\\Pr(X\\ne Y). \\tag{43.1}
$$

To prove it, take any event $A$. If $X$ and $Y$ agree, their indicators of $A$
agree. Therefore

$$
|\\mathbf1_{\\{X\\in A\\}}-\\mathbf1_{\\{Y\\in A\\}}|
\\le\\mathbf1_{\\{X\\ne Y\\}}.
$$

Taking expectations gives
$|\\mu(A)-\\nu(A)|\\le\\Pr(X\\ne Y)$; maximize over $A$.

A **maximal coupling** attains equality. On each state, match mass
$\\min(\\mu(x),\\nu(x))$; the total matched mass is
$1-\\|\\mu-\\nu\\|_{\\mathrm{TV}}$. Distribute the unmatched remainders separately.
This construction is exact in a finite space.

### Worked maximal coupling of two coins

Let $X$ be Bernoulli with parameter $1/3$ and $Y$ Bernoulli with parameter
$3/4$. Match as much mass as possible at each value. At one, the shared mass is

$$
\\min(1/3,3/4)=1/3.
$$

At zero, it is

$$
\\min(2/3,1/4)=1/4.
$$

The total agreement probability is $7/12$. The unmatched $X$ mass is $5/12$
at zero, and the unmatched $Y$ mass is $5/12$ at one, so they disagree on the
remaining event. Thus

$$
\\Pr(X\\ne Y)=\\frac5{12}.
$$

Direct calculation gives

$$
\\|\\mathcal L(X)-\\mathcal L(Y)\\|_{\\mathrm{TV}}
=\\frac12\\left(\\left|\\frac13-\\frac34\\right|
+\\left|\\frac23-\\frac14\\right|\\right)
=\\frac5{12}.
$$

The coupling attains equality. An independent coupling would disagree with
probability

$$
\\frac13\\frac14+\\frac23\\frac34=\\frac7{12},
$$

which is valid but weaker. Coupling is a designed proof device; independence is
not automatically the best design.

## Overlapping windows create dependence

Let $B_1,\\ldots,B_{r+1}$ be independent fair bits and count overlapping \`11\`
blocks:

$$
I_i=\\mathbf1_{\\{B_i=B_{i+1}=1\\}},
\\qquad
S_r=\\sum_{i=1}^rI_i.
$$

Each indicator has

$$
\\mathbb EI_i=\\frac14,
\\qquad
\\operatorname{Var}(I_i)=\\frac14\\frac34=\\frac3{16}.
$$

Adjacent indicators share one bit. Their joint-one event is \`111\`, so

$$
\\mathbb E[I_iI_{i+1}]=\\frac18,
$$

and

$$
\\operatorname{Cov}(I_i,I_{i+1})
=\\frac18-\\frac1{16}=\\frac1{16}.
$$

Indicators separated by at least two positions depend on disjoint source bits
and are independent. Expanding the variance of the sum gives

$$
\\begin{aligned}
\\operatorname{Var}(S_r)
&=\\sum_{i=1}^r\\operatorname{Var}(I_i)
+2\\sum_{i=1}^{r-1}\\operatorname{Cov}(I_i,I_{i+1})\\\\
&=\\frac{3r}{16}+\\frac{2(r-1)}{16}
=\\frac{5r-2}{16}.
\\end{aligned}\\tag{43.2}
$$

Pretending the windows are independent gives $3r/16$ and underestimates
uncertainty by nearly forty percent for large $r$.

## Dependency graphs

A **dependency graph** has one vertex per random variable. Two disjoint vertex
sets with no connecting edge index independent variable families. For the
$I_i$, connect adjacent indices. The graph is a path.

A proper coloring partitions vertices into independent sets. Odd-indexed
windows use disjoint bit pairs, and so do even-indexed windows. Two colors
suffice. Coloring does not make the two color sums independent of one another;
it makes variables within each color independent, which is enough for a union
argument.

This strategy generalizes to length-$\\ell$ windows of independent bits. Windows
whose starting positions differ by at least $\\ell$ use disjoint inputs. Coloring
positions modulo $\\ell$ yields $\\ell$ independent subfamilies.

## Concentration by coloring

Hoeffding's inequality for $q$ independent variables in $[0,1]$ states

$$
\\Pr\\left(\\sum_{j=1}^q(X_j-\\mathbb EX_j)\\ge s\\right)
\\le\\exp\\left(-\\frac{2s^2}{q}\\right).
$$

Write $S_r=S_{\\mathrm{odd}}+S_{\\mathrm{even}}$. If
$S_r-\\mathbb ES_r\\ge t$, at least one color sum exceeds its mean by $t/2$.
Let

$$
q_o=\\left\\lceil\\frac r2\\right\\rceil,
\\qquad
q_e=\\left\\lfloor\\frac r2\\right\\rfloor.
$$

Hoeffding and the union bound give

$$
\\Pr(S_r-\\mathbb ES_r\\ge t)
\\le
\\exp\\left(-\\frac{t^2}{2q_o}\\right)
+\\exp\\left(-\\frac{t^2}{2q_e}\\right), \\tag{43.3}
$$

when both color classes are nonempty. This bound may be loose, but it is valid.
An independent-window bound with $r$ fresh observations is not valid.

## Coalescing Collatz tails

Deterministic coupling appears directly in Collatz data. Under the unaccelerated
map,

$$
C(2n)=n.
$$

The starts $n$ and $2n$ share every state after the latter's first step. If a
table stores all orbit steps from both starts, nearly the entire second record
duplicates the first tail. Treating those steps as independent observations
inflates effective information.

More generally, starts that enter one value $m$ form a **merge cluster** below
that meeting point. Cluster-aware resampling keeps a shared tail together. The
cluster definition must match the statistic: grouping at the first value below
a cutoff answers a different question from grouping by eventual equality.

The deterministic meeting does not by itself prove convergence. If the shared
tail were nonconvergent, both starts would share that failure. Coupling describes
dependence, not the destination.

### Exact relations among shared-tail statistics

If the orbit of $n$ reaches one, then under the unaccelerated map

$$
\\tau(2n)=1+\\tau(n).
$$

Their peaks satisfy

$$
M(2n)=\\max\\{2n,M(n)\\}.
$$

Thus the two rows are algebraically linked, not merely correlated in an
estimated sense. If both complete traces are stored, every post-first-step value
in the $2n$ row duplicates the $n$ row. A naive row bootstrap treats an exact
identity as fresh variation.

For a bounded merge threshold $B$, define the signature of a start as its first
visited state at most $B$, together with \`unresolved\` if none is seen before the
step cap. Starts with the same resolved signature share the remaining tail below
$B$. Resampling whole signature clusters preserves that dependence for
statistics determined below the threshold. It does not automatically model
dependence above $B$ or extrapolate beyond the sampled range.

## Theorem-scope and failure audit

- Every coupling preserves its declared marginals.
- Coupling inequality is exact; a poor coupling may give a weak bound.
- Synchronous register coupling proves finite-window mixing after $m$ steps.
- Path coupling uses the metric induced by the allowed edge lengths; a
  connected graph and an unrelated metric are insufficient.
- Random-coordinate refresh contracts expected Hamming distance by
  $1-1/m$, but its coupling tail and marginal total variation can differ.
- Equation (43.2) exactly corrects overlap variance under independent source
  bits.
- Coloring restores independent subfamilies, not global independence.
- Shared Collatz tails make many common sampling units dependent.
- Low-bit mixing does not control ordinary height.
- No proved coupling currently forces every pair of positive Collatz orbits
  into the known cycle.

Three similar-looking phrases should now be kept separate. **Coalescence** means
two coupled coordinates become equal and remain equal. **Mixing** means a
process law forgets its initial distribution in a named metric. **Concentration**
means an observable stays near a center with high probability. Shift-register
coalescence proves mixing, and a separate bounded-difference argument proves
concentration of selected statistics. Neither word alone implies the other for
an arbitrary process.

For Collatz data, deterministic tail merging is coalescence of particular
starts, not mixing of a probability law. A narrow stopping-time histogram is a
finite concentration-like observation, not a theorem about future ranges.
Writing the intended noun first—coupling, law, observable, sample, or orbit—often
reveals whether the claimed implication has changed mathematical objects.

The reusable lesson is constructive: preserve joint structure when it is known,
partition dependence when it can be proved, and pay explicitly for whatever
independence remains a model assumption.


## Exercises

### Exercise 1
<a id="deep-dive-collatz-coupling-overlap-dependence-ex-1"></a>

Construct a maximal coupling of Bernoulli variables with parameters one quarter and three quarters, and compare its disagreement probability with independent coupling.

<details>
<summary>Hint 1</summary>

Match common mass at zero and at one.

</details>

<details>
<summary>Hint 2</summary>

The unmatched masses must disagree.

</details>

<details>
<summary>Solution</summary>

Match one quarter at the pair $(0,0)$ and one quarter at $(1,1)$. The remaining one half is placed at $(0,1)$. The marginals are correct and disagreement is one half, equal to total variation $|1/4-3/4|$. Independent coupling disagrees with probability $(1/4)(1/4)+(3/4)(3/4)=5/8$, a valid but larger upper bound. The choice of joint distribution affects the proof bound even when both marginals are fixed.

</details>

### Exercise 2
<a id="deep-dive-collatz-coupling-overlap-dependence-ex-2"></a>

For three independent fair bits, let the two overlapping \`11\` indicators be added. Compute the mean and variance, and compare with an independence calculation.

<details>
<summary>Hint 1</summary>

Each indicator has mean one quarter and variance three sixteenths.

</details>

<details>
<summary>Hint 2</summary>

Their joint-one event is the three-one word.

</details>

<details>
<summary>Solution</summary>

The sum has mean one half. The joint-one probability is one eighth, so covariance is $1/8-1/16=1/16$. The variance is $3/16+3/16+2/16=1/2$. Ignoring covariance would give three eighths and understate uncertainty. Disjoint source-bit sets explain independence of more separated windows; adjacent windows share a bit. The calculation belongs to the independent source-bit model and does not license treating every overlapping segment of a deterministic Collatz orbit as a fresh sample.

</details>

## Continue with the full argument

Return to the [research toolkit](/textbooks/collatz_research_toolkit/_output/) for the surrounding definitions and transfer questions, and to the retained source for longer derivations and additional exercises. The distinction between a theorem in a declared model and a universal statement about positive integers remains part of every conclusion.
`;export{e as default};