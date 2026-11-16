# Unit examination: from limits to the Fundamental Theorem

**Role:** closed-solution unit assessment after Chapters 1–3, accumulation by
Riemann sums, the Fundamental Theorem, Recitation A, and Problem Sets A and B.
Suggested time: **120 minutes**. Total: **60 marks**.

You may use one handwritten A4 reference sheet containing definitions and
theorem statements. Do not use worked solutions, a computer algebra system, or
the interactive figures during the timed attempt. A calculator may check
arithmetic after you have displayed the mathematical setup. Write complete
arguments: a graph or numerical sample earns no proof marks for a universal
claim.

Each problem is worth 12 marks. Unless a problem gives a different split, award
2 marks for setup and hypotheses, 7 for the central argument, 2 for a check or
interpretation, and 1 for a clear conclusion. After the timed attempt, use the
rubric to mark in a different color. Record one error by category: definition,
hypothesis, algebra, model, or interpretation. Attempt each changed case at
least three days later without the original solution open.

**Outcomes assessed:** quantified limits; derivatives as local linear laws;
composition and inverse differentiation with domain conditions; Riemann sums;
and both directions of the Fundamental Theorem.

## 1. Control a reciprocal limit (12 marks)

```exercise
{"id":"calc-limits-ftc-exam-reciprocal","type":"written","prompt":"Prove directly from the epsilon–delta definition that lim(x→2) 1/x = 1/2. Your delta must work for every epsilon>0. Explain precisely where you keep the denominator away from zero, and state why checking the graph near 2 would not prove the result.","hints":["First impose |x−2|<1 and derive a lower bound for |x|.","Then |1/x−1/2|=|x−2|/(2|x|)."],"rubric":["Begins with an arbitrary epsilon>0 and chooses delta=min(1,2 epsilon)","Uses |x−2|<1 to prove |x|>1","Obtains |1/x−1/2|<delta/2≤epsilon with strict inequalities in the right places","Explains the universal quantifier and why finite sampling is insufficient"],"solution":"Let epsilon>0 and choose delta=min(1,2 epsilon). If 0<|x−2|<delta, then |x−2|<1, so 1<x<3 and in particular |x|>1. Therefore |1/x−1/2|=|x−2|/(2|x|)<|x−2|/2<delta/2≤epsilon. This proves the limit. The preliminary unit restriction supplies a uniform positive lower bound for the denominator. A graph displays only finitely many locations at finite resolution and cannot establish the implication for every x in the punctured delta-neighbourhood.","transfer":"Changed case, after a delay: prove directly that lim(x→3) 1/x=1/3. Give one delta valid for every epsilon>0 and identify the local denominator bound.","transferSolution":"Choose delta=min(1,6 epsilon). If 0<|x−3|<delta, then 2<x<4, hence |x|>2. Thus |1/x−1/3|=|x−3|/(3|x|)<|x−3|/6<delta/6≤epsilon. The restriction delta≤1 keeps the input at least two units from zero."}
```

## 2. Recover the local linear law (12 marks)

```exercise
{"id":"calc-limits-ftc-exam-local-law","type":"written","prompt":"For f(x)=x^3 at a=−1, expand f(a+h) exactly in the form f(a)+mh+r(h). Determine m, prove |r(h)|≤4h² for |h|≤1, and use the definition of derivative to justify the local linear model. Then find an explicit error bound when |h|≤0.01.","hints":["Expand (−1+h)^3 before taking a limit.","Differentiability needs r(h)/h→0; r(h)→0 alone is weaker."],"rubric":["Finds m=3 and r(h)=−3h²+h³","Proves |r(h)|≤4h² on |h|≤1","Shows |r(h)/h|≤4|h|→0 and links this to the derivative","Gives the finite-step bound |r(h)|≤0.0004 for |h|≤0.01"],"solution":"Exact expansion gives f(−1+h)=−1+3h−3h²+h³, so m=3 and r(h)=−3h²+h³. For |h|≤1, |r(h)|≤3h²+|h|³≤4h². For h≠0, |r(h)/h|≤4|h|, which tends to zero. Hence [f(−1+h)−f(−1)]/h=3+r(h)/h tends to 3, proving f′(−1)=3 and validating the local law f(−1+h)=−1+3h+o(h). If |h|≤0.01, the same estimate gives |r(h)|≤4(0.01)²=0.0004.","transfer":"Changed case, after a delay: derive the local linear law for x^3 at a=2. Bound the remainder by C h² on |h|≤1 using the smallest integer C you can justify from the exact expansion.","transferSolution":"(2+h)^3=8+12h+6h²+h³. Thus m=12 and r(h)=6h²+h³. On |h|≤1, |r(h)|≤7h², so C=7 works. In fact the supremum of |6+h| on [−1,1] is 7, so no smaller uniform constant works with this factor estimate. Since |r(h)/h|≤7|h|→0, f′(2)=12."}
```

## 3. An inverse derivative without an inverse formula (12 marks)

