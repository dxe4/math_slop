# Identify a fixed field from a basis and its signs

*Medium · [Abstract algebra problems](index.md)*

In $L=\mathbb Q(\sqrt2,\sqrt3)$ let sigma send both square roots to their negatives. Find the positive squarefree integer d such that L^(&lt;sigma&gt;)=Q(sqrt(d)).

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the rational basis 1,sqrt(2),sqrt(3),sqrt(6).

</details>

<details>
<summary>Hint 2</summary>

The simultaneous sign change fixes the product of the two square roots.

</details>

<details>
<summary>Worked solution</summary>

The invariant basis coordinates identify the fixed field explicitly.

1. The field has rational basis 1,sqrt(2),sqrt(3),sqrt(6).
2. The automorphism negates the two single-root basis terms and fixes the constant and product terms, so the fixed elements are exactly a+b sqrt(6) with rational a,b.
3. Thus the fixed field is Q(sqrt(6)), giving d=6.

</details>
