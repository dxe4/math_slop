var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: baire-category
title: "Baire Category and Uniform Boundedness"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Baire Category and Uniform Boundedness

Completeness has already produced limits of Cauchy sequences and fixed points of contractions. It has another consequence that looks quite different: a nonempty complete metric space cannot be assembled from countably many closed sets that are all locally negligible. Baire's theorem turns this obstruction into an existence tool. A countable list of dense open requirements can all be satisfied at once, densely throughout the space.

The required preparation is [Metric Spaces, Open Sets, and Closed Sets](metric-spaces-open-and-closed.md), [Sequences, Subsequences, and Compactness](sequences-compactness.md), [Families of Functions and Equicontinuity](function-spaces-and-equicontinuity.md), and [Fixed Points and Complete Metric Spaces](fixed-points-and-complete-spaces.md). We use completeness and closed balls, not compactness of bounded subsets. The distinction matters in function spaces, where closed bounded balls usually fail to be compact.

This chapter proves the complete-metric Baire theorem, explains the ambient-space qualifications in category language, and develops two applications. A pointwise bounded family of continuous functions is uniformly bounded on some open region. When those functions are continuous linear maps on a Banach space, linearity transports that local conclusion to a bound on all operator norms. The final application concerns continuity points of pointwise limits of continuous functions.

## Smallness relative to a space

**Definition 19.1 (Nowhere dense and meagre).** In a metric space $X$, a set $A$ is nowhere dense if the interior of its closure is empty, all taken relative to $X$. A set is meagre if it is a countable union of nowhere-dense sets. A set is comeagre if its complement is meagre.

The closure in the definition is indispensable. The rationals have empty interior in $\\mathbb R$, but they are not nowhere dense there because their closure is all of $\\mathbb R$. They are nevertheless meagre: each singleton is closed with empty interior, and there are countably many rational singletons. A meagre set can be dense.

**Proposition 19.2 (A local test for nowhere density).** A set $A\\subseteq X$ is nowhere dense if and only if every nonempty open subset $U$ of $X$ contains a nonempty open subset $W$ disjoint from $\\overline A$.

*Proof.* If $\\overline A$ has empty interior, $U$ is not contained in it. Choose $x\\in U\\setminus\\overline A$. This difference is open, so it contains a nonempty open neighbourhood $W$ of $x$. Conversely, if the closed set $\\overline A$ had nonempty interior $U$, no nonempty subset of that $U$ could be disjoint from $\\overline A$, contradicting the local test. ∎

Taking subsets of a nowhere-dense set preserves nowhere density, because their closures are contained in the original closure. Taking subsets of a meagre set preserves meagreness: intersect the subset with the countably many nowhere-dense pieces. Countable unions of meagre sets are meagre, since a countable list of countable decompositions can be arranged into one countable list.

**Worked Example 19.3 (The ambient topology changes the answer).** The set $A=[0,1]\\times\\{0\\}$ is closed and nowhere dense in $\\mathbb R^2$. Every open disk contains points with nonzero second coordinate, so no open disk is contained in $A$. In the space $A$ itself, however, its closure is $A$ and its interior is $A$, nonempty. It is not nowhere dense relative to itself.

Likewise an isolated point is not nowhere dense in a space where its singleton is open. Thus “countable sets are meagre” requires a qualification such as a metric space with no isolated points; it is not valid in every metric space. Countability by itself is not a topological definition of smallness.

**Definition 19.4 (Baire space).** A space is Baire if every countable intersection of open dense subsets is dense. Density means meeting every nonempty open set. In particular, the theorem promises a point inside any prescribed nonempty open region, not merely somewhere in the whole space.

## The nested-ball theorem

**Theorem 19.5 (Baire category theorem).** Every complete metric space is a Baire space. Consequently no nonempty open subset of a nonempty complete metric space is meagre in that space.

*Proof.* Let $U_1,U_2,\\ldots$ be open dense subsets of a complete metric space $X$. If $X$ is empty, density is vacuous. Otherwise fix any nonempty open set $W$. We construct closed balls
$$F_j=\\{x:d(x,x_j)\\le r_j\\},\\qquad 0<r_j\\le2^{-j},$$
such that $F_1\\subset W\\cap U_1$ and
$$F_{j+1}\\subset B(x_j,r_j)\\cap U_{j+1}.$$
For the first choice, $W\\cap U_1$ is nonempty and open. Choose a point and a positive radius small enough that the corresponding closed ball lies inside it. This is possible because an open ball of some radius already lies inside, and halving that radius contains its closed ball. At each later stage, the open ball $B(x_j,r_j)$ is nonempty, so density of $U_{j+1}$ gives a nonempty open intersection; choose the next sufficiently small closed ball inside it. Isolated points cause no difficulty, because a positive-radius ball may be a singleton.

