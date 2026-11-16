# Sharp null potential outcomes

*Easy · [Statistics and probability](index.md)*

For each of $7$ units, the sharp null states $Y_i(1)=Y_i(0)$. One outcome is observed for every unit. How many of the $14$ potential-outcome entries are determined in total, including the observed entries?

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Consider one unit before multiplying by the number of units.

</details>

<details>
<summary>Hint 2</summary>

The sharp equality identifies the unobserved member of its pair with the observed one.

</details>

<details>
<summary>Worked solution</summary>

A sharp null determines every missing potential outcome unit by unit.

1. Each observed entry fixes one member of a unit’s potential-outcome pair.
2. The equality $Y_i(1)=Y_i(0)$ fixes its other member as well.
3. Both entries are determined for all $7$ units, giving $14$ entries in total. Only $7$ of those were initially unobserved.

</details>
