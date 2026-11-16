
# Axiomatic Systems

## Learning purpose

This chapter formalizes what it means to present geometry axiomatically. We introduce the metamathematical notions of consistency, independence, and completeness; we give examples of finite and infinite axiom systems; and we show how to construct a model that proves relative consistency. The goal is to equip the reader to audit any later chapter by asking: what is assumed, what is proved, and what would change if an assumption were dropped?

## Formal definition of an axiom system

An **axiom system** (or postulate system) consists of:

1. A collection of **primitive terms**, left undefined;
2. A collection of **axioms**, which are statements about the primitive terms;
3. A collection of **rules of inference**, by which new statements (theorems) are derived from axioms and previously proved theorems.

In this book we use ordinary first-order logic with equality as the background inference apparatus. The primitive terms vary with the geometry under study.

### Example: incidence geometry

Primitive terms: point, line, incidence (point lies on line).

Axioms:

- (I1) For every two distinct points there exists exactly one line incident with both.
- (I2) Every line is incident with at least two points.
- (I3) There exist three noncollinear points.

These three axioms already have nontrivial models and nonmodels, which we examine below.

## Consistency

An axiom system is **consistent** if no contradiction can be derived from its axioms. By the completeness theorem for first-order logic, this is equivalent to the existence of a model.

Because absolute consistency (consistency in pure logic) is usually unattainable for rich theories, we settle for **relative consistency**: system $S$ is consistent relative to system $T$ if a model of $T$ can be transformed into a model of $S$. The Cartesian plane shows Euclidean geometry consistent relative to real analysis.

**Common error:** believing that a large number of successful theorems guarantees consistency. Consistency is a property of the axiom system, not of any finite list of derived statements.

## Independence

An axiom $A$ is **independent** of the remaining axioms $R$ if $A$ cannot be proved from $R$. Equivalently, there exists a model of $R$ in which $A$ is false.

Proving independence is therefore a model-construction task. The history of the parallel postulate is the classic example: for two millennia mathematicians tried to prove it from Euclid's other axioms. The discovery of hyperbolic geometry in the nineteenth century exhibited a model of the other axioms in which the parallel postulate fails, establishing its independence.

### Worked example: independence of I3

Consider the system with I1 and I2 but without I3. Is I3 independent?

**Claim:** Yes. A model with exactly one line and two points on it satisfies I1 and I2 but violates I3, because every triple of points is collinear. Therefore I3 is independent of $\{I1, I2\}$.

**Verification:** In the one-line model, any two distinct points determine the unique line (I1 holds). The line has two points (I2 holds). No three noncollinear points exist (I3 fails). Hence I3 is not derivable from I1 and I2 alone.

## Completeness

An axiom system is **syntactically complete** if, for every sentence $\phi$ in its language, either $\phi$ or $\neg\phi$ is provable. Full second-order axioms can characterize the real Euclidean plane up to isomorphism, so every sentence has a fixed truth value in that intended model; this semantic categoricity does not provide an effective complete proof calculus for full second-order validity. Conversely, first-order does not automatically mean incomplete: Tarski's first-order theory of real Euclidean geometry, interpreted through real closed fields, is complete and decidable. Completeness must therefore be stated for a particular language, axiom set, semantics, and proof system; Gödel's incompleteness theorem does not justify a blanket claim about every first-order geometry.

For a proof-reference book, completeness is less important than clarity about what is assumed. We usually work with systems strong enough for the theorems we need, without claiming that every geometric statement is decidable.

## Models and interpretations

A **model** of an axiom system assigns specific objects to primitive terms so that every axiom becomes a true statement about those objects.

### Fano plane

The Fano plane is a finite model of incidence geometry. Its seven points can be labeled $\{1,2,3,4,5,6,7\}$ and its seven lines are the sets
$$\{1,2,3\},\;\{1,4,5\},\;\{1,6,7\},\;\{2,4,6\},\;\{2,5,7\},\;\{3,4,7\},\;\{3,5,6\}.$$
Every pair of points lies on exactly one line, every line has three points, and there are three noncollinear points (in fact, many). Thus I1–I3 hold.

**Boundary observation:** In the Fano plane, every line has exactly three points, not "at least two." This is permitted because I2 is an existential lower bound, not an exact count.

### Cartesian plane

