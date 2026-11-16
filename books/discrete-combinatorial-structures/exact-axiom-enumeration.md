
# Exact Axiom Enumeration and Counterexample Certificates {#section-1-exact-axiom-enumeration-and-counterexample-certificates}

A finite search can do more than suggest a theorem. If its universe is stated, its arithmetic is exact, and its stopping argument is explicit, the search is a proof of a bounded statement. If a proposed axiom fails, the program should not merely return `false`; it should return the sets that violate it. Those sets form a certificate that a reader can check without trusting the implementation.

This chapter develops that proof-producing viewpoint for finite independence systems and matroids. We encode set families without floating-point arithmetic, recognize several cryptomorphic axiom systems, quotient objects by relabeling, and extract counterexamples to heredity, augmentation, rank submodularity, duality claims, and greedy optimality. The emphasis is not speed at arbitrary scale. It is a transparent contract for exhaustive computations on ground sets small enough to audit.

<a id="section-5-prerequisites-scope-and-notation"></a>
## Prerequisites, scope, and notation {#section-7-prerequisites-scope-and-notation}

We assume the independence, basis, rank, circuit, duality, and greedy characterizations of finite matroids. Familiarity with permutations and elementary algorithms is useful. The intended computational bound is normally $|E|\le 8$; some procedures become expensive earlier.

Fix the labeled ground set $E=\{0,\ldots ,n-1\}$. A subset $X\subseteq E$ is encoded by the integer

$\operatorname{mask}(X)=\sum _{e\in X} 2^e$.

Bitwise inclusion is exact: $X\subseteq Y$ precisely when $\operatorname{mask}(X) \mathbin{\&} \operatorname{mask}(Y)=\operatorname{mask}(X)$. The population count of a mask is its cardinality. A **set family** is a collection of distinct masks between $0$ and $2^n-1$. We distinguish three tasks:

1. **recognition:** does one supplied family satisfy stated axioms?
2. **labeled enumeration:** which valid families occur on this fixed labeled set?
3. **isomorphism classification:** which families remain after relabelings are identified?

Confusing the last two loses information. Two isomorphic matroids can be distinct labeled outputs.

<a id="section-21-1-what-makes-a-bounded-search-a-proof"></a>
## 1. What makes a bounded search a proof? {#section-23-1-what-makes-a-bounded-search-a-proof}

A search establishes a universal assertion over a finite domain only when four obligations are met.

**Domain obligation.** Specify every object considered. “Small matroids” is not a domain; “all set families on $\{0,1,2,3\}$” is.

**Coverage obligation.** Explain why every object in the domain is generated. Iterating over all $2^{2^n}$ families plainly covers all families, though it becomes infeasible quickly. A pruned generator needs a proof that its pruning cannot remove a desired object.

**Predicate obligation.** Show that the implemented test is equivalent to the mathematical property. Testing only equal-size exchange is not automatically the same as testing augmentation unless heredity and the correct basis hypotheses are already established.

**Arithmetic obligation.** Use exact equality for discrete objects. Integer masks, rational arithmetic, and finite-field elimination are suitable. A floating tolerance cannot certify whether an exact determinant is zero.

Finally, a computation should record the code version or algorithm, bounds, input ordering, counts before and after filtering, and a digest or reproducible listing of outputs. Determinism is part of auditability, not a mathematical axiom.

<a id="section-35-2-recognizing-an-independence-system"></a>
## 2. Recognizing an independence system {#section-37-2-recognizing-an-independence-system}

Let $F$ be a supplied family of subsets of $E$. It is the independent-set family of a matroid exactly when:

- the empty mask belongs to $F$;
- whenever $Y\in F$ and $X\subseteq Y$, then $X\in F$;
- whenever $I,J\in F$ and $|I|<|J|$, some $e\in J\setminus I$ has $I\cup \{e\}\in F$.

These conditions directly yield three certificate types.

