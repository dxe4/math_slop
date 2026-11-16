var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: urysohn-tietze-extension
title: "Urysohn, Tietze, and Extension of Functions"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Urysohn, Tietze, and Extension of Functions

Separating two closed sets by open neighborhoods is a geometric operation. Separating them by the values zero and one of a continuous function is more flexible: the function can be added to others, multiplied by a local formula, or used as a coordinate in an embedding. Urysohn's lemma supplies this numerical separation. Tietze's theorem then asks a stronger question. If continuous numerical data have already been specified on a closed subset, can one fill in the rest of the space without changing any of those values?

The preparation is [separation and shrinking](separation-axioms-and-closed-set-control.md), continuity into the usual real line, and elementary uniform convergence of real-valued functions. We prove the particular uniform-limit fact we use, so no function-space theory is assumed. Our convention is that **normal** means disjoint closed sets have disjoint open neighborhoods; it does not include the $T_1$ axiom. Neither main construction needs $T_1$. When points themselves must be treated as closed sets, that extra assumption will be named.

## Definitions and the shrinking mechanism

**Definition 11.1 — Functional separation.** Disjoint subsets $A,B$ of a topological space $X$ are functionally separated if there is a continuous $u:X\\to[0,1]$ with $u=0$ on $A$ and $u=1$ on $B$. Such a function does more than provide one pair of disjoint neighborhoods: its intermediate levels give a whole ordered family of neighborhoods.

**Definition 11.2 — Extension.** For $A\\subseteq X$ and continuous $f:A\\to\\mathbb R$, an extension is a continuous $F:X\\to\\mathbb R$ satisfying $F|_A=f$. Continuity on $A$ always means its subspace topology. Extending a function preserves its values exactly; approximation alone is a different problem.

**Lemma 11.3 — Closed-set shrinking.** If $X$ is normal, $C$ is closed, and $C\\subseteq U$ with $U$ open, there is open $V$ such that

$$C\\subseteq V\\subseteq\\operatorname{cl}V\\subseteq U.$$

**Proof.** The closed sets $C$ and $X\\setminus U$ are disjoint. Choose disjoint open neighborhoods $V,W$ of them. Because $W$ is open and disjoint from $V$, it also misses $\\operatorname{cl}V$. Hence $\\operatorname{cl}V\\subseteq X\\setminus W\\subseteq U$. This works when one of the closed sets is empty as well. $\\square$

The closure in the middle is essential. The inclusion $C\\subseteq V\\subseteq U$ without it would follow merely by taking $V=U$, so it would express no separation power. A buffer between a smaller neighborhood's closure and the outside of a larger neighborhood is the ingredient that turns an ordered list of open sets into a continuous real-valued function.

## Urysohn's lemma with the continuity calculation

**Theorem 11.4 — Urysohn separation.** In a normal space, any two disjoint closed subsets $A,B$ can be functionally separated.

**Proof.** Let $D$ be the dyadic rationals in $[0,1]$. Put $U_1=X\\setminus B$. Use Lemma 11.3 to choose open $U_0$ with $A\\subseteq U_0\\subseteq\\operatorname{cl}U_0\\subseteq U_1$. Whenever the sets at two adjacent dyadics $r<s$ of one finite dyadic subdivision have been assigned, apply shrinking to the closed set $\\operatorname{cl}U_r$ inside $U_s$ to assign the midpoint set with

$$\\operatorname{cl}U_r\\subseteq U_{(r+s)/2}
 \\subseteq\\operatorname{cl}U_{(r+s)/2}\\subseteq U_s.$$

Proceed through all finite subdivisions. The resulting open sets satisfy $\\operatorname{cl}U_r\\subseteq U_s$ for every dyadic $r<s$: put both indices in a sufficiently fine common subdivision and chain the adjacent inclusions. Define

$$u(x)=\\inf\\bigl(\\{r\\in D:x\\in U_r\\}\\cup\\{1\\}\\bigr).$$

