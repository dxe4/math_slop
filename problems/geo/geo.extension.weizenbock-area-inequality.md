# Prove a sharp triangle area bound

*Hard · [Geometry and trigonometry problems](index.md)*

Prove that a nondegenerate triangle of sides $a,b,c$ and area $\Delta$ satisfies $a^2+b^2+c^2\ge4\sqrt3\,\Delta$. Determine all equality cases.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Expand Heron as $16\Delta^2=2(a^2b^2+b^2c^2+c^2a^2)-(a^4+b^4+c^4)$.

</details>

<details>
<summary>Hint 2</summary>

Compare the squared sides using squared differences of $a^2,b^2,c^2$.

</details>

<details>
<summary>Model proof</summary>

Reduce the geometric bound to a symmetric sum of squares.

1. Write $P=a^4+b^4+c^4$, $Q=a^2b^2+b^2c^2+c^2a^2$. Heron gives $16\Delta^2=2Q-P$.
2. The difference of the squared proposed sides is $(P+2Q)-48\Delta^2=4(P-Q)$.
3. Now $P-Q=((a^2-b^2)^2+(b^2-c^2)^2+(c^2-a^2)^2)/2\ge0$. Both original sides are positive, so the squared comparison yields the claim.
4. Equality forces every squared difference to vanish. Positive side lengths then give $a=b=c$; conversely an equilateral triangle attains equality.

**Self-assessment rubric**

- Use a correct symmetric squared-area identity.
- Compute the squared comparison with the correct constants.
- Justify the sum of squares and return to unsquared quantities.
- Prove exactly the equilateral equality condition.

</details>
