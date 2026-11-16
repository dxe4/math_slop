# Count elements killed by a specified ring element

*Easy · [Abstract algebra problems](index.md)*

In Z/24, find the number of x satisfying $6x=0$. This set is the annihilator of the residue six.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Translate zero modulo24 into divisibility.

</details>

<details>
<summary>Hint 2</summary>

The solution residues form a subgroup rather than the set of units.

</details>

<details>
<summary>Worked solution</summary>

An annihilator records which factors turn a given element into zero.

1. The condition is 24 divides6x, equivalent to four divides x.
2. The canonical solution residues are0,4,8,12,16,20.
3. There are six of them.

</details>
