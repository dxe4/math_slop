# Heron from altitude

*Hard · [Original Putnam-style training](index.md)*

For a triangle with side lengths $a,b,c$ and area $K$, prove $K^2=s(s-a)(s-b)(s-c)$, where $s=(a+b+c)/2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Drop an altitude to the side of length $c$ and solve for the projected length.

</details>

<details>
<summary>Hint 2</summary>

Factor the resulting difference of squares.

</details>

<details>
<summary>Model proof</summary>

Factoring yields $(a+b+c)(a+b-c)(a-b+c)(-a+b+c)=16s(s-a)(s-b)(s-c)$, proving the formula.

1. Put side $AB=c$, $AC=b$, $BC=a$, and let the altitude from $C$ have height $h$ and signed foot coordinate $x$ from $A$. The two right-triangle equations give $x=(b^2+c^2-a^2)/(2c)$ and $h^2=b^2-x^2$.
2. Since $K=ch/2$, $16K^2=4b^2c^2-(b^2+c^2-a^2)^2=[(a+b)^2-c^2][c^2-(a-b)^2]$.
3. Factoring yields $(a+b+c)(a+b-c)(a-b+c)(-a+b+c)=16s(s-a)(s-b)(s-c)$, proving the formula.

**Self-assessment rubric**

- Solve the projected foot coordinate and height from two right triangles.
- Transform 16K² into the four linear side factors.
- Identify those factors with 16s(s−a)(s−b)(s−c).

</details>
