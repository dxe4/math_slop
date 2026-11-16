# Use coprimality to make a quadratic norm tiny

*Hard · [Original olympiad-style problems](index.md)*

Let $a,b$ be coprime positive integers. Prove $a^2+b^2\mid a^4+b^4$ holds if and only if $a=b=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Reduce the fourth-power sum modulo $a^2+b^2$.

</details>

<details>
<summary>Hint 2</summary>

The norm is coprime to $ab$, so a resulting divisibility leaves only a divisor of two.

</details>

<details>
<summary>Model proof</summary>

Eliminate the variables from a norm divisibility using coprimality.

1. Writing $N=a^2+b^2$, the identity $a^4+b^4=N^2-2a^2b^2$ shows the assumption is equivalent to $N\mid2a^2b^2$.
2. Any prime dividing both $N$ and $a$ would divide $b$, and conversely. Thus $\gcd(N,ab)=1$ and also $\gcd(N,a^2b^2)=1$.
3. Euclid cancellation gives $N\mid2$. Positivity makes $N\ge2$, hence $N=2$, forcing $a=b=1$.
4. That pair is coprime and has fourth-power sum two divisible by norm two, proving the converse.

**Self-assessment rubric**

- Derive the exact equivalent divisibility.
- Prove the norm shares no prime with either variable.
- Cancel only with justified coprimality and classify the positive norm.
- Check the unique remaining pair.

</details>
