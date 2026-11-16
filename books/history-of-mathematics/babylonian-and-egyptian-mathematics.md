
# Babylonian and Egyptian Mathematics

The names “Egyptian” and “Babylonian” cover long periods, many locations and different kinds of record. A surviving papyrus problem and a clay tablet are evidence for specific mathematical practices; neither is an inventory of everything a population knew. This chapter reads two problems in Chace's English edition of the Rhind Mathematical Papyrus and one square-diagonal computation on tablet YBC 7289. It compares trial and scaling, finite sums and place-value approximation. All three computations are reproducible with school arithmetic. Their material and editorial routes to us are different.

The [British Museum's Rhind object record](https://www.britishmuseum.org/collection/object/Y_EA10058) describes the papyrus and its mixture of fraction, multiplication, division, area and volume work. The [Cuneiform Digital Library Initiative record for YBC 7289](https://cdli.earth/artifacts/255048?direction=asc&sort=created) identifies the tablet and the mathematical readings attached to it; the [NYU Institute for the Study of the Ancient World exhibition entry](https://isaw.nyu.edu/exhibitions/before-pythagoras/items/ybc-7289/) presents the diagonal interpretation. These institution records give us an object-based starting point. We then name the modern edition or interpretation that supports each numerical reconstruction. We have not read a hieratic or cuneiform original unaided.

## Procedure, table and check

A mathematical text may give a procedure and a worked check rather than a theorem in the form familiar from a modern textbook. That does not make it less mathematical. We should identify the operation that is repeated, the quantity held constant and the criterion that distinguishes a correct result. In a trial-and-scaling problem the crucial property is that scaling the input scales the output. In a reciprocal-table calculation the useful property is that multiplication by a known reciprocal reverses multiplication by its partner, within the chosen place-value interpretation. A proof in modern algebra can explain why these operations work without retroactively inserting our symbolic framework into the older text.

The [MAA's discussion of Old Babylonian tablets](https://old.maa.org/press/periodicals/convergence/mathematical-treasures-old-babylonian-tablets) describes reciprocal tables as working tools for division. Sixty has many divisors, so $1/2$, $1/3$ and $1/5$ have short base-sixty forms. We can write $1/2=0;30_{60}$ and $1/3=0;20_{60}$. This is a modern transcription with an explicit semicolon. If we multiply $3$ by $0;20_{60}$, we get $1$, showing why the entry is useful for division by three. A historical tablet's actual marks and its context require their own reading; a familiar semicolon is ours.

Egyptian fractional notation likewise should not be equated with a modern preference for decimals. A modern rational such as $19/8$ can be decomposed as $2+1/4+1/8$, which gives a convenient set of unit fractions in the Problem 24 calculation. The decomposition is an exact equality because $16/8+2/8+1/8=19/8$. Many decompositions are possible, and the mathematical check does not establish that every papyrus scribe chose the same one in every setting. Chace's [editorial description of the Rhind translation](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/65) matters when we compare a particular printed decomposition to the older object.

## Worked example 1: Rhind Problem 24

In Chace's [Problem 24, printed page 67](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/83), a quantity plus one seventh of it is to be 19. We start with trial quantity 7, whose seventh is 1 and whose total is 8. The target is $19/8$ times that total, so multiply the trial by the same factor: $q=7(19/8)=133/8$. Verify with the original relation: $q/7=19/8$, hence $q+q/7=(133+19)/8=152/8=19$. This exact check is stronger than saying that the answer is approximately 16.6.

A modern equation gives the same result: $q+q/7=19$ implies $(8/7)q=19$ and then $q=133/8$. The equation is a concise certificate for our readers. It does not show that the papyrus used a letter for the unknown, or that its author considered all real values of $q$. The trial calculation is particularly informative because it explains an operation visible in the problem's translated procedure. We can generalise that operation to a target $T$: $q=7T/8$, provided the relation remains “quantity plus seventh.” That general formula is a new abstraction of the attested problem.

## Worked example 2: Rhind Problem 79

Chace's [Problem 79, printed page 112](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/128), presents a five-level repeated-seven total. The modern values $7,49,343,2401,16807$ add to $19607$. To keep each step inspectable, accumulate $7+49=56$, $56+343=399$, $399+2401=2800$, and $2800+16807=19607$. The intermediate 2800 is a useful error check: if it differs, the final sum cannot be trusted. The numerical pattern is a finite geometric progression; its source is an enumerated problem, not a printed modern theorem about an arbitrary ratio.

For a second check write $S=7+7^2+7^3+7^4+7^5$. Then $7S-S=7^6-7$, so $6S=117642$ and $S=19607$. The subtraction cancels the four interior powers. The equality can be verified directly by multiplying the final answer by six. This symbolic route explains the repeated structure but imports our notation and interest in a general relation. It would be poor historical method to erase the several kinds of things named in the attested list and claim that a single modern variable was the source's object. A source problem can be arithmetically unified while remaining contextually plural.

## Worked example 3: a square diagonal on YBC 7289

The [CDLI record for YBC 7289](https://cdli.earth/artifacts/255048?direction=asc&sort=created) and the [NYU exhibition entry](https://isaw.nyu.edu/exhibitions/before-pythagoras/items/ybc-7289/) identify a square-and-diagonal computation, with a sexagesimal approximation often written in modern notation as $1;24,51,10_{60}$ for the diagonal-to-side ratio. We evaluate this transcription as $1+24/60+51/60^2+10/60^3=1.414212962\ldots$. The exact modern diagonal ratio for a square is $\sqrt2=1.414213562\ldots$, so this tablet-associated value is close but not equal. The difference is about $0.000000600$.

Why does $\sqrt2$ enter? In our Euclidean reconstruction, a unit square has diagonal $d$ with $d^2=1^2+1^2=2$. A positive diagonal therefore has $d=\sqrt2$. A side length $s$ gives diagonal $s\sqrt2$ by scaling. This explains what the approximation measures. It does not prove that the tablet's maker used the same proof, nor does it identify every mark on the tablet without the epigraphic reading. The [CDLI artifact record](https://cdli.earth/artifacts/255048?direction=asc&sort=created) explicitly retains archaeological uncertainty about provenance; a numerical decoding must not silently become a complete social history.

The square-diagonal example also illustrates approximate versus exact claims. The sexagesimal string is a finite rational number, whereas $\sqrt2$ is irrational in our present number system. A finite string cannot equal it exactly. Yet multiplying the displayed ratio by a side length gives a practical approximation whose error scales with the side. If the side is $10$, the absolute diagonal error is ten times the unit-side error. The calculation is a modern error analysis, not an attested ancient error bound. It helps us understand what the recorded precision can do without assigning the source a theory it does not state.

## What survives and what does not

The Rhind object and YBC 7289 are not the same sort of record. The papyrus problem comes to us through Chace's free English translation and editorial choices. The tablet is an inscribed material object described by institutional records and interpreted through a sexagesimal reading. In both cases a modern equation helps verify a numerical result. In neither case does the equation by itself establish intention, teaching sequence or priority. Our source notes identify what we can check and what remains outside the inspected evidence.

An older work may itself be a copy of earlier material. That makes its contents valuable but complicates an invention date. A museum's estimated object date is not automatically the date a procedure was first designed. The [British Museum Rhind record](https://www.britishmuseum.org/collection/object/Y_EA10058) and the [CDLI YBC 7289 record](https://cdli.earth/artifacts/255048?direction=asc&sort=created) are item-specific, which is a strength. Treat their scope literally. The label “Babylonian mathematics” should not imply that every tablet was used in every century or city, and “Egyptian mathematics” should not turn one papyrus into the total practice of a civilisation.

The three examples also resist a common progress story. Trial-and-scaling is exact for a linear relation; a geometric sum has a checkable finite structure; a diagonal approximation is deliberately inexact but remarkably close. Each solves a different task. Ranking them by how much they resemble current notation would miss the mathematics. Asking how the answer is represented, checked and used is more productive. The next chapters turn to Greek texts whose surviving form often foregrounds construction and proof, while keeping the same care about editions and historical claims.

## A final source check

For each of the three problems, write a sentence that can be audited without reading our algebra. For Problem 24, say that Chace's translated page presents a quantity-and-seventh task with target 19. For Problem 79, say that the selected page presents a finite repeated-seven list. For YBC 7289, say that the institutional artifact record and exhibition identify an interpreted square-diagonal calculation with a sexagesimal ratio. Those sentences are narrower than claims about the earliest use of algebra, an ancient geometric-series theorem or a proof of an irrationality result. Narrowness is a virtue when it keeps the explanation connected to evidence. The modern calculations then answer a second question: whether the relations identified in the witnesses make mathematical sense under stated assumptions. Historical and mathematical checks can reinforce one another without becoming the same check.

## A Plimpton 322 row and an open historical question

[Columbia University Libraries' object record for Plimpton Cuneiform 322](https://exhibitions.library.columbia.edu/items/show/10987) locates the clay tablet in its Rare Book & Manuscript Library and gives an approximate Old Babylonian date, circa 1820–1762 BCE. That catalogue is an institutional witness locator, not a line-by-line mathematical edition. For the actual row reading, [Eleanor Robson's published reassessment, *Neither Sherlock Holmes nor Babylon*](https://cdli.earth/publications/1684572) and the [Open University's transcription of row 1](https://www.open.edu/openlearn/science-maths-technology/mathematics-statistics/babylonian-mathematics/content-section-1.4.1) distinguish preserved numerals from restorations at the damaged edge. The two legible row-1 entries are sexagesimal $1,59$ and $2,49$, or $1\cdot60+59=119$ and $2\cdot60+49=169$ in decimal notation. The row's leftmost quantity is partly restored in modern transcriptions; we do not need it for this calculation.

In present notation, the difference of the two squares is $169^2-119^2=(169-119)(169+119)=50\cdot288=14{,}400=120^2$. Thus the preserved pair fits the modern right-triangle triple $(119,120,169)$, with 120 **inferred by our arithmetic**, not read as a third side written in that row. This calculation establishes a numerical relation; it does not establish that the maker used Euclid's later theorem name, trigonometric functions, or our geometric interpretation. [Columbia's exhibition interpretation](https://online-exhibitions.library.columbia.edu/exhibits/show/plimpton/mathematics/page-2) describes both the older Pythagorean-triple reading associated with Neugebauer and Sachs and Robson's case for a teaching aid involving right-triangle and reciprocal-pair problems. The tablet's precise purpose remains disputed. Label a proposed purpose as an interpretation while keeping the row arithmetic and the physical object distinct.

## Exercises

Before using a source number, identify whether it is a transcription, a translation, or a present decimal approximation. A finite Egyptian sum can be checked with exact fractions, while a Babylonian sexagesimal entry must be interpreted by its position and unit. Rounding a sexagesimal quantity early may conceal the very precision the tablet records. Likewise, a modern equation for a papyrus problem is a convenient way to verify a result but does not reproduce the scribe's procedure. The exercises ask you to retain the given quantities, compute exactly where possible, and state where a reconstruction begins. That makes an answer mathematically checkable and historically modest at the same time.

### Exercise 1
<a id="babylonian-and-egyptian-mathematics-ex-1"></a>

For the changed target 31, solve $q+q/7=31$ by trial and scaling and verify.

<details><summary>Hint 1</summary>

Use the trial 7, which gives 8.

</details>
<details><summary>Hint 2</summary>

Scale the trial by $31/8$.

</details>
<details><summary>Solution</summary>

The changed answer is $q=7(31/8)=217/8$. Its seventh is $31/8$, and their sum is $248/8=31$. This is a modern variation of Problem 24, not another claim about the papyrus.

</details>

### Exercise 2
<a id="babylonian-and-egyptian-mathematics-ex-2"></a>

Explain why the trial 7 works for Rhind 24 but cannot simply be used unchanged for $q+q^2=19$.

<details><summary>Hint 1</summary>

Ask whether scaling input scales output equally.

</details>
<details><summary>Hint 2</summary>

Compare $L(kq)$ in the linear and quadratic cases.

</details>
<details><summary>Solution</summary>

For $L(q)=q+q/7$, $L(kq)=kL(q)$. For $F(q)=q+q^2$, $F(kq)=kq+k^2q^2$, generally different from $kF(q)$. The trial-and-scaling warrant belongs to the linear relation and cannot be transferred merely because both problems have an unknown.

</details>

### Exercise 3
<a id="babylonian-and-egyptian-mathematics-ex-3"></a>

Write $19/8$ as $2+1/4+1/8$ and check the equality without decimals.

<details><summary>Hint 1</summary>

Use denominator eight.

</details>
<details><summary>Hint 2</summary>

Convert each part to eighths.

</details>
<details><summary>Solution</summary>

The sum is $16/8+2/8+1/8=19/8$. A unit-fraction decomposition is an exact rational identity; whether a particular historical page presents this exact decomposition is a separate source question.

</details>

### Exercise 4
<a id="babylonian-and-egyptian-mathematics-ex-4"></a>

Find the first four partial totals in the sevenfold list of Rhind 79.

<details><summary>Hint 1</summary>

Add one new term at a time.

</details>
<details><summary>Hint 2</summary>

Use terms 7, 49, 343 and 2401.

</details>
<details><summary>Solution</summary>

The partial totals are 7, 56, 399 and 2800. Adding the fifth term 16807 gives 19607. Partial totals localise an arithmetic error instead of treating the final number as a black box.

</details>

### Exercise 5
<a id="babylonian-and-egyptian-mathematics-ex-5"></a>

Derive the five-term geometric sum for a general $r\ne1$ and state the exceptional case.

<details><summary>Hint 1</summary>

Multiply the sum by $r$.

</details>
<details><summary>Hint 2</summary>

Subtract so interior terms cancel.

</details>
<details><summary>Solution</summary>

For $S=r+r^2+r^3+r^4+r^5$, subtraction gives $(r-1)S=r^6-r$, hence $S=(r^6-r)/(r-1)$ when $r\ne1$. At $r=1$, the original sum is 5. This modern generalisation is not a transcription of Problem 79.

</details>

### Exercise 6
<a id="babylonian-and-egyptian-mathematics-ex-6"></a>

Convert $0;20_{60}$ and $0;30_{60}$ to fractions, and check each reciprocal relation.

<details><summary>Hint 1</summary>

Divide by sixty.

</details>
<details><summary>Hint 2</summary>

Multiply by three and two respectively.

</details>
<details><summary>Solution</summary>

$0;20_{60}=20/60=1/3$, so $3(1/3)=1$. Likewise $0;30_{60}=30/60=1/2$, so $2(1/2)=1$. The semicolon is our explicit place marker, and the multiplication checks the stated modern interpretation.

</details>

### Exercise 7
<a id="babylonian-and-egyptian-mathematics-ex-7"></a>

Evaluate $1;24,51,10_{60}$ as an exact rational expression.

<details><summary>Hint 1</summary>

Use powers $60,60^2,60^3$.

</details>
<details><summary>Hint 2</summary>

Keep the integer part separate.

</details>
<details><summary>Solution</summary>

The exact rational value is $1+24/60+51/3600+10/216000$. Its decimal is about 1.414212963. The finite rational cannot be exactly $\sqrt2$, which is irrational; the displayed decimal is an approximation of the rational too.

</details>

### Exercise 8
<a id="babylonian-and-egyptian-mathematics-ex-8"></a>

For a square of side 5, use the YBC 7289 ratio to approximate the diagonal and say how the error compares with the unit-square error.

<details><summary>Hint 1</summary>

Multiply the ratio by five.

</details>
<details><summary>Hint 2</summary>

Scaling multiplies absolute error by five.

</details>
<details><summary>Solution</summary>

The approximate diagonal is $5(1;24,51,10_{60})\approx7.071064815$. The exact modern value is $5\sqrt2\approx7.071067812$. The absolute error is about $0.000002997$, five times the unit-side error. This is our error analysis, not an attested tablet bound.

</details>

### Exercise 9
<a id="babylonian-and-egyptian-mathematics-ex-9"></a>

A learner says that YBC 7289 proves its writer knew a modern proof of the Pythagorean theorem. Repair the statement.

<details><summary>Hint 1</summary>

Separate a numerical relation from a proof text.

</details>
<details><summary>Hint 2</summary>

Name what the artifact record supports.

</details>
<details><summary>Solution</summary>

The tablet and its interpreted numbers support a square-diagonal calculation consistent with the ratio $\sqrt2$. The surviving numerical layout does not by itself supply a modern deductive proof or show which justification its writer used. Such a claim needs further textual evidence.

</details>

### Exercise 10
<a id="babylonian-and-egyptian-mathematics-ex-10"></a>

Compare the statuses of Chace’s Rhind 24 page and the CDLI YBC 7289 record as evidence.

<details><summary>Hint 1</summary>

Identify edition versus artifact record.

</details>
<details><summary>Hint 2</summary>

Say what mediation remains.

</details>
<details><summary>Solution</summary>

Chace’s page is a 1927 edited English free translation of a papyrus problem; its wording is mediated by translation and editorial choices. CDLI identifies a physical cuneiform artifact and reports a scholarly mathematical reading; the reading also requires interpretation. Both permit bounded reconstruction, neither automatically supplies direct access to an original author’s intention.

</details>

## Summary

Egyptian and Babylonian witnesses preserve varied procedures, tables and approximations. The selected Rhind problems yield exact checks through scaling and finite addition; YBC 7289 supports a close finite diagonal ratio. Plimpton 322 row 1 gives a preserved sexagesimal pair whose inferred third number forms a right-triangle triple, while the tablet's purpose remains debated. Modern algebra explains these results while object records and edition notes limit claims about authorship, dating and original reasoning. The next chapter studies Greek mathematical sources and the movement from named figures to surviving proof texts.
