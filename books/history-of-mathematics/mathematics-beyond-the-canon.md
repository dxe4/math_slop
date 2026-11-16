
# Mathematics beyond the Canon

A history arranged as a shelf of celebrated books has an obvious advantage: a reader can turn to a surviving page and check a calculation. It also has a cost. Texts survive unevenly; collectors and institutions select what can be seen; translation changes what a problem sounds like; and a practice carried by objects, oral teaching or ephemeral drawing can disappear from the shelf. This chapter uses three documented problems, each with a different kind of witness, to ask how mathematical work becomes visible. It ends by returning to the reader's responsibility: a new equation can clarify a source without becoming the source.

The examples are the silk-price problem transmitted in *The Nine Chapters on the Mathematical Art*, a Maya Long Count calculation documented by the Smithsonian National Museum of the American Indian, and a Japanese temple geometry problem reproduced by the Mathematical Association of America. These are deliberately separated in time and setting. No common origin or historical contact follows from their appearance together here. We study them together because each lets us ask what the mathematical question was, what survives, and what a modern solution contributes. The sources for the three cases are the MAA's [*Nine Chapters* discussion](https://old.maa.org/press/periodicals/convergence/a-classic-from-china-the-nine-chapters-the-first-six-chapters), the Smithsonian's [Maya calendar account](https://maya.nmai.si.edu/calendar/calendar-system) and [Long Count explanation](https://maya.nmai.si.edu/2012-resetting-count/meaning-of-2012), and the MAA's [Japanese temple problem record](https://old.maa.org/press/periodicals/convergence/japanese-temple-problem).

## What a canon selects

The familiar sequence of named authors and European printed books is one useful route through surviving mathematical texts. It is not a census of everyone who calculated. *The Nine Chapters*, for example, presents procedural questions about trade, grain, land and labour in a transmitted Chinese text. The [MAA's guide to the first six chapters](https://old.maa.org/press/periodicals/convergence/a-classic-from-china-the-nine-chapters-the-first-six-chapters) quotes individual problems through an identified modern edition. The guide is a modern secondary route to a transmitted text, not a newly found ancient manuscript. Its author names the edition used, which makes the wording checkable. Our equations below are further modern notation.

The Smithsonian's [Living Maya Time project](https://maya.nmai.si.edu/) presents calendrical knowledge with attention to living Maya communities as well as archaeological evidence. Its [discussion of the thirteen-baktun cycle](https://maya.nmai.si.edu/2012-resetting-count/meaning-of-2012) identifies Stela C at Quiriguá and Monument 6 at Tortuguero for distinct date claims. We should not collapse a monument, a museum interpretation and a modern arithmetic exercise into a single witness. An inscription's represented date is one thing; the arithmetic of place values is another; conversion into a Gregorian date adds a correlation convention. This chapter computes a duration in days and does not infer a prediction about the end of the world.

The MAA's [temple geometry page](https://old.maa.org/press/periodicals/convergence/japanese-temple-problem) labels a sangaku problem with a prefecture and the date 1892. The page gives a mathematical statement and a diagram. It does not, by itself, establish who first devised the problem or that every posted tablet looked like its modern drawing. The date and location label belong to the MAA record; the Cartesian coordinates in our proof belong to us. A documentary label is narrower than a complete biography.

Other kinds of mathematical record broaden the picture further. The Smithsonian National Museum of the American Indian catalogues a [khipu as a counting record](https://americanindian.si.edu/collections-search/object/ark%3A/65665/ws63207afade65f46bdbb4ecbd6b6e0b22f). The object record is evidence of a material counting technology. It does not give this chapter permission to invent the numerical value of every knot or to claim a single interpretation for all surviving khipus. The Metropolitan Museum of Art's [geometric Akan gold weight](https://www.metmuseum.org/art/collection/search/317674) and [gold-dust box record](https://www.metmuseum.org/art/collection/search/310823) document weighing equipment and a system of calibrated measures. The museum cautions that some figurative pieces called weights may have served other purposes. A visually mathematical object needs a documented use before we assign it a particular algorithm.

## Worked example 1: a silk price in *The Nine Chapters*

The [MAA's *Nine Chapters* discussion](https://old.maa.org/press/periodicals/convergence/a-classic-from-china-the-nine-chapters-the-first-six-chapters), drawing on the edition it names, gives a price problem: one *jin* of silk costs 240 coins; how much silk can 1328 coins buy? It asks for the answer in units used in the source's translation. We first keep the answer in *jin*, because the price ratio itself is sufficient and because converting to subunits requires a separately verified unit scheme.

Let $x$ be the amount of silk in *jin*. The stated price gives $240x=1328$, hence

$$x=\frac{1328}{240}=\frac{83}{15}=5+\frac{8}{15}\quad\text{jin}.$$

One can check the answer without decimal rounding: five *jin* cost 1200 coins, leaving 128 coins; $128/240=8/15$. The calculation is a modern equation for a documented proportional question. It does not prove that a historical solver wrote $x$, crossed out a fraction, or used the order of steps in this paragraph. Those details require a source describing a procedure. The problem matters historically because its answer is a quantity with units, not merely a bare rational number. If a reader changes 240 to a modern currency price, the mathematics of proportion persists but the historical problem no longer has the same evidence.

This case also shows what quotation cannot do alone. A translated problem statement gives the data and question. It does not, without accompanying commentary, establish a date for the first composition of the entire collection or a named individual author. We can cite the MAA page for the problem and the edition it uses, then state our inference separately. Solving the ratio is independent of assigning a precise manuscript date. The distinction keeps a valid mathematical solution from carrying an unsupported historical chronology.

## Worked example 2: a Long Count duration

The Smithsonian's [calendar-system page](https://maya.nmai.si.edu/calendar/calendar-system) explains that one *baktun* is 144,000 days and that a thirteen-baktun cycle comprises 1,872,000 days. Its [account of the 2012 discussion](https://maya.nmai.si.edu/2012-resetting-count/meaning-of-2012) names the thirteen-baktun notation $13.0.0.0.0$ in connection with the creation date represented on Stela C and distinguishes the later cycle completion discussed via Monument 6. A five-place Long Count numeral has named units; it is not a decimal point with four trailing digits.

For the documented duration, multiply the high-place count by its unit:

$$13\times144{,}000=1{,}872{,}000\quad\text{days}.$$

The zero entries contribute zero days in their respective lower places. We have calculated an interval length associated with thirteen *baktun*, not converted a particular inscription into a Gregorian day. The same written five-place form can arise in explanations of a cycle's opening and completion, so a bare arithmetic product does not identify an inscription's historical context. The Smithsonian supplies those contexts; the multiplication checks the quantitative relation. This is why a calendar account must keep notation, cycle interpretation and monument testimony apart.

The place values also show why “base twenty” is a useful but incomplete shorthand. In the [Smithsonian's calendar description](https://maya.nmai.si.edu/sites/default/files/resources/The%20Maya%20Calendar%20System.pdf), *k’in* counts days, *uinal* groups twenty days, and *tun* groups eighteen *uinal*, or 360 days. Higher units then group twenty of the preceding unit. The factor eighteen at the *tun* step matters. A learner who uses $20^2=400$ for a *tun* will misread a date, even if all other positional arithmetic is correct. The sources explain the calendar structure; our multiplication simply applies it.

## Worked example 3: two tangent circles on a temple problem

The [MAA's Japanese temple problem page](https://old.maa.org/press/periodicals/convergence/japanese-temple-problem) states a geometry question attributed there to a sangaku dated 1892. Two circles of radii $r_1>r_2$ touch each other and a common straight line. If their points of contact with the line are $A$ and $B$, show that $AB^2=4r_1r_2$. The source gives the target relation. The following coordinate proof is a modern reconstruction, not an asserted transcription of the tablet's method.

Place the common tangent line at height zero. Put the first centre at $(0,r_1)$ and the second at $(d,r_2)$, so $A=(0,0)$, $B=(d,0)$ and $AB=|d|$. External tangency makes the distance between centres $r_1+r_2$. The Pythagorean relation is

$$d^2+(r_1-r_2)^2=(r_1+r_2)^2.$$

Subtracting gives $d^2=4r_1r_2$, exactly the stated result. For the concrete modern choice $r_1=9$ and $r_2=4$, the separation of contact points is $AB=12$. The numbers 9 and 4 illustrate the theorem; the source's historical problem is the general relation. The geometry has a pleasing feature: the horizontal separation is twice the geometric mean of the radii. That reformulation is ours. It does not establish that the historical problem was phrased in terms of a geometric mean.

The proof depends on external tangency and both circles lying on the same side of the line. Without those conditions, the distance between centres need not be $r_1+r_2$ with the vertical difference shown. Stating the configuration is part of solving the historical problem faithfully. A diagram copied without its assumptions would be a weaker witness than the combined statement and derivation.

## Practices, records and living knowledge

UNESCO's [record on sona drawings](https://ich.unesco.org/en/RL/sona-drawings-and-geometric-figures-on-sand-01994) describes a living practice among Lunda Cokwe and neighbouring peoples in eastern Angola. Practitioners mark reference points and trace lines in sand; the figures communicate beliefs, thoughts and relations. This source supports discussion of geometric action and cultural transmission. It does not by itself specify a historical theorem about every sona design. We should not reduce the practice to a drawing puzzle stripped of its social meaning, nor should we invent a numerical rule and attribute it to a named community. A modern graph-theory exercise inspired by a visible figure would have to say it is a new exercise.

The [Met's Akan weight record](https://www.metmuseum.org/art/collection/search/317674) gives another lesson about evidence. A geometric brass piece can be measured today, but its present mass alone may not reveal the weight standard of its maker or every use of the object. The museum notes adjustment of pieces and cautions about the uses of figurative forms. The related [box record](https://www.metmuseum.org/art/collection/search/310823) describes scales, spoons and calibrated weights in gold-dust exchange. A classroom balance equation could illustrate such a transaction, but absent an attested transaction it would be our scenario, not a historical worked problem. This chapter therefore reserves its three worked examples for problems with documented statements.

The Smithsonian [khipu object record](https://americanindian.si.edu/collections-search/object/ark%3A/65665/ws63207afade65f46bdbb4ecbd6b6e0b22f) is deliberately modest evidence. It records a thing that can be studied, with catalog information supplied by a museum. The label “counting record” invites mathematical questions: what is a unit, how are positions grouped, how can one distinguish zero from missing information? Answering those for this particular object would require object-level documentation and specialist interpretation. Generic reconstructions of a decimal knot system cannot automatically fill every strand of a particular artifact. The discipline is the same as with an ancient papyrus: identify the witness, then state the interpretive step.

## Comparison without a single ladder

The silk price is a proportional calculation, the Long Count is a calendrical place-value computation, and the tangent-circle question is a geometric proof. They do not form a ladder from “simple” to “advanced” cultures. Each is complex relative to its purpose: trade requires consistent rates and units; a calendar requires rules connecting several cycles; a geometry challenge requires assumptions about a diagram and a valid derivation. Modern algebra can display all three, but it makes them look more alike than their original media did. The comparison is useful when its scope is explicit: we compare mathematical relations, not the total intellectual achievement of the communities attached to them.

The examples also differ in who speaks through our source. For the silk question, a modern MAA author cites an edition of a transmitted text. For the calendar, a museum project interprets monuments and contemporary Maya knowledge. For the temple geometry, a MAA page reports a problem associated with a dated sangaku. In none of the cases does an inline link abolish mediation. We should read the source's own statement of provenance and avoid turning a modern teaching page into an unqualified ancient quotation. A reliable historical paragraph names its level of evidence: object, transcription, translation, edition, museum interpretation, or modern solution.

The previous chapters used famous texts because their mathematics can be followed proposition by proposition. This final chapter shows that their survival and fame are themselves historical facts to investigate. A record can be lost, fragmented, detached from its users, translated through several languages, or held in a collection that favours durable objects. The absence of a familiar printed treatise is not evidence of an absence of mathematical reasoning. Conversely, a compelling modern analogy is not proof of a historical connection. Historians can make strong claims by making them narrow enough for the surviving evidence.

When solving a source-led problem, a reader can keep a short ledger. First write the exact data and question supplied by the cited witness or edition. Next write the modern symbols introduced for calculation. Then perform and check the mathematics. Finally write one sentence stating what the calculation proves and one stating what it leaves open historically. This ledger is not an extra obstacle to mathematics. It lets a calculation remain correct even when a date, attribution or translation is later revised. It also makes room for histories carried by material and living practices, without inventing archival detail to force them into the form of a textbook theorem.

## Exercises

### Exercise 1
<a id="mathematics-beyond-the-canon-ex-1"></a>

In the documented silk-price problem, how much silk, in *jin*, can 480 coins buy?

<details><summary>Hint 1</summary>

Use the stated cost of one *jin*.

</details><details><summary>Hint 2</summary>

Divide 480 by 240.

</details><details><summary>Solution</summary>

$480/240=2$, so the amount is two *jin*. This is a new numerical question derived from the documented rate, not a second translated problem statement.

</details>

### Exercise 2
<a id="mathematics-beyond-the-canon-ex-2"></a>

Check $83/15$ *jin* against the 1328-coin price without decimals.

<details><summary>Hint 1</summary>

Multiply by 240.

</details><details><summary>Hint 2</summary>

Cancel 240 against 15 first.

</details><details><summary>Solution</summary>

$240(83/15)=16\cdot83=1328$ coins. The dimensions also check: coins per *jin* times *jin* gives coins.

</details>

### Exercise 3
<a id="mathematics-beyond-the-canon-ex-3"></a>

Why does the silk calculation alone not identify the original author's notation?

<details><summary>Hint 1</summary>

Separate data from your equation.

</details><details><summary>Hint 2</summary>

Think about the translation and edition.

</details><details><summary>Solution</summary>

The documented problem supplies a price and an amount of money. Our symbol $x$ and equation $240x=1328$ are modern representations. To claim original notation one would need a specified textual witness or transcription showing it.

</details>

### Exercise 4
<a id="mathematics-beyond-the-canon-ex-4"></a>

How many days are two *baktun* in the Smithsonian account?

<details><summary>Hint 1</summary>

One *baktun* is 144,000 days.

</details><details><summary>Hint 2</summary>

Double the unit value.

</details><details><summary>Solution</summary>

$2\cdot144{,}000=288{,}000$ days. This is a unit calculation, not a Gregorian-date conversion.

</details>

### Exercise 5
<a id="mathematics-beyond-the-canon-ex-5"></a>

Why would treating a *tun* as $20^2$ days misread the Long Count?

<details><summary>Hint 1</summary>

Look for the exception in the named units.

</details><details><summary>Hint 2</summary>

Multiply 18 *uinal* by 20 days.

</details><details><summary>Solution</summary>

A *tun* is $18\cdot20=360$ days, whereas $20^2=400$. The mistaken rule adds 40 days for every *tun* counted.

</details>

### Exercise 6
<a id="mathematics-beyond-the-canon-ex-6"></a>

Give the horizontal separation for tangent circles of radii 16 and 9 in the temple relation.

<details><summary>Hint 1</summary>

Use $AB^2=4r_1r_2$.

</details><details><summary>Hint 2</summary>

Take the positive square root.

</details><details><summary>Solution</summary>

$AB^2=4\cdot16\cdot9=576$, so $AB=24$. The chosen radii are a modern numerical illustration of the sourced general problem.

</details>

### Exercise 7
<a id="mathematics-beyond-the-canon-ex-7"></a>

In the coordinate proof, why is the centre-to-centre distance $r_1+r_2$?

<details><summary>Hint 1</summary>

The circles touch externally.

</details><details><summary>Hint 2</summary>

Trace the line through their contact point and centres.

</details><details><summary>Solution</summary>

At external tangency, the two radii from the centres to the common contact point lie end to end, so the centre separation is their sum. This is the geometric assumption used before the Pythagorean calculation.

</details>

### Exercise 8
<a id="mathematics-beyond-the-canon-ex-8"></a>

What does the Smithsonian calendar source supply that the product $13\cdot144{,}000$ cannot supply?

<details><summary>Hint 1</summary>

Think about monuments and meanings.

</details><details><summary>Hint 2</summary>

A duration is not a unique historical inscription.

</details><details><summary>Solution</summary>

The source identifies the unit names, the calendar interpretation and distinct monument contexts for dates. Arithmetic gives only a duration in days. It does not identify which monument recorded a statement or what the cycle meant to its makers.

</details>

### Exercise 9
<a id="mathematics-beyond-the-canon-ex-9"></a>

Why can the Met's photograph of an Akan piece not establish an exact historic weighing transaction?

<details><summary>Hint 1</summary>

An object differs from a transaction record.

</details><details><summary>Hint 2</summary>

The museum discusses differing uses and adjustments.

</details><details><summary>Solution</summary>

The object and catalogued context support claims about material weighing practices, but they do not give an attested buyer, seller, amount or particular exchange. An equation with such numbers would be a modern illustrative scenario unless separately documented.

</details>

### Exercise 10
<a id="mathematics-beyond-the-canon-ex-10"></a>

Name one claim UNESCO's sona record supports and one claim it does not by itself support.

<details><summary>Hint 1</summary>

Read its description of makers and action.

</details><details><summary>Hint 2</summary>

Compare a documented practice with an invented universal theorem.

</details><details><summary>Solution</summary>

It supports the claim that Lunda Cokwe and neighbouring practitioners make geometric sand drawings using reference points and traced lines. It does not establish that every design encodes a particular numerical theorem or that a modern classroom graph exercise reproduces a named historical proof.

</details>

## Summary

The documented silk, Long Count and tangent-circle questions support exact modern calculations while requiring three distinct statements of provenance. Material and living practices widen the archive but demand still more care about what a source actually records. Mathematical comparison is strongest when the witness, translation or institutional interpretation, modern reconstruction and remaining uncertainty are named separately. A history beyond a canon is an expanded method of reading, not a replacement list of heroes.
