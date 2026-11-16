var e=`---
parent_id: book-algebra-from-stories
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the conventions that govern algebraic writing in this book, and the policies that keep notation unambiguous.

## Variables and unknowns

- A **variable** is a symbol that represents a quantity which may vary within a given context. Example: in $C = 3s + 2$, the letter $s$ is a variable because different orders contain different numbers of sandwiches.
- An **unknown** is a symbol that represents a specific value to be determined from the conditions of a problem. Example: if the total cost is £14, then $s$ in $3s + 2 = 14$ is an unknown whose value we seek.

## Arithmetic notation

- $a + b$: addition.
- $a - b$: subtraction.
- $a \\times b$ or $a \\cdot b$: multiplication. In this book we usually write $ab$ when at least one factor is a letter, and $\\times$ or $\\cdot$ when both factors are numerals to avoid ambiguity.
- $\\frac{a}{b}$ or $a \\div b$: division, provided $b \\neq 0$.
- $a^{n}$: $a$ raised to the power $n$. In particular, $a^{2} = a \\times a$ and $a^{3} = a \\times a \\times a$.
- $\\sqrt{a}$: the nonnegative square root of $a$, defined for $a \\geq 0$.

## Order of operations

Operations are performed in this priority:

1. Brackets (parentheses) innermost first.
2. Exponents (powers and roots).
3. Multiplication and division, left to right.
4. Addition and subtraction, left to right.

A common mnemonic is BEDMAS or PEMDAS; the key point is that multiplication and division have equal priority, as do addition and subtraction.

## Inequality symbols

- $<$: less than.
- $>$: greater than.
- $\\leq$: less than or equal to.
- $\\geq$: greater than or equal to.

When multiplying or dividing both sides of an inequality by a negative number, the symbol must be reversed. See **Inequalities and Regions** for full discussion.

## Coordinate geometry

- $(x, y)$: a coordinate pair. The first value is the horizontal coordinate; the second is the vertical coordinate.
- $y = mx + c$: slope-intercept form of a line, where $m$ is the slope and $c$ is the $y$-intercept. Some texts use $b$ for the intercept; this book uses $c$ to avoid confusion with the $b$ that appears in other formulas.

## Sequences

- $a_{n}$: the $n$-th term of a sequence. The subscript $n$ is an integer index.
- $a_{1}$: the first term.
- $d$: common difference of an arithmetic sequence.
- $r$: common ratio of a geometric sequence.
- $S_{n}$: the sum of the first $n$ terms.

## Formulas and units

- A formula is an equation that expresses a relationship between quantities. Example: $d = vt$ relates distance, speed, and time.
- Units are written in upright text after the numerical value: $30 \\text{ km/h}$, $250 \\text{ g}$, $12 \\text{ V}$.
- When substituting into a formula, ensure all quantities use consistent units before calculating.

## Rounding and estimation conventions

- The symbol $\\approx$ means "is approximately equal to."
- When estimating, round to one significant figure unless a closer approximation is needed for the check.
- Final answers are usually given to a sensible precision determined by the context, not to an arbitrary number of decimal places.

## Conventions for algebraic writing

- Omit the multiplication sign between a numeral and a letter, or between two letters: $3x$, $ab$.
- Do not omit the multiplication sign between two numerals: write $3 \\times 4$, not $34$.
- Write fractions in stacked form $\\frac{a}{b}$ rather than inline $a/b$ when space permits, to reduce ambiguity.
- Use brackets to group multi-character exponents or subscripts: $x^{2n}$, $a_{n + 1}$.
- Write negative coefficients with the sign attached to the numeral: $-3x$, not $-(3x)$ unless the grouping is intentional.

## Domain and range conventions

- The **domain** of a function is the set of allowed inputs.
- The **range** is the set of possible outputs.
- In applied problems, the domain is often restricted by context: a count of sandwiches must be a nonnegative whole number; time until a tank drains must be nonnegative and cannot exceed the time at which the tank becomes empty.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\leq$, $\\geq$, and $\\cdot$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy for contributors

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a concept is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};