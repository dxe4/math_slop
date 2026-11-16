var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: designs-and-set-systems
title: "Finite Designs, Incidence Counting, and Set Systems"
level: advanced-undergraduate
estimated_minutes: 170
license: CC BY-SA 4.0
---

# Finite Designs, Incidence Counting, and Set Systems

Suppose an experiment must compare treatments in small groups, a storage system must distribute pairs of items evenly, or a puzzle asks for triples in which every pair occurs once. All are questions about a finite ground set together with selected subsets. The central discipline is to count the same incidences in two ways before trying to construct anything.

This chapter assumes finite sets, binomial coefficients, double counting, inclusion-exclusion, and elementary linear algebra. Every set and family is finite. Repeated blocks are excluded unless explicitly allowed. The emphasis is on necessary parameter equations, small constructions, and proof certificates; it does not claim that every arithmetically feasible parameter list has a design.

## 1. Set systems and incidence

A **set system** is a pair $(X, B)$, where $X$ is a finite set of **points** and $B$ is a family of subsets of $X$ called **blocks**. Write $v=|X|$ and $b=|B|$. It is **k-uniform** if every block has size $k$.

For a point $x$, its replication number is

$$r_{x}=|\\{B \\in B:x \\in B\\}|$$

For distinct points $x,y$, their concurrence number is

$$\\lambda_{x,y}=|\\{B \\in B:\\{x,y\\} \\subseteq B\\}|$$

The **incidence set** is $I=\\{(x,B):x \\in B\\}$. Counting $I$ by points and by blocks gives

$$\\sum_{x \\in X} r_{x} = \\sum_{B \\in B}|B|$$

For a $k$-uniform family this becomes $\\sum_{x} r_{x}=bk$. It is the first consistency check for any proposed data.

### Worked example 1: an irregular system

Let $X=\\{1,2,3,4\\}$ and

$$B=\\{\\{1,2,3\\},\\{1,4\\},\\{2,4\\}\\}$$

The replication numbers are $(2,2,1,2)$, whose sum is $7$. The block sizes are $3,2,2$, also summing to $7$. This is a set system but not a uniform design. Pair $\\{1,2\\}$ occurs once, $\\{3,4\\}$ occurs zero times, and $\\{1,4\\}$ occurs once, so pair concurrence is not constant.

## 2. Balanced pair designs

A **2-design** with parameters $2-(v,k,\\lambda)$ is a set system $(X,B)$ satisfying:

- $|X|=v$;
- every block has exactly $k$ points;
- every two-element subset of $X$ lies in exactly $\\lambda$ blocks.

We assume $2\\le k<v$ and $\\lambda\\ge 1$, excluding degenerate cases. At first the definition does not say that each point has the same replication number. That regularity follows.

**Theorem 15.1 (parameter equations).** In a $2-(v,k,\\lambda)$ design, every point lies in the same number $r$ of blocks, and

$$r(k-1)=\\lambda(v-1)$$

$$bk=vr$$

so $b k(k-1)=\\lambda v(v-1)$.

**Proof.** Fix a point $x$ and count ordered incidences $(y,B)$ with $y\\ne x$ and $\\{x,y\\} \\subseteq B$. For each of the $v-1$ choices of $y$, exactly $\\lambda$ blocks contain the pair, giving $\\lambda(v-1)$. Alternatively, each of the $r_{x}$ blocks through $x$ contributes its other $k-1$ points, giving $r_{x}(k-1)$. Therefore

$$r_{x}(k-1)=\\lambda(v-1)$$

The right side is independent of $x$, so all $r_{x}$ equal a common integer $r$. Count point-block incidences: $vr=bk$. Combining the two identities gives the final equation. ∎

The divisibility conditions

$k-1 divides \\lambda(v-1)$ and $k(k-1) divides \\lambda v(v-1)$

are necessary. They are not, by themselves, a construction.

### Worked example 2: reject impossible parameters

Could a $2-(8,3,1)$ design exist? The first equation would give

$$r=7/2$$

