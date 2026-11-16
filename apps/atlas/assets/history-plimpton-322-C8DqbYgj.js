var e=`---
id: deep-dive-history-plimpton-322
title: "Plimpton 322"
license: CC BY-SA 4.0
---

# Plimpton 322

Two recorded numbers can determine an exact numerical relationship without deciding why the record was made. A row of the tablet known as Plimpton 322 gives a clear example: two sexagesimal entries fit a right-triangle calculation, but the inferred third length and the tablet's historical purpose are different kinds of claim.

This L1 orientation assumes multiplication, fractions and the square relation for right triangles. Use [Counting and Numerals Across Cultures](history-counting-numerals-across-cultures.md) for place-value preparation and [Area and the Pythagorean Theorem](../books/euclidean-geometry-trigonometry/area-pythagorean-theorem.md) for the modern geometry. The actual history primary is [Babylonian and Egyptian Mathematics](../books/history-of-mathematics/babylonian-and-egyptian-mathematics.md), in its Plimpton section. That chapter supplies the object locator, row-transcription references and interpretation caveats. This article adapts that supplied source record; it claims no new tablet inspection or independent decipherment.

## Keep the object, the transcription and the calculation separate

The history chapter identifies Columbia University Libraries' institutional record for Plimpton Cuneiform 322. It distinguishes that object record from the mathematical transcription of row one cited through the Open University and Eleanor Robson's reassessment. An institutional catalogue locates a surviving object; it is not automatically a complete edition of every numeral on it.

We need only the two preserved entries transcribed in the primary as $1,59$ and $2,49$. In the present whole-number normalization these are base-sixty place lists. The first is one sixty plus fifty-nine, or 119. The second is two sixties plus forty-nine, or 169. The commas separate places in this modern transcription; they are not decimal points.

The row's leftmost quantity is partly restored in modern readings, according to the primary's source discussion. We will not silently use an uncertain restoration as if it were another fully preserved datum. Our calculation begins with the two specified entries and states exactly what it infers from them.

## Worked example — Infer a third length exactly

Treat 169 as a candidate hypotenuse and 119 as one leg in a modern right-triangle reconstruction. The square of a possible other leg is

$$169^2-119^2.$$

Instead of multiplying both large squares first, factor their difference:

$$169^2-119^2=(169-119)(169+119)=50\\cdot288=14{,}400=120^2.$$

The positive inferred length is therefore 120. Direct expansion gives a second exact check: $119^2=14{,}161$, $120^2=14{,}400$ and their sum is $28{,}561=169^2$. No rounding or approximate angle measurement enters the result.

All three lengths are positive and the two smaller ones add to more than the largest. In ordinary Euclidean geometry the converse of the square relation therefore identifies this as a right triangle. That is our modern geometric certificate. The source record does not say that the third length 120 is written as a third side in that row; it is inferred by our arithmetic from the preserved pair.

The distinction is small in wording but large in historical meaning. “These two entries fit a modern right-triangle triple” is supported by the exact calculation. “The tablet writes all three sides” is not supported by the two entries we used. A calculation can add information logically without adding new marks to the physical witness.

## One numerical pattern can support more than one procedure

Normalize the inferred leg to one by dividing the triple by 120. The two ratios become $119/120$ and $169/120$, and their squared difference is one. There is also a reciprocal-pair description. Add and subtract those two ratios to obtain

$$\\frac{169+119}{120}=\\frac{12}{5},\\qquad
\\frac{169-119}{120}=\\frac5{12}.$$

Their product is one. Conversely, half their sum recovers $169/120$ and half their difference recovers $119/120$. Thus the same exact pair can be reorganized as lengths, normalized ratios or a reciprocal calculation.

This is another modern reconstruction. It demonstrates mathematical compatibility, not the maker's actual procedure. To identify an historical algorithm one needs the surrounding source evidence and a justified interpretation, rather than merely finding an algorithm that reproduces the numbers. The [source-reading chapter](../books/history-of-mathematics/reading-mathematical-sources.md) develops precisely that distinction between witness, reconstruction and inference.

## An exact answer leaves an open historical question

The primary chapter reports competing readings of the tablet, including a Pythagorean-triple interpretation and an interpretation involving teaching problems and reciprocal pairs. Its purpose remains disputed. We therefore do not announce the square identity as proof that the tablet was a trigonometric table, that its maker used modern trigonometric functions, or that a particular later theorem name was already in use.

Nor does uncertainty about purpose make the arithmetic uncertain. Once the two entries and their stated normalization are accepted, the equality of the squares is exact. Historical caution and mathematical precision reinforce each other when each claim retains its own support. A reader can verify the number relation completely while leaving the intended use unresolved.

The useful habit is to write three separate sentences: what the source record gives, what our calculation derives and what further interpretation remains proposed. That prevents an exciting reconstruction from expanding into an unsupported claim of historical intention or priority.

## Exercises

### Exercise 1 {#history-plimpton-322-ex-1}

A learner reads the transcribed pair $1,59$ and $2,49$ as decimal numbers 1.59 and 2.49. Explain the place-value error and reconstruct the numbers used in the worked example.

<details><summary>Hint 1</summary>
The comma here separates a sixties place from a units place.
</details>
<details><summary>Hint 2</summary>
Multiply the first place by sixty before adding the second.
</details>
<details><summary>Full solution</summary>
The first entry is one times sixty plus fifty-nine, giving 119. The second is two times sixty plus forty-nine, giving 169. Treating the comma as a decimal point changes the place weights and therefore changes the quantities. The worked example uses this stated whole-number normalization of the sexagesimal entries. It does not claim that every historical sexagesimal string supplied an absolute scale without context.
</details>

### Exercise 2 {#history-plimpton-322-ex-2}

As a modern changed example, take candidate hypotenuse 25 and leg 7. Infer the other leg exactly, and state why the success of this example supplies no new claim about a row of Plimpton 322.

<details><summary>Hint 1</summary>
Factor the difference of squares.
</details>
<details><summary>Hint 2</summary>
The product is eighteen times thirty-two.
</details>
<details><summary>Full solution</summary>
The difference is $(25-7)(25+7)=18\\cdot32=576=24^2$, so the positive other leg is 24. The triple is seven, twenty-four and twenty-five, with exact square check $49+576=625$. These numbers were supplied as an exercise, not transcribed from the tablet in this article. The calculation shows how the reconstruction works on another input. It does not enlarge the inspected source record, identify another historical row or prove a proposed ancient procedure.
</details>

## Continue in the primary book

[Babylonian and Egyptian Mathematics](../books/history-of-mathematics/babylonian-and-egyptian-mathematics.md) gives the institutional object and row-reading references, including the Columbia record, Open University transcription and Robson reassessment. This original Euler orientation develops its supplied row into an exact worked reconstruction and new exercises. It leaves the object, preserved entries, inferred third length and proposed purpose distinct. No new archival access or independent review is claimed.
`;export{e as default};