- Missing-empty certificate: the single assertion $\varnothing \notin F$.
- Heredity certificate: masks $X\subset Y$ with $Y\in F$ and $X\notin F$.
- Augmentation certificate: $I,J\in F$, $|I|<|J|$, and the complete list showing $I\cup \{e\}\notin F$ for every $e\in J\setminus I$.

For heredity it suffices to check immediate deletions. Indeed, if every $Y\in F$ remains in $F$ after deleting one element, repeated deletion reaches every subset. This reduces the check from all submasks to at most $n|F|$ membership queries.

<a id="section-51-recognition-pseudocode"></a>
### Recognition pseudocode {#section-53-recognition-pseudocode}

The following dependency-free pseudocode assumes $F$ is a set of integer masks.

```text
recognize(n, F):
    if 0 not in F: return Reject("missing-empty", [])
    for Y in increasing F:
        for e in elements(Y):
            X = Y without e
            if X not in F:
                return Reject("heredity", [X, Y])
    for I in increasing F:
        for J in increasing F:
            if size(I) < size(J):
                candidates = elements(J minus I)
                if every (I union {e}) is absent from F:
                    return Reject("augmentation", [I, J, candidates])
    return Accept
```

The loops are finite and cover every ordered pair in $F\times F$. The immediate-deletion lemma proves the heredity loop equivalent to full heredity. The final loop is the augmentation axiom verbatim. Therefore `Accept` is a proof relative to the displayed finite input; `Reject` carries a directly checkable counterexample.

<a id="section-74-3-antichains-are-a-complete-compressed-encoding"></a>
## 3. Antichains are a complete compressed encoding {#section-76-3-antichains-are-a-complete-compressed-encoding}

A hereditary family is determined by its inclusion-maximal members. Those members form an **antichain**: no one contains another. Conversely, any antichain $A$ determines the down-set

$\operatorname{down}(A)=\{X\subseteq E : X\subseteq B \text{ for some } B\in A\}$.

Thus enumerating hereditary families is equivalent to enumerating antichains of the Boolean lattice. This avoids proposing arbitrary families and rejecting almost all of them for nonheredity.

The compression is lossless. Every member of a finite down-set lies below a maximal member, while the maximal members can be recovered uniquely from the down-set. This proves a bijection between antichains and hereditary families.

For a matroid, the maximal independent sets are its bases, so an antichain $B$ encodes a matroid exactly when it is nonempty and satisfies basis exchange:

for all $B_1,B_2\in B$ and $x\in B_1\setminus B_2$, some $y\in B_2\setminus B_1$ makes $(B_1-\{x\})\cup \{y\}\in B$.

Equal cardinality is a useful early filter but not an additional logical requirement. The displayed exchange axiom already forces it for a nonempty finite family. If $|B_1|>|B_2|$, repeatedly exchanging elements of $B_1-B_2$ for elements of $B_2-B_1$ would preserve $|B_1|$ while increasing its intersection with $B_2$; eventually there would still be an element of the first difference but none in the second, contradicting exchange. Interchanging the roles rules out $|B_2|>|B_1|$. An implementation may therefore reject unequal candidate sizes immediately, provided its proof records this consequence of exchange.

<a id="section-90-worked-example-one-rejected-antichain"></a>
### Worked example: one rejected antichain {#section-92-worked-example-one-rejected-antichain}

On $E=\{0,1,2,3\}$, take

$B=\{\{0,1\},\{2,3\}\}$.

The family is an equicardinal antichain. Choose $B_1=\{0,1\}$, $B_2=\{2,3\}$, and $x=0$. The two candidates are $\{1,2\}$ and $\{1,3\}$, neither in $B$. Therefore

$(B_1,B_2,x,\{2,3\})$

is a basis-exchange rejection certificate. Expanding downward would also yield an augmentation failure: independent $\{0\}$ is smaller than $\{2,3\}$, but neither $\{0,2\}$ nor $\{0,3\}$ is independent.

<a id="section-102-4-enumerating-without-losing-completeness"></a>
## 4. Enumerating without losing completeness {#section-104-4-enumerating-without-losing-completeness}