The balls are nested. For $m\\ge j$, $x_m\\in F_j$, so for $m,\\ell\\ge j$,
$$d(x_m,x_\\ell)\\le d(x_m,x_j)+d(x_j,x_\\ell)\\le2r_j\\le2^{1-j}.$$
Thus the centers are Cauchy. Completeness supplies a limit $x\\in X$. Since every $F_j$ is closed and contains the tail centers, it contains $x$. Hence $x\\in W$ and $x\\in U_j$ for every $j$. As $W$ was arbitrary, the intersection is dense.

For the consequence, suppose a nonempty open $W$ were contained in $\\bigcup_j A_j$ with each $A_j$ nowhere dense. The complements $X\\setminus\\overline{A_j}$ are open dense. Their intersection must meet $W$ by the first part, but a point in that intersection belongs to none of the $A_j$, a contradiction. ∎

No compactness theorem was invoked. Shrinking diameters made a Cauchy sequence, and completeness kept its limit inside the space. If completeness is absent, a sequence of nested closed sets can converge toward a point that the space omits. Nor may the closed-ball choices be replaced by arbitrary nested open sets: their boundary limit might escape every chosen set.

Another consequence is that, when a nonempty complete metric space is covered by countably many closed sets, at least one has nonempty interior. If every closed set had empty interior, they would all be nowhere dense and the entire nonempty open space would be meagre, contrary to the theorem. For local applications, use the open-subspace result proved next: a closed cover is then understood relative to that open subspace. If a dense-open intersection missed a nonempty open region, the relative complements would cover that region by closed sets with empty relative interior, contradicting its Baire property.

**Worked Example 19.6 (Avoiding every listed point).** Let $(q_j)$ list the rationals. Each $\\mathbb R\\setminus\\{q_j\\}$ is open and dense. Baire therefore says that
$$\\bigcap_j(\\mathbb R\\setminus\\{q_j\\})=\\mathbb R\\setminus\\mathbb Q$$
is dense. Given any nonempty open interval, the nested-ball construction can avoid the first rational at the first stage, the second at the next stage, and so on, while its limit remains in that interval.

In $\\mathbb Q$ with its inherited metric, each rational singleton is still closed and has empty interior, but their countable union is the entire space. Thus $\\mathbb Q$ is not Baire and is not complete. The same singleton description has different global consequences because completeness belongs to the ambient metric space.

## Local versions and the correct quantifiers

**Proposition 19.7 (Open subspaces of a Baire space).** Every open subspace $O$ of a Baire space $X$ is Baire.

*Proof.* Let $V_j$ be open dense subsets of $O$. Since $O$ is open, each $V_j$ is open in $X$. Put
$$D_j=V_j\\cup(X\\setminus\\overline O).$$
This is open in $X$. It is dense: every nonempty open set meeting $O$ meets $V_j$; a nonempty open set disjoint from $O$ contains no point of $\\overline O$, and hence lies in the second part. Baire in $X$ implies $\\bigcap_jD_j$ is dense. For any nonempty open $W\\subseteq O$, a point of $W\\cap\\bigcap_jD_j$ must belong to every $V_j$, since $W$ is disjoint from $X\\setminus\\overline O$. Thus their intersection is dense in $O$. ∎

An open interval is therefore Baire even though it is not complete in its usual metric. Completeness is sufficient for being Baire, not necessary. The theorem is topological in its conclusion, while completeness of a particular metric is a convenient sufficient hypothesis.

**Theorem 19.8 (Local uniform bound).** Let $X$ be a nonempty Baire space and $\\mathcal F$ a family of continuous real-valued functions on $X$. Suppose for each $x$ there is a finite bound on $\\{|f(x)|:f\\in\\mathcal F\\}$. Then some nonempty open set $W$ and integer $m$ satisfy $|f(x)|\\le m$ for every $f\\in\\mathcal F$ and $x\\in W$.