The standard Euclidean model takes points to be ordered pairs $(x,y) \in \mathbb{R}^{2}$ and lines to be solution sets of equations $ax + by + c = 0$ with $(a,b) \neq (0,0)$. Incidence is set membership. One checks I1–I3 directly; the parallel axiom follows from the algebraic condition for two lines to have no intersection.

## Common errors in axiomatic reasoning

1. **Circular definitions.** Defining "line" as "the shortest path between two points" requires a notion of distance and path already present in the theory. In pure incidence geometry, distance is not a primitive.
2. **Unstated existence.** A proof that begins "copy this segment onto that ray" assumes the required point exists. The rational Cartesian plane has rational midpoints, but it fails stronger Euclidean continuity and congruence-existence requirements: for example, a segment of length $\sqrt2$ cannot be copied from the origin onto the rational $x$-axis.
3. **Overgeneralizing from one model.** A theorem proved in $\mathbb{R}^{2}$ may fail in the rational plane or in finite geometries. Always check which axioms were used.

## Three model calculations with their logical scope

### Worked example 1 — The affine plane over three residues

Use points $(x,y)$ with coordinates in the field of residues modulo three. Its lines are $x=c$ and $y=mx+b$, where all constants are residues. Distinct points with equal first coordinate lie on their unique vertical line. Otherwise their first-coordinate difference has an inverse modulo three, and $m=(y_2-y_1)/(x_2-x_1)$, $b=y_1-mx_1$ give a unique nonvertical line. Each line has three points, and $(0,0),(1,0),(0,1)$ are noncollinear. This verifies I1–I3 by formulas covering every pair, rather than by an unrecorded inspection of a diagram. It also verifies a unique parallel through an external point by retaining the slope or vertical direction. None of this supplies the order of a real line.

### Worked example 2 — Independence requires a checked remainder

To remove I2 while retaining I1 and I3, begin with the three-point triangle model and add a singleton line containing A. Every pair of distinct points still lies on exactly one of the original three pair-lines, so I1 is unaffected. The same three points remain noncollinear, so I3 is unaffected. The added singleton violates I2. By contrast, adding another line through A and B would violate I1 as well and would fail as an independence witness for I2. A countermodel has to keep the entire intended remainder, not simply make the chosen axiom look doubtful.

### Worked example 3 — A gap in the rational model

In the rational plane the segment from $(0,0)$ to $(1,1)$ has squared Euclidean length two. If it could be copied onto the positive rational horizontal ray, its endpoint would be $(r,0)$ with rational $r>0$ and $r^2=2$. Writing $r=a/b$ in lowest integer terms would make $a^2=2b^2$, hence a even, then b even, a contradiction. Thus that segment-copying demand fails. Rational affine incidence and unique parallels remain valid. The example shows why a model of some familiar geometric axioms need not be a model of the full congruence-and-continuity package.

## Finite descriptions and infinite conclusions

**Proposition — The Cartesian incidence model.** Let points be real pairs and lines be the sets $ax+by+c=0$ with $(a,b)\ne(0,0)$, identifying proportional equations. Then the incidence axioms I1–I3 hold.

**Proof.** For distinct points p,q, the set $p+t(q-p)$ is a line containing both. If any line contains them, its normal vector is perpendicular to the fixed nonzero vector $q-p$, so its normal is unique up to a nonzero scalar; the equation's constant is then fixed by p. Hence the line is unique. Every such line contains p and p plus a nonzero perpendicular-to-normal vector, giving at least two points. The points $(0,0),(1,0),(0,1)$ are not all on one line, proving I3. $\square$

This proof uses algebra valid for arbitrary real inputs. It is not a finite sample of coordinate cases. The same proof works over any field for the affine incidence statement, using linear independence instead of perpendicular vectors. It does not say every such field supports real distance, angle measure or Dedekind completeness. Each added primitive requires its own interpretation and its own axiom verification.

The word complete has several meanings that must stay separate. A complete ordered field fills its bounded cuts. A complete deductive theory decides every sentence of its language. A categorical axiom package identifies a model up to isomorphism under specified semantics. None of these phrases can be substituted for another merely because the same adjective appears. The first-order completeness metatheorem and Tarski's decidability theorem mentioned earlier are named background results, not proofs supplied in this elementary model chapter.

For the rest of this book, independent means that deletion of the named axiom permits a checked countermodel. When independence in both logical directions is intended, models satisfying the remainder with the axiom and with its negation must both be available. Our finite examples make the deletion argument explicit; they make no sweeping claim that every geometric axiom is independent of every alternative formulation.

## Practice exercises