which is not an integer. Therefore no such design exists. There is no need to search through triples. In contrast, $2-(7,3,1)$ passes the equations: $r=3$ and $b=7$. Passing only removes this elementary obstruction.

## 3. A seven-point construction

Take the points to be the residues modulo $7$. For each $i$, form

$$B_{i}=\\{i,i+1,i+3\\}$$

with arithmetic modulo $7$. This gives seven triples. We claim they form a $2-(7,3,1)$ design.

Each block contains three unordered pairs, so the seven blocks contain $21$ pair occurrences. There are exactly $\\binom{7}{2}=21$ pairs of points. It remains to prove no pair repeats.

Within the base triple $\\{0,1,3\\}$, the directed nonzero differences are $1,3,2,6,4,5$, each nonzero residue exactly once. Translating the triple preserves differences. For any ordered pair $(x,y)$ with $x\\ne y$, its difference $y-x$ selects a unique ordered pair $(a,c)$ in the base triple with $c-a=y-x$; then the unique translation by $x-a$ contains $(x,y)$. Hence every unordered pair occurs in exactly one translated block.

This proof has two certificates: a difference calculation proving no collision, and the total pair count proving complete coverage. Listing seven triples without either check would not establish the design property.

### Worked example 3: complements

If $(X,B)$ is a $2-(v,k,\\lambda)$ design, replace every block $B$ by its complement $X\\setminus B$. The new blocks have size $v-k$. How many complement blocks contain a fixed pair $\\{x,y\\}$? They correspond to original blocks containing neither point. Inclusion-exclusion gives

$$b-r-r+\\lambda=b-2r+\\lambda$$

Thus the complements form a constant-concurrence family with parameters
$(v,v-k,b-2r+\\lambda)$, and distinct original blocks remain distinct under
complementation. When $v-k\\ge 2$, this is a
$2-(v,v-k,b-2r+\\lambda)$ design under the chapter's convention. When $v-k=1$,
no pair lies in a complement block, so the pair parameter is zero and the
family is not called a 2-design here.

For the seven-point triple design, $b=7,r=3,\\lambda=1$; the complements form a $2-(7,4,2)$ design. Indeed each pair occurs in $7-6+1=2$ complementary blocks.

## 4. Higher-order balance

For integers $0\\le t\\le k\\le v$, a **t-design** with parameters $t-(v,k,\\lambda)$ is a $k$-uniform set system in which every $t$-element subset of points lies in exactly $\\lambda$ blocks. The convention $t=0$ merely fixes the number of blocks; the interesting balance begins at $t\\ge 1$.

**Theorem 15.2 (derived parameters).** Let $(X,B)$ be a $t-(v,k,\\lambda)$ design. For $0\\le s\\le t$, every fixed $s$-subset $S$ lies in exactly

$$\\lambda_{s} = \\lambda \\binom{v-s}{t-s}/\\binom{k-s}{t-s}$$

blocks.

**Proof.** Count pairs $(T,B)$ where $S \\subseteq T \\subseteq B$, $|T|=t$, and $B$ is a block. First choose $T$: there are $\\binom{v-s}{t-s}$ choices, each in $\\lambda$ blocks. Alternatively, if $S$ lies in $\\lambda_{s}$ blocks, each such block contains $\\binom{k-s}{t-s}$ suitable sets $T$. Equating counts and dividing proves the formula. The count also shows it is independent of $S$. ∎

Consequently every $t$-design is also an $s$-design for $s<t$, with the displayed parameter. Each quotient must be an integer. Again these are necessary arithmetic tests, not general existence results.

### Worked example 4: parameters forced by triple balance

Suppose a $3-(8,4,1)$ design exists. Then

$$\\lambda_{2}=\\binom{6}{1}/\\binom{2}{1}=3$$

$$r=\\lambda_{1}=\\binom{7}{2}/\\binom{3}{2}=7$$

and

$$b=\\lambda_{0}=\\binom{8}{3}/\\binom{4}{3}=14$$

Thus every pair would occur in three blocks, every point in seven, and there would be fourteen blocks. These conclusions follow conditionally; the calculation alone does not construct the fourteen blocks.

## 5. Incidence matrices retain the counting data

