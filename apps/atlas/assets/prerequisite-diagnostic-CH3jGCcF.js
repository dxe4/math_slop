var e=`---
parent_id: book-geometry-proof-reference
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

The current L2 entry uses the linked school geometry and proof resources plus the first-year vector, matrix and determinant chapters identified in the reader guide. Calculus, introductory analysis, and group/field vocabulary belong to the later chapters where explicitly used. The original diagnostic below remains a broader preparation and repair instrument, not a demand to complete every advanced topic before opening the book.

## What background is assumed

1. **Logical and set-theoretic language.** You should be comfortable with quantifiers ($\\forall$, $\\exists$), implication ($\\Rightarrow$, $\\Leftrightarrow$), set operations ($\\cup$, $\\cap$, $\\subseteq$, $\\setminus$), and the notion of a function as a set of ordered pairs. You should be able to read "for every $\\varepsilon > 0$ there exists $\\delta > 0$ such that ..." and identify the dependences.
2. **Linear algebra at entry; analysis at point of use.** Entry preparation includes vectors, basic matrix operations and determinants. The completeness of $\\mathbb{R}$, continuity, differentiability and eigenvalues are broader diagnostic topics for the later chapters that explicitly use them; repair these when needed, rather than treating them all as entry requirements.
3. **Elementary Euclidean geometry.** You should know the basic theorems of Euclidean plane geometry (triangle congruence, parallel-line properties, circle theorems) and be able to write a simple two-column or paragraph proof. Familiarity with coordinate geometry is assumed.

## Self-diagnostic questions with answers

### Logical and set-theoretic language

**Question 1.** Write the negation of "for every line $\\ell$ there exists a point $P$ not on $\\ell$" without using any negated quantifiers.

> **Answer.** There exists a line $\\ell$ such that for every point $P$, $P$ lies on $\\ell$. In symbols: $\\exists \\ell\\, \\forall P\\, (P \\in \\ell)$.

**Question 2.** Let $A = \\{1,2,3\\}$ and $B = \\{2,3,4\\}$. Compute $A \\cap B$, $A \\cup B$, and $A \\setminus B$.

> **Answer.** $A \\cap B = \\{2,3\\}$; $A \\cup B = \\{1,2,3,4\\}$; $A \\setminus B = \\{1\\}$.

**Question 3.** Explain why the statement "$P \\Rightarrow Q$ is false" is equivalent to "$P$ is true and $Q$ is false."

> **Answer.** By definition, $P \\Rightarrow Q$ is false only in the case where the antecedent $P$ holds and the consequent $Q$ does not. In all other truth-value combinations the implication is true.

### Real analysis and linear algebra

**Question 4.** State the definition of continuity of a function $f: \\mathbb{R} \\to \\mathbb{R}$ at a point $a$ using $\\varepsilon$ and $\\delta$.

> **Answer.** For every $\\varepsilon > 0$ there exists $\\delta > 0$ such that for all $x$, if $|x - a| < \\delta$ then $|f(x) - f(a)| < \\varepsilon$.

**Question 5.** Compute the determinant of $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ and determine whether the matrix is invertible.

> **Answer.** $\\det = 2 \\cdot 3 - 1 \\cdot 1 = 5$. Since the determinant is nonzero, the matrix is invertible.

**Question 6.** Let $f(x) = x^{2}$. Find the tangent line to the graph at $x = 2$.

> **Answer.** $f(2) = 4$ and $f'(x) = 2x$, so $f'(2) = 4$. The tangent line is $y - 4 = 4(x - 2)$, or $y = 4x - 4$.

### Elementary Euclidean geometry

**Question 7.** Prove that the base angles of an isosceles triangle are congruent. List every definition and axiom used.

> **Answer.** Compare $\\triangle ABC$ with $\\triangle ACB$. The sides $AB$ and $AC$ exchange roles, and the included angle at $A$ is common. SAS gives $\\triangle ABC\\cong\\triangle ACB$, so the corresponding base angles are congruent. Definitions used: an isosceles triangle has two congruent sides (here $AB\\cong AC$); its base angles are the angles at $B,C$; congruent triangles have congruent corresponding angles. Axioms used: incidence sufficient to form the triangle, reflexivity of angle congruence at $A$, and SAS; no angle-bisector existence or crossbar theorem is needed.

**Question 8.** A transversal crosses two parallel lines. Prove that alternate interior angles are congruent.

> **Answer.** Let $t$ meet parallel lines $m,n$ at $P,Q$. Through $P$, copy the alternate interior angle at $Q$ to form a line $m'$. The neutral exterior-angle theorem shows that equal alternate interior angles make $m'$ disjoint from $n$. Since the given line $m$ through $P$ is also disjoint from $n$, Playfair uniqueness gives $m'=m$. Therefore the alternate interior angle made by $m$ equals the one at $Q$. This uses angle copying, the neutral exterior-angle theorem, and the Euclidean unique-parallel axiom.

## Scoring your diagnostic

- Questions 1–3, 5 and 7–8 check entry topics: logic, sets, determinants and elementary Euclidean proof. Use any difficulty here to identify a specific repair before relying on that topic.
- Questions 4 and 6 locate later analysis and calculus preparation. An unfamiliar answer here calls for repair at the later point of use, rather than delaying the opening chapters.
- Choose the relevant repair routes below by topic. A total score is not an entry requirement or evidence of mastery; the reader guide identifies the preparation for the current route.

## Repair routes

### Logical and set-theoretic language

- *Math Atlas: Discrete Mathematics and Proof* — logic, sets, relations, and proof techniques.
- *Math Atlas: Algebra: Patterns and Structure* — a proof-focused development of algebraic structures for readers who want deeper foundations.

### Real analysis and linear algebra

- *Math Atlas: Calculus and Analysis* — limits, continuity, differentiation, and integration.
- *Math Atlas: Linear Algebra and Matrix Theory* — vector spaces, linear transformations, and eigenvalues.

### Elementary Euclidean geometry

- *Math Atlas: Geometry and Trigonometry* — a first-course treatment of Euclidean geometry with proofs.
- *Math Atlas: Number, Operations, and Early Algebra* — for readers who need to strengthen arithmetic and algebraic manipulation before geometric proof.

## What this book does not assume

- Advanced topology: point-set topology is mentioned but not required. Chapter 11 introduces the measure-theoretic ideas needed for geometric measure theory.
- Advanced abstract algebra: a prior full course is not required, but Chapters 6, 7, 13, and 14 use basic groups, fields, quotients, and group actions. Review those notions before the corresponding route if they are unfamiliar.
- Programming: code appears in plain text for readability. No prior programming experience is required.
- Prior exposure to non-Euclidean geometry: Chapters 4 and 5 introduce hyperbolic and elliptic geometry from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};