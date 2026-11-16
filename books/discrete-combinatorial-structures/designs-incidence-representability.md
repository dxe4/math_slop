
# Designs, Incidence Structures, and Representability Limits {#section-1-designs-incidence-structures-and-representability-limit}

A design distributes small subsets evenly among larger blocks. That sentence contains two distinct mathematical layers. The incidence axioms are combinatorial and yield exact divisibility and counting conditions. A matrix representation places those incidences in a field, where rank and characteristic introduce new constraints. Confusing the layers leads to common overclaims: an incidence matrix always exists over the integers, but it need not represent the intended geometry over every field, and a parameter-feasible design need not exist.

This chapter builds the counting identities first, proves the incidence-rank inequality over the reals, analyzes symmetric designs, and then states carefully what field reduction can and cannot certify. A bounded exact-enumeration project closes the chapter.

<a id="section-5-prerequisites-and-scope"></a>
## Prerequisites and scope {#section-7-prerequisites-and-scope}

The chapter prerequisite is `extremal-set-compression`. We assume finite sets, binomial coefficients, double counting, elementary matrix rank, determinants, and finite fields. The later `linear-representability-fields` chapter deepens the optional representation comparisons. All blocks are labeled occurrences unless explicitly declared a simple design; repeated blocks are therefore allowed by the basic definition.

We do not classify projective planes or claim that every parameter set has a design. We distinguish an abstract incidence structure, its zero-one incidence matrix, and any matroid represented by columns over a named field.

<a id="section-11-entry-from-the-first-course-design-reading"></a>
## Entry from the first-course design reading {#section-13-entry-from-the-first-course-design-reading}

