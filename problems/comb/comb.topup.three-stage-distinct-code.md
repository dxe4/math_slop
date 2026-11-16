# Multiply stages after accounting for earlier choices

*Medium · [Combinatorics](index.md)*

A length-three code uses the alphabet $\{A,B,C,0,1\}$. Its first symbol must be a letter, and all three symbols must be distinct. How many codes are possible?

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

After any allowed first symbol, count the remaining symbols.

</details>

<details>
<summary>Hint 2</summary>

The third position must avoid both earlier choices.

</details>

<details>
<summary>Worked solution</summary>

The number of continuations is uniform once each stage restriction is incorporated.

1. There are three choices for the first symbol.
2. Four choices remain for the second and three for the third.
3. The product is $3\cdot4\cdot3=36$.

</details>