The most literal enumerator tries all families, requiring $2^{2^n}$ candidates. The antichain formulation is much smaller but still grows rapidly. A safe recursive scheme scans subsets in a fixed order and maintains an antichain $A$. For the next subset $S$, it branches:

- exclude $S$;
- include $S$ only if it is incomparable with every current member of $A$.

Every antichain has a unique include/exclude decision at each scanned subset, so this recursion generates every antichain exactly once. Filtering its output by nonemptiness, equicardinality, and basis exchange enumerates every matroid basis family exactly once as a labeled family. Nonemptiness matters because the empty antichain would otherwise satisfy the other two tests vacuously but is not a basis family.

More aggressive pruning requires an invariant. For example, after the desired rank $r$ is fixed, scanning only $r$-subsets is safe because a matroid basis family is an antichain consisting entirely of $r$-sets. Branching over subfamilies of $\binom{E}{r}$ and testing basis exchange covers every rank-$r$ matroid. It does not enumerate matroids of unknown rank unless the outer loop includes every $r=0,\ldots ,n$.

Incremental exchange pruning is one-sided. Once two already included candidates violate basis exchange and no unscanned exchange candidate could repair the violation, the branch may be cut. Before that point, failure among the currently included bases need not be permanent: a required exchanged basis might be included later. A correct implementation records which witnesses remain repairable by unscanned candidates.

<a id="section-115-5-canonicalization-under-relabeling"></a>
## 5. Canonicalization under relabeling {#section-117-5-canonicalization-under-relabeling}

A permutation $\pi$ of $E$ acts on a subset by $\pi (X)=\{\pi (e):e\in X\}$ and on a family elementwise. Two labeled families $F,G$ are **isomorphic** when $G=\pi (F)$ for some permutation.

Choose a deterministic serialization: prefix the ground-set size $n$, then sort the integer masks increasingly and join their fixed-width binary strings. The prefix prevents, for example, an all-loop object on one ground set from colliding with an all-loop object on another size. Define

$\operatorname{canon}(F)=\min_{\mathrm{lex}} \{\operatorname{serialize}(\pi (F)) : \pi \in S_n\}$.

Because $S_n$ is finite, the minimum exists.

**Theorem 18.1 (Canonical-form).** $\operatorname{canon}(F)=\operatorname{canon}(G)$ if and only if $F$ and $G$ are isomorphic.

**Proof.** If $G=σ(F)$, then $\{\pi (G):\pi \in S_n\}=\{\pi σ(F):\pi \in S_n\}$ is the same orbit as the set of relabelings of $F$, so the minima agree. Conversely, equality of minima gives permutations $\pi ,τ$ with $\pi (F)=τ(G)$. Hence $G=τ^{-1}\pi (F)$, an isomorphism. ∎

This factorial method is appropriate only at bounded $n$. It is nevertheless valuable as a reference oracle for testing faster graph-based canonicalizers. A canonical string classifies an orbit; it does not preserve the original labeling. Store both the labeled object and its canonical representative when labels carry meaning.

The **automorphism group** of $F$ is $\{\pi \in S_n:\pi (F)=F\}$. Orbit-stabilizer gives

$\text{number of distinct labelings of the isomorphism type} = n!/|\operatorname{Aut}(F)|$.

This identity is a useful enumeration checksum: summing orbit sizes over canonical representatives must equal the labeled count.

<a id="section-137-worked-example-all-matroids-on-three-elements"></a>
### Worked example: all matroids on three elements {#section-139-worked-example-all-matroids-on-three-elements}

There are eight isomorphism types and sixteen labeled matroids on a three-element ground set. Here is an exact derivation, not a database lookup.

Ranks zero and three contribute one matroid each. A rank-one matroid is determined by its nonempty set $N$ of nonloops: every singleton in $N$ is a basis, and elements outside $N$ are loops. Up to relabeling, $|N|$ can be $1,2,3$, giving three types. Labeled, the choices contribute

$\binom{3}{1}+\binom{3}{2}+\binom{3}{3}=7$.

