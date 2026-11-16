var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: cumulative-projects-solutions
title: "Cumulative Projects, Proof Repair, and Solution Strategies"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Cumulative Projects, Proof Repair, and Solution Strategies {#section-1-cumulative-projects-proof-repair-and-solution-strategie}

A finished solution is not a trail of symbols ending at the expected answer. It is an argument whose objects are defined, whose quantifiers are respected, whose cases are complete, and whose conclusion is no stronger than its evidence. This closing chapter turns the methods of the book into a repair discipline. It then develops several bounded cumulative projects, each with a model solution and an audit trail.

The chapter assumes the preceding first-course chapters, including exact finite experiments. The projects are bounded so that a learner can verify every claim. Their purpose is synthesis: sets and relations determine what the objects are, counting measures them, graph structure relates them, extremal arguments bound them, and exact experiments test the seams.

<a id="section-5-1-the-proof-repair-loop"></a>
## 1. The proof-repair loop {#section-7-1-the-proof-repair-loop}

When an argument feels nearly correct, use the following loop.

1. **Parse the claim.** Identify every quantifier, domain, and dependency.
2. **Inventory hypotheses.** Mark where each is used; remove decorative assumptions and restore missing ones.
3. **Choose a certificate.** Decide what would visibly establish the claim: a bijection, invariant, construction, obstruction, induction, or exhaustive finite table.
4. **Expose the hinge.** Find the one implication on which the argument turns.
5. **Attack the hinge.** Test empty, singleton, equality, extremal, and smallest nontrivial cases.
6. **Repair locally if possible.** Strengthen a hypothesis, weaken the conclusion, or replace the failed step.
7. **Re-run the argument.** A repair can create a new gap later.
8. **State the boundary.** Separate theorem, computed evidence, heuristic, and open continuation.

<a id="section-18-worked-repair-the-reversed-implication"></a>
### Worked repair: the reversed implication {#section-20-worked-repair-the-reversed-implication}

Faulty claim: “If $ab$ is even, then $a$ and $b$ are even.”

The quantifier is universal over integers. The hinge is the inference from an even product to both even factors. Test the smallest mixed-parity case: $a=2,b=3$ gives an even product but an odd factor. The original claim is false.

Two valid repairs serve different goals:

- weaken the conclusion: if $ab$ is even, **at least one** of $a,b$ is even;
- strengthen the hypothesis: if $a$ and $b$ are even, then $ab$ is divisible by four.

For the first repair, prove the contrapositive. If both $a,b$ are odd, write $a=2r+1$, $b=2s+1$; then $ab=2(2rs+r+s)+1$ is odd. Therefore an even product cannot have both factors odd.

The counterexample does not merely say “wrong.” It identifies exactly which quantifier and conclusion need repair.

<a id="section-33-2-select-proof-architecture-from-the-claim"></a>
## 2. Select proof architecture from the claim {#section-35-2-select-proof-architecture-from-the-claim}

Different conclusions ask for different evidence.

- A set equality suggests double inclusion or elementwise equivalence.
- A counting identity suggests a bijection or two counts of one set.
- A recurrence suggests a reversible first-decision decomposition plus initial values.
- A divisibility or parity claim suggests congruences, contrapositive, or an invariant.
- An upper bound suggests charging, averaging, induction, or an injection.
- An exact maximum requires both a construction and an upper bound.
- A graph existence claim may suggest a spanning tree, greedy process, or probabilistic argument.
- A universal claim can be disproved by one valid counterexample.
- A bounded universal claim can be certified by complete exact enumeration.

The architecture is not decoration. A construction proves existence but not an upper bound. An experiment through size eight does not prove an induction step. An induction hypothesis must be applied only to smaller instances covered by its statement.

<a id="section-49-a-solution-ledger-prevents-circular-progress"></a>
### A solution ledger prevents circular progress {#section-51-a-solution-ledger-prevents-circular-progress}

For a longer problem, maintain four short columns: **known**, **wanted**, **bridge**, and **status**. “Known” contains hypotheses and previously proved results. “Wanted” rewrites the exact conclusion. “Bridge” names a candidate implication, such as “a longest path endpoint is a leaf.” “Status” is proved, refuted, or unproved—never “probably.”

This ledger exposes circularity. If the bridge is merely the wanted statement with renamed variables, no progress has occurred. It also exposes a scope mismatch: a theorem about connected graphs cannot enter the known column until connectivity is established. When a bridge fails, preserve its counterexample. It may point to the missing hypothesis and prevent the same attempt from returning later in prettier notation.

For collaborative review, a reader should be able to challenge one ledger row without reconstructing the entire project. The author can then repair the local dependency and recheck every downstream row that used it.

<a id="section-57-3-quantifier-and-definition-audit"></a>
## 3. Quantifier and definition audit {#section-59-3-quantifier-and-definition-audit}

Before manipulating an object, expand its decisive definition.

To prove a relation $R$ transitive, begin with arbitrary $x,y,z$ satisfying $xRy$ and $yRz$, then derive $xRz$. Testing several triples is evidence, not proof, unless the domain is finite and every triple is checked.

To prove graph connectivity, show a path exists for every ordered pair of vertices. To disprove it, one separated pair suffices. To prove a family hereditary, begin with arbitrary feasible $A$ and arbitrary $B\\subseteq A$.

<a id="section-65-diagnostic-table"></a>
### Diagnostic table {#section-67-diagnostic-table}

| Claim form | Sufficient positive evidence | Sufficient negative evidence |
| --- | --- | --- |
| $\\forall x, P(x)$ | proof for arbitrary $x$, or complete bounded check | one valid $x$ with $\\neg P(x)$ |
| $\\exists x, P(x)$ | one valid witness | proof that arbitrary $x$ fails |
| $A=B$ | both inclusions | member of exactly one set |
| maximum equals $M$ | construction of value $M$ and upper bound $\\le M$ | feasible value $>M$ or proof upper bound $<M$ |
| two counts agree | bijection or equal recurrences and bases | one parameter value with unequal counts |

<a id="section-75-dm-ch16-p001-cumulative-project-i-quotienting-binary-st"></a>
## DM-CH16-P001 — Cumulative Project I: quotienting binary strings {#section-77-dm-ch16-p001-cumulative-project-i-quotienting-binary-st}

Let $X=\\{0,1\\}^{4}$. Define $x\\sim y$ when $x$ and $y$ have the same number of ones. Order equivalence classes by $[x]\\le [y]$ when the weight of $x$ is at most the weight of $y$.

<a id="section-79-tasks"></a>
### Tasks {#section-81-tasks}

1. Prove $\\sim$ is an equivalence relation.
2. List its classes and sizes.
3. Prove the order on classes is well defined and is a total order.
4. Count ordered pairs $(x,y)$ with $x\\sim y$.
5. Define a closure on $X$ by $\\operatorname{cl}(S)=\\{y: \\operatorname{wt}(y)\\le \\max_{x\\in S}\\operatorname{wt}(x)\\}$ for nonempty $S$, and $\\operatorname{cl}(\\varnothing)=\\varnothing$. Determine which closure axioms hold.

<details>
<summary>Hint 1</summary>

First identify which statistic determines an equivalence class; do not choose a representative before checking invariance.

</details>

<details>
<summary>Hint 2</summary>

For each possible weight, count the strings with that weight and inspect what the closure does to its maximum.

</details>

<a id="section-101-model-solution"></a>
### Model solution {#section-103-model-solution}

<details>
<summary>Complete model solution</summary>

<a id="section-106-worked-example-1-equivalence-classes-order-and-closure"></a>
#### Worked example 1: equivalence classes, order and closure {#section-108-worked-example-1-equivalence-classes-order-and-closure}

Let $\\operatorname{wt}(x)$ be the number of one bits. Reflexivity holds because $\\operatorname{wt}(x)=\\operatorname{wt}(x)$. Symmetry and transitivity follow from symmetry and transitivity of integer equality. Thus $\\sim$ is an equivalence relation.

There is one class $C_{k}$ for each $k=0,1,2,3,4$, containing the strings of weight $k$. Choosing the one positions gives

$$|C_{k}|=\\binom{4}{k}$$

so the sizes are $1,4,6,4,1$.

If $[x]=[x']$ and $[y]=[y']$, then $\\operatorname{wt}(x)=\\operatorname{wt}(x')$ and $\\operatorname{wt}(y)=\\operatorname{wt}(y')$. Therefore $\\operatorname{wt}(x)\\le \\operatorname{wt}(y)$ has the same truth value as $\\operatorname{wt}(x')\\le \\operatorname{wt}(y')$; the order is well defined. It inherits reflexivity, antisymmetry, transitivity, and comparability from the integer order on $\\{0,1,2,3,4\\}$, so it is a total order on five classes.

For each class, any first and second coordinates within that class form a related ordered pair. Hence the count is

$$\\sum_{k=0}^{4} |C_{k}|^{2} = 1^{2}+4^{2}+6^{2}+4^{2}+1^{2}=70$$

For closure, extensivity holds: if $x\\in S$, then $\\operatorname{wt}(x)$ is at most the maximum. Monotonicity holds because $S\\subseteq T$ implies $\\max \\operatorname{wt}(S)\\le \\max \\operatorname{wt}(T)$ when $S$ is nonempty, with the empty case immediate. Idempotence holds. If $S$ is nonempty with maximum weight $w$, then $\\operatorname{cl}(S)$ contains all strings of weight at most $w$, whose maximum weight is still $w$; hence $\\operatorname{cl}(\\operatorname{cl}(S))=\\operatorname{cl}(S)$. For $S=\\varnothing$, $\\operatorname{cl}(\\varnothing)=\\varnothing$ by definition. All three closure axioms hold.

</details>

<a id="section-126-what-this-project-synthesizes"></a>
### What this project synthesizes {#section-128-what-this-project-synthesizes}

The object specification prevents confusing strings with equivalence classes. Binomial counting measures the fibers, and well-definedness is a separate obligation before order properties may be inherited.

<a id="section-130-dm-ch16-p002-cumulative-project-ii-avoiding-consecutive"></a>
## DM-CH16-P002 — Cumulative Project II: avoiding consecutive selections {#section-132-dm-ch16-p002-cumulative-project-ii-avoiding-consecutive}

Let $a_{n}$ be the number of subsets of $\\{1,\\ldots,n\\}$ containing no consecutive integers, with $a_{0}=1$.

<a id="section-134-tasks"></a>
### Tasks {#section-136-tasks}

1. Derive a recurrence and all required initial values.
2. Obtain the ordinary generating function.
3. Prove $a_{n}=F_{n+2}$ for Fibonacci numbers $F_{0}=0,F_{1}=1$.
4. Count the valid subsets of $\\{1,\\ldots,6\\}$ exactly.
5. Give a bijection with tilings.

<details>
<summary>Hint 1</summary>

Separate subsets according to whether the final position is selected.

</details>

<details>
<summary>Hint 2</summary>

When the final position is selected, remove that position and its forbidden predecessor; check the empty and one-position cases.

</details>

<a id="section-156-model-solution"></a>
### Model solution {#section-158-model-solution}

<details>
<summary>Complete model solution</summary>

<a id="section-161-worked-example-2-a-reversible-last-decision-decompositi"></a>
#### Worked example 2: a reversible last-decision decomposition {#section-163-worked-example-2-a-reversible-last-decision-decompositi}

Partition valid subsets according to whether they contain $n$. Those omitting $n$ correspond to any valid subset of $\\{1,\\ldots,n-1\\}$, giving $a_{n-1}$. If $n$ is included, $n-1$ must be omitted, and deleting $n$ leaves an arbitrary valid subset of $\\{1,\\ldots,n-2\\}$, giving $a_{n-2}$. The cases are disjoint and reversible, so

$a_{n}=a_{n-1}+a_{n-2}$ for $n\\ge 2$.

The initial values are $a_{0}=1$ for the empty subset of the empty ground set and $a_{1}=2$ for $\\varnothing,\\{1\\}$.

Let $A(x)=\\sum_{n\\ge 0}a_{n}x^{n}$. Then

$$A(x)-1-2x=x(A(x)-1)+x^{2}A(x)$$

so

$$A(x)=(1+x)/(1-x-x^{2})$$

The Fibonacci-shift claim follows because $F_{2}=1=a_{0}$, $F_{3}=2=a_{1}$, and $F_{n+2}=F_{n+1}+F_{n}$ obeys the same recurrence. Induction makes the identification valid for every $n\\ge 0$.

The sequence begins $1,2,3,5,8,13,21$, so $a_{6}=21$.

For a bijection, first encode a valid subset by its length-$n$ membership word, which has no adjacent ones. Append a sentinel zero. Parse the resulting length-$n+1$ word from left to right, replacing every block $10$ by a domino and every remaining $0$ by a square. The no-adjacent-ones condition makes the parsing unambiguous, and the sentinel handles a selected final position. Conversely, encode each domino by $10$ and each square by $0$; every resulting word ends in zero, so delete that final sentinel. These operations are inverse and give a bijection with square-domino tilings of length $n+1$.

</details>

<a id="section-185-dm-ch16-p003-cumulative-project-iii-a-graph-extremum-wi"></a>
## DM-CH16-P003 — Cumulative Project III: a graph extremum with two certificates {#section-187-dm-ch16-p003-cumulative-project-iii-a-graph-extremum-wi}

Let $G$ be a simple graph on six vertices with no triangle.

<a id="section-189-tasks"></a>
### Tasks {#section-191-tasks}

1. Prove $|E(G)|\\le 9$.
2. Construct a graph attaining nine edges.
3. Show every such $G$ has a stable set of size at least three.
4. Explain what exhaustive graph enumeration could add and what it could not add.

<details>
<summary>Hint 1</summary>

Find an edge-count upper bound before presenting a construction.

</details>

<details>
<summary>Hint 2</summary>

For the bound, sum degree inequalities along edges; for the construction, split the six vertices into equal independent parts.

</details>

<a id="section-210-model-solution"></a>
### Model solution {#section-212-model-solution}

<details>
<summary>Complete model solution</summary>

<a id="section-215-worked-example-3-a-graph-maximum-with-two-certificates"></a>
#### Worked example 3: a graph maximum with two certificates {#section-217-worked-example-3-a-graph-maximum-with-two-certificates}

For every edge $uv$, triangle-freeness implies $u$ and $v$ have no common neighbor, so $\\operatorname{deg}(u)+\\operatorname{deg}(v)\\le 6$. If $m=|E(G)|$, summing over edges gives

$$\\sum_{v} \\operatorname{deg}(v)^{2}\\le 6m$$

By Cauchy and the handshaking identity,

$$\\sum_{v} \\operatorname{deg}(v)^{2}\\ge (\\sum_{v}\\operatorname{deg}(v))^{2}/6=(2m)^{2}/6$$

Thus $4m^{2}/6\\le 6m$. For $m>0$, divide by $m$ to get $m\\le 9$; for $m=0$ the claim is immediate.

The complete bipartite graph $K_{3,3}$ is triangle-free and has $3\\cdot 3=9$ edges, so the maximum is exactly nine.

To find a stable triple, choose a vertex $v$. If $\\operatorname{deg}(v)\\ge 3$, its neighbors are pairwise nonadjacent, or two of them with $v$ would form a triangle. Hence three neighbors form a stable set. If every vertex has degree at most two, then $G$ is a disjoint union of paths and cycles on six vertices. A path component on $n_i$ vertices contributes a stable set of size $\\lceil n_i/2\\rceil$, and a cycle component contributes one of size $\\lfloor n_i/2\\rfloor$.

The triangle-free hypothesis excludes 3-cycle components, so every cycle component has at least four vertices. If there is no cycle, summing the path bounds gives at least half of the six vertices. A 6-cycle contributes three. A 5-cycle leaves an isolated vertex and contributes $2+1=3$. A 4-cycle leaves two vertices whose path components contribute at least one more, again giving three. These exhaust the possible cycle sizes. Therefore every triangle-free six-vertex graph has a stable set of size at least three.

An exhaustive labeled-graph check on six vertices could count all equality examples, find witnesses, and catch a flawed implementation of the predicates. It would provide a bounded alternative proof for six vertices if enumeration completeness and tests were established. It would not prove the six-vertex statement for an unspecified graph model, nor the general $n$-vertex extremal theorem.

</details>

<a id="section-237-dm-ch16-p004-cumulative-project-iv-independence-greedy-"></a>
## DM-CH16-P004 — Cumulative Project IV: independence, greedy choice, and repair {#section-239-dm-ch16-p004-cumulative-project-iv-independence-greedy-}

On ground set $E=\\{a,b,c,d\\}$, let feasible sets be the stable vertex sets of path $a-b-c-d$. Assign weights $w(a)=3,w(b)=5,w(c)=4,w(d)=3$.

<a id="section-241-tasks"></a>
### Tasks {#section-243-tasks}

1. Prove feasibility is hereditary.
2. Give an augmentation failure.
3. Run descending-weight greedy with alphabetical tie-breaking.
4. Find an optimum by a complete bounded argument.
5. State a repaired theorem under which greedy is guaranteed.

<details>
<summary>Hint 1</summary>

A hereditary family need not satisfy augmentation, even if greedy succeeds for the displayed weights.

</details>

<details>
<summary>Hint 2</summary>

Use a singleton centered at an internal path vertex and a larger stable set that cannot augment it; then compare every candidate stable pair.

</details>

<a id="section-263-model-solution"></a>
### Model solution {#section-265-model-solution}

<details>
<summary>Complete model solution</summary>

<a id="section-268-worked-example-4-a-successful-greedy-run-without-a-guar"></a>
#### Worked example 4: a successful greedy run without a guarantee {#section-270-worked-example-4-a-successful-greedy-run-without-a-guar}

Any subset of a stable set contains no adjacent pair, so feasibility is hereditary.

Choose $I=\\{b\\}$ and $J=\\{a,c\\}$. We have $|I|=1<2=|J|$, but adding either $a$ or $c$ to $I$ creates an edge. Thus augmentation fails.

Greedy considers $b,c,a,d$ in that weight order. It adds $b$, rejects $c$ and $a$ as adjacent to $b$, then adds $d$. It returns $\\{b,d\\}$ of weight eight.

The maximal candidate pairs are $\\{a,c\\}$ of weight seven, $\\{a,d\\}$ of weight six, and $\\{b,d\\}$ of weight eight. No stable triple exists in this four-vertex path, and a singleton weighs at most five. Therefore eight is optimal; greedy happens to succeed on this weight vector despite failure of exchange.

That observation does not rescue a universal greedy claim. A repaired theorem is: for a matroid independence family and nonnegative element weights, descending-weight greedy returns a maximum-weight basis and, with the optional-element formulation handled consistently, a maximum-weight independent set. The matroid exchange hypothesis is structural and cannot be inferred from one successful run.

</details>

<a id="section-282-proof-repair-lesson"></a>
### Proof-repair lesson {#section-284-proof-repair-lesson}

A failed hypothesis does not force the conclusion to fail on every instance. It removes the guarantee. To disprove the universal guarantee for path stable sets, change weights, for example $w(a)=3,w(b)=5,w(c)=3,w(d)=0$; greedy takes $b,d$ of weight five while $\\{a,c\\}$ has weight six.

<a id="section-286-dm-ch16-p005-cumulative-project-v-a-game-an-invariant-a"></a>
## DM-CH16-P005 — Cumulative Project V: a game, an invariant, and an experiment {#section-288-dm-ch16-p005-cumulative-project-v-a-game-an-invariant-a}

Two players begin with a heap of $n$ tokens. A move removes one, three, or four tokens; normal play applies.

<a id="section-290-tasks"></a>
### Tasks {#section-292-tasks}

1. Prove the game finite.
2. Compute outcomes through $n=14$ exactly.
3. Conjecture a modular pattern and prove it.
4. Give a strategy certificate for every N-position.

<details>
<summary>Hint 1</summary>

Classify smaller heaps first and distinguish a modular pattern from its proof.

</details>

<details>
<summary>Hint 2</summary>

For proposed P residues, inspect every legal subtraction; for other residues, exhibit one legal subtraction into a P residue.

</details>

<a id="section-311-model-solution"></a>
### Model solution {#section-313-model-solution}

<details>
<summary>Complete model solution</summary>

<a id="section-316-worked-example-5-turning-a-finite-game-table-into-induc"></a>
#### Worked example 5: turning a finite game table into induction {#section-318-worked-example-5-turning-a-finite-game-table-into-induc}

Heap size is a nonnegative integer that strictly decreases on every move, so no play can continue forever.

Backward recursion gives

\`\`\`text
n       0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
outcome P N P N N N N P N P  N  N  N  N  P
\`\`\`

The P residues appear to be $0$ and $2$ modulo seven. We prove that claim by induction on $n$. The base block $0,\\ldots,6$ is displayed. If $n\\equiv0$ modulo seven, subtracting $1,3,4$ reaches residues $6,4,3$, all outside $\\{0,2\\}$. If $n\\equiv2$, the reachable residues are $1,6,5$, again outside. Thus every move from a proposed P-position goes to N.

For every other residue there is a legal subtraction into $\\{0,2\\}$ once the move is available:

\`\`\`text
residue 1 3 4 5 6
remove  1 1 4 3 4
target  0 2 0 2 2
\`\`\`

The small bases cover cases where subtraction might be unavailable. Therefore each proposed N-position has a move to P, completing the induction.

The strategy certificate is the residue table: at each N-position, remove the listed amount to leave residue zero or two. The finite computation suggested the period and verified the base block; modular induction proves it for every heap size.

</details>

<a id="section-343-9-project-reports-as-mathematical-objects"></a>
## 9. Project reports as mathematical objects {#section-345-9-project-reports-as-mathematical-objects}

A cumulative submission should contain six layers.

1. **Specification:** objects, equality convention, bounds, and notation.
2. **Claim ledger:** each theorem, conjecture, computed observation, and rejected claim labeled separately.
3. **Proof ledger:** architecture and the exact hypothesis used at each hinge.
4. **Experiment ledger:** encoding, complete range, exact arithmetic, tie rules, and witness output.
5. **Repair ledger:** failed attempts and the smallest counterexample or missing step.
6. **Connection map:** which earlier ideas interact and why the interaction matters.

This structure prevents a polished narrative from concealing a gap. A failed approach belongs in the report when it teaches which boundary matters.

<a id="section-356-a-rubric-tied-to-visible-mathematical-evidence"></a>
### A rubric tied to visible mathematical evidence {#section-358-a-rubric-tied-to-visible-mathematical-evidence}

Use the following criteria to compare your report with its mathematical aims. A checkmark records the presence of a component; justify each claim in the report.

- **Objects and hypotheses:** the reader can reconstruct the exact universe, labels, legal moves and weight assumptions. Quotient work explicitly compares representatives of the same class. A graph argument specifies whether loops and parallel edges are allowed.
- **Coverage and proof:** every case split is disjoint and exhaustive; every recurrence includes enough initial values; every induction has a smaller parameter and a justified step. A reported maximum includes both a feasible construction and an upper bound applying to every admissible competitor.
- **Computation and certificates:** the finite range, arithmetic policy and tie rule are declared. A counterexample includes enough data to check the failure without trusting the search program. An empty failure list is reported with its tested domain, rather than renamed a universal theorem.
- **Repair and reflection:** the original failed implication is identified, the changed hypothesis or conclusion is stated, and the revised proof is followed through to its end. An explanation distinguishes a theorem application from a numerical observation.

For example, a report that lists the path's stable pairs and their weights has supplied a bounded upper-bound argument only after it excludes larger feasible sets and handles the empty set and singletons. Calling a displayed pair “best” without that coverage is insufficient. A second implementation may help find a transcription error, but its agreement does not fill a missing proof step. Keep comments on these criteria separate from claims of reviewed status, grades or demonstrated learner independence.

<a id="section-367-10-diagnosing-common-solution-failures"></a>
## 10. Diagnosing common solution failures {#section-369-10-diagnosing-common-solution-failures}

<a id="section-369-the-result-appears-before-the-model"></a>
### The result appears before the model {#section-371-the-result-appears-before-the-model}

Writing $2^{n}$ is not a counting argument until the $n$ independent binary choices and their bijection with objects are specified.

<a id="section-373-cases-overlap"></a>
### Cases overlap {#section-375-cases-overlap}

If a recurrence partitions objects by a first decision, show every object has exactly one first decision. Overlap causes double counting; omission causes undercounting.

<a id="section-377-an-induction-hypothesis-is-used-at-the-same-size"></a>
### An induction hypothesis is used at the same size {#section-379-an-induction-hypothesis-is-used-at-the-same-size}

Strong induction licenses earlier sizes, not the current instance in disguise. Identify the strictly decreasing measure.

<a id="section-381-equality-is-inferred-from-one-inequality"></a>
### Equality is inferred from one inequality {#section-383-equality-is-inferred-from-one-inequality}

An upper bound plus no construction is not an exact maximum. A construction plus no upper bound is not one either.

<a id="section-385-a-picture-substitutes-for-incidence"></a>
### A picture substitutes for incidence {#section-387-a-picture-substitutes-for-incidence}

A graph drawing can suggest planarity or symmetry but may hide crossings or special cases. Translate the decisive feature into adjacency, degree, faces, paths, or an explicit embedding.

<a id="section-389-computation-silently-changes-the-universe"></a>
### Computation silently changes the universe {#section-391-computation-silently-changes-the-universe}

Labels, loops, multiple edges, empty objects, and isomorphism conventions all affect the search space. Put them in the specification.

<a id="section-393-11-exercises-with-fully-worked-solutions"></a>
## 11. Exercises with fully worked solutions {#section-395-11-exercises-with-fully-worked-solutions}

<a id="section-395-dm-ch16-e001-repair-a-set-equality-proof"></a>
### DM-CH16-E001 — repair a set-equality proof {#section-397-dm-ch16-e001-repair-a-set-equality-proof}

A student proves $A\\cap (B\\cup C)\\subseteq (A\\cap B)\\cup C$ and concludes equality. Is equality true? Repair the work.

<details>
<summary>Hint 1</summary>

An inclusion and an equality have different proof obligations.

</details>

<details>
<summary>Hint 2</summary>

Try taking A empty while C is nonempty, then keep the implication that the student's argument actually establishes.

</details>

<a id="section-413-dm-ch16-e001-solution"></a>
#### DM-CH16-E001 — Solution {#section-415-dm-ch16-e001-solution}

<details>
<summary>Solution</summary>

The displayed inclusion is true: if $x\\in A\\cap (B\\cup C)$, then $x\\in A$ and either $x\\in B$ or $x\\in C$; in the first case $x\\in A\\cap B$, and in the second $x\\in C$. Equality is false in general. Take $A=\\varnothing$ and $C=\\{1\\}$. The left side is empty while the right side is $\\{1\\}$. The valid repaired conclusion is the one-way inclusion.

</details>

<a id="section-422-dm-ch16-e002-find-the-missing-initial-value"></a>
### DM-CH16-E002 — find the missing initial value {#section-424-dm-ch16-e002-find-the-missing-initial-value}

A recurrence is declared by $a_{n}=2a_{n-1}-a_{n-2}$ for $n\\ge 2$ and $a_{0}=3$. Explain why it is not determined and give two solutions.

<details>
<summary>Hint 1</summary>

An order-two recurrence normally needs two initial values.

</details>

<details>
<summary>Hint 2</summary>

Choose two different values for the missing initial term and examine the resulting first differences.

</details>

<a id="section-440-dm-ch16-e002-solution"></a>
#### DM-CH16-E002 — Solution {#section-442-dm-ch16-e002-solution}

<details>
<summary>Solution</summary>

This order-two recurrence requires $a_{1}$ as well. Choosing $a_{1}=3$ gives the constant sequence $3,3,3,\\ldots$. Choosing $a_{1}=4$ gives $3,4,5,6,\\ldots$, since constant first differences satisfy the recurrence. Both share the stated recurrence and $a_{0}$, so the data are insufficient.

</details>

<a id="section-449-dm-ch16-e003-bijection-audit"></a>
### DM-CH16-E003 — bijection audit {#section-451-dm-ch16-e003-bijection-audit}

Show that the number of $k$-subsets of an $n$-element set equals the number of binary strings of length $n$ with exactly $k$ ones.

<details>
<summary>Hint 1</summary>

Fix an order on the ground set and use a membership indicator for each element.

</details>

<details>
<summary>Hint 2</summary>

Write an inverse map from a binary string to the set of positions carrying a one.

</details>

<a id="section-467-dm-ch16-e003-solution"></a>
#### DM-CH16-E003 — Solution {#section-469-dm-ch16-e003-solution}

<details>
<summary>Solution</summary>

Fix an ordering $e_{1},\\ldots,e_{n}$. Map subset $S$ to string $b_{1}\\ldots b_{n}$ where $b_{i}=1$ exactly when $e_{i}\\in S$. A $k$-subset maps to a string with exactly $k$ ones. Given such a string, recover $S=\\{e_{i}:b_{i}=1\\}$. The maps are inverse, so this is a bijection and both families have size $\\binom{n}{k}$.

</details>

<a id="section-476-dm-ch16-e004-upper-bound-and-construction"></a>
### DM-CH16-E004 — upper bound and construction {#section-478-dm-ch16-e004-upper-bound-and-construction}

Determine the maximum number of edges in a triangle-free simple graph on seven vertices.

<details>
<summary>Hint 1</summary>

An exact maximum needs both an upper bound and an example attaining it.

</details>

<details>
<summary>Hint 2</summary>

Use the triangle-free edge bound and split seven vertices into two parts as evenly as possible.

</details>

<a id="section-494-dm-ch16-e004-solution"></a>
#### DM-CH16-E004 — Solution {#section-496-dm-ch16-e004-solution}

<details>
<summary>Solution</summary>

The triangle-free bound gives at most $\\lfloor 7^{2}/4\\rfloor=12$ edges. The complete bipartite graph $K_{3,4}$ is triangle-free and has $3\\cdot 4=12$ edges. The upper bound and construction agree, so the maximum is twelve.

</details>

<a id="section-503-dm-ch16-e005-quantifier-repair-for-connectivity"></a>
### DM-CH16-E005 — quantifier repair for connectivity {#section-505-dm-ch16-e005-quantifier-repair-for-connectivity}

A student writes, “Every vertex has a neighbor, so the graph is connected.” Give a counterexample and a sufficient repaired condition using paths.

<details>
<summary>Hint 1</summary>

Several components can each give every vertex a neighbor.

</details>

<details>
<summary>Hint 2</summary>

For the repair, choose a single root and require a path from every vertex to that root.

</details>

<a id="section-521-dm-ch16-e005-solution"></a>
#### DM-CH16-E005 — Solution {#section-523-dm-ch16-e005-solution}

<details>
<summary>Solution</summary>

Two disjoint edges have four vertices, each with a neighbor, but the graph is disconnected. The local degree condition is insufficient. A sufficient condition is the definition: for a chosen root $r$, prove that every vertex $v$ has a path to $r$. Then vertices $u,v$ are joined by following a path from $u$ to $r$ and reversing a path from $v$ to $r$, so the graph is connected.

</details>

<a id="section-530-dm-ch16-e006-bounded-evidence"></a>
### DM-CH16-E006 — bounded evidence {#section-532-dm-ch16-e006-bounded-evidence}

An exact program verifies that every hereditary family on at most four elements with augmentation passes 256 chosen greedy weight tests. What has been proved?

<details>
<summary>Hint 1</summary>

Separate the family-size bound, the tested weight domain and the chosen greedy algorithm.

</details>

<details>
<summary>Hint 2</summary>

The finite experiment checks instances of a general exchange theorem; it does not replace the theorem's proof.

</details>

<a id="section-548-dm-ch16-e006-solution"></a>
#### DM-CH16-E006 — Solution {#section-550-dm-ch16-e006-solution}

<details>
<summary>Solution</summary>

Assuming correct complete family enumeration, axiom predicates, arithmetic, and greedy implementation, it proves the bounded statement for ground sets of size at most four and the specified 256 weight vectors with the declared tie rule. It does not prove the matroid greedy theorem for arbitrary finite ground sets or arbitrary real weights. That theorem needs a general exchange argument.

</details>

<a id="section-557-dm-ch16-e007-invariant-failure"></a>
### DM-CH16-E007 — invariant failure {#section-559-dm-ch16-e007-invariant-failure}

Someone claims parity of heap size classifies the remove-$1,3,4$ game. Refute the claim using the outcome table.

<details>
<summary>Hint 1</summary>

Two heap sizes of the same parity need not have the same outcome.

</details>

<details>
<summary>Hint 2</summary>

Use heaps two and four, or heaps one and seven, from the exact table.

</details>

<a id="section-575-dm-ch16-e007-solution"></a>
#### DM-CH16-E007 — Solution {#section-577-dm-ch16-e007-solution}

<details>
<summary>Solution</summary>

Heaps $2$ and $4$ are both even, but $2$ is P and $4$ is N. Therefore parity alone does not determine outcome. Likewise $1$ and $7$ are both odd but are N and P respectively. Residues modulo seven, with P residues zero and two, provide the repaired classification proved in Project V.

</details>

<a id="section-584-dm-ch16-e008-proof-architecture"></a>
### DM-CH16-E008 — proof architecture {#section-586-dm-ch16-e008-proof-architecture}

To prove that every tree on $n\\ge 2$ vertices has at least two leaves, choose a longest path. Complete the argument.

<details>
<summary>Hint 1</summary>

Examine what an extra neighbor of an endpoint of a longest path could be.

</details>

<details>
<summary>Hint 2</summary>

A neighbor outside the path extends it; a second neighbor on the path creates a cycle.

</details>

<a id="section-602-dm-ch16-e008-solution"></a>
#### DM-CH16-E008 — Solution {#section-604-dm-ch16-e008-solution}

<details>
<summary>Solution</summary>

Let the longest path have endpoints $u,v$. If $u$ had a neighbor outside the path, adjoining it would create a longer path. If $u$ had another neighbor on the path besides its next path vertex, that edge together with the path segment would create a cycle, impossible in a tree. Thus $u$ has degree one and is a leaf. The same argument applies to $v$. Since $n\\ge 2$, the endpoints are distinct, so there are at least two leaves. The hypotheses “tree” and “longest” are used respectively to rule out the extra on-path edge and the off-path extension.

</details>

<a id="section-611-dm-ch16-e009-repair-a-quotient-formula"></a>
### DM-CH16-E009 — repair a quotient formula {#section-613-dm-ch16-e009-repair-a-quotient-formula}

For the equivalence relation on $\\{0,1\\}^{4}$ from Project I, a proposed formula assigns to a class the first bit of a representative. Is that formula well defined? Give a precise obstruction if necessary. Then show that assigning the total number of ones gives a bijection from the quotient to $\\{0,1,2,3,4\\}$.

<details>
<summary>Hint 1</summary>

Well-definedness compares representatives of the same class, not only representatives of different classes.

</details>

<details>
<summary>Hint 2</summary>

Compare $1000$ and $0100$. For the repaired map, use the definition of the equivalence relation, then prove both injectivity and surjectivity.

</details>

<details>
<summary>Solution</summary>

<a id="section-629-dm-ch16-e009-solution"></a>
#### DM-CH16-E009 — Solution {#section-631-dm-ch16-e009-solution}

The strings $1000$ and $0100$ both have weight one and hence belong to the same class. Their first bits are one and zero. The proposed rule would assign two different outputs to one class, so it is not well defined.

Define $W([x])=\\operatorname{wt}(x)$ instead. If $[x]=[y]$, then $x\\sim y$, which by definition means equal weights; therefore $W$ is well defined. If $W([x])=W([y])$, those weights are equal, so $x\\sim y$ and $[x]=[y]$. Thus $W$ is injective. For each $k\\in\\{0,1,2,3,4\\}$, the string consisting of $k$ ones followed by $4-k$ zeros has weight $k$, proving surjectivity. Both properties concern classes, while the chosen strings merely supply witnesses for the surjectivity argument.

</details>

<a id="section-637-dm-ch16-e010-use-the-proved-strategy-beyond-the-compute"></a>
### DM-CH16-E010 — use the proved strategy beyond the computed table {#section-639-dm-ch16-e010-use-the-proved-strategy-beyond-the-compute}

In Project V's normal-play remove-$1,3,4$ game, determine whether heaps of sizes $100$ and $102$ are P-positions or N-positions. For every N-position among them, give a winning first move. Explain why the finite table through fourteen does not, by itself, establish these answers.

<details>
<summary>Hint 1</summary>

Use the modular theorem proved in Project V, rather than extrapolating the first fifteen table entries.

</details>

<details>
<summary>Hint 2</summary>

Reduce each heap size modulo seven. For an N-position, check that the proposed subtraction is legal and leaves residue zero or two.

</details>

<details>
<summary>Solution</summary>

<a id="section-655-dm-ch16-e010-solution"></a>
#### DM-CH16-E010 — Solution {#section-657-dm-ch16-e010-solution}

Since $100=14\\cdot7+2$, heap one hundred is P by the proved residue classification. Its legal followers are $99$, $97$ and $96$, with residues one, six and five respectively. Each follower is N, so no first move forces a win against optimal play.

Since $102=14\\cdot7+4$, heap one hundred and two is N. Removing four is legal and leaves $98=14\\cdot7$, a P-position. This is a winning first move because the opponent is then to move at a P-position.

The displayed finite table covers only heaps through fourteen. Its entries alone neither enumerate the larger heaps nor exclude a later change in the pattern. The justification here is the induction in Project V: each candidate P residue has only N followers, while each other residue has a specified legal move to P, with small heaps checked separately when a subtraction is unavailable. The two large calculations are applications of that theorem, not a new experimental verification of it.

</details>

<a id="section-665-12-a-final-self-audit"></a>
## 12. A final self-audit {#section-667-12-a-final-self-audit}

Before calling a solution complete, answer these questions.

- Are the objects and equality convention explicit?
- Is every variable quantified and every denominator valid?
- Does each case split cover all possibilities exactly once?
- Are base cases sufficient for the recurrence or induction order?
- Does a claimed maximum have both certificates?
- Is every computational range finite, explicit, and completely encoded?
- Are theorem and experiment conclusions separated?
- Can a reader verify each returned witness independently?
- Did a repaired statement get checked again from beginning to end?
- Do the summary and title promise no more than the chapter proves?

An effective final defense is to explain the solution without its polished prose. Name the universe, the decisive certificate, the step that excludes all counterexamples, and the boundary beyond which the claim has not been established. Then change one hypothesis: allow an empty object, remove connectivity, permit a negative weight, or reverse the terminal rule. Identify the first line that breaks. If no line can be identified, the dependence on hypotheses is probably not yet understood. This oral audit is especially valuable for a cumulative project because it tests the dependency structure rather than memory of a finished derivation.

<a id="section-682-source-and-verification-note"></a>
## Sources {#section-684-source-and-verification-note}

Any future external computation supporting these projects must record software/version, command, configuration, immutable input and output digests, finite-domain coverage, and replay or certificate evidence. Algorithm literature alone is not run evidence.

<a id="section-686-chapter-summary-and-forward-connections"></a>
## Chapter summary and forward connections {#section-688-chapter-summary-and-forward-connections}

Proof repair is disciplined specification followed by stress testing: parse quantifiers, inventory hypotheses, select a certificate, attack the hinge, and state the surviving boundary. The cumulative projects show that discrete mathematics is not a bag of unrelated tricks. Quotients require well-defined operations; recurrence decompositions require set partitions; graph extrema require constructions and upper bounds; greedy behavior depends on exchange; finite game data become a theorem only through induction. Exact computation is most valuable inside this network—as a counterexample finder, bounded certifier, and audit instrument whose claims remain precisely labeled.
`;export{e as default};