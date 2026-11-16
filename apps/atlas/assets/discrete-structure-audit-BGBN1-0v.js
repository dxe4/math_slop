var e=`---
id: recipe-discrete-structure-audit
title: "Audit a Discrete Structure: Definitions, Counts, and Certificates"
license: CC BY-SA 4.0
---

# Audit a Discrete Structure: Definitions, Counts, and Certificates

**Before reading.** Read [Counting by Bijection, Decomposition, and Inclusion–Exclusion](/resources/library:book-discrete-mathematics-proof-counting-structure:counting-bijections-inclusion-exclusion/), [Relations, Equivalence, and Quotients](/resources/library:book-introduction-to-proof:relations-equivalence-quotients/).

Use this recipe when a finite problem mixes a verbal rule, a count, a graph, a greedy choice, or a computational experiment. Its goal is a reproducible mathematical claim with a witness or counterexample—not merely an answer.

## 1. Freeze the object contract

Write:

- finite ground set and element types;
- equality convention: labels, order, and symmetry;
- allowed subsets, pairs, edges, or moves;
- boundary objects such as the empty set;
- objective and whether it is maximum, maximal, minimum, or existence;
- arithmetic contract and tested size if computation is used.

**Stop condition:** If two readers could generate different object sets, do not count or optimize yet.

## 2. Audit every relation by quantifier

For a relation $R$ on $A$, test:

| Property | Proof obligation | Failure certificate |
| --- | --- | --- |
| reflexive | every $a$ has $aRa$ | one missing diagonal pair |
| symmetric | $aRb$ implies $bRa$ | one unreturned pair |
| antisymmetric | both directions imply equality | distinct $a,b$ related both ways |
| transitive | $aRb,bRc$ imply $aRc$ | a three-element broken chain |

Call the relation equivalence only after reflexive/symmetric/transitive pass. Call it a partial order only after reflexive/antisymmetric/transitive pass. For direct arrows, distinguish them from reflexive-transitive reachability closure.

**Stop condition:** A suggestive diagram is not an axiom audit.

## 3. Choose a proof architecture

- **Direct:** definitions already expose a useful representation.
- **Contrapositive:** the negated conclusion provides structure.
- **Induction:** an integer index propagates from a valid base.
- **Structural induction:** objects follow recursive constructors.
- **Invariant:** every move preserves a quantity that separates endpoints.
- **Monovariant:** a well-founded measure proves termination.
- **Extremal choice:** a smallest/largest object acquires rigid neighbors.
- **Contradiction:** the negation supplies an object that conflicts with a hypothesis.

Write where each hypothesis enters. Termination and correctness usually need separate arguments.

## 4. Count descriptions only after uniqueness

Ask in order:

1. Can each object be encoded bijectively by a word, subset, path, or tuple?
2. Can the family be split into disjoint exhaustive cases?
3. If cases overlap, can inclusion–exclusion correct them?
4. Can one incidence set be counted by rows and by columns?
5. Does the first/last component leave a smaller instance, yielding a recurrence?
6. Do component sizes combine by convolution, suggesting a generating function?
7. Does a symmetry quotient have unequal orbit sizes, invalidating naive division?

**Failure mode:** $A \\text{ \\lor } B$ is not a disjoint split when $A\\cap B$ is possible.

## 5. Derive a recurrence with boundaries

Record what $a_n$ means. Give the precise range of the rule and enough initial values. For each recurrence term, show a reversible deletion/addition correspondence.

When using a generating function:

- define $A(x)=\\sum a_nx^n$;
- display every shifted sum’s starting index;
- retain boundary corrections;
- label the series formal unless analytic convergence matters;
- explain a product coefficient as a finite convolution.

**Stop condition:** If two cases overlap or an initial object is missing, do not solve the recurrence.

## 6. Audit a graph claim

State directed/undirected, simple/multiple, finite/infinite. Then supply the relevant certificate:

- connectivity: paths or a spanning tree;
- disconnectedness: a nontrivial cut with no crossing edge;
- tree: connected plus acyclic, unique paths, or an equivalent valid pair;
- nonbipartite: an odd cycle;
- bipartite: an explicit two-part assignment or proof of no odd cycle;
- coloring upper bound: an actual proper coloring;
- coloring lower bound: clique, odd cycle, or another proved obstruction;
- nonmaximum matching: an augmenting path;
- maximum matching: complete no-augmenting-path argument or independent upper bound;
- nonplanarity: a proved obstruction, not one crossed drawing.

**Failure mode:** “Greedy used four colors” proves at most a four-color upper bound.

## 7. Separate extremal lower and upper bounds

Write two lines:

- **Construction:** an allowed object of objective value $L$, proving optimum $\\ge L$ for maximization.
- **Obstruction:** every allowed object has value $\\le U$.

Only when $L=U$ is the exact optimum proved. Equality classification and stability remain separate claims.

For a probabilistic construction, define the random model, write the defect count as indicators, calculate expectation, and state whether the conclusion is positive probability, at-least-average, or a high-probability bound. Independence is not needed for linearity but may be needed for individual event probabilities.

## 8. Audit independence before using greedy

Given ground set $E$ and feasible family $I$:

1. verify $\\varnothing \\in I$;
2. verify every subset of every feasible set is feasible;
3. for each $I,J$ with $|I|<|J|$, find an augmenting $e\\in J\\setminus I$ or report the full failed candidate list;
4. only after exchange passes, use matroid rank, closure, circuits, dual bases, and universal greedy claims.

For maximum-weight **independent set**, skip optional negative-weight elements. For maximum-weight **basis**, continue to full rank. Name the objective.

## 9. Worked audit: the path-three trap

### Worked example: feasible greedy output versus optimum

Let path vertices be $E=\\{a,b,c\\}$, edges $ab,bc$, and feasible sets be stable vertex sets.

1. $\\varnothing$ is stable and heredity holds.
2. $I=\\{b\\}$ and $J=\\{a,c\\}$ are stable, with $|I|<|J|$.
3. $I\\cup \\{a\\}$ contains edge $ab$; $I\\cup \\{c\\}$ contains edge $bc$.
4. Exchange fails, so the family is not a matroid.
5. With weights $3,5,3$, descending greedy takes $b$ and stops at total $5$.
6. Exhaustive subsets show $\\{a,c\\}$ has total $6$.

The weight table illustrates the structural failure; it does not cause it.

## 10. Report exact experiments honestly

Record:

- input instances and canonical order;
- maximum ground size;
- integer/rational bounds;
- every invariant tested;
- deterministic tie breaking;
- full witness on failure;
- exhaustive optimum or other independent check;
- what remains unproved beyond the tested instances.

**Stop condition:** If floating rounding can change a comparison, the output is not an exact certificate.

## Exercises with hints and complete solutions

### Exercise 1
<a id="discrete-structure-audit-ex-1"></a>

On $A=\\{1,2,3,6\\}$, audit the relation $aRb$ when $a$ divides $b$.

<details><summary>Hint 1</summary>

Check each partial-order axiom on positive integers.

</details>
<details><summary>Hint 2</summary>

Use a single unreturned divisibility pair to disprove symmetry.

</details>
<details><summary>Solution</summary>

divisibility is reflexive and transitive; if $a\\mid b$ and
   $b\\mid a$ for positive integers, then $a=b$, so it is antisymmetric. It is
   therefore a partial order. It is not an equivalence relation because
   $1\\mid2$ but $2\\nmid1$.

</details>

### Exercise 2
<a id="discrete-structure-audit-ex-2"></a>

Let $a_n$ count length-$n$ binary strings with no consecutive ones. Derive
   the recurrence and its boundaries by splitting on the final symbol.

<details><summary>Hint 1</summary>

Split words by their final symbol.

</details>
<details><summary>Hint 2</summary>

For n at least two, a final one must either be preceded by zero or violate the rule.

</details>
<details><summary>Solution</summary>

strings ending in zero contribute $a_{n-1}$; strings ending in
   one must end in $01$ and contribute $a_{n-2}$. Thus
   $a_n=a_{n-1}+a_{n-2}$ for $n\\ge2$, with $a_0=1$ and $a_1=2$.

</details>

### Exercise 3
<a id="discrete-structure-audit-ex-3"></a>

Test the claim “choosing the heaviest available vertex greedily always
   finds a maximum-weight stable set.” Give a smallest counterexample and
   separate the feasible construction from the upper bound.

<details><summary>Hint 1</summary>

Use the three-vertex path and weights from the worked audit.

</details>
<details><summary>Hint 2</summary>

Separate sets containing the middle vertex from those avoiding it.

</details>
<details><summary>Solution</summary>

the three-vertex path in the worked audit is already a
   counterexample. To certify its optimum, enumerate its five stable sets or
   argue that any set containing the middle vertex has weight at most $5$,
   while the two endpoints give $6$.

For each task, submit the object contract, a witness or failure certificate,
and the exact claim licensed by the check. A diagram without those records is
supporting evidence, not the whole solution.

</details>

## Final reporting checklist

A reader should be able to locate the object definition, theorem hypotheses, construction, obstruction, boundary cases, counterexample, exact calculation, and claim limit. If any is implicit, the audit is not finished.
`;export{e as default};