Duality bijects rank-one and rank-two matroids, so rank two contributes another three types and seven labeled objects. Totals are therefore $1+3+3+1=8$ types and $1+7+7+1=16$ labeled objects. A program reporting different totals has exposed a bug in generation, exchange testing, canonicalization, or counting.

<a id="section-147-6-independent-recognition-through-rank-and-circuits"></a>
## 6. Independent recognition through rank and circuits {#section-149-6-independent-recognition-through-rank-and-circuits}

One representation should be checked against another. From an accepted independent family $I$, compute

$r(X)=\max\{|J|:J\subseteq X \text{ and } J\in I\}$.

Exact subset enumeration finds the maximum. A rank-table checker then verifies:

1. $0\le r(X)\le |X|$;
2. $X\subseteq Y$ implies $r(X)\le r(Y)$;
3. $r(X\cup Y)+r(X\cap Y)\le r(X)+r(Y)$.

These are the finite matroid rank axioms. Conversely, an integer table satisfying them defines independent sets by $r(X)=|X|$. Thus agreement between the direct independence test and rank recognition is a strong implementation cross-check, although two implementations sharing the same bug are still possible.

Circuits are the inclusion-minimal masks absent from $I$. A candidate $C$ is a circuit exactly when $C\notin I$ and every one-element deletion belongs to $I$; heredity makes immediate deletions sufficient. The circuit family should pass elimination: for distinct circuits $C_1,C_2$ and $e\in C_1\cap C_2$, some circuit lies in $(C_1\cup C_2)-\{e\}$.

<a id="section-163-mini-audit-on-a-triangle"></a>
### Mini-audit on a triangle {#section-165-mini-audit-on-a-triangle}

**Worked example (Compatible triangle-matroid certificates).**

Let $I$ contain all subsets of $\{0,1,2\}$ except the full set. Direct recognition accepts. Its rank table is $r(X)=\min(|X|,2)$, which is monotone and submodular. The sole circuit is $\{0,1,2\}$, so circuit elimination has no pair of distinct circuits to test. Its bases are the three two-element subsets. Canonicalization is unchanged by every permutation, so $|Aut|=6$, orbit size $3!/6=1$. Five views give compatible answers.

<a id="section-169-7-greedy-failure-from-an-augmentation-certificate"></a>
## 7. Greedy failure from an augmentation certificate {#section-171-7-greedy-failure-from-an-augmentation-certificate}

The augmentation axiom has an optimization meaning. Suppose a hereditary system has independent $I,J$ with $|I|<|J|$ and no $e\in J\setminus I$ augments $I$. Choose a rational $\varepsilon >0$ satisfying

$\varepsilon |I\setminus J| < |J|-|I|$.

Give elements of $I$ weight $1+\varepsilon$, elements of $J\setminus I$ weight $1$, and all other elements weight $0$. Process the elements of $I$ first, then $J\setminus I$, then the rest, respecting nonincreasing weight.

Greedy accepts every element of $I$, since all prefixes of $I$ are independent. It rejects every element of $J\setminus I$ by the augmentation failure; its positive-weight total is $|I|(1+\varepsilon )$. The feasible set $J$ has weight

$|I\cap J|(1+\varepsilon )+|J\setminus I|$.

Subtracting the greedy positive total gives

$|J|-|I|-\varepsilon |I\setminus J|>0$.

Therefore $J$ is strictly better. The tuple $(I,J,\varepsilon ,ordered weights)$ is a rational certificate that greedy is not universally correct for this hereditary system. Zero-weight elements accepted later do not alter the inequality.

This construction is preferable to reporting only “greedy failed on seed 417.” The witness exposes the exact axiom failure that causes the optimization failure.

<a id="section-189-8-deletion-contraction-and-dual-cross-checks"></a>
## 8. Deletion, contraction, and dual cross-checks {#section-191-8-deletion-contraction-and-dual-cross-checks}

For a matroid rank table on $E$, deletion of $e$ restricts the table to sets avoiding $e$. Contraction uses

$r_{M/e}(X)=r_M(X\cup \{e\})-r_M(\{e\})$

