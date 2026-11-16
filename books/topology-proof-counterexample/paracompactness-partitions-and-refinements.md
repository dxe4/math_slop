
# Paracompactness, Partitions, and Refinements

Compactness reduces one cover to finitely many members. Paracompactness instead replaces an arbitrary cover by a locally finite one. That local finiteness makes infinite sums, glued functions, and local constructions manageable without demanding global compactness.

## 1. Refinements and local finiteness

A cover $V$ **refines** a cover $U$ when every $V \in V$ lies in some $U \in U$. A family is **locally finite** if every point has a neighborhood meeting only finitely many family members. It is **point-finite** if each point belongs to finitely many members. Local finiteness implies point finiteness; the converse fails because sets may accumulate near a point without containing it.

A space is **paracompact** when every open cover has a locally finite open refinement. Some sources include Hausdorffness in the definition. This book does not: it states Hausdorffness separately whenever needed.

Every compact space is paracompact: a finite subcover is a finite, hence locally finite, refinement. Every discrete space is paracompact because the singleton cover refines every open cover after choosing for each point a containing member.

## 2. Locally finite families

Locally finite families behave like finite families near each point. If $\{F_{i}\}$ is a locally finite family of closed sets, then $\bigcup_{i} F_{i}$ is closed. For a point outside the union, choose a neighborhood meeting only finitely many $F_{i}$, then remove those finitely many closed sets.

If continuous functions $\{f_{i}:X\to \mathbb{R}\}$ have locally finite supports, the pointwise sum $\sum_{i} f_{i}$ is well-defined and continuous: near each point only finitely many summands remain.

The singletons $F_{n}=\{1/n\}$ in $\mathbb{R}$ give the sharp distinction: each point belongs to at most one set, but every neighborhood of zero meets infinitely many, so the family is point-finite but not locally finite.

## 3. Shrinking covers

**Theorem 19.1 (Locally finite shrinking (imported)).** In a paracompact Hausdorff space, every open cover has a locally finite open refinement $\{U_i\}$ and open families $\{V_i\},\{W_i\}$ that still cover and satisfy

$\operatorname{cl}(V_i)\subseteq W_i\subseteq\operatorname{cl}(W_i)\subseteq U_i$

for each $i$. Each $U_i$ is assigned inside a member of the original cover. Normality and local finiteness are the material inputs: regularity alone cannot supply this theorem, since shrinking even every finite two-set open cover would imply normality. The refinement and double-shrinking proof is part of the imported paracompactness package used in this chapter.

Shrinking is not merely cosmetic. Closed supports inside prescribed open sets are what allow partitions of unity to attach local data without leaking beyond its valid region.

## 4. Partitions of unity

A **partition of unity** subordinate to an open cover $\{U_{i}\}$ is a family of continuous functions $\varphi_{i}:X\to[0,1]$ such that:

- the supports $\operatorname{supp}(\varphi_{i})=\operatorname{cl}(\{x:\varphi_{i}(x)\ne 0\})$ form a locally finite family;
- $\operatorname{supp}(\varphi_{i}) \subseteq U_{i}$ after a suitable indexing or refinement assignment;
- $\sum_{i} \varphi_{i}(x)=1$ for every $x$.

Local finiteness makes the sum continuous and finite near each point. A cover admitting such a partition is **numerable**.

For a finite cover of a normal space, Urysohn-type functions and normalization construct a partition. For paracompact Hausdorff spaces, every open cover admits a subordinate partition of unity. Apply the imported double shrinking above. Urysohn's lemma gives $f_i=1$ on $\operatorname{cl}(V_i)$ and $f_i=0$ outside $W_i$, so

$\operatorname{supp}(f_i)\subseteq\operatorname{cl}(W_i)\subseteq U_i$.

Because the locally finite family $\{U_i\}$ contains these supports, $f=\sum_i f_i$ is continuous and positive. The normalized functions $\varphi_i=f_i/f$ form the required partition and remain subordinate to the assigned original cover members.

## 5. Gluing local constructions

Suppose local functions $s_{i}$ are defined on $U_{i}$ with values in a vector space. A subordinate partition yields

$s(x)=\sum_{i} \varphi_{i}(x) s_{i}(x)$

when each product has a meaningful extension by zero and the target supports addition and scalar multiplication. This does not glue arbitrary maps into arbitrary spaces. Convex or linear structure is a material hypothesis.

