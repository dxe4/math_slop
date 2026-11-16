# Characterize tangent half-angle triples

*Hard · [Geometry and trigonometry problems](index.md)*

Prove that positive real numbers $x,y,z$ can be written uniquely as $\tan(A/2),\tan(B/2),\tan(C/2)$ for angles of a nondegenerate triangle if and only if $xy+yz+zx=1$. Include the branch argument in the converse.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Let $\alpha=\arctan x$, $\beta=\arctan y$, $\gamma=\arctan z$, each in $(0,\pi/2)$.

</details>

<details>
<summary>Hint 2</summary>

The cosine of their sum has numerator $1-xy-yz-zx$ and positive denominator.

</details>

<details>
<summary>Model proof</summary>

Use the cosine addition formula without dividing by a vanishing tangent denominator.

1. For triangle angles, put $\alpha=A/2$, $\beta=B/2$, $\gamma=C/2$. Their sum is $\pi/2$ and each has positive cosine.
2. Expanding $\cos(\alpha+\beta+\gamma)$ and dividing by $\cos\alpha\cos\beta\cos\gamma>0$ gives $0=1-xy-yz-zx$.
3. Conversely, for a positive triple with that relation, take the principal arctangents in the first hint. The same expansion makes their sum have cosine zero.
4. The sum lies strictly between zero and $3\pi/2$. The only zero of cosine in that open interval is $\pi/2$; the endpoint $3\pi/2$ is excluded. Thus twice these three positive angles sum to $\pi$ and define a triangle angle triple.
5. Tangent is one-to-one on $(0,\pi/2)$, so each half-angle, and hence each labeled triangle angle, is unique. The claim concerns angle triples, not a unique triangle size.

**Self-assessment rubric**

- Expand the cosine sum with a strictly positive denominator.
- Construct principal arctangents and identify the only possible sum.
- Verify positive angles summing to pi and distinguish shape from scale.
- Use injectivity on the correct half-angle interval.

</details>
