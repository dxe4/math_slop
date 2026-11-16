# Use a finite separated family to distinguish levels

*Hard · [Set theory](index.md)*

Let $a=\{\varnothing\}$ and $A=\{a\}$. Define $B=\{X\in\mathcal P(A):a\notin X\}$. Determine B and prove $B\subseteq\mathcal P(A)$ but $B\notin\mathcal P(A)$. Explain why B is licensed by bounded separation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A singleton has only the empty subset and itself.

</details>

<details>
<summary>Hint 2</summary>

Membership in P(A) asks whether the whole candidate is a subset of A; that differs from being a subset of P(A).

</details>

<details>
<summary>Model proof</summary>

The two powerset levels have different element tests even in this small example.

1. The power set of A is {empty set,A}. The empty subset does not contain a, while A does, so B={empty set}=a.
2. The only element of B is the empty set, which belongs to P(A). Hence B is a subset of P(A).
3. But the empty set is not an element of A, whose only member is the nonempty set a. Thus B is not a subset of A and so is not an element of P(A).
4. The defining family is a predicate-selected subfamily of the already given set P(A), exactly an instance of bounded separation.

**Self-assessment rubric**

- Enumerate the two subsets of A and apply the selection predicate.
- Check subsethood in P(A) separately from membership in P(A).
- Identify the existing ambient set that permits separation.

</details>
