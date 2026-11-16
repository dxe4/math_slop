var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: arzela-ascoli-stone-weierstrass
title: "Arzela-Ascoli and Stone-Weierstrass"
level: advanced-undergraduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Arzela-Ascoli and Stone-Weierstrass

Two major function-space theorems answer different questions. Arzela-Ascoli asks when a family of continuous functions has compact closure in the uniform topology. Stone-Weierstrass asks when an algebra of functions is dense in that topology. Compactness produces convergent subsequences; density produces approximations to arbitrary target functions. Neither conclusion should be substituted for the other.

We prove a full compact-metric-domain form of Arzela-Ascoli for metric-valued functions, allowing the target metric space to be incomplete. The correct hypothesis is compact closure of each pointwise value set, not merely boundedness. We then prove the real Stone-Weierstrass theorem on a compact Hausdorff domain. The lattice step, including the polynomial approximation to absolute value that it needs, is established explicitly.

Review the distinctions between pointwise, compact-open, and uniform topologies in [Function Spaces and Compact-Open Topology](function-spaces-and-compact-open-topology.md). That chapter also supplies the compact-Hausdorff-domain version of Arzela-Ascoli through product compactness. Here the metric-domain proof uses finite nets and a diagonal subsequence instead.

## 1. Uniform compactness and equicontinuity

Let $(X,d_X)$ be compact metric and $(Y,d_Y)$ metric. Unless stated otherwise, $X$ is nonempty. Give $C(X,Y)$ the metric
$D(f,g)=\\sup_{x\\in X}d_Y(f(x),g(x)).$
This is finite: the displayed distance is a continuous real function of $x$, hence bounded on compact $X$. Its topology is uniform convergence. A family is relatively compact if its closure in this metric space is compact.

**Definition 17.1.** A family $\\mathcal F\\subseteq C(X,Y)$ is equicontinuous if for every $x\\in X$ and $\\varepsilon>0$ there is a neighborhood $U$ of $x$ such that
$d_Y(f(y),f(x))<\\varepsilon$
for every $y\\in U$ and every $f\\in\\mathcal F$. It is pointwise relatively compact if for every $x$ the closure
$K_x=\\overline{\\{f(x):f\\in\\mathcal F\\}}^{\\,Y}$
is compact in $Y$.

The order of quantifiers is the essential content of equicontinuity. The neighborhood may depend on $x$ and $\\varepsilon$, but not on the member $f$. Individual continuity permits dependence on $f$ and is insufficient.

**Lemma 17.2 (uniform equicontinuity on a compact domain).** If $\\mathcal F$ is equicontinuous, then for each $\\varepsilon>0$ there is $\\delta>0$ such that
$d_X(y,z)<\\delta\\quad\\Longrightarrow\\quad
d_Y(f(y),f(z))<\\varepsilon\\quad(f\\in\\mathcal F).$

**Proof.** At each $x$ choose $r_x>0$ so that $d_X(x,y)<2r_x$ implies $d_Y(f(x),f(y))<\\varepsilon/2$ for every $f$. The balls $B(x,r_x)$ cover $X$, so choose finitely many centers $x_1,\\ldots,x_m$. Put $\\delta=\\min_i r_{x_i}>0$. Given $d_X(y,z)<\\delta$, choose $i$ with $y\\in B(x_i,r_{x_i})$. Then $z\\in B(x_i,2r_{x_i})$, and both output distances to $f(x_i)$ are less than $\\varepsilon/2$. The triangle inequality proves the claim. $\\square$

**Lemma 17.3.** A compact metric space has a countable dense subset.

**Proof.** For every positive integer $n$, compactness supplies a finite $1/n$-net. Their union is countable. Every nonempty open ball contains one of these net points by choosing $n$ sufficiently large, so the union is dense. Finite spaces cause no difficulty; a finite dense set can be listed repeatedly when a sequence of its members is wanted. $\\square$

## 2. Arzela-Ascoli: necessity and sufficiency

**Theorem 17.4 (compact metric formulation).** Let $X$ be compact metric and $Y$ any metric space. A subset $\\mathcal F\\subseteq C(X,Y)$ has compact closure in the uniform metric if and only if it is equicontinuous and pointwise relatively compact.

