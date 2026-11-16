# Jensen midpoint continuity

*Hard · [Original Putnam-style training](index.md)*

If continuous $f:\mathbb R\to\mathbb R$ satisfies $f((x+y)/2)=[f(x)+f(y)]/2$ for all $x,y$, prove $f(x)=ax+b$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Subtract $f(0)$ to obtain a function vanishing at zero.

</details>

<details>
<summary>Hint 2</summary>

Use the midpoint equation twice to derive full additivity.

</details>

<details>
<summary>Model proof</summary>

Continuous additivity gives $g(x)=ax$, so $f(x)=ax+b$ with $b=f(0)$; every affine function satisfies the midpoint law.

1. Let $g(x)=f(x)-f(0)$; then $g(0)=0$ and the same midpoint law holds. Taking $y=0$ gives $g(x/2)=g(x)/2$, equivalently $g(2t)=2g(t)$.
2. Now $g(x+y)=2g((x+y)/2)=g(x)+g(y)$. Continuity of $f$ makes $g$ continuous.
3. Continuous additivity gives $g(x)=ax$, so $f(x)=ax+b$ with $b=f(0)$; every affine function satisfies the midpoint law.

**Self-assessment rubric**

- Subtract f(0) and use the midpoint relation at zero.
- Derive full additivity from the doubling and midpoint laws.
- Use continuity to classify and verify all affine solutions.

</details>