The added value one guarantees a nonempty set bounded below, even for points belonging to none of the $U_r$. Points of $A$ lie in $U_0$ and have value zero. Points of $B$ lie outside $U_1$ and therefore outside every smaller $U_r$, so their value is one.

To prove continuity, we calculate inverse images of rays. For $0<t\\le1$,

$$\\{u<t\\}=\\bigcup_{r\\in D,\\ r<t}U_r.$$

Membership on the right forces the infimum below $t$. Conversely an infimum below $t$ means some member of the defining set is below $t$; that member cannot be the artificially added one. For $0\\le t<1$,

$$\\{u>t\\}=\\bigcup_{r\\in D,\\ t<r<1}(X\\setminus\\operatorname{cl}U_r).$$

If $x\\notin\\operatorname{cl}U_r$, it is in no $U_s$ with $s\\le r$, so $u(x)\\ge r>t$. Conversely if $u(x)>t$, choose dyadics $t<r<q<u(x)$. Then $x\\notin U_q$, while $\\operatorname{cl}U_r\\subseteq U_q$, so $x\\notin\\operatorname{cl}U_r$. Both inverse images are therefore open. For thresholds outside the indicated ranges, the inverse images are empty or all of $X$. Open rays form a subbasis of the usual real topology, so $u$ is continuous. $\\square$

The proof uses a countable sequence of shrinking choices. Under the usual axiom of choice convention of the book these choices are permitted. The dyadic indexing is not an unproved assumption that open sets have countable local bases: there may be no countable local base anywhere in $X$. We are choosing a countable family of sets to construct one particular function, rather than describing all neighborhoods of every point.

**Corollary 11.5 — Functional separation characterizes normality.** A space is normal if every disjoint closed pair admits the preceding function.

**Proof.** The inverse images $u^{-1}([0,1/3))$ and $u^{-1}((2/3,1])$ are disjoint open subsets of $X$ containing $A$ and $B$. The displayed intervals are open relative to $[0,1]$, which is the codomain. $\\square$

### Worked example 1 — Separation without a positive distance gap

In a metric space, suppose $A,B$ are nonempty, disjoint, closed sets. The function $d(x,A)=\\inf_{a\\in A}d(x,a)$ is continuous: the triangle inequality gives $d(x,A)\\le d(x,y)+d(y,A)$ and the reversed inequality gives $|d(x,A)-d(y,A)|\\le d(x,y)$. Closedness gives $d(x,A)=0$ exactly on $A$. Consequently

$$u(x)=\\frac{d(x,A)}{d(x,A)+d(x,B)}$$

has positive denominator at every point and separates the sets continuously. There need not be a positive lower bound for that denominator over all of $X$. For example, in the plane the closed sets $A=\\{(t,0):t\\ge1\\}$ and $B=\\{(t,1/t):t\\ge1\\}$ have distances between corresponding points tending to zero. They still have the continuous separator just constructed. Urysohn's abstract proof supplies the same existence conclusion without assuming that any metric or distance function is available.

## From one approximation step to an exact extension

**Lemma 11.6 — One bounded correction.** Let $A$ be closed in normal $X$, let $M>0$, and let $f:A\\to[-M,M]$ be continuous. There is continuous $h:X\\to[-M/3,M/3]$ satisfying $|f-h|\\le2M/3$ on $A$.

**Proof.** The sets $A_- =\\{a\\in A:f(a)\\le-M/3\\}$ and $A_+=\\{a\\in A:f(a)\\ge M/3\\}$ are disjoint and closed in $A$. Because $A$ is closed in $X$, they are closed in $X$ as well. Apply Urysohn's lemma to obtain $u$ equal to zero on $A_-$ and one on $A_+$. Set $h=(M/3)(2u-1)$. Its absolute value is at most $M/3$. On $A_-$ its value is $-M/3$, so the error is at most $2M/3$; on $A_+$ its value is $M/3$, with the same bound. At remaining points $|f|<M/3$ and $|h|\\le M/3$, so the error is again at most $2M/3$. These cases exhaust $A$. $\\square$