On manifolds, partitions glue local metrics, integrations, and sections. They do not remove compatibility requirements for nonlinear equations; they provide weighted interpolation where the mathematical category permits it.

## 6. Metric spaces and paracompactness

**Theorem 19.2 (Metric paracompactness (imported)).** Every metric space is paracompact. A proof stratifies points by cover-controlled radii and constructs locally finite refinements using discrete families at successively finer scales. That construction is not reproduced here.

For a second-countable $T_1$ regular space, metrization gives a quick consequence: it is paracompact because it is metrizable. Alternatively, $T_1$ regular Lindelof spaces admit the needed countable refinements through the normality and shrinking argument.

**Theorem 19.3 (Normality (imported)).** Paracompact Hausdorff spaces are normal. The standard proof first obtains the locally finite shrinking used above and then applies it to neighborhoods of two disjoint closed sets. Hausdorffness participates in the regularity and shrinking steps.

## 7. Preservation boundaries

Closed subspaces of paracompact spaces are paracompact. Open subspaces need not be without additional hypotheses, though $F_{\sigma}$ open subspaces of paracompact Hausdorff spaces behave well. Disjoint unions preserve paracompactness.

Products are delicate. We use the imported product theorem that a compact Hausdorff factor times a paracompact Hausdorff space is paracompact. Arbitrary products of paracompact spaces need not be paracompact, so finite-product reasoning does not extend automatically.

The long line supplies locally Euclidean spaces that fail desired global countability/paracompactness conditions, explaining why manifold definitions include second countability or paracompactness conventions.

## Full construction: from refinements to a partition

The shrinking and partition assertions used above admit a proof that keeps every separation assumption visible. We give it here. Normality continues to mean separation of disjoint closed sets; it does not silently include $T_1$.

**Lemma 1 (paracompact Hausdorff spaces are regular).** If $X$ is paracompact Hausdorff, a point $x$ and a closed set $F$ not containing it have disjoint open neighborhoods.

**Proof.** For each $y\in F$, choose disjoint open sets $A_y\ni x$ and $B_y\ni y$ by Hausdorffness. Refine the open cover $\{X\setminus F\}\cup\{B_y:y\in F\}$ to a locally finite open cover $\mathcal W$, assigning each member to a containing original member. Let $\mathcal W_F$ consist of the members meeting $F$. No such member can be assigned to $X\setminus F$, so each is contained in some $B_y$.

Choose an open neighborhood $N$ of $x$ meeting only finitely many members of $\mathcal W$. Intersect $N$ with the finitely many corresponding $A_y$ for those members of $\mathcal W_F$ that meet $N$. The result is an open neighborhood of $x$ missing every member of $\mathcal W_F$. Their union is an open neighborhood of $F$. These neighborhoods are disjoint, as required. $\square$

**Lemma 2 (normality).** A regular paracompact space is normal.

**Proof.** Let $A,B$ be disjoint closed sets. For each $a\in A$, regularity supplies an open $U_a$ with $a\in U_a$ and $\overline{U_a}\subseteq X\setminus B$. Refine $\{X\setminus A\}\cup\{U_a:a\in A\}$ to a locally finite open cover $\mathcal W$, again recording a containing original member. Take all members meeting $A$. Each is assigned to a $U_a$, so its closure misses $B$. Their union $V$ covers $A$. The union $H$ of their closures is closed, since a locally finite union of closed sets is closed, and misses $B$. Therefore $V$ and $X\setminus H$ are disjoint open neighborhoods of $A$ and $B$. $\square$

The two lemmas are ordered deliberately. Using normality to prove the first shrinking would be circular.

**Lemma 3 (indexed shrinking).** In a normal space, every locally finite indexed open cover $(U_i)_{i\in I}$ has an open shrinking $(V_i)_{i\in I}$ that still covers $X$ and satisfies $\overline{V_i}\subseteq U_i$ for each $i$.

**Proof.** Well-order $I$, using the usual choice principle. At stage $i$, assume the earlier $U_j$ have been replaced by $V_j$. Put
$F_i=X\setminus\left(\bigcup_{j<i}V_j\ \cup\ \bigcup_{j>i}U_j\right).$
The maintained covering condition gives $F_i\subseteq U_i$. The set $F_i$ is closed, so normal shrinking gives an open $V_i$ with $F_i\subseteq V_i\subseteq\overline{V_i}\subseteq U_i$. This shrinking follows by separating the closed sets $F_i$ and $X\setminus U_i$; it is also proved in [Urysohn and Tietze Extension](urysohn-tietze-extension.md).

