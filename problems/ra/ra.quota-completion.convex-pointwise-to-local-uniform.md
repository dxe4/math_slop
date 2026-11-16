# Derive local uniform convergence from convex pointwise data

*Hard · [Real analysis](index.md)*

Let f\_n be finite convex real functions on an open interval I, converging pointwise there to a finite f. Prove $f_n\to f$ uniformly on every compact subinterval of I. Derive the common local bound and Lipschitz constant; do not assume pointwise boundedness alone supplies them.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Control values at two outer points and one middle point, then use convexity to obtain upper and lower bounds on a smaller interval.

</details>

<details>
<summary>Hint 2</summary>

Bound secant slopes on an even smaller interval, then combine the resulting common modulus with a finite grid.

</details>

<details>
<summary>Model proof</summary>

Convexity upgrades three bounded reference sequences into uniform interior slope control.

1. Fix K=\[a,b\]⊂I and choose A&lt;a₁&lt;a≤b&lt;b₁&lt;B in I, with C between a₁ and b₁. The pointwise convergent sequences at A,C,B are bounded in absolute value by some M. Convexity bounds every f\_n above by M on \[A,B\].
2. For a₁≤x≤C, write C=θx+(1−θ)B, where θ=(B−C)/(B−x) has a positive lower bound independent of x. Then f\_n(C)≤θf\_n(x)+(1−θ)f\_n(B) gives a uniform lower bound on f\_n(x). For C≤x≤b₁, use C=θx+(1−θ)A similarly. Thus \|f\_n\|≤M₁ on \[a₁,b₁\] uniformly in n.
3. Convex secant slopes on K are between the slope from a₁ to their left endpoint and the slope from their right endpoint to b₁. If δ=min(a−a₁,b₁−b)&gt;0, these bounds give \|f\_n(y)−f\_n(x)\|≤(2M₁/δ)\|y−x\| for x,y∈K. Call this common constant L; the pointwise limit f inherits the same Lipschitz bound.
4. Choose a finite grid in K with every point within ε/\[3(1+L)\] of a grid point. Pointwise convergence is uniform on that finite grid beyond one index. The triangle inequality, with one Lipschitz error for f\_n and one for f, then makes the full sup error smaller than ε. This proves compact-interior uniform convergence; no endpoint outside I was assumed controlled.

**Self-assessment rubric**

- Uses three pointwise-bounded values and convex combinations to prove a two-sided interior bound.
- Derives a uniform Lipschitz constant on a strictly smaller compact interval.
- Passes the Lipschitz estimate to the pointwise limit.
- Combines the common modulus and finite pointwise thresholds to obtain uniform convergence.

</details>
