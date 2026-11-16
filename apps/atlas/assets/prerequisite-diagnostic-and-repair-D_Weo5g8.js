var e=`---
parent_id: book-mathematics-teaching-learning-evidence-reader
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair Routes"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair Routes

This reader assumes three kinds of background: basic numeracy and early number relations, algebraic representation and manipulation, and introductory ideas about evidence and uncertainty. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Basic numeracy.** Place value in base ten, the four operations on whole numbers, part-whole relations, and simple fractions. You should be comfortable reading $34 = 3 \\times 10 + 4$ and explaining why $5/8 < 3/4$.
2. **Algebraic familiarity.** Variables, equations, functions, and simple graphs. You should be able to read $y = mx + b$, predict the effect of changing $m$, and solve a linear equation.
3. **Introductory statistics and evidence.** Mean, standard deviation, the idea of a confidence interval, and the difference between association and causation. You should be able to read "the 95% interval is $[0.2, 2.6]$" as a range of compatible values rather than a guarantee.

## Self-diagnostic questions with answers

### Numeracy and number relations

**Question 1.** A learner says the longer-spaced row of counters has more objects. Give two competing hypotheses about what the learner is comparing.

> **Answer.** Hypothesis A: the learner compares spatial length rather than cardinality. Hypothesis B: the learner does not yet conserve cardinality under rearrangement. A discriminating follow-up aligns the collections one-to-one without recounting and asks what is unmatched.

**Question 2.** Write $205$ in expanded place-value form and explain what the zero records.

> **Answer.** $205 = 2 \\times 10^{2} + 0 \\times 10^{1} + 5 \\times 10^{0}$. The zero records that there are no tens; without it, the 2 and 5 would occupy different positions and the numeral would be ambiguous.

**Question 3.** Explain why $5/8 < 3/4$ using a common denominator.

> **Answer.** $3/4 = 6/8$. Since $5 < 6$ and the pieces are the same size (eighths of a common whole), $5/8 < 6/8 = 3/4$.

### Algebraic representation

**Question 4.** In $y = mx + b$, what happens to the graph when $m$ increases? What happens when $b$ increases?

> **Answer.** Increasing $m$ increases the slope. Geometric steepness is governed by $|m|$, so changing $m$ from $-3$ to $-2$ makes the line less steep even though its slope increases. Increasing $b$ translates the entire graph upward by the same amount at every $x$; in particular, its $y$-intercept rises.

**Question 5.** Solve $2(x + 3) = 16$ and state the operation used at each step.

> **Answer.** Divide both sides by 2: $x + 3 = 8$. Subtract 3 from both sides: $x = 5$. Each step preserves equality by applying the same operation to both sides.

### Evidence and uncertainty

**Question 6.** A study reports an estimated effect of $1.4$ points with standard error $0.6$. Write a rough 95% interval and interpret it in plain language.

> **Answer.** $1.4 \\pm 1.96(0.6) \\approx [0.2, 2.6]$. Under the model and design assumptions, the data are compatible with a range of positive average effects on the named measure in the studied setting. The interval does not guarantee a positive effect, nor does it apply automatically to other populations or measures.

**Question 7.** Why does a strong correlation between two variables not establish that one causes the other?

> **Answer.** Confounding, reverse causation, selection, and measurement error can all produce correlation without a causal effect. A causal claim needs a design that addresses these alternatives, such as random assignment or a credible identification strategy.

**Question 8.** A survey finds that 60% of respondents agree with a statement. Can this estimate be precise but invalid? Explain.

> **Answer.** Yes. Precision refers to small sampling uncertainty (narrow interval). Validity concerns whether the score measures the intended construct. A perfectly precise estimate of the wrong thing is still wrong.

## Scoring your diagnostic

- If you answered 7–8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5–6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Numeracy and number relations

- *Math Atlas: Number, Operations, and Early Algebra* — place value, operations, and part-whole structure for teaching.
- *Math Atlas: Fractions, Ratios, and Proportional Reasoning* — fraction magnitude, equivalence, and comparison.
- *Math Atlas: Patterns, Functions, and Algebraic Structure* — from number patterns to algebraic representation.

### Algebraic representation

- *Math Atlas: Patterns, Functions, and Algebraic Structure* — variables, equations, functions, and graphs.
- *Math Atlas: Algebra: Patterns and Structure* — a proof-focused development of algebraic structures for readers who want deeper foundations.

### Evidence and uncertainty

- *Math Atlas: Data, Probability, and Statistical Reasoning* — data representation, summary measures, and the logic of inference.
- *Math Atlas: Teaching Mathematics as Inquiry* (this reader), Chapter 3 — research designs, measures, and claim boundaries.

## What this reader does not assume

- Advanced statistics: regression, multilevel models, and structural equation modeling are mentioned but not required. Chapter 3 introduces the ideas needed to read research reports critically.
- Clinical diagnosis: the text uses learner responses as evidence about tasks and interactions, not as labels for fixed traits.
- Programming: code appears in plain text for readability. No prior programming experience is required.
- Prior lesson-study experience: Chapters 4 and 4a introduce the cycle from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};