# Classify moduli admitting a cyclotomic root

*Hard · [Original olympiad-style problems](index.md)*

Characterize all positive integers $m$ for which some integer $n$ satisfies $m\mid n^2+n+1$. Prove your characterization, including all prime-power and Chinese-remainder conditions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For a prime divisor other than three, a root gives a nontrivial cube root of one. No root exists modulo nine.

</details>

<details>
<summary>Hint 2</summary>

For a prime congruent to one modulo three, use a polynomial root bound to find an element whose one-third group exponent is nontrivial, then lift the quadratic root one prime-power step at a time.

</details>

<details>
<summary>Model proof</summary>

Prove necessity, prime-root existence, nonsingular lifting and CRT sufficiency.

1. The answer is exactly: the exponent of three in $m$ is at most one, and every other prime divisor is one modulo three. The modulus one is included.
2. If a prime $p\ne3$ divides $n^2+n+1$, then $n^3\equiv1$ while $n\not\equiv1$; also $n$ is nonzero. Its order is three, so $3\mid p-1$. For $p=3$ the root is one, and substituting $n=1+3t$ shows the quadratic has exactly one factor three, excluding modulus nine.
3. Conversely, let prime $p\equiv1\pmod3$. The polynomial $X^{(p-1)/3}-1$ has fewer than $p-1$ roots in the field, so some nonzero $a$ has $a^{(p-1)/3}\ne1$. That power has cube one by Fermat, hence is a root of $X^2+X+1$.
4. At any such root $r$, $(2r+1)^2\equiv-3\pmod p$, so the derivative is nonzero. If a root is known modulo $p^j$, substitute $r+tp^j$; modulo $p^{j+1}$ its quadratic value is the old value plus $tp^j(2r+1)$. Exactly one choice of $t$ modulo $p$ cancels the next coefficient. This inductively lifts to every positive power.
5. Modulo three choose its root if that factor occurs, and use the lifted roots for every other prime power dividing $m$. CRT combines these finitely many coprime conditions into one integer $n$. This proves sufficiency and the complete classification.

**Self-assessment rubric**

- Prove the order-three restriction and exact obstruction at nine.
- Produce a root for every prime in the allowed class without assuming cyclicity unproved.
- Prove a valid nonsingular prime-power lifting step.
- Combine every allowed prime power and include modulus one.

</details>
