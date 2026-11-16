# Eliminate wild additive functions by a square condition

*Hard · [Original olympiad-style problems](index.md)*

Classify all functions $f:\mathbb R\to\mathbb R$ satisfying $f(x+y)=f(x)+f(y)$ and $f(x^2)=f(x)^2$ for every real input. No continuity is assumed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The value at one is zero or one. Compare the square identity at $x+1$ to its additive expansion.

</details>

<details>
<summary>Hint 2</summary>

In the value-one case, nonnegative inputs have nonnegative outputs, giving monotonicity.

</details>

<details>
<summary>Model proof</summary>

Derive order from squares instead of inserting an unproved continuity assumption.

1. Additivity gives $f(0)=0$. The square identity makes $f(1)$ zero or one. Expanding $f((x+1)^2)$ in two ways yields $2f(x)(1-f(1))=0$.
2. If $f(1)=0$, that equality forces $f$ identically zero. If $f(1)=1$, every nonnegative $t=s^2$ has $f(t)=f(s)^2\ge0$.
3. Additivity now makes $f$ nondecreasing. It fixes every rational number, by integer addition and division with the value at one.
4. For any real $x$, rational lower and upper approximations squeeze $f(x)$ between the same bounds as $x$, so $f(x)=x$.
5. Both the zero function and identity satisfy both equations, and the argument excludes every other function without a continuity hypothesis.

**Self-assessment rubric**

- Derive both possibilities at one and the decisive shifted-square identity.
- Obtain monotonicity from squares in the nonzero case.
- Prove identity on rationals and extend by order.
- Verify both final functions.

</details>