for $X\subseteq E-\{e\}$. This handles loops because $r(\{e\})=0$. A basis implementation may instead form $\{B-\{e\}: B basis of M \text{ and } e\in B\}$ for a nonloop and retain its inclusion-maximal distinct sets. The two constructions should agree.

Dual rank is

$r_{M^{*}}(X)=|X|-r_M(E)+r_M(E-X)$.

An exact audit verifies $(M^{*})^{*}=M$, the complementary-basis rule, and the deletion–contraction identities $(M\setminus e)^{*}=M^{*}/e$ and $(M/e)^{*}=M^{*}\setminus e$. Each equality is equality of labeled families, so no canonicalization is needed. If comparison is only up to isomorphism, that relaxation must be stated.

These identities do not replace recognition. Applying a formula to an invalid rank table can produce another table of integers while proving nothing about matroids. Validate the input axioms first.

<a id="section-205-9-counterexample-minimization"></a>
## 9. Counterexample minimization {#section-207-9-counterexample-minimization}

A valid certificate can still be unreadably large. Minimize it without weakening it.

For a failed universal claim on a structure $M$, try deletions and contractions in a deterministic order. Retain a minor only if the same precisely stated claim still fails and its certificate rechecks. Repeat until no single minor preserves failure. The result is **one-step-minimal relative to this reduction procedure**. For an arbitrary property, a more distant minor could fail after an intermediate minor passes. Genuine minor-minimality therefore requires checking every proper minor, or proving that the passing class is minor-closed so that the one-step checks propagate downward. None of these conditions by itself proves uniqueness or a finite excluded-minor characterization.

For a failed rank inequality, report the actual sets $X,Y$ and the four integer ranks. For circuit elimination, report $C_1,C_2,e$ and certify by exhaustive listing that no circuit lies in the required difference. For a false isomorphism claim, a mismatch of canonical forms rejects isomorphism only because all $n!$ permutations were covered; a faster heuristic hash mismatch or match needs a separately justified contract.

<a id="section-213-worked-certificate"></a>
### Worked certificate {#section-215-worked-certificate}

Take the hereditary family generated by maximal sets $\{0,1\}$ and $\{2,3\}$. Its augmentation witness can be $I=\{0\}$, $J=\{2,3\}$. Choose $\varepsilon =1/2$. Greedy order $0,2,3,1$ gives positive-weight total $3/2$: it accepts $0$ and rejects $2,3$. The feasible set $J$ has weight $2$. The certificate consists of the two maximal sets, the membership checks for $\{0,2\}$ and $\{0,3\}$, and the rational inequality $2>3/2$. No floating arithmetic appears.

<a id="section-217-10-complexity-and-honest-boundaries"></a>
## 10. Complexity and honest boundaries {#section-219-10-complexity-and-honest-boundaries}

The mask of a subset requires values below $2^n$; the family of all subsets has $2^n$ members. If the supplied independent family is denoted $\mathcal{I}$, direct augmentation checking uses $O(|\mathcal{I}|^2 n)$ membership queries. Rank-table construction by scanning submasks is exponential. Exhausting all arbitrary families is doubly exponential, and canonicalization by all permutations adds a factor $n!$.

These costs make bounds part of the theorem statement. A completed run for $n\le 7$ does not establish the corresponding assertion for all finite matroids. It may disprove a universal assertion if it finds one valid counterexample, or prove the explicitly bounded statement “no counterexample has at most seven elements.” Extrapolation from counts is evidence, not proof.

Random sampling has a different role. It can discover candidates but cannot certify exhaustive absence. Parallel execution is safe when the candidate domain is partitioned without overlap and the final reduction is deterministic; the coverage record must state the partition.

<a id="section-225-11-common-errors-and-diagnostic-questions"></a>
## 11. Common errors and diagnostic questions {#section-227-11-common-errors-and-diagnostic-questions}

