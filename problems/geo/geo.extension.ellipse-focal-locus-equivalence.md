# Prove both descriptions of an ellipse agree

*Hard · [Geometry and trigonometry problems](index.md)*

Let $a>b>0$, $c=\sqrt{a^2-b^2}$ and $F_\pm=(\pm c,0)$. Prove that $x^2/a^2+y^2/b^2=1$ is equivalent to $|(x,y)-F_-|+|(x,y)-F_+|=2a$, carefully excluding extraneous points from squaring.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

On the quadratic ellipse, the two distances simplify to $a\pm cx/a$.

</details>

<details>
<summary>Hint 2</summary>

For the converse, subtract the squared distances as well as using their sum.

</details>

<details>
<summary>Model proof</summary>

Track nonnegative distances through both implications.

1. On the quadratic ellipse, $|x|\le a$ and $y^2=b^2(1-x^2/a^2)$. Expanding the squared distance to $(c,0)$ gives $(a-cx/a)^2$; to $(-c,0)$ it gives $(a+cx/a)^2$.
2. Since $c<a$ and $|x|\le a$, both $a\pm cx/a$ are strictly positive. The distances are therefore those expressions, and their sum is $2a$.
3. Conversely let the nonnegative distances be $d_+,d_-$ with $d_++d_-=2a$. Their squared difference is $d_-^2-d_+^2=4cx$, so division by their positive sum gives $d_--d_+=2cx/a$.
4. Thus $d_+=a-cx/a$. Squaring this equality and inserting $d_+^2=(x-c)^2+y^2$ yields $y^2=b^2(1-x^2/a^2)$ after cancellation.
5. Division by positive $b^2$ gives the quadratic ellipse. The converse used actual distances and their positive sum, while the forward implication verified the square-root signs explicitly, so no spurious branch was admitted.

**Self-assessment rubric**

- Obtain the two correct squared-distance factorizations.
- Justify both positive square roots on the entire ellipse.
- Use the distance sum and squared difference to recover the distances.
- Recover the quadratic equation with valid divisions and no unchecked squaring.

</details>
