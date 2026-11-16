# Recover an affine function from symmetric averages

*Hard · [Original olympiad-style problems](index.md)*

Classify continuous functions $f:\mathbb R\to\mathbb R$ satisfying $f(x+y)+f(x-y)=2f(x)$ for every real pair.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Subtract the value at zero. The midpoint identity gives a doubling relation.

</details>

<details>
<summary>Hint 2</summary>

Use the midpoint identity with endpoints u and v, then the doubling relation to obtain full additivity.

</details>

<details>
<summary>Model proof</summary>

Turn a midpoint law into addition and use the supplied regularity.

1. Put $g(x)=f(x)-f(0)$, so $g(0)=0$ and the same equation holds. Taking $y=x$ gives $g(2x)=2g(x)$.
2. For arbitrary endpoints $u,v$, set $x=(u+v)/2$, $y=(u-v)/2$. The identity gives $g(u)+g(v)=2g((u+v)/2)=g(u+v)$.
3. The continuous additive function is linear by its rational values and approximation, giving $g(x)=ax$.
4. Thus all functions are $f(x)=ax+b$ with arbitrary real constants. Substitution verifies them. The value at zero was not forced to vanish in the original equation and must be retained.

**Self-assessment rubric**

- Remove the free constant and derive doubling.
- Obtain additivity for arbitrary real endpoints.
- Use continuity, retain the free constant and verify all affine solutions.

</details>