**Proof of necessity.** Let $H=\\overline{\\mathcal F}$ be compact. Evaluation at any fixed $x$ is continuous, since $d_Y(f(x),g(x))\\le D(f,g)$. Its image $H(x)$ is compact and hence closed in metric $Y$. The closure $K_x$ of $\\mathcal F(x)$ is a closed subset of that compact image, so is compact.

Fix $x$ and $\\varepsilon>0$. Choose a finite uniform $\\varepsilon/3$-net $h_1,\\ldots,h_m$ for $H$. Continuity of each $h_i$ gives a common neighborhood $U$ of $x$ on which all $d_Y(h_i(y),h_i(x))<\\varepsilon/3$. For any $f\\in\\mathcal F$, choose $i$ with $D(f,h_i)<\\varepsilon/3$. The three-term triangle inequality gives $d_Y(f(y),f(x))<\\varepsilon$ for every $y\\in U$. This is equicontinuity.

**Proof of sufficiency.** Suppose the two stated hypotheses hold, and take an arbitrary sequence $(f_n)$ in $\\mathcal F$. List a countable dense subset as $a_1,a_2,\\ldots$. Compactness of $K_{a_1}$ gives a subsequence converging at $a_1$. From it extract one converging at $a_2$, and continue. The diagonal subsequence $(g_n)$ converges at every $a_j$: beyond its first $j$ terms it lies in the jth selected subsequence.

We claim $(g_n)$ is uniformly Cauchy. Given $\\varepsilon>0$, Lemma 17.2 gives $\\delta>0$ making all output oscillations less than $\\varepsilon/3$ on pairs at distance below $\\delta$. Choose a finite $\\delta$-net from the dense set, say $a_{j_1},\\ldots,a_{j_m}$, with open balls of radius $\\delta$. At these finitely many points the sequence is Cauchy, so choose $N$ such that
$d_Y(g_n(a_{j_i}),g_\\ell(a_{j_i}))<\\varepsilon/3$
for every $i$ and $n,\\ell\\ge N$. For arbitrary $x$, choose a net point within $\\delta$. Comparing $g_n(x)$ to $g_n(a_{j_i})$, then to $g_\\ell(a_{j_i})$, then to $g_\\ell(x)$ gives a distance less than $\\varepsilon$. This bound is uniform in $x$.

For each $x$, the values $g_n(x)$ lie in the compact metric set $K_x$, so their Cauchy sequence has a limit $g(x)\\in K_x\\subseteq Y$. This uses completeness of compact subsets, not completeness of all of $Y$. Passing to the limit in the uniform Cauchy estimate proves uniform convergence $g_n\\to g$. For example, start with an error bound $\\varepsilon/2$; the limiting distance is at most $\\varepsilon/2<\\varepsilon$.

The function $g$ is continuous. At $x$, choose one sufficiently uniformly close $g_n$ and use continuity of that fixed function; the triangle inequality bounds the output change by two uniform errors and one continuity error. Thus every sequence in $\\mathcal F$ has a uniformly convergent subsequence with continuous limit in $C(X,Y)$.

To conclude compactness of the closure, let $(h_n)$ be any sequence in $\\overline{\\mathcal F}$. Choose $f_n\\in\\mathcal F$ with $D(h_n,f_n)<1/n$. A uniformly convergent subsequence of $(f_n)$ gives a convergent subsequence of $(h_n)$ with the same limit, which lies in the closed set $\\overline{\\mathcal F}$. Hence the closure is sequentially compact. In metric spaces sequential compactness is equivalent to compactness, as proved through finite nets in [Uniform Spaces, Completion and Total Boundedness](uniform-spaces-completion-and-total-boundedness.md). This proves sufficiency. If the family is empty, its closure is compact without selections; if $X$ is empty, the function space has one member and the theorem is immediate. $\\square$

The finite-net content can also be read directly. Fix an error tolerance, take finitely many domain net points, and choose finite nets in their compact value closures. Assign each function a finite list recording nearby value-net centers. There are only finitely many lists. Functions sharing one list are uniformly close by two equicontinuity comparisons and the value comparisons. Selecting one representative from each nonempty list gives a finite uniform net for the family. This establishes total boundedness. The pointwise compact closures supply the missing limits needed to make its uniform closure complete. Thus the diagonal proof agrees with the complete-plus-totally-bounded mechanism for metric compactness.

## 3. Worked examples for compactness

### Worked example 1 — A Lipschitz family is compact

