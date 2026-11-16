var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: chaos-lyapunov-exponents-horseshoe
title: "Chaos, Lyapunov Exponents and the Horseshoe"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Chaos, Lyapunov Exponents and the Horseshoe

Irregularity is an observation; chaos is a mathematical claim about a specified system. A graph may look complicated because of a long transient, a projection, noise or numerical error. Conversely, a system with an elementary formula can have an invariant set whose orbit structure is exactly describable by infinite symbol strings. The purpose of a definition is to make those distinctions usable.

This chapter constructs an exact example of topological chaos, proves its principal properties, and explains how the horseshoe connects symbolic dynamics to smooth systems. It then treats Lyapunov exponents as tangent-growth quantities with their own hypotheses. These are complementary descriptions, not interchangeable tests. The original [Chaos, Symbolic Dynamics, and Entropy](../differential-equations-verified-dynamics/chaos-symbolic-entropy.md) is acknowledged as a seed and remains unchanged, including all twenty original solved questions.

Required preparation is [flows and maps](flows-and-maps.md), compactness and continuity of metric spaces, and the chain rule. Matrix eigenvalues help with the tangent examples. Measure-theoretic ergodic results are optional further reading and are explicitly identified when invoked.

## Name the space and the chaos definition

**Definition 11.1 (A topological chaos package).** Let $T:X\\to X$ be continuous on a metric space. It is topologically transitive if for every pair of nonempty open sets $U,V$ there is $n\\ge0$ with $T^n(U)\\cap V\\ne\\varnothing$. Periodic points are dense if every nonempty open set contains one. Sensitive dependence means there is $\\delta>0$ such that every neighbourhood of every $x$ contains $y$ and some $n\\ge0$ for which $d(T^nx,T^ny)>\\delta$. In this chapter, a Devaney-type chaos claim names transitivity, dense periodic points and sensitivity on the stated invariant space.

Some conventions define Devaney chaos using only the first two properties and derive sensitivity under additional assumptions on the space. We will prove all three directly for our model, avoiding reliance on that implication. A singleton fixed point is not sensitive, regardless of how unstable it is in a larger ambient space. Restricting to an invariant subset changes the relative topology, so it changes the question.

A dense orbit and topological transitivity are also related only under suitable topological assumptions. Rather than use the words loosely, we will show transitivity by mapping explicit open sets into each other. In the symbolic example we can additionally construct a dense orbit. This gives two compatible pieces of evidence whose proofs are clear.

## The one-sided full shift

Fix an integer $m\\ge2$ and an alphabet $\\mathcal A=\\{0,\\ldots,m-1\\}$. Let $\\Sigma_m^+=\\mathcal A^{\\mathbb N_0}$. For distinct sequences $s,t$, set $d(s,t)=2^{-N}$, where $N$ is their first differing coordinate; set $d(s,s)=0$. A cylinder fixes a finite prefix. Such cylinders form a basis for the topology.

**Definition 11.2 (Full shift).** The one-sided shift is $\\sigma(s_0s_1s_2\\ldots)=s_1s_2s_3\\ldots$. “Full” means every infinite word over the alphabet is allowed.

This metric is an ultrametric: if two pairs agree through their first $k$ coordinates, then so does the third pair, giving $d(s,u)\\le\\max(d(s,t),d(t,u))$. The shift is continuous because $d(\\sigma s,\\sigma t)\\le2d(s,t)$. The space is compact: from any sequence of sequences choose a subsequence with constant coordinate zero, then one with constant coordinate one, and continue. The diagonal subsequence converges to the string consisting of those selected coordinates. Sequential compactness is equivalent to compactness for metric spaces.

**Theorem 11.3 (Exact chaos for the full shift).** On $\\Sigma_m^+$, the shift is transitive, has dense periodic points and has sensitivity constant $1/2$. Indeed it is topologically mixing: for every pair of nonempty open sets, all sufficiently large iterates of the first meet the second.

*Proof.* It suffices to work with cylinders. If a cylinder fixes a word $u$, repeating $u$ forever gives a periodic point in it, proving density. If cylinders fix words $u,v$, choose any $n$ at least the length of $u$. A sequence can begin with $u$, have arbitrary intervening symbols, and have $v$ beginning at coordinate $n$. It lies in the first cylinder and its $n$th shift lies in the second. This works for every sufficiently large $n$ and proves mixing, hence transitivity.