Order the points and blocks. The **incidence matrix** $N$ is the $v by b$ zero-one matrix with

$N_{xB}=1$ if $x \\in B$, and $0$ otherwise.

For a $2-(v,k,\\lambda)$ design, the $(x,y)$ entry of $NN^{T}$ counts blocks containing both $x$ and $y$. It equals $r$ on the diagonal and $\\lambda$ off the diagonal. Therefore

$$NN^{T}=(r-\\lambda)I+\\lambda J$$

where $J$ is the all-ones matrix.

This single identity encodes replication and pair balance. It also yields a useful lower bound.

**Theorem 15.3.** Every nondegenerate $2-(v,k,\\lambda)$ design has $b\\ge v$.

**Proof.** Since $k<v$, the equation $r(k-1)=\\lambda(v-1)$ implies

$$r/\\lambda=(v-1)/(k-1)>1$$

so $r-\\lambda>0$. For any nonzero real column vector $z$,

$$z^{T} NN^{T} z=(r-\\lambda)\\lVert z\\rVert^{2}+\\lambda(\\sum_{i} z_{i})^{2}>0$$

Thus $NN^{T}$ is nonsingular and has rank $v$. But $\\operatorname{rank}(NN^{T})\\le \\operatorname{rank}(N)\\le b$. Hence $v\\le b$. ∎

The proof relies on real linear algebra and on nondegeneracy. It does not assert that an arbitrary uniform set system has at least as many blocks as points.

### Worked example 5: checking a claimed incidence matrix

Suppose a claimed $2-(4,2,1)$ design uses all six pairs as blocks. Its $4 by 6$ incidence matrix has row sums $3$ and column sums $2$. The product $NN^{T}$ has diagonal $3$ and off-diagonal $1$, so it is $2I+J$. This matches $r=3,\\lambda=1$. The design is simply the complete set of two-element subsets.

If one column were duplicated and another omitted, row and column sums might still look plausible, but an off-diagonal entry would become $2$ and another $0$. Checking $NN^{T}$ detects the failed pair balance.

## 6. Symmetric designs and block intersections

A $2$-design with $b=v$ is called **symmetric**. The word refers to equal numbers of points and blocks, not automatically to a geometric reflection or a large automorphism group.

**Theorem 15.4.** In a symmetric $2-(v,k,\\lambda)$ design, $r=k$, and any two distinct blocks meet in exactly $\\lambda$ points.

**Proof.** From $bk=vr$ and $b=v$, obtain $r=k$. The incidence matrix $N$ is square. The identity

$$NN^{T}=(k-\\lambda)I+\\lambda J$$

is nonsingular by the preceding argument, so $N$ is invertible. Let $1$ be the all-ones column. Row and column sums both equal $k$, hence $N1=k1$ and $N^{T}1=k1$.

Set $M=N^{T}N$. We know

$$N^{T}(NN^{T})N=(N^{T}N)^{2}=M^{2}$$

Using $N^{T} N=M$ and $N^{T} JN=(N^{T}1)(N^{T}1)^{T}=k^{2}J$, the left side is $(k-\\lambda)M+\\lambda k^{2}J$. The matrix $Q=(k-\\lambda)I+\\lambda J$ satisfies the same equation because the parameter identity $\\lambda(v-1)=k(k-1)$ holds. A more direct uniqueness argument is available: multiply $NN^{T}=Q$ on the left by $N^{-1}$ and on the right by $N$ to obtain $N^{T}N=N^{-1}QN$; because $Q=(k-\\lambda)I+\\lambda J$ and $N^{-1}JN=J$ from $N1=N^{T}1=k1$, this equals $Q$. Thus $N^{T}N=Q$. Its off-diagonal entries count intersections of distinct blocks and equal $\\lambda$. ∎

The matrix calculation is intentionally explicit: equality $NN^{T}=Q$ does not usually imply $N^{T}N=Q$ for a rectangular matrix. Squareness, invertibility, and the constant row and column sums are essential.

## 7. Packings and coverings when exact balance is unavailable