This correction does not match $f$ exactly, even at most points of $A$. What matters is that it removes a fixed fraction of the possible error while remaining uniformly small everywhere on $X$. Repeating this operation on the residual creates a series with a summable global bound. Exact agreement appears only after taking its limit.

**Lemma 11.7 — Uniform limits remain continuous.** If continuous real-valued functions $H_n$ on any topological space converge uniformly to $H$, then $H$ is continuous.

**Proof.** Fix $x$ and $\\varepsilon>0$. Choose $n$ with $|H-H_n|<\\varepsilon/3$ everywhere. By continuity of $H_n$, some neighborhood $V$ of $x$ satisfies $|H_n(y)-H_n(x)|<\\varepsilon/3$ for $y\\in V$. The triangle inequality gives $|H(y)-H(x)|<\\varepsilon$ there. This is the neighborhood criterion for continuity into the real line. No metric on the domain was used. $\\square$

**Theorem 11.8 — Bounded Tietze extension.** If $A$ is closed in a normal space $X$ and $f:A\\to[-M,M]$ is continuous, then there is continuous $F:X\\to[-M,M]$ extending $f$.

**Proof.** If $M=0$, take the zero function; if $A$ is empty, that same function works. Otherwise put $M_n=M(2/3)^n$. Apply Lemma 11.6 to $f$ to obtain $h_0$, then to $f-h_0$ to obtain $h_1$, and continue. At stage $n$, the residual has absolute value at most $M_n$ on $A$, so we obtain continuous $h_n$ with $|h_n|\\le M_n/3$ everywhere and new residual bounded by $M_{n+1}$ on $A$.

The series $F=\\sum_{n\\ge0}h_n$ converges uniformly, because for every $N$ its tail is bounded everywhere by

$$\\sum_{n=N}^{\\infty}\\frac{M}{3}(2/3)^n=M(2/3)^N.$$

Real completeness gives a pointwise sum and this estimate gives uniform convergence. Its partial sums are continuous, so Lemma 11.7 makes $F$ continuous. The full geometric bound gives $|F|\\le M$. On $A$, the difference between $f$ and the partial sum through $h_n$ is at most $M_{n+1}$, which tends to zero. Thus $F=f$ on $A$. $\\square$

The theorem also preserves an arbitrary finite closed interval $[a,b]$. For $a<b$, first apply it to the affine rescaling $(2f-a-b)/(b-a)$ into $[-1,1]$ and then reverse the rescaling; for $a=b$, take the constant extension. An extension is usually not unique. Values on a closed subset can leave large open regions on which many continuous choices remain available.

### Worked example 2 — Explicit extension of separated closed pieces

On the closed subset $A=(-\\infty,0]\\cup[1,\\infty)$ of the line, prescribe $f=0$ on the left piece and $f=1$ on the right piece. This function is continuous on $A$: its two pieces are clopen relative to $A$. An explicit extension is zero for $x\\le0$, equal to $x$ for $0\\le x\\le1$, and one for $x\\ge1$. Finite closed pasting proves its continuity, including agreement at zero and one. It stays inside $[0,1]$, as bounded Tietze predicts. Replacing the middle formula by $x^2$ on $[0,1]$ gives another valid extension, proving nonuniqueness concretely.

## Extending functions that have no global bound

**Theorem 11.9 — Real-valued Tietze extension.** Every continuous $f:A\\to\\mathbb R$ on a closed subset of a normal space extends continuously to $X$.

**Proof.** The empty-subset case is immediate. Compress the values by $c(t)=t/(1+|t|)$, a homeomorphism from $\\mathbb R$ onto $(-1,1)$ with inverse $c^{-1}(s)=s/(1-|s|)$. Bounded Tietze extends $g=c\\circ f$ to a continuous $G:X\\to[-1,1]$. We cannot immediately apply $c^{-1}$, because $G$ may attain either endpoint off $A$.

