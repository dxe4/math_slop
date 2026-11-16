# Determine a full rational-expression range

*Hard · [Original olympiad-style problems](index.md)*

For positive $xyz=1$, prove the set of values of $(x-1)/(x+1)+(y-1)/(y+1)+(z-1)/(z+1)$ is exactly the open interval $(-1,1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Put the three fractions equal to a,b,c, each strictly between negative one and one.

</details>

<details>
<summary>Hint 2</summary>

The product constraint becomes $(1+a)(1+b)(1+c)=(1-a)(1-b)(1-c)$.

</details>

<details>
<summary>Model proof</summary>

Use a fractional-linear transformation and a continuous attaining family.

1. The substitution is reversible on positive inputs, with $x=(1+a)/(1-a)$ and analogous formulas. Expanding the product condition gives $a+b+c=-abc$.
2. Since every transformed variable has absolute value less than one, the sum has absolute value less than one. Neither endpoint is attained.
3. Take $x=y=t$, $z=t^{-2}$ for positive t. The resulting expression is continuous, tends to negative one as t tends to zero, and to positive one as t tends to infinity.
4. The intermediate value theorem therefore attains every value strictly between those limits. This supplies the whole open interval, not merely separate endpoint bounds.

**Self-assessment rubric**

- Keep the exact transformed domain and inverse formulas.
- Derive the sum-product identity and strict bounds.
- Give a continuous admissible family with both limiting values.
- Use continuity to prove all intermediate values and exclude endpoints.

</details>
