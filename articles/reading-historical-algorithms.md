
# Read the Procedure, Rebuild the Mathematics

**Before reading.** Read [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md) and [Sequences, Series, and the Binomial Theorem](../books/algebra-and-functions/sequences-series-binomial-theorem.md). These are preparation for the ideas used below.

A historical mathematical text is not a modern textbook with unfamiliar typography. It may state a worked procedure without a general formula, mix several layers of commentary, assume a trained user, or survive only in a later copy. This deep dive studies three procedures through modern paraphrase: a geometric sum associated with the Rhind Mathematical Papyrus, excess-and-deficit reasoning from the Chinese *Nine Chapters*, and completing a square in the algebraic tradition associated with al-Khwarizmi.

The goal is double: solve real mathematics and learn not to claim more from a source than it supports.

## A six-question source protocol

Before translating symbols, record:

1. **Witness:** What physical object or edition are we reading?
2. **Date:** Is the date of this witness, an earlier composition, or a later copy?
3. **Language and translation:** Which choices has a translator made?
4. **Procedure:** What sequence of operations is actually prescribed?
5. **Justification:** Does the source state one, does a commentary supply one, or are we reconstructing it?
6. **Context:** Who may have used it, and for which tasks? Where is evidence missing?

Modern notation is useful, but label it as a reconstruction. Writing $x$ does not prove a historical author conceived an unknown exactly as we do.

## Worked source study 1: seven houses

**Worked example.**