*Proof.* For positive integers $m$, define
$$E_m=\\bigcap_{f\\in\\mathcal F}\\{x:|f(x)|\\le m\\}.$$
Each set in the intersection is closed by continuity, so $E_m$ is closed even when the family is uncountable. Pointwise boundedness gives $X=\\bigcup_{m\\ge1}E_m$. In a nonempty Baire space these closed sets cannot all have empty interior. Choose a nonempty open $W\\subseteq E_m$ for one index. This is the claimed bound. ∎

The conclusion is local. Without a structure that transports a bound, there is no global uniform bound over all of $X$. A single continuous function such as $f(x)=x$ on $\\mathbb R$ is pointwise bounded as a one-element family, but is unbounded over the whole domain. The order of quantifiers explains the theorem's value: the hypothesis supplies a different bound at each point; the conclusion supplies one bound valid throughout one open region for the entire family.

## Uniform boundedness for linear maps

A normed real vector space is Banach when its norm metric is complete. A linear map $T:X\\to Y$ between normed spaces is bounded if
$$\\|T\\|=\\sup_{\\|x\\|\\le1}\\|Tx\\|<\\infty.$$
The inequality $\\|Tx\\|\\le\\|T\\|\\|x\\|$ follows by scaling nonzero vectors; at zero it is immediate. Such a map is continuous. Conversely, continuity at zero gives a bound on a small ball and scaling gives a finite operator norm.

**Theorem 19.9 (Uniform boundedness principle).** Let $X$ be a Banach space, $Y$ a normed space, and $\\mathcal T$ a family of bounded linear maps $X\\to Y$. If $\\sup_{T\\in\\mathcal T}\\|Tx\\|<\\infty$ for every fixed $x\\in X$, then $\\sup_{T\\in\\mathcal T}\\|T\\|<\\infty$.

*Proof.* If $X=\\{0\\}$ all operator norms are zero. Otherwise apply the Baire closed-cover argument to
$$E_m=\\{x:\\|Tx\\|\\le m\\text{ for every }T\\in\\mathcal T\\}.$$
These are closed and cover $X$. Some $E_m$ contains an open ball $B(a,r)$ with $r>0$. For every $\\|h\\|\\le r/2$, both $a$ and $a+h$ lie in that ball, so linearity and the triangle inequality give
$$\\|Th\\|=\\|T(a+h)-Ta\\|\\le2m$$
for every $T$. For a unit-ball vector $u$, take $h=(r/2)u$. Scaling yields $\\|Tu\\|\\le4m/r$. Therefore every operator norm is at most $4m/r$. ∎

Completeness of the target space was not needed; no Cauchy limit was taken there. Completeness of the domain was used in the Baire step. Linearity was used twice: first to translate the bound from a ball about $a$ to a ball about zero, then to scale it to the unit ball.

**Worked Example 19.10 (An incomplete-domain failure).** Let $c_{00}$ be the real sequences with finite support, with norm $\\|x\\|_\\infty=\\sup_j|x_j|$. Define $T_n(x)=n x_n$. Each map is linear and bounded, with norm $n$: the upper bound follows from $|n x_n|\\le n\\|x\\|_\\infty$ and equality occurs at the sequence with its $n$th entry one and all others zero.

For every fixed finite-support sequence $x$, only finitely many $T_n(x)$ are nonzero, so the family is pointwise bounded. The norms $n$ are unbounded. The domain is incomplete: the finite truncations of $(1,1/2,1/3,\\ldots)$ are uniformly Cauchy, since a tail after $N$ has supremum at most $1/(N+1)$, but their limit has infinite support and is absent from $c_{00}$. This identifies the failed hypothesis rather than contradicting the theorem.

## Continuity points of pointwise limits

**Definition 19.11 (Oscillation).** For a real-valued function $f$ on a metric space, define its oscillation at $x$ by
$$\\omega_f(x)=\\inf_{r>0}\\sup\\{|f(y)-f(z)|:y,z\\in B(x,r)\\}.$$
The supremum may be infinite. Continuity at $x$ is equivalent to $\\omega_f(x)=0$: continuity bounds two values through $f(x)$, and a small oscillation bounds every nearby value against $f(x)$ itself.

**Theorem 19.12 (Pointwise limits have many continuity points).** If $X$ is a nonempty complete metric space and continuous real functions $f_n$ converge pointwise to a finite-valued function $f$, then the continuity points of $f$ contain a dense countable intersection of open sets. In fact that continuity set is itself such an intersection.

