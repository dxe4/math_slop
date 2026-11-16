var e=`---
id: visual-lab-discrete-independence-extremal
title: "Independence and Extremal Structures Explorer"
level: advanced-undergraduate
estimated_minutes: 85
license: CC BY-SA 4.0
---

# Independence and Extremal Structures Explorer

Why does descending-weight greedy solve every weighted instance for a matroid but fail on a three-vertex path? This laboratory makes the answer inspectable: heredity is not enough; exchange supplies the missing replacement.

The lab is an isolated implementation awaiting central registry integration. Its mathematical engine is pure, deterministic, dependency-free, and restricted to at most ten ground elements with exact integer weights from $-20$ through $20$.

## Learning goals

Use the instrument to:

- distinguish graph-stable sets from graphic-matroid edge sets;
- inspect every independent subset of a bounded system;
- compare maximal sets, bases, rank, circuits, and matroid closure;
- read an explicit exchange witness when exchange fails;
- compare descending-weight greedy with exhaustive optimum;
- distinguish maximum-weight independent set from maximum-weight basis;
- inspect graph independence number and independence-polynomial coefficients;
- treat exact instance enumeration as a certificate for that instance, not a proof of the general theorem.

## Advertised structures

### Stable sets of path $a-b-c$

Ground elements are vertices. Feasible sets contain no edge. The engine returns exchange witness

$I=\\{b\\}$, $J=\\{a,c\\}$,

with failed candidates $a,c$. Default weights are $3,5,3$: greedy selects $\\{b\\}$ for $5$, while exhaustive optimum is $\\{a,c\\}$ for $6$.

### Stable sets of cycle $C_5$

The graph has five vertices and five edges, is triangle-free, and has independence number $2$. Its independence polynomial is

$1+5x+5x^{2}$,

so the coefficient table is $[1,5,5,0,0,0]$. The lab lists all five maximum stable sets. It also displays Mantel’s upper bound $m\\le \\lfloor n^{2}/4\\rfloor=6$, explicitly as a scoped triangle-free bound rather than an equality claim for this graph.

### Uniform matroid $U_{2,4}$

Every subset of size at most two is independent. Rank is two, every three-set is a circuit, and complements of two-element bases are dual bases. Closure of a basis is the full ground set.

### Partition matroid

Elements are split into two red and three blue items, with capacities one red and two blue. Exchange passes because a larger feasible set must exceed the smaller one in a block with spare capacity.

### Graphic triangle with a tail

Ground elements are edges $AB,BC,CA,CD$; feasible sets are forests. The triangle is the unique circuit. Rank is three. Tail $CD$ appears in every basis, and closure of $\\{AB,BC\\}$ adds $CA$ but not $CD$.

## Exact greedy contract

The lab processes elements by descending integer weight, breaking ties by a locale-independent code-unit ordering of IDs. It skips negative weights and accepts a remaining element only if feasibility survives. Thus it computes a maximum-weight **independent set** on matroid examples.

The general theorem permits arbitrary real weights, but the instrument deliberately uses bounded integers so additions and comparisons remain exact in JavaScript. For a maximum-weight **basis** objective, negative elements could not be skipped; this lab labels that distinction instead of silently switching objectives.

Exhaustive search evaluates every independent subset and breaks equal totals deterministically by larger cardinality and then canonical subset key. Agreement with greedy is exact for the displayed instance. Exchange theory, not the enumeration, proves agreement for every finite matroid.

## Table and text alternative

No mathematical information depends on the SVG. The page provides:

- ground set and description;
- number of independent subsets out of $2^|E|$;
- complete base and circuit lists;
- matroid-only closure and dual-base lists;
- full exchange witness or pass statement;
- greedy set, exact optimum, and totals;
- one row for every greedy decision;
- a complete expandable independent-set table;
- for graph examples, order, size, triangle-free status, Mantel bound, independence number, maximizing sets, and polynomial coefficients.

The static SVG marks greedy choices with $G$, optimum choices with $O$, and shared choices with $G+O$; color is redundant.

## Controls and accessibility

All interaction uses native select, number, and button controls with visible labels. Weight inputs are clamped to integers in $[-20,20]$. The status is announced through a polite live region. Tables sit in keyboard-focusable horizontal scroll containers with visible focus outlines. The SVG has a title and description and scales responsively. There is no animation, autoplay, drag-only operation, or timing requirement. Reduced-motion CSS disables any inherited transition on the diagram.

## Focused validation

The engine tests cover:

- deterministic subset enumeration and duplicate/oversized rejection;
- exact path-three exchange and $5$ versus $6$ greedy failure;
- heredity, exchange, equal-rank bases, and greedy optimum for every advertised matroid;
- negative-weight skip semantics;
- rank, closure, circuits, and dual bases;
- graphic circuit, coloop, and closure examples;
- $C_5$ maximum stable sets and polynomial coefficients;
- circuit minimality even for a hostile nonhereditary input;
- unknown systems, nonfinite values, nonintegers, and weights outside $[-20,20]$.

## Guided investigations

1. Load the path witness. At $w(b)=4$, greedy still takes $b$ for $4$ while the endpoints total $6$. Lower $w(b)$ to $3$: code-unit tie order processes $a$ before $b$, so greedy accepts $a$, rejects $b$, accepts $c$, and reaches the optimum total $6$. Explain this boundary and the role of deterministic tie order.
2. Give one endpoint a negative weight. Explain why both greedy and optimum omit it under the independent-set objective.
3. In $U_{2,4}$, assign one negative and three positive weights. Verify greedy takes the two greatest positive values.
4. In the graphic example, raise the three triangle-edge weights above the tail. Explain why full-rank basis optimization would still require the tail, while optional independent-set optimization may choose based on sign.
5. Compare the $C_5$ stable-set family with a matroid. Locate an exchange witness and explain why identical rank values on some subsets do not rescue the axiom.

## Claim boundary

The instrument proves every table entry for its bounded advertised instances, subject to the tested engine. It does not enumerate arbitrary graphs, prove Turán’s general theorem, certify a black-box oracle as a matroid beyond the supplied ground set, or solve scheduling and operations-research problems. Its central theorem remains mathematical exchange; the visualization is a transparent finite witness generator.

## Live laboratory

[Open the live Independence and Extremal Structures Explorer](#/labs?lab=visual-lab-discrete-independence-extremal). Every experiment is also fully described by the tables and text in this article.
`;export{e as default};