var e=`---
parent_id: book-history-of-mathematics
chapter_id: greek-mathematics-thales-to-euclid
title: "Greek Mathematics: Thales to Euclid"
level: undergraduate
license: CC BY-SA 4.0
---

# Greek Mathematics: Thales to Euclid

The familiar story that Greek mathematics began with one person replacing measurement by proof is too tidy for the surviving evidence. [MacTutor's source discussion of Thales](https://mathshistory.st-andrews.ac.uk/Biographies/Thales/) traces several geometric attributions through Proclus and Eudemus, much later testimony rather than a surviving treatise written by Thales. [MacTutor's study of Greek source transmission](https://mathshistory.st-andrews.ac.uk/HistTopics/Greek_sources_1/) similarly shows why the copies through which we know the *Elements* require an account of transmission. We can study the mathematics of a surviving proposition while marking the uncertainty of a biographical attribution.

This chapter follows three propositions in the *Elements*, using [David Joyce's Clark University edition and guide](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/guide1.html) and the [Trinity College Dublin transcriptions of Lardner and Heath for I.1](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php). The three tasks are constructing an equilateral triangle, bisecting an angle and comparing squares on a right triangle. They are genuine source propositions, not stories invented to illustrate a modern theorem. Our coordinates and algebra are explicitly modern reconstructions.

## Attributions and the strength of a claim

The name Thales is attached in later writings to results about circles, isosceles triangles and vertical angles. The source question is how the later author knew and what exactly was attributed: a statement, an observation, an argument, or a deductive proof. [MacTutor's Thales account](https://mathshistory.st-andrews.ac.uk/Biographies/Thales/) cautions against reading the list as a contemporary record of five modern theorems with their proofs. A strong historical sentence says which later testimony makes the attribution. It does not call an uninspected original a direct source.

The distinction matters even when the result is elementary. Two opposite angles formed by intersecting lines are equal because each is supplementary to the same adjacent angle, assuming the relevant straight-angle facts. We can prove that now. The proof's availability to us does not establish what a named earlier thinker wrote or taught. Similarly, showing that a diameter divides a circle into two equal semicircles does not settle the history of the concept of area, equality or circle. Mathematical truth and historical attribution answer different questions.

By the time of the surviving *Elements* tradition, propositions are arranged so that later demonstrations invoke earlier definitions, constructions and claims. [Joyce's guide to Book I](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/guide1.html) describes the sequence of definitions, postulates, common notions and propositions. [MacTutor's Euclid biography](https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/) stresses how little secure biography is available. This makes the text's structure more reliable evidence for our chapter than familiar anecdotes about the person.

## Construction is a mathematical request

A construction problem asks for an object meeting conditions and for an argument that the proposed steps produce it. Merely drawing a plausible picture does not prove that the needed intersections exist. Nor does a coordinate calculation alone show that every step follows the stated ruler-and-compass permissions. We can separate three issues: the instructions, the existence of the objects those instructions invoke, and verification of the final property. A historical proof may make some assumptions explicit and leave others to shared geometric practice. Later editors may discuss those gaps in different places.

## Worked example 1: Elements I.1

The [Lardner 1855 I.1 §§57–58](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookIProp01_Lardner1855.php) and [Heath 1908 I.1](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php) both present the construction of an equilateral triangle on a given finite line $AB$. Draw circles centred at $A$ and $B$, each of radius $AB$, and take an intersection $C$ away from the line. By radii, $AC=AB$ and $BC=BA=AB$. Hence $AC=BC=AB$, which verifies the triangle's equilateral property. This argument needs a common off-line point; Lardner's local commentary discusses the intersection more explicitly than Heath's selected proposition.

Our coordinate check sets $A=(0,0)$, $B=(d,0)$ with $d>0$. The circle equations give $x=d/2$ and $y=\\pm(\\sqrt3/2)d$, so the required point exists in the Euclidean plane. Substituting either choice verifies both circle equations. The coordinate proof is not a claim about what the ancient source wrote. It makes one logical dependency visible to a modern reader.

## Worked example 2: Elements I.9

[Elements I.9 in Joyce's edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI9.html) asks to bisect a given rectilinear angle. Let rays $BA$ and $BC$ form the angle at $B$. Choose equal distances $BD=BE$ on the two rays, construct an equilateral triangle on segment $DE$ with apex $F$ on the appropriate side, and join $BF$. The paired triangles $BDF$ and $BEF$ have $BD=BE$, $DF=EF$, and common side $BF$. By side-side-side congruence their angles at $B$ are equal. Thus the constructed ray bisects the given angle.

The steps depend on earlier *Elements* constructions and congruence results; the proposition is part of a sequence. A modern diagram may tempt us to say the result is “obvious by symmetry,” but that phrase must be unpacked into equalities if it is to prove the conclusion from stated premises. The equilateral auxiliary triangle supplies the equality $DF=EF$. Without it, the side-side-side argument would have a missing premise. Our reconstruction uses modern letters and summary language while preserving the source proposition's task.

## Worked example 3: Elements I.47

[Elements I.47 in Joyce's edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI47.html) states that in a right triangle the square on the side opposite the right angle equals the sum of the squares on the two sides containing it. For a right triangle with leg lengths 3 and 4, modern numerical application gives a hypotenuse square of area $3^2+4^2=9+16=25$, so its positive side length is 5. This is a worked instance of the attested proposition, not a quotation of a numerical example from the Greek text.

To see why the formula is not merely numerology, place four copies of a right triangle with legs $a,b$ inside a square of side $a+b$, leaving a central square of side $c$ in the standard arrangement. Area counting yields $(a+b)^2=4(ab/2)+c^2$, hence $a^2+b^2=c^2$. This familiar modern dissection proves the relation for that arrangement. Joyce's edition shows the *Elements* argument with its own diagram and earlier propositions; our area arrangement is not presented as Euclid's particular proof. The two proofs can be compared without being conflated.

## What changes when proof becomes a text sequence?

Each proposition answers a specific question. I.1 constructs; I.9 constructs and uses congruence; I.47 establishes an area relation for a right triangle. A list of named theorems obscures that variety. The *Elements* also includes number theory and solid geometry, as [Joyce's contents](https://mathcs.clarku.edu/~djoyce/java/elements/elements.html) shows. It is not a single chapter on modern Euclidean triangles. The order matters because a later justification can cite an earlier construction.

The mathematical objects also resist indiscriminate algebraic translation. A square on a segment in I.47 is a geometrical figure whose area is being compared. Our $a^2$ is a number or algebraic expression after choosing a unit. The bridge is sound when positive lengths and a common area unit are specified. If $a=-3$ in an algebra exercise, $a^2=9$ still makes sense, but a negative segment length is not part of the geometric statement. A reconstruction can extend a domain; it should not silently rewrite the old proposition's quantifiers.

An edition can affect what is noticed. Lardner's explicit local intersection discussion in I.1 and Heath's different placement of assumptions invite a source-critical comparison. Neither printed witness is an original autograph. The [MacTutor Greek sources study](https://mathshistory.st-andrews.ac.uk/HistTopics/Greek_sources_1/) describes the long copying and editorial history behind the text. Therefore a claim that “Euclid himself omitted this line” needs more than two later English editions. The bounded statement is that the inspected passages differ in local presentation.

The next chapter will examine the idea of proof in the *Elements* more closely, including where a logical step receives its warrant and where a modern supplement must be labelled. Here the main lesson is already visible: a result can be both mathematically secure and historically uncertain in attribution. The uncertainty should sharpen our citation, not prevent us from doing the mathematics.

## A comparison to carry forward

Make three columns for any proposition: construction or statement, justification, and source status. For I.1, the circle instructions belong in the first column, the radius equalities in the second, and the Lardner or Heath edition in the third. The coordinate intersection calculation is a fourth item labelled modern supplement. For I.9, identify the earlier congruence result used by the selected presentation rather than substituting the word “symmetry.” For I.47, keep the diagram's area objects separate from signed algebraic numbers. This format allows a reader to audit an argument without assuming that a later proof style was the only possible one.

## Exercises

The exercises separate a proposition's statement from its proof and from later testimony about an author. A construction must specify the permitted straightedge-and-compass moves; an equality claim must identify the earlier result that warrants it. The same drawn triangle can suggest several true relations, but a diagram alone does not establish them for every permitted configuration. Conversely, a report that a named person knew a relation needs a dated witness rather than only a modern reconstruction of a plausible method. In your solutions, write the mathematical warrant before any historical attribution. This small order of work helps preserve what the *Elements* text actually proves while leaving the older Thales traditions at their documented level of uncertainty.

### Exercise 1
<a id="greek-mathematics-thales-to-euclid-ex-1"></a>

Name the evidential route for an attribution of a geometric result to Thales in this chapter.

<details><summary>Hint 1</summary>

Look for the later authors.

</details>
<details><summary>Hint 2</summary>

Distinguish their reports from a Thales autograph.

</details>
<details><summary>Solution</summary>

MacTutor traces several attributions through Proclus, who in some cases cites Eudemus. These later reports are evidence that the attribution circulated; they are not a surviving treatise written by Thales or proof that he gave our present demonstration.

</details>

### Exercise 2
<a id="greek-mathematics-thales-to-euclid-ex-2"></a>

For I.1 with $AB=6$, calculate a modern coordinate intersection and verify each side length.

<details><summary>Hint 1</summary>

Put A and B at $(0,0)$ and $(6,0)$.

</details>
<details><summary>Hint 2</summary>

Use $x=3$ in either circle.

</details>
<details><summary>Solution</summary>

The upper intersection is $C=(3,3\\sqrt3)$. Then $AC^2=9+27=36$ and $BC^2=9+27=36$, so each positive length is 6, equal to $AB$. The coordinate step is our existence supplement.

</details>

### Exercise 3
<a id="greek-mathematics-thales-to-euclid-ex-3"></a>

If I.1 uses circles of radius 4 on a base of length 6, what shape can their common point give?

<details><summary>Hint 1</summary>

Use the radius equalities.

</details>
<details><summary>Hint 2</summary>

Compare them with the base.

</details>
<details><summary>Solution</summary>

The two equal distances from the common point are 4, while the base is 6. A nondegenerate common point gives an isosceles triangle, not an equilateral one. The original construction requires radius equal to the given base.

</details>

### Exercise 4
<a id="greek-mathematics-thales-to-euclid-ex-4"></a>

In I.9, identify the three equalities used for congruence.

<details><summary>Hint 1</summary>

Two come from constructed segments.

</details>
<details><summary>Hint 2</summary>

The third is shared.

</details>
<details><summary>Solution</summary>

The triangles $BDF$ and $BEF$ have $BD=BE$ by selection on the rays, $DF=EF$ from the auxiliary equilateral triangle, and $BF=BF$ as their common side. Side-side-side congruence then gives the two angles at $B$ equal.

</details>

### Exercise 5
<a id="greek-mathematics-thales-to-euclid-ex-5"></a>

A learner removes the equilateral auxiliary triangle from the I.9 reconstruction and says that symmetry is enough. Identify the missing premise.

<details><summary>Hint 1</summary>

Inspect the side-side-side list.

</details>
<details><summary>Hint 2</summary>

Which two segments would be unconnected?

</details>
<details><summary>Solution</summary>

Without the auxiliary construction there is no established equality $DF=EF$. The two triangles have two corresponding equalities, not the three needed for the cited congruence step. A visual impression of symmetry does not supply that premise by itself.

</details>

### Exercise 6
<a id="greek-mathematics-thales-to-euclid-ex-6"></a>

Apply I.47 to legs 5 and 12, and state the positive length of the hypotenuse.

<details><summary>Hint 1</summary>

Add the square areas.

</details>
<details><summary>Hint 2</summary>

Take the positive square root.

</details>
<details><summary>Solution</summary>

The square on the hypotenuse has area $5^2+12^2=25+144=169$ in a common area unit. The hypotenuse length is the positive square root, 13. The positive-length condition is part of the geometric interpretation.

</details>

### Exercise 7
<a id="greek-mathematics-thales-to-euclid-ex-7"></a>

Explain why a negative algebraic value $a=-3$ is not a leg length in I.47, although $a^2=9$.

<details><summary>Hint 1</summary>

Separate algebraic domain from geometric magnitude.

</details>
<details><summary>Hint 2</summary>

A length is nonnegative.

</details>
<details><summary>Solution</summary>

The algebraic square of $-3$ is 9, but the proposition concerns squares constructed on segments with positive lengths. Replacing a segment by a signed number changes the domain; it may preserve a numerical formula without preserving the original geometric question.

</details>

### Exercise 8
<a id="greek-mathematics-thales-to-euclid-ex-8"></a>

Prove the area identity for four right triangles in a square of side $a+b$.

<details><summary>Hint 1</summary>

Count outer area.

</details>
<details><summary>Hint 2</summary>

Subtract four triangle areas.

</details>
<details><summary>Solution</summary>

The outer square has area $(a+b)^2$. Four copies of a triangle with legs $a,b$ have total area $4(ab/2)=2ab$. The remaining central square has area $c^2$, so $c^2=(a+b)^2-2ab=a^2+b^2$. This is our dissection proof, not a quotation of I.47.

</details>

### Exercise 9
<a id="greek-mathematics-thales-to-euclid-ex-9"></a>

Repair “Lardner and Heath differ, so Euclid changed his proof between 1855 and 1908.”

<details><summary>Hint 1</summary>

Identify the authors of the editions.

</details>
<details><summary>Hint 2</summary>

Keep the original author separate from later editorial presentation.

</details>
<details><summary>Solution</summary>

Lardner’s 1855 and Heath’s 1908 English editions present I.1 differently in their selected local passages. Euclid did not revise a text between those dates. A claim about the earlier textual history needs manuscript and edition evidence beyond this comparison.

</details>

### Exercise 10
<a id="greek-mathematics-thales-to-euclid-ex-10"></a>

Explain why the existence of a proof now does not settle an attribution to Thales.

<details><summary>Hint 1</summary>

Distinguish mathematical validity and historical witness.

</details>
<details><summary>Hint 2</summary>

Name what evidence the attribution would need.

</details>
<details><summary>Solution</summary>

A valid present proof establishes the result under its premises. It does not show that Thales wrote, discovered or taught that proof. Those are historical claims requiring contemporary or defensibly mediated testimony, with the route of that testimony stated.

</details>

## Summary

Later testimony about Thales is not a surviving Thales proof. The attested *Elements* propositions I.1, I.9 and I.47 show construction, congruence and area arguments within a sequence of prior results. Our coordinate and algebraic reconstructions clarify their logic while their editions delimit historical claims. Chapter 5 asks how such arguments gain their warrants and where a premise needs to be made explicit.
`;export{e as default};