# Recover additivity from an implicit translation law

*Hard · [Original olympiad-style problems](index.md)*

Classify functions $f:\mathbb R\to\mathbb R$ continuous at zero and satisfying $f(x+f(y))=f(x)+y$ for all real $x,y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The equation at zero arguments gives an involution after showing the zero value itself vanishes.

</details>

<details>
<summary>Hint 2</summary>

Use injectivity to eliminate that value, then surjectivity to turn the special translation into an arbitrary one.

</details>

<details>
<summary>Model proof</summary>

Extract bijectivity, additivity and the continuous scalar form.

1. If $f(a)=f(b)$, setting the first input to zero in the law gives $a=b$, so $f$ is injective. Writing $c=f(0)$, the case $y=0$ gives $f(x+c)=f(x)$ and injectivity forces $c=0$.
2. The case $x=0$ now gives $f(f(y))=y$, proving surjectivity as well. Replace $y$ by $f(z)$ in the original law to obtain $f(x+z)=f(x)+f(z)$.
3. A function additive and continuous at zero has $f(x)=ax$: it agrees with that formula on rationals and passes to all reals by rational approximation and continuity.
4. The involution condition makes $a^2=1$. Thus $f(x)=x$ or $f(x)=-x$, and direct substitution verifies both.

**Self-assessment rubric**

- Prove injectivity and remove the apparent periodic zero-value shift.
- Obtain involution, surjectivity and full additivity.
- Use the stated continuity precisely to obtain a linear real function.
- Derive and verify both allowed slopes.

</details>
