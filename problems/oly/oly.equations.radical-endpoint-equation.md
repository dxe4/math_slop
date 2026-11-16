# Retain the radical domain when squaring

*Hard · [Original olympiad-style problems](index.md)*

Find the sum of all real solutions of $\sqrt{x+6}+\sqrt{10-x}=4$, where square roots denote nonnegative roots.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Both radical arguments must be nonnegative.

</details>

<details>
<summary>Hint 2</summary>

The two arguments have a fixed sum, so squaring isolates their product.

</details>

<details>
<summary>Worked solution</summary>

The nonnegative cross term forces an endpoint of the allowed domain.

1. The domain is $-6\leq x\leq10$. Squaring gives $16+2\sqrt{(x+6)(10-x)}=16$.
2. Thus the product under the radical is zero, so x=-6 or x=10. Both give nonnegative arguments and satisfy the original equation.
3. The sum of all solutions is $-6+10=4$.

</details>