For sensitivity, fix any $s$ and any neighbourhood. It contains a cylinder fixing some prefix of $s$. Choose a coordinate $N$ beyond that prefix and change $s_N$ to a different alphabet symbol, leaving the prefix intact. The new point $t$ belongs to the neighbourhood. After $N$ shifts the first coordinates differ, so their distance is one, greater than $1/2$. The availability of a different symbol uses $m\\ge2$. ∎

This proof makes no appeal to numerical randomness. A chosen string is completely deterministic. Complexity arises because arbitrarily distant coordinates, initially almost invisible in the metric, eventually become the current coordinate.

**Example 11.4 (A dense orbit built explicitly).** Enumerate all finite binary words, say first by length and then lexicographically, and concatenate them into one infinite string $s$. Every finite word occurs somewhere in $s$. Given any cylinder fixing a word $w$, shift to the coordinate at which its occurrence begins. That iterate lies in the cylinder. Hence the forward orbit of $s$ is dense in the binary shift. The construction does not imply that every string has a dense orbit: the all-zero string is fixed, while repeating $01$ gives a two-cycle. Transitivity accommodates simple periodic orbits and dense nonperiodic orbits in the same invariant space.

## Entropy as orbit counting

**Definition 11.5 (Separated orbit segments).** For a continuous map on a compact metric space, put $d_n(x,y)=\\max_{0\\le j<n}d(T^jx,T^jy)$. A set is $(n,\\epsilon)$-separated if every distinct pair has $d_n>\\epsilon$. Let $s(n,\\epsilon)$ be the largest possible cardinality. The topological entropy is
$$
h_{\\rm top}(T)=\\lim_{\\epsilon\\downarrow0}
\\limsup_{n\\to\\infty}\\frac1n\\log s(n,\\epsilon).
$$
Natural logarithms give entropy in natural units per iterate.

Compactness makes these finite separated counts meaningful. The order of limits is crucial: we first ask for exponential growth over long orbits at fixed resolution, then refine the resolution. A finite partition count at one horizon is a different object.

**Theorem 11.6 (Entropy of the full shift).** The one-sided full shift on $m$ symbols has topological entropy $\\log m$.

*Proof.* Select one infinite extension of every length-$n$ word. Any two distinct selected strings differ at a coordinate before $n$, so one of their first $n$ shifts differs at coordinate zero. Their $d_n$ distance is one. Thus $s(n,\\epsilon)\\ge m^n$ whenever $0<\\epsilon<1$.

For the reverse bound fix $\\epsilon>0$ and choose $k$ with $2^{-(k+1)}\\le\\epsilon$. Strings agreeing in their first $n+k$ coordinates have, after each of the first $n$ shifts, at least $k+1$ matching initial coordinates. Their $d_n$ distance is at most $2^{-(k+1)}$. A separated set therefore has at most one representative in each length-$(n+k)$ cylinder, so $s(n,\\epsilon)\\le m^{n+k}$. Divide logarithms by $n$ and let $n$ grow: the fixed overhead $k$ disappears. The lower and upper bounds give $\\log m$, and refining $\\epsilon$ changes nothing. ∎

Entropy measures the exponential number of distinguishable orbit segments, rather than the unpredictability of one selected point. It belongs here to the topological system. Metric entropy instead belongs to an invariant probability measure. Relating them uses deeper ergodic theory; a histogram does not automatically supply a generating partition or a measure-theoretic entropy calculation.

## Conjugacy, factors and the horseshoe

**Definition 11.7 (Conjugacy and factor).** Systems $T:X\\to X$ and $S:Y\\to Y$ are topologically conjugate if a homeomorphism $h:X\\to Y$ satisfies $hT=Sh$. If $h$ is only continuous and onto, the relation is a semiconjugacy, making $S$ a factor of $T$.

A conjugacy preserves least periods: $T^nx=x$ if and only if $S^nh(x)=h(x)$, and injectivity prevents a smaller period from appearing. It preserves transitivity because inverse images of nonempty open sets are nonempty and open. On compact metric spaces sensitivity also transfers: uniform continuity of $h^{-1}$ provides a scale in $Y$ below which points must have preimages closer than a chosen sensitivity scale in $X$. Separations in $X$ therefore force a uniform positive separation in $Y$. Apply the same argument in the opposite direction for equivalence.