*Proof.* For $\\varepsilon>0$, the set $D_\\varepsilon=\\{x:\\omega_f(x)\\ge\\varepsilon\\}$ is closed. If $\\omega_f(x)<\\varepsilon$, choose a ball around $x$ on which the range diameter is below $\\varepsilon$. Every sufficiently close center has a smaller ball inside it, giving the same strict bound, so the complement is open.

We show that $D_\\varepsilon$ has empty interior. Fix nonempty open $U$. Put $\\eta=\\varepsilon/4$ and
$$F_N=\\bigcap_{n,m\\ge N}\\{x:|f_n(x)-f_m(x)|\\le\\eta\\}.$$
These are closed. Pointwise convergence makes the numerical sequence Cauchy at each point, so their union covers $X$. Their intersections with $U$ form a closed cover of the Baire space $U$, by Proposition 19.7. Hence one $F_N$ contains a nonempty open subset $V$ of $U$. Passing $m\\to\\infty$ pointwise gives $|f_n(x)-f(x)|\\le\\eta$ there for $n\\ge N$.

Continuity of the one function $f_N$ provides a nonempty open subset $W\\subseteq V$ on which its range diameter is less than $\\eta$. For $y,z\\in W$,
$$|f(y)-f(z)|\\le|f(y)-f_N(y)|+|f_N(y)-f_N(z)|+|f_N(z)-f(z)|<3\\eta<\\varepsilon.$$
Every point of $W$ has a ball inside $W$, so $W$ is disjoint from $D_\\varepsilon$. Thus the closed set $D_\\varepsilon$ is nowhere dense.

Finally $f$ is discontinuous exactly where its oscillation is positive, so its continuity set is
$$\\bigcap_{k\\ge1}(X\\setminus D_{1/k}).$$
These sets are open dense, and Baire makes their intersection dense. ∎

This conclusion does not assert uniform convergence or continuity everywhere. For $f_n(x)=x^n$ on $[0,1]$, the pointwise limit is zero below one and one at one, so it has one discontinuity. The theorem rules out much worse patterns, such as a pointwise limit of continuous functions on $\\mathbb R$ that is discontinuous everywhere. It is a statement about a whole function class, not an estimate at a specified point.

## Exercises

### ANA-CH25-E001 — Exercise 1: closure matters
<a id="ANA-CH25-E001"></a>

Give a subset of $\\mathbb R$ with empty interior that is not nowhere dense. Justify both claims.

<details>
<summary>Hint 1</summary>

Compare a dense countable subset with its closure.

</details>
<details>
<summary>Hint 2</summary>

Every open interval contains both rational and irrational numbers.

</details>
<details>
<summary>Solution</summary>

Take $\\mathbb Q$. No nonempty open interval is contained in it, since every such interval contains an irrational, so its interior is empty. Its closure is $\\mathbb R$ by density of rationals; that closure has nonempty interior. Therefore it is not nowhere dense.

</details>

### ANA-CH25-E002 — Exercise 2: a relative-topology audit
<a id="ANA-CH25-E002"></a>

Is $\\{0\\}$ nowhere dense in $\\mathbb R$? Is it nowhere dense in the metric space $\\{0\\}\\cup[1,2]$?

<details>
<summary>Hint 1</summary>

In both spaces the singleton is closed; inspect whether it is open.

</details>
<details>
<summary>Hint 2</summary>

A sufficiently small ball about zero in the second space contains only zero.

</details>
<details>
<summary>Solution</summary>

In $\\mathbb R$, the singleton has empty interior and is closed, so it is nowhere dense. In $\\{0\\}\\cup[1,2]$, the ball of radius $1/2$ about zero is $\\{0\\}$ itself. Thus the singleton is open and its closure has nonempty interior, so it is not nowhere dense relative to that space.

</details>

### ANA-CH25-E003 — Exercise 3: countable unions
<a id="ANA-CH25-E003"></a>

Prove that a countable union of meagre subsets of a fixed metric space is meagre. State why the ambient space must stay fixed.

<details>
<summary>Hint 1</summary>

Write each given set as a countable union of nowhere-dense pieces.

</details>
<details>
<summary>Hint 2</summary>

Enumerate the doubly indexed pieces by diagonals of pairs of positive integers.

</details>
<details>
<summary>Solution</summary>