1. **Labels disappear too early.** Canonicalize for classification, not before reporting the original witness.
2. **A hash is called a canonical form.** Hash collisions and incomplete relabeling searches need explicit control.
3. **Pruning is plausible but unproved.** State an invariant showing that every removed branch is impossible or already represented.
4. **Exchange is tested only on one ordering.** Basis exchange quantifies over both bases and every element of the first difference.
5. **Maximal independent sets of different sizes are called bases.** That is exactly a possible failure in a general hereditary system.
6. **Numerical rank certifies a finite-field claim.** Use exact elimination in the named field.
7. **A bounded absence becomes a theorem without a bound.** Always print $n$, rank, and any representation restrictions.
8. **A minimized witness is called globally smallest.** Record the minimization relation and tie-breaking rule.

Before trusting a run, ask: Can another reader reconstruct every candidate? Can they check rejection from the printed witness? Are isomorphic and equal clearly distinguished? Can an independent implementation reproduce the totals?

<a id="section-238-12-solved-exercises"></a>
## 12. Solved exercises {#section-240-12-solved-exercises}

<a id="section-240-exercise-1-immediate-deletions-suffice"></a>
### Exercise 1: immediate deletions suffice {#section-242-exercise-1-immediate-deletions-suffice}
<a id="exact-axiom-enumeration-ex-1"></a>

Prove that a family $F$ containing $\varnothing$ is hereditary if every one-element deletion of every nonempty $Y\in F$ also belongs to $F$.

<details>
<summary>Hint 1</summary>

**Hint.** Delete one element at a time from a chosen feasible set.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** List the elements of $Y\setminus X$, apply the hypothesis successively, and stop exactly at $X$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $X\subseteq Y\in F$. List the elements of $Y-X$ as $e_1,\ldots ,e_k$. By the hypothesis, $Y-\{e_1\}$ is in $F$. Apply the hypothesis again, deleting $e_2$, and continue. After $k$ steps the resulting set is exactly $X$, so $X\in F$. The converse is immediate from the definition of heredity.

</details>

<a id="section-266-exercise-2-decode-a-certificate"></a>
### Exercise 2: decode a certificate {#section-268-exercise-2-decode-a-certificate}
<a id="exact-axiom-enumeration-ex-2"></a>

On $E=\{0,1,2\}$, suppose a program returns heredity witness masks $X=1$ and $Y=5$. Translate the masks and state every membership fact needed.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the binary masks using the declared element-to-bit convention.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The witness needs a feasible superset and an infeasible subset, not only a subset relation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Binary $001$ encodes $\{0\}$ and $101$ encodes $\{0,2\}$. The certificate asserts $\{0,2\}\in F$ but $\{0\}\notin F$; since $\{0\}\subset \{0,2\}$, heredity fails. No facts about other family members are needed, though the verifier must check both reported membership assertions against the supplied family.

</details>

<a id="section-292-exercise-3-antichain-expansion"></a>
### Exercise 3: antichain expansion {#section-294-exercise-3-antichain-expansion}
<a id="exact-axiom-enumeration-ex-3"></a>

Expand the antichain $A=\{\{0,1\},\{1,2\}\}$ into its down-set and decide whether the result is a matroid.

<details>
<summary>Hint 1</summary>

**Hint.** Expand both maximal sets into all their subsets, then compare the two maximal members by basis exchange.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The shared element is a coloop; the other two labels are interchangeable parallel nonloops.

</details>

<details>
<summary>Solution</summary>

**Solution.** The down-set is $\varnothing ,\{0\},\{1\},\{2\},\{0,1\},\{1,2\}$. Its two maximal members have size two. Basis exchange holds: from $\{0,1\}$ to $\{1,2\}$, the only element in the first difference is $0$, replaced by $2$; the reverse exchange is symmetric. Hence it is a matroid. Element $1$ is a coloop because it belongs to both bases, while $0$ and $2$ are parallel nonloops.

</details>

<a id="section-318-exercise-4-find-an-exchange-witness"></a>
### Exercise 4: find an exchange witness {#section-320-exercise-4-find-an-exchange-witness}
<a id="exact-axiom-enumeration-ex-4"></a>

