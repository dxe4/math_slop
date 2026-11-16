var e=`---
id: book-discrete-mathematics-proof-counting-structure
title: "Discrete Mathematics: Proof, Counting, and Structure"
level: undergraduate
estimated_minutes: 2560
license: CC BY-SA 4.0
production_state: drafting
---

# Discrete Mathematics: Proof, Counting, and Structure

Why can a local rule force a global pattern? How can we count without listing, prove that a search must end, or know that a proposed network shape is impossible? Discrete mathematics answers such questions by treating finite or countable objects as structures rather than as piles of cases. A set records membership, a relation records comparison, a recurrence records dependence, and a graph records adjacency. Proof turns those representations into reliable conclusions.

The main reading route brings together counting, recurrences, finite probability, graph structure, algorithms, and proof. Earlier readings on logic, quotients, extremal methods, games, designs, graph decompositions, and matroids remain available at their existing addresses.

## Audience and honest prerequisites

The main route is for a learner comfortable with arithmetic, elementary algebra, functions, finite sums, and the definitions and proof techniques in [Introduction to Proof](#/item/book-introduction-to-proof). It does not assume calculus or programming. Whenever probability appears, the sample space is finite and the needed expectation rule is derived.

You should be able to:

- substitute into a formula and simplify an expression;
- distinguish an example from a claim about every object;
- follow finite indexed notation such as $a_{1},\\ldots,a_{n}$;
- pause at an unfamiliar definition and test it on a small case.

If quantified statements feel opaque, return to Introduction to Proof or use the existing **Proof Foundations: From Claims to Structure** course as a parallel route. The earlier sets and proof chapters remain accessible as supplementary readings.

## Notation contract

$N=\\{0,1,2,\\ldots\\}$ in this manuscript. A finite set $A$ has cardinality $|A|$. The empty set is $\\varnothing$. We write $A\\subseteq B$ when every member of $A$ is a member of $B$; equality requires both inclusions. A function $f:A\\to B$ assigns each input in $A$ exactly one output in $B$. A simple graph $G=(V,E)$ has no loops or parallel edges unless a section explicitly changes that convention. An edge $uv$ is the unordered pair $\\{u,v\\}$. All sums and products are finite unless a formal power series is explicitly declared.

Three labels matter:

- **Theorem** means a statement proved under its displayed hypotheses.
- **Heuristic** means a guide for discovery, not a proof.
- **Experiment** means an exact or numerical observation on the tested instances only.

This distinction is especially important in extremal and probabilistic work, where small examples can suggest the right threshold without establishing it.

## The fourteen-chapter reading route

1. **Counting by bijection, decomposition, and inclusion–exclusion** builds reliable counting arguments.
2. **Permutations, combinations, and binomial coefficients** distinguishes ordered and unordered choices.
3. **Pigeonhole and double counting** proves existence and identities by organizing finite sets.
4. **Recurrences and generating functions** connects recursive rules to coefficient methods.
5. **Catalan numbers, Stirling numbers, and derangements** studies three families of counting problems.
6. **Advanced enumeration and partitions** develops restricted partitions and formal products.
7. **Finite orders, lattices, and Möbius inversion** connects ordering with inversion on finite posets.
8. **Discrete probability** works with finite sample spaces and expectation.
9. **Graphs, trees, and connectivity** develops paths, components, and tree structure.
10. **Spanning trees and shortest paths** studies weighted graph algorithms and their hypotheses.
11. **Euler trails and Hamilton cycles** distinguishes edge and vertex traversal questions.
12. **Planarity, coloring, and matchings** uses planar bounds and matching certificates.
13. **Exact computation and experiments** separates bounded evidence from general theorems.
14. **Cumulative projects and solutions** brings the methods together through proof repair and synthesis.

The earlier chapter sources remain accessible under their existing stable IDs.
They include background and companion topics that are not part of this primary
reading order. Their retention preserves existing reading links and notes.

## A motivating problem map

The same problem often admits several representations. Suppose a club wants to schedule pairwise meetings so that no person attends two at once.

- As a **set problem**, a time slot is a set of meetings with no repeated participant.
- As a **relation**, “has already met” may be symmetric but is usually not transitive.
- As a **graph**, people are vertices and requested meetings are edges; one time slot is a matching.
- As a **counting problem**, we may ask how many schedules exist.
- As an **extremal problem**, we may ask how many meetings force some person to have a large load.
- As an **algorithmic experiment**, we may try small cases, but the experiment does not replace the proof.

Learning discrete mathematics means choosing a representation whose definitions expose the constraint.

## Proof-reading protocol

For every theorem in this manuscript, make a four-line ledger:

1. **Objects:** What kinds of things are quantified over?
2. **Hypotheses:** Which properties are assumed?
3. **Conclusion:** What exactly must follow?
4. **Load-bearing step:** Where does each hypothesis enter?

For example, the statement “every finite nonempty partially ordered set has a maximal element” needs all three adjectives. Nonempty supplies a starting point. Finite prevents an endless strictly increasing chain. Partially ordered supplies transitivity and antisymmetry so “move upward” is coherent. The conclusion is *maximal*, not necessarily a single *greatest* element.

## Diagnostic before starting

Try these without looking ahead.

1. If $A=\\{1,2\\}$ and $B=\\{2,3\\}$, list $A\\cup B$, $A\\cap B$, and $A\\times B$.
2. Negate: “Every vertex has a neighbor.”
3. Count binary strings of length five with exactly two ones.
4. A tree has ten vertices. How many edges should you expect, and what hypothesis makes your answer safe?
5. Give a relation that is reflexive and symmetric but not transitive.

Answers: $A\\cup B=\\{1,2,3\\}$, $A\\cap B=\\{2\\}$, and $A\\times B=\\{(1,2),(1,3),(2,2),(2,3)\\}$. The negation is “some vertex has no neighbor.” There are $\\binom{5}{2}=10$ strings. A finite tree has nine edges; both connectedness and absence of cycles matter. On integers, $aRb$ when $|a-b|\\le 1$ is reflexive and symmetric, but $0R1$ and $1R2$ while $0$ is not related to $2$.

## Reading routes and editions

The main route above contains fourteen chapters. The retained earlier readings
and the two-part exercise programme remain available for continuation and
reference; their older chapter numbering describes the earlier reading order.
The existing PDF predates the revised route, so its contents and pagination
should not be treated as matching the current online reading order. The
[front matter](discrete-mathematics-proof-counting-structure/front-matter/preface-and-reader-guide.md)
and [subject index](discrete-mathematics-proof-counting-structure/back-matter/subject-index-by-stable-chapter.md)
retain links to earlier sources alongside the current route.

## What completion looks like

After the seed route, you should be able to define an object before manipulating it; select a proof architecture; move between a count and a bijection or recurrence; prove basic graph and tree facts; test the hypotheses of a coloring, matching, or extremal claim; distinguish graph independence from matroid independence; and explain why a finite experiment is evidence rather than a theorem. The final chapter asks you to bring these methods together in proof-repair and project work.

## Continue through the discrete shelf

Follow the structured [Discrete Mathematics course](#/item/course-discrete-mathematics-structures) for a guided route with checkpoints, consult [Combinatorial Structures](#/item/book-discrete-combinatorial-structures) for the proof and reference treatment of graphs, extremal methods, and matroids, keep the [structure audit recipe](#/item/recipe-discrete-structure-audit) at hand for problem-solving procedure, and experiment in the [Independence and Extremal Structures Explorer](#/labs?lab=visual-lab-discrete-independence-extremal).
`;export{e as default};