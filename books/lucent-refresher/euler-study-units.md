# Return to algebra: preserve the original question

These public written tasks extend [Algebra, functions, and domains](algebra-functions.md). They are unassessed self-study, with public hints, solutions and a descriptive rubric. They are not held-out Practice assessments or qualified human decisions.

For a later return, leave a gap after the original unit and start on a blank page. Record the actual date, any earlier exposure and any help used. If you have already opened a solution, use the task for reconstruction rather than calling it unseen retrieval. The interval is your study choice, not a validated schedule.

## Domain cancellation return

Before opening help, state the domain and decide which operations preserve the original problem. The changed task also asks you to carry an inner function's domain through a composition.

```exercise
{"id":"euler-domains-cancellation-return","type":"written","prompt":"For the real function F(x)=(x²−16)/(x²−3x−4), state the original domain, simplify on that domain, and solve F(x)=8/5. A colleague substitutes x=4 into the simplified rule and calls it a solution. Explain exactly what is wrong, and whether that simplified rule could instead define a different extended function.","hints":["Factor the original denominator before cancelling anything. Keep both original exclusions.","Solve the simplified equation only for allowed inputs. An expression's available extension does not change the domain specified for F."],"rubric":["Factors numerator and denominator and records x≠−1,4 before cancellation","Obtains (x+4)/(x+1) only on the original domain","Finds the equation's sole algebraic candidate x=4 and rejects it","Distinguishes the original function from an extension of its simplified rule"],"solution":"The numerator factors as (x−4)(x+4), and the denominator as (x−4)(x+1). Thus the original domain is ℝ excluding −1 and 4. For those allowed inputs F(x)=(x+4)/(x+1). Multiplying F(x)=8/5 by the nonzero quantity 5(x+1) gives 5x+20=8x+8, so x=4 is the only candidate. It is outside the original domain: the original quotient is 0/0 there. The original equation therefore has no solution. The rule H(x)=(x+4)/(x+1), defined for x≠−1, is an extension of F and has H(4)=8/5. That true statement about H does not supply a value or solution for F.","transfer":"On a later return, let R(x)=(x²−9)/(x²−2x−3). Find the full real domain of L(x)=ln(R(x)), retaining the original definition of R. Then replace ln by the nonnegative square root and find the domain of S(x)=√(R(x)). Explain separately what happens at x=−3, x=−1 and x=3. The logarithm requires a strictly positive input; the square root permits zero.","transferSolution":"R has denominator (x−3)(x+1), so x=−1 and x=3 are excluded before cancellation. On its domain R(x)=(x+3)/(x+1). The ratio is positive for x<−3 and x>−1, zero at x=−3, and negative for −3<x<−1. For L the domain is (−∞,−3) ∪ (−1,3) ∪ (3,∞). For S it is (−∞,−3] ∪ (−1,3) ∪ (3,∞). At −3 the original denominator is nonzero and R=0: the square root is defined but ln is not. At −1 the original denominator vanishes and the simplified ratio still has a pole. At 3 the original quotient is undefined even though its simplified extension would be positive there. Neither outer function repairs a missing inner value."}
```

## Domain feedback and repair

<details>
<summary>Use after an attempt: locate the first consequential error</summary>

- **A cancelled input reappeared.** Write the original denominator's zero set above every transformed line. Cancellation proves equality on the old domain; it does not enlarge that domain.
- **The algebra produced 4, so 4 was accepted.** Solving a transformed equation produces candidates. Check them against the original function before reporting a solution.
- **Only the logarithm or square-root restriction was checked.** A composition needs both an existing inner value and an allowed outer input. Intersect those conditions.
- **The logarithm included its zero endpoint.** Compare the different requirements input > 0 and input ≥ 0. Here that distinction changes the endpoint at −3; it does not restore the hole at 3.

Record each rubric item as justified, incomplete or not yet justified; preserve your first response beside the revision. A correct interval without its sign/domain argument is incomplete reasoning, not a verified result.

</details>

For repair, return to [Expressions come with restrictions and function composition](algebra-functions.md), or use the [readiness diagnostic](diagnostic.md) to identify an earlier algebra gap. Then retry from the original formula, not from a remembered answer.
