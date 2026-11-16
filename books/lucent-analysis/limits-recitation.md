# Recitation B. Which theorem should carry the argument?

**Role:** guided recitation. Work after series, topology, and continuity. The three cases below require different kinds of control even though every one contains a limit.

## Case 1: terms shrink, but tails may not

For the series ∑1/n, an argument that checks only 1/n→0 stops too early. A convergent series needs *every sufficiently late finite tail* to be small. Take m=2ᵏ and n=2ᵏ⁺¹. The tail from m+1 through n has 2ᵏ terms, each at least 1/2ᵏ⁺¹, so its sum is at least 1/2. This gives one fixed tolerance, say ε=1/3, for which arbitrarily late tails fail the Cauchy criterion. The block choice is purposeful: many small terms can still accumulate a substantial amount.

Try the same block strategy on ∑1/n². It gives an upper bound at most 2ᵏ/(2ᵏ)²=2⁻ᵏ for the terms from 2ᵏ+1 to 2ᵏ⁺¹. The block contributions now shrink geometrically. Alternatively, compare 1/n² with 1/[n(n−1)] for n≥2 and telescope. This contrast teaches which feature of a term estimate matters: not just pointwise smallness, but a summable control on the collection of tail terms.

## Case 2: boundedness versus retaining the limit

A sequence in (0,1) cannot escape to infinity. It can still escape the set through zero or one. The sequence 1/(n+1) demonstrates this. Bolzano–Weierstrass gives a subsequence converging in ℝ; the word “in ℝ” is the precise conclusion. Closedness is what retains its limit inside a bounded set. This is why compactness is the correct hypothesis in the extreme value theorem. On (0,1), f(x)=x has a finite supremum of function values but no point attaining it.

## Case 3: existence of a root versus uniqueness

Let p(x)=x³+x−1. Continuity and p(0)<0<p(1) guarantee a zero by the intermediate value theorem. The same theorem says nothing about uniqueness. For v>u, p(v)−p(u)=(v−u)(v²+uv+u²+1)>0; this strict increase supplies uniqueness. When solving a new problem, write the existence and uniqueness arguments on separate lines. The polynomial q(x)=x²−1 on [−2,2] shows why: it is continuous with zero-crossing behavior and has two roots.

```exercise
{"id": "analysis-recitation-extreme", "type": "choice", "prompt": "A function \\(f\\) extends continuously from \\((0,1)\\) to \\([0,1]\\). What does the extreme value theorem guarantee?", "options": [{"label": "The extension attains a maximum and minimum somewhere in [0,1].", "correct": true, "feedback": "Exactly. The extrema may occur at the new endpoints."}, {"label": "The original f attains both extrema at interior points.", "correct": false, "feedback": "For f(x)=x, the extension's extrema occur at 0 and 1, outside the original domain."}, {"label": "f has zero derivative at its extension's maximum.", "correct": false, "feedback": "An endpoint maximum need not satisfy an interior derivative condition."}], "hints": ["State the domain to which the theorem applies, including the endpoints."], "solution": "A continuous extension on \\([0,1]\\) attains both extrema there by the extreme value theorem. They may be at 0 or 1, which are absent from the original domain (0,1). The theorem says nothing about a derivative at a boundary point.", "transfer": "Changed case: f(x)=x(1−x) on (0,1). Does f attain a maximum or minimum on this noncompact interval? Explain why the example does not contradict the extreme value theorem.", "transferSolution": "Completing the square gives f(x)=1/4−(x−1/2)², so the maximum 1/4 is attained at x=1/2. But f(x)>0 for 0<x<1 and tends to 0 at both ends, so its infimum 0 is not attained and there is no minimum. Compactness is sufficient for both extrema, not necessary for one particular maximum."}
```

**Recitation finish:** Explain, without naming the theorem first, what you need to know about a sequence of sets, a sequence of partial sums, or a function on an interval. Then choose the theorem whose conclusion matches that need.
