# A radius condition determines a primitive shape

*Hard · [Original olympiad-style problems](index.md)*

Classify all positive integer right-triangle side triples with circumradius $R$ and inradius $r$ satisfying $R/r=5/2$. Prove that your list is both necessary and sufficient, without assuming a primitive Pythagorean parametrization.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If the legs are $x,y$ and hypotenuse $z$, use $R=z/2$ and $r=(x+y-z)/2$.

</details>

<details>
<summary>Hint 2</summary>

The radius ratio fixes $x+y$ as a multiple of $z$. Combine with $x^2+y^2=z^2$ to recover $xy$.

</details>

<details>
<summary>Model proof</summary>

The sum and product of the two legs determine their normalized values exactly.

1. For a right triangle, the circumcenter is the hypotenuse midpoint, hence $R=z/2$. Area equals both $xy/2$ and $r(x+y+z)/2$; rationalizing with $z^2=x^2+y^2$ gives $r=(x+y-z)/2>0$.
2. The given ratio becomes $z/(x+y-z)=5/2$, so $x+y=7z/5$. Squaring and subtracting $x^2+y^2=z^2$ yields $xy=12z^2/25$.
3. The two normalized leg values $x/z,y/z$ are roots of $t^2-(7/5)t+12/25=0$, hence are $3/5,4/5$. Thus, up to swapping legs, $(x,y,z)=(3k,4k,5k)$.
4. Because $x,y,z$ are integers and $5x=3z$, coprimality of $3,5$ forces $z=5k$ with positive integer $k$. Conversely every such triple is right, has $r=k$ and $R=5k/2$, and therefore satisfies the ratio.

**Self-assessment rubric**

- Justify both right-triangle radius formulas.
- Extract the normalized sum and product from the ratio and Pythagoras.
- Solve the quadratic and force an integer scale.
- Check every listed scale has the stipulated positive radii.

</details>
