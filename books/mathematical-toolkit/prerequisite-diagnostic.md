
# Prerequisite Diagnostic

This book assumes three kinds of background: comfort with elementary algebra and logical notation, familiarity with functions and simple graphs, and the ability to read a mathematical definition and test it against examples. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Elementary algebra.** Variables, equations, inequalities, and basic manipulation. You should be comfortable expanding $(a + b)^{2}$, solving $2x + 3 = 7$, and reading expressions with nested parentheses.
2. **Functions and graphs.** The idea of a function as a rule, domain and codomain, and the interpretation of simple graphs. You should be able to read $f(x) = mx + b$ and predict the effect of changing $m$.
3. **Logical notation and quantifiers.** The meaning of "for all" ($\forall$), "there exists" ($\exists$), and "implies" ($\Rightarrow$). You should be able to read a definition such as "$n$ is even if there exists an integer $k$ with $n = 2k$."

## Self-diagnostic questions with answers

### Elementary algebra

**Question 1.** Expand $(x + 3)^{2}$ and explain why $(x + 3)^{2} \neq x^{2} + 9$.

> **Answer.** $(x + 3)^{2} = x^{2} + 6x + 9$. The error $x^{2} + 9$ omits the cross term $2 \cdot x \cdot 3 = 6x$, which arises from the distributive law applied to $(x + 3)(x + 3)$.

**Question 2.** Solve $2(x - 1) + 4 = 3x$ and state the operation used at each step.

> **Answer.** Expand: $2x - 2 + 4 = 3x$, so $2x + 2 = 3x$. Subtract $2x$ from both sides: $2 = x$. Each step preserves equality by applying the same operation to both sides. The solution is $x = 2$.

**Question 3.** For which real $x$ is $\lvert x - 2 \rvert < 0.5$ true? Write the answer as an interval.

> **Answer.** The inequality means the distance from $x$ to $2$ is less than $0.5$, so $1.5 < x < 2.5$. In interval notation, $(1.5, 2.5)$.

### Functions and graphs

**Question 4.** In $f(x) = mx + b$, what happens to the graph when $m$ increases? What happens when $b$ increases?

> **Answer.** With $b$ held fixed, increasing $m$ makes the numerical slope larger, so the line rotates counterclockwise about the common point $(0,b)$. It does not rotate about every point on either line. Increasing $m$ also need not make the line steeper in the sense of increasing $|m|$: changing $m$ from $-5$ to $-4$ decreases $|m|$. Increasing $b$ translates the line upward by the same amount for every $x$, without changing its slope.

**Question 5.** Let $g(x) = x^{2} - 4$. What is the domain? What are the zeros? What is $g(0)$?

> **Answer.** Domain: all real numbers, $\mathbb{R}$. Zeros: $x = 2$ and $x = -2$, since $x^{2} - 4 = (x - 2)(x + 2)$. And $g(0) = -4$.

### Logical notation and quantifiers

**Question 6.** Negate the statement: "For every real $x$, there exists an integer $n$ with $n > x$."

> **Answer.** "There exists a real $x$ such that for every integer $n$, $n \leq x$." Both quantifiers change type and the inequality is negated. The original statement is true (the integers are unbounded above), so its negation is false; the exercise tests logical form, not truth value.

**Question 7.** A definition says: "A set $S$ is bounded above if there exists $M \in \mathbb{R}$ such that $s \leq M$ for all $s \in S$." Identify the quantifiers and the conclusion.

> **Answer.** Existential over $M \in \mathbb{R}$; universal over $s \in S$. Conclusion: every element of $S$ is at most $M$.

**Question 8.** Explain why the following argument is invalid: "The formula $n^{2} + n + 41$ is prime for $n = 1, 2, 3$, so it is prime for all positive integers $n$."

> **Answer.** A finite check does not prove a universal statement unless the domain is finite and exhausted. In fact, for $n = 41$ the value is $41^{2} + 41 + 41 = 41(41 + 1 + 1) = 41 \cdot 43$, which is composite.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Elementary algebra

- *Math Atlas: Algebra: Patterns and Structure* --- variables, equations, and algebraic manipulation.
- *Math Atlas: Number, Operations, and Early Algebra* --- place value, operations, and part-whole structure.

### Functions and graphs

- *Math Atlas: Patterns, Functions, and Algebraic Structure* --- from number patterns to functions and graphs.
- *Math Atlas: Precalculus and Function Analysis* --- a deeper treatment of function classes and their properties.

### Logical notation and quantifiers

- *Math Atlas: Discrete Mathematics and Proof* --- logical structure, quantifiers, and proof techniques.
- *Math Atlas: The Working Mathematician's Toolkit* (this book), Chapter 1 --- active reading and annotation of definitions.

## What this book does not assume

- Advanced calculus: derivatives and integrals are mentioned occasionally but never required.
- Programming: code appears in plain text for readability. No prior programming experience is required.
- Research experience: every chapter introduces its topic from first principles.
- LaTeX: Chapter 3 teaches the subset needed for papers and problem sets.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object, type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
