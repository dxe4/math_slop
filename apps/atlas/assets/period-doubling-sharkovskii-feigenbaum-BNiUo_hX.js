var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: period-doubling-sharkovskii-feigenbaum
title: "Period Doubling, Sharkovskii and Feigenbaum"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Period Doubling, Sharkovskii and Feigenbaum

A bifurcation diagram invites a compelling story: a fixed point becomes two values, then four, then eight, and the successive parameter intervals shrink. Several different mathematical statements are hidden in that picture. A local flip bifurcation describes the birth of a two-cycle near one fixed point. Sharkovskii's theorem concerns which least periods must coexist for a continuous interval map. Feigenbaum scaling concerns the asymptotic geometry of particular cascades in appropriately regular families. None of these is a synonym for the others.

We will prove an exact local model, derive logistic landmarks and establish an interval-covering argument that forces periodic points. The full Sharkovskii theorem and the universality theory will be stated as external results, with their scope made explicit. This makes the [logistic laboratory](../../visual-labs/logistic-map-live.md) more useful: each visible feature can be matched with the type of theorem needed to justify it.

Read [one-dimensional maps](one-dimensional-maps-logistic-family.md) first, especially the strict multiplier criterion and the distinction between a least period and a solution of an iterate equation. Differentiation and the intermediate value theorem suffice for our proofs. The renormalization discussion is optional orientation towards analysis beyond this first course.

## Local doubling and an exact normal form

**Definition 10.1 (Multiplier of a periodic orbit).** If $a$ has least period $p$ for a differentiable real map $f$, its multiplier is
$$
\\mu_p=(f^p)'(a)=\\prod_{j=0}^{p-1}f'(f^j(a)).
$$
The product is unchanged when we start at another point of the same cycle. Magnitude below one gives local attraction of the cycle by applying the fixed-point test to $f^p$; magnitude above one gives local repulsion.

A flip is associated with a multiplier passing through minus one. The word “associated” is deliberate: crossing minus one alone, without nonlinear nondegeneracy assumptions, is not a complete bifurcation theorem. Rather than quote a general normal-form theorem and hide its hypotheses, we analyse a family for which the relevant equations are exact.

**Theorem 10.2 (An exact supercritical flip model).** Let $a>0$ and
$$F_\\mu(x)=-(1+\\mu)x+ax^3$$
on the real line. Zero is locally attracting for $-2<\\mu<0$ and locally repelling for $\\mu>0$. For $0<\\mu<1$, the two points $x_\\pm=\\pm\\sqrt{\\mu/a}$ form a locally attracting least-period-two orbit approaching zero as $\\mu\\downarrow0$.

*Proof.* Zero is fixed and has derivative $-(1+\\mu)$, whose magnitude is below one precisely for $-2<\\mu<0$, and exceeds one for $\\mu>0$. At $x_\\pm$, the equality $ax_\\pm^2=\\mu$ gives $F_\\mu(x_\\pm)=-x_\\pm$. They are nonzero and distinct, so their least period is two. Their one-step derivatives are both
$$F_\\mu'(x_\\pm)=-(1+\\mu)+3\\mu=-1+2\\mu.$$
The cycle multiplier is $(-1+2\\mu)^2<1$ for $0<\\mu<1$. Apply the strict multiplier criterion to the second iterate. The explicit square-root formula proves that the cycle shrinks towards zero. ∎

This is a local statement even though the displayed polynomial is defined globally. Cubic growth may send distant states to infinity; the theorem only describes sufficiently close starting states near the listed invariant objects. A normal form teaches a local mechanism, not the entire global phase portrait of every map resembling it.

**Example 10.3 (Direction of the emerging branch).** Set $a=4$ and $\\mu=1/4$. The two-cycle is $\\{-1/4,1/4\\}$, since each point maps to its negative. The derivative at each point is $-1/2$, and the full-cycle multiplier is $1/4$. Zero, meanwhile, has derivative $-5/4$ and repels locally. If instead $a=-4$, real points solving $F_\\mu(x)=-x$ exist for $\\mu<0$, with magnitude $\\sqrt{-\\mu/4}$. Their derivatives are again $-1+2\\mu$, now of magnitude greater than one. That branch is repelling on the side where zero is still attracting near $\\mu=0$. This comparison explains why the sign of the nonlinear coefficient matters and why a multiplier crossing by itself does not specify the direction or stability of a branch.