### Exercise 1
<a id="axiomatic-systems-ex-1"></a>
Show that axiom I2 is independent of $\{I1, I3\}$ by constructing a model of I1 and I3 in which some line has fewer than two points.


<details><summary>Hint 1</summary>

Keep the three joining lines of a triangle.

</details>
<details><summary>Hint 2</summary>

An additional singleton line does not create a second line through a pair.

</details>
<details><summary>Full solution</summary>

**Solution.**
Take three points $A,B,C$ and three lines $\ell_{AB}=\{A,B\}$, $\ell_{BC}=\{B,C\}$, $\ell_{CA}=\{C,A\}$. Add one extra line $\ell_{0}=\{A\}$. I1 holds for every pair of distinct points (each pair lies on exactly one of the first three lines). I3 holds because $A,B,C$ are noncollinear (no line contains all three). I2 fails because $\ell_{0}$ contains only one point. Hence I2 is independent of $\{I1, I3\}$.

</details>

### Exercise 2
<a id="axiomatic-systems-ex-2"></a>
Prove that in any model of I1–I3, every point lies on at least two lines.


<details><summary>Hint 1</summary>

Choose a noncollinear reference triangle.

</details>
<details><summary>Hint 2</summary>

Treat separately an arbitrary point on its first side and a point off that side.

</details>
<details><summary>Full solution</summary>

**Solution.**
Fix noncollinear points $A,B,C$ supplied by I3, and let $P$ be arbitrary. If $P$ is not on line $AB$, then $PA$ and $PB$ are two distinct lines. If $P$ is on $AB$ but $P\ne A$, then $PA=AB$ and $PC$ are distinct because $C$ is not on $AB$. If $P=A$, use the distinct lines $AB$ and $AC$. Thus every point lies on at least two lines.

</details>

### Exercise 3
<a id="axiomatic-systems-ex-3"></a>
Explain why the rational Cartesian plane $\mathbb{Q}^{2}$ satisfies I1–I3 and the unique-parallel axiom but does not satisfy the full Euclidean continuity and congruence-existence package.


<details><summary>Hint 1</summary>

Rational linear equations stay rational; square roots need not.

</details>
<details><summary>Hint 2</summary>

Compare copying the diagonal of a unit square onto the horizontal rational axis.

</details>
<details><summary>Full solution</summary>

**Solution.**
I1–I3 hold because two distinct rational points determine a unique rational line, every rational line contains infinitely many rational points, and $(0,0),(1,0),(0,1)$ are noncollinear. Parallelism is algebraic: through a rational point there is exactly one rational line with the same rational direction as a given rational line. What fails is continuity. The circle centered at $(0,0)$ through $(1,1)$ has equation $x^2+y^2=2$ and rational points, but the rational line $y=0$ through its center has no intersection with that circle in $\mathbb Q^2$, since it would require $x=\pm\sqrt2$. Equivalently, the length $\sqrt2$ cannot be copied onto the rational $x$-axis. Thus $\mathbb Q^2$ is not a model of the full Euclidean axiom package.

</details>

### Exercise 4
<a id="axiomatic-systems-ex-4"></a>
Define a **dual** of an incidence geometry by interchanging "point" and "line" and reversing incidence. Show that the dual of the Fano plane is isomorphic to the Fano plane itself.


<details><summary>Hint 1</summary>

Label the blocks in the displayed order.

</details>
<details><summary>Hint 2</summary>

Verify that the incidence matrix in this labeling is symmetric.

</details>
<details><summary>Full solution</summary>

**Solution.**
In the displayed order call the seven blocks $L_1,\ldots,L_7$. Map original point $i$ to the dual point represented by original line $L_i$, and map original line $L_j$ to the dual line represented by original point $j$. Direct inspection of the list gives

$i\in L_j\quad\Longleftrightarrow\quad j\in L_i$.

Thus the map preserves incidence after incidence is reversed, so it is an explicit isomorphism from the Fano plane to its dual.

</details>

## Forward and backward connections

This chapter formalizes the ideas introduced informally in **The layers of a geometric argument**. The next chapter, **Neutral Geometry**, removes the parallel axiom and studies what survives; the independence techniques introduced here justify that removal. Later chapters on finite geometries and projective planes return to incidence axioms in richer settings.

## Further exercises

### Exercise 5
<a id="axiomatic-systems-ex-5"></a>

Construct an incidence model with exactly three points satisfying I1–I3.

<details><summary>Hint 1</summary>

