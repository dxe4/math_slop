var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: extremal-set-compression
title: "Extremal Set Systems, Shadows, and Compression"
level: graduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Extremal Set Systems, Shadows, and Compression {#section-1-extremal-set-systems-shadows-and-compression}

An extremal set problem asks how large a family of subsets can be when certain configurations are forbidden. The question sounds like counting, but the successful arguments usually change the family before counting it. Shadows move a family down one level of the subset lattice. Compression moves its members toward a canonical corner without changing their number. Permutation and cycle counts then convert a local obstruction into a global inequality.

This chapter develops those moves as proof instruments. Every transformation comes with an invariant: cardinality is preserved, uniformity is preserved, and the forbidden intersection condition must be checked rather than assumed. The goal is not merely to quote sharp bounds, but to expose the certificates that make them reliable.

<a id="section-5-prerequisites-and-scope"></a>
## Prerequisites and scope {#section-7-prerequisites-and-scope}

The chapter prerequisite is \`turan-symmetrization-stability\`. We use finite sets, binomial coefficients, double counting, injections, and elementary linear orders. The later \`rank-submodularity-flats\` chapter supplies useful rank and closure analogies, but no matroid axiom is assumed for an arbitrary family of sets.

Write $[n]=\\{1,\\ldots ,n\\}$ and $\\binom{[n]}{k}$ for the family of all $k$-subsets of $[n]$. A family contained in one level is **uniform**. Throughout, $0<k<n$ unless an endpoint is discussed separately.

<a id="section-11-1-levels-antichains-and-shadows"></a>
## 1. Levels, antichains, and shadows {#section-13-1-levels-antichains-and-shadows}

For $F\\subseteq \\binom{[n]}{k}$, its **lower shadow** is

$\\partial F=\\{B\\in \\binom{[n]}{k-1}: B\\subset A \\text{ for some } A\\in F\\}$.

The upper shadow is defined by containment in the other direction. Repeated lower shadows record all smaller traces of members of $F$. Shadows matter because they measure how much boundary a family has between adjacent ranks of the subset lattice.

An **antichain** is a family $A\\subseteq \\mathcal{P}([n])$ with no two distinct members comparable by inclusion. A maximal level $\\binom{[n]}{\\lfloor n/2\\rfloor}$ is an antichain, and the following theorem says no antichain is larger.

**Normalized-chain inequality.** If $A$ is an antichain in $\\mathcal{P}([n])$, then

$\\sum_{A\\in A} 1/\\binom{n}{|A|} \\le 1$.

**Proof.** Count pairs $(A,\\pi)$ where $A\\in A$ and the permutation $\\pi$ of $[n]$ has the elements of $A$ in its first $|A|$ positions. A fixed $A$ belongs to $|A|!(n-|A|)!$ such pairs. A fixed permutation contributes at most one pair: its initial segments form a chain, and an antichain meets a chain at most once. Hence

$\\sum_{A\\in A}|A|!(n-|A|)!\\le n!$.

Division by $n!$ gives the result. ∎

Because all terms in a $k$-uniform antichain have equal weight, the normalized-chain inequality immediately gives $|A|\\le \\binom{n}{k}$. The stronger middle-level antichain bound is

$|A|\\le \\binom{n}{\\lfloor n/2\\rfloor}$,

since every denominator in the normalized-chain inequality is at most the largest binomial coefficient.

<a id="section-37-example-1-equality-in-the-middle-level"></a>
### Example 1: equality in the middle level {#section-39-example-1-equality-in-the-middle-level}

For $n=6$, the twenty 3-subsets form an antichain. Each contributes $1/20$ to the normalized-chain sum, so the sum is one. Mixing levels is possible, but every inclusion relationship must still be excluded; raw cardinality alone does not detect that obstruction.

<a id="section-41-2-a-normalized-shadow-inequality"></a>
## 2. A normalized shadow inequality {#section-43-2-a-normalized-shadow-inequality}

The bipartite inclusion graph between $\\binom{[n]}{k-1}$ and $\\binom{[n]}{k}$ is biregular. Every $k$-set contains $k$ lower neighbors, and every $(k-1)$-set has $n-k+1$ upper neighbors.

**Theorem 5.1 (Local shadow).** For $F\\subseteq \\binom{[n]}{k}$,

$|\\partial F|/\\binom{n}{k-1} \\ge |F|/\\binom{n}{k}$.

Equivalently, $|\\partial F|\\ge k|F|/(n-k+1)$.

**Proof.** Count incidences $(B,A)$ with $B\\subset A$, $B\\in \\partial F$, and $A\\in F$. Counting from $F$ gives exactly $k|F|$. Counting from the shadow gives at most $(n-k+1)|\\partial F|$, because that is the total number of $k$-sets above each $B$, including those not in $F$. Therefore

$k|F|\\le (n-k+1)|\\partial F|$.

Using $\\binom{n}{k-1}/\\binom{n}{k}=k/(n-k+1)$ gives the normalized form. ∎

This theorem is sharp for the entire level and for the empty family. It is not the sharp answer for every prescribed $|F|$; exact minimization of shadows requires a binomial or colexicographic representation and a stronger exact-shadow theorem. We will not claim that stronger theorem without its additional machinery.

<a id="section-59-example-2-a-star-and-its-shadow"></a>
### Example 2: a star and its shadow {#section-61-example-2-a-star-and-its-shadow}

Let $F=\\{A\\in \\binom{[5]}{3}:1\\in A\\}$. Then $|F|=\\binom{4}{2}=6$. Its shadow contains all pairs: a pair containing $1$ extends within the star, while a pair $\\{i,j\\}$ avoiding $1$ lies below $\\{1,i,j\\}$. Thus $|\\partial F|=10$. The local theorem only forces $|\\partial F|\\ge 3\\cdot 6/3=6$; it is valid but deliberately not exact.

<a id="section-63-3-elementary-compressions"></a>
## 3. Elementary compressions {#section-65-3-elementary-compressions}

Fix $1\\le i<j\\le n$. For a set $A\\subseteq [n]$, define

$C_{ij}(A)=(A\\setminus \\{j\\})\\cup \\{i\\}$

when $j\\in A$ and $i\\notin A$; otherwise let $C_{ij}(A)=A$. Applying this map independently to every member can collapse two sets into one, so a family compression must retain cardinality:

$C_{ij}(F)=\\{C_{ij}(A):A\\in F \\text{ and } C_{ij}(A)\\notin F\\}
\\cup \\{A\\in F:C_{ij}(A)\\in F\\}$.

In words, replace $A$ only if its proposed image is absent; if both $A$ and its image already occur, keep both.

**Compression invariants.** If $F\\subseteq \\binom{[n]}{k}$, then $C_{ij}(F)\\subseteq \\binom{[n]}{k}$ and $|C_{ij}(F)|=|F|$.

**Proof.** A changed set loses $j$ and gains $i$, so size is preserved. Partition $F$ into pairs indexed by $S\\subseteq [n]\\setminus \\{i,j\\}$: the possible members $S\\cup \\{i\\}$ and $S\\cup \\{j\\}$. Compression changes occupancy $01$ to $10$ and leaves $00,10,11$ unchanged. Thus every pair contains the same number of family members before and after compression. Sets containing both or neither $i,j$ are fixed. Summing proves cardinality preservation. ∎

Define the potential $w(F)=\\sum_{A\\in F}\\sum_{a\\in A}a$. Every nontrivial $C_{ij}$ strictly decreases $w(F)$ while preserving $|F|$. Consequently, repeatedly applying all left-compressions terminates. The resulting family is **shifted**: if $j\\in A$, $i<j$, and $i\\notin A$, then replacing $j$ by $i$ either stays in the family or collides with a member already there; for a set family this means the replacement is present.

<a id="section-82-example-3-a-complete-compression-ledger"></a>
### Example 3: a complete compression ledger {#section-84-example-3-a-complete-compression-ledger}

Take $F=\\{\\{2,4\\},\\{1,4\\},\\{2,3\\}\\}$. Under $C_12$, the proposed image of $\\{2,4\\}$ is $\\{1,4\\}$, already present, so both remain. The image of $\\{2,3\\}$ is $\\{1,3\\}$, absent, so it moves. Hence

$C_12(F)=\\{\\{2,4\\},\\{1,4\\},\\{1,3\\}\\}$.

The size remains three. The sum-of-labels potential falls from $6+5+5=16$ to $6+5+4=15$. Treating $C_12$ as a pointwise image would incorrectly collapse the first two sets.

<a id="section-90-4-compression-does-not-enlarge-the-lower-shadow"></a>
## 4. Compression does not enlarge the lower shadow {#section-92-4-compression-does-not-enlarge-the-lower-shadow}

The main compatibility between the two instruments is the following.

**Lemma 5.2 (Shadow-compression).** For a uniform family $F$,

$|\\partial C_{ij}(F)|\\le |\\partial F|$.

**Proof.** We prove the stronger inclusion

$\\partial C_{ij}(F)\\subseteq C_{ij}(\\partial F)$.

Take $B\\subset A'$ with $A'\\in C_{ij}(F)$. First suppose $A'$ was created from
$A$ by replacing $j$ with $i$. If $i\\notin B$, then $B\\subseteq A\\setminus \\{j\\}$ and hence
$B\\in \\partial F$. If $i\\in B$, put $D=B-i+j$. Then $D\\subset A$, so
$D\\in \\partial F$, and compression either moves $D$ to $B$ or retains $B$
because it was already present. In both subcases $B\\in C_{ij}(\\partial F)$.

Now suppose $A'\\in F$ survived family compression. Certainly $B\\in \\partial F$.
The only way $B$ could fail to survive compression of the shadow is that
$j\\in B$, $i\\notin B$, and $C_{ij}(B)\\notin \\partial F$. If $i\\in A'$, however,
$C_{ij}(B)\\subset A'$; if $i\\notin A'$, then $A'$ contains $j$ and survival of $A'$
implies $C_{ij}(A')\\in F$, with $C_{ij}(B)\\subset C_{ij}(A')$. Either alternative puts
$C_{ij}(B)$ in $\\partial F$, a contradiction. Thus $B$ belongs to the
compressed shadow in every case. Family compression preserves cardinality,
so $|C_{ij}(\\partial F)|=|\\partial F|$, and the inclusion proves the result. ∎

Iterating compression therefore produces a shifted family of the same size and with no larger lower shadow. This does not say every shifted family has minimum shadow, nor that lexicographic and colexicographic initial segments are interchangeable. Those stronger statements need their own order-specific proofs.

<a id="section-119-5-intersecting-families-and-preservation-under-shifts"></a>
## 5. Intersecting families and preservation under shifts {#section-121-5-intersecting-families-and-preservation-under-shifts}

A family is **intersecting** if every two members meet. It is **$t$-intersecting** if every pair meets in at least $t$ elements.

**Lemma 5.3 (Intersection-preservation).** If $F\\subseteq \\binom{[n]}{k}$ is intersecting, then $C_{ij}(F)$ is intersecting.

**Proof.** Suppose, toward a contradiction, that disjoint $A',B'$ lie in the compressed family. Since $F$ was intersecting, at least one of them was created by compression; say $A'=A-j+i$ for some $A\\in F$, so $i\\in A'$, $j\\notin A'$, and $A\\notin C_{ij}(F)$. Disjointness forces $i\\notin B'$.

If $B'\\in F$, then $A\\cap B'$ can only be $\\{j\\}$, because $A'\\cap B'=\\varnothing$ and $A$ differs from $A'$ only by exchanging $i$ for $j$. Hence $j\\in B'$. But then $C_{ij}(B')=B'-j+i$ is disjoint from $A$, contradicting intersection of members of $F$ if that image belongs to $F$. If it does not belong to $F$, compression would replace $B'$, so $B'$ would not survive in the compressed family. Both cases are impossible.

If $B'$ itself was created, then it contains $i$, contradicting $A'\\cap B'=\\varnothing$. Therefore no disjoint pair exists. ∎

The analogous statement is true for uniform $t$-intersecting families under these shifts, but its proof needs a more careful two-set case analysis. We use only the proved $t=1$ form below. This distinction matters: a transformation safe for ordinary intersection should not be advertised automatically for every strengthened forbidden pattern.

Intersection conditions can also be written as forbidden containment in
complements: $A\\cap B=\\varnothing$ exactly when $A\\subseteq [n]\\setminus B$. This translation connects uniform-intersection
arguments to antichains and shadows, but the ranks change from $k$ to $n-k$.
For $n=2k$, complementation pairs members within the same level. For
$n>2k$, it moves to a different level, so a same-level complementary-pair
count no longer proves the sharp result. The cyclic method supplies the
missing normalization across those ranks.

<a id="section-141-example-4-compressing-an-intersecting-family"></a>
### Example 4: compressing an intersecting family {#section-143-example-4-compressing-an-intersecting-family}

The family $\\{\\{2,3\\},\\{2,4\\},\\{3,4\\}\\}$ is intersecting. Applying $C_12$ moves $\\{2,3\\}$ to $\\{1,3\\}$ and $\\{2,4\\}$ to $\\{1,4\\}$, while $\\{3,4\\}$ stays fixed. The result $\\{\\{1,3\\},\\{1,4\\},\\{3,4\\}\\}$ remains intersecting, although it is not a star. Compression preserves the property; it need not reveal the equality structure in one step.

<a id="section-145-6-the-uniform-intersection-bound-by-cyclic-intervals"></a>
## 6. The uniform intersection bound by cyclic intervals {#section-147-6-the-uniform-intersection-bound-by-cyclic-intervals}

The central intersection theorem has a necessary range hypothesis.

**Theorem 5.4 (Uniform intersection).** If $n\\ge 2k$ and $F\\subseteq \\binom{[n]}{k}$ is intersecting, then

$|F|\\le \\binom{n-1}{k-1}$.

A star, consisting of all $k$-sets through one fixed point, attains equality. If $n<2k$, the entire level is intersecting, so the displayed bound is generally false.

We first prove a cyclic lemma. Place $[n]$ in a cyclic order. A **$k$-interval** is a block of $k$ consecutive positions.

**Lemma 5.5 (Cyclic interval).** When $n\\ge 2k$, an intersecting collection of $k$-intervals in one cyclic order has at most $k$ members.

**Proof.** If the collection is empty there is nothing to prove. Otherwise,
rotate so one chosen interval is
$I_n=\\{n-k+1,\\ldots ,n\\}$, where $I_s$ denotes the interval ending at $s$, with
indices modulo $n$. Any interval meeting $I_n$ has endpoint in

$\\{n-k+1,\\ldots ,n\\}\\cup \\{1,\\ldots ,k-1\\}$.

An interval with endpoint strictly between $k$ and $n-k$ is disjoint from
$I_n$ and so cannot be chosen. After removing $I_n$, pair $I_i$ with
$I_{i+n-k}$ for $1\\le i\\le k-1$. The first is
$\\{n+i-k+1,\\ldots ,n,1,\\ldots ,i\\}$ and the second is
$\\{i+n-2k+1,\\ldots ,i+n-k\\}$; the displayed ranges are disjoint when $n\\ge 2k$
(at equality they partition the complement appropriately). These pairs cover
exactly the remaining $2k-2$ candidate intervals, and an intersecting
collection takes at most one from each pair. It therefore has at most
$1+(k-1)=k$ intervals. ∎

For completeness, the global double count avoids treating cyclic orders as unlabeled. Count pairs $(A,\\sigma)$ where $A\\in F$ and $A$ occupies $k$ consecutive positions in a cyclic permutation $\\sigma$, with rotations identified. A fixed $A$ appears consecutively in $k!(n-k)!$ cyclic permutations: order $A$, order its complement, and choose the gap occupied by the block, with the rotational normalization cancelling that choice exactly in the standard count. A fixed cyclic permutation contains at most $k$ members of $F$ by the lemma. Since there are $(n-1)!$ cyclic permutations,

$|F|k!(n-k)!\\le k(n-1)!$.

Therefore

$|F|\\le k(n-1)!/[k!(n-k)!]=\\binom{n-1}{k-1}$. ∎

<a id="section-184-example-5-why-the-range-cannot-be-dropped"></a>
### Example 5: why the range cannot be dropped {#section-186-example-5-why-the-range-cannot-be-dropped}

For $n=5,k=3$, any two 3-subsets intersect because their union would otherwise contain six elements. Thus all ten triples form an intersecting family. A star has only $\\binom{4}{2}=6$ members. Here $n<2k$, exactly outside the theorem's range.

<a id="section-188-7-cross-intersection-and-complementary-pairs"></a>
## 7. Cross-intersection and complementary pairs {#section-190-7-cross-intersection-and-complementary-pairs}

Families $A\\subseteq \\binom{[n]}{a}$ and $B\\subseteq \\binom{[n]}{b}$ are **cross-intersecting** if every $A\\in A$ meets every $B\\in B$. The simplest exact case is $a+b=n$ with both families on complementary levels.

If $A\\in A$, then its complement cannot belong to $B$. Consequently the complement map gives

$|A|+|B|\\le \\binom{n}{a}$

when $b=n-a$ and both families are indexed against the same set of complementary pairs. This is a direct forbidden-pair certificate, not an application of the uniform intersection theorem. For other values of $a,b$, sharp cross-intersection bounds require additional hypotheses.

<a id="section-198-example-6-complementary-obstruction"></a>
### Example 6: complementary obstruction {#section-200-example-6-complementary-obstruction}

Let $n=6$, $a=2$, and $b=4$. If $A$ is all pairs through point $1$, it has five members. The family $B$ may contain no complement of such a pair. Removing those five 4-sets from all fifteen leaves at most ten candidates, and taking all ten gives equality $|A|+|B|=15$.

<a id="section-202-8-links-deletions-and-recursive-ledgers"></a>
## 8. Links, deletions, and recursive ledgers {#section-204-8-links-deletions-and-recursive-ledgers}

Fix an element $x$. The **link** and **deletion trace** of a uniform family are

$F(x)=\\{A\\setminus \\{x\\}:A\\in F, x\\in A\\}$,

$F(-x)=\\{A\\in F:x\\notin A\\}$.

They lie in $\\binom{[n]\\setminus \\{x\\}}{k-1}$ and $\\binom{[n]\\setminus \\{x\\}}{k}$, respectively, and

$|F|=|F(x)|+|F(-x)|$.

This identity is the basic induction ledger. It becomes useful only when the forbidden condition descends correctly. If $F$ is intersecting, then $F(-x)$ is intersecting. The link $F(x)$ need not be intersecting, because the removed common element may have been the only intersection. What is true is cross-intersection: every member of $F(x)$ meets every member of $F(-x)$. Indeed, if $A\\setminus \\{x\\}$ in the link were disjoint from $B\\in F(-x)$, then the original $A$ would be disjoint from $B$.

For a shifted intersecting family, this decomposition carries extra information. If $A\\in F(x)$ and $i<x$ is absent from $A$, shiftedness places $A\\cup \\{i\\}$ in the deletion trace after the appropriate relabeling. Such containment relations are the engine of many inductive proofs of uniform intersection bounds. They must be derived from the precise shift convention; they are not consequences of intersection alone.

<a id="section-218-example-7-a-link-that-loses-intersection"></a>
### Example 7: a link that loses intersection {#section-220-example-7-a-link-that-loses-intersection}

Let $F=\\{\\{1,2,3\\},\\{1,4,5\\}\\}$. The family is intersecting because both members contain $1$. Its link at $1$ is $\\{\\{2,3\\},\\{4,5\\}\\}$, which is disjoint as a two-member family. Thus “the link of an intersecting family is intersecting” is false. The deletion trace is empty, so the correct cross-intersection statement is vacuous.

<a id="section-222-9-the-set-pairs-inequality"></a>
## 9. The set-pairs inequality {#section-224-9-the-set-pairs-inequality}

Compression and shadows are not the only extremal certificates. The following permutation argument controls many systems of witnesses and obstructions.

**Set-pairs inequality, uniform form.** Let $(A_i,B_i)$ for $1\\le i\\le m$ satisfy

$|A_i|=a$, $|B_i|=b$, $A_i\\cap B_i=\\varnothing$,

and $A_i\\cap B_j\\ne \\varnothing$ whenever $i\\ne j$. Then

$m\\le \\binom{a+b}{a}$.

**Proof.** Take a uniformly random permutation of the union of all sets. Let $E_i$ be the event that every member of $A_i$ appears before every member of $B_i$. Relative order outside $A_i\\cup B_i$ is irrelevant, and among the $\\binom{a+b}{a}$ interleavings of its two labeled groups exactly one puts the entire $A_i$ group first. Thus

$P(E_i)=1/\\binom{a+b}{a}$.

The events are pairwise disjoint. If both $E_i$ and $E_j$ occurred, choose
$x\\in A_i\\cap B_j$ and $y\\in A_j\\cap B_i$. Event $E_i$ places $x$ before $y$, while
$E_j$ places $y$ before $x$, a contradiction. Therefore

$m/\\binom{a+b}{a}=\\sum_i P(E_i)\\le 1$,

which proves the bound. ∎

The same proof with varying sizes gives

$\\sum_i 1/\\binom{|A_i|+|B_i|}{|A_i|}\\le 1$

under the same cross-intersection hypotheses. This resembles the normalized-chain inequality because both arguments assign a probability to a “first group before second group” event and prove those events disjoint. The hypotheses, however, are different: the chain inequality concerns containment along chains, while the set-pairs theorem concerns paired disjointness certificates.

<a id="section-252-example-8-equality-set-pairs"></a>
### Example 8: equality set pairs {#section-254-example-8-equality-set-pairs}

Let the ground set have $a+b$ elements and index pairs by all $a$-subsets:
$A_S=S$, $B_S=[a+b]\\setminus S$. Each own pair is disjoint. For distinct $S,T$ of the same size, $S\\setminus T$ is nonempty and lies in $A_S\\cap B_T$. Thus the hypotheses hold for all $\\binom{a+b}{a}$ pairs and equality is attained.

<a id="section-257-10-what-compression-proves-and-what-it-does-not"></a>
## 10. What compression proves—and what it does not {#section-259-10-what-compression-proves-and-what-it-does-not}

Compression is a reduction method. Once a property is proved invariant, one may study shifted extremizers. A shifted family often exposes a distinguished small element, nested links, or an induction on whether $n$ is present. But three logical steps remain separate:

1. prove the objective is preserved or monotone;
2. prove the forbidden configuration is preserved;
3. classify or bound the resulting shifted families.

A compression proof can fail at any one of these steps. Hypergraph properties involving induced configurations, signs, colors, or nonuniform intersection thresholds may not survive the ordinary $C_{ij}$ operation. The potential argument proves termination, not uniqueness: different compression orders can yield different shifted families.

There is also a difference between an extremal theorem and a **stability
theorem**. An extremal theorem identifies the largest possible cardinality. A
stability theorem says that a family whose cardinality is close to the maximum
must be structurally close to an extremizer, under a stated distance such as
symmetric difference. Compression can help by concentrating a family, but a
small change in the potential $w(F)$ is not itself a small symmetric
difference, and equality of potentials does not identify a family. A genuine
stability proof needs a quantitative ledger connecting lost members to the
forbidden configuration or to distance from a star.

Likewise, equality in the normalized shadow inequality forces every shadow
member to use all $n-k+1$ possible upper incidences inside $F$, because that is
the only inequality in its double count. For a nonempty family this closure
condition propagates across the connected inclusion graph and yields the whole
level. This explains why the local bound is usually strict for a proper
nonempty subfamily, even though sharper shadow theorems have many more nuanced
equality patterns.

<a id="section-285-11-common-errors-and-diagnostic-counterexamples"></a>
## 11. Common errors and diagnostic counterexamples {#section-287-11-common-errors-and-diagnostic-counterexamples}

1. **Compressing pointwise.** Images can collide. Family compression retains both members of an occupied pair.
2. **Forgetting the range $n\\ge 2k$.** When $n<2k$, the full level is intersecting.
3. **Calling the normalized shadow bound exact.** It is a universal inequality, not the stronger exact colex-shadow theorem.
4. **Assuming all shifts preserve every property.** We proved uniformity, cardinality, shadows, and ordinary intersection only.
5. **Confusing lex and colex.** Their initial segments solve different extremal tasks; the order must be stated.
6. **Counting cyclic orders as linear permutations.** Rotations create a factor unless the convention is fixed.
7. **Inferring uniqueness from equality in a bound.** Equality classification often needs a separate argument and can have small-parameter exceptions.
8. **Using a matroid rank analogy as an axiom.** An arbitrary set family has no augmentation or submodular rank contract.
9. **Assuming links inherit intersection.** Removing the distinguished point can destroy the only common element.
10. **Dropping a cross-condition in set pairs.** Own-pair disjointness alone places no useful bound on the number of repeated pairs.

<a id="section-298-12-solved-exercises"></a>
## 12. Solved exercises {#section-300-12-solved-exercises}

<a id="section-300-exercise-1-audit-a-lower-shadow"></a>
### Exercise 1: audit a lower shadow {#section-302-exercise-1-audit-a-lower-shadow}
<a id="extremal-set-compression-ex-1"></a>

Let $F=\\{\\{1,2,3\\},\\{1,2,4\\},\\{1,3,4\\}\\}$. Find $\\partial F$ and verify the normalized shadow inequality.

<details>
<summary>Hint 1</summary>

**Hint.** List the pairs contained in each triple, then remove repetitions from the shadow list.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Substitute $n=4,k=3,|F|=3$ into the local shadow inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The pairs below the three triples are

$\\{12,13,23\\}\\cup \\{12,14,24\\}\\cup \\{13,14,34\\}$,

so $\\partial F=\\{12,13,14,23,24,34\\}$ and has size six. Here $n=4,k=3$, and the theorem requires $|\\partial F|\\ge 3|F|/(4-3+1)=9/2$. Since six is at least $4.5$, it holds. The integer conclusion is at least five, still weaker than the exact six.

</details>

<a id="section-330-exercise-2-prove-termination-quantitatively"></a>
### Exercise 2: prove termination quantitatively {#section-332-exercise-2-prove-termination-quantitatively}
<a id="extremal-set-compression-ex-2"></a>

Show that a sequence of nontrivial left-compressions on a $k$-uniform family terminates after finitely many steps.

<details>
<summary>Hint 1</summary>

**Hint.** Find an integer potential that decreases whenever a set truly moves left.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum all element labels over all members of the family; every nontrivial shift decreases it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $w(F)=\\sum_{A\\in F}\\sum_{a\\in A}a$. A nontrivial $C_{ij}$ replaces at least one $j$ by $i<j$ and changes no set in the opposite direction, so $w$ decreases by at least one. It is a nonnegative integer, bounded below by $|F|(1+\\ldots +k)$. Therefore only finitely many nontrivial steps are possible.

</details>

<a id="section-356-exercise-3-a-shift-with-collision"></a>
### Exercise 3: a shift with collision {#section-358-exercise-3-a-shift-with-collision}
<a id="extremal-set-compression-ex-3"></a>

Apply $C_13$ to $F=\\{\\{1,2\\},\\{2,3\\},\\{3,4\\}\\}$.

<details>
<summary>Hint 1</summary>

**Hint.** Test each proposed image against the original family before replacing a set.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The image of $23$ is already present, whereas the image of $34$ is absent.

</details>

<details>
<summary>Solution</summary>

**Solution.** The set $\\{2,3\\}$ proposes $\\{1,2\\}$, already present, so both remain. The set $\\{3,4\\}$ proposes $\\{1,4\\}$, absent, so it moves. The result is $\\{\\{1,2\\},\\{2,3\\},\\{1,4\\}\\}$. It has three members; a pointwise image followed by deduplication would have incorrectly lost $\\{2,3\\}$.

</details>

<a id="section-382-exercise-4-equality-in-the-uniform-intersection-bound"></a>
### Exercise 4: equality in the uniform intersection bound {#section-384-exercise-4-equality-in-the-uniform-intersection-bound}
<a id="extremal-set-compression-ex-4"></a>

For $n=8,k=3$, compute the uniform intersection upper bound and exhibit a family attaining it.

<details>
<summary>Hint 1</summary>

**Hint.** First verify the range $n\\ge2k$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The star at one fixed point has $\\binom{7}{2}$ triples.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $8\\ge 6$, the theorem applies and gives $\\binom{7}{2}=21$. All triples containing point $1$ form a star of exactly $\\binom{7}{2}=21$ members, and every two meet at point $1$.

</details>

<a id="section-408-exercise-5-the-endpoint-n-2k"></a>
### Exercise 5: the endpoint $n=2k$ {#section-410-exercise-5-the-endpoint-n-2k}
<a id="extremal-set-compression-ex-5"></a>

Explain the uniform intersection bound by complementary pairs when $n=2k$.

<details>
<summary>Hint 1</summary>

**Hint.** Complementation maps every $k$-set to another $k$-set at this endpoint.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An intersecting family can choose at most one of each pair of disjoint complements.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every $k$-set has a distinct complementary $k$-set, and the two are disjoint. An intersecting family contains at most one member of each complementary pair. There are $\\binom{2k}{k}/2$ pairs. Since $\\binom{2k-1}{k-1}=\\binom{2k}{k}/2$, this is exactly the uniform intersection bound.

</details>

<a id="section-434-exercise-6-normalized-chain-weight-for-two-levels"></a>
### Exercise 6: normalized-chain weight for two levels {#section-436-exercise-6-normalized-chain-weight-for-two-levels}
<a id="extremal-set-compression-ex-6"></a>

Suppose an antichain in $P([7])$ has 14 three-element members and 7 four-element members. Does the normalized-chain inequality alone rule it out?

<details>
<summary>Hint 1</summary>

**Hint.** The normalized-chain inequality weights each member by the reciprocal of its level size.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both middle levels have size thirty-five; compare the total weight to one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its normalized-chain weight is $14/\\binom{7}{3}+7/\\binom{7}{4}=14/35+7/35=21/35=3/5$. This is at most one, so the inequality does not rule it out. The inequality is necessary, not sufficient: one must still decide whether those particular members can avoid containment.

</details>

<a id="section-460-exercise-7-cross-intersection-at-complementary-ranks"></a>
### Exercise 7: cross-intersection at complementary ranks {#section-462-exercise-7-cross-intersection-at-complementary-ranks}
<a id="extremal-set-compression-ex-7"></a>

Let $A\\subseteq \\binom{[7]}{2}$ and $B\\subseteq \\binom{[7]}{5}$ be cross-intersecting. Prove $|A|+|B|\\le 21$.

<details>
<summary>Hint 1</summary>

**Hint.** Complement each member of the two-set family.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Those complements are forbidden members of the five-set family and belong to a twenty-one-element level.

</details>

<details>
<summary>Solution</summary>

**Solution.** Complementation is a bijection from the 2-subsets to the 5-subsets. For every $A\\in A$, its complement is disjoint from $A$ and therefore cannot lie in $B$. Thus the complement image of $A$ and $B$ are disjoint subfamilies of the 21 five-subsets. Hence $|A|+|B|\\le 21$.

</details>

<a id="section-486-exercise-8-shadow-equality-for-a-whole-level"></a>
### Exercise 8: shadow equality for a whole level {#section-488-exercise-8-shadow-equality-for-a-whole-level}
<a id="extremal-set-compression-ex-8"></a>

Take $F=\\binom{[n]}{k}$. Verify equality in the local shadow theorem.

<details>
<summary>Hint 1</summary>

**Hint.** Determine the entire shadow of a complete uniform level.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count incidences between the $k$- and $(k-1)$-levels in both directions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every $(k-1)$-set extends to a $k$-set, so $\\partial F=\\binom{[n]}{k-1}$. Both normalized densities are one. Equivalently, $k \\binom{n}{k}=(n-k+1)\\binom{n}{k-1}$, so the incidence count is exact on both sides.

</details>

<a id="section-512-exercise-9-diagnose-an-invalid-generalization"></a>
### Exercise 9: diagnose an invalid generalization {#section-514-exercise-9-diagnose-an-invalid-generalization}
<a id="extremal-set-compression-ex-9"></a>

A claim says every intersecting subfamily of $\\binom{[9]}{5}$ has at most $\\binom{8}{4}$ members. Give a decisive diagnosis.

<details>
<summary>Hint 1</summary>

**Hint.** Check the range before applying the stated theorem.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Two five-sets on nine points cannot be disjoint, so the whole level is a counterexample.

</details>

<details>
<summary>Solution</summary>

**Solution.** The uniform intersection theorem's hypothesis fails because $9<2\\cdot 5$. Indeed, the entire level is intersecting: two disjoint 5-sets would require ten points. Its size $\\binom{9}{5}=126$ exceeds $\\binom{8}{4}=70$. The claim is false, not merely unproved.

</details>

<a id="section-538-exercise-10-link-and-deletion-arithmetic"></a>
### Exercise 10: link and deletion arithmetic {#section-540-exercise-10-link-and-deletion-arithmetic}
<a id="extremal-set-compression-ex-10"></a>

Let $F$ be all 3-subsets of $[6]$ containing $1$ or $2$. Find the sizes of the link and deletion trace at $1$.

<details>
<summary>Hint 1</summary>

**Hint.** Separate members containing one from members avoiding one.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In the link choose any pair from the other five points; in the deletion trace the triple must contain two.

</details>

<details>
<summary>Solution</summary>

**Solution.** The link contains every 2-subset of $\\{2,3,4,5,6\\}$, so it has $\\binom{5}{2}=10$ members. The deletion trace consists of triples avoiding $1$ but containing $2$; choose the other two points from $\\{3,4,5,6\\}$, giving $\\binom{4}{2}=6$. Hence $|F|=10+6=16$, agreeing with inclusion--exclusion: two stars have $10+10-4=16$ members.

</details>

<a id="section-564-exercise-11-apply-the-set-pairs-theorem"></a>
### Exercise 11: apply the set-pairs theorem {#section-566-exercise-11-apply-the-set-pairs-theorem}
<a id="extremal-set-compression-ex-11"></a>

Suppose ten pairs $(A_i,B_i)$ satisfy the set-pairs hypotheses with $|A_i|=2$ and $|B_i|=2$. Show that this is impossible.

<details>
<summary>Hint 1</summary>

**Hint.** Insert the common sizes into the set-pairs upper bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The maximum permitted pair count is $\\binom42$, independent of an unspecified ambient ground-set size.

</details>

<details>
<summary>Solution</summary>

**Solution.** The theorem gives at most $\\binom{4}{2}=6$ pairs. Since ten exceeds six, no such system exists. Notice that merely counting possible 2-subsets on an unspecified ground set would give no bound; the cross-intersection hypothesis is doing the work.

</details>

<a id="section-590-exercise-12-verify-equality-construction"></a>
### Exercise 12: verify equality construction {#section-592-exercise-12-verify-equality-construction}
<a id="extremal-set-compression-ex-12"></a>

For $a=1,b=3$, write the equality construction in the set-pairs theorem explicitly.

<details>
<summary>Hint 1</summary>

**Hint.** Use every singleton of a four-element ground set as $A_i$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Let $B_i$ be its complement and verify own-pair disjointness and cross-pair intersection separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** On ground set $[4]$, take $A_i=\\{i\\}$ and $B_i=[4]\\setminus \\{i\\}$ for $i=1,2,3,4$. Each own pair is disjoint. If $i\\ne j$, then $i\\in B_j$, so $A_i\\cap B_j=\\{i\\}$. There are four pairs, equal to $\\binom{4}{1}$.

</details>

<a id="section-616-connections-and-chapter-summary"></a>
## Connections and chapter summary {#section-618-connections-and-chapter-summary}

Shadows are boundaries between ranks of the subset lattice; normalized incidence counting gives a robust local inequality. Compression preserves uniform-family cardinality, terminates under an integer potential, does not enlarge the lower shadow, and preserves ordinary pairwise intersection. These properties let extremal arguments replace arbitrary families by shifted ones, but only after each invariant is proved. The normalized-chain inequality counts maximal chains, while the cyclic method proves the uniform intersection bound in its exact range $n\\ge 2k$. Later design theory uses the same discipline: incidence parameters produce equations, while representability requires a separate field-sensitive audit.

<a id="section-620-source-and-verification-note"></a>
## Sources {#section-622-source-and-verification-note}

Further reading includes Peter Frankl and Norihide Tokushige, *Extremal Problems for Finite Sets* (AMS, 2018), and Stasys Jukna, *Extremal Combinatorics*, 2nd ed. (2011), as modern routes for the LYM and compression claims. This guide does not specify a theorem/page locator matching each preservation property, so none is asserted.


<a id="section-625-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-627-sources-for-the-expanded-teaching}

The original Frankl–Tokushige and Jukna reference routes remain beside the compression discussion. The added staged hints and exercise explanations are original exposition and assert no new theorem or page locator.

<a id="section-629-summary"></a>
## Summary {#section-631-summary}

Shadows and chain counts compare uniform levels. Compression preserves size directly, while shadow and intersection preservation require their own arguments. Cyclic intervals prove the uniform intersection bound in its precise range; complementary pairs expose its endpoint behavior. Set-pair inequalities add another incidence tool. The designs chapter next turns uniform incidence requirements into arithmetic and matrix constraints.

`;export{e as default};