The general local flip theorem reduces a sufficiently smooth nondegenerate family to an equivalent leading-order description with additional remainder terms. We do not prove that reduction here. Our exact model already proves the square-root branch and the exchange of stability for one concrete family; it should not be advertised as a proof for all unimodal maps.

## Logistic landmarks and superstable cycles

For $f_r(x)=rx(1-x)$, the preceding chapter proved that the nonzero fixed point has multiplier $2-r$. It reaches minus one at $r=3$. The emerging two-cycle has multiplier $4+2r-r^2$, reaching minus one at $r=1+\\sqrt6$. Thus two distinct stability boundaries are obtained by exact algebra. A four-cycle's existence and classification require additional work; they do not follow solely from naming the second boundary.

**Definition 10.4 (Superstable critical cycle).** In a differentiable interval map with a critical point $c$ satisfying $f'(c)=0$, a periodic orbit containing $c$ has multiplier zero and is called superstable. The name refers to its local derivative product, not to a claim that its whole basin is known.

The adjective is sometimes used for a numerically small multiplier. Here it means exactly zero. Such parameters provide convenient markers inside attracting windows, distinct from the parameters where the windows begin or lose stability.

**Example 10.5 (The first superstable logistic two-cycle).** The critical point is $c=1/2$. A critical two-cycle must satisfy $f_r^2(1/2)=1/2$. Substitution gives
$$
\\frac{r^2}{4}\\left(1-\\frac r4\\right)=\\frac12,
\\qquad r^3-4r^2+8=0.
$$
The polynomial factors as $(r-2)(r^2-2r-4)$. The root $r=2$ makes $1/2$ a fixed point, so it must be excluded when seeking least period two. The other positive root is $r=1+\\sqrt5$. Here the orbit alternates between $1/2$ and $r/4$, which are distinct. One derivative is exactly zero, so the two-step multiplier is zero. This parameter lies strictly between $3$ and $1+\\sqrt6$, agreeing with the attracting interval already proved. The calculation also shows why solving an iterate equation without checking least period can produce a false answer.

At a superstable parameter the derivative product gives particularly strong local contraction after a full period, but parameter perturbations move the critical point off the exact cycle. A computer output of zero might also result from rounding. An exact algebraic equation, or validated enclosure, is needed if the term is intended literally.

## Period forcing for interval maps

The intermediate value theorem turns interval coverings into actual periodic points. We give a useful elementary version before stating the much stronger period-ordering theorem.

**Lemma 10.6 (Pulling back a covered interval).** Let $f$ be continuous on a compact interval $J$, and let $K=[c,d]\\subseteq f(J)$ be a nondegenerate compact interval. Some compact subinterval $J'\\subseteq J$ satisfies $f(J')=K$.

*Proof.* Choose preimages in $J$ of $c$ and $d$. Suppose first a preimage of $c$ lies to the left of a preimage of $d$. On the segment between them, let $v$ be the first point attaining $d$, and let $u$ be the last point before $v$ attaining $c$. These extrema exist because the relevant inverse images are closed in a compact interval. Between $u$ and $v$ the function cannot fall below $c$, since it would cross $c$ again before reaching $d$, and cannot exceed $d$, since it would attain $d$ before $v$. Thus $f([u,v])\\subseteq[c,d]$, while the endpoint values and continuity give equality. Reverse the orientation if the chosen preimages occur in the opposite order. ∎

**Theorem 10.7 (Two disjoint covering intervals force every period).** Suppose $f$ is continuous on an interval containing disjoint compact intervals $J_0,J_1$, and each image $f(J_i)$ contains $J_0\\cup J_1$. Then $f$ has a point of every positive least period.

*Proof.* Given a binary word $w_0,\\ldots,w_{n-1}$, pull back intervals successively using the lemma, beginning with the final target $J_{w_0}$. This constructs a compact interval $I\\subseteq J_{w_0}$ whose first $n-1$ images lie in $J_{w_1},\\ldots,J_{w_{n-1}}$ and whose $n$th image equals $J_{w_0}$. To see the construction formally, first find a subinterval of $J_{w_{n-1}}$ mapping onto $J_{w_0}$, then a subinterval of $J_{w_{n-2}}$ mapping onto that one, and continue backwards.