```exercise
{"id":"calc-limits-ftc-exam-inverse","type":"written","prompt":"Let q(x)=x+e^x. Prove that q has an inverse from R to R, and compute (q^−1)'(1) without solving q(x)=y explicitly. State every hypothesis needed for the inverse derivative theorem. A classmate writes 1/q'(1); diagnose the error.","hints":["Use q′(x)>0 and the two tail limits to establish bijectivity.","Find the input a satisfying q(a)=1 before evaluating q′."],"rubric":["Proves strict increase and uses continuity plus tail behaviour to establish a bijection R→R","Finds q(0)=1 and q′(0)=2","Applies the inverse derivative theorem at the correct preimage to obtain 1/2","Explains why q′ must be evaluated at q^−1(1), not at the output 1"],"solution":"The function is continuous and q′(x)=1+e^x>0, so it is strictly increasing. Also q(x)→−∞ as x→−∞ and q(x)→∞ as x→∞. The intermediate value theorem and strict increase therefore make q a bijection from R to R. Since q(0)=1 and q′(0)=2≠0, the inverse derivative theorem gives (q^−1)'(1)=1/q′(q^−1(1))=1/q′(0)=1/2. The expression 1/q′(1) evaluates the original derivative at the output coordinate instead of at its preimage; it would give 1/(1+e), which is unrelated to the requested local inverse slope.","transfer":"Changed case, after a delay: restrict p(x)=x^3+x to R. Prove it is invertible and find (p^−1)'(10).","transferSolution":"p′(x)=3x²+1>0, so p is strictly increasing; it is continuous with tails −∞ and ∞, hence is a bijection R→R. Since p(2)=10 and p′(2)=13, the inverse derivative theorem yields (p^−1)'(10)=1/13."}
```

## 4. A Riemann sum with an exact error (12 marks)

```exercise
{"id":"calc-limits-ftc-exam-midpoint","type":"written","prompt":"Partition [0,1] into n equal cells and use the midpoint of each cell to approximate the integral of x². Starting from the finite sum, prove M_n=1/3−1/(12n²). Deduce the integral and find the smallest positive integer n for which the absolute error is below 10^−4. State what part is finite arithmetic and what part uses a limit.","hints":["The kth midpoint is (k−1/2)/n for 1≤k≤n.","Use the formulas for sum k and sum k² before dividing by n³."],"rubric":["Writes M_n=(1/n) sum from k=1 to n of ((k−1/2)/n)²","Simplifies the finite sum to 1/3−1/(12n²)","Takes the limit to obtain the integral 1/3 and solves n²>2500/3","Identifies n=29 and distinguishes exact finite algebra from the limiting definition"],"solution":"The width is 1/n and the kth midpoint is (k−1/2)/n, so M_n=n^−3 sum(k−1/2)². Expanding the square and using sum k=n(n+1)/2 and sum k²=n(n+1)(2n+1)/6 gives sum(k−1/2)²=n(4n²−1)/12. Hence M_n=(4n²−1)/(12n²)=1/3−1/(12n²). Taking n→∞ gives the Riemann integral 1/3. The error is 1/(12n²); requiring it to be below 10^−4 gives n²>1/(0.0012)=2500/3. Since 28²=784 is too small and 29²=841 is large enough, the least n is 29. The sum identity and error formula are finite algebra; identifying the integral uses convergence of these Riemann sums.","transfer":"Changed case, after a delay: derive the right-endpoint sum R_n for x on [0,1], find its exact error from 1/2, and determine the least n giving error below 10^−3.","transferSolution":"R_n=(1/n) sum(k/n)=n^−2·n(n+1)/2=(n+1)/(2n)=1/2+1/(2n). Thus the integral is 1/2 and the error is 1/(2n). The strict requirement 1/(2n)<10^−3 means n>500, so the least integer is 501."}
```

## 5. Moving endpoints and orientation (12 marks)

```exercise
{"id":"calc-limits-ftc-exam-moving-endpoints","type":"written","prompt":"For 0≤x≤2 define A(x)=integral from x to x² of t dt. Use the FTC and chain rule to find A′(x), locate every global maximum and minimum, and verify the values with an explicit formula. Explain the sign of A(x) on 0<x<1 without calculating an antiderivative first.","hints":["Differentiate both moving endpoints; the lower endpoint contributes a minus sign.","A continuous function on a closed interval requires endpoint checks as well as stationary points."],"rubric":["Finds A′(x)=2x³−x and the candidates 0, 1/sqrt(2), and 2","Uses A(x)=(x⁴−x²)/2 to compare all candidates","Finds the global minimum −1/8 and global maximum 6 at x=2","Explains that x²<x on (0,1), so the orientation reverses an integral of a positive integrand"],"solution":"The integrand is continuous, so the variable-endpoint FTC gives A′(x)=x²·2x−x=2x³−x=x(2x²−1). The candidates on [0,2] are x=0, x=1/sqrt(2), and x=2. Direct integration gives A(x)=(x⁴−x²)/2. Therefore A(0)=0, A(1/sqrt(2))=(1/4−1/2)/2=−1/8, and A(2)=(16−4)/2=6. Compactness ensures extrema, so −1/8 is the global minimum and 6 the global maximum. For 0<x<1, the upper label x² is smaller than the lower label x; reversing the bounds makes the integral of the positive function t negative.","transfer":"Changed case, after a delay: let B(x)=integral from x to x² of 1 dt on [0,2]. Use FTC first, then an explicit formula, to find its extrema and explain its sign on (0,1).","transferSolution":"FTC gives B′(x)=2x−1, so the only interior stationary point is x=1/2. Since B(x)=x²−x, B(0)=0, B(1/2)=−1/4, and B(2)=2. Thus the global minimum is −1/4 at 1/2 and the global maximum is 2 at x=2. It is negative on (0,1) because the stated upper endpoint x² lies below x, reversing the orientation of a positive unit integrand."}
```

## Marking conference and delayed return

Add the five rubric totals before opening any changed-case solution. For every
lost mark, write the earliest line that would have prevented the error. A score
above 48/60 is strong evidence for this unit only if no core outcome scores below
7/12. If an outcome does, return to its visual argument and problem set, then
solve a fresh changed case.

Three to seven days later, attempt all five transfer prompts in one 60-minute
block. Use no hints for the first 40 minutes. Compare methods as well as final
answers: the purpose of the delayed paper is to test whether the definition,
theorem hypotheses, and representation choices can be reconstructed after the
worked context has faded.
