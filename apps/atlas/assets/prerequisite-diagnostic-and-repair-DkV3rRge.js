var e=`---
parent_id: book-topology-proof-counterexample
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair Routes"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair Routes

## Linked preparation

Repair proof language with [Introduction to Proof](../../introduction-to-proof.md), metric open-set reasoning with [Metric Spaces, Open Sets, and Closed Sets](../../proof-safe-real-analysis/metric-spaces-open-and-closed.md), and Cauchy reasoning with [Sequences, Cauchy Control, and Persistent Tail Behavior](../../proof-safe-real-analysis/sequences-cauchy-and-limsup.md). The diagnostic and its original answers below are preserved. Old numeric chapter references describe the historical order; current routes use the stable chapter names in the reader guide.

## How to use this diagnostic

This is a routing instrument, not an entrance examination. Set aside sixty to ninety minutes and work from definitions without searching for named theorems. Mark each item $S$ if secure, $P$ if partly secure, or $\\mathbb{R}$ if repair is needed. The pattern matters more than a total score: set language, function reasoning, metric arguments, and proof judgment need different repairs.

Before reading an answer, identify the requested product. Is it a calculation, proof, negation, example, counterexample, or diagnosis of a gap? A correct numerical result with no reason is not secure preparation for topology. Conversely, a minor algebra slip inside a correctly structured proof calls for local repair, not restarting an entire course.

Groups A and B support the opening chapters directly. Group C checks metric-space intuition that the book will generalize. Group D previews constructions. Group E tests whether you can police theorem hypotheses and counterexamples. Unfamiliar vocabulary in Group D is not fatal if Groups A–C are strong; the repair map says where to enter.

## Group A: sets, quantifiers, and relations

### A1. Membership in union and intersection

Translate $x \\in \\bigcup_{i\\in I} A_{i}$ and $x \\in \\bigcap_{i\\in I} A_{i}$ into quantified statements.

**Answer.** Union means “there exists $i \\in I$ such that $x \\in A_{i}$.” Intersection means “for every $i \\in I$, $x \\in A_{i}$.” The existential/universal distinction drives the topology axioms.

### A2. De Morgan with an indexed family

Prove $X\\setminus (\\bigcup_{i} A_{i})=\\bigcap_{i} (X\\setminus A_{i})$.

**Answer.** For $x \\in X$, membership on the left means $x$ belongs to none of the $A_{i}$, meaning for every $i$, $x \\in X\\setminus A_{i}$. That is membership on the right. The reverse reading is identical, so extensionality gives equality.

### A3. A two-inclusion proof

For subsets $A,B,C$, prove $A \\cap (B \\cup C)=(A \\cap B) \\cup (A \\cap C)$.

**Answer.** If $x$ is on the left, then $x \\in A$ and $x$ lies in $B$ or $C$, so it lies in $A \\cap B$ or $A \\cap C$. Conversely, membership in either set on the right gives membership in $A$ and in at least one of $B,C$, hence membership on the left.

### A4. Negate a topology-shaped statement

Negate: “For every neighborhood $V$ of $f(x)$, there exists a neighborhood $U$ of $x$ such that $f(U) \\subseteq V$.”

**Answer.** “There exists a neighborhood $V$ of $f(x)$ such that for every neighborhood $U$ of $x$, $f(U)$ is not a subset of $V$.” Equivalently, every such $U$ contains some $u$ with $f(u) \\notin V$.

### A5. Equivalence relation

On $Z$, define $a~b$ when $a-b$ is divisible by $4$. Verify that $~$ is an equivalence relation.

**Answer.** Reflexivity: $a-a=0$ is divisible by $4$. Symmetry: if $a-b=4k$, then $b-a=4(-k)$. Transitivity: if $a-b=4k$ and $b-c=4l$, then $a-c=4(k+l)$. The equivalence classes are the four congruence classes modulo $4$.

### A6. Finite versus arbitrary operations

Give an infinite family of open subsets of $\\mathbb{R}$ whose intersection is not open, and an infinite family of closed subsets whose union is not closed.

**Answer.** The open sets $(-1/n,1/n)$ have intersection $\\{0\\}$, not open. The closed sets $\\{1/n\\}$ have union $\\{1/n:n\\ge 1\\}$, which omits its limit point $0$ and is not closed. Topologies allow arbitrary unions and only finite intersections of open sets; closed sets obey the dual rule.

## Group B: functions and proof structure

### B1. Image and inverse image

For $f:\\mathbb{R}\\to \\mathbb{R}$, $f(x)=x^{2}$, find $f([-2,1])$ and $f^{-1}([1,4])$.

**Answer.** The image is $[0,4]$. The inverse image is $[-2,-1] \\cup [1,2]$. Images push a chosen domain set forward; inverse images collect all inputs whose outputs land in the target set.

### B2. Inverse images respect set operations

Prove $f^{-1}(\\bigcup_{i} B_{i})=\\bigcup_{i} f^{-1}(B_{i})$.

**Answer.** An input $x$ is on the left exactly when $f(x)$ belongs to some $B_{i}$, exactly when $x$ belongs to some $f^{-1}(B_{i})$, which is membership on the right. No injectivity or surjectivity is needed.

### B3. Composition order and domains

Let $f:\\mathbb{R}\\to[0,\\infty)$, $f(x)=x^{2}$, and $g:[0,\\infty)\\to \\mathbb{R}$, $g(t)=\\sqrt{t}$. Compute $g \\circ f$ and $f \\circ g$, including domains.

**Answer.** $(g \\circ f)(x)=|x|$ on all $\\mathbb{R}$. $(f \\circ g)(t)=t$ on $[0,\\infty)$. The formulas differ because the domains differ and square root is the nonnegative branch.

### B4. Continuous bijection warning

Give a continuous bijection that is not a homeomorphism.

**Answer.** On a set $X$ with at least two points, the identity from $X$ with the discrete topology to $X$ with the indiscrete topology is continuous and bijective. Its inverse is not continuous because a nontrivial discrete open set has no open inverse image in the indiscrete domain. Continuity of the inverse needs proof.

### B5. Well-defined factor through a quotient

Suppose $q:X\\to X/~$ sends a point to its equivalence class. What condition on $f:X\\to Y$ allows a set function $g:X/~\\to Y$ with $g \\circ q=f$?

**Answer.** The function $f$ must be constant on equivalence classes: $x~x'$ must imply $f(x)=f(x')$. Then define $g([x])=f(x)$. The condition makes the value independent of the representative; surjectivity of $q$ makes $g$ unique.

### B6. Contrapositive versus converse

For “if $f$ is a homeomorphism, then $f$ is continuous,” state the converse and contrapositive and decide their status.

**Answer.** The converse, “if $f$ is continuous, then it is a homeomorphism,” is false: constant maps are continuous. The contrapositive, “if $f$ is not continuous, then it is not a homeomorphism,” is true and logically equivalent to the original.

## Group C: metric spaces and convergence

### C1. Open ball containment

In a metric space, if $y \\in B(x,r)$, prove some ball around $y$ lies inside $B(x,r)$.

**Answer.** Let $\\varepsilon=r-d(x,y)>0$. If $d(y,z)<\\varepsilon$, then $d(x,z)\\le d(x,y)+d(y,z)<r$. Thus $B(y,\\varepsilon) \\subseteq B(x,r)$. This proves metric balls are open.

### C2. A set both open and closed

Give a nontrivial space with a proper nonempty clopen subset.

**Answer.** In a discrete two-point space $\\{0,1\\}$, every subset is open and closed, so $\\{0\\}$ is proper, nonempty, and clopen. It separates the space into $\\{0\\}$ and $\\{1\\}$.

### C3. Closure by neighborhoods

Find the closure of $\\{1/n:n\\ge 1\\}$ in $\\mathbb{R}$ and justify it with neighborhoods.

**Answer.** The closure is $\\{1/n:n\\ge 1\\} \\cup \\{0\\}$. Every neighborhood of $0$ contains $1/n$ for sufficiently large $n$. Each listed $1/n$ is already in the set. Any other real point has positive distance from $0$ and from all but finitely many sequence terms; a sufficiently small interval avoids the set.

### C4. Epsilon definition of sequence convergence

Prove $1/n\\to 0$ in $\\mathbb{R}$.

**Answer.** Given $\\varepsilon>0$, choose an integer $N>1/\\varepsilon$. If $n\\ge N$, then $|1/n-0|=1/n\\le 1/N<\\varepsilon$. The threshold depends on $\\varepsilon$ but not on later $n$.

### C5. Cauchy versus convergent

Give a Cauchy sequence in $\\mathbb{Q}$ that does not converge in $\\mathbb{Q}$.

**Answer.** Choose rational decimal truncations of $\\sqrt{2}$, such as $1,1.4,1.41,...$. They are Cauchy because they converge in $\\mathbb{R}$, but no rational can be their limit: uniqueness of real limits would force the limit to be irrational $\\sqrt{2}$. Completeness concerns whether Cauchy data have limits inside the space.

### C6. Equivalent metrics

Show that $d(x,y)=|x-y|$ and $\\rho(x,y)=\\min\\{1,|x-y|\\}$ induce the same topology on $\\mathbb{R}$.

**Answer.** For radii below $1$, the centered $d$- and $\\rho$-balls are identical. Every neighborhood test can therefore be refined to a radius below $1$, so the two metrics have the same open sets. Their numerical diameters differ, showing that boundedness of a chosen metric is not topological.

## Group D: topology constructions

### D1. Verify a finite topology

On $X=\\{a,b,c\\}$, decide whether $T=\\{\\varnothing,\\{a\\},\\{a,b\\},X\\}$ is a topology.

**Answer.** Yes. It contains $\\varnothing,X$. The only possible unions remain in the list, and intersections of listed sets are also listed. On a finite family this direct audit covers arbitrary unions because there are only finitely many distinct members.

### D2. Generate from a basis

On $X=\\{a,b,c\\}$, let $B=\\{\\{a\\},\\{b,c\\}\\}$. What topology does $B$ generate?

**Answer.** Arbitrary unions give $\\varnothing,\\{a\\},\\{b,c\\},X$. The two basis sets are disjoint and cover $X$; their intersections satisfy the basis condition. No singleton $\\{b\\}$ or $\\{c\\}$ is generated.

### D3. Subspace topology

Let $Y=[0,1] \\subseteq \\mathbb{R}$. Is $[0,1/2)$ open in $Y$? Is it open in $\\mathbb{R}$?

**Answer.** It is open in $Y$ because $[0,1/2)=Y \\cap (-1,1/2)$. It is not open in $\\mathbb{R}$ because no real open interval around $0$ lies inside it. Relative openness must name the ambient subspace.

### D4. Product basis

Describe a basic neighborhood of a point $x=(x_{i})$ in an arbitrary product $\\prod_{i} X_{i}$.

**Answer.** It has the form $\\prod_{i} U_{i}$, where each $U_{i}$ is open and contains $x_{i}$, and $U_{i}=X_{i}$ for all but finitely many indices. Allowing restrictions in every coordinate gives the box topology instead.

### D5. Quotient topology

Let $q:X\\to Y$ be surjective. State the quotient-topology test for $U \\subseteq Y$.

**Answer.** The set $U$ is open in $Y$ exactly when $q^{-1}(U)$ is open in $X$. Continuity supplies only the forward implication from open $U$; the reverse implication is the extra quotient condition.

### D6. Initial comparison of topologies

If $T_{1} \\subseteq T_{2}$ on the same set, which topology is finer? For the identity map, which direction is automatically continuous?

**Answer.** $T_{2}$ is finer because it has more open sets. The identity $(X,T_{2})\\to(X,T_{1})$ is continuous: inverse images of $T_{1}$-open sets are the same sets, which belong to $T_{2}$. The reverse identity may fail to be continuous.

## Group E: theorem and counterexample judgment

### E1. Compactness witness

Give an open cover of $(0,1)$ with no finite subcover.

**Answer.** The family $\\{(1/n,1):n\\ge 2\\}$ covers $(0,1)$. Any finite subfamily has a largest index $N$; its union is $(1/N,1)$ and misses points in $(0,1/N]$. Thus $(0,1)$ is not compact.

### E2. Continuous images versus inverse images

Is the inverse image of a connected set under a continuous map necessarily connected?

**Answer.** No. For $f:\\mathbb{R}\\to \\mathbb{R}$, $f(x)=x^{2}$, the connected set $(0,1)$ has inverse image $(-1,0) \\cup (0,1)$, which is disconnected. Continuous maps preserve connectedness of images, not arbitrary inverse images.

### E3. Missing Hausdorff hypothesis

Give a compact subset that is not closed.

**Answer.** In an indiscrete space with at least two points, every subset is compact: any open cover of a nonempty subset must contain $X$. A proper nonempty subset is not closed because its complement is neither empty nor all of $X$, hence not open. “Compact subsets are closed” requires Hausdorffness.

### E4. Sequence-only reasoning

Why is “no sequence in $A$ converges to $x$” insufficient by itself to prove $x \\notin \\operatorname{cl}(A)$ in an arbitrary topological space?

**Answer.** Sequences detect closure in first-countable spaces, including metric spaces, but not in every topology. A closure point may require a net indexed by its full neighborhood system. To construct a sequence converging to each specified closure point, cite first countability or, more generally, the Frechet--Urysohn property; sequentiality alone gives only a possibly transfinite iteration of sequential closure.

### E5. Connected versus path connected

Does connected imply path connected?

**Answer.** Not in general. The topologist's sine curve is connected as the closure of a connected graph, but no path joins its vertical limiting segment to the oscillating graph. Connected plus local path connectedness is a sufficient repair.

### E6. Local Euclidean is not the whole manifold definition

Give one locally Euclidean space excluded by Hausdorffness and one excluded by second countability.

**Answer.** The line with two origins is locally Euclidean and second-countable but not Hausdorff. An uncountable disjoint union of real lines is Hausdorff and locally Euclidean but not second-countable. Under this book's convention, neither is a manifold.

## Reading the pattern

Mostly $S$ in Groups A–C means you can begin the continuous proof-course route. A few $P$ marks are normal if you can state exactly which definition or lemma is missing. Mostly $\\mathbb{R}$ in Group A means topology notation will obscure the mathematics; repair first. Mostly $\\mathbb{R}$ in Group B means quotient, continuity, and universal-property proofs will be unreliable. Mostly $\\mathbb{R}$ in Group C calls for a metric-spaces review before the compactness and convergence chapters.

Group D is a preview. If its terminology is new but the answers make sense after reading, begin Chapter 1. Group E tests theorem judgment. Difficulty there is not a reason to leave the book—the proof/counterexample programme is designed to build precisely that judgment—but it tells you to maintain the hypothesis and counterexample ledgers from the reader guide.

## Repair route A: sets and quantifiers

If A1–A6 are unstable, pause before Chapter 1. Review membership notation, indexed unions and intersections, complements relative to an ambient set, Cartesian products, equivalence relations, and quantifier negation. Practice proving identities by element-chasing and by two inclusions.

Minimum exit check: without notes, negate the continuity statement in A4, prove both De Morgan laws for indexed families, and verify one equivalence relation. Then begin \`topological-spaces-and-open-set-language\` and work its finite-topology exercises before continuing.

## Repair route B: functions and quotients

If B1–B6 are unstable, review domains, codomains, restrictions, composition, images, inverse images, injectivity, surjectivity, and well-defined functions on equivalence classes. Give special attention to the fact that inverse images commute with all unions, intersections, and complements without injectivity.

Begin Chapters 1–2 while repairing, but do not pass \`continuity-open-closed-and-neighborhood-tests\` until you can prove the inverse-image laws. Before \`quotients-identifications-and-gluing\`, redo B5 and construct two different equivalence relations on a four-element set.

## Repair route C: metric foundations

If C1–C6 are unstable, take a short metric-spaces route covering balls, open and closed sets, closure, sequence convergence, Cauchy sequences, completeness, and equivalent metrics. Calculus limit manipulation alone is not enough; write at least three epsilon proofs.

You may read Chapters 1–6 during this repair. Complete it before \`nets-filters-and-topological-convergence\` and \`compactness-covers-and-finite-control\`, where the text deliberately distinguishes metric equivalences from fully topological theorems. Redo C4 with $1/n^{2}$, and explain why the same proof pattern works.

## Repair route D: constructions

If D1–D6 are unstable but Groups A–C are secure, begin the book normally. Chapters 1–6 teach these constructions in order. Keep a topology ledger with one line per object:

$underlying set | topology \\text{ or } basis | canonical maps | universal property$.

Before leaving Chapter 2, generate three finite topologies from bases or subbases. Before leaving Chapter 5, explain finite-coordinate restriction in an infinite product. Before leaving Chapter 6, prove a proposed quotient map is quotient rather than merely continuous and surjective.

## Repair route E: proof and counterexample practice

If E1–E6 are unstable, create a six-space starter ledger: discrete, indiscrete, $\\mathbb{Q}$, $(0,1)$, the topologist's sine curve, and the line with two origins. For each, record the topology, one property it has, one it lacks, and the exact witness. Revisit the relevant entry after Chapters 8–10 and again in \`canonical-counterexample-spaces\`.

Use a three-line counterexample format:

1. define the space and topology;
2. verify the hypothesis;
3. exhibit failure of the conclusion.

A famous name without those three lines is not yet a counterexample proof.

## Route priorities by destination

Readers heading toward algebraic topology should make B5, D3–D5, and E5 secure before homotopy and covering spaces. Readers heading toward analysis should prioritize C3–C6, E3–E4, uniform spaces, and function-space topology. Readers heading toward manifolds should prioritize A4, B4, D3–D6, E3, and E6, because local charts do not replace global separation and countability.

Repeat the diagnostic after Chapters 3, 8, and 11. Improvement should appear as explicit ambient spaces, named topologies, correct quantifiers, and a stated license whenever a metric or sequential theorem is used.
`;export{e as default};