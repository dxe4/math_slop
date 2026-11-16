var e=`---
parent_id: book-functions-equations-proof
chapter_id: project-prove-a-new-result
title: "Project: Prove a New Result"
level: undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Project: Prove a New Result

## Purpose of this project

Throughout this book we have studied functions, equations, and proof techniques as separate topics. This project asks you to synthesize them. You will choose a mathematical claim that is not proved in the preceding chapters, state it as a theorem with explicit hypotheses, prove it rigorously, and verify your proof on a concrete example.

The goal is not novelty in the research sense---your theorem may be classical---but novelty *for you*: a result whose proof requires combining ideas from at least two prior chapters and whose hypotheses must be checked carefully.

## Suggested project topics

Choose one of the following, or propose your own with comparable scope.

### Topic A: A functional equation with regularity

Prove a classification theorem for functions satisfying a functional equation under a regularity hypothesis. For example:

> **Theorem.** Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy $f(x+y)+f(x-y)=2f(x)f(y)$ for all $x,y\\in\\mathbb{R}$. Then either $f(x)=0$ for all $x$, or there exists $a\\in\\mathbb{R}$ such that $f(x)=\\cosh(ax)$ or $f(x)=\\cos(ax)$.

This combines the functional equation techniques from **Functions are typed assignments** with the continuity arguments from **Exponential and Logarithmic Functions**.

### Topic B: Stability via Lyapunov functions

Prove a Lyapunov stability theorem for a nonlinear system and apply it to a specific model. For example:

> **Theorem.** Consider the Lotka-Volterra predator-prey system $x'=x(a-by)$, $y'=y(-c+dx)$ with $a,b,c,d>0$ and $x(0),y(0)>0$. The positive equilibrium is $(c/d,a/b)$. Prove that $H(x,y)=dx-c\\ln x+by-a\\ln y$ is conserved and that every non-equilibrium solution in the positive quadrant is periodic.

For the final deduction, do more than linearize. Check that $H\\to\\infty$ near either coordinate axis and as $x+y\\to\\infty$, that its only critical point in the positive quadrant is the equilibrium, and that the vector field does not vanish on any other level set. These facts turn each relevant connected component of a level set into a compact closed curve traced periodically by the flow.

This combines **Differential Equations** and **Dynamical Systems**.

### Topic C: A recurrence with generating functions

Prove a closed-form formula for a combinatorial sequence using generating functions. For example:

> **Theorem.** The Catalan numbers $C_{n}=\\frac{1}{n+1}\\binom{2n}{n}$ satisfy $C_{0}=1$ and $C_{n+1}=\\sum_{k=0}^{n}C_{k}C_{n-k}$. Prove this by showing that the generating function $C(x)=\\sum_{n=0}^{\\infty}C_{n}x^{n}$ satisfies $C(x)=1+xC(x)^{2}$ and solving for $C(x)$.

This combines **Difference Equations** with **Power Series**.

## Required structure

Your project submission must contain:

1. **Statement.** A clear theorem with all hypotheses stated explicitly.
2. **Motivation.** Why is this result interesting? What does it connect?
3. **Proof.** A rigorous argument with no logical gaps. Cite prior chapters by name when using their results.
4. **Example.** A concrete numerical or computational instantiation of the theorem.
5. **Boundary analysis.** A counterexample or limiting case showing where a hypothesis is necessary.
6. **Reflection.** What was the hardest part of the proof? What would you try next?

## A worked illustration: Topic A

We demonstrate the required structure using a variant of Topic A.

### Statement

**Theorem 11.1.** Let $f:\\mathbb{R}\\to\\mathbb{R}$ be differentiable at $0$ with $f(0)=1$, and suppose $f$ satisfies

$$f(x+y)=f(x)f(y)\\quad\\text{for all}\\quad x,y\\in\\mathbb{R}.$$

Then $f(x)=e^{cx}$ for some constant $c\\in\\mathbb{R}$.

### Motivation

This is the exponential Cauchy equation. Without regularity, pathological solutions exist; with differentiability at a single point, the familiar exponential family is recovered. The result connects the algebraic property of converting addition to multiplication with the analytic property of differentiability.

### Proof

**Step 1: $f$ is everywhere positive.** Setting $x=y=0$ gives $f(0)=f(0)^{2}$, so $f(0)=0$ or $f(0)=1$. By hypothesis $f(0)=1$. For any $x$, $f(x)=f(x/2)^{2}\\ge 0$. If $f(x_{0})=0$ for some $x_{0}$, then $f(x)=f(x_{0})f(x-x_{0})=0$ for all $x$, contradicting $f(0)=1$. Hence $f(x)>0$ for all $x$.

**Step 2: $f$ is differentiable everywhere.** Let $c=f'(0)$. For any $x$,

$$\\frac{f(x+h)-f(x)}{h}=f(x)\\frac{f(h)-1}{h}=f(x)\\frac{f(h)-f(0)}{h}\\to f(x)c$$

as $h\\to 0$. Thus $f'(x)=cf(x)$.

**Step 3: Solve the differential equation.** The ODE $y'=cy$ with $y(0)=1$ has unique solution $y(x)=e^{cx}$. Since $f$ satisfies the same ODE and initial condition, $f(x)=e^{cx}$. ∎

### Example

Take $f(x)=e^{3x}$. Then $f(0)=1$, $f'(0)=3$, and $f(x+y)=e^{3(x+y)}=e^{3x}e^{3y}=f(x)f(y)$. The theorem predicts $c=3$, which matches.

### Boundary analysis

Without differentiability at $0$, the conclusion fails. Assuming the axiom of choice, there exist additive non-linear functions $A:\\mathbb{R}\\to\\mathbb{R}$; then $f(x)=e^{A(x)}$ satisfies $f(x+y)=f(x)f(y)$ but is not of the form $e^{cx}$.

### Reflection

The critical step was proving differentiability everywhere from differentiability at a single point. The functional equation propagates local regularity globally. This is a recurring theme: algebraic constraints plus mild analytic hypotheses often force strong structural conclusions.

## Grading criteria

- **Hypothesis completeness:** Are all domains, codomains, and regularity conditions stated?
- **Logical correctness:** Does each step follow from the previous ones?
- **Citation:** Are results from prior chapters referenced by name?
- **Example verifiability:** Can a reader check the numerical claims independently?
- **Boundary insight:** Is there a genuine counterexample or limiting case?

## Looking forward and back

This project is the capstone of **Functions and Equations: A Proof-Building Book**. It asks you to do what mathematicians do: identify a claim, assemble the necessary tools, write a convincing argument, and test it against reality. The remaining chapters of this book explore additional topics---advanced series methods, further special functions, and deeper proof techniques---but the core skill is the same: state precisely, reason carefully, verify computationally.
`;export{e as default};