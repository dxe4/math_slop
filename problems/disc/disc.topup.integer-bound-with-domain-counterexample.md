# Prove an integer inequality and test its domain

*Medium · [Discrete mathematics](index.md)*

Prove $|n|\leq n^2$ for every integer n using cases, and show by one counterexample that the statement would be false for all real n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Separate zero, positive integers and negative integers.

</details>

<details>
<summary>Hint 2</summary>

An integer of nonzero magnitude has magnitude at least one; a real number need not.

</details>

<details>
<summary>Model proof</summary>

The integer domain supplies a gap between zero and the other possible magnitudes.

1. For n=0 there is equality. For n&gt;=1, $n^2-|n|=n(n-1)\geq0$.
2. For n&lt;=-1, $n^2-|n|=n^2+n=n(n+1)\geq0$ because both factors are nonpositive.
3. These cases cover the integers. At real n=1/2, the proposed inequality would read 1/2&lt;=1/4, which is false.

**Self-assessment rubric**

- Use cases covering all integers and justify their bounds.
- Prove the claimed comparison in both nonzero cases.
- Give a real counterexample and explain why it lies outside the integer domain.

</details>
