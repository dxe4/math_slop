# Prove a sharp two-sided linearization error bound

*Hard · [Calculus](index.md)*

Let f be C² on the closed segment joining a and x, and suppose \|f″\|≤M there, with M≥0. Prove $|f(x)-f(a)-f′(a)(x-a)|\le(M/2)(x-a)^2$ for either order of a,x. Give functions attaining equality to show the constant 1/2 is sharp.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the error as an integral of f′(t)−f′(a).

</details>

<details>
<summary>Hint 2</summary>

Bound that derivative difference by M\|t−a\| and integrate over the unoriented segment.

</details>

<details>
<summary>Model proof</summary>

A derivative bound accumulates once for the slope error and once more for the function error.

1. The fundamental theorem gives R=f(x)−f(a)−f′(a)(x−a)=∫\_a^x\[f′(t)−f′(a)\]dt.
2. By the mean value theorem, \|f′(t)−f′(a)\|≤M\|t−a\| for each point on the segment. Taking absolute values handles reversed integration limits by integrating the absolute bound from min(a,x) to max(a,x).
3. Therefore \|R\|≤M∫\_{min(a,x)}^{max(a,x)}\|t−a\|dt=(M/2)\|x−a\|². This includes x=a, where both sides are zero.
4. For f(t)=c+m(t−a)±(M/2)(t−a)² the second-derivative magnitude is M and \|R\|=(M/2)(x−a)². When M&gt;0 and x≠a this rules out any smaller universal coefficient.

**Self-assessment rubric**

- Expresses the linearization error as the correct integral of a slope difference.
- Uses the second-derivative bound through the mean value theorem.
- Integrates an absolute bound correctly for x&lt;a and x≥a.
- Provides exact quadratic equality examples and explains the sharp coefficient.

</details>
