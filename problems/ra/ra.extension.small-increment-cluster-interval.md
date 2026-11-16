# Force intermediate accumulation values by late crossings

*Hard · [Real analysis](index.md)*

Let a bounded real sequence satisfy a\_(n+1)-a\_n tending to zero, with liminf a\_n=alpha and limsup a\_n=beta. Prove its set of subsequential limits is the whole closed interval $[\alpha,\beta]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Interior values are crossed arbitrarily late because the tails approach both extremes.

</details>

<details>
<summary>Hint 2</summary>

At a late first crossing, the overshoot is controlled by one adjacent difference.

</details>

<details>
<summary>Model proof</summary>

Vanishing jumps prevent a bounded sequence's accumulation set from skipping an interior level.

1. All subsequential limits lie in \[alpha,beta\], and the finite liminf and limsup are themselves subsequential limits by the tail definitions. If alpha=beta the assertion is immediate.
2. Fix c strictly between alpha and beta. There are arbitrarily late terms below c and arbitrarily late terms above c. Thus arbitrarily far out one can choose a passage from below c to above c, or in the opposite direction. At its first crossing, the two adjacent terms bracket c.
3. Given k, require this crossing after an index where every adjacent difference has modulus less than 1/k, and after the previously chosen crossing. One endpoint at the crossing then lies within 1/k of c. These increasing selected indices yield a subsequence tending to c, proving every interior value occurs.

**Self-assessment rubric**

- Control the possible range and obtain the two endpoint accumulation values.
- Justify arbitrarily late crossings for each interior target.
- Build increasing indices using the small adjacent jumps.

</details>
