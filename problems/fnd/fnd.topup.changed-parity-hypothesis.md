# Recheck a counterexample when hypotheses change

*Hard · [Foundations bridge](index.md)*

The pair $(2,3)$ refutes the integer claim: if ab is even, then a and b are both even. Now restrict a,b to odd integers. Explain why the old pair is inadmissible and why the implication becomes true on this restricted domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Recheck the old pair against the new domain before reusing it.

</details>

<details>
<summary>Hint 2</summary>

Use odd integer representations to determine whether the conditional hypothesis can occur in the restricted domain.

</details>

<details>
<summary>Model proof</summary>

Changing the allowed objects can remove all cases satisfying the conditional hypothesis.

1. The pair (2,3) has even product six but an odd second factor, so it is a counterexample in the unrestricted integer domain. It is not an allowed odd-odd pair.
2. For arbitrary odd a=2r+1 and b=2s+1, the product is $ab=2(2rs+r+s)+1$, which is odd.
3. Thus no allowed pair has the even-product hypothesis. The implication is true on the restricted domain because its antecedent never holds, not because an odd pair has both factors even.

**Self-assessment rubric**

- Check both the original counterexample and its failure of the new domain restriction.
- Prove every permitted odd-odd product is odd.
- Explain truth with an impossible antecedent without claiming its conclusion holds.

</details>
