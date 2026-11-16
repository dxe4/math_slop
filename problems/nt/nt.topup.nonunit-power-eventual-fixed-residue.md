# Use an eventual fixed residue for a nonunit base

*Hard · [Number theory](index.md)*

Find the canonical residue of $6^{2027}$ modulo 40. Do not assume six is a unit modulo forty.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Compute the first few powers until a residue repeats under multiplication by six.

</details>

<details>
<summary>Hint 2</summary>

A fixed residue can persist after an initial transient.

</details>

<details>
<summary>Worked solution</summary>

A nonunit power sequence can stabilize even when Euler exponent reduction is unavailable.

1. The first residues are six, thirty-six and sixteen, since $6^3=216$.
2. Multiplication sends sixteen to $96\equiv16\pmod {40}$, so induction keeps every power from the third onward at sixteen.
3. Since 2027 is at least three, the answer is sixteen. Coprimality with forty fails, so no unit-group exponent rule was used.

</details>