Here is the point at limit stages that cannot be omitted. Fix $x$. Local finiteness implies that only finitely many original $U_i$ contain $x$. If at some stage no earlier $V_i$ and no remaining $U_i$ contained $x$, take the greatest index $i_0$ among those finitely many original members containing it. At stage $i_0$, the absence of an earlier $V_i$ containing $x$ would put $x$ in $F_{i_0}$ and hence in $V_{i_0}$, a contradiction. Thus the cover survives limit stages and the final replacement. The new family remains locally finite because $V_i\subseteq U_i$. $\square$

**Theorem 19.4 (subordinate continuous partitions).** Every open cover of a paracompact Hausdorff space admits a locally finite partition of unity subordinate to it, with each support contained in its assigned original cover member.

**Proof.** First choose a locally finite open refinement $(U_i)$ and assign each $U_i$ to an original member $O_{\alpha(i)}$. Apply Lemma 3 twice, obtaining covers $(W_i)$ and $(V_i)$ with
$\overline{V_i}\subseteq W_i\subseteq\overline{W_i}\subseteq U_i$.
By Lemmas 1 and 2 the space is normal. Urysohn's lemma supplies continuous $f_i:X\to[0,1]$ equal to one on $\overline{V_i}$ and zero on $X\setminus W_i$. In particular
$\operatorname{supp}(f_i)\subseteq\overline{W_i}\subseteq U_i$.

The supports are locally finite: a neighborhood meeting only finitely many $U_i$ meets only finitely many supports. Therefore $s(x)=\sum_i f_i(x)$ is locally a finite sum of continuous functions and is continuous. It is positive everywhere because the $V_i$ cover. Define $\phi_i=f_i/s$. Each function is continuous and nonnegative, its support is contained in the same assigned set, and the locally finite sum satisfies $\sum_i\phi_i=1$.

If indexing by original cover members is wanted, put $\psi_\alpha=\sum_{\alpha(i)=\alpha}\phi_i$. These sums are continuous locally finite sums. Around any point only finitely many original groups contribute, so the grouped family is locally finite. Its support is contained in the union of the corresponding supports: that union is closed by local finiteness and lies in $O_\alpha$. Thus grouping preserves the required support condition. $\square$

Local finiteness, rather than mere point finiteness, controls continuity and closedness here. Knowing that only finitely many terms are nonzero at each point does not give a neighborhood on which the same finite list suffices.

## Worked examples of partitions

### Worked example 1 — Hat functions on the real line

For every integer $n$ let $h_n(x)=\max(0,1-|x-n|)$. If $x\in[n,n+1]$, only $h_n$ and $h_{n+1}$ can be positive, and their values are $n+1-x$ and $x-n$. Their sum is one. At integer endpoints one function has value one and the others vanish, so the same identity holds there.

The support is $[n-1,n+1]$. The family is locally finite because a bounded interval meets only finitely many of these intervals. Given any fixed $\eta>0$, these supports lie inside the open cover members $(n-1-\eta,n+1+\eta)$. Thus this is an explicit subordinate partition. It also shows why support uses a closure: the endpoints belong to the support although the function vanishes there.

### Worked example 2 — A transition on a closed interval

Cover $[0,1]$ by $U=[0,3/4)$ and $V=(1/4,1]$, both open in the relative topology. Define $\phi$ to be one on $[0,1/3]$, equal to $2-3x$ on $[1/3,2/3]$, and zero on $[2/3,1]$. These formulas agree at the joining points. Put $\psi=1-\phi$.

Then $\phi+\psi=1$, both values are nonnegative, and their supports are $[0,2/3]\subset U$ and $[1/3,1]\subset V$. The transition takes place strictly inside the overlap. Merely defining a function positive throughout $U$ could leave its support touching $3/4$, outside $U$; the deliberate shrinking prevents that error.

### Worked example 3 — An uncountable discrete space

Let $D$ be any discrete set, and take its singleton cover. The characteristic functions $\phi_d$ of $\{d\}$ are continuous. At each point $x$, the open neighborhood $\{x\}$ meets only one support, so the family is locally finite even if its index set is uncountable. Exactly one value equals one at each point, giving sum one.

Thus locally finite does not mean countable. This example also separates paracompactness from second countability. An uncountable discrete space is paracompact, yet its singleton basis cannot be countable. A theorem using partitions on paracompact spaces must allow arbitrary locally finite indexing.

