
# Rigour and Geometry in the Nineteenth Century

Nineteenth-century mathematics did not become rigorous on one day. Questions about a sum of continuous terms, the completeness of numbers and the freedom to alter geometrical assumptions were pursued in different places and texts. This chapter reconstructs three genuine historical questions with elementary modern models: when a limit of continuous functions remains continuous, how a cut in the rationals can specify an irrational boundary, and how a triangle on a sphere differs from a plane triangle. None of our simplified models is an unmarked translation of the historical witness.

The sources include [Cauchy's 1821 *Cours d'analyse* in ETH's original-edition record](https://www.e-rara.ch/zut/content/titleinfo/8445462), [Abel's collected-text commentary](https://archive.org/details/117742591), [Cauchy's 1853 note through a 1900 reprint](https://www.e-rara.ch/zut/content/titleinfo/5705720), a [university-hosted selection from Dedekind's *Continuity and Irrational Numbers*](https://www.math.cuhk.edu.hk/course_builder/1617/math1050bc/dedekind.pdf), [Riemann's geometry lecture in the Trinity historical-text collection](https://www.maths.tcd.ie/pub/HistMath/People/Riemann/Geom/), and [MacTutor's non-Euclidean geometry study](https://mathshistory.st-andrews.ac.uk/HistTopics/Non-Euclidean_geometry/). Each carries a different question and evidential status.

## A sum may change a property

A finite sum of continuous real functions is continuous. An infinite sum or sequence limit requires a further condition. In [Cauchy's *Cours d'analyse* Chapter VI, printed pages 131–132, through ETH's original-edition OCR](https://www.e-rara.ch/zut/download/ftpack/plain/8445462), a continuity claim for the sum of continuous terms is argued through a remainder. The [advanced Euler history course's source card](../../course-texts/atlas-history-culture-advanced.md) identifies the selected page and its limits. A modern reconstruction asks whether the remainder can be made small uniformly over the points in question. The order of quantifiers matters: “for every point choose a cutoff” does not guarantee “choose one cutoff that works for every point.”

[Abel's collected text and editors' notes](https://archive.org/details/117742591) discuss exceptions and possible gaps in both an earlier assertion and later proof, as recorded in the [advanced course's source capsules](../../course-texts/atlas-history-culture-advanced.md). The historical argument is more complex than “one person made a mistake and another fixed it completely.” The [later Cauchy note in the 1900 reprint](https://www.e-rara.ch/zut/content/titleinfo/5705720) gives an explicit all-points finite-tail condition in the selected window. We can use a small current example to see why that stronger condition matters without claiming that it was printed in 1821.

## Worked example 1: a continuous sequence with a discontinuous limit

Consider the modern teaching sequence $f_n(x)=x^n$ on the closed interval $[0,1]$. Each function is continuous. For every fixed $0\le x<1$, $x^n\to0$, while at $x=1$, $f_n(1)=1$ for all $n$. Thus the pointwise limit is $f(x)=0$ for $x<1$ and $f(1)=1$, discontinuous at 1. This solves a counterexample problem to the unrestricted modern reading of the continuity claim associated with the [Cauchy 1821 window](https://www.e-rara.ch/zut/download/ftpack/plain/8445462). The sequence is our model, not an example in that printed page.

Why is the convergence not uniform? For any $n$, choose $x_n=(1/2)^{1/n}$, which lies below 1. Then $f(x_n)=0$ but $f_n(x_n)=1/2$. No single $n$ makes the error below, say, $1/3$ at every point. The chosen point moves with $n$; that is precisely why pointwise convergence at each fixed $x$ does not control the whole interval. This finite calculation exposes the quantifier issue at school-algebra level.

## A gap in the rationals

[Dedekind's *Continuity and Irrational Numbers*, originally published in 1872, in the selected university-hosted source packet](https://www.math.cuhk.edu.hk/course_builder/1617/math1050bc/dedekind.pdf) frames an irrational boundary through a partition of rational numbers. The point is not to approximate $\sqrt2$ with one decimal but to specify all rationals lying on either side of a cut. We can reconstruct the positive $\sqrt2$ boundary by placing every negative rational and every nonnegative rational whose square is less than 2 on the lower side. This is a set-theoretic description in our current notation; the source packet identifies the historical construction and editorial mediation.

## Worked example 2: the cut at square two

Define $L=\{q\in\mathbb Q:q<0\text{ or }q^2<2\}$, with zero included by the second clause. Every rational $q$ with $q>0$ and $q^2>2$ lies on the upper side. For example $7/5=1.4$ is lower because $49/25<2$, while $3/2=1.5$ is upper because $9/4>2$. No rational has square exactly 2. To prove that, suppose $p^2=2q^2$ in lowest terms. Then $p$ is even, so $p=2r$ and $q^2=2r^2$, making $q$ even, a contradiction. Therefore the boundary is not a rational member separating the sides.

The proof shows why adding more decimal places is not the same as filling the gap inside the rationals. Decimal approximations can approach the boundary, but none becomes a rational with square 2. Dedekind's construction treats the cut as determining a new number in an ordered continuum. The [Stanford Encyclopedia's scholarly account of continuity](https://plato.sydney.edu.au/entries/continuity/) cautions against simply saying that Dedekind identified a number with a pair of sets in every philosophical sense; our set notation is a mathematical reconstruction of the boundary. The historical wording and the modern formal object should be kept distinct.

## Geometry after the parallel question

[MacTutor's Lobachevsky biography](https://mathshistory.st-andrews.ac.uk/Biographies/Lobachevsky/) identifies his printed non-Euclidean work and the central parallel question; the [broader MacTutor history](https://mathshistory.st-andrews.ac.uk/HistTopics/Non-Euclidean_geometry/) describes several routes and later models. [Trinity's record of Riemann's lecture on the hypotheses of geometry](https://www.maths.tcd.ie/pub/HistMath/People/Riemann/Geom/) gives a different source for thinking about measurement and curvature. These are not one theory with one author. A sphere offers an elementary comparison of a curved surface with a Euclidean plane, but spherical great circles are not a complete model of hyperbolic geometry and should never be labelled as such.

## Worked example 3: a spherical triangle

On a unit sphere, choose the north pole $N$ and two points $A,B$ on the equator separated by a quarter-turn in longitude. The shortest great-circle arcs $NA$, $NB$ and $AB$ meet at right angles at all three vertices: the meridians meet the equator at right angles, and the meridians differ by a right angle at the pole. Thus the angle sum is $90^\circ+90^\circ+90^\circ=270^\circ$, not the Euclidean plane value $180^\circ$. The calculation illustrates the question of geometry's underlying assumptions associated with [Riemann's source record](https://www.maths.tcd.ie/pub/HistMath/People/Riemann/Geom/). The particular quarter-sphere triangle is our teaching construction, not a claimed figure on the selected lecture page.

The sphere example does not “disprove” Euclid's plane theorem. It changes the space and the meaning of straightest available path. A geometry theorem is conditional on its axioms or model. The older parallel-postulate debate and the curved-measurement questions show why identifying those conditions became mathematically productive. [MacTutor's Bolyai biography](https://mathshistory.st-andrews.ac.uk/Biographies/Bolyai/) provides another named route in the non-Euclidean story, while Riemann's lecture asks broader questions about the hypotheses of measurement. A source-aware comparison prevents all these contributions from becoming a single vague “discovery of curved space.”

## Quantifiers, domains and editions

The three examples ask for different guarantees. The sequence counterexample distinguishes a condition at each fixed point from a condition uniform over an interval. The rational cut distinguishes an arbitrarily good rational approximation from a rational number equal to the boundary. The spherical triangle distinguishes a plane proposition from one on a curved surface. In all three, a statement that sounds generally true becomes precise only after its domain and quantifiers are named.

A historical claim also needs an edition. The Cauchy 1821 original-edition OCR and the 1853 note reached through a 1900 reprint are different witnesses. Abel's collected edition has editors whose notes should not be silently attributed to Abel. Dedekind's 1872 work comes through a modern teaching packet. The Riemann lecture has its own delivery and publication history in Trinity's record. These layers are not clerical details; they determine what a cited page can support. The next chapter follows algebra and groups, where rearranging solutions and operations becomes a mathematical object in its own right.

## What an apparent counterexample proves

The $x^n$ sequence does not show that Cauchy, Abel or another historical writer used our exact notation or domain. It shows that one unrestricted present-day statement is false. To make a source criticism, first quote or paraphrase the actual selected claim with its edition and local context, then explain why a proposed formalisation fits it or fails to fit it. The 1821 and 1853 Cauchy windows differ; the later note's stronger finite-tail condition should not be silently inserted into the earlier page. The Abel collected text also contains editor-authored commentary. A mathematical counterexample is powerful only when the statement it targets is precise. This is why the chapter's first worked example is labelled a modern teaching model rather than a historical numerical example attributed to Cauchy.

## A model is evidence of consistency within a setting

The spherical triangle gives a concrete surface on which a familiar Euclidean angle statement changes. A hyperbolic model would answer a different parallel question. A model can show that a set of rules has a coherent interpretation relative to the mathematics used to build it, but a single diagram cannot establish all properties of an axiomatic system. In geometry, “line” must be defined within the model: on the sphere we chose great-circle arcs, and even shortest paths can cease to be unique at antipodal points. Our triangle avoids that exceptional case. Naming such conditions is the geometric counterpart of naming a uniform cutoff in analysis. Both habits make a statement testable and prevent an impressive picture or formula from carrying more historical weight than its source allows.

## Exercises

In these exercises, a single example can disprove an unrestricted assertion, but a handful of examples cannot prove a universal assertion. The moving point in $x^n$ exposes the failure of a common cutoff; it does not establish every possible uniform-convergence theorem. A rational cut records a partition rule for all rational inputs, not just two approximations around the boundary. A spherical triangle demonstrates that the chosen curved model has a different angle relation, not that every curved surface has the same angles. State what each calculation proves in its own domain. This discipline is also historical: a source's quantifiers, edition and chosen geometric meaning determine which present statement it can reasonably be taken to address.

### Exercise 1
<a id="nineteenth-century-rigour-and-geometry-ex-1"></a>

Find the pointwise limit of $f_n(x)=x^n$ on $[0,1]$.

<details><summary>Hint 1</summary>

Separate x=1.

</details>
<details><summary>Hint 2</summary>

For fixed x below one, repeated multiplication shrinks.

</details>
<details><summary>Solution</summary>

For every fixed $0\le x<1$, the limit is 0; at x=1 it is 1. The limit function is discontinuous at 1 although each $f_n$ is continuous. The sequence is our counterexample model for the historical continuity question.

</details>

### Exercise 2
<a id="nineteenth-century-rigour-and-geometry-ex-2"></a>

Show directly that $x^n$ does not converge uniformly to its pointwise limit on $[0,1]$.

<details><summary>Hint 1</summary>

Let the test point depend on n.

</details>
<details><summary>Hint 2</summary>

Take $x_n=(1/2)^{1/n}$.

</details>
<details><summary>Solution</summary>

At $x_n<1$ the limit function is zero, while $f_n(x_n)=1/2$. Thus every n has an error of at least 1/2 somewhere, so no common cutoff makes the error smaller than 1/3 at all points.

</details>

### Exercise 3
<a id="nineteenth-century-rigour-and-geometry-ex-3"></a>

State the quantifier difference between pointwise and uniform convergence.

<details><summary>Hint 1</summary>

Look at when N is chosen.

</details>
<details><summary>Hint 2</summary>

Uniform N cannot depend on x.

</details>
<details><summary>Solution</summary>

Pointwise convergence permits, for every x and tolerance, a cutoff $N(x,\varepsilon)$. Uniform convergence requires, for every tolerance, one cutoff $N(\varepsilon)$ that works for every x in the domain. Exchanging the order changes the claim.

</details>

### Exercise 4
<a id="nineteenth-century-rigour-and-geometry-ex-4"></a>

Show $7/5$ and $3/2$ lie on opposite sides of the modern square-two cut.

<details><summary>Hint 1</summary>

Square each positive fraction.

</details>
<details><summary>Hint 2</summary>

Compare with two.

</details>
<details><summary>Solution</summary>

$(7/5)^2=49/25<2$, so $7/5$ is lower. $(3/2)^2=9/4>2$, so $3/2$ is upper. These rational checks bracket the irrational boundary but do not supply a rational equal to it.

</details>

### Exercise 5
<a id="nineteenth-century-rigour-and-geometry-ex-5"></a>

Prove no rational number has square two.

<details><summary>Hint 1</summary>

Assume a reduced fraction $p/q$.

</details>
<details><summary>Hint 2</summary>

Use evenness twice.

</details>
<details><summary>Solution</summary>

If $p^2=2q^2$, then p is even; write $p=2r$. Then $q^2=2r^2$, so q is even too, contrary to lowest terms. Hence the boundary cannot be a rational number.

</details>

### Exercise 6
<a id="nineteenth-century-rigour-and-geometry-ex-6"></a>

Why does a decimal approximation to $\sqrt2$ not fill the rational gap exactly?

<details><summary>Hint 1</summary>

A terminating decimal is rational.

</details>
<details><summary>Hint 2</summary>

Use the no-rational-square-two proof.

</details>
<details><summary>Solution</summary>

Every terminating decimal is a rational number, and no rational has square exactly 2. Increasing the number of digits can improve an approximation but does not produce an exact rational boundary.

</details>

### Exercise 7
<a id="nineteenth-century-rigour-and-geometry-ex-7"></a>

Compute the angle sum in the unit-sphere triangle of the chapter.

<details><summary>Hint 1</summary>

Check each meridian-equator meeting.

</details>
<details><summary>Hint 2</summary>

The meridians differ by a quarter-turn.

</details>
<details><summary>Solution</summary>

All three angles are right angles, so the sum is $270^\circ$. This does not contradict the Euclidean plane theorem because the triangle lies on a sphere with great-circle sides.

</details>

### Exercise 8
<a id="nineteenth-century-rigour-and-geometry-ex-8"></a>

Explain why the spherical example is not a model of Lobachevsky’s geometry.

<details><summary>Hint 1</summary>

Compare curved settings.

</details>
<details><summary>Hint 2</summary>

Do not equate all non-Euclidean spaces.

</details>
<details><summary>Solution</summary>

The sphere has positive curvature and great circles with its own intersection properties. Lobachevsky’s hyperbolic geometry is a different geometry with different parallel behaviour. The sphere merely shows that a plane angle-sum theorem depends on the setting.

</details>

### Exercise 9
<a id="nineteenth-century-rigour-and-geometry-ex-9"></a>

Distinguish the two Cauchy witnesses used in this chapter.

<details><summary>Hint 1</summary>

Name original work and later note.

</details>
<details><summary>Hint 2</summary>

Include reprint status.

</details>
<details><summary>Solution</summary>

The continuity discussion is read through an 1821 original-edition *Cours d’analyse* OCR at ETH. The later 1853 note is consulted through a 1900 collected reprint. A statement in one must not be assigned to the other without a source.

</details>

### Exercise 10
<a id="nineteenth-century-rigour-and-geometry-ex-10"></a>

A learner says Abel’s editors’ notes prove Abel himself made every later criticism. Repair the claim.

<details><summary>Hint 1</summary>

Separate author from editor.

</details>
<details><summary>Hint 2</summary>

Name the collected edition.

</details>
<details><summary>Solution</summary>

The 1881 collected text includes Abel’s work and later editorial notes by Sylow and Lie. Claims in those notes are evidence for the editors’ assessment, not automatically Abel’s own words. Attribution requires identifying the exact layer and page.

</details>

## Summary

The continuity, cut and curved-triangle questions show why quantifiers and domains are part of a theorem. A modern counterexample can test an unrestricted paraphrase without being falsely attributed to Cauchy; rational brackets do not equal an irrational cut; spherical geometry changes the setting rather than refuting Euclidean plane geometry. Chapter 13 turns to new algebraic structures and the history of their sources.
