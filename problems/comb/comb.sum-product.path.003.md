# Three independent code positions

*Easy · [Combinatorics](index.md)*

A code has one letter from {J,K}, followed by one digit from $\{1,3,5,7\}$, followed by one mark from $\{+,-,*\}$. Every combination is allowed. How many codes are possible?

```answer
{"answer":{"kind":"integer","expected":24,"checker_scope":"Exact finite structured answer for multiply-three-uniform-stages; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The positions are distinct and every choice can be followed by all later choices.

</details>

<details>
<summary>Hint 2</summary>

Count choices for the three positions separately.

</details>

<details>
<summary>Worked solution</summary>

Uniform successive choices multiply.

1. The first two positions give $2\times 4=8$ prefixes.
2. Each prefix has three final marks, giving $8\times 3=24$ codes.

</details>