Let $\\mathcal L$ consist of real functions on $[0,1]$ satisfying $|f(x)|\\le2$ and $|f(x)-f(y)|\\le3|x-y|$. The common Lipschitz bound proves equicontinuity, and every pointwise value closure is a closed subset of $[-2,2]$, hence compact. The theorem gives relative compactness.

In fact $\\mathcal L$ is closed under uniform limits. Passing to the limit in each displayed inequality preserves both bounds. Therefore the uniform closure equals $\\mathcal L$, making the family compact itself. Both the bound and the common oscillation control matter: bounded continuous functions with increasingly narrow spikes are not generally equicontinuous.

### Worked example 2 — Boundedness of values is insufficient

In $Y=\\ell^2$, let $e_n$ be the standard orthonormal unit vectors, and on $X=[0,1]$ let $f_n$ be the constant function with value $e_n$. These functions are equicontinuous with zero oscillation. Their values are uniformly bounded by one in norm.

Nevertheless $D(f_n,f_m)=\\|e_n-e_m\\|=\\sqrt2$ for unequal indices. There is no Cauchy subsequence and no compact closure. The pointwise value sets are bounded but not relatively compact. In a finite-dimensional real target, closed bounded sets are compact; this finite-dimensional theorem cannot be silently transferred to a general metric target.

### Worked example 3 — Pointwise limits need not remain continuous

The functions $f_n(x)=x^n$ on $[0,1]$ take values in $[0,1]$, so pointwise relative compactness holds. Their pointwise limit equals zero below one and one at one, which is discontinuous. Equicontinuity fails at one: choose any nearby $x<1$, then a sufficiently large power makes $x^n<1/2$ while $f_n(1)=1$.

Every subsequence has that same pointwise limit. A uniformly convergent subsequence would have a continuous limit, which is impossible. The example shows why pointwise relative compactness alone does not provide compactness in the uniform topology.

## 4. Preparing the lattice argument

For the approximation theorem, $C(X,\\mathbb R)$ carries the norm $\\|f\\|_\\infty=\\sup_X|f|$. A real subalgebra is closed under addition, real scalar multiplication, and pointwise multiplication. It is unital if it contains the constant function one, and hence all real constants. It separates points if for distinct $x,y$ some member has different values at those points.

We need absolute values in a uniform closure. Rather than import polynomial approximation as an unproved prerequisite, we construct exactly the approximation required.