The British Museum describes the Rhind Mathematical Papyrus as a scribal mathematical text copied by Ahmose around 1550 BCE, containing problems in division, fractions, area, and volume. Its [collection record](https://www.britishmuseum.org/collection/object/Y_EA10058) gives object history and bibliography; the museum’s [hieroglyph resource](https://www.britishmuseum.org/hieroglyphs-resources) presents a sevenfold counting challenge.

Paraphrased structure:

- 7 houses;
- 7 cats in each house;
- 7 mice caught by each cat;
- 7 ears of grain associated with each mouse;
- 7 measures associated with each ear.

The counts are

$$7, 7^{2}, 7^{3}, 7^{4}, 7^{5}$$

Their sum is

$$7+49+343+2401+16807 = 19607$$

### Reconstruct the general algorithm

For ratio $r$ and $n$ levels,

$$S = r+r^{2}+⋯+r^{n}$$

Multiply by $r$:

$$rS=r^{2}+r^{3}+⋯+r^{n+1}$$

Subtract the original sum:

$$rS-S=r^{n+1}-r$$

so when $r\ne 1$,

$$S=(r^{n+1}-r)/(r-1)$$

For $r=7,n=5$, this gives $(7^{6}-7)/6=19607$.

This algebra proves a modern generalization. It would be anachronistic to say the surviving problem itself states this symbolic formula. The source gives an example; our derivation asks what structure the example instantiates.

### Boundary case

At $r=1$, the formula has zero denominator, but the sum is simply $n$. A generalization must preserve its hypotheses.

## Source study 2: excess and deficit

The *Nine Chapters on Mathematical Procedures* is a layered Chinese mathematical canon. Historian Karine Chemla’s study of its [procedures and commentaries](https://www.cambridge.org/core/journals/bjhs-themes/article/reading-instructions-of-the-past-classifying-them-and-reclassifying-them-commentaries-on-the-canon-the-nine-chapters-on-mathematical-procedures-from-the-third-to-the-thirteenth-centuries/F402B3DE252D1799135618C259E5C706) emphasizes that readers extracted executable instructions from texts transmitted with commentary.

Consider this reconstructed excess-and-deficit problem:

> If each person contributes 8 units, the collection is 3 units too large. If each contributes 7 units, it is 4 units too small. How many people and how large a target?

Let $p$ be people and $T$ the target. Modern equations are

$$8p=T+3$$

$$7p=T-4$$

Subtract the second from the first:

$$p=7$$

Then $T=8\cdot 7-3=53$.

### A procedure without symbolic elimination

The two proposed contributions differ by 1. Moving from 7 per person to 8 per person changes the total from 4 below target to 3 above, a change of $4+3=7$. Therefore there are $7/1=7$ people. This reasoning treats excess and deficit as directed differences.

For proposals $a>b$, excess $e$, and deficit $d$,

$ap=T+e$, $bp=T-d$.

Subtracting yields

$(a-b)p=e+d$, hence $p=(e+d)/(a-b)$.

The verbal procedure and algebra express the same invariant difference, but their organization differs. Avoid renaming every elimination method after a much later European author; describe operations first, then compare across traditions.

### Falsification check

If $e+d$ is not divisible by $a-b$, an integer-person interpretation may fail even though a rational algebraic solution exists. Context determines whether fractions of a unit or person are admissible.

## Source study 3: completing the square

The Qatar Digital Library’s overview of the [Arabic scientific tradition](https://www.qdl.qa/en/arabic-scientific-tradition) places al-Khwarizmi’s ninth-century algebra in Abbasid institutional and practical contexts, and its manuscript records include a later [commentary on his algebra](https://www.qdl.qa/archive/81055/vdc_100083376667.0x000003). A later copy or commentary is evidence of transmission, not the autograph of an earlier author.

Solve the modernized equation

$$x^{2}+10x=39$$

Take half of 10, namely 5, and add its square to both sides:

$$x^{2}+10x+25=64$$

The left side is $(x+5)^{2}$, so for a nonnegative magnitude interpretation,

$x+5=8$, giving $x=3$.

Modern algebra also permits $x+5=-8$, giving $x=-13$; historical classifications of positive quantities and equation types did not necessarily combine signed solutions in this way.

### Geometric reconstruction

Imagine a square of side $x$, area $x^{2}$. Split ten-by-$x$ area into two rectangles each $5\times x$, and place them along adjacent sides. A $5\times 5$ corner is missing from the enlarged square. Adding 25 completes a square of side $x+5$. Since its area is 64, its positive side is 8.

The diagram is a proof of the identity

$$x^{2}+10x+25=(x+5)^{2}$$

It is not evidence that every historical line of reasoning was literally performed with movable paper pieces. “Geometric interpretation” and “documented practice” must remain distinct.

## Compare the algorithmic forms

| Procedure | State | Repeated operation | Invariant or guarantee |
| --- | --- | --- | --- |
| Sevenfold chain | current power and total | multiply by 7, add | total equals sum of generated levels |
| Excess and deficit | two trials and signed errors | compare changes | target cancels when trials are subtracted |
| Completing square | quadratic expression | add equal area to both sides | equality is preserved; left becomes a square |

All three can be executed. All three invite proof. Their texts, notation, justification, and social settings are not interchangeable.

## A small implementation

```js
function excessDeficit(highRate, excess, lowRate, deficit) {
  const rateDifference = highRate - lowRate;
  if (rateDifference <= 0) throw new Error("highRate must exceed lowRate");
  const people = (excess + deficit) / rateDifference;
  const target = highRate * people - excess;
  return { people, target };
}
```

The function takes constant time. Its mathematical postcondition is that both reconstructed trials agree with the returned target. A domain check may additionally require `people` to be a positive integer and all quantities to have consistent units.

## Exercises with solutions

### 1. Another chain

<a id="deep-dive-reading-historical-algorithms-ex-1"></a>

**Exercise 1.**

Compute $3+3^{2}+3^{3}+3^{4}$ both directly and with the geometric formula.


<details>
<summary>Hint 1</summary>

Directly list the four powers of three before applying the series identity.
</details>
<details>
<summary>Hint 2</summary>

Use the finite geometric-sum formula with first exponent one and last exponent four, then compare totals.
</details>
<details>
<summary>Solution</summary>

Directly: $3+9+27+81=120$. Formula: $(3^{5}-3)/(3-1)=(243-3)/2=120$.

</details>

### 2. Two contribution trials

<a id="deep-dive-reading-historical-algorithms-ex-2"></a>

**Exercise 2.**

At 11 units each, a total is 10 too large. At 9 units each, it is 8 too small. Find people and target.


<details>
<summary>Hint 1</summary>

Changing the proposed contribution by two units changes the total error by a fixed amount per participant.
</details>
<details>
<summary>Hint 2</summary>

The two errors differ by eighteen; infer the participant count, then substitute into either trial total.
</details>
<details>
<summary>Solution</summary>

The rate change is 2 and error swing is 18, so $p=9$. Target $T=11\cdot 9-10=89$; check $9\cdot 9=81$, eight short.

</details>

### 3. Complete a square

Solve $x^{2}+6x=16$ over the real numbers.

**Solution.** Add 9: $(x+3)^{2}=25$. Thus $x+3=\pm5$, so $x=2$ or $x=-8$. If a historical problem treats $x$ as a physical length, only 2 may fit its domain.

### 4. Witness versus composition

Why can carbon-dating a manuscript leaf fail to determine the date when its algorithm was first composed?

**Solution.** A dated leaf bounds the material used for that copy. Its text may copy an older exemplar, combine layers, or have been written after the material was produced. Dating and textual analysis answer related but different questions.

### 5. Translation audit

A translation uses the word “equation.” What should a historian check?

**Solution.** Check the original term and grammar, whether the text states a relation or only a procedure, the translator’s conventions, parallel passages, and commentary layers. The modern word may clarify structure while importing concepts not explicit in the source.

## Source and uncertainty note

The problems above are pedagogical paraphrases or reconstructions, not unmarked verbatim translations. Object dates, composition dates, authorship, and user communities can remain uncertain. “First” claims are fragile because survival is uneven: oral, perishable, excluded, or uncatalogued practices leave different traces.

Continue through mathematical sources and evidence, global mathematical history, algebraic expressions, sequences, and linear systems. Historical reading becomes mathematically serious when we can run a procedure, prove what it does, and still preserve the distance between our notation and the source.
