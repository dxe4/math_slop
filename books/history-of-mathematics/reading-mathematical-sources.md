
# What Mathematics and Its History Are

A mathematical answer can outlive the language, material and purpose in which it was first written. The same answer may later be given by a different operation, for a different audience, with a different explanation of why it is valid. To study this change, we need to do mathematics and to read evidence. Neither activity can replace the other. A correct modern solution does not tell us when a method was invented. A dated manuscript does not prove that every calculation in it was new when its copyist wrote it.

This chapter asks how to turn a surviving problem into a careful historical account. Its three worked examples come from quite different witnesses: a problem in the Rhind Mathematical Papyrus as mediated by Arnold Buffum Chace's 1927 translation; Proposition I.1 of Euclid's *Elements* as presented in two nineteenth and twentieth century English editions; and an interrupted game in William Browne's 1714 English translation of Christiaan Huygens's work on chance. The sources and editorial layers matter as much as the arithmetic. Each example is small enough to solve with school mathematics. The question after solving it is what that solution permits us to claim.

## What counts as a source?

A **witness** is a particular object or edition that can actually be inspected. It might be an ink manuscript, a printed book, an inscription, a photograph of a tablet, or a digital transcription of a printed page. A witness has a material and editorial history. When a digital page shows a 1927 translation of an older papyrus, the printed page is direct evidence for what the translator published. It is mediated evidence for what the ancient text said. A catalogue date for the physical papyrus and a publication date for the translator answer different questions. The [British Museum's object record for the Rhind Mathematical Papyrus](https://www.britishmuseum.org/collection/object/Y_EA10058) identifies the object and its contents; Chace's [Problem 24 on printed page 67](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/83) is the English witness we use for the arithmetic.

A **translation** is an argument about words as well as a service to readers. A translator chooses terms, sentence boundaries and sometimes modern mathematical symbols. A printed footnote may come from the translator rather than the earlier author. If a historical passage speaks of a square and roots, our equation may be a useful translation of its numerical relation. It does not prove that the earlier writer manipulated signed algebraic unknowns. A responsible account names the edition, translator and passage and identifies what was supplied by the modern reader.

A **reconstruction** supplies mathematical operations in present notation. Let us label a source observation W, a translator or editor's intervention T, our modern mathematical reconstruction M, and a historical inference I. These labels are working tools, not an assertion that history can always be divided mechanically into four boxes. For instance, an English sentence may blend a translator's choices with a plausible rendering of an older procedure. We can still say precisely which part of our explanation we calculated ourselves. The existing [Historical Mathematics core course](../../course-texts/atlas-historical-mathematics-core.md) develops this four-part source-card practice; this chapter applies it to a new book route without replacing that course.

A **historical inference** is a conclusion about practice, transmission, readership or change. Inference needs evidence proportionate to its scope. If two sources give the same area formula, we may compare the formulas. We cannot conclude that one author copied the other merely from that equality. Many routes can produce the same result, and missing sources make a neat line of transmission particularly dangerous. The question is not simply whether a claim is possible, but what the inspected witness actually supports.

## A problem is more than its answer

A problem has an object, permitted operations, a requested result and a way of checking that result. In a modern algebra class, an equation may ask for every real solution. A length problem may ask for a positive magnitude only. These are different tasks even if they lead to the same positive number. The domain belongs in the statement. Later chapters show that a geometric construction may certify existence, while a symbolic equation may list roots that do not correspond to the permitted figures. A history that replaces all earlier questions by one present equation hides this change.

The physical setting can also change the object. A table of reciprocals is not merely a list of decimal approximations in unfamiliar digits. A computational table may make a class of divisions easy, while a modern calculator invites a different sequence of operations. A diagram with marked equal radii may carry steps that a line of algebra suppresses. A game with an agreed fair stake asks for a decision under assumptions, not a measured rate of wins. We will therefore reconstruct each problem while keeping its mathematical and documentary boundaries visible.

## Worked example 1: an Egyptian quantity and its seventh

Chace's English free translation of [Rhind Problem 24](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/83) asks for a quantity which, together with its seventh, makes 19. The [British Museum record](https://www.britishmuseum.org/collection/object/Y_EA10058) establishes the older papyrus as a surviving mathematical object; Chace's stated editorial account on [printed page 49](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/65) reminds us that this English presentation is an edited layer. We do not claim to have read the hieratic.

In modern notation put $q+q/7=19$. A convenient trial quantity is 7: it gives $7+1=8$. To make the output 19, scale by $19/8$. The desired quantity is therefore $q=7(19/8)=133/8=16+5/8$. Its seventh is $19/8=2+3/8$, and adding gives $152/8=19$. This is a complete arithmetic check. It explains why scaling works: the rule $L(q)=q+q/7$ satisfies $L(kq)=kL(q)$ for every number $k$ in our modern domain. The symbol $L$ and the word “linear” are ours. The source problem warrants the particular calculation; a claim that its scribe defined linear operators would require evidence we do not have.

Notice two historical virtues of the check. First, it returns to the question's stated relation instead of merely accepting a plausible number. Second, it exposes the difference between the trial, the scaling and the answer. If the target were 23, the method would still work; that changed target would be our exercise, not another discovered papyrus problem. Keeping the changed task distinct from the attested problem prevents a useful teaching variation from becoming a false historical citation.

## Worked example 2: constructing an equilateral triangle

Euclid's *Elements* I.1 asks for an equilateral triangle on a given finite straight line. We use [Lardner's 1855 edition, I.1 §§57–58](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookIProp01_Lardner1855.php) and [Heath's 1908 edition, I.1](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php). These are two English presentations, not direct access to an original Greek page. [MacTutor's account of Euclid](https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/) explains why secure biographical detail is scarce; the proposition, rather than a legend about its author, is our mathematical evidence.

