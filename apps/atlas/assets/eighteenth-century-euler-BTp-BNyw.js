var e=`---
parent_id: book-history-of-mathematics
chapter_id: eighteenth-century-euler
title: "The Eighteenth Century: Euler"
level: undergraduate
license: CC BY-SA 4.0
---

# The Eighteenth Century: Euler

A history of the eighteenth century cannot be reduced to one mathematician, but Euler's varied work offers a useful window onto problems that changed mathematical objects. One question concerns a walk over bridges; another counts elements of a polyhedron; a third seeks a number satisfying several remainder conditions. These are not simply three exercises in the same method. The [University of the Pacific Euler Archive](https://scholarlycommons.pacific.edu/euler/) gives stable Eneström identifiers, source citations and separate written and publication dates for each work. We use those records to keep the historical claims attached to named papers.

The [Euler Archive E53 record](https://scholarlycommons.pacific.edu/euler-works/53/) says the bridge paper was written in 1735 and published in 1741 in a volume labelled differently. [E230](https://scholarlycommons.pacific.edu/euler-works/230/) identifies the polyhedra paper as written in 1750 and published in 1758. [E36](https://scholarlycommons.pacific.edu/euler-works/36/) records the residue paper in 1740. Dates of writing, reading, volume designation and publication are not interchangeable. The [advanced Euler history course](../../courses/history-culture-advanced.md) preserves a more detailed comparison of E53 with a later rendering and Rouse Ball's interpretation; this chapter supplies an L1–L2 mathematical route.

## A walk depends on connections, not distances

The bridge problem asks whether all seven bridges of Königsberg can be crossed exactly once in one continuous walk. [E53](https://scholarlycommons.pacific.edu/euler-works/53/) supplies the work record and [Michael Behrend's English rendering of its selected sections](https://www.cantab.net/users/michael.behrend/repubs/maze_maths/pages/euler_en.html) supplies an accessible textual route. The [MAA's source-led discussion](https://old.maa.org/node/116597) describes the historical problem. A modern graph replaces land regions by vertices and bridges by edges. This preserves which regions each bridge connects, including parallel bridges. It discards distances and the shape of the river because those do not affect whether an edge can be used once.

An **Euler trail** in our notation is an alternating sequence $v_0,e_1,v_1,\\ldots,e_m,v_m$ that uses every edge exactly once, where each $e_i$ joins $v_{i-1}$ to $v_i$. At every internal visit to a vertex, one edge brings the walk in and a different edge takes it out. Those incident edges can be paired. Therefore an internal vertex must have even degree, except that a start or end vertex can have one unpaired incident edge. A connected graph with more than two odd-degree vertices cannot have such a trail. This parity argument is the decisive necessity condition.

## Worked example 1: the seven bridges

The four land regions in the familiar E53 bridge arrangement have degrees 3, 3, 3 and 5, as represented in the [MAA's Euler source discussion](https://old.maa.org/node/116597) and the [advanced course's explicitly labelled incidence reconstruction](../../courses/history-culture-advanced.md). The degree sum is 14, twice the seven bridges, so the count is internally consistent. All four vertices have odd degree. A continuous one-use walk has only one possible start and one possible end, so it can accommodate at most two odd vertices. Four are present; hence the requested walk is impossible. This proves impossibility without enumerating routes.

The graph representation is our explicit modern model of Euler's region-letter and crossing argument. It is useful because the parity proof transfers to other networks. It should not be quoted as the exact notation on Euler's Latin page. [E53's archive record](https://scholarlycommons.pacific.edu/euler-works/53/) fixes the paper identity; the later English rendering and our graph are separate layers. The physical bridge map's geometry is not needed for this mathematical obstruction, although it matters to the place's history.

## Counting a solid

[Euler Archive E230](https://scholarlycommons.pacific.edu/euler-works/230/) describes a relation among solid angles, faces and edges in solids bounded by planes. In present notation it is often written $V-E+F=2$ for a polyhedron with the appropriate sphere-like boundary. The scope matters. A hollow or toroidal surface requires a different relation; a single numerical example cannot justify the unrestricted slogan “all solids.” The [MAA's primary-source bibliography for Euler's polyhedral formula](https://old.maa.org/press/periodicals/convergence/investigating-eulers-polyhedral-formula-using-original-sources-bibliography) identifies the original E230 work and later discussions.

## Worked example 2: a cube and a tetrahedron

A cube has $V=8$ vertices, $E=12$ edges and $F=6$ faces, giving $8-12+6=2$. A tetrahedron has $V=4$, $E=6$ and $F=4$, giving $4-6+4=2$. These are modern checks of the [E230 relation](https://scholarlycommons.pacific.edu/euler-works/230/), not numerical solids asserted to be on a particular printed line. Why does a triangulated sphere-like polyhedral surface keep the value 2? Start from a tetrahedron and subdivide a face by joining a new interior vertex to its three old vertices. Then $V$ increases by 1, $E$ by 3, and $F$ by 2, so $V-E+F$ changes by $1-3+2=0$. Similar local subdivisions preserve the count. This is a partial modern invariant argument, not a proof that every permitted polyhedron can be generated by only this move.

A counterexample to overbroad wording is useful. A cube with one face removed has $8-12+5=1$ if we count its remaining surface pieces as faces. The boundary is no longer a closed sphere-like surface, so the original hypothesis has changed. The calculation does not refute the properly scoped relation. It tests whether we remembered its domain.

## Residues and a number that fits several calendars

[Euler Archive E36](https://scholarlycommons.pacific.edu/euler-works/36/) concerns finding numbers that leave specified remainders on division by given numbers and notes an application to Roman indictions. We use a small numerical instance of that genuine problem type; the particular divisors below are our teaching data rather than a transcription of an E36 example. This distinction matters because the general question is historical while our hand-checkable numbers are a modern adaptation.

Suppose a number $n$ leaves remainder 2 on division by 3 and remainder 3 on division by 5. Write $n=3a+2$. The second condition says $3a+2\\equiv3\\pmod5$, so $3a\\equiv1\\pmod5$. Since 3 times 2 is 6, congruent to 1 modulo 5, $a\\equiv2\\pmod5$. Thus $a=5k+2$ and $n=15k+8$. The smallest nonnegative solution is 8; every solution differs from it by a multiple of 15. The check is $8=2(3)+2=1(5)+3$.

## Worked example 3: reconstructing an E36 residue problem

Add a third condition: $n$ leaves remainder 2 on division by 7. With $n=15k+8$, reduce modulo 7: $15k+8\\equiv k+1\\equiv2$, so $k\\equiv1\\pmod7$. Write $k=7m+1$, giving $n=105m+23$. The smallest nonnegative solution is 23. Check all three: $23=7(3)+2=4(5)+3=3(7)+2$. Because 3, 5 and 7 are pairwise coprime, the modulus 105 captures the full repetition period. This is our modern solution of a historical class of question identified by [E36](https://scholarlycommons.pacific.edu/euler-works/36/), not an assertion that Euler printed the exact triple $(2,3,2)$.

If divisors share a factor, compatibility needs checking. For example $n\\equiv0\\pmod2$ and $n\\equiv1\\pmod4$ cannot both hold, because a number congruent to 1 modulo 4 is odd. [E36's archive summary](https://scholarlycommons.pacific.edu/euler-works/36/) notes that the paper treats non-coprime cases too. The elementary counterexample shows why a theorem stated only for coprime moduli cannot be applied blindly.

## Another Euler problem and its limits here

The [Euler Archive E41 record](https://scholarlycommons.pacific.edu/euler-works/41/) identifies a work written in 1735 and published in 1740 concerning sums of reciprocal powers, including the celebrated square-reciprocal sum. A [MAA primary-source teaching project](https://old.maa.org/node/1880109) discusses its calculation. The result $1+1/4+1/9+\\cdots=\\pi^2/6$ is striking because a series of rational terms connects to circle geometry. We state the historical result but do not use it as one of the worked problems: proving it requires more analytic preparation than this school-mathematics chapter provides. Its presence in the source record prevents the three elementary examples from being mistaken for Euler's full mathematical range.

The three worked questions also have different proof obligations. The bridge problem needs an impossibility argument valid for every route. The cube and tetrahedron check a structural relation but do not prove it for all closed polyhedra. The residue example constructs a solution and gives its repetition class. A source-led history should say which of these has been proved here, which is an illustrative check and which general theorem is cited rather than derived. That honesty is more instructive than declaring every numerical success a theorem.

Euler's work circulated through academies, correspondence and publication; the Archive's written and publication dates show why even one author has several timelines. The next chapter examines nineteenth-century disputes over continuity and geometry, where a result's familiar modern form can conceal a changing standard of proof. We will again keep an author's actual statement, a later edition and our formal reconstruction apart.

## From examples to a theorem

The cube and tetrahedron both give 2, but finitely many successes cannot establish the formula for every closed polyhedral boundary. The subdivision calculation supplies a partial reason for stability: a local operation changes vertices, edges and faces in a cancelling combination. A full proof must show that the allowed class of surfaces can be related by operations whose effects are known, or use a different global argument. A toroidal boundary and an open cube show why the class must be stated. This is the same discipline as the bridge proof: an illustrative picture is not a substitute for a quantified argument about every route. Euler's different problems thus teach a common lesson about hypotheses without reducing all of his work to one modern field label.

## Exercises

These exercises deliberately mix three sorts of evidence. The Euler Archive identifies separate works and dates; a modern graph or remainder equation helps solve a problem; and a geometric sketch can reveal why an unrestricted claim would fail. Record which sort you are using in each solution. A bridge drawing may be deformed without changing the incidence of its edges, but moving an endpoint from one land mass to another changes the graph. A polyhedral count may survive a subdivision yet fail for a surface with a hole. A congruence answer must be substituted back into every original condition. These checks make the mathematics reproducible while leaving the publication history to the archival record.

### Exercise 1
<a id="eighteenth-century-euler-ex-1"></a>

Why do four odd-degree land regions rule out a one-use bridge walk?

<details><summary>Hint 1</summary>

Pair arrivals with departures.

</details>
<details><summary>Hint 2</summary>

Only start and end can be unpaired.

</details>
<details><summary>Solution</summary>

Every internal visit pairs two incident bridges. A trail has at most one start and one end, so at most two vertices may have odd degree. The E53 arrangement has four odd-degree regions, making the required route impossible.

</details>

### Exercise 2
<a id="eighteenth-century-euler-ex-2"></a>

Check that the degree list 3,3,3,5 describes seven edges in total.

<details><summary>Hint 1</summary>

Use the degree sum.

</details>
<details><summary>Hint 2</summary>

Each edge contributes two endpoints.

</details>
<details><summary>Solution</summary>

The degree sum is 14. Each of seven bridges contributes two incident ends, so twice the edge count is 14. This consistency check does not itself prove an Euler trail exists.

</details>

### Exercise 3
<a id="eighteenth-century-euler-ex-3"></a>

A connected graph has exactly two odd-degree vertices. What can the parity argument alone conclude?

<details><summary>Hint 1</summary>

Necessity versus sufficiency.

</details>
<details><summary>Hint 2</summary>

Do not infer a constructed route without a further theorem.

</details>
<details><summary>Solution</summary>

The parity obstruction does not rule out a trail; the start and end would have to be the two odd vertices. Existence also uses connectedness and a construction argument. Merely counting odd degrees is a necessary-condition check, not by itself a route.

</details>

### Exercise 4
<a id="eighteenth-century-euler-ex-4"></a>

Compute $V-E+F$ for a triangular prism with six vertices, nine edges and five faces.

<details><summary>Hint 1</summary>

Substitute the counts.

</details>
<details><summary>Hint 2</summary>

Check the arithmetic.

</details>
<details><summary>Solution</summary>

$6-9+5=2$. The prism is a closed sphere-like polyhedral example consistent with the E230 relation. One example is not a universal proof.

</details>

### Exercise 5
<a id="eighteenth-century-euler-ex-5"></a>

Explain why removing one face of a cube changes the count and the hypothesis.

<details><summary>Hint 1</summary>

Recount faces.

</details>
<details><summary>Hint 2</summary>

Notice the open boundary.

</details>
<details><summary>Solution</summary>

The remaining surface has $V=8$, $E=12$, $F=5$, so the expression is 1. The object is no longer a closed sphere-like polyhedral boundary, so it is outside the scoped relation; the calculation is a domain check, not a refutation.

</details>

### Exercise 6
<a id="eighteenth-century-euler-ex-6"></a>

Find the smallest nonnegative integer leaving remainders 2 modulo 3 and 3 modulo 5.

<details><summary>Hint 1</summary>

Set $n=3a+2$.

</details>
<details><summary>Hint 2</summary>

Solve $3a\\equiv1\\pmod5$.

</details>
<details><summary>Solution</summary>

$a\\equiv2\\pmod5$, so $n=15k+8$. The smallest nonnegative solution is 8. It leaves $8=2(3)+2$ and $8=1(5)+3$.

</details>

### Exercise 7
<a id="eighteenth-century-euler-ex-7"></a>

Add the condition remainder 2 modulo 7 to the preceding problem.

<details><summary>Hint 1</summary>

Use $n=15k+8$.

</details>
<details><summary>Hint 2</summary>

Reduce $15k+8$ modulo 7.

</details>
<details><summary>Solution</summary>

$15k+8\\equiv k+1\\equiv2\\pmod7$, so $k\\equiv1\\pmod7$. Thus $n=105m+23$ and the smallest nonnegative solution is 23. Direct division checks all three remainders.

</details>

### Exercise 8
<a id="eighteenth-century-euler-ex-8"></a>

Show that remainders 0 modulo 2 and 1 modulo 4 are incompatible.

<details><summary>Hint 1</summary>

A remainder-one number modulo four is odd.

</details>
<details><summary>Hint 2</summary>

A remainder-zero number modulo two is even.

</details>
<details><summary>Solution</summary>

If $n=4k+1$, then $n=2(2k)+1$ is odd, contradicting $n\\equiv0\\pmod2$. Thus no integer satisfies both conditions. Shared factors can impose compatibility requirements.

</details>

### Exercise 9
<a id="eighteenth-century-euler-ex-9"></a>

Distinguish E53’s written, volume and published dates as recorded by the Euler Archive.

<details><summary>Hint 1</summary>

Read the three date fields separately.

</details>
<details><summary>Hint 2</summary>

Do not use the volume label as the publication event.

</details>
<details><summary>Solution</summary>

The [E53 record](https://scholarlycommons.pacific.edu/euler-works/53/) gives a written date of 1735 and publication in 1741. The [Archive's volume table](https://scholarlycommons.pacific.edu/euler-commentarii/policies.html) dates volume 8 nominally to 1736, distinguishing that label from its actual publication in 1741. These refer to different events or bibliographic conventions, so one date should not silently replace another.

</details>

### Exercise 10
<a id="eighteenth-century-euler-ex-10"></a>

Why is the Basel sum stated but not used as a worked proof here?

<details><summary>Hint 1</summary>

Identify its mathematical preparation.

</details>
<details><summary>Hint 2</summary>

Separate cited result from chapter proof.

</details>
<details><summary>Solution</summary>

E41 and the MAA project support the historical claim that Euler treated the reciprocal-square series. A full exact evaluation as $\\pi^2/6$ requires analytic arguments beyond the elementary proofs developed here. Stating it with a source is honest; a short numerical partial sum would not solve the infinite problem.

</details>

## Summary

The bridge, polyhedron and remainder questions represent three distinct mathematical objects in Euler’s archive. Parity proves the bridge impossibility; face-edge-vertex counts illustrate a scoped relation; modular arithmetic constructs a compatible number. Written and publication dates remain separate source facts. Chapter 12 follows the nineteenth century’s renewed attention to rigorous warrants and alternative geometries.
`;export{e as default};