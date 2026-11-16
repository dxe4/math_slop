# Count completions after accounting for the existing range

*Hard · [Set theory](index.md)*

A function from $\{1,2,3,4,5,6\}$ to {0,1,2} is partly assigned by f(1)=0,f(2)=0,f(3)=2. How many assignments to f(4),f(5),f(6) complete a total function whose range is all {0,1,2}?

```answer
{"answer":{"kind":"integer","expected":"19","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Every missing input gets exactly one of three outputs.

</details>

<details>
<summary>Hint 2</summary>

Zero and two are already attained; count completions missing the one remaining required output and subtract them.

</details>

<details>
<summary>Worked solution</summary>

The range requirement removes a precisely countable class of total completions.

1. The three missing inputs have $3^3=27$ total assignments.
2. The only unmet range condition is to attain one. Completions avoiding one give each missing input only outputs zero or two, for $2^3=8$ assignments.
3. The required count is $27-8=19$.

</details>
