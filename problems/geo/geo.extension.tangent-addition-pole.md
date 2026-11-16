# Recognize an undefined tangent sum

*Medium · [Geometry and trigonometry problems](index.md)*

$\alpha,\beta\in(0,\pi/2)$ have $\tan\alpha=2/3$, $\tan\beta=3/2$. What is $\tan(\alpha+\beta)$? Options: undefined: it is undefined; zero: $0$; one: $1$; sum: $13/6$. Enter undefined, zero, one or sum.

**Options**

1. Undefined
2. 0
3. 1
4. 13/6

```answer
{"answer":{"kind":"multiple_choice","expected":"undefined","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."},"options":["undefined","zero","one","sum"]}
```

<details>
<summary>Hint 1</summary>

The tangent addition denominator is $1-\tan\alpha\tan\beta$.

</details>

<details>
<summary>Hint 2</summary>

Use $0<\alpha+\beta<\pi$ to identify which angle has zero cosine.

</details>

<details>
<summary>Worked solution</summary>

Check the addition formula domain before dividing.

1. The product of the tangents is one. Thus $\cos(\alpha+\beta)=\cos\alpha\cos\beta(1-\tan\alpha\tan\beta)=0$.
2. The sum lies strictly between zero and $\pi$, so it equals $\pi/2$.
3. Its sine is nonzero and cosine zero; the tangent is undefined, not an infinite real number.

</details>
