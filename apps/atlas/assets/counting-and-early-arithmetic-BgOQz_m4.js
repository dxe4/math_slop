var e=`---
parent_id: book-history-of-mathematics
chapter_id: counting-and-early-arithmetic
title: "Counting and Early Arithmetic"
level: undergraduate
license: CC BY-SA 4.0
---

# Counting and Early Arithmetic

A number can count objects, label a position, measure a magnitude, record a debt, or give a place in a calendar. A mark's value depends on the system and the task. Before asking which people “invented numbers”, ask what a particular surviving record counted and how its marks were read. This chapter compares additive and positional representation, the use of grouping, and three attested problems. The aim is to see how a representation makes certain checks easy while leaving a historical source in its own setting.

The sources are deliberately unlike. The [British Museum's Rhind papyrus record](https://www.britishmuseum.org/collection/object/Y_EA10058) and Chace's [Problem 79 translation](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/128) show a repeated-seven enumeration. The [Smithsonian National Museum of the American Indian's Living Maya Time resource](https://maya.nmai.si.edu/maya-sun/maya-math-game) documents dot, bar and shell notation in a living cultural frame. The [Mathematical Association of America's source study of the *Nine Chapters*](https://old.maa.org/node/1635411) identifies its edited translation and problem tradition. These do not form an origin chain. The comparison is a set of questions asked of distinct witnesses.

## Grouping makes a quantity manageable

If we write thirty-seven as three groups of ten and seven single units, we have chosen a base-ten decomposition. The equality $37=3(10)+7$ is independent of our written digits. A tally would express it through marks and groups. An additive sign system would use signs with fixed values and combine them; a positional system would let place determine a sign's weight. The [British Museum's counting resource](https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt/counting-ancient-egypt-challenge) shows Egyptian signs for powers of ten. The keyboard strokes used in a modern exercise are approximations, not hieroglyphic transcription.

Place value is a rule for evaluating a string. In base $b>1$, the digits $d_k\\cdots d_0$ denote $\\sum_{j=0}^{k}d_jb^j$, with $0\\le d_j<b$. This is a modern definition; it gives us a way to compare representations. In ordinary decimal, $307$ means three hundreds, no tens and seven ones. The zero preserves the empty tens position. Without a convention for absence, the same signs could be ambiguous. A placeholder and a number used in arithmetic may have related but distinct roles; the history of zero cannot be told from one glyph alone.

Maya numeration, as presented by the [Smithsonian's Living Maya Time project](https://maya.nmai.si.edu/maya-sun/maya-math-game), uses dots for ones, bars for fives and a shell-like zero sign. Its base-twenty grouping and calendar uses demand attention to context. A modern classroom expression such as $2(20)+3=43$ teaches the positional principle; it is not an inscription we discovered. In some calendar settings the higher place weights follow a special sequence, so a bare instruction to “convert a Maya number” is incomplete unless it specifies which convention is being used. The [MAA discussion of Maya numeration and uniqueness](https://old.maa.org/press/periodicals/convergence/when-a-number-system-loses-uniqueness-the-case-of-the-maya-the-mayan-number-system) makes that caution explicit.

Mesopotamian place-value calculation grouped by sixty. The [MAA's Old Babylonian tablet study](https://old.maa.org/press/periodicals/convergence/mathematical-treasures-old-babylonian-tablets) describes reciprocal tables and division by multiplying by a reciprocal. In our notation $1;30_{60}$ is $1+30/60=3/2$ if the semicolon marks the unit position; $0;30_{60}=1/2$. The semicolon and subscript are modern explanatory marks. The exact place of a number can depend on context, especially when a historical witness lacks our explicit separator. The fact that sixty divides evenly by two, three, four and five makes many common fractions short in sexagesimal form; it does not mean every fraction terminates. For example $1/7$ does not acquire a finite base-sixty expression just because sixty is composite.

## The difference between a list and a rule

Counting repeated groups may be expressed as a list, a table, a recurrence or a closed formula. Each gives a different way to check an answer. A list displays individual cases. A recurrence tells how to move from one case to the next. A closed formula may make a distant case quick to calculate after it has been justified. Historians should not silently replace a listed finite calculation by a claim that its author possessed a modern general formula.

This distinction matters for Chace's [Rhind Problem 79](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/128). The five repeated-seven entries add to a total, and the visible list invites a geometric-series calculation. Yet a modern formula for all ratios and lengths is ours unless the particular witness states it. Chace's [editorial discussion](https://en.wikisource.org/wiki/Page:The_Rhind_Mathematical_Papyrus,_Volume_I.pdf/65) identifies his English presentation as a free translation with interventions. Keep the recorded calculation and its modern generalization in different columns.

## Worked example 1: the five sevens in Rhind Problem 79

The cited Chace translation of Problem 79 presents five successively sevenfold counts. In modern notation they are $7,49,343,2401,16807$. Add them in stages: $7+49=56$, then $56+343=399$, then $399+2401=2800$, then $2800+16807=19607$. A second modern check multiplies $7(1+7+49+343+2401)=7(2801)=19607$. This is an exact finite calculation associated with the attested problem. It does not turn the distinct things counted in the source into one homogeneous physical substance.

For a modern extension let $S=r+r^2+\\cdots+r^5$. Multiplying by $r$ and subtracting yields $(r-1)S=r^6-r$. If $r\\ne1$, then $S=(r^6-r)/(r-1)$; if $r=1$, the original sum has five terms and equals 5. The proof shows why the formula works. Calling this symbolic derivation a translation of the papyrus would be misleading. It is a mathematical reconstruction that exposes a pattern in a finite list.

## Worked example 2: millet and hulled millet in the *Nine Chapters*

An [MAA study of the *Nine Chapters*, drawing on the Shen Kangshen and collaborators' edited translation](https://old.maa.org/sites/default/files/images/upload_library/46/HOMSIGMAA/2021-Megan%20Ferguson.pdf), gives a Chapter 2 problem: one *dou* of millet yields six *sheng* of hulled millet. Its “how much?” question asks for a conversion by a stated rate. In modern units one *dou* is ten *sheng*, so ten *sheng* of the input produces six *sheng* of the output, a rate of $6/10=3/5$ by volume under the problem's convention. If the input is two *dou*, our proportional extension gives $2(6)=12$ *sheng* of hulled millet. To check, divide by two and recover the given one-*dou* case. We have changed the input for teaching; the source problem itself uses one *dou*.

A rate is meaningful only with units. “Six” alone is not an answer to a question about *sheng*. A modern decimal fraction can express the rate, but the record's operation may be organised as a rule of three with named quantities. Comparing its structure to an equation is useful; claiming that its writer used our equation is not. The [MAA's source overview](https://old.maa.org/node/1635411) also warns that the *Nine Chapters* accumulated layers and later commentary, notably Liu Hui's. A citation to a modern edited translation is not a dated autograph of a single ancient author.

## Worked example 3: the rabbit count in *Liber abaci*

The [MacTutor biography of Leonardo of Pisa](https://mathshistory.st-andrews.ac.uk/Biographies/Fibonacci/) identifies the rabbit problem in *Liber abaci*, published in 1202, and describes the assumption that each mature pair produces a new pair each month while young pairs become productive later. We use the problem as an example of recurrence, not as evidence that real rabbit populations behave this way. Let $R_n$ count pairs at successive monthly stages with the usual convention $R_1=R_2=1$. New pairs in month $n$ are produced by the pairs already mature, represented in this model by $R_{n-2}$; the old pairs number $R_{n-1}$. Thus $R_n=R_{n-1}+R_{n-2}$ for $n\\ge3$. The next counts are $2,3,5,8,13$.

A table checks the rule locally: from $3$ and $5$ pairs the next count is $8$, then from $5$ and $8$ it is $13$. The recurrence does not by itself answer every biological question, because its starting convention, mortality and maturation assumptions are idealised. MacTutor notes that the displayed sequence convention in the historical work differs at the first term. This small indexing difference shows why we should specify $R_1$ and $R_2$ instead of saying only “the Fibonacci sequence.” The problem belongs to a much later setting than the papyrus and the *Nine Chapters*; placing it here compares ways of counting rather than asserting a direct historical succession.

## What a notation preserves and loses

Our base notation preserves numerical value if the base and place weights are specified. It may lose the layout, material action and unit names that made the historical calculation legible. Turning the *Nine Chapters* conversion into a bare fraction hides the difference between millet and hulled millet. Turning a list of sevenfold items into a geometric series treats their distinct nouns as one algebraic variable. Turning the rabbits into $R_n$ makes the recurrence transparent but suppresses the story's maturation convention unless we state it separately. These are useful transformations when the loss is acknowledged.

A zero deserves particular care. The [Bodleian Libraries' 2017 announcement about the Bakhshali manuscript](https://glam.web.ox.ac.uk/node/218481) reported radiocarbon results for birch bark; a [peer-reviewed challenge](https://doi.org/10.18732/H2XT07) and Oxford's [later report on five folios](https://ora.ox.ac.uk/objects/uuid%3A5a6d1dd7-f20c-4209-adb6-33849f5b08f4) show why a bark sample's age, a written mark's function and a work's composition date must not be collapsed. The relevant question is what a mark does in its place, not which culture wins a race to a modern symbol. Different forms of zero can arise in different practices, and the surviving evidence is uneven.

Arithmetic also has social settings. Records of fields, exchange, calendars, teaching and games call for different units and checks. A representation can travel through institutions, but a similarity of digits is not enough to establish an exchange route. The [Smithsonian project](https://maya.nmai.si.edu/maya-sun/maya-math-game) is especially useful because it treats Maya knowledge as living, with contemporary interpreters, rather than as an anonymous step on a ladder toward decimal notation. The [MAA source study of Babylonian tablets](https://old.maa.org/press/periodicals/convergence/mathematical-treasures-old-babylonian-tablets) similarly presents physical tablets as particular records, not as a universal “Babylonian method.”

The exercises ask you to calculate and then state the scope of your claim. A correct conversion without a base, unit or witness is incomplete. A source-aware answer states what was attested, what was changed for practice, and why a numerical pattern warrants an algebraic explanation without proving a route of transmission.

## Exercises

### Exercise 1
<a id="counting-and-early-arithmetic-ex-1"></a>

Write 407 in decimal place-value form and explain what its zero does.

<details><summary>Hint 1</summary>

Name hundreds, tens and ones.

</details>
<details><summary>Hint 2</summary>

The middle place contributes no tens.

</details>
<details><summary>Solution</summary>

The value is $4(100)+0(10)+7=407$. The zero holds the tens place so that 407 is distinguishable from 47. This is a modern positional decomposition, not a claim that every historical zero sign had the same role.

</details>

### Exercise 2
<a id="counting-and-early-arithmetic-ex-2"></a>

Evaluate $2;15_{60}$ and $0;15_{60}$ as rational numbers, with the semicolon fixing the unit place.

<details><summary>Hint 1</summary>

A sexagesimal fraction is divided by 60.

</details>
<details><summary>Hint 2</summary>

The leading 2 changes the whole-number part.

</details>
<details><summary>Solution</summary>

The first is $2+15/60=2+1/4=9/4$. The second is $15/60=1/4$. Without the position convention, the same written digit groups would not determine these values.

</details>

### Exercise 3
<a id="counting-and-early-arithmetic-ex-3"></a>

Show why $1/8$ terminates in base sixty and $1/7$ does not.

<details><summary>Hint 1</summary>

Factor the base.

</details>
<details><summary>Hint 2</summary>

A terminating fraction has denominator dividing a power of the base after reduction.

</details>
<details><summary>Solution</summary>

Since $60=2^2\\cdot3\\cdot5$, the denominator 8 divides $60^2$ and $1/8=0;7,30_{60}$. No power of 60 is divisible by 7, so a reduced $1/7$ cannot have a finite sexagesimal expansion.

</details>

### Exercise 4
<a id="counting-and-early-arithmetic-ex-4"></a>

Recompute the Rhind 79 modern five-term total by pairing a multiplication check with addition.

<details><summary>Hint 1</summary>

Write the five powers of seven.

</details>
<details><summary>Hint 2</summary>

Factor out one seven.

</details>
<details><summary>Solution</summary>

The successive terms are $7,49,343,2401,16807$ and sum to 19607. Factoring gives $7(1+7+49+343+2401)=7(2801)=19607$. The factorization is our independent check of the attested finite list.

</details>

### Exercise 5
<a id="counting-and-early-arithmetic-ex-5"></a>

For the changed teaching ratio $r=3$, sum $r+r^2+r^3+r^4+r^5$ and compare with the formula.

<details><summary>Hint 1</summary>

List the five terms.

</details>
<details><summary>Hint 2</summary>

Check the denominator $r-1$.

</details>
<details><summary>Solution</summary>

The terms $3+9+27+81+243$ sum to 363. The formula gives $(3^6-3)/(3-1)=726/2=363$. This is a modern variation of the five-term pattern, not another Rhind reading.

</details>

### Exercise 6
<a id="counting-and-early-arithmetic-ex-6"></a>

Explain why substituting $r=1$ directly into $(r^6-r)/(r-1)$ is invalid and find the sum.

<details><summary>Hint 1</summary>

Inspect the denominator.

</details>
<details><summary>Hint 2</summary>

Return to the original five terms.

</details>
<details><summary>Solution</summary>

At $r=1$ the quotient is $0/0$ and undefined. The original sum is $1+1+1+1+1=5$. A formula derived by division under $r\\ne1$ must keep that hypothesis.

</details>

### Exercise 7
<a id="counting-and-early-arithmetic-ex-7"></a>

Using the cited millet conversion, how many sheng of hulled millet correspond in the same model to three dou of input?

<details><summary>Hint 1</summary>

One dou gives six sheng.

</details>
<details><summary>Hint 2</summary>

Scale both quantities by three.

</details>
<details><summary>Solution</summary>

The proportional extension gives $3(6)=18$ sheng of hulled millet. The historical cited problem states the one-dou case; the three-dou input is our changed exercise, which assumes the same conversion rate.

</details>

### Exercise 8
<a id="counting-and-early-arithmetic-ex-8"></a>

The rabbit recurrence starts $1,1$. Compute the next six terms and say what the rule does not model.

<details><summary>Hint 1</summary>

Add the previous two terms.

</details>
<details><summary>Hint 2</summary>

Check each new pair against the two immediately before it.

</details>
<details><summary>Solution</summary>

The next six terms are $2,3,5,8,13,21$. The recurrence models the stated idealized breeding and maturation assumptions. It includes no deaths, finite resources or measured birth variability, so it is not a population forecast.

</details>

### Exercise 9
<a id="counting-and-early-arithmetic-ex-9"></a>

A museum record dates a physical tablet. A student calls that the invention date of its numeral system. Repair the sentence.

<details><summary>Hint 1</summary>

Distinguish a surviving witness from an origin.

</details>
<details><summary>Hint 2</summary>

Ask for earlier comparison material.

</details>
<details><summary>Solution</summary>

The record supplies a date or date range for that tablet as a surviving witness. It does not establish when its numeral conventions first appeared. An origin claim would require earlier records and a warranted argument connecting them.

</details>

### Exercise 10
<a id="counting-and-early-arithmetic-ex-10"></a>

Compare the Rhind list and the rabbit recurrence without claiming that one inspired the other.

<details><summary>Hint 1</summary>

Name their mathematical forms.

</details>
<details><summary>Hint 2</summary>

State what transmission evidence is absent.

</details>
<details><summary>Solution</summary>

Rhind Problem 79 contains a finite repeated-seven list; the *Liber abaci* rabbit problem is represented here by a recurrence adding the two previous counts. Both support patterned counting, but their rules and settings differ. A direct influence claim needs a documented route and textual evidence beyond the fact that both produce sequences.

</details>

## Summary

Grouping, units and place-value rules give marks their numerical meaning. The attested sevenfold list, millet conversion and rabbit problem support different operations and checks; our modern formulas illuminate each while staying labelled as reconstructions. The next chapter studies Egyptian and Babylonian evidence more closely, with attention to calculation on papyrus and clay.
`;export{e as default};