**Lemma 17.5 (Dini's monotone convergence lemma).** If continuous real functions $u_n$ on compact $X$ increase pointwise to a continuous function $u$, then convergence is uniform.

**Proof.** For $\\varepsilon>0$, the sets $V_n=\\{x:u(x)-u_n(x)<\\varepsilon\\}$ are increasing open sets and cover $X$. A finite subcover exists, and its largest index $N$ already covers $X$. Thus $0\\le u-u_n<\\varepsilon$ everywhere for $n\\ge N$. $\\square$

**Lemma 17.6 (polynomial approximation of absolute value).** There are real polynomials converging uniformly to $|t|$ on $[-1,1]$.

**Proof.** Define $p_0(t)=0$ and
$p_{n+1}(t)=p_n(t)+\\frac{t^2-p_n(t)^2}{2}.$
These are polynomials. For fixed $t$, write $s=|t|\\le1$. If $0\\le p_n(t)\\le s$, then the increment is nonnegative and
$s-p_{n+1}(t)=(s-p_n(t))\\left(1-\\frac{s+p_n(t)}2\\right)\\ge0.$
Induction gives $0\\le p_n(t)\\le s$ and monotonicity. Its limit $l$ exists. Taking limits in the recurrence gives $s^2-l^2=0$, hence $l=s$ because both are nonnegative. Dini's lemma on compact $[-1,1]$ upgrades this pointwise monotone convergence to uniform convergence. On $[-M,M]$ with $M>0$, use $M p_n(t/M)$. The zero-range case needs only the zero polynomial. $\\square$

**Lemma 17.7 (closed real algebras are lattices).** If $B$ is a uniformly closed unital real subalgebra of $C(X,\\mathbb R)$, then $f\\in B$ implies $|f|\\in B$, and $f,g\\in B$ imply $\\max(f,g),\\min(f,g)\\in B$.

**Proof.** Choose $M\\ge\\|f\\|_\\infty$ with $M>0$. The polynomials from Lemma 17.6, scaled to $[-M,M]$ and composed with $f$, lie in $B$ because it is unital and an algebra. They converge uniformly to $|f|$, which lies in $B$ by closedness. Now use
$\\max(f,g)=\\frac{f+g+|f-g|}{2},\\qquad
\\min(f,g)=\\frac{f+g-|f-g|}{2}.$
All terms belong to $B$. $\\square$

## 5. Stone-Weierstrass with the max-min proof

**Theorem 17.8 (real Stone-Weierstrass).** Let $X$ be compact Hausdorff and $A\\subseteq C(X,\\mathbb R)$ a unital real subalgebra separating points. Then $A$ is dense for the uniform norm.

**Proof.** Let $B$ be its uniform closure. This is a closed unital real algebra. To verify the only potentially delicate operation, if $f_n\\to f$ and $g_n\\to g$ uniformly with members in $A$, then
$\\|f_ng_n-fg\\|_\\infty
\\le\\|f_n\\|_\\infty\\|g_n-g\\|_\\infty+
\\|g\\|_\\infty\\|f_n-f\\|_\\infty\\to0,$
since a uniformly convergent sequence of functions has bounded norms. Addition and scalar multiplication are simpler. Thus Lemma 17.7 applies to $B$.

Fix $h\\in C(X,\\mathbb R)$ and $\\varepsilon>0$. For each $x,y\\in X$ there is $a_{x,y}\\in A$ with $a_{x,y}(x)=h(x)$ and $a_{x,y}(y)=h(y)$. If $x=y$, a constant suffices. If they differ, choose a separator $u\\in A$ and put
$a_{x,y}=h(x)+
 \\frac{h(y)-h(x)}{u(y)-u(x)}(u-u(x)).$
The denominator is nonzero, and unitality keeps the whole affine expression in $A$.

Hold $x$ fixed. As $y$ varies, the open sets
$\\{z:a_{x,y}(z)>h(z)-\\varepsilon\\}$
cover $X$, because the set indexed by $y$ contains $y$. Choose finitely many indices $y_1,\\ldots,y_m$ and let $b_x=\\max_i a_{x,y_i}$. This belongs to $B$, satisfies $b_x>h-\\varepsilon$ everywhere, and satisfies $b_x(x)=h(x)$.

The open sets $\\{z:b_x(z)<h(z)+\\varepsilon\\}$, now indexed by $x$, also cover $X$. Choose a finite subcover indexed by $x_1,\\ldots,x_r$ and put $b=\\min_j b_{x_j}$. It belongs to $B$. Every term in the minimum is greater than $h-\\varepsilon$, so $b>h-\\varepsilon$ everywhere. At every point at least one selected term is less than $h+\\varepsilon$, so $b<h+\\varepsilon$ there. Thus $\\|b-h\\|_\\infty\\le\\varepsilon$.

Doing this with arbitrarily small positive tolerances shows $h\\in\\overline B=B$. Therefore $B=C(X,\\mathbb R)$, which means exactly that $A$ is uniformly dense. The empty domain is immediate and needs no interpolation. $\\square$

The maximum first produces a global lower approximation with one prescribed exact point. The minimum then imposes a global upper bound while keeping that lower bound. Reversing the inequalities without changing the max/min operations would destroy the proof.

This is a real theorem. A complex subalgebra additionally needs a selfadjointness hypothesis, meaning closure under complex conjugation, for the standard complex Stone-Weierstrass conclusion. No complex conclusion without that extra condition is asserted here.

### Worked example 4 — Polynomial approximation on a compact subset

Let $K$ be a compact subset of $\\mathbb R^m$. Restrictions of real polynomials form a unital real algebra in $C(K,\\mathbb R)$. If $x\\ne y$, some coordinate differs, and that coordinate polynomial separates them. The theorem therefore approximates every continuous real function on $K$ uniformly by polynomial restrictions.

For $K=[-1,1]$ and the function $|t|$, Lemma 17.6 already gives explicit approximants: $p_1=t^2/2$ and $p_2=t^2-t^4/8$. The theorem reaches arbitrary continuous target functions, while the explicit recurrence supplies the foundational absolute-value case used in its proof. Uniform approximation does not assert equality with one polynomial or convergence of derivatives.

## Exercises

<a id="arzela-ascoli-stone-weierstrass-ex-1"></a>
### Exercise 17.1

Prove directly that uniform limits of continuous maps into a metric space are continuous, without assuming the target complete.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The limit is already assumed to exist in the target.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use one uniformly close approximant and a three-term triangle inequality.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $f_n\\to f$ uniformly, fix $x$, and choose $n$ with $D(f_n,f)<\\varepsilon/3$. Continuity of $f_n$ gives a neighborhood $U$ of $x$ on which $d_Y(f_n(y),f_n(x))<\\varepsilon/3$. For $y\\in U$, insert $f_n(y)$ and $f_n(x)$ between $f(y)$ and $f(x)$. The sum of the three distances is less than $\\varepsilon$. Completeness would concern existence of $f$, not this continuity argument.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-2"></a>
### Exercise 17.2

For $\\mathcal F=\\{x\\mapsto a+bx:|a|\\le1,\\ |b|\\le2\\}$ on $[0,1]$, prove compactness in the uniform topology.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the compact parameter rectangle.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Bound the uniform distance by $|a-c|+|b-d|$.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The rectangle $[-1,1]\\times[-2,2]$ is compact. Its map to the function space is continuous because for every $x\\in[0,1]$,
$|(a+bx)-(c+dx)|\\le |a-c|+|b-d|$.
Taking the supremum preserves this bound. The family is its continuous image, hence compact. Alternatively the slope bound proves equicontinuity, value bounds prove pointwise relative compactness, and the parameter inequalities persist in uniform limits.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-3"></a>
### Exercise 17.3

Show that pointwise boundedness and equicontinuity imply relative compactness for real-valued functions on a compact metric space. Explain why the word real-valued matters.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Each pointwise value closure is closed and bounded in the real line.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare with constant functions taking values in orthogonal unit vectors.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

For every $x$, pointwise boundedness places the values in some bounded real interval depending on $x$. Their closure is closed and bounded, hence compact. Arzela-Ascoli applies with the given equicontinuity. A general metric target need not have compact closed bounded subsets: constant functions valued at $e_n\\in\\ell^2$ are equicontinuous and bounded but stay uniform distance $\\sqrt2$ apart. Thus relative compactness of pointwise values is the general hypothesis.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-4"></a>
### Exercise 17.4

Prove that the uniform closure of an equicontinuous family is equicontinuous.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose the original equicontinuity tolerance smaller than the desired one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For each member of the closure, choose a uniformly close original member; the neighborhood stays independent of that choice.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Fix $x$ and $\\varepsilon>0$. Choose one neighborhood $U$ making every original function oscillate less than $\\varepsilon/3$ from $x$. For any $g$ in the uniform closure choose $f$ in the original family with $D(f,g)<\\varepsilon/3$. For $y\\in U$ the three-term comparison through $f(y)$ and $f(x)$ gives $d_Y(g(y),g(x))<\\varepsilon$. The same $U$ works for every $g$, proving equicontinuity.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-5"></a>
### Exercise 17.5

Let $\\mathcal F\\subseteq C([0,1],\\mathbb R)$ satisfy $|f(0)|\\le M$ and a common Lipschitz bound $|f(x)-f(y)|\\le L|x-y|$, with $M,L\\ge0$. Prove relative compactness.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Obtain a bound at every point from the bound at zero.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The same Lipschitz constant also supplies equicontinuity.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

For every $x$, $|f(x)|\\le|f(0)|+Lx\\le M+L$. Thus all pointwise value closures are compact real subsets of $[-M-L,M+L]$. If $L>0$, choosing $\\delta=\\varepsilon/L$ proves equicontinuity; if $L=0$ all functions are constant and any positive tolerance neighborhood works. Arzela-Ascoli gives relative compactness. The entire set of functions satisfying these inequalities is itself closed under uniform limits, and hence is compact.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-6"></a>
### Exercise 17.6

Explain why the algebra of even polynomials is not uniformly dense in $C([-1,1],\\mathbb R)$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

It does not distinguish one from minus one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Try to approximate the identity function at those two points.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Every even polynomial $p$ satisfies $p(1)=p(-1)=c$. If it approximated $h(t)=t$ with error strictly below one, then $|c-1|<1$ and $|c+1|<1$, requiring simultaneously $c>0$ and $c<0$. This is impossible. The algebra contains constants and is closed under the required operations, but fails point separation. Its uniform closure consists only of even functions, so Stone-Weierstrass cannot apply.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-7"></a>
### Exercise 17.7

Verify the first two nonzero polynomials in Lemma 17.6 and prove they are at most $|t|$ on $[-1,1]$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Substitute $p_0=0$ twice into the recurrence.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the factorization for $s-p_{n+1}$, with $s=|t|$.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The recurrence gives $p_1=t^2/2$ and
$p_2=t^2/2+(t^2-t^4/4)/2=t^2-t^4/8$.
Starting with $0\\le p_0\\le s$, the identity
$s-p_{n+1}=(s-p_n)(1-(s+p_n)/2)$
is nonnegative whenever $0\\le p_n\\le s\\le1$, and the increment is nonnegative. Thus both polynomials, and indeed all subsequent ones, lie between zero and $|t|$ on the interval. The inequality is proved from the recurrence, rather than guessed from their graphs.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-8"></a>
### Exercise 17.8

Suppose a uniformly closed real vector subspace $B\\subseteq C(X,\\mathbb R)$ contains $|f|$ whenever it contains $f$. Show it is closed under finite maxima and minima.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Begin with two functions.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Express their maximum using addition, subtraction, and absolute value, then use induction.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

For $f,g\\in B$, linearity puts $f-g$ in $B$, and the hypothesis puts $|f-g|$ there. Therefore
$\\max(f,g)=(f+g+|f-g|)/2$ and
$\\min(f,g)=(f+g-|f-g|)/2$
belong to $B$. Applying the two-function result repeatedly proves closure under every finite maximum and minimum. Uniform closedness is not needed for this particular step; it is what supplied absolute values in the algebra argument.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-9"></a>
### Exercise 17.9

Let $K$ be a compact subset of $\\mathbb R^2$. Prove that restrictions of real polynomials in the two coordinates are uniformly dense in $C(K,\\mathbb R)$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check each hypothesis of the real theorem.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Two distinct points differ in at least one coordinate.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The polynomial restrictions form a real subalgebra because sums, scalar multiples, and products of polynomials remain polynomials. They contain one. If $(x_1,x_2)\\ne(y_1,y_2)$, either the first or second coordinate function distinguishes them, and both are polynomial restrictions. The compact subset $K$ is Hausdorff as a Euclidean subspace. Real Stone-Weierstrass therefore gives the asserted uniform density, including when $K$ has empty interior or is disconnected.

</details>

<a id="arzela-ascoli-stone-weierstrass-ex-10"></a>
### Exercise 17.10

Suppose $X$ is compact Hausdorff and $A$ is a real unital separating algebra. Explain why obtaining max-min approximants in the closure of $A$, rather than in $A$ itself, still proves density.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Call the closure $B$ and use that it is closed.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Alternatively approximate the intermediate member of $B$ by a member of $A$ and split the error.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

For any target $h$ and $\\varepsilon>0$, the lattice construction gives $b\\in B$ with $\\|h-b\\|_\\infty<\\varepsilon/2$, using a suitably smaller tolerance if necessary. Since $b\\in\\overline A$, choose $a\\in A$ with $\\|b-a\\|_\\infty<\\varepsilon/2$. The triangle inequality yields $\\|h-a\\|_\\infty<\\varepsilon$. Thus $A$ is dense. Equivalently arbitrarily close approximants from closed $B$ imply $h\\in B$, so $B$ is the whole function space.

</details>

## Sources

The complete proofs in this chapter are supplied above. For primary author expositions and comparison, see Jiří Lebl, [Equicontinuity and the Arzelà–Ascoli theorem](https://www.jirka.org/ra/html/sec_arzelaascoli.html) and [The Stone–Weierstrass theorem](https://www.jirka.org/ra/html/sec_stoneweier.html). The original generalized approximation theorem is M. H. Stone, [The Generalized Weierstrass Approximation Theorem](https://doi.org/10.2307/3029750), Mathematics Magazine 21 (1948). Internal prerequisites are [Function Spaces and Compact-Open Topology](function-spaces-and-compact-open-topology.md) and [Uniform Spaces, Completion and Total Boundedness](uniform-spaces-completion-and-total-boundedness.md).

## Summary

On a compact metric domain, equicontinuity and pointwise relatively compact values characterize relative compactness in the uniform function space. Finite domain nets upgrade a diagonal pointwise subsequence to uniform convergence, and compact value closures keep its limits inside the target. Real Stone-Weierstrass instead proves density: constants and point separation provide two-point interpolation, polynomial approximation of absolute value gives a lattice in the uniform closure, and finite maxima followed by finite minima approximate an arbitrary continuous function. The complex analogue requires the additional conjugation condition.
`;export{e as default};