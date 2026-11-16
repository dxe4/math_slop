var e=`---
parent_id: book-proof-safe-real-analysis
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair Routes"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair Routes

## Preparation for the current route

The current L3–L4 route requires a first course in proof and the computational limits, derivatives, integrals, sequences and series of single-variable calculus. Use [Introduction to Proof](#/item/book-introduction-to-proof) to repair logical preparation and [Algebra and Functions](#/item/book-algebra-and-functions) for algebraic preparation. The Euclidean chapters additionally require basic matrices, linear maps and solving invertible linear systems.

The original diagnostic below is preserved. Its references to the earlier book order should be interpreted using the current [overview](#/item/book-proof-safe-real-analysis); the chapter identifiers and the mathematical questions themselves remain unchanged. Measure and Fourier preparation is required only for the explicitly retained further-reading sections.

## How to use this diagnostic

This is a routing instrument, not an entrance examination. Set aside forty-five to sixty minutes. Work without a computer algebra system, but use ordinary scratch paper. Mark an item \\(S\\) if the reasoning feels secure, \\(P\\) if it is partly secure, and \\(N\\) if you do not yet know how to begin. A numerical score is less informative than the pattern: algebraic manipulation, function language, inequalities, limits, or proof logic may need different repairs.

Answers follow immediately because the purpose is diagnosis. Before reading an answer, write at least the kind of product required: calculation, example, counterexample, direct proof, or negation. If a solution uses an unfamiliar fact, record that fact rather than treating the entire problem as one opaque failure.

The first four groups support Chapters 1–14. The final group previews the language used in the metric and measure chapters. A learner can begin the book while repairing a few local gaps; widespread difficulty with Groups A–C suggests taking a preparatory route first.

## Group A: algebra, absolute value, and inequalities

### A1. Factor before cancelling

For \\(x\\ne 1\\), simplify \\((x^2-1)/(x-1)\\) and state why the restriction remains even after simplification.

**Answer.** Since \\(x^2-1=(x-1)(x+1)\\), the quotient equals \\(x+1\\) when \\(x\\ne 1\\). The original expression is undefined at \\(x=1\\); algebraic simplification gives a function agreeing away from that point, not permission to restore the excluded input.

### A2. Solve an absolute-value inequality

Solve \\(|2x-3|<5\\).

**Answer.** The inequality is equivalent to \\(-5<2x-3<5\\), hence \\(-2<2x<8\\), so \\(-1<x<4\\). The strict endpoints matter.

### A3. Bound a rational expression

Show that \\(|x|/(1+|x|)\\le 1\\) for every real \\(x\\), and determine whether equality occurs.

**Answer.** Both numerator and denominator are nonnegative and \\(|x|\\le 1+|x|\\), so division by the positive denominator gives the bound. Equality would imply \\(|x|=1+|x|\\), impossible. The supremum is nevertheless \\(1\\), because the values approach \\(1\\) as \\(|x|\\to \\infty\\).

### A4. A useful triangle estimate

Suppose \\(|x-2|<1/2\\). Find a simple upper bound for \\(|x+2|\\).

**Answer.** Write \\(x+2=(x-2)+4\\). Then \\(|x+2|\\le |x-2|+4<9/2\\). In epsilon arguments, a local condition on \\(x\\) is often used first to control a second factor.

### A5. Reciprocals reverse order

If \\(0<a\\le b\\), prove \\(1/b\\le 1/a\\) without appealing to a graph.

**Answer.** Multiplication by the positive number \\(ab\\) preserves order. The desired inequality is equivalent to \\(a\\le b\\), which is assumed. Positivity is essential; it licenses the multiplication and the reciprocals.

## Group B: functions and their domains

### B1. Composition

Let \\(f(x)=\\sqrt{x}\\) on \\([0,\\infty)\\) and \\(g(x)=x^2-4\\) on \\(R\\). Determine the real domain of \\(f\\circ g\\).

**Answer.** We need \\(g(x)\\ge 0\\), so \\(x^2-4\\ge 0\\), which gives \\(x\\le -2\\) or \\(x\\ge 2\\). A composition is defined only where the inner output lies in the outer domain.

### B2. Image and preimage

For \\(f(x)=x^2\\), find the image of \\([-2,1]\\) and the preimage of \\([1,4]\\) in the domain \\(R\\).

**Answer.** The image is \\([0,4]\\). The preimage is \\([-2,-1]\\cup [1,2]\\). Images push input sets forward; preimages collect every input whose output lies in the target set.

### B3. Injectivity and restriction

Why is \\(x\\mapsto x^2\\) not injective on \\(R\\), and give two natural domain restrictions on which it is injective.

**Answer.** Distinct inputs \\(1\\) and \\(-1\\) have the same output. Restrictions to \\([0,\\infty)\\) or to \\((-\\infty,0]\\) are injective. Saying “take the inverse square” is unsafe until a branch and domain are fixed.

### B4. A function without a formula

Give an example of a function from the set of finite words over \\(\\{a,b\\}\\) to the nonnegative integers \\(N_0=\\{0,1,2,\\ldots\\}\\).

**Answer.** Map each word to its length, or to its number of occurrences of \\(a\\). A function is a single-valued assignment on a stated domain; a closed-form real expression is not required.

### B5. Pointwise versus global information

For \\(f_n(x)=x^n\\) on \\([0,1]\\), determine the pointwise limit.

**Answer.** If \\(0\\le x<1\\), then \\(x^n\\to 0\\); at \\(x=1\\), every value is \\(1\\). Thus the limit is \\(0\\) on \\([0,1)\\) and \\(1\\) at \\(1\\). The exceptional endpoint warns that convergence of functions must track both \\(n\\) and \\(x\\).

## Group C: sequences, sums, and calculus memory

### C1. Tail behavior

Find the limit of \\((3n+1)/(n+2)\\).

**Answer.** Divide numerator and denominator by \\(n\\): \\((3+1/n)/(1+2/n)\\to 3\\). Chapter 1 replaces this computational recognition with a quantified proof.

### C2. A divergent sequence

Explain why \\((-1)^n\\) cannot converge.

**Answer.** Its even subsequence is constantly \\(1\\) and its odd subsequence is constantly \\(-1\\). If the original sequence converged, every subsequence would have the same limit. The two persistent values contradict that consequence.

### C3. Geometric series

For \\(|r|<1\\), recall the value of \\(\\sum_{n=0}^\\infty r^n\\) and verify the finite identity behind it.

**Answer.** For \\(r\\ne 1\\), \\((1-r)\\sum_{n=0}^N r^n=1-r^{N+1}\\), so the partial sum is \\((1-r^{N+1})/(1-r)\\). When \\(|r|<1\\), the power tends to zero, yielding \\(1/(1-r)\\).

### C4. Derivative from the definition

Use the difference quotient to find the derivative of \\(f(x)=x^2\\) at \\(a\\).

**Answer.** For \\(h\\ne 0\\), \\(((a+h)^2-a^2)/h=2a+h\\). Taking \\(h\\to 0\\) gives \\(2a\\). Cancelling \\(h\\) is valid only before the limit, where \\(h\\) is explicitly nonzero.

### C5. Integral as accumulation

Compute \\(\\int _0^1 2x dx\\), then state one fact a rigorous construction of the integral must justify.

**Answer.** The value is \\([x^2]_0^1=1\\). A construction must justify, for example, that the function is integrable, that antiderivatives recover the integral under appropriate hypotheses, or that approximating sums converge independently of the partitions chosen.

## Group D: logic and proof structure

### D1. Negate a universal statement

Negate: “For every real \\(x\\), if \\(x>0\\) then \\(x^2>1\\).”

**Answer.** “There exists a real \\(x\\) such that \\(x>0\\) and \\(x^2\\le 1\\).” The value \\(x=1/2\\) is a witness. Negating an implication \\(P\\Rightarrow Q\\) produces \\(P \\text{ and } \\neg Q\\).

### D2. Negate convergence

Negate: “For every \\(\\varepsilon>0\\) there exists \\(N\\) such that every \\(n\\ge N\\) satisfies \\(|a_n-L|<\\varepsilon\\).”

**Answer.** “There exists \\(\\varepsilon_0>0\\) such that for every \\(N\\) there exists \\(n\\ge N\\) with \\(|a_n-L|\\ge \\varepsilon_0\\).” Each quantifier changes and the final strict inequality is negated. The fixed \\(\\varepsilon_0\\) must survive every proposed tail.

### D3. Converse and contrapositive

For the claim “if an integer is divisible by \\(4\\), then it is even,” write its converse and contrapositive, and decide which are true.

**Answer.** The converse is “if an integer is even, then it is divisible by \\(4\\),” which is false (\\(2\\) is a counterexample). The contrapositive is “if an integer is not even, then it is not divisible by \\(4\\),” which is true and logically equivalent to the original.

### D4. Find the gap

A student writes: “Let \\(S\\) be bounded above. Since \\(\\sup S\\) is the largest element of \\(S\\), it belongs to \\(S\\).” Identify the error.

**Answer.** A supremum is the least upper bound and need not be a member. The open interval \\((0,1)\\) has supremum \\(1\\) but no largest element. A maximum is a member of the set; a supremum need not be.

### D5. Choose a proof method

To prove that \\(\\sqrt{2}\\) is irrational, which opening is more promising: direct proof, contradiction, or induction? State the first two lines.

**Answer.** Contradiction is standard: assume \\(\\sqrt{2}=p/q\\) for integers \\(p,q\\) in lowest terms with \\(q\\ne 0\\). Squaring gives \\(p^2=2q^2\\); parity then forces both \\(p\\) and \\(q\\) even, contradicting lowest terms.

## Group E: sets, metrics, and measure previews

### E1. Open and closed on the real line

Classify \\((0,1)\\), \\([0,1]\\), and the empty set as open or closed in \\(R\\) with its usual distance.

**Answer.** \\((0,1)\\) is open and not closed; \\([0,1]\\) is closed and not open. The empty set is both open and closed. “Not open” does not mean “closed”; the two properties are not logical opposites.

### E2. A metric check

On \\(R^2\\), let \\(d_1(x,y)=|x_1-y_1|+|x_2-y_2|\\). Verify the triangle inequality using the real triangle inequality.

**Answer.** For any \\(x,y,z\\), apply \\(|x_i-z_i|\\le |x_i-y_i|+|y_i-z_i|\\) for \\(i=1,2\\) and add. The result is \\(d_1(x,z)\\le d_1(x,y)+d_1(y,z)\\).

### E3. Countable unions

Write the rational numbers as a countable union of singleton sets. Does that make \\(Q\\) open in \\(R\\)?

**Answer.** If \\((q_n)\\) enumerates \\(Q\\), then \\(Q=\\bigcup_{n=1}^\\infty\\{q_n\\}\\). Each singleton is closed, but a countable union of closed sets need not be closed or open. Closure properties must be recalled with the correct finite or arbitrary qualifier. In particular, \\(Q\\) is not open: every neighbourhood of any rational contains an irrational.

### E4. Almost everywhere

On \\([0,1]\\), define \\(f=1\\) on the rational points and \\(f=0\\) on the irrational points. If rational points have measure zero, what does \\(f=0\\) almost everywhere mean?

**Answer.** It means the exceptional set where \\(f\\) differs from zero has measure zero; here that set is \\(Q\\cap [0,1]\\). It does not mean there are no exceptional points.

### E5. Norm comparison preview

For a bounded measurable function on \\([0,1]\\), explain informally why a small supremum norm forces a small \\(L^1\\) norm, but a small \\(L^1\\) norm need not force a small supremum norm.

**Answer.** If \\(|f(x)|\\le M\\) everywhere, then the area under \\(|f|\\) is at most \\(M\\) times the interval length, so \\(\\lVert f\\rVert_1\\le \\lVert f\\rVert_\\infty\\). Conversely, a spike can have height one on a very narrow interval: its area is small while its supremum remains one.

## Reading the pattern

Mostly \\(S\\) in Groups A–D means the book can serve as a direct first course. Partial security in one group calls for a focused repair alongside Chapter 1. Mostly \\(N\\) in Groups A or B suggests repairing algebra and function language first. Mostly \\(N\\) in Group D is common among successful calculus students; begin with proof foundations and Chapter 1 rather than repeating computational calculus. Group E is a preview: unfamiliarity there does not block entry.

## Repair routes in the Math Atlas

Use stable catalog routes rather than searching at random.

- For quantifiers, implications, contradiction, induction, and proof planning, use [Proof Foundations](#/item/course-proof-foundations).
- For symbolic domains, factorization, rational expressions, inequalities, and piecewise reasoning, use [Symbolic Algebra by Form](#/item/deep-dive-symbolic-algebra-forms-workflow) and [Inequalities and Piecewise Boundaries](#/item/deep-dive-inequalities-piecewise).
- For functions, composition, inverse images, and representations, use [Functions Before Formulas](#/item/deep-dive-functions-before-formulas) or the fuller [Algebra and Functions course](#/item/course-algebra-functions-standard).
- For derivatives, integrals, and the conceptual meaning of limits, use [Calculus as Change and Accumulation](#/item/course-calculus-change).
- For a dedicated convergence warm-up, use [Sequences and Series](#/item/course-sequences-series-convergence).
- For set language and topology before abstraction, use [Shape Before Distance](#/item/deep-dive-shape-before-distance).
- For a separate measure-first sequence, use [Measure and Lebesgue Integration](#/item/course-measure-lebesgue-integration).

A repair route is complete when you can explain the underlying decision, not merely repeat a worked pattern. Return to the missed diagnostic item after studying; solve it without looking, then invent a neighboring example. If the neighboring example changes your method, state why.

## A two-week bridge plan

For a compact preparation period, use ten sessions.

1. Domains, factorization, absolute value, and inequalities.
2. Functions, images, preimages, composition, and injectivity.
3. Logical connectives, implications, converses, and contrapositives.
4. Quantifiers and their negations.
5. Direct proof, contradiction, and counterexample.
6. Sequence notation, subsequences, and geometric sums.
7. Limit computations followed by one epsilon proof.
8. Open intervals, neighborhoods, and set operations.
9. Derivative and integral definitions at a conceptual level.
10. Retake the diagnostic, classify remaining gaps, and begin Chapter 1.

Spend at least half of each session producing mathematics without a model answer in view. Preparation for analysis is preparation to make justified choices under incomplete guidance.
`;export{e as default};