Exact designs may be impossible or unnecessarily rigid. A $t-(v,k,1)$ **packing** is a $k$-uniform family in which each $t$-subset lies in at most one block. A $t-(v,k,1)$ **covering** requires every $t$-subset to lie in at least one block.

If a packing has $b$ blocks, count contained $t$-subsets:

$$b \\binom{k}{t}\\le \\binom{v}{t}$$

so $b\\le \\lfloor \\binom{v}{t}/\\binom{k}{t}\\rfloor$.

For a covering, the same incidence count gives

$$b \\binom{k}{t}\\ge \\binom{v}{t}$$

so $b\\ge \\lceil \\binom{v}{t}/\\binom{k}{t}\\rceil$.

These bounds ignore overlap patterns and can be unattainable. They are universal first bounds, not promises of equality.

### Worked example 6: a pair packing

On eight points, triples in a pair packing satisfy

$$b\\le \\lfloor \\binom{8}{2}/\\binom{3}{2}\\rfloor=\\lfloor 28/3\\rfloor=9$$

There is a sharper obstruction to $b=9$. Nine triples would use $27$ distinct pairs, leaving one uncovered pair $\\{x,y\\}$. Every point occurs in at most $\\lfloor 7/2\\rfloor=3$ triples because its incident pairs are disjoint across triples. Total point-block incidences would be $27$. Since eight replication numbers are at most $3$, their sum is at most $24$, contradiction. Thus $b\\le 8$. The second count uses local incidence information that the global pair bound missed.

## 8. Intersecting and antichain conditions

Set systems also model forbidden relations. A family is **intersecting** if every two blocks meet. It is an **antichain** if no block contains another. Uniform families are automatically antichains, but need not be intersecting.

For $X$ of size $n$, pair every subset with its complement. An intersecting family can contain at most one member from each complementary pair, so it has at most $2^{n-1}$ members. This argument assumes that a set is disjoint from its complement and that the family forbids disjoint pairs. The bound is attained by all subsets containing a fixed point.

For a $k$-uniform intersecting family with $k\\le n/2$, the crude complementary-pair argument does not compare two $k$-sets unless $n=2k$. Stronger bounds require more refined cyclic or shadow arguments. We mark that as a forward direction rather than silently applying the easy bound in a setting it does not prove.

## 9. Parallel classes and resolutions

A **parallel class** is a subfamily of pairwise disjoint blocks whose union is all of $X$. In a $k$-uniform system it necessarily contains $v/k$ blocks, so $k$ must divide $v$. A **resolution** partitions the entire block family into parallel classes; a design admitting one is **resolvable**.

If a $2-(v,k,\\lambda)$ design is resolvable, each point appears exactly once in each parallel class. It appears $r$ times altogether, so the resolution has exactly $r$ classes. Counting blocks then recovers $b=r(v/k)$, the same identity as $bk=vr$. This agreement is a check, not a proof that a resolution exists.

### Worked example 7: pairs arranged in rounds

Take $X=\\{1,2,3,4\\}$ and all six two-element blocks. They split into three parallel classes:

$\\{\\{1,2\\},\\{3,4\\}\\}$, $\\{\\{1,3\\},\\{2,4\\}\\}$, and $\\{\\{1,4\\},\\{2,3\\}\\}$.

Each class covers every point once, and every pair occurs as one block in exactly one class. This resolves the $2-(4,2,1)$ design. The parameter calculation predicts $r=3$, exactly the number of displayed rounds.

Resolution is additional structure: the same $2$-design parameters determine how often points and pairs occur, but do not by themselves supply a partition of blocks into parallel classes.

## 10. Isomorphism and relabeling

Two set systems $(X,B)$ and $(X',B')$ are **isomorphic** if a bijection $f:X\\to X'$ sends the block family exactly to the block family:

$$B'=\\{f(B):B \\in B\\}$$

Relabeling preserves block sizes, replication numbers, concurrence numbers, and intersection patterns. Equal parameters do not guarantee isomorphism. A parameter list records aggregate counts; it may forget how blocks are arranged.

