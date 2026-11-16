# Prove a partial order and locate a domain failure

*Hard · [Set theory](index.md)*

Prove divisibility is a partial order on the positive integers $\mathbb{Z}_{>0}$. Then show why antisymmetry would fail if the domain were changed to all nonzero integers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Check reflexivity, antisymmetry and transitivity separately.

</details>

<details>
<summary>Hint 2</summary>

In the positive domain, two reciprocal integer divisibility factors must both equal one; negative factors change that step.

</details>

<details>
<summary>Model proof</summary>

Each order axiom uses the stated domain, particularly positivity in antisymmetry.

1. Every positive integer divides itself, giving reflexivity.
2. If x divides y and y divides x, write y=ax and x=by with positive integers a,b. Then ab=1, forcing a=b=1 and x=y.
3. If y=ax and z=cy, then z=(ca)x, proving transitivity.
4. On the nonzero integers, one and minus one divide each other but are distinct, so antisymmetry fails.

**Self-assessment rubric**

- Prove all three partial-order requirements.
- Use positivity at the antisymmetry step rather than assuming it silently.
- Give two distinct nonzero integers showing failure after the domain changes.

</details>
