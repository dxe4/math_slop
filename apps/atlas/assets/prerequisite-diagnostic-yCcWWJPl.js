var e=`---
parent_id: book-algebra-from-stories
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes arithmetic fluency and a willingness to read stories carefully. The diagnostic below separates arithmetic skills from reading habits and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Whole-number arithmetic.** You should be comfortable with the four operations, place value, and the order of operations. You should be able to compute $3 \\times 4 + 2$ correctly as $14$, not $18$, because multiplication precedes addition.
2. **Fractions and decimals.** You should understand a fraction as a part of a whole, be able to compare simple fractions using a common denominator, and convert between fractions and decimals for common values such as $\\frac{1}{2} = 0.5$ and $\\frac{1}{4} = 0.25$.
3. **Reading for quantity.** You should be able to extract numbers and relationships from short written descriptions. If a story mentions "three more than twice a number," you should recognise that the operations are multiply by two, then add three.

## Self-diagnostic questions with answers

### Whole-number arithmetic and order of operations

**Question 1.** Compute $20 - 3 \\times 5$.

> **Answer.** $3 \\times 5 = 15$, so $20 - 15 = 5$. Multiplication comes before subtraction.

**Question 2.** Compute $(7 + 3) \\times (8 - 5)$.

> **Answer.** $7 + 3 = 10$ and $8 - 5 = 3$, so $10 \\times 3 = 30$. Brackets come before multiplication.

**Question 3.** A taxi charges £5 fixed fee plus £3 per mile. How much does an 8-mile journey cost?

> **Answer.** $3 \\times 8 + 5 = 24 + 5 = 29$. The fare is £29.

### Fractions and decimals

**Question 4.** Which is larger, $\\frac{3}{4}$ or $\\frac{5}{8}$? Explain using a common denominator.

> **Answer.** $\\frac{3}{4} = \\frac{6}{8}$. Since $6 > 5$, we have $\\frac{6}{8} > \\frac{5}{8}$, so $\\frac{3}{4}$ is larger.

**Question 5.** Write $0.75$ as a fraction in lowest terms.

> **Answer.** $0.75 = \\frac{75}{100} = \\frac{3}{4}$.

**Question 6.** A recipe calls for $\\frac{1}{2}$ litre of milk. You have a 1-litre jug. What fraction of the jug should you use?

> **Answer.** $\\frac{1}{2}$ of the jug.

### Reading for quantity

**Question 7.** Translate "five less than three times a number $n$" into an arithmetic expression.

> **Answer.** Three times the number is $3n$. Five less than that is $3n - 5$. Note that "five less than" means subtract 5 from the quantity, not subtract the quantity from 5.

**Question 8.** A rectangle has length 12 cm and width 7 cm. Write an expression for its perimeter and compute the value.

> **Answer.** $P = 2 \\times 12 + 2 \\times 7 = 24 + 14 = 38$ cm. Alternatively, $P = 2(12 + 7) = 2 \\times 19 = 38$ cm.

**Question 9.** A tank contains 50 litres and drains at 4 litres per minute. How much remains after 8 minutes?

> **Answer.** $50 - 4 \\times 8 = 50 - 32 = 18$ litres.

## Scoring your diagnostic

- If you answered 8–9 questions confidently and correctly, you have the background for the continuous route.
- If you answered 6–7 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 6 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Five meaning checks before Chapter 1

Keep Questions 1–9 and their score above as the arithmetic diagnostic. The following named checks locate five separate algebra meanings; do not add them to that score. Attempt each before reading its worked repair. Rework a missed check with different numbers and explain the reason aloud or in writing.

### COMM-03-D-EQ — equality

**Check.** Fill the blank in $8+4=\\square+5$. Explain what the equals sign claims.

**Worked repair.** The left side is 12, so the right side must also be 12. Subtracting 5 gives $\\square=7$. The equals sign says that the two sides have the same value; it does not say “write the next answer.” Check: $8+4=12$ and $7+5=12$. A return check is $9+6=\\square+8$: the missing number is 7 because both sides must be 15.

### COMM-03-D-LETTER — a letter's role and domain

**Check.** In the café rule $C=3s+2$, $s$ counts sandwiches and $C$ is the cost in pounds. Orders contain at least one whole sandwich. Which letter is chosen, which is calculated, and is $s=1/2$ an allowed order?

**Worked repair.** Choose $s$ from $1,2,3,\\ldots$; calculate $C$ from that choice. Thus $s$ is the independent variable in this model and $C$ is dependent. At $s=4$, $C=3(4)+2=14$ pounds. Although the formula can be evaluated at $1/2$, that input is outside the order domain. If the question instead gives $C=14$ and asks for $s$, the same letter $s$ acts as an unknown: $3s+2=14$ gives $s=4$, which is an allowed count.

### COMM-03-D-DIST — distributivity and signs

**Check.** Is $-2(x-3)=-2x-6$ a valid identity for every real $x$?

**Worked repair.** Multiply both terms by $-2$: $-2(x-3)=(-2)x+(-2)(-3)=-2x+6$. The proposed identity has the wrong sign. At $x=1$, its left side is 4 and its proposed right side is $-8$, so that input disproves it. The distributive property and signed multiplication justify the corrected identity for all real inputs; one agreeing input alone would not do so.

### COMM-03-D-ZERO — division and cancellation

**Check.** Is $x/x=1$ valid at $x=0$? Can we cancel $x$ from $x(x-2)=0$ and keep all solutions?

**Worked repair.** The quotient is defined only when $x\\ne0$. At zero, $0/0$ has no uniquely determined value: every number multiplied by zero gives zero. In the equation, a product is zero when a factor is zero, giving $x=0$ or $x=2$. Cancelling $x$ assumes $x\\ne0$ and loses the solution zero. Both values check in the original equation. State the nonzero condition before dividing and keep excluded cases separately.

### COMM-03-D-SCALE — graph scale and units

**Check.** A straight distance–time graph passes through $(0,0)$ and $(4,60)$. Its horizontal axis is hours, labelled $0,2,4$, and its vertical axis is kilometres, labelled $0,30,60$. What distance does it show at 2 hours, and what is the rate per hour?

**Worked repair.** Halfway from 0 to 4 hours is 2 hours; on this straight graph the corresponding distance is 30 kilometres. The rate is $60/4=15$ kilometres per hour, not 30: one labelled horizontal interval represents two hours. The same information is the table $(t,d)=(0,0),(2,30),(4,60)$, with $t$ in hours and $d$ in kilometres. Read axis labels and units before counting squares or intervals.

These checks support the entry into this book; they do not establish readiness for a university proof course.

## Repair routes

### Whole-number arithmetic and order of operations

- *Math Atlas: Number, Operations, and Early Algebra* — place value, operations, and the order of operations for teaching.
- Work through the first two chapters of any standard primary mathematics text, focusing on multi-step calculations.

### Fractions and decimals

- *Math Atlas: Fractions, Ratios, and Proportional Reasoning* — fraction magnitude, equivalence, and comparison.
- Practise converting between fractions and decimals for halves, quarters, fifths, and tenths.

### Reading for quantity

- Before each chapter in this book, read the opening story aloud and list every number and every relationship verb ("per," "more than," "less than," "times," "divided by").
- Work the first exercise in each chapter immediately after reading the story, before reading the definitions.

## What this book does not assume

- Prior algebra: variables, equations, and graphs are introduced from first principles.
- Calculator dependence: estimation and mental checks are encouraged at every stage.
- Formal proof: reasoning is explained in plain language with structural justification.
- Science background: formulas from science are presented with their meaning and units.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into quantities, operations, and relationships before concluding that the mathematics is inaccessible.
`;export{e as default};