Write $A_j=\\bigcup_k A_{jk}$ with every $A_{jk}$ nowhere dense in $X$. The union over $j$ is the union over all pairs $(j,k)$, a countable set of indices, hence is a countable union of nowhere-dense sets. Closure and interior depend on the ambient topology; pieces known to be nowhere dense in different spaces need not be nowhere dense in the common target space without a separate argument.

</details>

### ANA-CH25-E004 — Exercise 4: dense requirements
<a id="ANA-CH25-E004"></a>

Let $X$ be a complete metric space and $U_n$ open dense subsets. Prove that their intersection meets every nonempty open ball. Explain why none of the individual density statements alone suffices.

<details>
<summary>Hint 1</summary>

Use the ball as the initial open set in Baire's construction.

</details>
<details>
<summary>Hint 2</summary>

The conclusion concerns simultaneous membership in every $U_n$.

</details>
<details>
<summary>Solution</summary>

An open ball is nonempty and open when its radius is positive and its center belongs to $X$. Theorem 19.5 gives a point in that ball belonging to every $U_n$. Individual density gives a possibly different point for each index, with no common membership guaranteed. The nested construction and completeness are what retain all requirements in one point.

</details>

### ANA-CH25-E005 — Exercise 5: closed covers
<a id="ANA-CH25-E005"></a>

Suppose a nonempty complete metric space is the union of closed sets $F_n$. Show that some $F_n$ contains a nonempty open ball. Must one $F_n$ equal the entire space?

<details>
<summary>Hint 1</summary>

If all interiors were empty, the cover would be a meagre decomposition of the whole space.

</details>
<details>
<summary>Hint 2</summary>

Use the cover of $\\mathbb R$ by intervals $[-n,n]$ to test the stronger claim.

</details>
<details>
<summary>Solution</summary>

If every closed $F_n$ had empty interior, all would be nowhere dense, contradicting Baire. Thus one has nonempty interior and contains a positive-radius open ball. It need not be all of $X$: the closed intervals $[-n,n]$ cover $\\mathbb R$, but no one interval is the entire real line.

</details>

### ANA-CH25-E006 — Exercise 6: completeness is sufficient
<a id="ANA-CH25-E006"></a>

Show that $(0,1)$ is Baire but is not complete in its usual metric.

<details>
<summary>Hint 1</summary>

It is an open subspace of the complete real line.

</details>
<details>
<summary>Hint 2</summary>

Consider a sequence approaching a missing endpoint.

</details>
<details>
<summary>Solution</summary>

The real line is complete and hence Baire. Proposition 19.7 makes its open subspace $(0,1)$ Baire. The sequence $1/n$, for $n\\ge2$, is Cauchy in that interval but has real limit zero, outside it; uniqueness of limits rules out a limit inside. Thus the usual metric is incomplete. The two properties are not equivalent for a specified metric.

</details>

### ANA-CH25-E007 — Exercise 7: the centre sequence
<a id="ANA-CH25-E007"></a>

In the nested-ball proof, derive an explicit Cauchy threshold from $r_j\\le2^{-j}$. Explain why the limit belongs to every closed ball.

<details>
<summary>Hint 1</summary>

Two tail centers both lie within $r_j$ of $x_j$.

</details>
<details>
<summary>Hint 2</summary>

Fix the ball index first, then take the limit along the tail contained in that closed set.

</details>
<details>
<summary>Solution</summary>

For $m,\\ell\\ge j$, $d(x_m,x_\\ell)\\le2r_j\\le2^{1-j}$. Given $\\varepsilon>0$, choose $j$ with $2^{1-j}<\\varepsilon$, which supplies the Cauchy threshold. Completeness gives a limit $x$. For any fixed $j$, all later centers lie in the closed ball $F_j$, so closedness puts their limit in $F_j$. This argument works separately for each fixed ball and hence for all of them.

</details>

### ANA-CH25-E008 — Exercise 8: local versus global
<a id="ANA-CH25-E008"></a>

Give a pointwise bounded family of continuous functions on a complete metric space that is not uniformly bounded over the whole space. Explain why Theorem 19.8 survives.

<details>
<summary>Hint 1</summary>

A family may contain just one function.

</details>
<details>
<summary>Hint 2</summary>

Use an unbounded continuous function on an unbounded complete domain.

</details>
<details>
<summary>Solution</summary>

Take $\\mathcal F=\\{f\\}$ on $\\mathbb R$ with $f(x)=x$. For each fixed point the family has the finite bound $|x|$, but no bound works over all real inputs. On the nonempty open interval $(-1,1)$, however, $|f(x)|\\le1$, satisfying the theorem's local conclusion. The theorem does not promise global control without additional structure.

