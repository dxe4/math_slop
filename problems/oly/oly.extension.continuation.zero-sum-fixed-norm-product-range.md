# Determine every product allowed by two symmetric constraints

*Hard · [Original olympiad-style problems](index.md)*

Reals satisfy $x+y+z=0$ and $x^2+y^2+z^2=6$. Prove the complete set of values of xyz is $[-2,2]$, and determine the endpoint triples.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Eliminate x and y through their sum and product in terms of z.

</details>

<details>
<summary>Hint 2</summary>

Bound z by two and factor $2-(z^3-3z)$; use a continuous feasible family for all intermediate products.

</details>

<details>
<summary>Model proof</summary>

Separate a sharp algebraic bound from a full attainment argument.

1. The constraints give $xy=z^2-3$, so the product is $z^3-3z$. Also $x^2+y^2\ge(x+y)^2/2=z^2/2$ gives $|z|\le2$.
2. The identity $2-(z^3-3z)=(2-z)(z+1)^2\ge0$ gives the upper bound. Negating all variables gives the lower bound.
3. Upper equality gives z two or negative one; solving the sum and product yields exactly permutations of $(2,-1,-1)$. Lower equality gives their negatives.
4. To attain every intermediate value, let z range continuously from negative one to one and set $x,y=(-z\pm\sqrt{12-3z^2})/2$. These are real and satisfy both constraints.
5. The product $z^3-3z$ is continuous and has endpoint values two and negative two on that parameter interval. The intermediate value theorem supplies the entire claimed range.

**Self-assessment rubric**

- Obtain the exact cubic product and feasible z bound.
- Prove both endpoint bounds through the factored identity.
- Solve every equality triple with permutations and signs.
- Construct a feasible continuous family attaining every intermediate product.

</details>
