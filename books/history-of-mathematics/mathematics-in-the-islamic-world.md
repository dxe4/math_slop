
# Mathematics in the Islamic World

The Islamic world was neither one place nor one language community, and its mathematics was not a waiting room between ancient Greece and early modern Europe. Arabic scientific writing connected calculation, geometry, astronomy, inheritance, trade and teaching over long periods. The [Qatar Digital Library's Arabic Scientific Tradition](https://www.qdl.qa/en/arabic-scientific-tradition) sets algebra among those practices. This chapter reads three particular quadratic problems through Frederic Rosen's 1831 English edition of al-Khwārizmī's *Algebra*. Other sources reveal how later translations, geometrical cubics and instruments complicate a single-author story.

Our three calculations use modern $x$ for a positive root or length. Rosen's edition prints running English prose and symbolic editorial footnotes. [Rosen's preface](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/13) describes its Arabic manuscript basis and editorial limitations; the [Historical Mathematics core course](../../course-texts/atlas-historical-mathematics-core.md) retains a detailed source-card comparison with Karpinski's Latin/English edition. We use the source problems without claiming to have collated the Arabic. The notation and signed-root discussion below belong to our reconstruction.

## Why categories of equation matter

A modern quadratic can be written $ax^2+bx+c=0$ with coefficients of either sign. If the meaningful magnitudes are positive squares, roots and numbers, then moving a term across an equality or allowing a negative solution changes the case being discussed. [Rosen's printed page 8](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/24) presents a classification in words of combinations of squares, roots and numbers. Its numerical case $x^2+10x=39$ is solved by halving the root coefficient and completing a square. The method works because $(x+5)^2=x^2+10x+25$ for every modern real $x$, but the selected positive-magnitude question retains $x>0$.

The chapter's source also states practical purposes, including inheritance, trade and land measurement, in [Rosen's translation on printed page 3](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/19). That is evidence for the purposes declared in this translated work, not a census of every actual use. [MacTutor's al-Khwārizmī biography](https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/) supplies broader biographical context with its own uncertainties. A named source for a person's career is different from a page that supports a specific calculation.

## Worked example 1: a square and ten roots

Rosen's [page 8 problem](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/24) has a square plus ten of its roots total 39. Write $x^2+10x=39$ as a modern relation with $x>0$. Half of ten is five; its square is 25. Add 25 to both sides: $(x+5)^2=64$. Since $x+5$ is positive, $x+5=8$ and $x=3$. Check: $3^2+10(3)=9+30=39$. The desired square is 9. The printed method's sequence of half, square, add, root and subtract is visible in Rosen's English passage.

Modern signed algebra also gives $(x+5)^2=64$ with $x+5=-8$, hence $x=-13$. It solves the polynomial equation over the reals but not the positive-root task. The difference is not a historical mistake; it is a change of domain. The [MAA teaching account of Islamic mathematics](https://old.maa.org/node/871985) places completing the square beside geometrical interpretation, which helps explain why the positive magnitude matters.

## Worked example 2: two squares and ten roots

On [Rosen's following printed page 9](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/25), the numerical case has two squares and ten roots equal to 48. Our equation is $2x^2+10x=48$. Divide each term by two to reduce to one square: $x^2+5x=24$. Half of five is $5/2$; add its square $25/4$ to both sides to get $(x+5/2)^2=121/4$. The positive square root is $11/2$, so $x=3$. Check in the original relation: $2(9)+10(3)=18+30=48$.

The reduction is important. If we halved ten to five before dividing the whole equation by two, then completed a different square, we would mix steps from distinct equations. Rosen's page makes the normalization of the square explicit. Our symbolic equality records the invariant at each step: division by nonzero two preserves solutions, and adding the same quantity to both sides does too. A purely verbal rule can be as exact as a symbolic one when the operations are followed carefully.

## Worked example 3: half a square and five roots

Rosen's [printed page 10](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/26) gives half a square plus five roots equal to 28. Write $x^2/2+5x=28$. Multiply every term by two: $x^2+10x=56$. Add 25 to both sides: $(x+5)^2=81$. The positive answer is $x+5=9$, so $x=4$. Check in the original statement: $4^2/2+5(4)=8+20=28$. The square is 16 and half the square is 8. The check must return to the unnormalized relation; otherwise a dropped factor of two could go unnoticed.

The three examples deliberately share a basic pattern. They are three distinct printed numerical cases, not three invented classroom quadratics. Their variation in the square coefficient shows why the first move may be normalization. The pattern can be generalised: for $a>0$, $b\ge0$, $c>0$, $ax^2+bx=c$ has positive solution $x=(-b+\sqrt{b^2+4ac})/(2a)$. This formula follows by division and completing the square. It is our modern synthesis, not a quotation from the running English pages.

## Geometry and translation

Rosen's [printed pages 14–16](https://en.wikisource.org/wiki/Page:The_Algebra_of_Mohammed_Ben_Musa_%281831%29.djvu/30) provide area presentations of the first quadratic case. A square $x^2$ with two strips each of area $5x$ lacks a $5$-by-$5$ corner; adding that corner yields a square of side $x+5$. The area relation is $(x+5)^2=x^2+10x+25$. It proves the numerical completion for positive lengths and makes the added 25 visible. A modern factorisation into $(x-3)(x+13)$ is algebraically correct but has a different geometric meaning because one factor represents a negative length at the second root.

Karpinski's [1915 edition of Robert of Chester's Latin translation, Latin page 70 and English page 71](https://en.wikisource.org/wiki/Page:Robert_of_Chester%27s_Latin_translation_of_the_Algebra_of_al-Khowarizmi.djvu/100) gives another textual route for a related quadratic. The Latin and Karpinski's accessible English wording are distinct from Rosen's 1831 English edition. Comparing numerical steps can identify a common type of problem; it cannot certify direct Arabic-to-Latin lexical equivalence without further manuscript and language work. Karpinski's edition date is not the medieval translation's date, and a medieval translation's date is not the date a procedure was first discovered.

[MacTutor's account of Omar Khayyam](https://mathshistory.st-andrews.ac.uk/Biographies/Khayyam/) and the [MAA's manuscript discussion of his algebra](https://old.maa.org/node/116885) describe geometric treatment of cubic cases through conic intersections. This is another mathematical genre, not a footnote to our three quadratics. A modern cubic equation may have several real roots; a geometrical construction can target a positive segment satisfying a particular case. We do not turn a vague reference to cubics into a fabricated example. The source-led account here stops at the evidence we have actually named.

The [Metropolitan Museum's astrolabe record](https://www.metmuseum.org/art/collection/search/451699) preserves a mathematical instrument whose geometrical design served timekeeping and could support astrological calculations. The catalogue states that astrolabes of this size lacked the precision needed for astronomical observations. It is evidence that mathematics also lived in objects, diagrams and skilled making. Its catalogue cannot tell us every calculation an owner performed. The Qatar Digital Library overview similarly gives setting, not a substitute for a numbered algebra page. The five-plus named sources work together because they answer different questions: translated problem, alternate translation, career context, mathematical extension and material culture.

The next chapter follows European mathematical writing between 1100 and 1600. The existence of Latin translations and similar numerical cases makes that connection worth investigating, but the route must be documented rather than assumed from matching answers. Keep the particular witness and its language in view even when the algebra becomes familiar.

## Three ways to check the first answer

The first case offers a good lesson in independent checks. Substitution confirms the number: with root 3, the square is 9 and ten roots make 30, totalling 39. The geometric completion confirms the operation: adding a 25-unit corner to the original square-and-strips area produces a larger square of area 64, hence side 8 and original side 3. A third check uses the modern polynomial identity $x^2+10x-39=(x-3)(x+13)$. Its positive zero is 3, while its negative zero reveals the larger signed domain. These checks agree on the requested positive root but answer different explanatory questions. The factorisation is especially useful for detecting a lost sign, yet the area construction better displays why half of ten is the natural strip width in the selected magnitude problem.

## A translation comparison is an experiment with limits

A source comparison should have a fixed question. For the square-and-ten-roots case, list the numerical operations in Rosen's running English, then list those in Karpinski's English rendering of the Latin passage. Record the words for the square, root and units, including any translator's note that supplies symbolic algebra. Agreement in halving and adding supports a bounded comparison of procedures. A difference in one English noun cannot alone reveal the full semantic range of an Arabic term, because the editions have different translation paths. Nor does a shared 3 prove which manuscript gave rise to which printed sentence. The exercise is valuable precisely because its limit is visible: it lets us compare two accessible witnesses while recording what would require Arabic and Latin collation.

## A field with more than one practice

The Qatar Digital Library's overview places algebra in a wider scientific setting, and the MAA's Islamic-mathematics teaching account notes that algebra was one of several ways to handle numerical questions. An astrolabe joins geometrical design to observation; a cubic construction can require conic sections; an inheritance calculation may demand a rate or partition. These are mathematical practices with different evidence and notations. Calling all of them “algebra” would obscure the task each served. Conversely, isolating the quadratic procedure from the world that preserved and used it would make its practical examples seem like decorative stories. The cited purposes and material objects show why an elementary equation deserves a historical setting as well as a correct answer.

## Exercises

The questions return to specific algebraic cases in the Rosen translation and to the distinction between a source's verbal categories and our symbolic equation. In completing a square, check that both sides retain the same dimension: a square area is compared with square areas, even if present notation suppresses units. When a quadratic has two algebraic roots, state whether the historical problem's quantities admit both as meaningful answers. Do not infer an author's language, audience or route of transmission solely from the modern solution. The linked edition, manuscript records and later historical studies support different claims. Your arithmetic can check the answer to a case, while the edition and archive establish what was actually written and transmitted.

### Exercise 1
<a id="mathematics-in-the-islamic-world-ex-1"></a>

Solve Rosen’s page 8 quadratic in the positive domain and check the original relation.

<details><summary>Hint 1</summary>

Half the coefficient ten.

</details>
<details><summary>Hint 2</summary>

Complete $(x+5)^2$.

</details>
<details><summary>Solution</summary>

$x^2+10x=39$ becomes $(x+5)^2=64$. The positive-magnitude solution is $x=3$, and $9+30=39$. The modern negative root solves a wider signed equation but not this positive task.

</details>

### Exercise 2
<a id="mathematics-in-the-islamic-world-ex-2"></a>

Find the other real root of $x^2+10x=39$ and explain its historical status.

<details><summary>Hint 1</summary>

Use the negative square root of 64.

</details>
<details><summary>Hint 2</summary>

Subtract five.

</details>
<details><summary>Solution</summary>

$x+5=-8$ gives $x=-13$, and $169-130=39$. It is a valid root over modern real numbers but a negative length is outside the positive-magnitude reading of the cited source problem.

</details>

### Exercise 3
<a id="mathematics-in-the-islamic-world-ex-3"></a>

Normalize Rosen’s page 9 problem and complete its square.

<details><summary>Hint 1</summary>

Divide every term by two.

</details>
<details><summary>Hint 2</summary>

Add the square of half of five.

</details>
<details><summary>Solution</summary>

$2x^2+10x=48$ becomes $x^2+5x=24$, then $(x+5/2)^2=121/4$. The positive root is $x=3$; substitution gives $2(9)+30=48$.

</details>

### Exercise 4
<a id="mathematics-in-the-islamic-world-ex-4"></a>

Why would dividing only the square term by two in the page 9 problem be invalid?

<details><summary>Hint 1</summary>

Equality-preserving operations act on both sides.

</details>
<details><summary>Hint 2</summary>

Track all three terms.

</details>
<details><summary>Solution</summary>

Dividing $2x^2+10x=48$ by two must yield $x^2+5x=24$. Dividing only $2x^2$ would yield a different relation and generally a different solution set; it is not normalization.

</details>

### Exercise 5
<a id="mathematics-in-the-islamic-world-ex-5"></a>

Solve Rosen’s page 10 problem and check before and after normalization.

<details><summary>Hint 1</summary>

Multiply all terms by two.

</details>
<details><summary>Hint 2</summary>

Complete the square with 25.

</details>
<details><summary>Solution</summary>

$x^2/2+5x=28$ becomes $x^2+10x=56$, then $(x+5)^2=81$ and positive $x=4$. The normalized check is $16+40=56$; the original check is $8+20=28$.

</details>

### Exercise 6
<a id="mathematics-in-the-islamic-world-ex-6"></a>

For $x^2+10x=39$, explain the area role of the added 25.

<details><summary>Hint 1</summary>

Think two strips of width five.

</details>
<details><summary>Hint 2</summary>

Identify the missing corner.

</details>
<details><summary>Solution</summary>

A square of area $x^2$ with two $5$-by-$x$ strips has area $x^2+10x$ but lacks a $5$-by-$5$ corner to make a full square of side $x+5$. Adding area 25 gives $(x+5)^2$, which is why the completion works for positive lengths.

</details>

### Exercise 7
<a id="mathematics-in-the-islamic-world-ex-7"></a>

Derive the positive solution formula for $ax^2+bx=c$ when $a>0$, $b\ge0$, $c>0$.

<details><summary>Hint 1</summary>

Divide by a and complete a square.

</details>
<details><summary>Hint 2</summary>

Take the positive square root.

</details>
<details><summary>Solution</summary>

After division, add $(b/2a)^2$ to get $(x+b/2a)^2=c/a+b^2/(4a^2)$. Hence $x=(-b+\sqrt{b^2+4ac})/(2a)$. Because $c>0$, the square root exceeds b, so this x is positive.

</details>

### Exercise 8
<a id="mathematics-in-the-islamic-world-ex-8"></a>

Distinguish Rosen’s 1831 page from the Arabic manuscript he describes.

<details><summary>Hint 1</summary>

One is the selected English edition.

</details>
<details><summary>Hint 2</summary>

The manuscript is a reported basis, not an inspected page here.

</details>
<details><summary>Solution</summary>

Rosen’s printed English page directly supports what his edition says and which operations it presents. His preface reports an Arabic manuscript basis and limitations, but we have not collated that manuscript. A claim about exact Arabic wording needs further evidence.

</details>

### Exercise 9
<a id="mathematics-in-the-islamic-world-ex-9"></a>

Explain why an astrolabe catalogue record cannot prove how every owner used the instrument.

<details><summary>Hint 1</summary>

An object and its possible uses are different evidence.

</details>
<details><summary>Hint 2</summary>

Look for use records.

</details>
<details><summary>Solution</summary>

The Met record establishes the surviving instrument and its described design/context. It does not observe every historical user or calculation. Diaries, manuals, annotations or other records would be needed for a claim about particular use.

</details>

### Exercise 10
<a id="mathematics-in-the-islamic-world-ex-10"></a>

A student says the same quadratic appears in Rosen and Karpinski, therefore the two English editors used identical Arabic words. Repair the claim.

<details><summary>Hint 1</summary>

Compare textual routes.

</details>
<details><summary>Hint 2</summary>

Separate numerical structure from lexical equivalence.

</details>
<details><summary>Solution</summary>

The editions can be compared for a shared numerical case and operations. Rosen translates an Arabic source through his 1831 edition; Karpinski presents a Latin tradition and accessible English in 1915. Identical numerical answers do not establish identical Arabic wording or a complete manuscript genealogy.

</details>

## Summary

Three distinct numerical cases in Rosen’s al-Khwārizmī edition show why normalization and completing the square are exact operations for positive magnitudes. The area argument, alternate Latin/English route, cubic work and an instrument record broaden the history without erasing their evidential differences. Chapter 9 follows medieval and Renaissance European algebra through its own witnesses.
