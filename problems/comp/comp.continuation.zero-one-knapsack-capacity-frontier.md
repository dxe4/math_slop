# Keep item stages distinct from an unbounded coin recurrence

*Medium · [Computational arithmetic problems](index.md)*

Four items have $(\text{weight},\text{value})$ pairs $(2,3),(3,4),(4,8),(5,8)$. Each item is usable at most once. Return the optimum values for capacities $8,9,10$ in that order.

```answer
{"answer":{"kind":"vector","expected":["12","16","16"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use a separate previous-item row, or update one row in descending capacity order.

</details>

<details>
<summary>Hint 2</summary>

Compare the final heavy pair against the best three-item combination; a reused item would violate the model.

</details>

<details>
<summary>Worked solution</summary>

An item-stage recurrence gives a whole capacity frontier while enforcing zero-one use.

1. Use $V_j(c)=\max(V_{j-1}(c),v_j+V_{j-1}(c-w_j))$ when $c\ge w_j$, with zero initial row.
2. After the first three items, the values at capacities $0,\ldots,10$ are $[0,0,3,4,8,8,11,12,12,15,15]$.
3. Adding the fourth item leaves capacity $8$ at $12$, and improves capacities $9$ and $10$ to $8+V_3(4)=16$ and $8+V_3(5)=16$.
4. The weight-$4$ and weight-$5$ pair attains both larger-capacity optima; the requested frontier is $[12,16,16]$.

</details>