When a computation reports “all designs,” it must say whether it lists labeled systems or one representative per isomorphism class. On $v$ points, one unlabeled system may have as many as $v!$ labelings, fewer when it has nontrivial label-preserving symmetries.

## DM-CH13-P001 — Bounded project: audit small triple systems

This project is deliberately finite. It asks for evidence and certificates, not a claim about arbitrary orders.

**Question.** On the labeled point set $\\{0,1,2,3,4,5,6\\}$, find all seven-block families of triples in which every pair occurs exactly once, or explain how your search reduces equivalent cases.

**Bound.** There are $\\binom{35}{7}=6,724,520$ seven-element families chosen from the $35$ triples. A direct exact search is possible but wasteful. Normalize one block to $\\{0,1,2\\}$: any solution has a block, and some relabeling sends it there. Then backtrack over remaining triples in lexicographic order.

Maintain a length-21 pair-count array. Reject a partial family immediately if a chosen triple repeats a pair. Also reject if a point can no longer reach required replication $3$, or if the remaining number of slots cannot cover all unused pairs. At seven blocks, accept exactly when all pair counts are one.

**Required output.** Provide:

1. the search convention and exact pruning rules;
2. at least one accepted labeled block list;
3. verification of all 21 pair counts and seven replication counts;
4. the number of labeled outputs under your normalization;
5. a canonicalization rule, such as the lexicographically least flattened block list over all $7!$ relabelings, if claiming isomorphism classes;
6. one deliberately corrupted family and the first certificate that rejects it.

**Interpretation boundary.** The computation can classify the stated seven-point search if every branch is accounted for. It does not establish existence or uniqueness for larger parameter sets. A reproducible report records the program or pseudocode, integer arithmetic, ordering convention, and totals at each search depth.

## 12. Common errors

- Treating divisibility conditions as sufficient for existence.
- Counting ordered pairs on one side and unordered pairs on the other.
- Forgetting that blocks are a family of subsets and silently allowing repetitions.
- Assuming constant block size forces constant point replication.
- Calling a design symmetric because its picture looks symmetric rather than checking $b=v$.
- Inferring $N^{T}N=NN^{T}$ without the hypotheses used in the symmetric case.
- Giving a block list without verifying every required subset exactly once.
- Confusing a packing (“at most”) with a covering (“at least”).
- Reporting labeled search outputs as nonisomorphic systems.
- Generalizing a finite exhaustive search beyond its declared ground-set size.
- Assuming the divisibility $k|v$ guarantees a parallel class or a resolution.

## 13. Exercises with worked solutions

### DM-CH13-E001 — recover all pair-design parameters

A $2-(13,4,1)$ design is proposed. Determine $r$ and $b$, and state what the arithmetic proves.

#### DM-CH13-E001 — Solution

The equations give $r=12/3=4$ and $b=vr/k=13$. Thus any such design must have thirteen blocks and each point must occur four times. The integral values show only that the elementary divisibility tests pass; they do not construct the design.

### DM-CH13-E002 — audit an impossibility claim

A student claims the parameter equations show that a $2-(10,4,2)$ design cannot exist. Audit the claim.

#### DM-CH13-E002 — Solution

The replication equation gives $r=2(9)/3=6$, which is integral. The incidence equation then gives $b=vr/k=60/4=15$, also integral, so the basic equations do not reject it. In fact the request cannot be ruled out by these two tests; declaring impossibility would be an error. This exercise diagnoses the limit of parameter arithmetic: further construction or obstruction is required.

### DM-CH13-E003 — count blocks disjoint from a point

In a $2-(v,k,\\lambda)$ design, how many blocks avoid a fixed point $x$?

#### DM-CH13-E003 — Solution

Exactly $r$ of the $b$ blocks contain $x$, so $b-r$ avoid it. In parameters this is $\\lambda v(v-1)/(k(k-1))-\\lambda(v-1)/(k-1)$, which simplifies to $\\lambda(v-1)(v-k)/(k(k-1))$.

### DM-CH13-E004 — count blocks meeting a pair once

How many blocks contain exactly one point of a fixed pair $\\{x,y\\}$?

#### DM-CH13-E004 — Solution

