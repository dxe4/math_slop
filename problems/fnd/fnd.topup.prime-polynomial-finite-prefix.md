# Explain why a finite prime pattern is not a universal proof

*Hard · [Foundations bridge](index.md)*

A claim says $n^2+n+41$ is prime for every positive integer n. Explain why checking only n=1 through n=10 cannot prove it, and refute the claim with a positive integer witness and a nontrivial factorization.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A universal assertion includes every positive integer, not only the checked prefix.

</details>

<details>
<summary>Hint 2</summary>

Look for an input making n squared plus n divisible by the constant term.

</details>

<details>
<summary>Model proof</summary>

One later composite value refutes all claimed universality, regardless of an initial successful pattern.

1. Checking finitely many inputs leaves every larger positive integer uncovered by the argument.
2. Take n=40. Then $n^2+n+41=1600+40+41=1681=41^2$.
3. The value has a nontrivial factorization, so it is composite and the universal claim is false.

**Self-assessment rubric**

- Explain what the finite prefix does not establish.
- Give a positive integer outside or within the claimed domain as appropriate.
- Verify a composite value with factors greater than one.

</details>
