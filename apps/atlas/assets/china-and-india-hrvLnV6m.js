var e=`---
parent_id: book-history-of-mathematics
chapter_id: china-and-india
title: "China and India"
level: undergraduate
license: CC BY-SA 4.0
---

# China and India

A comparison of China and India should not treat two vast regions as two single mathematical authors. We can instead identify a small number of texts and questions. The *Nine Chapters on Mathematical Procedures* presents calculation with quantities, proportions, surveys and systems; later commentaries explain and extend its procedures. South Asian sources include work on numerals, negative quantities, astronomy and series, with different survival and dating problems. This chapter uses school algebra to reconstruct three attested tasks and gives each source its own limits. The earlier [Mathematics Across Worlds course](../../courses/mathematics-across-worlds.md) remains available as contextual preparation.

The [MAA overview of the *Nine Chapters*](https://old.maa.org/node/1635411) explains that its original author and exact composition date are unknown, while Liu Hui's later commentary provides explanations of procedures. The [MAA's teaching study of the work](https://old.maa.org/node/863324) emphasises the algorithmic organisation and the later life of the text. These are source studies of an edited mathematical tradition, not a warrant to assign all its problems to one named inventor. For South Asia, [MacTutor's Brahmagupta account](https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/) and the [Cambridge source study of Kerala series](https://www.cambridge.org/core/books/abs/sources-in-the-development-of-mathematics/power-series-in-fifteenthcentury-kerala/4B3570D4505BBADE0567CB23264C8C0A) give distinct windows. We cite the particular one used for each claim.

## Rates, units and an edited problem

A ratio problem is not just cross multiplication. Units determine which quantities may be compared. In the *Nine Chapters*, grain, lacquer, silk and transport appear in problems whose numerical data support procedural calculation. The [MAA's first-six-chapters selection](https://old.maa.org/node/1635457), drawing on Shen Kangshen and colleagues' edited translation, includes a lacquer purchase: 5785 coins buy one *hu*, six *dou* and seven and two-thirds *sheng* of lacquer; find the price of one *dou*. We can solve only after stating unit conversions. In the selected educational source, one *hu* is ten *dou* and one *dou* is ten *sheng*. Thus the volume is $10+6+(7+2/3)/10=503/30$ *dou*.

Our modern price per *dou* is $5785/(503/30)=173550/503=345+15/503$ coins per *dou*. Multiplying back by $503/30$ gives exactly 5785 coins. The [MAA's published challenge solutions](https://old.maa.org/sites/default/files/images/upload_library/46/Schwartz_Modules/Schwartz-Nine-Chapters/Nine-Chapters-Challenge-Solutions-RKS.pdf) provide an independent numerical check and show why a rounded 345 is incomplete. The coin and volume units matter: $5785/503$ without the factor 30 would answer a different question. Our rational notation is a reconstruction of the selected translated problem, not a claim about the original arrangement of counting rods.

## Worked example 1: the lacquer purchase

Start with the [attested lacquer problem in the MAA selection](https://old.maa.org/node/1635457). Convert the purchased volume to *sheng*: $100+60+7+2/3=167+2/3=503/3$ *sheng*. Divide the price by that volume to find coins per *sheng*: $5785/(503/3)=17355/503$. Multiply by ten *sheng* per *dou* to obtain $173550/503=345+15/503$ coins per *dou*. Check: the volume in *dou* is $503/30$, so $(173550/503)(503/30)=5785$. Both unit paths agree. This is a useful error detector, not proof that the source used exactly our fraction notation.

A later editor may supply unit glosses that let us calculate. Keep the selected translation and the original text's historical layers distinct. A mathematical check establishes that the quantity and unit conversion cohere within the stated interpretation. It cannot date the problem's first composition or tell us whether every user of the text bought lacquer at that rate.

## Systems as arranged quantities

The [MAA account of the *Nine Chapters*](https://old.maa.org/node/863324) describes problems in its rectangular-array chapter that correspond, in our language, to systems of simultaneous linear relations. A matrix is a helpful modern representation, but its rows and columns must be assigned a meaning before elimination makes sense. A swap of two columns may reorganise objects; a swap of two equations is a different operation. The [Mathematics Across Worlds course's Chinese section](../../courses/mathematics-across-worlds.md) develops an elementary rod-column reconstruction. It is an Euler teaching model, not a newly found ancient problem.

We can compare that model with the attested transport problem in the [MAA's first-six-chapters selection](https://old.maa.org/node/1635457): an empty cart travels 70 *li* per day and a loaded cart 50, making three round trips in five days. Let the one-way distance be $d$ *li*. Each round trip takes $d/70+d/50$ days, so three take $3d(1/70+1/50)=5$. Since $1/70+1/50=6/175$, we have $18d/175=5$, hence $d=875/18$ *li*. This is a source-tied problem solved with a modern equation. The stated rates are model assumptions; they are not a claim about every cart's actual speed.

## Worked example 2: the two-post cart problem

For the [*Nine Chapters* two-post problem in the MAA selection](https://old.maa.org/node/1635457), write the total empty travel as $3d$ and the total loaded travel as $3d$. Dividing by the respective daily rates gives $3d/70+3d/50=5$. A common denominator 350 gives $(15d+21d)/350=5$, so $36d=1750$ and $d=875/18$. Check: one round trip lasts $d(6/175)=5/3$ days, and three last five days. The check preserves units throughout: *li* divided by *li* per day gives days.

The exact fraction is preferable to a rounded decimal because the stated rates and five-day total are exact within the problem. A rounded answer can be useful for interpretation but should not replace the exact check. The reconstruction captures the numerical task; it does not assert that the ancient text wrote two reciprocal speed terms.

## Negative quantities and a boundary

[MacTutor's Brahmagupta biography](https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/) describes rules using “fortune” and “debt” language for positive and negative numbers. Such rules make sense for a change in balance: adding a debt of 7 to a fortune of 10 leaves 3 units of fortune. This classroom example is ours, illustrating the rule, not a cited numerical problem from a verse. The same account describes attempted rules involving division by zero; those do not become valid modern arithmetic merely because an important historical author stated them. Modern division by zero remains undefined in ordinary real arithmetic. Source respect includes identifying where a procedure fails under current definitions.

The [Bodleian's Bakhshali manuscript announcement](https://glam.web.ox.ac.uk/node/218481), a [peer-reviewed challenge to its interpretation](https://doi.org/10.18732/H2XT07), and Oxford's [2024 five-folio radiocarbon report](https://ora.ox.ac.uk/objects/uuid%3A5a6d1dd7-f20c-4209-adb6-33849f5b08f4) form a useful evidence comparison. Bark age, written marks, mathematical function and composition date are different questions. A dot can act as a place holder in a recorded calculation without settling when a fully developed modern zero concept arose. Competing readings must be named, not averaged into an invented precise date.

## Worked example 3: a sine approximation tradition

The [MAA primary-source teaching project on Bhāskara's sine approximation](https://old.maa.org/node/2702736) identifies a historical rational approximation to the sine on a half-turn, commonly reconstructed as $\\sin\\theta\\approx16\\theta(\\pi-\\theta)/(5\\pi^2-4\\theta(\\pi-\\theta))$ for $0\\le\\theta\\le\\pi$. Use the attested approximation at the modern illustrative angle $\\theta=\\pi/6$. The numerator becomes $16(\\pi/6)(5\\pi/6)=20\\pi^2/9$. The denominator is $5\\pi^2-4(5\\pi^2/36)=40\\pi^2/9$. Their ratio is $1/2$, equal to the modern exact sine at that angle. This check establishes agreement at one angle, not exactness at every angle.

At $\\theta=0$ the approximation gives zero. At $\\theta=\\pi/2$, numerator $4\\pi^2$ and denominator $4\\pi^2$, so it gives one. These endpoints and midpoint are useful checks. They do not explain how the historical rule was derived or how its source described angle and chord. The [Cambridge study of Kerala series](https://www.cambridge.org/core/books/abs/sources-in-the-development-of-mathematics/power-series-in-fifteenthcentury-kerala/4B3570D4505BBADE0567CB23264C8C0A) concerns later trigonometric series and warns that attributions often depend on later surviving works; it should not be collapsed into the Bhāskara formula's source or a supposed direct route to European calculus.

## Comparison without an origin contest

The Chinese and South Asian materials in this chapter solve different problems in different genres. A manual of proportional tasks and arrays, a rule in verse about signed quantities, a contested manuscript with numeral marks, and an astronomical approximation have no single common “stage.” The surviving records permit exact mathematical reconstructions and also leave uncertainties about composition, use and transmission. [UNESCO's record of living Chinese abacus calculation](https://www.unesco.org/archives/multimedia/document-3523) is a reminder that traditions can remain active rather than merely precede a later notation.

We have used more than five named sources because no one source can carry the whole comparison: the MAA *Nine Chapters* overview and problem selection, its challenge solutions, MacTutor on Brahmagupta, Oxford's Bakhshali evidence and response, the MAA sine project, Cambridge's Kerala study and UNESCO's living-practice record. Each supports a bounded claim. A similarity between an elimination method and present matrices, or between a series and a present calculus formula, is a mathematical comparison. Influence requires a separately documented route. The next chapter follows algebra and related practices in Islamic societies, where translation and institutional setting again shape what can be inferred.

## A comparison of evidence layers

The lacquer and cart tasks are accessible through a selected modern English translation reported by the MAA. The Brahmagupta rules are described through a historical biography that points to Sanskrit material; our debt example does not pretend to be a translated verse. The sine expression is treated through a teaching source study; our angle substitution belongs to this chapter. The Bakhshali date debate has a different evidential shape again, involving physical samples, palaeographic questions and claims about numerical marks. Record these access layers before comparing results. A shared present-day formula can hide a difference in genre, and a difference in genre may be exactly what explains the historical work a procedure was meant to do.

## Exercises

Check a numerical answer in the units of its problem before comparing the traditions in this chapter. The lacquer task can be computed in *sheng* or *dou*, but both paths must give the same coins-per-volume rate. The cart task combines travel times, not travel speeds; adding 70 and 50 would answer no stated question. The sine approximation can agree exactly at a few selected angles while remaining an approximation over the interval. These elementary checks keep three distinct source problems intact. They also show why a present algebraic expression is a reading tool: it can expose an error without proving that the historical text was phrased in algebraic symbols.

### Exercise 1
<a id="china-and-india-ex-1"></a>

Convert the lacquer volume to dou and verify it equals $503/30$ dou.

<details><summary>Hint 1</summary>

Use one hu as ten dou.

</details>
<details><summary>Hint 2</summary>

Convert the final sheng using ten sheng per dou.

</details>
<details><summary>Solution</summary>

The volume is $10+6+(7+2/3)/10=16+23/30=503/30$ dou. The unit conversion is part of the selected translated problem; omitting it changes the price question.

</details>

### Exercise 2
<a id="china-and-india-ex-2"></a>

Find the exact price per dou in the cited lacquer problem.

<details><summary>Hint 1</summary>

Divide coins by volume.

</details>
<details><summary>Hint 2</summary>

Multiply by the reciprocal of $503/30$.

</details>
<details><summary>Solution</summary>

$5785/(503/30)=173550/503=345+15/503$ coins per dou. Multiplication by the original volume returns 5785 coins, so the units and arithmetic check.

</details>

### Exercise 3
<a id="china-and-india-ex-3"></a>

A student rounds the lacquer answer to 345 coins per dou before checking. Explain the loss.

<details><summary>Hint 1</summary>

Multiply 345 by the exact volume.

</details>
<details><summary>Hint 2</summary>

Compare with the supplied price.

</details>
<details><summary>Solution</summary>

$345(503/30)=5784.5$, which is half a coin short of 5785. The exact answer $345+15/503$ preserves the stated data and permits an exact reverse check; early rounding loses that property.

</details>

### Exercise 4
<a id="china-and-india-ex-4"></a>

Using the same speeds, find the new one-way distance if two round trips take four days. The outbound and return distances are equal; the distance need not match the original problem.

<details><summary>Hint 1</summary>

Set $2d/70+2d/50=4$.

</details>
<details><summary>Hint 2</summary>

Use $1/70+1/50=6/175$.

</details>
<details><summary>Solution</summary>

$2d(6/175)=4$ gives $12d=700$ and $d=175/3$ li. One round trip takes two days, so two take four. These changed numbers are our teaching variation, not the attested *Nine Chapters* problem.

</details>

### Exercise 5
<a id="china-and-india-ex-5"></a>

Check the original cart answer $875/18$ li by computing each travel-time contribution.

<details><summary>Hint 1</summary>

Find unloaded and loaded times for three trips.

</details>
<details><summary>Hint 2</summary>

Add them with a common denominator.

</details>
<details><summary>Solution</summary>

Unloaded time is $3(875/18)/70=25/12$ days; loaded time is $3(875/18)/50=35/12$ days. Their sum is $60/12=5$ days, exactly the given duration.

</details>

### Exercise 6
<a id="china-and-india-ex-6"></a>

For the Bhāskara approximation in the chapter, calculate its value at $\\theta=\\pi/2$.

<details><summary>Hint 1</summary>

Compute $\\theta(\\pi-\\theta)$.

</details>
<details><summary>Hint 2</summary>

It equals $\\pi^2/4$.

</details>
<details><summary>Solution</summary>

The numerator is $16(\\pi^2/4)=4\\pi^2$ and the denominator $5\\pi^2-4(\\pi^2/4)=4\\pi^2$. The ratio is 1. Agreement at the midpoint is a check, not proof of exactness elsewhere.

</details>

### Exercise 7
<a id="china-and-india-ex-7"></a>

Distinguish the Bakhshali bark date from a composition date.

<details><summary>Hint 1</summary>

A physical support and a text can have different histories.

</details>
<details><summary>Hint 2</summary>

Name the later report and debate.

</details>
<details><summary>Solution</summary>

Radiocarbon estimates age the sampled birch bark. They do not alone date when every mathematical procedure was composed or settle whether each dot is only a placeholder. Oxford’s report and the scholarly response must be kept as different evidential claims.

</details>

### Exercise 8
<a id="china-and-india-ex-8"></a>

Why is division by zero excluded from ordinary real arithmetic even if a historical source gives a rule for it?

<details><summary>Hint 1</summary>

Use the definition of division as inverse multiplication.

</details>
<details><summary>Hint 2</summary>

Ask what number times zero gives one.

</details>
<details><summary>Solution</summary>

If $1/0$ were a real number x, then $0x=1$ would be required. But $0x=0$ for every real x. Thus ordinary real division by zero is undefined. A historical rule is evidence about a source’s mathematics, not a valid modern real-number operation.

</details>

### Exercise 9
<a id="china-and-india-ex-9"></a>

State what evidence would be needed before claiming that the *Nine Chapters* inspired a European matrix method.

<details><summary>Hint 1</summary>

Similarity of algorithms is only a comparison.

</details>
<details><summary>Hint 2</summary>

Look for a transmission route and dated witnesses.

</details>
<details><summary>Solution</summary>

One would need dated intermediaries, access or translation evidence, and a textual or institutional connection supporting influence. The fact that modern notation can represent both as elimination does not establish such a route.

</details>

### Exercise 10
<a id="china-and-india-ex-10"></a>

Compare the exact lacquer answer with the approximate sine value as kinds of result.

<details><summary>Hint 1</summary>

One is rational data under a rate model.

</details>
<details><summary>Hint 2</summary>

The other approximates a function.

</details>
<details><summary>Solution</summary>

The lacquer calculation gives an exact rational unit price from the stated numbers and unit conversions. The sine formula is a historical approximation to a function; agreement at selected angles does not make it universally exact. Each answer needs its own check and statement of scope.

</details>

## Summary

The *Nine Chapters* problems invite exact rate and travel-time checks; South Asian sources here illustrate signed arithmetic, contested manuscript dating and a trigonometric approximation. Each modern equation has a specific source problem and domain. The five-plus named sources also show why one text cannot stand for a region. The next chapter follows algebra and mathematical practice in Islamic societies.
`;export{e as default};