## Exercises with complete solutions

### TOP-CH16-E001 — Exercise 1
Prove a finite family is locally finite.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the whole space as a neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It meets at most the finitely many listed members.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E001 — Solution 1
Every neighborhood meets at most the total finite number of members, so the definition holds.


</details>

### TOP-CH16-E002 — Exercise 2
Prove locally finite implies point-finite.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A neighborhood contains its center.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every family member containing the center meets that neighborhood.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E002 — Solution 2
At $x$, choose a neighborhood meeting only finitely many members. Every member containing $x$ meets that neighborhood, so only finitely many contain $x$.


</details>

### TOP-CH16-E003 — Exercise 3
Give a point-finite family that is not locally finite.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Examine zero.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every neighborhood of zero meets infinitely many of the listed singletons.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E003 — Solution 3
The singletons $\{1/n\}$ in $\mathbb{R}$ are point-finite, but every neighborhood of zero meets infinitely many, so the family is not locally finite.


</details>

### TOP-CH16-E004 — Exercise 4
Prove a locally finite union of closed sets is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Work near a point outside the union.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Only finitely many closed members meet one neighborhood; remove those finitely many sets.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E004 — Solution 4
At a point outside the union, choose a neighborhood meeting only finitely many sets. Remove their finite closed union from that neighborhood to obtain an open neighborhood disjoint from the whole union.


</details>

### TOP-CH16-E005 — Exercise 5
Prove locally finite sums of continuous real functions are continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a neighborhood meeting only finitely many supports.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

On it the putative infinite sum is one ordinary finite sum.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E005 — Solution 5
Near each point, all but finitely many functions vanish when their supports are locally finite. The sum locally equals a finite sum of continuous functions.


</details>

### TOP-CH16-E006 — Exercise 6
Show every compact space is paracompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A finite subcover is already locally finite.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It is an open refinement of the original cover.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E006 — Solution 6
Every open cover has a finite subcover. That subcover refines the original and is locally finite.


</details>

### TOP-CH16-E007 — Exercise 7
Show every discrete space is paracompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Refine using singletons.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each point has a singleton neighborhood meeting only one refining member.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E007 — Solution 7
Given a cover, use the singleton family. Each singleton lies in a chosen cover member, and the family is locally finite because $\{x\}$ meets only itself.


</details>

### TOP-CH16-E008 — Exercise 8
Prove a locally finite family remains locally finite after taking subfamilies.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Keep the same witnessing neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Passing to a subfamily cannot increase the number of intersections.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E008 — Solution 8
Any neighborhood meeting finitely many members of the original meets no more members of a subfamily.


</details>

### TOP-CH16-E009 — Exercise 9
Prove closures of a locally finite family are locally finite.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use an open witnessing neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

If an open set meets a closure, it meets the original set as well.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E009 — Solution 9
Choose an open neighborhood $N$ meeting only finitely many original sets. If $N$ meets $\operatorname{cl}(A_{i})$ at a point $x$, then the open neighborhood $N$ of $x$ meets $A_{i}$ by the closure test. Hence only those same finitely many closures meet $N$; no separation axiom is needed.


</details>

### TOP-CH16-E010 — Exercise 10
Why is local finiteness required in a partition of unity?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pointwise finite is weaker than locally finite.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Continuity needs one neighborhood on which only a fixed finite list contributes.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E010 — Solution 10
It makes the pointwise sum locally finite, hence automatically defined and continuous, and keeps supports from accumulating uncontrollably.


</details>

### TOP-CH16-E011 — Exercise 11
Prove the denominator in the normalization construction is positive.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the shrinking cover.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

At every point some function equals one, so the denominator is at least one.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E011 — Solution 11
If smaller positivity sets cover $X$, then at each point at least one preliminary function is positive. Their locally finite nonnegative sum is therefore strictly positive.


</details>

### TOP-CH16-E012 — Exercise 12
Prove normalized functions sum to one.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Factor the common denominator.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The sum of all numerators is exactly the denominator.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E012 — Solution 12
For $\varphi_{i}=f_{i}/(\sum_{j} f_{j})$, local finiteness allows ordinary finite algebra near each point, giving $\sum_{i} \varphi_{i}=(\sum_{i} f_{i})/(\sum_{j} f_{j})=1$.


</details>

