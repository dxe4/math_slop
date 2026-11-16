var e=`---
parent_id: book-teaching-for-mathematical-understanding
chapter_id: misconceptions-are-systematic
title: "A misconception is not just a wrong answer"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# A misconception is not just a wrong answer

## Slips, errors, and misconceptions

Not every wrong answer reveals the same kind of thinking. A slip is a transient failure of execution: a learner who knows that $7\\times 8=56$ but writes $54$ under pressure has made a slip. An error is a wrong answer that may or may not be systematic. A misconception is a stable, coherent, but incorrect way of reasoning that produces predictable patterns of error. This distinction matters because correcting one answer does not establish whether a recurring reasoning pattern has changed. Stability and coherence require evidence across tasks and occasions; they cannot be inferred from the incorrect mark alone.

This chapter distinguishes misconceptions from other wrong answers, explains why they arise from sensible overgeneralisation, and presents strategies for diagnosis and repair. The central claim is that effective intervention must address the partial truth in the misconception, not merely replace it with a correct rule.

## The logic of misconceptions

Misconceptions often begin as locally valid inferences that are applied beyond their domain. A learner who knows that whole numbers are added componentwise---$12+13=25$ by adding tens and ones separately---may reasonably extend this to fractions:

$$\\frac{1}{3}+\\frac{1}{4}=\\frac{2}{7}.$$

A componentwise analogy with place-value addition is one possible explanation, not a mathematically identical operation or an established account of this learner's thinking. Tens and ones retain their fixed unit values under place-value addition; a fraction denominator instead specifies the size of its numerator units relative to a whole. A copied procedure, a different interpretation of the whole, and guessing remain alternatives. Ask for the learner's explanation and test the proposed rule before attributing an origin.

Another common misconception is that "multiplication makes bigger." For a positive quantity multiplied by a whole-number factor greater than one, the result is larger than the original quantity. Extending that pattern to a factor of one half would predict an incorrect result. Such overgeneralisation is a possible account of the error; it needs supporting evidence.

## Diagnosing a misconception: the fraction addition case

Suppose a learner writes $\\frac{1}{3}+\\frac{1}{4}=\\frac{2}{7}$. The teacher has several options:

**Correction:** "No, you need a common denominator. The answer is $\\frac{7}{12}$."

This may produce the right answer on the next problem, but it does not repair the underlying model. The learner may now apply the common-denominator procedure without understanding why it is necessary.

**Contrast:** "You added the numerators and denominators. Does that work for $1+1$?"

This invites the learner to test the rule in a familiar domain. The learner will likely say $1+1=2$, not $\\frac{2}{2}=1$. The contrast begins to separate the domains where componentwise addition works (whole numbers in place-value form) from where it does not (fractions).

**Unit reasoning:** "If you have one third of a pizza and one fourth of a pizza, do you have two sevenths of a pizza?"

This connects the operation to its meaning. Thirds and fourths are different-sized pieces. Adding them requires expressing both in a common unit, just as adding metres and centimetres requires conversion.

A complete repair might proceed as follows:

1. Describe the written operation without endorsing it: "The numerator counts and denominator labels were both added. Is that the rule you intended? Let us test it."
2. Contrast representations: $12+13=25$ preserves the separate tens and ones units, whereas $\\frac{1}{2}+\\frac{1}{2}=1$ counts two of the same half-units. Adding both fraction numerators and denominators would instead give $\\frac{2}{4}=\\frac{1}{2}$. These are different operations, not one valid rule carried unchanged between notations.
3. Explain the difference: whole numbers are counts of the same unit; fractions are counts of different units.
4. Rename: $\\frac{1}{3}=\\frac{4}{12}$ and $\\frac{1}{4}=\\frac{3}{12}$, so $\\frac{1}{3}+\\frac{1}{4}=\\frac{7}{12}$.
5. Test transfer: $\\frac{2}{5}+\\frac{1}{10}$ and the boundary case $\\frac{1}{2}+\\frac{1}{2}=1$.

## The Education Endowment Foundation guidance

The Education Endowment Foundation's guidance on integrating evidence into mathematics teaching recommends using assessment to locate strengths and weaknesses, and examining the partial truth behind persistent errors. This guidance aligns with the diagnostic approach above: assessment is not merely for grading but for uncovering thinking. The teacher who asks "How did you get that?" learns more than the teacher who asks "What is the answer?"

It is important to note that this guidance is synthesised from multiple studies with varying contexts, outcome measures, and effect sizes. It is not a guarantee that one counterexample changes every learner's model. Some misconceptions are deeply entrenched and require repeated exposure to contrasting cases.

## Common misconceptions and their origins

**"You can't take a bigger number from a smaller number."**

Possible contributing context: Early subtraction is defined only on whole numbers where the minuend exceeds the subtrahend. Repair: Introduce integer subtraction as the inverse of addition, using number-line representations that make negative results meaningful.

**"The equals sign means 'the answer is coming.'"**

Possible contributing context: Learners see $2+3=5$ but rarely see $5=2+3$ or $2+3=1+4$. Repair: Present equations with operations on both sides and ask whether they are true.

**"A longer decimal is a larger number."**

Possible contributing context: Whole-number comparison is length-based: $25>5$ because $25$ has more digits. Repair: Compare $0.25$ and $0.5$ using money or measurement contexts where $0.5$ is clearly larger.

**"Squares are not rectangles."**

Possible contributing context: Everyday language treats "square" and "rectangle" as distinct categories. Repair: Use the definition---a rectangle is a quadrilateral with four right angles---and show that a square satisfies it.

## Worked investigation: specify what “bigger” compares

The following investigations use fictional learner responses. They demonstrate mathematical and inferential distinctions, not observed intervention effects. Suppose a learner predicts that multiplying by three always makes a number bigger. Before giving a counterexample, ask whether “bigger” means larger in the usual real order or larger in absolute value. Those are different comparisons for negative numbers.

For a real quantity $x$ and real factor $k$, compare the product with the original by subtracting: $kx-x=(k-1)x$. The product exceeds the original exactly when this difference is positive. If $x$ is positive, that occurs exactly when $k>1$. If $x$ is negative, it occurs exactly when $k<1$. If $x=0$, the product equals the original for every factor. This is a complete sign-based classification of the ordered comparison, including negative factors.

For example, three times negative two is negative six, which is smaller in order than negative two. Its absolute value is larger. Half of negative two is negative one, which is larger in order but smaller in absolute value. In general, for a nonzero quantity the magnitude of the product exceeds the original magnitude exactly when the factor's absolute value exceeds one. This follows because absolute value of a product equals the product of the absolute values, and division by the positive original magnitude preserves order. A factor of negative one preserves magnitude while changing sign.

A useful task contrasts three times two, half of two, three times negative two, and half of negative two. Ask the learner to make both comparisons and explain the relevant sign. A correct response on the first case alone cannot distinguish a restricted true rule from an unrestricted false one. A learner who says “bigger” but consistently means magnitude may have a language mismatch rather than the exact mathematical belief the teacher first inferred.

The proposed next step therefore depends on the account offered. If the issue is domain, use the difference formula to state a conditional rule. If it is the word “bigger,” label order and magnitude separately. If the response was a multiplication slip, another conceptual explanation may be unnecessary. These choices are instructional hypotheses; none carries a claimed success rate here.

## Worked investigation: the equals sign and an invalid chain

A fictional learner writes $8+4=12+3=15$. If each equals sign asserts equality of its neighbouring expressions, the first asserted equality is false: eight plus four is twelve, while twelve plus three is fifteen. The learner may instead have intended a running record of operations: add eight and four, then add three. That intention can be made mathematically correct by writing $8+4+3=12+3=15$, or by writing two separate equations, first $8+4=12$ and then $12+3=15$.

The task is to distinguish an incorrect mathematical assertion from an unconventional recording of a valid calculation. Ask the learner to read the chain aloud and decide whether eight plus four and twelve plus three denote the same number. Then contrast the valid chain $8+4=6+6=12$. All three expressions in that chain have the same value, even though an operation occurs on both sides of an equals sign. Reversing it gives another true chain; equality is symmetric.

Next present the equation $8+4=7+\\square$. The missing number is five because the right expression must have value twelve. A learner who writes twelve in the box may be treating the box as a place for the earlier computation's answer, but may also have overlooked the seven. Ask for the value of the completed right side before assigning a stable interpretation. Contrast $\\square+7=12$ and $12=7+\\square$ to vary position without changing the relation.

The general mathematical basis is substitutivity: equal expressions can replace one another in an expression without changing its value. If two expressions both equal twelve, transitivity gives their equality. This is different from the temporal relation “the next step I performed.” An arrow can record a procedural transition, but it needs its own stated meaning and does not automatically assert equality.

The teaching conjecture is to use position changes, true chains, and explicit value comparisons to investigate relational equality. A later correct box answer may support that target but cannot prove that the learner now interprets every algebraic equation relationally. Transfer to equations with variables on both sides requires further evidence under those conditions.

## Worked investigation: an extraneous solution after squaring

Consider the equation with principal square root $\\sqrt{x+2}=x$. A fictional learner squares both sides, solves $x+2=x^2$, factors it as $(x-2)(x+1)=0$, and reports two and negative one. The algebra after squaring is correct. The missed condition is that the principal square root is nonnegative, so any original solution must have $x\\geq0$. Negative one fails: the left side is one and the right side negative one. Two works, since the principal square root of four is two.

Squaring both sides preserves truth in the forward direction: equal real numbers have equal squares. The converse needs a sign condition because equal squares allow either equality or opposite values. On nonnegative reals, squaring is injective, so it gives an equivalent equation. A mathematically complete solution therefore records the original radicand condition and the nonnegative right side, solves the squared equation, and retains only candidates satisfying those conditions or directly satisfying the original equation.

Several accounts fit the reported extra root. The learner may believe all algebraic transformations are reversible, may have forgotten the principal-root convention, or may know both issues but omit checking under time pressure. Follow with the pair of numerical statements that three and negative three have equal squares but are unequal. Then ask whether squaring the equation $x=-3$ can add candidates. The squared equation has both three and negative three; only the latter solves the original. A response and explanation on these contrasts can narrow the inference.

Repair should retain the valid part of the work: factorisation and solving the squared equation were useful. The error lies in treating a necessary condition as sufficient without checking the sign. Calling the whole solution “wrong” hides the exact mathematical distinction that needs attention. Equally, a correct check on this example is not evidence that every implication-versus-equivalence issue has been resolved.

## Document a pattern without manufacturing a diagnosis

A professional record can state the tasks, responses, explanations, access supports, and times at which evidence was collected. It can then identify a tentative rule consistent with several responses and list alternatives still possible. For example, repeated addition of denominator labels with an explicit learner explanation supplies stronger evidence for that rule than a single unexplained fraction sum. It still says nothing by itself about the rule's origin or the effect of a proposed intervention.

Keep mathematical falsification separate from psychological explanation. A single counterexample falsifies a universal mathematical claim; it does not demonstrate why a learner accepted the claim, nor guarantee that presenting it changes the learner's reasoning. Likewise, a later correct answer may reflect a remembered exception rather than a revised general rule. Contrasting cases and delayed transfer prompts are possible sources of further evidence, not automatic proof of durable change.

No numerical diagnostic probabilities are supplied here. Estimating them would require data about how often particular response patterns arise under independently established reasoning states, with attention to task and population differences. The chapter instead offers inspectable mathematical contrasts and explicit limits on inference. That restraint keeps classroom cases useful without turning fictional examples into empirical findings.

## Practice exercises

### Exercise 1

A learner writes $\\frac{3}{5}+\\frac{2}{5}=\\frac{5}{10}=\\frac{1}{2}$. Diagnose the misconception and design a three-step repair.

**Hint 1.** Separate the visible operation from possible reasons for using it.

**Hint 2.** Keep the size of a fifth fixed across the model.

**Solution.** The learner may be overgeneralising the "add tops and bottoms" rule, or may be confusing fraction addition with fraction simplification. Alternatively, the learner may think that the denominator represents the total number of parts in the combined whole.

Step 1: Test with a concrete model. Draw two circles each divided into fifths. Shade $3/5$ of one and $2/5$ of the other. Ask whether the shaded amount is half of one circle or more than half.

Step 2: Connect to unit reasoning. "These are fifths. How many fifths are shaded altogether? If you had three apples and two apples, would you have five apples or five tenths of an apple?"

Step 3: Generalise. "When the denominators are the same, we are counting the same-sized pieces. We add the counts, not the sizes." Then test transfer with $\\frac{2}{7}+\\frac{3}{7}$ and a contrast with $\\frac{1}{2}+\\frac{1}{3}$.

### Exercise 2

Explain why the misconception "multiplication always makes bigger" is sensible, and give a numerical counterexample that would help repair it.

**Hint 1.** State the sign and domain of the original quantity.

**Hint 2.** Compare a factor above, equal to, and below one.

**Solution.** Multiplying a positive whole number by a whole-number factor greater than one increases it. The learner has correctly generalised from a large and familiar domain. A counterexample should be chosen to make the violation salient. Consider $0.5\\times 8=4$. In a measurement context: "You have $8$ metres of ribbon. You need half that length. How much do you cut?" The result, $4$ metres, is smaller than $8$. Another effective counterexample is multiplication by $1$: $1\\times 8=8$, which is neither bigger nor smaller. And multiplication by $0$: $0\\times 8=0$. The sequence $2\\times 8=16$, $1\\times 8=8$, $0.5\\times 8=4$, $0\\times 8=0$ shows the continuum from enlargement to reduction to elimination.

### Exercise 3

A learner says, "$0.25$ is bigger than $0.5$ because $25$ is bigger than $5$." Design a representational contrast that repairs this misconception.

**Hint 1.** Rename both quantities in hundredths of one common whole.

**Hint 2.** A currency representation requires contextual familiarity.

**Solution.** Use a money representation: $0.25$ dollars is a quarter, $0.5$ dollars is a half-dollar. Place both coins on a table and ask which has greater value. Then use a number line from $0$ to $1$, marking $0.25$ and $0.5$. The visual distance from $0$ makes the order clear. Finally, connect to place value: $0.25=\\frac{25}{100}$ and $0.5=\\frac{50}{100}$. The denominator is the same, so the numerators can be compared directly. The stated explanation compares digit strings as whole numbers. The common-unit representation addresses that explanation; it does not prove that the proposed teaching sequence will change future responses. A money example also requires familiarity with the currency, so a labelled length or area model may be more accessible.

### Exercise 4

Why is it insufficient to tell a learner "that's wrong, here's the right answer" when a misconception is diagnosed?

**Hint 1.** A correct answer alone does not identify a reasoning rule.

**Hint 2.** Ask what evidence would distinguish a stable pattern from a slip.

**Solution.** A misconception is a coherent, stable model of how mathematics works. Telling the learner the right answer adds a correct procedure without displacing the incorrect model. The learner may now have two competing procedures---one intuitive and one imposed---and may apply the wrong one under pressure or in unfamiliar contexts. Repair requires making the learner's current model explicit, testing its limits with counterexamples, and building a replacement model that is more general and more consistent with evidence. This is why contrast, concrete testing, and transfer problems are essential.

### Exercise 5 {#misconceptions-are-systematic-exercise-5}

Classify exactly when multiplying a negative real number by a real factor produces a larger number in the usual order. Contrast this with increasing its magnitude.

**Hint 1.** Subtract the original from the product.

**Hint 2.** For magnitude, use the absolute value of the factor.

**Solution.** If $x<0$, then $kx>x$ exactly when $(k-1)x>0$. Dividing by negative $x$ reverses the inequality, giving $k<1$. For magnitude, $|kx|=|k||x|$, and the positive value $|x|$ can be cancelled without reversing order, so magnitude increases exactly when $|k|>1$. A factor of three therefore decreases a negative input in order while increasing its magnitude. The distinction prevents replacing an imprecise phrase with another unrestricted rule.

### Exercise 6 {#misconceptions-are-systematic-exercise-6}

Repair $6+7=13+2=15$ in two ways, preserving the intended running calculation. Give a follow-up probing relational equality without assuming a diagnosis.

**Hint 1.** Either include all terms from the outset or separate the stages.

**Hint 2.** Ask whether each neighbouring pair has the same value.

**Solution.** A valid chain is $6+7+2=13+2=15$. Alternatively write $6+7=13$ and $13+2=15$ as separate equations. In the original chain six plus seven is thirteen, whereas thirteen plus two is fifteen, so the first equality is false. A follow-up such as $6+7=8+\\square$ requires five in the box and an explanation that both sides must equal thirteen. This probes the relation; it does not establish from the original notation alone whether the learner held a stable answer-sign interpretation or simply recorded stages carelessly.

### Exercise 7 {#misconceptions-are-systematic-exercise-7}

Solve $\\sqrt{x+6}=x$ over the real numbers and explain why squaring requires a check.

**Hint 1.** The right side must be nonnegative.

**Hint 2.** Factor the squared equation and inspect both candidates.

**Solution.** Any solution has $x\\geq0$. Squaring gives $x^2-x-6=0$, which factors as $(x-3)(x+2)=0$. Three works in the original equation; negative two does not because its right side is negative while the left is two. Hence three is the only solution. Squaring preserves the original equality in one direction but can equate opposite-sign values, so it can introduce a candidate. The valid factorisation should be retained when discussing the extra root; the missing warrant concerns reversibility and sign.

### Exercise 8 {#misconceptions-are-systematic-exercise-8}

A learner gives three sevenths for one third plus two fourths. Name three possible explanations and design a follow-up separating at least two of them.

**Hint 1.** One written result is compatible with several processes.

**Hint 2.** Ask for an explanation and use equal-denominator addition as a contrast.

**Solution.** The learner may intentionally add numerators and denominators, may be recording the fraction of selected parts across differently partitioned objects, or may have copied an unrelated denominator. Ask for the intended rule and present one half plus one half of the same unit. Componentwise addition predicts one half, while counting halves gives one. A request to identify the whole and the piece sizes can distinguish the first two accounts. These follow-ups do not guarantee an unambiguous diagnosis; record the actual explanation rather than simply choosing the most familiar misconception label.

### Exercise 9 {#misconceptions-are-systematic-exercise-9}

A learner says that $0.400$ exceeds $0.4$ because it has more digits. Give an exact argument and propose a contrast that does not rely on currency knowledge.

**Hint 1.** Express both in thousandths.

**Hint 2.** Fix a single unit length before subdividing it.

**Solution.** Four tenths equals four hundred thousandths, so the decimals denote the same number. On a unit-length strip, mark four tenths, then subdivide each tenth into one hundred equal parts. The same marked length covers four hundred of the resulting thousandths. Compare also four hundred one thousandths, which is strictly larger by one thousandth. This varies numerical value while keeping the representation comparable. The proposed contrast addresses the stated digit-length rule; it supplies no measured evidence about whether that rule persists after instruction.

### Exercise 10 {#misconceptions-are-systematic-exercise-10}

Explain why a counterexample settles a universal mathematical claim but does not settle the cause of a learner's response or the success of an intervention. Use one concrete example.

**Hint 1.** Separate three different claims: truth, diagnosis, and change.

**Hint 2.** A later correct answer can arise without a revised general rule.

**Solution.** Half of eight is four, so it falsifies the unrestricted real-number claim that multiplication always increases its positive input. It does not show why a particular learner predicted an increase: domain overgeneralisation, a misread factor, and a computation slip remain possible. If the learner later answers this same item correctly, that may reflect memory of the example rather than a general rule about factors between zero and one. Additional explanations and new-domain tasks can investigate transfer, but neither the mathematical counterexample nor one corrected answer establishes a causal instructional effect. Those are different evidential questions.

## Looking backward and forward

The previous chapter, *Examples define the conceptual boundary*, showed that the range of examples determines what learners generalise. Incomplete example sets are one possible contributor to overgeneralisation; they do not determine every learner's reasoning. The next chapter, *Learning progressions are hypotheses*, examines how learners move from one way of reasoning to another, and why that movement is not uniform or guaranteed.
`;export{e as default};