</details>

### ANA-CH25-E009 — Exercise 9: the translation estimate
<a id="ANA-CH25-E009"></a>

In the uniform boundedness proof, suppose $B(a,r)\\subseteq E_m$. Prove the bound $\\|T\\|\\le4m/r$ carefully, including boundary vectors of the unit ball.

<details>
<summary>Hint 1</summary>

For $\\|u\\|\\le1$, use $h=(r/2)u$.

</details>
<details>
<summary>Hint 2</summary>

Both $a$ and $a+h$ lie strictly inside the open ball, since $\\|h\\|\\le r/2<r$.

</details>
<details>
<summary>Solution</summary>

For every unit-ball vector $u$, put $h=(r/2)u$. Then $a,a+h\\in B(a,r)$, so $\\|Th\\|=\\|T(a+h)-Ta\\|\\le2m$. Linearity gives $(r/2)\\|Tu\\|\\le2m$, hence $\\|Tu\\|\\le4m/r$. Taking the supremum over all $\\|u\\|\\le1$ gives the operator-norm bound. The factor one half prevents a boundary vector from leaving the open ball.

</details>

### ANA-CH25-E010 — Exercise 10: no target completeness
<a id="ANA-CH25-E010"></a>

Audit the uniform boundedness proof and identify whether completeness of $Y$ is used anywhere. Which hypotheses make $E_m$ closed?

<details>
<summary>Hint 1</summary>

List the limit taken in the Baire construction and the space containing that limit.

</details>
<details>
<summary>Hint 2</summary>

Each condition $\\|Tx\\|\\le m$ is a closed inverse-image condition.

</details>
<details>
<summary>Solution</summary>

The Cauchy limit underlying Baire is in the domain $X$, not in $Y$. The proof takes no Cauchy limit of vectors in $Y$, so target completeness is unnecessary. Each bounded linear $T$ is continuous and the norm is continuous, making $\\{x:\\|Tx\\|\\le m\\}$ closed. Arbitrary intersections of those sets give closed $E_m$. Domain completeness and individual continuity have distinct jobs.

</details>

### ANA-CH25-E011 — Exercise 11: incomplete sequence space
<a id="ANA-CH25-E011"></a>

Verify that $T_n(x)=n x_n$ is pointwise bounded on $c_{00}$ with the supremum norm and has norm $n$. Show that the finite truncations of $(1/j)_j$ are Cauchy there.

<details>
<summary>Hint 1</summary>

A fixed input has only finitely many nonzero coordinates.

</details>
<details>
<summary>Hint 2</summary>

For the Cauchy estimate, the largest possible new coordinate after position $N$ is $1/(N+1)$.

</details>
<details>
<summary>Solution</summary>

For fixed $x$, $T_n(x)=0$ beyond its finite support, so the finitely many remaining values have a finite maximum magnitude. Also $|T_n(x)|\\le n\\|x\\|_\\infty$, with equality at the $n$th coordinate vector, proving norm $n$. Two truncations beyond position $N$ differ only in coordinates of magnitude at most $1/(N+1)$, so they are uniformly Cauchy. Their only coordinatewise candidate limit has infinite support and is not in $c_{00}$.

</details>

### ANA-CH25-E012 — Exercise 12: uniform boundedness from convergence
<a id="ANA-CH25-E012"></a>

Let $X$ be Banach and $T_n:X\\to Y$ bounded linear. Suppose $T_nx$ converges in $Y$ for each $x$. Prove that the operator norms are bounded and the pointwise limit map $T$ is bounded linear.

<details>
<summary>Hint 1</summary>

A convergent sequence in a normed space is bounded.

</details>
<details>
<summary>Hint 2</summary>

Pass to the limit in linear identities and in a common norm inequality.

</details>
<details>
<summary>Solution</summary>

For each $x$, convergence makes $\\sup_n\\|T_nx\\|$ finite. Uniform boundedness supplies $C$ with $\\|T_n\\|\\le C$ for all $n$. Define $Tx=\\lim_nT_nx$, which exists by hypothesis without assuming $Y$ complete. Passing to limits in $T_n(\\alpha x+\\beta z)=\\alpha T_nx+\\beta T_nz$ proves linearity. Passing to the limit in $\\|T_nx\\|\\le C\\|x\\|$ gives $\\|Tx\\|\\le C\\|x\\|$, so $T$ is bounded.