The [finite designs and set-systems reading](#/books/discrete-mathematics-proof-counting-structure/designs-and-set-systems) supplies the elementary entry route. Its original construction, packing discussion, project, and ten solved questions remain available at their existing identities. This section develops three of those examples in the present chapter's language. In the primary route, the incidence arguments can be read with elementary linear algebra; readers wishing to pursue the later representation comparisons can also consult [Linear Representability and Field Dependence](linear-representability-fields.md).

The first-course reading excludes repeated blocks unless stated otherwise. This chapter's basic definition instead counts labeled block occurrences. Both are legitimate conventions, but an equation must use one convention consistently. The three examples below use simple families, so they work under either convention.

<a id="section-17-worked-example-6-1-an-incidence-system-need-not-be-a-de"></a>
### Worked example 6.1: an incidence system need not be a design {#section-19-worked-example-6-1-an-incidence-system-need-not-be-a-de}

Let $X=\{1,2,3,4\}$ and take blocks $123,14,24$, where compressed notation denotes subsets. The point replications are $2,2,1,2$, summing to seven. The block sizes are $3,2,2$, also summing to seven, so the incidence identity holds. Nevertheless the system is not uniform. Pair $12$ occurs once and pair $34$ never occurs, so pair concurrence is not constant either. The general incidence identity is necessary for any set system and cannot by itself supply the additional uniformity and balance axioms of a design.

<a id="section-21-worked-example-6-2-a-cyclic-construction-with-a-collisi"></a>
### Worked example 6.2: a cyclic construction with a collision certificate {#section-23-worked-example-6-2-a-cyclic-construction-with-a-collisi}

On the residues modulo seven, translate the triple $\{0,1,3\}$ by each residue. The seven distinct blocks are
$$
 013,\quad124,\quad235,\quad346,\quad045,\quad156,\quad026.
$$
The ordered differences between distinct elements of the base triple are $1,3,2,6,4,5$, exactly the six nonzero residues. Given an ordered pair $(x,y)$ with $x\ne y$, the difference $y-x$ chooses a unique ordered base pair $(a,c)$. Translating by $x-a$ then gives the unique translated block occurrence containing that ordered pair. Thus every unordered pair occurs exactly once. This proves a $2-(7,3,1)$ design, rather than merely producing a plausible list of triples.

For instance, the pair $\{2,6\}$ occurs only in $026$. Its directed difference $6-2=4$ matches $0-3$ in the base triple; translation by six sends $(3,0)$ to $(2,6)$. The example gives a concrete bridge between a difference calculation and a universal pair-incidence claim. The binary-vector construction in the original Example 1 remains an alternative description with its own coordinate interpretation.

<a id="section-31-packing-and-covering-bounds-with-their-hypotheses"></a>
### Packing and covering bounds with their hypotheses {#section-33-packing-and-covering-bounds-with-their-hypotheses}

For $1\le t\le k\le v$, a $t$-packing is a family of $k$-subsets of a $v$-element set such that every $t$-subset lies in at most one block. A $t$-covering requires every $t$-subset to lie in at least one block. Count pairs $(T,B)$ with $|T|=t$ and $T\subseteq B$. Each block contributes $\binom kt$. A packing contributes at most $\binom vt$ pairs in total, so
$$
 b\le\left\lfloor\frac{\binom vt}{\binom kt}\right\rfloor.
$$
A covering contributes at least that many incidences, giving the reverse-direction bound
$$
 b\ge\left\lceil\frac{\binom vt}{\binom kt}\right\rceil.
$$
These inequalities follow from their respective incidence multiplicities; they do not assert that an extremal family attaining either bound exists.

<a id="section-43-worked-example-6-3-local-replication-sharpens-a-global-"></a>
### Worked example 6.3: local replication sharpens a global packing bound {#section-45-worked-example-6-3-local-replication-sharpens-a-global-}

A triple packing on eight points has at most $\lfloor28/3\rfloor=9$ blocks by the global pair count. Fix one point. Every triple through it uses two of its seven possible partners, and no partner can be reused in another such triple because that pair would repeat. Therefore its replication is at most three. Summing this local bound over all eight points gives $3b\le8\cdot3=24$, hence $b\le8$. The stronger conclusion comes from information discarded by the global count. It remains an upper bound; proving attainability would require an explicit packing or a separate construction.


<a id="section-48-1-designs-and-their-derived-parameters"></a>
## 1. Designs and their derived parameters {#section-50-1-designs-and-their-derived-parameters}

A **$t-(v,k,\lambda)$ design** consists of a point set $X$ with $|X|=v$ and a multiset $B$ of $k$-subsets called blocks such that every $t$-subset of $X$ lies in exactly $\lambda$ blocks. Usually $0\le t\le k\le v$ and $\lambda$ is a positive integer. Let $b=|B|$, counting repeated blocks.

For $0\le s\le t$, fix an $s$-subset $S$ of points and let $\lambda_s$ be the number of blocks containing $S$.

**Theorem 6.1 (Derived-parameter).** The number $\lambda_s$ is independent of the chosen $S$ and satisfies

$\lambda_s \binom{k-s}{t-s}=\lambda \binom{v-s}{t-s}$.

Thus

$\lambda_s=\lambda \binom{v-s}{t-s}/\binom{k-s}{t-s}$

must be an integer.

**Proof.** Count pairs $(T,B)$ with $S\subseteq T\subseteq B$, $|T|=t$, and $B$ a block. Choose $T$ first: there are $\binom{v-s}{t-s}$ possibilities, each in exactly $\lambda$ blocks. Choose $B$ first: if $B$ contains $S$, it contains $\binom{k-s}{t-s}$ eligible $T$. Equating the two counts proves both the formula and independence from $S$. ∎

At $s=0$,

$b \binom{k}{t}=\lambda \binom{v}{t}$.

For a 2-design, write $r=\lambda_1$ for the replication number of each point. Then

$r(k-1)=\lambda(v-1)$,  and  $bk=vr$.

These are necessary arithmetic conditions. They are not sufficient for existence.

<a id="section-76-example-1-the-seven-triples-on-seven-points"></a>
### Example 1: the seven triples on seven points {#section-78-example-1-the-seven-triples-on-seven-points}

Let $X$ be the seven nonzero vectors of $F_2^3$, with scalar multiples identified (which changes nothing because the only nonzero scalar is one). Take as blocks the triples $\{x,y,x+y\}$. There are seven blocks, every block has size three, and every pair $\{x,y\}$ lies in the unique block $\{x,y,x+y\}$. Hence this is a $2-(7,3,1)$ design. The formulas give $r=1\cdot 6/2=3$ and $b=7\cdot 3/3=7$.

<a id="section-80-2-divisibility-filters-and-residual-arithmetic"></a>
## 2. Divisibility filters and residual arithmetic {#section-82-2-divisibility-filters-and-residual-arithmetic}

The derived parameters give a hierarchy of divisibility tests:

$\binom{k-s}{t-s}$ divides $\lambda \binom{v-s}{t-s}$ for $0\le s\le t$.

Failure at any level proves nonexistence. Passing all levels only leaves a candidate.

<a id="section-88-example-2-a-parameter-set-rejected-immediately"></a>
### Example 2: a parameter set rejected immediately {#section-90-example-2-a-parameter-set-rejected-immediately}

A $2-(6,3,1)$ design would require

$r=\lambda(v-1)/(k-1)=5/2$,

not an integer. Therefore it does not exist. There is no need to search for blocks or invoke linear algebra.

<a id="section-96-example-3-arithmetic-is-not-an-existence-proof"></a>
### Example 3: arithmetic is not an existence proof {#section-98-example-3-arithmetic-is-not-an-existence-proof}

For a hypothetical $2-(16,6,1)$ design, $r=15/5=3$ and $b=16\cdot 3/6=8$ are integers. But the incidence-rank inequality below requires $b\ge v$ for a nontrivial 2-design, whereas $8<16$. The elementary divisibility filters pass and a stronger incidence argument rejects the parameters.

<a id="section-100-3-incidence-matrices-and-row-product-identities"></a>
## 3. Incidence matrices and row-product identities {#section-102-3-incidence-matrices-and-row-product-identities}

Order the points and blocks. The **point-by-block incidence matrix** $N$ is the $v\times b$ zero-one matrix with $N_{xB}=1$ exactly when $x\in B$.

For a $2-(v,k,\lambda)$ design, the dot product of a row with itself is $r$, and the dot product of two distinct rows is $\lambda$. Over the integers,

$NN^T=(r-\lambda)I_v+\lambda J_v$,

where $J_v$ is the all-ones matrix. Also

$N 1_b=r 1_v$,  and  $N^T 1_v=k 1_b$.

The row-product identity is an equality of integer matrices. It can then be interpreted over $\mathbb{R}$, $\mathbb{Q}$, or a finite field, but its rank consequences depend on that field.

**Eigenvalue audit over the reals.** The matrix $(r-\lambda)I+\lambda J$ has eigenvalue $r-\lambda+\lambda v=r+\lambda(v-1)=rk$ on the all-ones vector, using $r(k-1)=\lambda(v-1)$. On the perpendicular subspace it has eigenvalue $r-\lambda$ with multiplicity $v-1$.

For a nontrivial 2-design with $1<k<v$, we have $r>\lambda$: indeed $r/\lambda=(v-1)/(k-1)>1$. Both eigenvalues are positive, so $NN^T$ is nonsingular over $\mathbb{R}$.

<a id="section-118-4-the-incidence-rank-inequality"></a>
## 4. The incidence-rank inequality {#section-120-4-the-incidence-rank-inequality}

**Incidence-rank inequality.** Every nontrivial $2-(v,k,\lambda)$ design satisfies $b\ge v$.

**Proof.** By the preceding eigenvalue audit, the $v\times v$ real matrix $NN^T$ is nonsingular, so it has rank $v$. Since $\operatorname{rank}(NN^T)\le \operatorname{rank}(N)\le \min(v,b)$, we obtain $v\le b$. ∎

The proof permits repeated blocks; simplicity is not needed. The assumptions $1<k<v$ are needed. If $k=v$, repeating the whole point set gives a degenerate 2-design with arbitrary $b=\lambda$, and $b\ge v$ can fail.

Combining the incidence-rank inequality with $bk=vr$ gives $r\ge k$. Equality $b=v$ is the symmetric case developed next.

<a id="section-128-example-4-rejecting-eight-blocks-on-sixteen-points"></a>
### Example 4: rejecting eight blocks on sixteen points {#section-130-example-4-rejecting-eight-blocks-on-sixteen-points}

The candidate $2-(16,6,1)$ from Example 3 has $b=8$, but the incidence-rank inequality requires $b\ge 16$. Thus no such design exists, despite integral $r$ and $b$. This shows why a search should apply both arithmetic and rank filters before branching.

<a id="section-132-5-symmetric-designs-and-dual-incidence"></a>
## 5. Symmetric designs and dual incidence {#section-134-5-symmetric-designs-and-dual-incidence}

A 2-design is **symmetric** when $b=v$. Then $bk=vr$ forces $r=k$. The term “symmetric” refers to equal numbers of points and blocks, not to an assumed automorphism group.

**Theorem 6.2 (Constant block-intersection).** In a nontrivial symmetric
$2-(v,k,\lambda)$ design with $1<k<v$, any two distinct blocks meet in
exactly $\lambda$ points. Consequently, interchanging points and blocks
produces another $2-(v,k,\lambda)$ design.

**Proof.** The square incidence matrix $N$ is invertible over $\mathbb{R}$ because $NN^T$ is. With $r=k$, set

$A=NN^T=(k-\lambda)I+\lambda J$.

The inverse of $aI+cJ$ is $a^{-1}I-c/[a(a+cv)]J$ when the denominators are nonzero. Here $a=k-\lambda$ and $a+cv=k-\lambda+\lambda v=k^2$, using $\lambda(v-1)=k(k-1)$. Thus

$A^{-1}=1/(k-\lambda) I - \lambda/[(k-\lambda)k^2] J$.

Because $N$ is invertible, $N^T A^{-1}N=I$. Also $N^TJN=(N^T1)(N^T1)^T=k^2J$. Substitution yields

$1/(k-\lambda) N^TN - \lambda/(k-\lambda)J=I$,

so

$N^TN=(k-\lambda)I+\lambda J$.

Its off-diagonal entries count intersections of distinct blocks and equal $\lambda$. Its diagonal entries equal $k$. Therefore the transposed incidence structure has the same pair counts and is a design. ∎

<a id="section-159-example-5-the-complement-of-a-symmetric-design"></a>
### Example 5: the complement of a symmetric design {#section-161-example-5-the-complement-of-a-symmetric-design}

Replace every block of a nontrivial symmetric $2-(v,k,\lambda)$ design by its complement. The new block size is $v-k$. Each point occurs in $v-k$ blocks because it was absent from $v-k$ of the original $v$ blocks. Two points occur together in

$v-|B_x\cup B_y|=v-(k+k-\lambda)=v-2k+\lambda$

complementary blocks. When $v-k\ge 2$, the complement is therefore symmetric
with parameters

$2-(v,v-k,v-2k+\lambda)$.

If $v-k=1$, the complements are singleton blocks. Their pair count is zero,
as the same formula records, but they are not a 2-design under this chapter's
convention $2\le k$ and positive $\lambda$. They remain a valid uniform incidence
structure. This endpoint must not be smuggled into the 2-design theorem.

For the $2-(7,3,1)$ design, this gives a $2-(7,4,2)$ design.

<a id="section-177-6-projective-planes-as-designs"></a>
## 6. Projective planes as designs {#section-179-6-projective-planes-as-designs}

A finite projective plane of order $q$ is an incidence structure satisfying: every two points lie on a unique line; every two lines meet in a unique point; every line has $q+1$ points; and every point lies on $q+1$ lines. Standard nondegeneracy axioms exclude the tiny collapsed cases.

Counting shows that it has $q^2+q+1$ points and the same number of lines. Taking lines as blocks gives a symmetric

$2-(q^2+q+1,q+1,1)$ design.

When $q$ is a prime power, the one-dimensional subspaces of $\mathbb{F}_q^3$ as points and two-dimensional subspaces as lines give the **coordinate projective plane**. This construction proves existence for prime-power orders. It does not prove that planes exist only at prime-power orders, nor that every abstract plane arises from this coordinate construction.

<a id="section-187-example-6-order-three"></a>
### Example 6: order three {#section-189-example-6-order-three}

The vector-space construction over $\mathbb{F}_3$ gives $v=3^2+3+1=13$, block size four, replication four, and $b=13$. Any two lines meet in one point, agreeing with the symmetric-design theorem. The incidence matrix is $13\times 13$; its behavior after reduction modulo three differs from its real rank behavior.

<a id="section-191-7-field-sensitive-rank-of-an-incidence-matrix"></a>
## 7. Field-sensitive rank of an incidence matrix {#section-193-7-field-sensitive-rank-of-an-incidence-matrix}

Reduce the integer incidence matrix $N$ modulo a prime $p$. The identity

$NN^T=(r-\lambda)I+\lambda J$

still holds over $\mathbb{F}_p$, but the real positive-definiteness proof disappears. If neither eigenvalue $r-\lambda$ nor $rk$ vanishes modulo $p$, the row-product matrix is nonsingular, so $N$ has row rank $v$ over $\mathbb{F}_p$. If either vanishes, the row-product matrix is singular; this alone does **not** determine $\operatorname{rank}_{\mathbb{F}_p}(N)$, because a matrix over a finite field may have nonzero vectors orthogonal to themselves and $\operatorname{rank}(NN^T)$ may be strictly smaller than $\operatorname{rank}(N)$.

This yields a safe implication:

$\det((r-\lambda)I+\lambda J)\ne 0 \text{ in } \mathbb{F}_p
\Longrightarrow \operatorname{rank}_{\mathbb{F}_p}(N)=v$.

The converse is not automatic.

<a id="section-206-example-7-the-binary-seven-point-incidence-rank-boundar"></a>
### Example 7: the binary seven-point incidence rank boundary {#section-208-example-7-the-binary-seven-point-incidence-rank-boundar}

For the $2-(7,3,1)$ design, $NN^T=2I+J$. Over $\mathbb{R}$ it is nonsingular. Modulo two it becomes $J$, of rank one, while the incidence matrix itself has rank greater than one. Thus reading $\operatorname{rank}(N)$ directly from $\operatorname{rank}(NN^T)$ would be false in characteristic two. Exact row reduction over the named field is required.

<a id="section-210-8-incidence-does-not-automatically-mean-matroid-represe"></a>
## 8. Incidence does not automatically mean matroid representation {#section-212-8-incidence-does-not-automatically-mean-matroid-represe}

Every incidence structure has a zero-one matrix, but several different matroids might be associated with it:

- the column matroid of the point-by-block matrix, whose ground elements are blocks;
- the row matroid, whose ground elements are points;
- a rank-three point matroid in which collinear triples are dependent;
- a transversal or gammoid construction derived from the incidence bipartite graph.

These are different definitions. One cannot say “the design is representable” without specifying the ground set, field, and independence rule.

For the coordinate projective plane over $\mathbb{F}_q$, choose a nonzero vector representative for each projective point. These columns over $\mathbb{F}_q$ represent a rank-three matroid in which three distinct points are dependent exactly when they are collinear. Four-point sets are necessarily dependent because the ambient rank is three, so lines are not the only dependent sets. Scaling representatives does not change the matroid.

For an arbitrary abstract projective plane, the analogous rank-three matroid exists combinatorially, but representation over a field is an additional coordinatizability condition. The incidence axioms alone do not supply coordinates over every field. Even for a represented geometry, changing characteristic can change circuit supports.

<a id="section-225-9-resolvable-designs-and-parallel-classes"></a>
## 9. Resolvable designs and parallel classes {#section-227-9-resolvable-designs-and-parallel-classes}

A **parallel class** in a $2-(v,k,\lambda)$ design is a set of pairwise disjoint blocks partitioning the point set. It contains exactly $v/k$ blocks, so $k$ must divide $v$. A design is **resolvable** if its blocks partition into parallel classes.

If a 2-design is resolvable, each point occurs once in every parallel class. Hence the number of parallel classes is $r$, and $b=r(v/k)$, consistent with $bk=vr$. These equations are necessary, not sufficient for resolvability.

<a id="section-231-example-8-affine-lines"></a>
### Example 8: affine lines {#section-233-example-8-affine-lines}

In the affine plane over $\mathbb{F}_q$, points are pairs in $\mathbb{F}_q^2$. Lines of a fixed slope partition the $q^2$ points into $q$ disjoint lines of size $q$; the vertical lines form one additional parallel class. Altogether the lines form a resolvable $2-(q^2,q,1)$ design with $q+1$ parallel classes. The projective completion adds one point at infinity for each direction and destroys disjointness: projective lines always meet.

<a id="section-235-10-derived-and-residual-designs"></a>
## 10. Derived and residual designs {#section-237-10-derived-and-residual-designs}

Let $D$ be a $t-(v,k,\lambda)$ design with $1\le t\le k<v$ and $\lambda>0$, and fix a point $x$.

The **derived design at $x$** uses point set $X\setminus \{x\}$ and blocks $B\setminus \{x\}$ for blocks $B$ containing $x$. Every $(t-1)$-subset $T$ of the remaining points extends with $x$ to a $t$-subset, so it lies in exactly $\lambda$ derived blocks. Thus the derived design is a

$(t-1)-(v-1,k-1,\lambda)$ design.

The **residual incidence structure at $x$** keeps blocks not containing $x$ on the remaining points. For a $(t-1)$-subset $T$, the number of original blocks containing $T$ is $\lambda_{t-1}$, and exactly $\lambda$ of those also contain $x$. Hence the residual structure is a

$(t-1)-(v-1,k,\lambda_{t-1}-\lambda)$ design.

These constructions preserve multiplicities and therefore preserve simplicity
when the original design is simple. They need not preserve resolvability. The range hypotheses matter. For $t=0$, the displayed $(t-1)$-design types have negative strength and $\lambda_{t-1}$ is not defined, so no derived/residual design theorem is asserted. For $k=v$, all blocks contain $x$ and the residual block multiset is empty; its exact zero incidence counts do not make it a positive-$\lambda$ design of block size $k$ on $v-1$ points. More generally, any degenerate zero multiplicity or insufficient block size must be stated as an incidence-count identity rather than silently called a design under the positive-parameter convention.

<a id="section-250-11-complete-designs-and-multiplicity"></a>
## 11. Complete designs and multiplicity {#section-252-11-complete-designs-and-multiplicity}

The most direct existence construction takes every $k$-subset of a $v$-point set as a block. Every $t$-subset is then contained in exactly

$\binom{v-t}{k-t}$

blocks, giving a $t-(v,k,\binom{v-t}{k-t})$ design. Repeating every block $c$ times multiplies $\lambda$ and every derived parameter by $c$. This explains why the multiset convention is algebraically natural.

A **simple** design contains no repeated block. Simplicity imposes the elementary upper bound

$\lambda\le \binom{v-t}{k-t}$,

because that is the total number of distinct $k$-sets containing a fixed $t$-set. Equality forces the complete design. With repeated blocks, this upper bound disappears.

<a id="section-264-example-9-the-complete-triple-system"></a>
### Example 9: the complete triple system {#section-266-example-9-the-complete-triple-system}

All triples on six points form a $2-(6,3,4)$ design: a fixed pair can be completed by any of the other four points. Here $b=\binom{6}{3}=20$ and $r=\binom{5}{2}=10$. Repeating each triple twice gives a nonsimple $2-(6,3,8)$ design with forty labeled block occurrences.

Complements provide another construction. In a general 2-design, the complement blocks have size $v-k$. A point lies in $b-r$ complement blocks, and two points lie together in

$b-2r+\lambda$

complement blocks. Thus, when $v-k\ge 2$, the complement of a
$2-(v,k,\lambda)$ design is a

$2-(v,v-k,b-2r+\lambda)$ design, provided block multiplicities are retained.
When $v-k<2$, the formula still gives the exact pair count, but the
complementary incidence structure lies outside our definition of a 2-design.
The symmetric formula in Example 5 is the specialization $b=v,r=k$.

<a id="section-280-12-pairwise-balanced-designs"></a>
## 12. Pairwise balanced designs {#section-282-12-pairwise-balanced-designs}

A **pairwise balanced design** permits block sizes to vary while requiring every pair of distinct points to occur in exactly $\lambda$ blocks. If $K$ is the allowed set of block sizes, one writes $\mathrm{PBD}(v,K,\lambda)$. For a fixed point $x$, double counting pairs $(y,B)$ with $x,y\in B$ gives

$\sum_{B\ni x}(|B|-1)=\lambda(v-1)$.

Counting unordered point pairs globally gives

$\sum_{B\in B} \binom{|B|}{2}=\lambda \binom{v}{2}$.

These identities replace $r(k-1)=\lambda(v-1)$ and $b \binom{k}{2}=\lambda \binom{v}{2}$ when block sizes vary. There may be no single replication number: the number of incident blocks can depend on the point even though the weighted sum above does not.

<a id="section-292-example-10-groups-and-cross-pairs"></a>
### Example 10: groups and cross-pairs {#section-294-example-10-groups-and-cross-pairs}

Partition six points into three groups of size two and take as blocks the groups together with every transversal choosing one point from each group. A pair in the same group lies in its group block, while a pair in different groups lies in two transversal blocks, so this is not pairwise balanced with one $\lambda$. The weighted identities expose the mismatch but do not repair it. Varying block size is permission, not a guarantee of balance.

<a id="section-296-13-binary-codes-from-incidence-rows"></a>
## 13. Binary codes from incidence rows {#section-298-13-binary-codes-from-incidence-rows}

Over $F_2$, the row span of an incidence matrix $N$ is a binary linear code of length $b$; the columns instead give length-$v$ words only after transposition. This convention must be stated. The row for a point records the blocks through that point and has support size $r$. The dot product of two distinct point rows is $\lambda \pmod{2}$, while a row's self-dot-product is $r \pmod{2}$.

If both $r$ and $\lambda$ are even, the row code is self-orthogonal: every pair of generating rows, including equal pairs, has zero dot product. It follows that its dimension is at most $b/2$. If $\lambda$ is even but $r$ is odd, distinct generators are orthogonal but each has self-dot-product one, so the code is not self-orthogonal. These are safe parity deductions from the row-product identity.

Minimum distance is not determined by the parameters alone. A linear combination of incidence rows corresponds to the symmetric difference of their block-neighborhoods, and higher intersection data can affect its weight. Likewise, having the same $2-(v,k,\lambda)$ parameters does not force two designs to have equivalent binary codes.

<a id="section-304-example-11-complement-parity"></a>
### Example 11: complement parity {#section-306-example-11-complement-parity}

For the complete $2-(6,3,4)$ design, $r=10$ and $\lambda=4$ are both even. Its six point-incidence rows therefore generate a self-orthogonal binary code of length twenty. This proves an upper bound of ten on the code dimension, but it does not determine the exact dimension or minimum distance; row reduction and word enumeration would be additional computations.

<a id="section-308-14-automorphisms-and-orbit-checks"></a>
## 14. Automorphisms and orbit checks {#section-310-14-automorphisms-and-orbit-checks}

An automorphism of a design is a permutation of points that carries the block multiset to itself, including multiplicities. It induces a permutation of incidence-matrix rows and a compatible permutation of columns. Therefore it preserves point and block intersection numbers and preserves matrix rank over every field.

If a group $G$ acts on candidate blocks, a $G$-invariant design must choose constant multiplicity on each block orbit. This can reduce an exact search to integer variables indexed by orbits. But imposing $G$-invariance searches only for designs with that symmetry. Failure of the orbit-restricted system does not refute existence of an asymmetric design.

Orbit--stabilizer also audits construction counts. If $G$ acts transitively on points, every point has the same replication number because incidence is transported by automorphisms. If it acts transitively on blocks, all block stabilizers have equal size and the block count is $|G|/|G_B|$. These deductions follow from the action; transitivity should never be inferred merely from constant design parameters.

<a id="section-316-15-a-bounded-exact-enumeration-project"></a>
## 15. A bounded exact-enumeration project {#section-318-15-a-bounded-exact-enumeration-project}

<a id="section-318-project-certify-or-refute-a-small-simple-design-candida"></a>
### Project: certify or refute a small simple-design candidate {#section-320-project-certify-or-refute-a-small-simple-design-candida}

Choose parameters with $v\le 15$, $2\le t\le 3$, and $k<v$, and explicitly restrict
the search target to a **simple** design. The entire project must remain within
this bound. Any negative result therefore means “no simple design with these
parameters”; it does not rule out a design with repeated blocks.

1. Compute every $\lambda_s$ as a reduced rational number. Stop with a divisibility certificate if any is nonintegral.
2. For $t=2$, apply the incidence-rank inequality and record whether it adds an obstruction.
3. Enumerate the $\binom{v}{k}$ candidate blocks in lexicographic order as exact bitsets.
4. Build the $t$-subset by block incidence matrix $A$. Seek a zero-one vector $z$ satisfying $Az=\lambda 1$; the zero-one domain is exactly the declared simplicity restriction.
5. Use backtracking with the first uncovered $t$-subset as the branching rule. Prune when a count exceeds $\lambda$ or when too few remaining blocks can fill a deficit.
6. Break only verified symmetries, for example by requiring the lexicographically first block in a point-transitive normalization that you prove preserves feasibility. Otherwise do not claim exhaustive search.
7. If a design is found, independently recompute all $t$-subset counts, $r$, $b$, the point-by-block incidence matrix, and its exact ranks over $\mathbb{Q}$ and at least two named finite fields.
8. If none is found, retain the branch order, pruning rules, visited-node count,
   and a hash of the candidate-block order as a reproducibility log. To claim a
   machine-checked exhaustive refutation, also provide a versioned
   deterministic solver and a replayable proof trace consumed by an
   independent checker; summary metadata alone are not a completeness
   certificate.

The deliverable is not merely a block list. It is a reproducibility packet containing parameters, exact equations, proof of each pruning rule, and either a verified construction or an independently checkable exhaustive bounded refutation. Do not infer nonexistence from a timeout or from an unreplayable node count.

<a id="section-341-16-common-errors-and-representability-warnings"></a>
## 16. Common errors and representability warnings {#section-343-16-common-errors-and-representability-warnings}

1. **Necessary divisibility is treated as sufficient.** Integral parameters do not construct a design.
2. **Repeated blocks disappear silently.** The basic definition is a multiset unless simplicity is stated.
3. **The incidence-rank inequality is applied to $k=v$.** Its nontrivial hypothesis $1<k<v$ matters.
4. **Symmetric means highly automorphic.** Here it means only $b=v$.
5. **Real row-product rank is copied to characteristic $p$.** Eigenvalues can vanish modulo $p$, and $\operatorname{rank}(NN^T)$ need not equal $\operatorname{rank}(N)$.
6. **An incidence matrix is called “the” representation.** Ground elements and the independence rule must be named.
7. **Every projective plane is assigned coordinates over $\mathbb{F}_q$.** The vector construction produces coordinate planes; arbitrary planes need not be coordinatizable over that field.
8. **Prime-power constructions become a classification.** Existence for prime powers is not an only-if theorem.
9. **A failed search is called nonexistence.** Only an exhaustive search with justified pruning supplies that certificate within the bounded domain.
10. **An orbit-restricted search is called exhaustive.** It excludes designs without the imposed automorphism group.
11. **Code parameters are inferred from design parameters alone.** Parity gives orthogonality information, not generally dimension or minimum distance.

<a id="section-355-17-solved-exercises"></a>
## 17. Solved exercises {#section-357-17-solved-exercises}

<a id="section-357-exercise-1-derive-the-replication-equations"></a>
### Exercise 1: derive the replication equations {#section-359-exercise-1-derive-the-replication-equations}
<a id="designs-incidence-representability-ex-1"></a>

In a $2-(v,k,\lambda)$ design, derive $r(k-1)=\lambda(v-1)$ and $bk=vr$.

<details>
<summary>Hint 1</summary>

**Hint.** Fix a point and count other-point/block incidences through it.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then count all point-block incidences by points and by blocks.

</details>

<details>
<summary>Solution</summary>

**Solution.** Fix a point $x$ and count pairs $(y,B)$ with $y\ne x$ and $\{x,y\}\subseteq B$. Choosing $y$ gives $\lambda(v-1)$; choosing one of the $r$ blocks through $x$ gives $r(k-1)$. Thus the first equation holds. Counting all point-block incidences gives $vr$ by points and $bk$ by blocks, proving the second.

</details>

<a id="section-383-exercise-2-test-candidate-parameters"></a>
### Exercise 2: test candidate parameters {#section-385-exercise-2-test-candidate-parameters}
<a id="designs-incidence-representability-ex-2"></a>

Can a $2-(10,4,2)$ design exist according to the elementary parameter tests?

<details>
<summary>Hint 1</summary>

**Hint.** Compute replication and block numbers before invoking an obstruction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both are integers, and the block count is at least the point count; passing these tests does not build a design.

</details>

<details>
<summary>Solution</summary>

**Solution.** The replication number would be $r=2\cdot 9/3=6$, and $b=vr/k=10\cdot 6/4=15$, both integers. The incidence-rank bound gives $15\ge 10$, so it creates no obstruction. Therefore these tests do not refute the parameters. This is not an existence proof.

</details>

<a id="section-409-exercise-3-audit-a-claimed-incidence-rank-obstruction"></a>
### Exercise 3: audit a claimed incidence-rank obstruction {#section-411-exercise-3-audit-a-claimed-incidence-rank-obstruction}
<a id="designs-incidence-representability-ex-3"></a>

A claim says the incidence-rank inequality proves that no nontrivial $2-(12,6,5)$
design exists. Audit the claim.

<details>
<summary>Hint 1</summary>

**Hint.** Recalculate $r,b$ rather than trusting the claimed contradiction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two numbers are eleven and twenty-two, so the incidence-rank inequality is satisfied.

</details>

<details>
<summary>Solution</summary>

**Solution.** We get $r=5\cdot 11/5=11$ and $b=12\cdot 11/6=22$, so divisibility and the incidence-rank check both pass. Thus the requested conclusion does not follow: in fact the parameters are those of all 6-subsets only at a different lambda, and further analysis is needed. The correct diagnosis is that the supplied data do **not** yield an incidence-rank obstruction. This exercise guards against inventing contradictions.

</details>

<a id="section-436-exercise-4-complement-parameters"></a>
### Exercise 4: complement parameters {#section-438-exercise-4-complement-parameters}
<a id="designs-incidence-representability-ex-4"></a>

Find the parameters of the block-complement of a $2-(11,5,2)$ design.

<details>
<summary>Hint 1</summary>

**Hint.** Determine $r,b$ first, then count original blocks avoiding a fixed pair.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The complement pair parameter is $b-2r+\lambda$.

</details>

<details>
<summary>Solution</summary>

**Solution.** First $r=2\cdot 10/4=5$ and $b=11\cdot 5/5=11$, so it is symmetric. The complementary design has block size $11-5=6$ and pair parameter $11-2\cdot 5+2=3$. Hence it is a symmetric $2-(11,6,3)$ design.

</details>

<a id="section-462-exercise-5-determinant-of-the-row-product-matrix"></a>
### Exercise 5: determinant of the row-product matrix {#section-464-exercise-5-determinant-of-the-row-product-matrix}
<a id="designs-incidence-representability-ex-5"></a>

For a nontrivial $2-(v,k,\lambda)$ design, compute $\det(NN^T)$ over the integers.

<details>
<summary>Hint 1</summary>

**Hint.** Use the two eigenspaces of $(r-\lambda)I+\lambda J$ over the reals.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The all-ones eigenvalue is $rk$, and the other eigenvalue is $r-\lambda$ with multiplicity $v-1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The all-ones eigenvalue is $rk$; the other $v-1$ eigenvalues are $r-\lambda$. Therefore

$\det(NN^T)=rk(r-\lambda)^{v-1}$.

This is positive over the reals. Modulo a prime dividing $rk(r-\lambda)$, it vanishes, but that alone does not give the rank of $N$.

</details>

<a id="section-492-exercise-6-derived-binary-seven-point-design"></a>
### Exercise 6: derived binary seven-point design {#section-494-exercise-6-derived-binary-seven-point-design}
<a id="designs-incidence-representability-ex-6"></a>

Derive the $2-(7,3,1)$ design at one point and give its parameters.

<details>
<summary>Hint 1</summary>

**Hint.** Take the lines containing the chosen point and delete that point from them.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There are three such lines, and the six other points occur exactly once in the resulting pairs.

</details>

<details>
<summary>Solution</summary>

**Solution.** The derived design has the remaining six points. Its blocks are the three lines through the chosen point with that point removed, so it is a $1-(6,2,1)$ design: three disjoint pairs partition the six points. Every remaining point occurs exactly once.

</details>

<a id="section-518-exercise-7-residual-binary-seven-point-design"></a>
### Exercise 7: residual binary seven-point design {#section-520-exercise-7-residual-binary-seven-point-design}
<a id="designs-incidence-representability-ex-7"></a>

Take the residual design of the binary $2-(7,3,1)$ design at one point.

<details>
<summary>Hint 1</summary>

**Hint.** Keep the lines avoiding the chosen point.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each remaining point lies on $r-\lambda$ kept lines, while the block size remains three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $\lambda_1=r=3$, so the residual parameter is $r-\lambda=2$. The four lines not through the chosen point remain triples on six points, forming a $1-(6,3,2)$ design. There are $6\cdot 2/3=4$ blocks, as expected.

</details>

<a id="section-544-exercise-8-rank-implication-over-a-finite-field"></a>
### Exercise 8: rank implication over a finite field {#section-546-exercise-8-rank-implication-over-a-finite-field}
<a id="designs-incidence-representability-ex-8"></a>

Let a 2-design have parameters for which neither $r-\lambda$ nor $rk$ is divisible by a prime $p$. Prove its incidence matrix has row rank $v$ over $\mathbb{F}_p$.

<details>
<summary>Hint 1</summary>

**Hint.** The determinant formula is an integer identity that can be reduced modulo $p$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A nonsingular $NN^T$ forces $N$ to have full row rank by the rank-of-product inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The row-product matrix has determinant $rk(r-\lambda)^{v-1}$, nonzero modulo $p$ under the hypotheses. Thus $NN^T$ is invertible over $\mathbb{F}_p$. Since $\operatorname{rank}(NN^T)\le \operatorname{rank}(N)\le v$, the row rank of $N$ is exactly $v$.

</details>

<a id="section-570-exercise-9-why-the-converse-fails-as-an-argument"></a>
### Exercise 9: why the converse fails as an argument {#section-572-exercise-9-why-the-converse-fails-as-an-argument}
<a id="designs-incidence-representability-ex-9"></a>

Suppose $NN^T$ is singular over $\mathbb{F}_p$. What may be concluded about $\operatorname{rank}(N)$?

<details>
<summary>Hint 1</summary>

**Hint.** The product-rank inequality has only one direction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Over a finite field, a nonzero row vector can have zero self-dot-product; singularity of the Gram matrix need not mean dependent rows.

</details>

<details>
<summary>Solution</summary>

**Solution.** Only that the row-product full-rank certificate has failed. One has $\operatorname{rank}(NN^T)\le \operatorname{rank}(N)$, but strict inequality is possible over finite fields because the standard bilinear form can have nonzero isotropic vectors and a row space can meet its orthogonal complement. Exact elimination on $N$ is needed. Singularity of the row-product matrix does not by itself prove $\operatorname{rank}(N)<v$.

</details>

<a id="section-596-exercise-10-resolvability-arithmetic"></a>
### Exercise 10: resolvability arithmetic {#section-598-exercise-10-resolvability-arithmetic}
<a id="designs-incidence-representability-ex-10"></a>

If a $2-(15,3,1)$ design is resolvable, how many blocks and parallel classes does it have?

<details>
<summary>Hint 1</summary>

**Hint.** Each parallel class covers every point once.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compute $r,b$, then divide the blocks into classes of $v/k$ triples.

</details>

<details>
<summary>Solution</summary>

**Solution.** The replication number is $r=14/2=7$, and $b=vr/k=15\cdot 7/3=35$. Each parallel class partitions 15 points into five triples. Since every point occurs once per class and seven times total, there are seven parallel classes; indeed $7\cdot 5=35$ blocks.

</details>

<a id="section-622-exercise-11-complete-design-parameters"></a>
### Exercise 11: complete-design parameters {#section-624-exercise-11-complete-design-parameters}
<a id="designs-incidence-representability-ex-11"></a>

Determine the parameters of the complete 3-uniform design on eight points when it is viewed as a 2-design.

<details>
<summary>Hint 1</summary>

**Hint.** Fix a pair and count its extensions to a triple.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then count all triples and all triples through one fixed point.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every pair extends to a triple by choosing one of the remaining six points, so $\lambda=6$. Thus it is a $2-(8,3,6)$ design. It has $b=\binom{8}{3}=56$ blocks and replication $r=\binom{7}{2}=21$; the equations $r(k-1)=42=\lambda(v-1)$ and $bk=168=vr$ verify the count.

</details>

<a id="section-648-exercise-12-self-orthogonality-test"></a>
### Exercise 12: self-orthogonality test {#section-650-exercise-12-self-orthogonality-test}
<a id="designs-incidence-representability-ex-12"></a>

Let a design have even $r$ and even $\lambda$. Prove the binary row code of its point-by-block incidence matrix is self-orthogonal.

<details>
<summary>Hint 1</summary>

**Hint.** Check dot products on the generating incidence rows.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Even replication kills self-dot-products and even concurrence kills cross-dot-products in characteristic two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each generating row has dot product $r=0$ with itself in $F_2$. Two distinct generating rows have dot product $\lambda=0$. Bilinearity then makes the dot product of any two linear combinations zero. Hence the entire row span is contained in its orthogonal complement.

</details>

<a id="section-674-exercise-13-complement-a-nonsymmetric-design"></a>
### Exercise 13: complement a nonsymmetric design {#section-676-exercise-13-complement-a-nonsymmetric-design}
<a id="designs-incidence-representability-ex-13"></a>

Find the complement parameters of a $2-(9,3,1)$ design, assuming one exists.

<details>
<summary>Hint 1</summary>

**Hint.** The block count is preserved by complementation even without symmetry.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $r'=b-r$, $k'=v-k$, and $\lambda'=b-2r+\lambda$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The formulas give $r=8/2=4$ and $b=9\cdot 4/3=12$. Complement blocks have size six, replication $b-r=8$, and pair parameter $b-2r+\lambda=12-8+1=5$. The complement is therefore a $2-(9,6,5)$ design. It is not symmetric because it still has twelve blocks on nine points.

</details>

<a id="section-700-connections-and-chapter-summary"></a>
## Connections and chapter summary {#section-702-connections-and-chapter-summary}

Design parameters come from exact double counts. Derived numbers and divisibility filter impossible candidates, while the incidence row-product identity proves the incidence-rank inequality and the constant block-intersection property of symmetric designs. Projective and affine geometries supply important constructions, but only prime-power coordinate constructions were asserted. Over finite fields, incidence rank is characteristic-sensitive: a nonsingular row-product matrix certifies full row rank, while a singular one requires direct elimination. Finally, incidence structures do not carry a unique implied matroid representation. Every representability claim must name its ground set, independence rule, and field. The bounded project turns those distinctions into an auditable exact computation.

<a id="section-704-source-and-verification-note"></a>
## Sources {#section-706-source-and-verification-note}

Further reading includes van Lint–Wilson, *A Course in Combinatorics*, 2nd ed. (2001), and Stinson, *Combinatorial Designs* (2004), as design-theory routes, with no theorem/page locator specified here for the parameter identities or Fisher-type inequality. They remain necessary-condition claims unless existence is separately proved.


<a id="section-709-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-711-sources-for-the-expanded-teaching}

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

<a id="section-713-summary"></a>
## Summary {#section-715-summary}

Design parameters come from counting incidences in more than one way. Their arithmetic is necessary but does not generally prove existence. Incidence matrices give rank constraints over a named field, while complements, derived designs, residual designs, and multiplicities require separate conventions. The original first-course design reading remains linked as preparation. Matroid representations later distinguish incidence data from a prescribed dependence system.