Since $f^n(I)$ contains $I$, there are points of $I$ whose $n$th images are respectively at or below its left endpoint and at or above its right endpoint. The continuous function $f^n(x)-x$ therefore has a zero in $I$, irrespective of which preimage comes first. This gives a periodic point with the chosen itinerary repeated.

For $n>1$, choose a word consisting of one symbol $1$ and $n-1$ symbols $0$. Its periodic repetition has least symbolic period $n$. A smaller least period for the constructed point would make its itinerary have that smaller period, impossible because $J_0,J_1$ are disjoint. For $n=1$, either constant word gives a fixed point. ∎

The separation of the intervals is substantive. If they shared a boundary point, a periodic point on that boundary might have two labels and defeat the least-period argument. More general coding theorems handle boundary identifications carefully; an informal binning convention is not a substitute.

**Theorem 10.8 (Sharkovskii's period ordering, cited).** Let $f:I\\to I$ be continuous on a compact real interval. Order the positive integers by first listing the odd numbers $3,5,7,\\ldots$, then twice those odds, then four times those odds, and so on, followed by the powers of two in descending order ending $\\ldots,8,4,2,1$. If $f$ has a point of least period $n$, it has points of every least period appearing to the right of $n$ in this ordering.

This full theorem is cited, not proved by the covering lemma alone. A proof with repeated intermediate-value arguments is supplied by [Bau-Sen Du](https://arxiv.org/abs/1507.04879). In particular, period three forces every positive period. An attracting three-cycle can coexist with many repelling cycles elsewhere; the theorem does not say that every initial state follows a chaotic attractor. Nor does it apply unchanged to arbitrary maps on higher-dimensional spaces.

## Universal scaling and its limits

Let $r_n$ denote successive period-doubling parameters along a specified cascade, with a consistent indexing convention. A commonly studied ratio is
$$\\delta_n=\\frac{r_n-r_{n-1}}{r_{n+1}-r_n}.$$
For the principal logistic cascade these ratios tend to the Feigenbaum scaling value, approximately $4.6692$. This is a deep asymptotic result, not a consequence of the quadratic formula for a two-cycle. Feigenbaum developed the renormalization explanation; Lanford supplied a computer-assisted proof of central renormalization conjectures, and Lyubich proved a broader hyperbolicity and universality result. We cite that theory rather than reproduce its functional-analytic proof.

The universality class matters. The relevant unimodal maps have an appropriate nonflat quadratic critical point, suitable regularity and a nondegenerate family crossing the period-doubling structure. A map with a different critical order or an arbitrary parameterization need not exhibit the same numerical law. “Every nonlinear system has the Feigenbaum constant” is false. Even within one family, periodic windows have their own local organisation and must not be collapsed into a single global threshold.

Renormalization means studying a suitable second iterate, restricted near the critical point and rescaled back to a standard domain. Repeating this operation compares the shape seen at one stage of a cascade with the shape at the next. A fixed point of that operator is a self-similar limiting shape. The scaling constant is connected with an expanding direction of the operator, not simply with the slope of the original parabola at a fixed point. Establishing existence, uniqueness in a specified class, hyperbolicity and transversality is the deep part of the theory.

**Example 10.9 (What an exact geometric cascade would imply).** Suppose an illustrative sequence satisfies $r_n=r_\\infty-C\\delta^{-n}$, where $C>0$ and $\\delta>1$. Then
$$
r_n-r_{n-1}=C(\\delta-1)\\delta^{-n},
\\qquad
\\frac{r_n-r_{n-1}}{r_{n+1}-r_n}=\\delta.
$$
Thus the ratio recovers $\\delta$ exactly in this model. Real cascades approach such scaling asymptotically and have correction terms; a few ratios need not equal the limit. Moreover, affine reparameterization $s=ar+b$ with $a\\ne0$ leaves these ratios unchanged. A smooth nonlinear reparameterization with nonzero derivative at the accumulation point preserves the limiting ratio when it exists, because the mean value theorem replaces each parameter gap by its original gap times a derivative tending to the same nonzero number. A singular reparameterization can change the law. Parameterization is therefore a mathematical hypothesis, not a cosmetic choice.

## What the laboratory can establish

A finite parameter grid can miss narrow windows. At each parameter, a finite horizon may fail to distinguish slow attraction from a long cycle. Near a stability boundary the multiplier magnitude is close to one, so convergence slows; increasing the discarded transient is then necessary for a cleaner picture but does not itself prove a limit.

Estimating $\\delta_n$ also amplifies parameter uncertainty. Each denominator is a small difference of nearby thresholds. If its uncertainty is comparable with that difference, the ratio is unreliable even when each printed threshold has many digits. Distinguish a bisection bracket certified by an analytic criterion from a visual estimate based on a cloud. Superstable parameters and bifurcation parameters define different sequences; mixing them in one ratio has no justification.

The laboratory is strongest when used to propose a focused question: locate a suspected cycle, compute an iterate equation, remove lower periods, evaluate the multiplier, and then investigate how that object changes. The exact fixed-point and two-cycle calculations provide anchors for this procedure. The covering theorem gives a route from interval geometry to existence of cycles. Sharkovskii and universality supply further conclusions under their stated hypotheses. Keeping these levels visible allows an attractive diagram to stimulate mathematics without being mistaken for its proof.

## Critical slowing in the exact flip model

**Proposition 10.10 (Algebraic attraction at the neutral flip).** For $F_0(x)=-x+ax^3$ with $a>0$, any initial point satisfying $0<ax_0^2<1$ converges to zero with alternating sign. More precisely,
$|x_n|\\sim(2an)^{-1/2}.$

*Proof.* Put $y_n=x_n^2$. Then $y_{n+1}=y_n(1-ay_n)^2$. If $0<ay_n<1$, its next value is positive and smaller, so the condition persists. The limit $\\ell$ satisfies $\\ell=\\ell(1-a\\ell)^2$. Within $0\\le a\\ell<1$, the only possibility is $\\ell=0$. The original update is $x_{n+1}=-x_n(1-ay_n)$, so signs alternate.

For the rate, compute
$
\\frac1{y_{n+1}}-\\frac1{y_n}
=\\frac{2a-a^2y_n}{(1-ay_n)^2}\\longrightarrow2a.
$
Summing these increments and taking their arithmetic mean gives $(1/y_n)/n\\to2a$: the fixed initial term divided by $n$ vanishes, and the averages of a convergent sequence converge to its limit. Rearranging gives $ny_n\\to1/(2a)$, hence the stated square-root asymptotic. ∎

Here the multiplier at zero is minus one, so the strict derivative test is silent, yet the nonlinear term gives attraction. The convergence is algebraic rather than geometric. A finite experiment can therefore show a persistent small oscillation long after the same protocol would have settled at a parameter farther inside the attracting region.

The calculation is especially useful when planning burn-in. Discarding a fixed number of iterations cannot have the same effect uniformly across a stability boundary. Near-neutral attraction may require many more steps to bring the orbit within a chosen tolerance, and the dependence may no longer be well represented by a single exponential rate. Reporting the discard length is therefore necessary but not sufficient; one should also explain why that length is adequate for the output being studied.

The asymptotic sign $\\sim$ is an infinite-time statement proved here for this exact family, not a fitted power law from a graph. Its constant follows from the reciprocal-square increment. A different cubic coefficient changes that constant, and higher-order degeneracies can change the power itself. This is another reason to state the nonlinear assumptions in a general bifurcation theorem rather than treating every neutral multiplier as the same event.

## Exercises

### Exercise 1: Multiplier around a cycle
<a id="period-doubling-sharkovskii-feigenbaum-ex-1"></a>

Show that the product defining a cycle multiplier is independent of the chosen starting point.

<details>
<summary>Hint 1</summary>

Write the chain-rule factors.

</details>

<details>
<summary>Hint 2</summary>

Cyclically permuting scalar factors does not change a product.

</details>

<details>
<summary>Solution</summary>

Starting at a different cycle point cyclically permutes $f'(a),f'(f(a)),\\ldots,f'(f^{p-1}(a))$. Real scalar multiplication is commutative, so the product is unchanged. This argument concerns a one-dimensional derivative; matrix products in higher dimensions need a separate discussion.

</details>

### Exercise 2: Exact flip
<a id="period-doubling-sharkovskii-feigenbaum-ex-2"></a>

For $F_\\mu(x)=-(1+\\mu)x+9x^3$ at $\\mu=1/9$, compute the two-cycle and its multiplier.

<details>
<summary>Hint 1</summary>

Solve $9x^2=\\mu$.

</details>

<details>
<summary>Hint 2</summary>

Evaluate $(-1+2\\mu)^2$.

</details>

<details>
<summary>Solution</summary>

The cycle is $\\{-1/9,1/9\\}$. Each point maps to its negative. Each derivative is $-7/9$, so the two-step multiplier is $49/81<1$ and the cycle is locally attracting. Zero has derivative $-10/9$, so it is locally repelling.

</details>

### Exercise 3: Subcritical branch
<a id="period-doubling-sharkovskii-feigenbaum-ex-3"></a>

Let the cubic coefficient in the flip model be negative. Show the small two-cycle on $\\mu<0$ is repelling.

<details>
<summary>Hint 1</summary>

The squared amplitude is $\\mu/a$.

</details>

<details>
<summary>Hint 2</summary>

The cycle derivative formula does not depend on the sign of $a$.

</details>

<details>
<summary>Solution</summary>

When $a<0$ and $\\mu<0$, $\\mu/a>0$ gives distinct real opposite points. Their one-step derivative is $-1+2\\mu<-1$, so the multiplier exceeds one in magnitude. The cycle is repelling, even though zero remains attracting for $-2<\\mu<0$.

</details>

### Exercise 4: Superstable fixed point
<a id="period-doubling-sharkovskii-feigenbaum-ex-4"></a>

Find the logistic parameter for which the nonzero fixed point coincides with the critical point. Verify its multiplier.

<details>
<summary>Hint 1</summary>

Set $1-1/r=1/2$.

</details>

<details>
<summary>Hint 2</summary>

Use $2-r$ for the multiplier.

</details>

<details>
<summary>Solution</summary>

The equation gives $r=2$. At this parameter $1/2$ is fixed and its derivative is zero. It is therefore a superstable fixed orbit, rather than a least-period-two orbit. This is why the factor $r-2$ must be removed in the critical two-cycle equation.

</details>

### Exercise 5: Period divisibility
<a id="period-doubling-sharkovskii-feigenbaum-ex-5"></a>

If $f^n(x)=x$, prove that the least period of $x$ divides $n$.

<details>
<summary>Hint 1</summary>

Divide $n$ by the least period $p$.

</details>

<details>
<summary>Hint 2</summary>

Use the remainder to produce a smaller return if it is nonzero.

</details>

<details>
<summary>Solution</summary>

Write $n=qp+s$ with $0\\le s<p$. Since $f^{qp}(x)=x$, the equality $f^n(x)=x$ implies $f^s(x)=x$. Minimality of $p$ forces $s=0$. Thus $p$ divides $n$. An iterate equation by itself does not identify the least period.

</details>

### Exercise 6: A forcing consequence
<a id="period-doubling-sharkovskii-feigenbaum-ex-6"></a>

A continuous compact-interval map has a least-period-ten point. Which of $3,5,6,8,12$ are forced by Sharkovskii's theorem?

<details>
<summary>Hint 1</summary>

Ten lies in the block twice the odd numbers.

</details>

<details>
<summary>Hint 2</summary>

Read to its right, including later blocks and powers of two.

</details>

<details>
<summary>Solution</summary>

The order begins $3,5,7,\\ldots;6,10,14,\\ldots;12,20,\\ldots$ and ends with powers of two. Thus twelve and eight are forced. Three and five lie earlier, and six precedes ten in its block, so this theorem does not force them from period ten alone.

</details>

### Exercise 7: Primitive itinerary
<a id="period-doubling-sharkovskii-feigenbaum-ex-7"></a>

Explain why the repeating word $0001$ has least symbolic period four, while $0101$ does not.

<details>
<summary>Hint 1</summary>

Inspect the positions of the symbol one.

</details>

<details>
<summary>Hint 2</summary>

A shorter period repeats the same block multiple times.

</details>

<details>
<summary>Solution</summary>

The first repeated word has exactly one occurrence of one per four positions; a smaller period dividing four would repeat that occurrence more than once. Its least period is four. The second word is the repetition of $01$, so its least period is two. Primitive itineraries are needed to infer a desired least period from disjoint coding intervals.

</details>

### Exercise 8: Affine parameter change
<a id="period-doubling-sharkovskii-feigenbaum-ex-8"></a>

Prove finite gap ratios are invariant under $s=ar+b$, $a\\ne0$.

<details>
<summary>Hint 1</summary>

Subtract two transformed parameters.

</details>

<details>
<summary>Hint 2</summary>

The common factor cancels.

</details>

<details>
<summary>Solution</summary>

Each gap becomes $s_j-s_{j-1}=a(r_j-r_{j-1})$. Both numerator and denominator of the ratio are multiplied by $a$, so their quotient is unchanged. If the order is reversed when $a<0$, keep the original sequence indexing consistent.

</details>

### Exercise 9: Ratio uncertainty
<a id="period-doubling-sharkovskii-feigenbaum-ex-9"></a>

Suppose a numerator gap is $A>0$ and denominator gap $B>0$, with errors at most $\\epsilon_A,\\epsilon_B$ and $\\epsilon_B<B$. Bound the positive ratio when $A>\\epsilon_A$.

<details>
<summary>Hint 1</summary>

Use interval arithmetic for positive quantities.

</details>

<details>
<summary>Hint 2</summary>

The smallest ratio uses the smallest numerator and largest denominator.

</details>

<details>
<summary>Solution</summary>

The ratio lies between $(A-\\epsilon_A)/(B+\\epsilon_B)$ and $(A+\\epsilon_A)/(B-\\epsilon_B)$. As denominator uncertainty approaches $B$, the upper bound becomes uninformative. Many printed digits in the thresholds do not help unless their certified errors are small relative to the gaps.

</details>

### Exercise 10: Repair a diagram claim
<a id="period-doubling-sharkovskii-feigenbaum-ex-10"></a>

Repair: 'The diagram shows eight branches, so Sharkovskii proves chaos for every initial point and the next ratio is exactly the Feigenbaum constant.'

<details>
<summary>Hint 1</summary>

Separate a finite observation, a period-forcing theorem and an asymptotic law.

</details>

<details>
<summary>Hint 2</summary>

Neither theorem gives the claimed universal statement about initial points.

</details>

<details>
<summary>Solution</summary>

A finite picture suggests a period-eight regime but does not certify least period. A proved period-eight orbit forces periods four, two and one by Sharkovskii, not all periods and not chaos for every state. Feigenbaum scaling is an asymptotic theorem for a qualified cascade; a finite observed ratio is neither exact nor automatically covered.

</details>

## Sources

Original exposition, exact-model proofs and worked calculations. The unchanged [logistic-map laboratory](../../visual-labs/logistic-map-live.md) provides exploration, not certification.

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), benchmark and further reading.
- Bau-Sen Du, [An Interesting Application of the Intermediate Value Theorem: A Simple Proof of Sharkovsky's Theorem](https://arxiv.org/abs/1507.04879), cited proof of the full period-ordering theorem.
- Mitchell J. Feigenbaum, [Quantitative Universality for a Class of Nonlinear Transformations](https://link.springer.com/article/10.1007/BF01020332), original scaling and renormalization work.
- Oscar E. Lanford III, “A Computer-assisted Proof of the Feigenbaum Conjectures,” Bulletin of the AMS 6 (1982); [author's collected papers](https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordCollectedWork.pdf), cited renormalization proof.
- Mikhail Lyubich, [Feigenbaum–Coullet–Tresser Universality and Milnor's Hairiness Conjecture](https://arxiv.org/abs/math/9903201), cited deeper hyperbolicity and universality theory.

The general flip normal-form reduction, full Sharkovskii theorem and Feigenbaum universality are external results. The elementary covering argument and exact cubic-family analysis above do not claim to replace their proofs.

## Summary

A local multiplier crossing, global period forcing and asymptotic scaling answer different questions. We proved an exact flip model, the first superstable logistic two-cycle and a disjoint-interval criterion forcing every period. Sharkovskii and universality were identified as cited deeper theorems with qualified domains. The [chaos chapter](chaos-lyapunov-exponents-horseshoe.md) now supplies precise invariant-space meanings for chaotic behaviour.
`;export{e as default};