The set $B=G^{-1}(\\{-1,1\\})$ is closed and misses $A$, since $g$ takes strictly interior values. Urysohn supplies continuous $v:X\\to[0,1]$ with $v=0$ on $A$ and $v=1$ on $B$. Put $G'=(1-v)G$. On $A$ this still equals $g$. On $B$ it is zero; outside $B$, $|G|<1$, so $|G'|\\le|G|<1$. Thus $G'$ takes values strictly inside $(-1,1)$ everywhere. The formula $F=G'/(1-|G'|)$ is therefore well-defined and continuous, and equals $f$ on $A$. $\\square$

The endpoint repair is a necessary logical step. A bounded extension into a closed interval is not automatically an extension into its interior. The additional separator makes the extension avoid precisely the forbidden endpoint set before the inverse change of variables is applied.

**Proposition 11.10 — Extension detects normality.** If every continuous real-valued function on every closed subset extends, the space is normal.

**Proof.** For disjoint closed sets $C,D$, their union $A$ is closed. The function equal to zero on $C$ and one on $D$ is continuous on $A$, because both pieces are clopen in $A$. An extension separates them using inverse images of disjoint open intervals around zero and one. Hence the normal axiom holds. $\\square$

### Worked example 3 — Why the closed-subset hypothesis matters

Take $A=(0,1)\\subseteq\\mathbb R$ and $f(x)=1/x$. It is continuous on its domain, but a continuous extension to the line would have a finite value at zero. Continuity there would bound its values on some interval around zero, contradicting $1/x\\to\\infty$ as $x\\downarrow0$. Boundedness does not repair the missing closedness: $\\sin(1/x)$ is bounded on the same domain, yet the sequences $x_n=1/(\\pi/2+2\\pi n)$ and $y_n=1/(3\\pi/2+2\\pi n)$ both tend to zero while the function values are respectively one and minus one. Any continuous extension would have to assign both limits to zero, impossible in the Hausdorff real line.

There is also a codomain restriction. Tietze extends real-valued functions, not maps into arbitrary spaces. The identity map from the closed subset $\\{-1,1\\}$ of the line to the discrete space $\\{-1,1\\}$ has no continuous extension over the connected line: such an extension would be a nonconstant continuous map to a discrete space. The same data extend as a real-valued function, for instance by $F(x)=x$. An interval has room for the intermediate values required by continuity; a discrete two-point target does not.

## Exercises

<a id="urysohn-tietze-extension-ex-1"></a>
### Exercise 11.1
Prove that functional separation of every disjoint closed pair implies normality, without assuming $T_1$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Use two disjoint relatively open intervals in the function's target.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Choose one interval containing zero and the other containing one.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

For a separator $u:X\\to[0,1]$, take $U=u^{-1}([0,1/3))$ and $V=u^{-1}((2/3,1])$. The target intervals are open in $[0,1]$, so the preimages are open. They are disjoint because their target intervals are disjoint, and contain the respective closed sets by the prescribed values. This is exactly normality. No singleton in $X$ was required to be closed, so $T_1$ was not used.

</details>

<a id="urysohn-tietze-extension-ex-2"></a>
### Exercise 11.2
For disjoint nonempty closed subsets $A,B$ of a metric space, prove the distance separator formula is continuous even when the distance between the two sets is zero.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Distinguish a pointwise positive denominator from a uniform positive lower bound.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Prove the distance-to-set functions are 1-Lipschitz and use closedness at any zero.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

The triangle inequality and its reversal give $|d(x,A)-d(y,A)|\\le d(x,y)$, and similarly for $B$. Both distances are continuous. If their sum vanished at $x$, both would be zero, forcing $x\\in A\\cap B$ by closedness, a contradiction. The quotient $d(x,A)/(d(x,A)+d(x,B))$ is consequently continuous at each point and has the required values. This argument never takes an infimum of the denominator over the whole space, so a zero distance between the sets presents no obstruction.

</details>

<a id="urysohn-tietze-extension-ex-3"></a>
### Exercise 11.3
In the dyadic construction, prove the identity for $\\{u>t\\}$ when $0\\le t<1$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Outside $\\operatorname{cl}U_r$, no smaller-index open set can contain the point.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

For the converse choose two dyadics strictly between $t$ and $u(x)$.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

If $t<r<1$ and $x\\notin\\operatorname{cl}U_r$, nesting implies $x\\notin U_s$ for every $s\\le r$. All members of the set whose infimum defines $u(x)$ are therefore at least $r$, so $u(x)\\ge r>t$. Conversely, if $u(x)>t$, choose $t<r<q<u(x)$ dyadic. The inequality $q<u(x)$ forces $x\\notin U_q$. Since $\\operatorname{cl}U_r\\subseteq U_q$, the point lies outside $\\operatorname{cl}U_r$. This proves both inclusions in the displayed union formula, whose terms are open.

</details>

<a id="urysohn-tietze-extension-ex-4"></a>
### Exercise 11.4
Derive interval-preserving extension for a continuous $f:A\\to[a,b]$, including the case $a=b$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

An affine function carries a nondegenerate closed interval onto $[-1,1]$.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Extend the rescaled data, then undo the same affine map.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

If $a=b$, the constant function with that value extends the data. For $a<b$, define $g=(2f-a-b)/(b-a)$. It is continuous into $[-1,1]$. Bounded Tietze gives a continuous extension $G$ with that range. Then $F=((b-a)G+a+b)/2$ is continuous, takes values in $[a,b]$, and restricts to $f$. The argument assumes throughout that $A$ is closed and $X$ normal; the affine change does not replace those hypotheses.

</details>

<a id="urysohn-tietze-extension-ex-5"></a>
### Exercise 11.5
Give two different continuous extensions of the function on $\\{0,1\\}$ taking values zero and one, each with range in $[0,1]$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Join the endpoint values on $[0,1]$ and use constant tails.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Use two different continuous increasing formulas on the middle interval.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

Define $F$ to be zero on $(-\\infty,0]$, $x$ on $[0,1]$, and one on $[1,\\infty)$. Define $G$ using the same tails and $x^2$ on $[0,1]$. The formulas agree at overlaps, so finite closed pasting makes both functions continuous. Both take values in $[0,1]$ and have the prescribed endpoint values, but $F(1/2)=1/2$ while $G(1/2)=1/4$. Existence of an extension therefore does not imply uniqueness.

</details>

<a id="urysohn-tietze-extension-ex-6"></a>
### Exercise 11.6
Show that the correction series in bounded Tietze has tail at most $M(2/3)^N$ after the first $N$ terms, and explain why convergence is uniform.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Use the global bound on each correction, not merely its bound on $A$.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Sum a geometric series beginning at index $N$.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

For every $x$, $\\sum_{n=N}^{\\infty}|h_n(x)|\\le\\sum_{n=N}^{\\infty}(M/3)(2/3)^n=M(2/3)^N$. The same upper bound works at every point of $X$ and tends to zero. Thus partial sums are uniformly Cauchy, their real-valued sums exist by real completeness, and the tail estimate gives uniform convergence to that sum. A bound only on $A$ would prove uniform convergence there but would not justify continuity of a sum defined on all of $X$.

</details>

<a id="urysohn-tietze-extension-ex-7"></a>
### Exercise 11.7
Give a bounded continuous function on a nonclosed subset of the line that has no continuous real-valued extension over the line.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Use oscillation approaching a missing endpoint.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Choose two sequences approaching that endpoint with two different constant function values.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

Take $A=(0,1)$ and $f(x)=\\sin(1/x)$. For sufficiently large $n$, the points $x_n=1/(\\pi/2+2\\pi n)$ and $y_n=1/(3\\pi/2+2\\pi n)$ belong to $A$ and tend to zero. Their values are one and minus one. Continuity of an extension at zero would force both value sequences to converge to its value at zero, which is impossible. The function is bounded and continuous on $A$; the failed Tietze hypothesis is closedness of $A$.

</details>

<a id="urysohn-tietze-extension-ex-8"></a>
### Exercise 11.8
Explain why, in the unbounded-extension proof, $G'=(1-v)G$ always lies in $(-1,1)$ and still agrees with $g$ on $A$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Separate points where $|G|=1$ from all other points.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

Use the prescribed values of $v$ on $A$ and on the forbidden endpoint set.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

On $A$, the separator satisfies $v=0$, so $G'=G=g$. On $B=G^{-1}(\\{-1,1\\})$, it satisfies $v=1$, so $G'=0$. Outside $B$, $|G|<1$ and $0\\le1-v\\le1$, whence $|G'|\\le|G|<1$. Thus the inverse compression formula has positive denominator everywhere. Bounded extension alone would give only $|G|\\le1$, so this extra operation is needed before applying that inverse.

</details>

<a id="urysohn-tietze-extension-ex-9"></a>
### Exercise 11.9
Show that real-valued extension does not imply extension into every codomain, using a discrete two-point target.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Use a connected ambient domain and prescribe both target values on a closed subset.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

A continuous image of a connected space is connected.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

Let $A=\\{-1,1\\}\\subseteq\\mathbb R$ and let $f:A\\to\\{-1,1\\}$ be the identity, with discrete target. This is continuous on the discrete finite subspace $A$. A continuous extension from the line would have image containing both target points. That image is disconnected, contradicting connectedness of the line and preservation of connectedness by continuous maps. When the target is instead the real line, $F(x)=x$ extends the same prescribed numerical data. The target topology and allowed intermediate values change the question.

</details>

<a id="urysohn-tietze-extension-ex-10"></a>
### Exercise 11.10
Let $A$ be closed in normal $X$. Prove that any continuous map $f:A\\to\\mathbb R^n$, for finite positive $n$, extends continuously to $X$. State why this does not guarantee an extension into an arbitrary subset of $\\mathbb R^n$ containing $f(A)$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>

Extend each real coordinate separately.

</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>

The product topology controls continuity but imposes no new restriction on the range of the tuple.

</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>

Write $f=(f_1,\\ldots,f_n)$. Each coordinate is continuous, so real-valued Tietze gives an extension $F_j:X\\to\\mathbb R$. The tuple $F=(F_1,\\ldots,F_n)$ is continuous by the product universal property and agrees with $f$ on $A$. Its values outside $A$ need not belong to a prescribed subset of $\\mathbb R^n$. For example, in dimension one the data taking both values on $\\{-1,1\\}$ extend over the line into $\\mathbb R$, but not into the two-point subset, by the preceding connectedness argument. Coordinate extension is therefore an ambient vector-valued theorem, not an arbitrary range-preserving theorem.

</details>

## Sources and provenance

This chapter's exposition, proofs, worked examples, and exercises are original Euler prose under CC BY-SA 4.0. A primary university reference for the standard Urysohn–Tietze progression is James Munkres's [MIT 18.901 lecture notes](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/), particularly the listed weeks on Urysohn separation and Tietze extension. The separately licensed course [Notes G](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/resources/notes_g/) provide supplementary reading. These links identify the mathematical source tradition; no course text is reproduced here.

## Summary

Normal shrinking creates dyadically nested neighborhoods, whose level infimum gives a continuous separator of two closed sets. Small separators then correct a bounded function on a closed subset with geometrically decreasing error; uniform convergence turns the resulting approximation series into an exact continuous extension. Compression and endpoint repair handle unbounded real functions. Closedness of the subset, normality of the domain, and the real codomain each have a distinct role. The next chapters use these continuous numerical coordinates in countability and metrization arguments, and later in partitions of unity.
`;export{e as default};