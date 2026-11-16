# Calculate unequal mixed partials without misapplying symmetry

*Hard · [Calculus](index.md)*

Define f(0,0)=0 and $f(x,y)=xy(x^2-y^2)/(x^2+y^2)$ elsewhere. Compute f\_xy(0,0) and f\_yx(0,0) directly from coordinate-line difference quotients. Explain why equality of mixed partials under C² hypotheses does not apply.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First compute f\_x(0,y) and f\_y(x,0), including their origin values.

</details>

<details>
<summary>Hint 2</summary>

Only then differentiate each resulting one-variable function at zero.

</details>

<details>
<summary>Model proof</summary>

Mixed derivatives compare two successive limiting procedures, whose equality needs extra regularity.

1. Since f(x,0)=f(0,y)=0, both first coordinate derivatives at the origin are zero. For y≠0, the quotient f(h,y)/h tends to −y, so f\_x(0,y)=−y, with the same formula valid at y=0.
2. For x≠0, f(x,h)/h tends to x, giving f\_y(x,0)=x, also valid at x=0.
3. Therefore f\_{xy}(0,0)=−1 and f\_{yx}(0,0)=1. These are calculated from the definitions in the requested derivative order.
4. If f were C² on a neighborhood, the mixed partials would agree. Their actual disagreement shows that hypothesis is unavailable; existence of the two iterated derivatives at one point is not the C² condition.

**Self-assessment rubric**

- Calculates the two first-partial functions on coordinate axes, including the origin.
- Obtains −1 and 1 in the specified mixed orders.
- Distinguishes existence at a point from the neighborhood regularity required for mixed-partial equality.

</details>
