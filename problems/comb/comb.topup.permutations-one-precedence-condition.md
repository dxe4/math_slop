# Use a symmetry that reverses one precedence condition

*Hard · [Combinatorics](index.md)*

$6$ distinct books include A and B. How many linear orders put A somewhere before B, without requiring adjacency?

```answer
{"answer":{"kind":"integer","expected":"360","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Swap the labels A and B in every complete order.

</details>

<details>
<summary>Hint 2</summary>

Exactly one of the two precedence directions holds in a row.

</details>

<details>
<summary>Worked solution</summary>

Label swapping gives a bijection between two complementary order classes.

1. There are 720 unrestricted orders of the six books.
2. Swapping A and B exchanges orders with A before B and orders with B before A, with no row in both classes.
3. The two classes have equal size, so the required count is 360.

</details>