There are $r$ blocks through $x$, of which $\\lambda$ also contain $y$, leaving $r-\\lambda$ containing $x$ alone. Symmetrically $r-\\lambda$ contain $y$ alone. The two classes are disjoint, so the answer is $2(r-\\lambda)$.

### DM-CH13-E005 — derive a three-design parameter

In a $3-(10,4,2)$ design, find the number of blocks through a point and through a pair, and find $b$.

#### DM-CH13-E005 — Solution

The derived formula gives

$$\\lambda_{2}=2 \\binom{8}{1}/\\binom{2}{1}=8$$

$$r=\\lambda_{1}=2 \\binom{9}{2}/\\binom{3}{2}=24$$

and $b=\\lambda_{0}=2 \\binom{10}{3}/\\binom{4}{3}=60$. Each is an integer, so the derived divisibility tests pass.

### DM-CH13-E006 — complement parameters

Find the complement parameters of a $2-(11,5,2)$ design, conditional on its existence.

#### DM-CH13-E006 — Solution

First $r=2(10)/4=5$ and $b=vr/k=11$. Complement blocks have size $6$, and each pair occurs $b-2r+\\lambda=11-10+2=3$ times. The complement is a $2-(11,6,3)$ design.

### DM-CH13-E007 — matrix positivity

Let $Q=(r-\\lambda)I+\\lambda J$ with $r>\\lambda\\ge 0$. Prove directly that $Q$ has trivial kernel.

#### DM-CH13-E007 — Solution

If $Qz=0$, multiply by $z^{T}$ to obtain

$$0=(r-\\lambda)\\lVert z\\rVert^{2}+\\lambda(\\sum_{i} z_{i})^{2}$$

Both terms are nonnegative and the first coefficient is positive. Hence $\\lVert z\\rVert^{2}=0$, so $z=0$. Thus the kernel is trivial.

### DM-CH13-E008 — packing bound with replication

In a triple packing on nine points, prove that each point lies in at most four blocks and deduce $b\\le 12$.

#### DM-CH13-E008 — Solution

Every triple through a fixed point uses two of the other eight points, and two such triples cannot reuse either partner or their shared pair would repeat. Hence at most $8/2=4$ triples contain a point. Summing replication numbers gives $3b\\le 9*4=36$, so $b\\le 12$. The global pair bound also gives $b\\le \\lfloor 36/3\\rfloor=12$ here.

### DM-CH13-E009 — an intersecting bound

Prove that an intersecting family of subsets of a six-element set has at most $32$ members, and give an example of size $32$.

#### DM-CH13-E009 — Solution

The $64$ subsets split into $32$ pairs $\\{A,X\\setminus A\\}$. The two members of a pair are disjoint, so an intersecting family contains at most one. All subsets containing one fixed point form an intersecting family of size $2^{5}=32$, attaining the bound.

### DM-CH13-E010 — audit the translated triples

List the seven blocks $\\{i,i+1,i+3\\}$ modulo $7$ and determine the blocks containing the pair $\\{2,6\\}$.

#### DM-CH13-E010 — Solution

In increasing notation the blocks are $013,124,235,346,045,156,026$. Only $026$ contains both $2$ and $6$. Translation differences also certify uniqueness: $6-2=4$, and in the ordered base triple the unique difference $4$ is $0-3$ modulo $7$. Translating $(3,0)$ by $6$ gives $(2,6)$, yielding the required block.

## Chapter summary and connections

A set system becomes a design when subset incidences are balanced. Double counting forces replication and divisibility equations; incidence matrices compress pair counts and prove a lower bound on the number of blocks. Complements, packings, coverings, intersecting families, and isomorphism show how the same language supports exact and approximate requirements. The bounded project turns a small construction into a reproducible proof certificate.

Earlier chapters supply the bijections, inclusion-exclusion, graph incidence, and exact counting used here. The next bridge chapter abstracts a different feature of finite set families: when feasible sets admit exchange, local greedy choices can be globally certified. Later work can pursue existence constructions, sharper packing and covering bounds, automorphism groups, and coding-theoretic applications.
`;export{e as default};