A factor can identify different states and collapse periods, as the logistic trigonometric factor did. It is unsafe to transfer every property symmetrically through a semiconjugacy. The distinction is especially important when coding orbits by regions: multiple codes on partition boundaries are common.

**Theorem 11.8 (Classical horseshoe construction, cited).** There exist smooth planar diffeomorphisms with a compact hyperbolic invariant set $\\Lambda$ on which the map is topologically conjugate to the full two-sided shift on two symbols. The standard Smale horseshoe construction supplies such an example. Its smooth realization and hyperbolic coding theorem are cited from [Smale's work](https://doi.org/10.1090/S0002-9904-1967-11798-1), not proved here.

The two-sided space uses coordinates in $\\mathbb Z$, retaining both past and future; its shift is invertible. One may use the metric $\\frac13\\sum_{k\\in\\mathbb Z}2^{-|k|}\\mathbf1_{s_k\\ne t_k}$. Compactness follows by the same diagonal argument, now enumerating all integer coordinates. Periodic words approximate every cylinder fixing a finite block. To connect two such blocks, place them sufficiently far apart and fill the intervening coordinates arbitrarily. Changing a far positive coordinate produces separation at coordinate zero after a forward shift, at least $1/3$, so $1/6$ is a sensitivity constant. Thus the key chaos properties transfer to the horseshoe by conjugacy.

The geometric construction stretches one direction, contracts another and returns two strips across a region. Repeated forward and backward restrictions leave a Cantor-like invariant set. That description explains the mechanism; it does not certify a horseshoe in a plotted folded band. A particular application needs rigorous crossing, contraction and expansion estimates or another established sufficient criterion. The invariant set may be a saddle set rather than an attractor, so its existence does not say that most nearby starting states remain on it.

## Tangent growth and Lyapunov exponents

**Definition 11.9 (Directional finite-time exponent).** For a differentiable map and nonzero tangent vector $v$,
$$
\\lambda_n(x,v)=\\frac1n\\log\\frac{\\|DT^n(x)v\\|}{\\|v\\|}.
$$
An asymptotic directional exponent is the limit as $n\\to\\infty$, if that limit exists. For flows replace iterates by time $t$ and divide by $t$. A zero derivative product gives logarithm negative infinity.

The chain rule explains why sums of logarithmic stretches are numerically useful. Repeatedly applying a derivative and renormalizing a tangent vector avoids overflow; accumulating the removed logarithmic factors recovers its finite-time growth. Multiple vectors require orthogonalization to separate directions. A single vector can lie in a subdominant invariant subspace and miss the largest exponent.

**Example 11.10 (A positive exponent without chaos).** Consider $T(x,y)=(2x,y/2)$ and the fixed point at the origin. A horizontal tangent vector grows by $2^n$, so its exponent is $\\log2$; a vertical vector has exponent $-\\log2$. On the compact invariant set $\\{(0,0)\\}$ the map has no sensitivity, no multiple orbit segments and zero entropy. In the ambient plane, most points escape every bounded neighbourhood in one time direction. This exact example proves that one positive directional exponent at one orbit is not a proof of a chaotic attractor.

Equivalent norms alter finite-time exponents by bounded corrections that vanish after division by time. If $a\\|w\\|_1\\le\\|w\\|_2\\le b\\|w\\|_1$, the two norm ratios differ by factors between $a/b$ and $b/a$. Their logarithms divided by $n$ tend to zero. Likewise a smooth coordinate change with derivative and inverse derivative uniformly bounded along the relevant orbit preserves existing asymptotic exponents through the chain rule. Finite-time values can still change appreciably, so coordinate units belong in a report.

**Proposition 11.11 (The regular flow direction).** Let a continuously differentiable autonomous vector field $F$ generate a flow $\\varphi_t$ on a compact forward-invariant set $K$. Suppose $0<c\\le\\|F(x)\\|\\le C$ on $K$. The tangent vector $F(x)$ has exponent zero along every forward orbit in $K$.

*Proof.* Differentiate $\\varphi_t(\\varphi_s(x))=\\varphi_{t+s}(x)$ with respect to $s$ at zero:
$$D\\varphi_t(x)F(x)=F(\\varphi_t(x)).$$
The growth ratio is between $c/C$ and $C/c$. Taking its logarithm and dividing by $t$ tends to zero. The lower speed bound ensures the tangent vector remains nonzero and rules out exponential decay towards an equilibrium. ∎

**Example 11.12 (Why non-equilibrium is insufficient).** For $x'=-x$ with $x_0\\ne0$, the orbit is $x_0e^{-t}$ and never reaches the equilibrium at finite time. Nevertheless $D\\varphi_t=e^{-t}$, so its tangent exponent is $-1$. The speed tends to zero, violating the proposition's lower bound. A numerical flow calculation should not forcibly replace an exponent by zero merely because the sampled trajectory is nonconstant. Approaching an equilibrium or passing near one changes the relevant estimate.

## Evidence and asymptotic claims

An observed positive $\\lambda_n$ can result from a transient near a saddle, tangent misalignment, noise or accumulated numerical error. Even a genuine positive asymptotic exponent needs a named orbit or invariant measure. The multiplicative ergodic theorem gives almost-everywhere existence under invariant-measure and integrability hypotheses; it is a deep cited result, not an automatic property of every differentiable map. No assertion of ergodicity follows from the sign of a single exponent alone.

An honest report names the map or flow, parameter, invariant-set evidence, initial state, time unit, norm, tangent algorithm, precision and horizon. For an ODE it also names the integrator and error control. Compare estimates over successive blocks and changed resolution, rather than printing one number as a verdict. For a horseshoe claim, identify the theorem whose geometric hypotheses have actually been established. For an entropy claim, distinguish symbolic word counts from a proved generating code.

The benefit of the symbolic model is that it supplies an exact benchmark: all three topological properties and the entropy were proved without simulating a long trajectory. Smooth systems can inherit that package through a proved conjugacy. Lyapunov calculations then add quantitative tangent information, provided their separate analytic and numerical conditions are respected.

## Entropy survives a compact conjugacy

**Proposition 11.13 (Conjugacy invariance of topological entropy).** A topological conjugacy between continuous maps on compact metric spaces preserves topological entropy as defined above.

*Proof.* Let $h:X\\to Y$ be the conjugacy. Given $\\epsilon>0$, uniform continuity supplies $\\delta>0$ such that $d_X(x,x')<\\delta$ implies $d_Y(hx,hx')<\\epsilon$. If two points of $Y$ are separated by more than $\\epsilon$ at one of the first $n$ iterates, their preimages must be at least $\\delta$ apart at that iterate. Hence the preimage of an $(n,\\epsilon)$-separated set is $(n,\\delta/2)$-separated. Therefore
$s_Y(n,\\epsilon)\\le s_X(n,\\delta/2).$
Take the upper exponential growth rate and then refine $\\epsilon$ to obtain $h_{\\rm top}(S)\\le h_{\\rm top}(T)$. The same argument with the uniformly continuous inverse gives the opposite inequality. ∎

Compactness enters through uniform continuity. An arbitrary coordinate change on a noncompact space need not provide one common resolution comparison for every point of every orbit. This is a topological counterpart of the bounded-coordinate-change qualification for Lyapunov exponents.

Finite word counts have another limitation. A binary sample of length $L$ contains at most $L-n+1$ observed words of length $n$, as well as at most $2^n$ possible words. Thus, even in a genuine full shift, observing every possible length-$n$ word needs at least exponentially many sample positions as $n$ increases. Fixing the data length while increasing the word length must eventually underestimate the system's full combinatorial possibilities.

Conversely, observing all short words does not prove that every long word is allowed. A system can have constraints whose shortest forbidden word is longer than the observation window. The exact full-shift entropy proof used all words at every length and a uniform upper covering argument. A finite table supplies neither quantifier automatically.

A symbolic experiment should therefore identify whether its labels come from a proved conjugacy, a many-to-one coding, or merely chosen bins. Boundary crossings, finite spatial resolution and numerical error can invent or erase transitions. The entropy estimate is informative only to the extent that those coding uncertainties and finite-length limitations are understood. This is a productive role for data: it can locate a candidate forbidden transition or suggest a coding theorem to prove, while leaving the infinite symbolic claim open.

## Exercises

### Exercise 1: Cylinder periodic point
<a id="chaos-lyapunov-exponents-horseshoe-ex-1"></a>

Construct a periodic binary sequence in the cylinder beginning $00101$.

<details>
<summary>Hint 1</summary>

Repeat the prescribed word.

</details>

<details>
<summary>Hint 2</summary>

Its period divides the word length; check if it can be smaller.

</details>

<details>
<summary>Solution</summary>

The string $0010100101\\ldots$ repeats the five-letter word. It lies in the cylinder and has period five. Since five is prime and the string is not constant, its least period is five. Repetition proves periodic density even when a word has a smaller least period.

</details>

### Exercise 2: Mixing construction
<a id="chaos-lyapunov-exponents-horseshoe-ex-2"></a>

For cylinders fixing words of lengths three and four, show that every shift time $n\\ge3$ can connect them.

<details>
<summary>Hint 1</summary>

Place the first word at coordinate zero.

</details>

<details>
<summary>Hint 2</summary>

Place the second word beginning at coordinate $n$.

</details>

<details>
<summary>Solution</summary>

There is no overlap of the specified blocks when $n\\ge3$. Fill intervening coordinates and the infinite tail arbitrarily. The resulting sequence lies in the first cylinder and its $n$th shift lies in the second. This proves all sufficiently large connecting times, stronger than one connecting time.

</details>

### Exercise 3: Sensitivity scale
<a id="chaos-lyapunov-exponents-horseshoe-ex-3"></a>

Prove that $1/2$ works for the one-sided binary shift and explain why the one-symbol shift is different.

<details>
<summary>Hint 1</summary>

Change a coordinate beyond a fixed prefix.

</details>

<details>
<summary>Hint 2</summary>

Shift that coordinate to the front.

</details>

<details>
<summary>Solution</summary>

Any neighbourhood contains a cylinder fixing finitely many coordinates. Change a later binary coordinate; after shifting it to zero, distance is one, greater than $1/2$. With one symbol there is only one sequence and no distinct nearby point, so sensitivity fails. The alphabet-size assumption is essential.

</details>

### Exercise 4: Entropy units
<a id="chaos-lyapunov-exponents-horseshoe-ex-4"></a>

Compute the entropy of the four-symbol full shift using natural logarithms and base-two logarithms.

<details>
<summary>Hint 1</summary>

Count words of length $n$.

</details>

<details>
<summary>Hint 2</summary>

Take logarithm, divide by $n$, and compare bases.

</details>

<details>
<summary>Solution</summary>

There are $4^n$ length-$n$ words. The entropy is $\\log4$ in natural units per iterate, or $\\log_2 4=2$ bits per iterate. The underlying exponential orbit count is the same; only its numerical unit changes.

</details>

### Exercise 5: Least-period transfer
<a id="chaos-lyapunov-exponents-horseshoe-ex-5"></a>

Prove that a conjugacy preserves least periods and identify the step that fails for an onto factor.

<details>
<summary>Hint 1</summary>

Use $hT^n=S^nh$.

</details>

<details>
<summary>Hint 2</summary>

The converse requires injectivity.

</details>

<details>
<summary>Solution</summary>

If $T^px=x$, then $S^ph(x)=h(x)$. Conversely $S^qh(x)=h(x)$ gives $h(T^qx)=h(x)$ and injectivity yields $T^qx=x$. Thus the return-time sets agree and so do least periods. A noninjective factor cannot justify the converse.

</details>

### Exercise 6: Directional choice
<a id="chaos-lyapunov-exponents-horseshoe-ex-6"></a>

For $A=\\operatorname{diag}(3,1/3)$ compute exponents of $(1,0)$, $(0,1)$ and $(1,1)$.

<details>
<summary>Hint 1</summary>

Write $A^nv$.

</details>

<details>
<summary>Hint 2</summary>

For the mixed vector the expanding term eventually dominates.

</details>

<details>
<summary>Solution</summary>

The first exponent is $\\log3$, the second $-\\log3$. For $(1,1)$, the Euclidean growth ratio is $\\sqrt{3^{2n}+3^{-2n}}/\\sqrt2$, whose logarithm divided by $n$ tends to $\\log3$. A vector exactly in the contracting axis misses the largest exponent.

</details>

### Exercise 7: Finite growth
<a id="chaos-lyapunov-exponents-horseshoe-ex-7"></a>

A tangent norm grows from two to $2e^9$ over six iterates. Compute the finite exponent and state its limit of interpretation.

<details>
<summary>Hint 1</summary>

Divide the logarithm of the norm ratio by six.

</details>

<details>
<summary>Hint 2</summary>

One horizon does not establish convergence of the exponent sequence.

</details>

<details>
<summary>Solution</summary>

The estimate is $\\log(e^9)/6=3/2$ per iterate. It proves the stated finite growth if the tangent values are exact. It does not prove existence of an asymptotic exponent, an attracting invariant set, ergodicity or any particular chaos definition.

</details>

### Exercise 8: Flow neutral direction
<a id="chaos-lyapunov-exponents-horseshoe-ex-8"></a>

Use the flow identity to prove zero exponent when speed is between $c>0$ and $C<\\infty$.

<details>
<summary>Hint 1</summary>

Differentiate a time shift.

</details>

<details>
<summary>Hint 2</summary>

Bound the ratio of the final and initial speeds.

</details>

<details>
<summary>Solution</summary>

The identity $D\\varphi_t(x)F(x)=F(\\varphi_t(x))$ gives a norm ratio in $[c/C,C/c]$. Its logarithm is bounded independently of $t$, so division by $t$ tends to zero. The nonvanishing lower bound is necessary; approaching an equilibrium can violate it.

</details>

### Exercise 9: Horseshoe versus attraction
<a id="chaos-lyapunov-exponents-horseshoe-ex-9"></a>

A smooth map has a compact invariant horseshoe. Does that imply all nearby initial states converge to it?

<details>
<summary>Hint 1</summary>

Recall that conjugacy describes dynamics on the invariant set.

</details>

<details>
<summary>Hint 2</summary>

A transverse expanding direction can eject points.

</details>

<details>
<summary>Solution</summary>

No. A horseshoe is often a saddle invariant set with stable and unstable directions. The conjugacy describes orbits already on that set. It does not supply a trapping neighbourhood or a basin of attraction. Those require additional hypotheses and proofs.

</details>

### Exercise 10: A defensible chaos report
<a id="chaos-lyapunov-exponents-horseshoe-ex-10"></a>

Repair a claim based on a folded plot and one positive finite-time exponent.

<details>
<summary>Hint 1</summary>

Separate geometry, tangent growth and invariant-set conclusions.

</details>

<details>
<summary>Hint 2</summary>

Name what remains unproved.

</details>

<details>
<summary>Solution</summary>

Report the observed folded projection and the finite tangent estimate with parameter, horizon, precision and numerical method. A horseshoe needs verified geometric coding conditions; an asymptotic exponent needs limiting justification; an attractor needs invariant and attracting-set evidence. Neither the picture nor the finite positive number establishes all three.

</details>

## Sources

Original proofs of the full-shift properties, entropy estimate and regular flow-direction statement, developed from the unchanged seed [Chaos, Symbolic Dynamics, and Entropy](../differential-equations-verified-dynamics/chaos-symbolic-entropy.md). Its twenty original solutions remain available there. Its factor/invariance material is also developed in [chapter 9](one-dimensional-maps-logistic-family.md).

- Stephen Smale, [Differentiable Dynamical Systems](https://doi.org/10.1090/S0002-9904-1967-11798-1), cited source for the smooth horseshoe construction and its coding theory.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), further reading on symbolic dynamics and hyperbolic examples.
- V. I. Oseledets, [A Multiplicative Ergodic Theorem](https://www.mathnet.ru/php/archive.phtml?jrnid=mmo&option_lang=eng&paperid=214&wshow=paper), original cited theorem on almost-everywhere exponents.
- Peter Walters, [An Introduction to Ergodic Theory](https://link.springer.com/book/9780387951522), external preparation for measure-theoretic entropy and ergodic results.

The general horseshoe theorem, multiplicative ergodic theorem and variational principle for entropy are cited deeper theory. They are not inferred here from numerical data or from the elementary shift proofs.

## Summary

Chaos claims require an invariant space and a definition. The full shift gives a completely proved package of transitivity, periodic density, sensitivity and entropy; a cited horseshoe construction realizes this package inside a smooth map. Lyapunov exponents measure tangent growth and obey separate existence and numerical constraints. The [Lorenz chapter](lorenz-system-strange-attractors.md) applies these distinctions to a three-dimensional flow with a rigorously established strange attractor.
`;export{e as default};