Let maximal feasible sets be $\{0,1,2\}$ and $\{3,4\}$. Give an augmentation-failure certificate for their down-set.

<details>
<summary>Hint 1</summary>

**Hint.** Use the smaller listed maximal feasible set as $I$ and the larger as $J$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every attempted augmentation mixes the two disjoint blocks and is contained in neither maximal feasible set.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take $I=\{3,4\}$ and $J=\{0,1,2\}$. Both are feasible and $|I|=2<3=|J|$. For each $e\in J-I$, the set $I\cup \{e\}$ has size three and is contained in neither maximal feasible set, so it is infeasible. Thus $(I,J)$ certifies failure of augmentation. The unequal sizes of maximal feasible sets already signal the same failure.

</details>

<a id="section-344-exercise-5-canonical-orbit-size"></a>
### Exercise 5: canonical orbit size {#section-346-exercise-5-canonical-orbit-size}
<a id="exact-axiom-enumeration-ex-5"></a>

Let $F$ be the rank-one matroid on $\{0,1,2,3\}$ with exactly $0,1$ nonloops and $2,3$ loops. Find $|Aut(F)|$ and its number of distinct labelings.

<details>
<summary>Hint 1</summary>

**Hint.** An automorphism preserves the loop and nonloop classes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Permute within each two-element class, then apply orbit–stabilizer in the full four-label permutation group.

</details>

<details>
<summary>Solution</summary>

**Solution.** An automorphism may swap the two nonloops and independently swap the two loops, but cannot mix the classes. Thus $|\operatorname{Aut}(F)|=2!\,2! = 4$. Orbit-stabilizer gives $4!/4=6$ labeled matroids of this isomorphism type, matching the choice of the two-element nonloop set.

</details>

<a id="section-370-exercise-6-verify-a-rank-rejection"></a>
### Exercise 6: verify a rank rejection {#section-372-exercise-6-verify-a-rank-rejection}
<a id="exact-axiom-enumeration-ex-6"></a>

A table reports $r(\{0\})=r(\{1\})=0$, $r(\{0,1\})=1$, and $r(\varnothing )=0$. Which rank axiom fails?

<details>
<summary>Hint 1</summary>

**Hint.** Test submodularity on the two singleton sets.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Their union has reported rank one while both separate ranks are zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Submodularity with $X=\{0\}$ and $Y=\{1\}$ requires

$r(\{0,1\})+r(\varnothing )\le r(\{0\})+r(\{1\})$.

The reported values give $1+0\le 0+0$, which is false. The four values and the two sets form a complete rank-submodularity certificate.

</details>

<a id="section-400-exercise-7-build-rational-greedy-weights"></a>
### Exercise 7: build rational greedy weights {#section-402-exercise-7-build-rational-greedy-weights}
<a id="exact-axiom-enumeration-ex-7"></a>

Suppose augmentation fails for independent sets $I,J$ with $|I|=3$, $|J|=5$, and $|I\setminus J|=2$. Choose a valid $\varepsilon$ and compare the two positive-weight totals from Section 7.

<details>
<summary>Hint 1</summary>

**Hint.** The gap condition compares $\varepsilon|I\setminus J|$ with $|J|-|I|$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Find the intersection size first, then sum weights on $I$ and $J$ using their different overlaps.

</details>

<details>
<summary>Solution</summary>

**Solution.** We need $2\varepsilon <2$, so choose $\varepsilon =1/2$. Greedy after processing $I$ has weight $3(3/2)=9/2$. Since $|I\cap J|=|I|-|I\setminus J|=1$, the feasible set $J$ has weight $1(3/2)+4=11/2$. Thus $J$ exceeds the greedy total by $1$, certifying failure.

</details>

<a id="section-426-exercise-8-dual-rank-calculation"></a>
### Exercise 8: dual rank calculation {#section-428-exercise-8-dual-rank-calculation}
<a id="exact-axiom-enumeration-ex-8"></a>

