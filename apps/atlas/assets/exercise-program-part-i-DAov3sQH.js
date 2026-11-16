var e=`---
parent_id: book-discrete-combinatorial-structures
matter_id: exercise-program-part-i
title: "Exercise Program I: Matroid Structure, Representation, Minors, and Greedy Choice"
description: "Fifty-two graduate-level exercises with complete solutions for manuscript components 1–10."
level: graduate
estimated_minutes: 1560
license: CC BY-SA 4.0
production_state: drafting
---

# Exercise Program I: Matroid Structure, Representation, Minors, and Greedy Choice

This supplement contains exactly fifty-two new exercises for manuscript components 1–10: the Chapter 1 overview and the nine child chapters through duality and connectivity. Weighted greedy objectives begin Part II as Chapter 11. Unless stated otherwise, all matroids are finite, \\(r_M\\) denotes rank, and \\(\\operatorname{cl}_M\\) denotes closure. A solution proves every assertion, including boundary cases; an example is not accepted as a proof of a universal statement.

## Chapter 1 overview: structural translations and scope

### Exercise O.1 — From local maximality to augmentation

Let \\(E\\) be finite and let \\(\\mathcal I\\subseteq 2^E\\) be nonempty and hereditary. Suppose that for every \\(A\\subseteq E\\), all inclusion-maximal members of \\(\\mathcal I\\cap2^A\\) have the same cardinality. Prove directly that \\((E,\\mathcal I)\\) satisfies augmentation.

#### Solution

Take \\(I,J\\in\\mathcal I\\) with \\(|I|<|J|\\), and put \\(A=I\\cup J\\). Extend \\(I\\), within the finite set \\(A\\), to an inclusion-maximal independent set \\(I'\\subseteq A\\). If no \\(e\\in J\\setminus I\\) augmented \\(I\\), then heredity would imply that no independent superset of \\(I\\) inside \\(A\\) exists: every new element of \\(A\\setminus I\\) lies in \\(J\\setminus I\\). Thus \\(I'=I\\). Extend \\(J\\) to a maximal independent \\(J'\\subseteq A\\). The hypothesis gives \\(|I'|=|J'|\\), whereas \\(|J'|\\ge |J|>|I|=|I'|\\), a contradiction. Hence some \\(e\\in J\\setminus I\\) has \\(I\\cup\\{e\\}\\in\\mathcal I\\). This is augmentation, so the system is a matroid.

### Exercise O.2 — The precise failure of a tempting analogy

On \\(E=\\{1,2,3,4\\}\\), let \\(\\mathcal I\\) consist of all subsets of \\(\\{1,2\\}\\), together with \\(\\varnothing,\\{3\\},\\{4\\}\\). Verify heredity, exhibit every maximal independent set, give an augmentation certificate, and show that irrevocable feasible-set greedy in the element order \\(3,1,2,4\\) fails to find a maximum-cardinality member.

#### Solution

The listed family is hereditary: subsets of a subset of \\(\\{1,2\\}\\) remain there, and the only subsets of either singleton are itself and the empty set. Its maximal independent sets are \\(\\{1,2\\},\\{3\\},\\{4\\}\\). Taking \\(I=\\{3\\}\\) and \\(J=\\{1,2\\}\\), neither \\(I\\cup\\{1\\}\\) nor \\(I\\cup\\{2\\}\\) is independent, so augmentation fails. In the stated order, irrevocable greedy accepts 3. It then rejects 1 and 2 because neither can augment \\(\\{3\\}\\), and rejects 4 because \\(\\{3,4\\}\\notin\\mathcal I\\). Its output is the maximal set \\(\\{3\\}\\), of cardinality one, while \\(\\{1,2\\}\\) is feasible and has cardinality two. The example separates heredity, augmentation, maximality, and maximum cardinality without introducing the weighted objective of Chapter 11.

### Exercise O.3 — One matroid in five structural languages

On \\(E=\\{a,b,c,d\\}\\), suppose the bases are
\\[
ab,\\quad ac,\\quad ad,\\quad bc,\\quad bd.
\\]
List the independent sets and circuits, give the rank of every subset by a compact rule, and determine all flats. Identify the special relation between \\(c\\) and \\(d\\).

#### Solution

The independent sets are the empty set, all four singletons, and the five displayed pairs. The missing pair \\(cd\\) is a circuit. The triples \\(abc\\) and \\(abd\\) are circuits because each of their pairs is a basis; the other triples contain \\(cd\\), so they are not minimally dependent. Thus the circuit list is \\(cd,abc,abd\\). Rank is zero on the empty set, one on every singleton and on \\(cd\\), and two on every other set of size at least two. Closure fixes \\(\\varnothing,\\{a\\},\\{b\\},\\{c,d\\}\\), while either element of a basis spans all of rank two only after a second nonparallel element is present. Consequently the flats are \\(\\varnothing,\\{a\\},\\{b\\},\\{c,d\\},E\\). The elements \\(c,d\\) are parallel nonloops. The five descriptions agree rather than merely looking similar.

### Exercise O.4 — Where the finite-ground-set contract is used

Let \\(E=\\mathbb N\\) and let \\(\\mathcal I\\) be the family of all finite subsets of \\(E\\). Verify heredity and augmentation, prove that \\(\\mathcal I\\) has no inclusion-maximal member, and explain exactly which standard finite-matroid proof step this blocks.

#### Solution

Every subset of a finite set is finite, so heredity holds. If finite \\(I,J\\) satisfy \\(|I|<|J|\\), then \\(J\\setminus I\\ne\\varnothing\\); for any \\(e\\) in that difference, \\(I+e\\) is finite and independent. Thus augmentation holds. Yet every \\(I\\in\\mathcal I\\) can be enlarged by choosing \\(e\\in\\mathbb N\\setminus I\\), so no maximal independent set exists. The usual finite proof that repeatedly adjoins elements until reaching a basis relies on termination because the ground set is finite. Here the local augmentation axiom remains meaningful, but “extend to a basis” is unjustified. The example does not refute an infinite-matroid theory; it shows why that theory needs an additional maximality axiom and why this volume declares finiteness.

### Exercise O.5 — Detect loops and coloops from closure

Prove that \\(e\\) is a loop if and only if \\(e\\in\\operatorname{cl}(\\varnothing)\\), and that \\(e\\) is a coloop if and only if \\(e\\notin\\operatorname{cl}(E-e)\\). Apply both tests to the matroid in Exercise O.3.

#### Solution

By definition, \\(e\\in\\operatorname{cl}(\\varnothing)\\) exactly when \\(r(\\{e\\})=r(\\varnothing)=0\\), which is equivalent to \\(\\{e\\}\\) being dependent and hence to \\(e\\) being a loop. Also \\(e\\notin\\operatorname{cl}(E-e)\\) exactly when \\(r(E)=r(E-e)+1\\). This says every basis needs the rank contribution of \\(e\\): if a basis avoided \\(e\\), then \\(E-e\\) would already have full rank; conversely, full rank in \\(E-e\\) supplies a basis avoiding \\(e\\). Thus the condition is equivalent to being a coloop. In Exercise O.3 every singleton has rank one, so there are no loops. Deleting any element leaves one of the displayed bases, so \\(r(E-e)=r(E)=2\\) for every \\(e\\); there are no coloops either.

### Exercise O.6 — Maximal chains of flats measure rank

Prove that every strict chain of flats in a rank-\\(r\\) matroid has at most \\(r+1\\) members. Then construct a chain with exactly \\(r+1\\) members from any ordered basis.

#### Solution

If flats \\(F\\subsetneq G\\) have equal rank, every element of \\(G\\) lies in \\(\\operatorname{cl}(F)=F\\), a contradiction. Hence rank strictly increases at every strict inclusion of flats. Ranks are integers between \\(r(\\varnothing)\\) and \\(r(E)=r\\), so a chain has at most \\(r+1\\) members. For an ordered basis \\(B=(b_1,\\ldots,b_r)\\), put \\(F_i=\\operatorname{cl}(\\{b_1,\\ldots,b_i\\})\\), including \\(F_0=\\operatorname{cl}(\\varnothing)\\). Each \\(F_i\\) is a flat of rank \\(i\\), so the inclusions are strict, and \\(F_r=E\\) because a basis spans the ground set. Thus \\(F_0\\subsetneq\\cdots\\subsetneq F_r\\) attains the bound, including correctly the possibility that loops already lie in \\(F_0\\).

### Exercise O.7 — Submodularity alone is not a rank certificate

On a nonempty finite set \\(E\\), define \\(\\rho(A)=2|A|\\). Prove that \\(\\rho\\) is integer-valued, normalized, monotone, and submodular, but cannot be the rank function of a matroid. Identify the missing load-bearing rank bound.

#### Solution

Clearly \\(\\rho(\\varnothing)=0\\), its values are integers, and inclusion can only increase cardinality. Moreover
\\[
\\rho(A)+\\rho(B)=2|A|+2|B|=2|A\\cup B|+2|A\\cap B|=\\rho(A\\cup B)+\\rho(A\\cap B),
\\]
so submodularity holds with equality: \\(\\rho\\) is modular. For any \\(e\\in E\\), however, \\(\\rho(\\{e\\})=2\\). A matroid rank is the maximum cardinality of an independent subset, so it must satisfy \\(0\\le r(A)\\le|A|\\), in particular \\(r(\\{e\\})\\le1\\). The missing cardinality bound is therefore essential. Normalization, monotonicity, integrality, and even exact modularity do not by themselves certify matroid rank.

## Chapter 2: independence, augmentation, and cryptomorphic axioms

### Exercise 2.1 — Equal maximal sizes on restrictions

Prove the converse of Exercise O.1: if \\(M=(E,\\mathcal I)\\) is a matroid, then for each \\(A\\subseteq E\\), all maximal independent subsets of \\(A\\) have equal size.

#### Solution

Let \\(I,J\\subseteq A\\) be independent and maximal within \\(A\\). If \\(|I|<|J|\\), augmentation in \\(M\\) supplies \\(e\\in J\\setminus I\\) such that \\(I\\cup\\{e\\}\\) is independent. Since \\(e\\in A\\), this contradicts maximality of \\(I\\) in \\(A\\). The reverse strict inequality is excluded symmetrically, so \\(|I|=|J|\\). Notice that maximality is relative to \\(A\\), not merely to \\(E\\); this quantification is what makes the condition equivalent to augmentation.

### Exercise 2.2 — Pairwise augmentation is insufficient

Construct a hereditary system in which every independent singleton augments the empty set and every two independent singletons can be combined, but full augmentation fails. Identify the smallest ground-set size on which your construction works.

#### Solution

Take \\(E=\\{1,2,3,4\\}\\) and let \\(\\mathcal I\\) contain every set of size at most two and also the triple \\(\\{1,2,3\\}\\), but no other triple or the four-set. It is hereditary. Every singleton augments \\(\\varnothing\\), and every pair of distinct independent singletons forms an independent two-set. Yet with \\(I=\\{1,4\\}\\) and \\(J=\\{1,2,3\\}\\), one has \\(|I|<|J|\\), while adding either element of \\(J\\setminus I=\\{2,3\\}\\) produces a forbidden triple. Three elements cannot support this pattern: a larger independent set would be the whole ground set and heredity would make every augmentation possible. Thus four is minimal.

### Exercise 2.3 — Exact recognition from maximal members

Let an independence system on \\(E=\\{a,b,c,d\\}\\) have maximal independent members \\(abc,abd,ac,bd\\), where strings denote sets. Determine whether such a hereditary system can exist. If not, give the shortest inclusion certificate.

#### Solution

It cannot exist. In a hereditary system, every subset of a declared independent set is independent. Since \\(abc\\) is maximal independent, \\(ac\\) is independent but is a proper subset of \\(abc\\); therefore \\(ac\\) cannot itself be maximal. This two-record containment \\(ac\\subset abc\\) is already a complete certificate. More generally, the maximal members of any hereditary family form an antichain, so checking that condition must precede augmentation tests or enumeration.

### Exercise 2.4 — Truncation preserves the axioms

For a matroid \\(M=(E,\\mathcal I)\\) and integer \\(0\\le k\\le r(M)\\), define \\(\\mathcal I_k=\\{I\\in\\mathcal I:|I|\\le k\\}\\). Prove that \\((E,\\mathcal I_k)\\) is a matroid and determine its rank function.

#### Solution

The empty set belongs to \\(\\mathcal I_k\\), and heredity follows from heredity in \\(M\\) plus the cardinality bound. If \\(I,J\\in\\mathcal I_k\\) and \\(|I|<|J|\\), augmentation in \\(M\\) gives \\(e\\in J\\setminus I\\) with \\(I+e\\in\\mathcal I\\). Also \\(|I+e|\\le |J|\\le k\\), so \\(I+e\\in\\mathcal I_k\\). For \\(A\\subseteq E\\), an independent subset of \\(A\\) has size at most both \\(r_M(A)\\) and \\(k\\). A basis of \\(M|A\\), truncated to \\(k\\) elements if necessary, attains the smaller bound. Hence \\(r_k(A)=\\min\\{r_M(A),k\\}\\).

### Exercise 2.5 — Restriction is associative

For \\(B\\subseteq A\\subseteq E(M)\\), prove \\((M|A)|B=M|B\\) using independent sets, and explain why the analogous expression \\((M/A)/B\\) requires disjoint contracted sets.

#### Solution

The independent sets of \\((M|A)|B\\) are those \\(I\\subseteq B\\) that are independent in \\(M|A\\). Because \\(B\\subseteq A\\), this says exactly that \\(I\\subseteq B\\) and \\(I\\) is independent in \\(M\\), which defines \\(M|B\\). For contraction, after forming \\(M/A\\) its ground set is \\(E\\setminus A\\). Thus \\((M/A)/B\\) is syntactically defined only when \\(B\\subseteq E\\setminus A\\). Under that hypothesis it equals \\(M/(A\\cup B)\\); without it, the repeated expression silently asks to contract elements no longer present.

## Chapter 3: bases, fundamental circuits, and strong exchange

### Exercise 3.1 — Fundamental-circuit exchange criterion

Let \\(B\\) be a basis, \\(e\\notin B\\), and \\(f\\in B\\). Prove that \\(B-f+e\\) is a basis if and only if \\(f\\in C(e,B)\\), the fundamental circuit of \\(e\\) with respect to \\(B\\).

#### Solution

The set \\(B+e\\) contains the unique circuit \\(C(e,B)\\). If \\(f\\in C(e,B)\\), deleting \\(f\\) destroys that circuit. Any circuit remaining in \\(B-f+e\\) would also lie in \\(B+e\\), contradicting uniqueness, so the set is independent. It has \\(|B|=r(M)\\) elements and is a basis. Conversely, if \\(f\\notin C(e,B)\\), then \\(C(e,B)\\subseteq B-f+e\\), making that set dependent; it cannot be a basis.

### Exercise 3.2 — Fundamental circuit–cocircuit reciprocity

Let \\(B\\) be a basis and \\(f\\in B\\). Define the fundamental cocircuit \\(D(f,B)\\) as the unique cocircuit contained in \\((E\\setminus B)+f\\). Prove that for every \\(e\\notin B\\),
\\[
e\\in D(f,B)\\quad\\Longleftrightarrow\\quad f\\in C(e,B),
\\]
and interpret both sides as the same valid basis exchange.

#### Solution

The set \\(H=\\operatorname{cl}(B-f)\\) is a hyperplane: it has rank \\(r(M)-1\\), and its closure is itself. Its complement is a cocircuit, contains \\(f\\), and contains no other member of \\(B\\); hence \\(E\\setminus H=D(f,B)\\). For \\(e\\notin B\\), one has
\\[
e\\in D(f,B)\\iff e\\notin\\operatorname{cl}(B-f)
\\iff (B-f)+e\\text{ is a basis}.
\\]
By the fundamental-circuit exchange criterion, the final condition is equivalent to \\(f\\in C(e,B)\\). Thus the fundamental circuit lists, for fixed entering \\(e\\), every removable basis element, while the fundamental cocircuit lists, for fixed leaving \\(f\\), every admissible entering element. They are two views of the identical exchange relation.

### Exercise 3.3 — A missing exchange rectangle

Give a matroid and bases \\(B,D\\) for which \\(B-b+d\\) and \\(B-b'+d'\\) are bases for two matched exchanges, but the cross-exchange \\(B-b+d'\\) is not a basis.

#### Solution

Use the partition matroid on blocks \\(P=\\{p_1,p_2\\}\\), \\(Q=\\{q_1,q_2\\}\\), with capacity one in each block. Let \\(B=\\{p_1,q_1\\}\\) and \\(D=\\{p_2,q_2\\}\\). The matched exchanges \\(B-p_1+p_2=\\{p_2,q_1\\}\\) and \\(B-q_1+q_2=\\{p_1,q_2\\}\\) are bases. The cross exchange \\(B-p_1+q_2=\\{q_1,q_2\\}\\) violates the capacity of \\(Q\\). Thus valid matched exchanges do not imply a Cartesian rectangle of all cross-exchanges.

### Exercise 3.4 — Counting bases under quotas

Let \\(E=P_1\\sqcup\\cdots\\sqcup P_m\\), with \\(|P_i|=n_i\\), and impose integer capacities \\(0\\le c_i\\le n_i\\). Prove that the number of bases of the partition matroid is \\(\\prod_i\\binom{n_i}{c_i}\\).

#### Solution

Every independent set meets \\(P_i\\) in at most \\(c_i\\) elements. If a maximal independent set used fewer than \\(c_i\\) from some block, an unused element of that block could be added, so every basis uses exactly \\(c_i\\) elements from each \\(P_i\\). Conversely every such choice is independent and has the maximum possible size \\(\\sum_i c_i\\), hence is a basis. Choices in disjoint blocks are independent, giving \\(\\prod_i\\binom{n_i}{c_i}\\).

### Exercise 3.5 — Symmetric exchange does not prescribe an element

In \\(U_{2,4}\\), take \\(B=\\{1,2\\}\\) and \\(D=\\{3,4\\}\\). For a fixed \\(b=1\\), list all \\(d\\in D\\) that give symmetric basis exchange. Then explain what the theorem guarantees and what it does not.

#### Solution

Every two-element subset is a basis of \\(U_{2,4}\\). Thus for both \\(d=3\\) and \\(d=4\\), the sets \\(B-1+d\\) and \\(D-d+1\\) are two-element bases. Symmetric basis exchange guarantees at least one suitable \\(d\\) for each prescribed \\(b\\in B\\setminus D\\). It neither guarantees uniqueness nor permits one to prescribe both \\(b\\) and \\(d\\) arbitrarily in an arbitrary matroid.

## Chapter 4: rank, submodularity, closure, and flats

### Exercise 4.1 — Diminishing returns from submodularity

Assume \\(r\\) is a matroid rank function. If \\(A\\subseteq B\\subseteq E\\) and \\(e\\notin B\\), prove
\\[
r(A+e)-r(A)\\ge r(B+e)-r(B).
\\]

#### Solution

Apply submodularity to \\(X=A+e\\) and \\(Y=B\\). Since \\(A\\subseteq B\\) and \\(e\\notin B\\), their intersection is \\(A\\) and union is \\(B+e\\). Therefore
\\(r(A+e)+r(B)\\ge r(A)+r(B+e)\\). Rearranging gives the claim. Each increment is either zero or one, so the statement says that once an element has become rank-redundant, adding more context cannot make it productive again.

### Exercise 4.2 — Closure satisfies exchange

Prove the Mac Lane–Steinitz exchange property: if \\(y\\in\\operatorname{cl}(A+x)\\setminus\\operatorname{cl}(A)\\), then \\(x\\in\\operatorname{cl}(A+y)\\).

#### Solution

Because \\(y\\notin\\operatorname{cl}(A)\\), \\(r(A+y)=r(A)+1\\). Because \\(y\\in\\operatorname{cl}(A+x)\\), \\(r(A+x+y)=r(A+x)\\). If \\(x\\in\\operatorname{cl}(A)\\), then \\(\\operatorname{cl}(A+x)=\\operatorname{cl}(A)\\), contrary to the hypothesis on \\(y\\); hence \\(r(A+x)=r(A)+1\\). Combining the equalities yields \\(r(A+x+y)=r(A)+1=r(A+y)\\), exactly the condition \\(x\\in\\operatorname{cl}(A+y)\\).

### Exercise 4.3 — Intersections of flats

Prove that an arbitrary intersection of flats is a flat. Include the empty intersection.

#### Solution

Let \\(F=\\bigcap_{i\\in I}F_i\\), where each \\(F_i\\) is closed. Monotonicity of closure gives \\(\\operatorname{cl}(F)\\subseteq\\operatorname{cl}(F_i)=F_i\\) for every \\(i\\), hence \\(\\operatorname{cl}(F)\\subseteq F\\). Extensivity gives the reverse inclusion, so \\(F\\) is closed. If \\(I\\) is empty, the intersection is by convention \\(E\\), and \\(\\operatorname{cl}(E)=E\\), so it too is a flat.

### Exercise 4.4 — An exact closure ledger

Let \\(M\\) have ground set \\(\\{a,b,c,d\\}\\), with \\(a,b\\) parallel, \\(c\\) a coloop, and \\(d\\) a loop. List all flats and compute \\(r_M(\\{a,c,d\\})\\).

#### Solution

The matroid is \\(U_{1,2}\\oplus U_{1,1}\\oplus U_{0,1}\\) on blocks \\(\\{a,b\\},\\{c\\},\\{d\\}\\). Every closure contains the loop \\(d\\); including either \\(a\\) or \\(b\\) closes both, while \\(c\\) closes only itself. Thus the flats are \\(\\{d\\}\\), \\(\\{a,b,d\\}\\), \\(\\{c,d\\}\\), and \\(E\\). The set \\(\\{a,c,d\\}\\) gains one rank from the parallel class, one from the coloop, and none from the loop, so its rank is 2.

### Exercise 4.5 — Closure does not distribute over unions

Give a representable matroid and sets \\(A,B\\) for which \\(\\operatorname{cl}(A\\cup B)\\ne\\operatorname{cl}(A)\\cup\\operatorname{cl}(B)\\).

#### Solution

Over any field, take columns \\(e_1,e_2,e_1+e_2\\), labeled \\(1,2,3\\). Let \\(A=\\{1\\}\\) and \\(B=\\{2\\}\\). With no parallel columns, \\(\\operatorname{cl}(A)=A\\) and \\(\\operatorname{cl}(B)=B\\). But column 3 lies in the span of columns 1 and 2, so \\(\\operatorname{cl}(A\\cup B)=\\{1,2,3\\}\\), strictly larger than \\(\\{1,2\\}\\). Closure preserves neither binary unions nor the intuition that all dependence is pairwise.

## Chapter 5: circuits, elimination, and orthogonality

### Exercise 5.1 — Fundamental circuits are unique

Let \\(B\\) be a basis and \\(e\\notin B\\). Prove that \\(B+e\\) contains exactly one circuit.

#### Solution

The set \\(B+e\\) is dependent, so it contains a circuit. Any such circuit contains \\(e\\), since \\(B\\) is independent. If distinct circuits \\(C_1,C_2\\subseteq B+e\\) existed, circuit elimination at \\(e\\) would produce a circuit contained in \\((C_1\\cup C_2)\\setminus\\{e\\}\\subseteq B\\), contradicting independence of \\(B\\). Therefore the circuit exists uniquely.

### Exercise 5.2 — Circuit–cocircuit orthogonality

Prove that a circuit \\(C\\) and cocircuit \\(D\\) of a matroid cannot satisfy \\(|C\\cap D|=1\\).

#### Solution

Suppose \\(C\\cap D=\\{e\\}\\). The complement \\(H=E\\setminus D\\) is a hyperplane. Then \\(C-e\\subseteq H\\). Because \\(C\\) is a circuit, \\(e\\in\\operatorname{cl}(C-e)\\). Monotonicity gives \\(e\\in\\operatorname{cl}(H)=H\\), since a hyperplane is a flat. But \\(e\\in D=E\\setminus H\\), a contradiction. Hence intersection size one is impossible. No representability hypothesis was used.

### Exercise 5.3 — Binary parity and its converse boundary

Show that in a binary represented matroid every circuit meets every cocircuit evenly. Then use \\(U_{2,4}\\) to show that the parity statement fails for general matroids.

#### Solution

Represent the matroid by a binary matrix. A circuit incidence vector lies in the nullspace of the matrix, while a cocircuit incidence vector lies in its row space. Row-space vectors are orthogonal to nullspace vectors, so their dot product is zero in \\(\\mathbb F_2\\); that dot product is \\(|C\\cap D|\\bmod2\\). In \\(U_{2,4}\\), every three-set is a circuit. Its dual is again \\(U_{2,4}\\), so every three-set is also a cocircuit. Taking the same three-set as \\(C=D\\) gives intersection size 3, odd. General orthogonality forbids only size one.

### Exercise 5.4 — Auditing a proposed circuit family

On \\(E=\\{1,2,3,4\\}\\), consider \\(\\mathcal C=\\{123,124\\}\\). Decide whether \\(\\mathcal C\\) is the circuit family of a matroid and give a minimal certificate.

#### Solution

It is not. Circuit families must satisfy elimination: from \\(C_1=123\\), \\(C_2=124\\), and their common element 1, there must be a circuit contained in \\((C_1\\cup C_2)\\setminus\\{1\\}=\\{2,3,4\\}\\). Neither listed circuit is contained there. The same failure occurs eliminating 2. Noncontainment and nonemptiness hold, so the missing elimination witness is the minimal obstruction.

### Exercise 5.5 — Circuits after deleting an element

Prove that the circuits of \\(M\\setminus e\\) are exactly the circuits of \\(M\\) that avoid \\(e\\).

#### Solution

Deletion restricts the independent sets to subsets of \\(E\\setminus\\{e\\}\\). Thus a subset \\(C\\subseteq E\\setminus\\{e\\}\\) is minimally dependent in \\(M\\setminus e\\) precisely when it is dependent in \\(M\\) and every proper subset is independent in \\(M\\). That is precisely the definition of a circuit of \\(M\\) avoiding \\(e\\). This clean rule contrasts with contraction, whose circuits are the inclusion-minimal nonempty sets among \\(C-e\\) for circuits \\(C\\) of \\(M\\).

## Chapter 6: graphic and cographic matroids

### Exercise 6.1 — Graphic rank with components

For a finite graph \\(G=(V,E)\\), allowing loops and parallel edges, prove \\(r_{M(G)}(A)=|V|-c(V,A)\\), where \\(c(V,A)\\) counts components of the spanning subgraph \\((V,A)\\), including isolated vertices.

#### Solution

An independent edge set in \\(M(G)|A\\) is a forest in \\((V,A)\\). In a component with \\(v_i\\) vertices, a spanning tree has \\(v_i-1\\) edges; loops contribute none, and parallelism causes no difficulty because a spanning tree selects at most one edge of a two-cycle. Taking a spanning tree in every component gives a maximal forest of size \\(\\sum_i(v_i-1)=|V|-c(V,A)\\). No forest can use more, since each component forest has at most \\(v_i-1\\) edges. Hence the formula.

### Exercise 6.2 — Bonds are cocircuits

Prove that the cocircuits of \\(M(G)\\) are the inclusion-minimal nonempty edge cuts (bonds) of \\(G\\).

#### Solution

A cocircuit is the complement of a hyperplane. In graphic language, deleting a set \\(D\\) lowers the full rank exactly when it increases the number of components of the nonloop part of \\(G\\). Minimality of the cocircuit says no proper subset of \\(D\\) has that effect. Therefore \\(D\\) is an inclusion-minimal nonempty edge set whose deletion increases the component count, exactly a bond. Conversely every bond minimally lowers graphic rank, so its complement is a maximal proper flat and the bond is a cocircuit.

### Exercise 6.3 — Deletion and contraction commute with graphic formation

For a nonloop edge \\(e\\) of \\(G\\), prove \\(M(G)/e=M(G/e)\\), and for every edge \\(e\\), prove \\(M(G)\\setminus e=M(G\\setminus e)\\).

#### Solution

Deletion is immediate: a set avoiding \\(e\\) is acyclic in \\(G\\setminus e\\) exactly when it is acyclic in \\(G\\). For contraction, a set \\(I\\subseteq E\\setminus\\{e\\}\\) is independent in \\(M(G)/e\\) exactly when \\(I\\cup\\{e\\}\\) is a forest in \\(G\\) (because a nonloop singleton is independent). Contracting an edge of that forest yields a forest in \\(G/e\\), and expanding the contracted vertex by restoring \\(e\\) reverses the implication. Thus the independent sets coincide.

### Exercise 6.4 — Exact spanning-tree count for a multigraph

Let \\(G\\) have vertices \\(u,v,w\\), two parallel edges between \\(u,v\\), three between \\(v,w\\), and one between \\(u,w\\). Compute the number of bases of \\(M(G)\\).

#### Solution

A basis is a two-edge spanning tree. Choosing one \\(uv\\) edge and one \\(vw\\) edge gives \\(2\\cdot3=6\\) trees. Choosing one \\(uv\\) and the unique \\(uw\\) gives 2. Choosing one \\(vw\\) and \\(uw\\) gives 3. Two parallel edges with the same endpoints form a cycle and fail to span the third vertex, so there are no other bases. The total is \\(6+2+3=11\\).

### Exercise 6.5 — A graphic matroid forgets vertex labels

Give two nonisomorphic graphs having isomorphic cycle matroids, and prove both claims.

#### Solution

Take the path \\(P_4\\) on four vertices and the star \\(K_{1,3}\\). They are not isomorphic: their degree multisets are respectively \\(\\{2,2,1,1\\}\\) and \\(\\{3,1,1,1\\}\\). Each graph is a tree with three edges, so every edge subset is acyclic. Both cycle matroids are therefore the free matroid \\(U_{3,3}\\). Hence graphic matroids retain cycle dependence but not the complete graph-isomorphism type.

## Chapter 7: linear representability and field dependence

### Exercise 7.1 — Row operations and column scalings

Prove that invertible row operations, permutation of columns, and scaling individual columns by nonzero field elements preserve the represented matroid. State what happens when a column is scaled by zero.

#### Solution

Left multiplication by an invertible matrix preserves every linear dependence relation among columns. Column permutation merely relabels the ground set. Multiplying column \\(j\\) by \\(\\alpha_j\\ne0\\) gives a bijection between coefficient relations: replace coefficient \\(c_j\\) by \\(c_j/\\alpha_j\\). Thus independent column subsets are unchanged up to relabeling. Scaling by zero is different: it turns that column into a loop and can destroy prior independence, so it is not an allowed representation equivalence.

### Exercise 7.2 — When is \\(U_{2,4}\\) representable?

Prove that \\(U_{2,4}\\) is representable over a field \\(F\\) if and only if \\(|F|\\ge3\\).

#### Solution

In a rank-two representation of \\(U_{2,4}\\), no column is zero and no two columns are scalar multiples. Thus four distinct one-dimensional subspaces of \\(F^2\\) are required. The projective line over a finite field of size \\(q\\) has exactly \\(q+1\\) such subspaces, so four exist exactly when \\(q\\ge3\\); an infinite field also has at least four. Explicitly, when \\(|F|\\ge3\\), choose distinct \\(0,1,t\\in F\\) and columns \\((1,0),(0,1),(1,1),(1,t)\\). Every pair is independent, giving \\(U_{2,4}\\). Over \\(\\mathbb F_2\\) only three nonzero projective points exist.

### Exercise 7.3 — Dual representation from a nullspace

Let a full-row-rank \\(r\\times n\\) matrix \\(A\\) represent \\(M\\), and let the rows of an \\((n-r)\\times n\\) matrix \\(B\\) form a basis of \\(\\ker A\\). Prove that \\(B\\) represents \\(M^*\\).

#### Solution

For \\(X\\subseteq[n]\\), columns \\(B_X\\) are dependent exactly when there is a nonzero row vector \\(z\\) supported in \\(X\\) with \\(Bz^{\\mathsf T}=0\\). Since the row space of \\(B\\) is \\(\\ker A\\), its orthogonal complement is the row space of \\(A\\). Equivalently, rank-nullity applied to coordinate projections yields
\\[
r_B(X)=|X|-r_A(E)+r_A(E\\setminus X),
\\]
which is the dual-rank formula. Therefore all ranks, hence all independent sets, agree with \\(M^*\\).

### Exercise 7.4 — Contraction by pivoting

Suppose a nonzero represented element \\(e\\) is a column of \\(A\\). Explain an exact matrix procedure representing \\(M(A)/e\\) and justify it.

#### Solution

Use invertible row operations and a nonzero scaling of column \\(e\\) to make it the first standard vector \\((1,0,\\ldots,0)^{\\mathsf T}\\). Then delete column \\(e\\) and the first row. Call the resulting matrix \\(A'\\). For a set \\(X\\) avoiding \\(e\\), the columns \\(X\\) are independent in \\(M/e\\) exactly when \\(X+e\\) is independent in \\(M\\). With the pivoted form, adjoining column \\(e\\) contributes an independent first coordinate, while dependence modulo it is exactly dependence among the corresponding columns of \\(A'\\). Thus \\(A'\\) represents the contraction.

### Exercise 7.5 — Same integers, different fields

For
\\[
A=\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\end{pmatrix},
\\]
determine whether its three columns form a basis over \\(\\mathbb Q\\) and over \\(\\mathbb F_2\\).

#### Solution

The determinant is \\(-2\\). Over \\(\\mathbb Q\\) this is nonzero, so the three columns are independent and form a basis of the rank-three represented matroid. Over \\(\\mathbb F_2\\), the determinant vanishes; indeed the third row equals the sum of the first two rows, and the three columns sum to zero. The represented set is dependent there. Integer data alone do not determine a matroid until the coefficient field is specified.

## Chapter 8: uniform, partition, and transversal families

### Exercise 8.1 — Partition-matroid rank

For disjoint blocks \\(P_i\\) with integer capacities \\(0\\le c_i\\le |P_i|\\), prove
\\[
r(A)=\\sum_i\\min\\{|A\\cap P_i|,c_i\\}.
\\]

#### Solution

An independent subset \\(I\\subseteq A\\) can use at most \\(\\min\\{|A\\cap P_i|,c_i\\}\\) elements from block \\(P_i\\), giving the upper bound after summation. Select exactly that many arbitrary elements from each \\(A\\cap P_i\\). Their union respects every capacity and is therefore independent, attaining the bound. Disjointness of blocks is essential to the sum decomposition.

### Exercise 8.2 — Dual of a partition matroid

Determine the dual of the partition matroid with block sizes \\(n_i\\) and integer capacities \\(0\\le c_i\\le n_i\\).

#### Solution

A basis chooses exactly \\(c_i\\) elements from each block. Its complement chooses exactly \\(n_i-c_i\\) elements from block \\(P_i\\). Dual bases are complements of primal bases, so they are precisely the bases of the partition matroid on the same blocks with capacities \\(n_i-c_i\\). Since bases determine a matroid, this is the dual. The formula includes \\(c_i=0\\) and \\(c_i=n_i\\), exchanging loop blocks with coloop blocks.

### Exercise 8.3 — Hall deficiency as a rank formula

Let elements \\(X\\) be adjacent to positions \\(Y\\) in a bipartite graph, and let the transversal matroid live on \\(X\\). Prove
\\[
r(A)=\\min_{S\\subseteq A}\\bigl(|A\\setminus S|+|N(S)|\\bigr).
\\]

#### Solution

For any matching of a subset \\(I\\subseteq A\\) and any \\(S\\subseteq A\\), at most \\(|N(S)|\\) matched elements lie in \\(S\\), while at most \\(|A\\setminus S|\\) lie outside. Hence \\(|I|\\le |A\\setminus S|+|N(S)|\\). Taking the minimum gives an upper bound. For attainment, set
\\[
d=\\max_{S\\subseteq A}\\bigl(|S|-|N(S)|\\bigr)\\ge0
\\]
and adjoin \\(d\\) new positions, each adjacent to every element of \\(A\\). For every nonempty \\(S\\subseteq A\\), its enlarged neighborhood has size \\(|N(S)|+d\\ge|S|\\); the empty-set inequality is automatic. Hall's theorem therefore matches all of \\(A\\) in the enlarged graph. After deleting the at most \\(d\\) matching edges incident with new positions, at least \\(|A|-d\\) elements remain matched in the original graph. This meets the upper bound because
\\[
|A|-d=\\min_{S\\subseteq A}\\bigl(|A\\setminus S|+|N(S)|\\bigr).
\\]

### Exercise 8.4 — Naive first-fit matching fails

Give a transversal matroid instance and an element order for which irrevocably matching each arriving element to the first currently free neighbor produces a smaller matchable set than possible.

#### Solution

Let positions be \\(\\{p,q\\}\\). Element \\(a\\) is adjacent to both \\(p,q\\), and \\(b\\) only to \\(p\\). Process \\(a,b\\), with first-fit preferring \\(p\\). It matches \\(a\\) to \\(p\\), then rejects \\(b\\), returning size one. But \\(a\\mapsto q\\), \\(b\\mapsto p\\) matches both, so \\(\\{a,b\\}\\) is independent. A correct independence oracle may need an augmenting path that rematches earlier elements; this is distinct from matroid greedy over an exact oracle.

### Exercise 8.5 — Exact transversal audit

Let \\(N(a)=\\{1,2\\}\\), \\(N(b)=\\{2\\}\\), \\(N(c)=\\{2,3\\}\\), and \\(N(d)=\\{3\\}\\). Determine the rank and all bases of the resulting transversal matroid.

#### Solution

There are three positions, so rank is at most three. The matching \\(a\\mapsto1,b\\mapsto2,d\\mapsto3\\) shows rank three. Of the four three-subsets: \\(abc\\) is matchable by \\(a\\mapsto1,b\\mapsto2,c\\mapsto3\\); \\(abd\\) similarly; \\(acd\\) is matchable by \\(a\\mapsto1,c\\mapsto2,d\\mapsto3\\). For \\(bcd\\), both \\(b,c\\) can use 2 but only \\(c\\) can move to 3, which is also the sole neighbor of \\(d\\); Hall fails on \\(\\{b,c,d\\}\\), whose neighborhood has size two. Thus the bases are \\(abc,abd,acd\\).

## Chapter 9: deletion, contraction, and minor recurrences

### Exercise 9.1 — Rank formulas for single-element minors

For \\(e\\in E(M)\\) and \\(A\\subseteq E\\setminus\\{e\\}\\), prove
\\[
r_{M\\setminus e}(A)=r_M(A),\\qquad
r_{M/e}(A)=r_M(A+e)-r_M(\\{e\\}).
\\]

#### Solution

Deletion leaves exactly the same independent subsets on a smaller ground set, so maximization inside \\(A\\) gives the first equality. For contraction, if \\(e\\) is a loop then \\(M/e=M\\setminus e\\) and both sides reduce to \\(r_M(A)\\). If \\(e\\) is not a loop, extend \\(\\{e\\}\\) to a basis of \\(M|(A+e)\\). Removing \\(e\\) gives a largest set independent after contraction, of size \\(r_M(A+e)-1\\). Since \\(r_M(\\{e\\})=1\\), the formula follows in both cases.

### Exercise 9.2 — Operations on disjoint sets commute

If \\(C,D\\subseteq E(M)\\) are disjoint, prove \\((M/C)\\setminus D=(M\\setminus D)/C\\).

#### Solution

For \\(A\\subseteq E\\setminus(C\\cup D)\\), apply the contraction rank formula:
\\[
r_{(M/C)\\setminus D}(A)=r_M(A\\cup C)-r_M(C).
\\]
Deletion of \\(D\\), which is disjoint from both \\(A\\) and \\(C\\), does not change either rank on the right. Hence this equals
\\(r_{M\\setminus D}(A\\cup C)-r_{M\\setminus D}(C)=r_{(M\\setminus D)/C}(A)\\). The minors have the same ground set and rank function, so they are equal.

### Exercise 9.3 — A minor-closed representability property

Prove that representability over a fixed field \\(F\\) is minor-closed.

#### Solution

If a matrix over \\(F\\) represents \\(M\\), deleting an element means deleting its column, so deletion remains \\(F\\)-representable. To contract a nonloop, pivot its column to a standard unit vector and delete that column and pivot row, as in Exercise 7.4; all operations stay in \\(F\\). Contracting a loop equals deleting it. Repeating handles arbitrary disjoint deletion and contraction sets. Therefore every minor of an \\(F\\)-representable matroid is \\(F\\)-representable.

### Exercise 9.4 — Exact Tutte recurrence on a triangle

Using \\(T_M(x,y)=T_{M\\setminus e}+T_{M/e}\\) for an element that is neither loop nor coloop, and factors \\(x\\) for coloops and \\(y\\) for loops, compute the Tutte polynomial of the cycle matroid of a triangle.

#### Solution

Choose an edge \\(e\\). Deleting it leaves a two-edge tree; both edges are coloops, so its polynomial is \\(x^2\\). Contracting \\(e\\) leaves two parallel edges. Delete one parallel edge \\(f\\): the survivor is a coloop, contributing \\(x\\). Contract \\(f\\): the survivor becomes a loop, contributing \\(y\\). Hence the parallel pair has polynomial \\(x+y\\), and
\\[
T_{M(C_3)}(x,y)=x^2+x+y.
\\]
At \\((1,1)\\) this gives 3, the number of spanning trees of the triangle.

### Exercise 9.5 — Why recurrence cases matter

Show by the one-element loop and one-element coloop that applying the ordinary deletion–contraction sum indiscriminately gives a wrong invariant.

#### Solution

For a one-element loop \\(L\\), both \\(L\\setminus e\\) and \\(L/e\\) are the empty matroid, whose Tutte polynomial is 1. The indiscriminate sum gives 2, but the correct loop rule gives \\(T_L=y\\). For a one-element coloop \\(C\\), the same sum again gives 2, whereas the correct value is \\(x\\). Thus the status of the pivot element is part of the recurrence contract; the three branches cannot be merged without changing the invariant.

## Chapter 10: duality, sums, and connectivity

### Exercise 10.1 — Derive the dual-rank formula

Starting from the fact that dual bases are complements of bases, prove
\\[
r_{M^*}(A)=|A|-r_M(E)+r_M(E\\setminus A).
\\]

#### Solution

Choose a basis \\(I\\) of \\(M|(E\\setminus A)\\) and extend it to a basis \\(B\\) of \\(M\\). Then \\(E\\setminus B\\) is a dual basis, and its intersection with \\(A\\) has size
\\(|A|-|B\\cap A|=|A|-(r(M)-r_M(E\\setminus A))\\). This is independent in \\(M^*|A\\), giving the displayed lower bound. Conversely, any dual-independent \\(J\\subseteq A\\) extends to \\(E\\setminus B'\\) for a primal basis \\(B'\\). Since \\(B'\\cap(E\\setminus A)\\) has size at most \\(r_M(E\\setminus A)\\), the same count bounds \\(|J|\\) above. Equality follows.

### Exercise 10.2 — Connectivity is self-dual

Define \\(\\lambda_M(A)=r_M(A)+r_M(E\\setminus A)-r_M(E)\\). Prove \\(\\lambda_{M^*}(A)=\\lambda_M(A)\\).

#### Solution

Insert the dual-rank formula three times. We have
\\(r^*(A)=|A|-r(E)+r(E\\setminus A)\\),
\\(r^*(E\\setminus A)=|E\\setminus A|-r(E)+r(A)\\), and
\\(r^*(E)=|E|-r(E)\\). Their first two cardinalities sum to \\(|E|\\), which cancels the dual full rank. The remaining terms are \\(r(A)+r(E\\setminus A)-r(E)=\\lambda_M(A)\\).

### Exercise 10.3 — Zero connectivity and direct sums

Prove that \\(\\lambda_M(A)=0\\) if and only if \\(M=(M|A)\\oplus(M|(E\\setminus A))\\).

#### Solution

Write \\(\\bar A=E\\setminus A\\). Extend arbitrary independent sets \\(I_A\\subseteq A\\) and \\(I_{\\bar A}\\subseteq\\bar A\\) to bases \\(B_A\\) and \\(B_{\\bar A}\\) of the respective restrictions. Their union spans both sides and hence spans \\(E\\). If \\(\\lambda(A)=0\\), then \\(|B_A\\cup B_{\\bar A}|=r(A)+r(\\bar A)=r(E)\\). A spanning set of cardinality \\(r(E)\\) is a basis, so its subset \\(I_A\\cup I_{\\bar A}\\) is independent. Thus the independent sets split exactly as unions from the two restrictions, which is the direct sum. Conversely, ranks add across a direct sum, so \\(r(E)=r(A)+r(\\bar A)\\) and \\(\\lambda(A)=0\\).

### Exercise 10.4 — Duality exchanges deletion and contraction

Prove \\((M\\setminus e)^*=M^*/e\\) and \\((M/e)^*=M^*\\setminus e\\).

#### Solution

For the first identity, bases of \\(M\\setminus e\\) are maximum independent sets avoiding \\(e\\). If \\(e\\) is not a coloop, they are primal bases avoiding \\(e\\), whose complements within \\(E\\setminus\\{e\\}\\) correspond to dual bases containing \\(e\\) with \\(e\\) removed—exactly bases of \\(M^*/e\\). Loop/coloop boundary cases give the same result directly. Applying the first identity to \\(M^*\\) and using \\(M^{**}=M\\) yields the second. Equivalently both follow immediately by substituting minor rank formulas into the dual-rank formula.

### Exercise 10.5 — Exact connectivity of \\(U_{2,4}\\)

Compute \\(\\lambda(A)\\) for every possible cardinality of \\(A\\subseteq E(U_{2,4})\\), and identify the proper nonempty sets with minimum connectivity.

#### Solution

Here \\(r(X)=\\min\\{|X|,2\\}\\) and \\(r(E)=2\\). If \\(|A|=0\\) or 4, \\(\\lambda(A)=0+2-2=0\\). If \\(|A|=1\\) or 3, the ranks of the two sides are 1 and 2, so \\(\\lambda(A)=1\\). If \\(|A|=2\\), both ranks are 2, so \\(\\lambda(A)=2\\). Thus among proper nonempty sets, the minimum 1 occurs exactly at singleton–three-set separations. The answer is symmetric under complementation and duality, as it must be.

## Completion ledger

The allocation is seven exercises for the Chapter 1 overview and five exercises for each of Chapters 2–10: \\(7+9\\cdot5=52\\). Part II begins with weighted greedy objectives in Chapter 11, so the two supplements have no chapter overlap. Each exercise here has a complete solution and an explicit proof, computation, construction, or counterexample certificate.
`;export{e as default};