Use every two-point subset as a line.

</details>
<details><summary>Hint 2</summary>

No listed line contains all three points.

</details>
<details><summary>Full solution</summary>

Take points A,B,C and lines AB,AC,BC, each the indicated two-point set. Every pair determines exactly its own listed line, each line has two points, and the three points are noncollinear. Thus all three incidence axioms hold. The model has no metric or betweenness until further structure is supplied.

</details>

### Exercise 6
<a id="axiomatic-systems-ex-6"></a>

Show that the three incidence axioms do not imply that every line has three points.

<details><summary>Hint 1</summary>

Use the preceding model.

</details>
<details><summary>Hint 2</summary>

Every line in it has exactly two points.

</details>
<details><summary>Full solution</summary>

The three-point triangle model satisfies I1–I3 but its three lines each contain two points. Hence the stronger sentence is not a consequence of those axioms. This is a complete countermodel argument: the assumptions and the failed conclusion are both verified, rather than merely naming a finite geometry.

</details>

### Exercise 7
<a id="axiomatic-systems-ex-7"></a>

Explain why independence of one axiom does not prove independence of every axiom in a list.

<details><summary>Hint 1</summary>

Each deletion leaves a different remainder.

</details>
<details><summary>Hint 2</summary>

The same countermodel may fail other required axioms.

</details>
<details><summary>Full solution</summary>

To show A is not derivable from the remainder, a model must satisfy that particular remainder and falsify A. A model witnessing the independence of I3 may fail to witness independence of I2, because it still satisfies I2. Separate model constructions or separately checked cases are required. The word independent must always identify the axiom and the remaining theory.

</details>

### Exercise 8
<a id="axiomatic-systems-ex-8"></a>

Distinguish logical soundness from the first-order completeness theorem.

<details><summary>Hint 1</summary>

One sends proofs to truth in every model.

</details>
<details><summary>Hint 2</summary>

The other sends semantic consequence back to provability.

</details>
<details><summary>Full solution</summary>

Soundness says every theorem proved from a set of axioms holds in every model of them. It justifies a countermodel as an obstruction to proof. First-order completeness gives the converse for semantic consequence in first-order logic. This chapter uses soundness for its elementary countermodels; it names completeness as a metatheorem rather than proving it or confusing it with completeness of real numbers.

</details>

### Exercise 9
<a id="axiomatic-systems-ex-9"></a>

Can a geometrically complete real coordinate model be finite? Explain which completeness is meant.

<details><summary>Hint 1</summary>

A real line has more than finitely many points.

</details>
<details><summary>Hint 2</summary>

Syntactic completeness is a different property.

</details>
<details><summary>Full solution</summary>

The ordinary real coordinate plane is not finite, since even one of its lines has infinitely many points. Its real-number completeness concerns cuts or limits. A finite incidence theory may nevertheless decide many sentences about its finite model, a logical issue unrelated to whether the real line has gaps. The adjective complete needs its accompanying mathematical object.

</details>

### Exercise 10
<a id="axiomatic-systems-ex-10"></a>

Give a relative-consistency implication using the real coordinate plane.

<details><summary>Hint 1</summary>

Specify the stronger background theory first.

</details>
<details><summary>Hint 2</summary>

Interpret point and line as real-algebra objects.

</details>
<details><summary>Full solution</summary>

If a background theory supplies the real numbers with their field, order and completeness properties, it constructs the Cartesian geometry model with points real pairs and lines linear equations. Verification of the geometric axioms makes any contradiction in those axioms a contradiction in that background. This is relative consistency; it is not an unconditional proof that the background theory itself is consistent.

</details>

## Sources and provenance

The existing exposition, hypotheses, exercise statements and complete solutions are retained. Added proofs, worked examples and staged hints are original Euler prose under CC BY-SA 4.0. Primary historical reference: David Hilbert, [The Foundations of Geometry](https://www.gutenberg.org/ebooks/17384). A primary-author course comparison is Neil Donaldson, [Math 161 notes](https://www.math.uci.edu/~ndonalds/math161/notes.pdf). Historical source and theorem boundaries remain recorded in the book’s [references](references.md).

## Summary

An axiom system needs a stated language, inference rules and model interpretation. Explicit finite structures witness deletion-independence, while real and rational coordinate models separate incidence from stronger congruence and continuity. Logical completeness, categoricity and real completeness are distinct notions. The next chapter studies the combinatorics that incidence alone supports.
