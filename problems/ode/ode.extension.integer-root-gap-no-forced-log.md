# Refute an overstrong Frobenius rule with exact Euler powers

*Medium · [Differential equations problems](index.md)*

Refute the claim that a positive integer difference between indicial roots always forces a logarithm in a second solution. Use $t^2y''-2y=0$ on t&gt;0 and exhibit a full independent solution pair.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute the two power roots.

</details>

<details>
<summary>Hint 2</summary>

Check their Wronskian, not just their separate substitutions.

</details>

<details>
<summary>Model proof</summary>

An integer root gap permits a logarithm in general theory but does not force one in every equation.

1. The indicial polynomial is r\*(r-1)-2=(r-2)\*(r+1), so the roots are 2 and -1, separated by three.
2. The functions t^2 and t^(-1) both solve the equation directly. Their Wronskian is t^2\*(-t^(-2))-(2t)\*t^(-1)=-3, which is nonzero.
3. They form a fundamental pair with no logarithm. Thus the integer-gap condition by itself is not sufficient to force a log term.

**Self-assessment rubric**

- Compute and state the positive integer root difference.
- Verify both solutions and their nonzero Wronskian.
- Explain exactly which universal claim the example disproves.

</details>