Let the base endpoints be $A$ and $B$, with $AB=d>0$. Draw a circle centred at $A$ with radius $AB$, and a circle centred at $B$ with the same radius. Choose an intersection $C$ off the base. Then $AC=AB$ because both are radii of the first circle, and $BC=BA=AB$ because both are radii of the second. All three sides are equal. That proves the required property *provided the common point exists*. Lardner's local discussion makes the intersection question explicit; Heath's selected I.1 presentation moves directly through the common point. This is a difference in the printed passages. It does not establish a lineage between the editions or a verdict on teaching effectiveness.

Our modern coordinate check places $A=(0,0)$, $B=(d,0)$. Equal-radius intersection equations give $x=d/2$ and $y^2=d^2-d^2/4=3d^2/4$. Thus $C=(d/2,\sqrt3d/2)$ is one noncollinear choice. This proves existence in a modern coordinate setting. It is not a hidden line of Euclid's selected proof. The exercise illustrates how a reconstruction can repair a logical question for us without being misattributed to the older text.

## Worked example 3: the value of an interrupted game

In [William Browne's 1714 English translation of Huygens, Proposition IV, pages 7–8](https://web.universiteitleiden.nl/fsw/verduin/stathist/huygens/huyg1714p.pdf), a first-to-three game is stopped when one player is ahead two wins to one. The text concerns the value of each player's chance in the unfinished contest. Its fairness assumptions are part of the problem; an actual player's skill cannot be inferred from the arithmetic. The original work was Latin, while this selected problem is read through Browne's later English edition.

Call the leading player A and the total stake $S$. A needs one more win; B needs two. If A wins the next equally likely round, A receives $S$. If B wins, the position is tied at two wins each, and a fair final round gives A an expected value $S/2$. The value before the next round is therefore $(S+S/2)/2=3S/4$, leaving $S/4$ for B. Equivalently imagine two future fair rounds even if the game ends early: AA, AB and BA favour A, while BB favours B. Three of four equally likely strings favour A. This finite enumeration is our modern explanatory model for the selected historical problem. It does not claim that every reader in 1714 would have organised the possibilities in precisely this table.

The answer is not “A has won two of the three games, so receives two thirds.” Past wins describe the state; future possibilities determine the value under the stated rules. Change the chance of A winning each independent future round to $2/3$ and the result changes to $2/3+(1/3)(2/3)=8/9$. That is a modern variation, not Huygens's stated fair-game case. The ability to state and change an assumption is part of understanding both the mathematics and the historical claim.

## How to make a bounded comparison

The three examples share school mathematics but not a single ancient-to-modern ladder. Rhind 24 is a quantity relation in a papyrus reached through an edited English translation; Elements I.1 is a construction and deductive argument read through two English editions; the Huygens problem values a chance under a fair-game model. We can ask the same analytic questions of each: What is given? What operation is performed? Why is that operation permitted? What constitutes a check? Which witness carries the claim? The answers differ. That difference is the substance of the history.

A source card for any one of these should record the author or attributed author, title, edition actually consulted, locator, language and translator, mathematical object, reconstruction and remaining uncertainty. If a later source says an earlier work had a particular audience, record that the *later* source says so. Evidence of publication is not automatically evidence of classroom use. Similarly, a catalogue label is not proof that every page of a manuscript has been deciphered. A small, precise statement often does more historical work than a large unsupported assertion.

Historical mathematical notation is also a choice. We use $q$, $d$ and $S$ because these symbols make relationships easy to inspect. That use is transparent when we call it M. Hiding modern notation inside quotation marks, or saying that an old author “really meant” the whole modern theory, would erase the question of what changed. A reconstruction can be more general than its source; a source can also have a context or diagram our reconstruction fails to preserve. Study moves in both directions.

Finally, source links can fail or move. A stable title, author, edition and printed locator allow a reader to seek another copy without confusing a scan index with a printed page. A citation is more than a hyperlink. The rest of the book follows this discipline: each chapter gives historical problems that can be solved, identifies the evidence used, and states what the calculation cannot decide alone.

## Exercises

### Exercise 1
<a id="reading-mathematical-sources-ex-1"></a>

Solve the modern variation $q+q/7=23$ and verify it.

<details><summary>Hint 1</summary>

Try 7 as a quantity.

</details>
<details><summary>Hint 2</summary>

Its output is 8; scale by $23/8$.

</details>
<details><summary>Solution</summary>

The answer is $q=7(23/8)=161/8$. Its seventh is $23/8$, and their sum is $184/8=23$. The altered target is a new teaching exercise, not an additional reading of Rhind Problem 24.

</details>

### Exercise 2
<a id="reading-mathematical-sources-ex-2"></a>

A learner says the British Museum object date is the date on which Rhind Problem 24 was invented. Identify the missing evidence.

<details><summary>Hint 1</summary>

Separate object from composition.

</details>
<details><summary>Hint 2</summary>

Ask what an older exemplar or prior practice might show.

</details>
<details><summary>Solution</summary>

A date assigned to the surviving object bounds evidence for that object. It does not date the first invention of its procedure. Establishing invention would require a wider comparison of earlier witnesses and a defensible account of authorship and transmission; the object record alone supplies neither.

</details>

### Exercise 3
<a id="reading-mathematical-sources-ex-3"></a>

For Euclid I.1, suppose both circles have radius 4 while the base has length 6. Which equality remains and which required conclusion fails?

<details><summary>Hint 1</summary>

List the radii.

</details>
<details><summary>Hint 2</summary>

Compare each radius with the base.

</details>
<details><summary>Solution</summary>

The common point, if chosen, satisfies $AC=BC=4$ because these are radii. But $AB=6$, so the triangle is isosceles, not equilateral. The original construction makes each radius equal to the base; that hypothesis is essential to its conclusion.

</details>

### Exercise 4
<a id="reading-mathematical-sources-ex-4"></a>

Use modern coordinates to find the two equal-radius intersections when the base length and radius are both 2.

<details><summary>Hint 1</summary>

Place the base on the horizontal axis.

</details>
<details><summary>Hint 2</summary>

Subtract the circle equations.

</details>
<details><summary>Solution</summary>

With centres $(0,0)$ and $(2,0)$, subtraction gives $x=1$. Then $1+y^2=4$, so $y=\pm\sqrt3$. Both intersections produce an equilateral triangle. This coordinate certificate is our reconstruction and is not a line in either selected English proposition.

</details>

### Exercise 5
<a id="reading-mathematical-sources-ex-5"></a>

If the fair interrupted game has total stake 80, give both shares and explain why the score ratio is irrelevant.

<details><summary>Hint 1</summary>

Use the future-round value.

</details>
<details><summary>Hint 2</summary>

A receives three quarters.

</details>
<details><summary>Solution</summary>

A receives $3(80)/4=60$ and B receives 20. The score 2–1 determines that A needs one further win and B two; dividing the stake in the past-win ratio 2:1 would ignore the four equally likely future round strings in the stated model.

</details>

### Exercise 6
<a id="reading-mathematical-sources-ex-6"></a>

In the same game change the future probability of an A win to $2/3$, independently each round. Find the share of a stake of 90.

<details><summary>Hint 1</summary>

A can win immediately or after one loss.

</details>
<details><summary>Hint 2</summary>

Add $2/3+(1/3)(2/3)$.

</details>
<details><summary>Solution</summary>

The probability that A ultimately wins is $8/9$. Its share is $90(8/9)=80$; B receives 10. This is a changed modern model. It cannot be attributed to Browne’s printed fair-chance example without a corresponding passage.

</details>

### Exercise 7
<a id="reading-mathematical-sources-ex-7"></a>

Classify the statement “our equation $q+q/7=19$ captures one relation in Chace’s Problem 24” as W, T, M or I, explaining mixed layers.

<details><summary>Hint 1</summary>

The equation uses our symbols.

</details>
<details><summary>Hint 2</summary>

The numbered problem is a translated witness.

</details>
<details><summary>Solution</summary>

The displayed equation is M, a modern reconstruction of a relation presented in the English W of Chace’s Problem 24. Chace’s choice of English phrasing is T. The statement makes no independent claim about the papyrus copyist’s symbols or a route of transmission.

</details>

### Exercise 8
<a id="reading-mathematical-sources-ex-8"></a>

Two editions of Elements I.1 discuss circle intersection differently. Does this alone show which edition taught learners better? Give a bounded alternative claim.

<details><summary>Hint 1</summary>

Keep presentation and reception separate.

</details>
<details><summary>Hint 2</summary>

Name the exact local passages.

</details>
<details><summary>Solution</summary>

No. The inspected passages show a local presentation difference: Lardner §§57–58 explicitly discusses intersection, while Heath’s selected I.1 moves through the chosen point without that same extended local paragraph. Teaching effectiveness would require evidence about readers and instruction, not merely printed wording.

</details>

### Exercise 9
<a id="reading-mathematical-sources-ex-9"></a>

Write a four-field source card for the Huygens problem used here: selected witness, translator, mathematical question and limitation.

<details><summary>Hint 1</summary>

Start from the cited 1714 title.

</details>
<details><summary>Hint 2</summary>

Distinguish the Latin work from the English page.

</details>
<details><summary>Solution</summary>

Selected witness: Browne’s 1714 English *Value of All Chances in Games of Fortune*, Proposition IV, printed pp. 7–8, in the Leiden digital reprint. Translator: William Browne. Question: value a stake in a fair interrupted first-to-three game at 2–1. Limitation: this is not an inspected 1657 Latin printing or evidence that every historical game was fair.

</details>

### Exercise 10
<a id="reading-mathematical-sources-ex-10"></a>

A student finds the same answer 3/4 in another historical game problem and declares a direct borrowing from Huygens. Repair the claim.

<details><summary>Hint 1</summary>

Separate numerical agreement from transmission.

</details>
<details><summary>Hint 2</summary>

Name the evidence needed for a route.

</details>
<details><summary>Solution</summary>

The two selected problems may be compared because their values agree under stated hypotheses. A borrowing claim additionally needs chronology, a plausible access or communication route, and textual or contextual evidence that one account used the other. Without those, the answer $3/4$ is mathematical agreement only.

</details>

## Summary

A historical problem is a mathematical task carried by a particular witness. Record the witness and its editorial layers, solve the stated problem with its domain, and label any modern reconstruction. The three worked cases show why a correct answer, a proof of a construction and a valuation under fairness have different warrants. The next chapter studies counting and numeration as practices that make certain calculations and records possible.