For the triangle matroid $U(2,3)$, calculate $r_{M^{*}}(\{0,1\})$ from the dual-rank formula and identify $M^{*}$.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the rank of the complement in the primal matroid.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The singleton complement has primal rank one; substitute into $r^*(X)=|X|-r(E)+r(E\setminus X)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $r_M(E)=2$ and $E-\{0,1\}=\{2\}$ has rank one. Therefore

$r_{M^{*}}(\{0,1\})=2-2+1=1$.

Similarly every nonempty subset has dual rank one, while the empty set has rank zero. Hence $M^{*}=U(1,3)$, whose three elements are parallel.

</details>

<a id="section-456-exercise-9-distinguish-bounded-proof-from-conjecture"></a>
### Exercise 9: distinguish bounded proof from conjecture {#section-458-exercise-9-distinguish-bounded-proof-from-conjecture}
<a id="exact-axiom-enumeration-ex-9"></a>

An exhaustive run finds that every loopless matroid on at most six elements has property $P$. State exactly what is proved and two claims that are not proved.

<details>
<summary>Hint 1</summary>

**Hint.** Write down the finite size bound and the loopless restriction as part of the conclusion.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Coverage of sizes through six says nothing by itself about size seven or arbitrary finite size.

</details>

<details>
<summary>Solution</summary>

**Solution.** Subject to correct coverage and recognition, the run proves: every loopless matroid with labeled ground-set size at most six has $P$. If $P$ is invariant under relabeling and canonicalization was complete, this is equivalently a check of every such isomorphism type. It does not prove that every finite loopless matroid has $P$. It also does not prove the result for arbitrary independence systems, represented configurations outside the enumerated field restrictions, or seven-element matroids. A pattern suggested by the output is a conjecture beyond the explicit bound.

</details>

<a id="section-482-exercise-10-test-deletion-duality"></a>
### Exercise 10: test deletion–duality {#section-484-exercise-10-test-deletion-duality}
<a id="exact-axiom-enumeration-ex-10"></a>

Let $M=U(2,3)$ and delete element $2$. Compute both $(M\setminus 2)^{*}$ and $M^{*}/2$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the two uniform minors rather than relying only on the general identity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Deletion leaves $U(2,2)$; the original dual is $U(1,3)$, and contracting its nonloop reduces rank to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Deletion gives $M\setminus 2=U(2,2)$, whose dual is $U(0,2)$: both remaining elements are loops. Also $M^{*}=U(1,3)$. Contracting the nonloop $2$ lowers rank from one to zero on the remaining two elements, producing $U(0,2)$. The labeled families agree, illustrating $(M\setminus e)^{*}=M^{*}/e$.

</details>

<a id="section-508-13-chapter-synthesis"></a>
## 13. Chapter synthesis {#section-510-13-chapter-synthesis}

Exact finite enumeration is strongest when it exposes its proof structure. Bit masks give exact subsets; antichains give a complete compressed search space; axiom failures give local certificates; canonical forms separate isomorphism types; rank, circuit, minor, and dual computations provide independent cross-checks. A bounded search can rigorously prove a bounded theorem or discover a universal counterexample. It cannot erase its own bound.

The next chapter turns these contracts into six sustained investigations. Each investigation will require an explicit domain, exact outputs, proof obligations, and a text-first record that remains useful without a visual interface.

<a id="section-514-source-and-verification-note"></a>
## Sources {#section-516-source-and-verification-note}

No external computation is asserted here. Any future enumeration claim must record software and version, command/configuration, finite domain coverage, immutable input and output digests, and certificate evidence; algorithm literature alone cannot certify a run.


<a id="section-519-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-521-sources-for-the-expanded-teaching}

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

<a id="section-523-summary"></a>
## Summary {#section-525-summary}

A bounded enumeration is a proof only when its input class, generation, recognition, and relabelling coverage are justified. Heredity and augmentation have explicit rejection witnesses; rank and circuit descriptions provide complementary checks. Deletion, contraction, duality, and greedy failures produce inspectable certificates. The final investigations combine these obligations into sustained mathematical tasks without extending a finite result to every size.