### TOP-CH16-E013 — Exercise 13
Why does support containment matter?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start with vanishing outside the intermediate open set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its support lies in that set's closure, which the second shrinking puts in the assigned cover member.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E013 — Solution 13
It ensures a local construction is weighted only where its defining hypotheses hold and permits extension by zero without introducing activity outside the assigned cover member.


</details>

### TOP-CH16-E014 — Exercise 14
Can partitions of unity average maps into an arbitrary topological space?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Scalar multiplication and addition need an ambient linear space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A general topological target provides no operation for averaging two points.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E014 — Solution 14
No. The formula uses addition and scalar multiplication, or at least a convex-combination operation. A general space has no such structure.


</details>

### TOP-CH16-E015 — Exercise 15
Prove closed subspaces of paracompact spaces are paracompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Add the complement of the closed subspace to its relative cover.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Refine in the ambient space and then intersect with the closed subspace.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E015 — Solution 15
Extend a cover of closed $F$ by $X\setminus F$, refine locally finitely in $X$, then intersect refinement members other than the complement with $F$.


</details>

### TOP-CH16-E016 — Exercise 16
Prove disjoint unions of paracompact spaces are paracompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Refine each open-and-closed summand separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A neighborhood inside one summand sees only that summand's refinement.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E016 — Solution 16
Restrict a cover to each clopen component, choose locally finite refinements there, and unite them. A point has a neighborhood inside its component, so it sees only that locally finite family.


</details>

### TOP-CH16-E017 — Exercise 17
Explain why finite-product induction cannot prove arbitrary products paracompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Finite induction proves statements only for finite products.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Infinite basic product neighborhoods leave almost all factors unrestricted.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E017 — Solution 17
Induction has only finite stages, while local finiteness in an infinite product involves neighborhoods restricting finitely many coordinates and new global accumulation phenomena.


</details>

### TOP-CH16-E018 — Exercise 18
State the safe manifold use of partitions.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Keep the target linear and the functions continuous.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Topological partitions do not by themselves supply differentiability or tangent-space structure.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E018 — Solution 18
On a paracompact Hausdorff manifold, a subordinate partition may combine local vector-space-valued or convex data, provided each local object and its support satisfy the required compatibility.


</details>

### TOP-CH16-E019 — Exercise 19
Identify the hidden convention in “paracompact implies normal.”


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect the proof that separates a point from a closed set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It first chooses disjoint neighborhoods of two points, which requires Hausdorffness.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E019 — Solution 19
The implication normally assumes Hausdorffness, either separately or built into the definition of paracompact. Without stating the convention the claim is ambiguous.


</details>

### TOP-CH16-E020 — Exercise 20
Outline the partition construction from a locally finite shrinking.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write the chain of two closure containments.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Urysohn gives supported functions; local finiteness makes their positive sum continuous; divide by that sum.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH16-E020 — Solution 20
Begin with a locally finite cover $\{U_i\}$ and a double shrinking
$\operatorname{cl}(V_i)\subseteq W_i\subseteq\operatorname{cl}(W_i)\subseteq U_i$,
where the $V_i$ still cover. By Urysohn's lemma choose continuous $f_i$ equal to one on $\operatorname{cl}(V_i)$ and zero outside $W_i$. Then $\operatorname{supp}(f_i)\subseteq\operatorname{cl}(W_i)\subseteq U_i$. Because $W_i\subseteq U_i$ and the $U_i$ are locally finite, the supports are locally finite; hence $f=\sum_i f_i$ is continuous and positive. Set $\varphi_i=f_i/f$. The functions have locally finite supports subordinate to $\{U_i\}$ and sum to one.


</details>

## Sources

The shrinking and partition proofs above are supplied in full. The separating-function lemma is proved in [Urysohn and Tietze Extension](urysohn-tietze-extension.md); metric and manifold applications connect to [Metrization Theorems and Compatible Metrics](metrization-theorems-and-compatible-metrics.md) and [Topological Manifolds and Local Euclidean Structure](topological-manifolds-and-local-euclidean-structure.md).

## Chapter checkpoint

Paracompactness trades finite global control for finite local control. Locally finite refinements preserve closed unions and continuous sums; shrinking plus normality produces partitions of unity. These tools glue linear or convex local data, while product, subspace, and convention boundaries prevent the theorem from becoming a slogan.

The construction now exposes its dependencies: Hausdorffness gives regularity, paracompactness gives locally finite control, normality gives indexed shrinking and separating functions, and a positive locally finite sum permits normalization.