</details>

### ANA-CH25-E013 — Exercise 13: oscillation and continuity
<a id="ANA-CH25-E013"></a>

Prove that $\\omega_f(x)=0$ is equivalent to continuity at $x$. Explain why $\\{x:\\omega_f(x)<\\varepsilon\\}$ is open for every $\\varepsilon>0$.

<details>
<summary>Hint 1</summary>

Use $f(x)$ as one of the two values in a ball.

</details>
<details>
<summary>Hint 2</summary>

A small ball about a nearby center can be placed inside the original controlling ball.

</details>
<details>
<summary>Solution</summary>

Continuity with tolerance $\\varepsilon/2$ makes the difference of two nearby values less than $\\varepsilon$, so the oscillation is zero. Conversely, zero oscillation gives a ball with range diameter below any prescribed tolerance; compare $f(y)$ with $f(x)$ inside that ball to obtain continuity. If a ball about $x$ has range diameter below $\\varepsilon$, every center sufficiently close to $x$ has a positive-radius ball inside it with the same bound. Thus the strict-oscillation set is open.

</details>

### ANA-CH25-E014 — Exercise 14: a pointwise limit with a boundary defect
<a id="ANA-CH25-E014"></a>

Find the pointwise limit of $f_n(x)=x^n$ on $[0,1]$, determine its continuity set, and explain why it is compatible with Theorem 19.12.

<details>
<summary>Hint 1</summary>

Treat $x<1$ separately from $x=1$.

</details>
<details>
<summary>Hint 2</summary>

Continuity at the right endpoint is relative to the interval.

</details>
<details>
<summary>Solution</summary>

The limit is $f(x)=0$ for $0\\le x<1$ and $f(1)=1$. It is continuous at every point below one and discontinuous at one because values approaching from the left remain zero. Its continuity set $[0,1)$ is open and dense relative to $[0,1]$, hence is itself a dense countable intersection by repeating the same open set. The theorem promises many continuity points, not continuity everywhere or uniform convergence.

</details>

### ANA-CH25-E015 — Exercise 15: an impossible limit
<a id="ANA-CH25-E015"></a>

Prove that the indicator of $\\mathbb Q$ cannot be a pointwise limit on $\\mathbb R$ of continuous real functions.

<details>
<summary>Hint 1</summary>

Use density of rationals and irrationals to determine its continuity points.

</details>
<details>
<summary>Hint 2</summary>

The real line is a nonempty complete metric space.

</details>
<details>
<summary>Solution</summary>

Every neighbourhood of every real point contains both rational and irrational numbers, so the indicator takes both values zero and one arbitrarily close to every point. It is discontinuous everywhere. If it were a pointwise limit of continuous functions, Theorem 19.12 would give a dense continuity set, in particular at least one continuity point. This contradiction proves impossibility.

</details>

## Sources and provenance

This is original exposition and original exercise development. The unchanged local seed is Quarto Real Analysis **Baire Category and Function-Space Compactness**. Christian Rosendal's primary lecture notes [*Baire Category*](https://homepages.math.uic.edu/~rosendal/WebpagesMathCourses/MATH511-notes/DST%20notes%20-%20BaireCategory09.pdf) provide a further-reading route for the category viewpoint. The complete-metric theorem, its local consequences, uniform boundedness and the continuity-point theorem are proved here with their hypotheses explicit. No measure-theoretic notion of typicality is assumed or identified with category.

For the L4 operator-space application and its strong-convergence consequences, continue to [Functional Analysis: Uniform Boundedness](../functional-analysis/uniform-boundedness.md). That chapter uses this Baire proof and supplies the linear local-to-global estimate, its completeness counterexamples and the dense convergence criterion.

## Summary

Nowhere density concerns the interior of a closure relative to a specified space; meagreness concerns a countable union of such sets. Completeness lets nested shrinking closed balls retain one point satisfying every dense open requirement. Open subspaces inherit the Baire property even when their inherited metric is incomplete. Baire turns pointwise bounds into a common bound on one open region, and linearity transports that region to a global operator-norm estimate on a Banach domain. Oscillation makes continuity failures closed at each positive scale, yielding a dense continuity set for pointwise limits of continuous functions. In [Differentiation in Euclidean Space](differentiation-in-r-n.md), local approximation is expressed by a single bounded linear map rather than by separate coordinate tests.
`;export{e as default};