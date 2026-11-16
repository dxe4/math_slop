# Count a binary language with a simultaneous modular state

*Hard · [Computational arithmetic problems](index.md)*

How many binary strings of length $10$, allowing leading zeros, contain no consecutive ones and represent an integer divisible by $3$?

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

The state must retain both the last bit and the current remainder.

</details>

<details>
<summary>Hint 2</summary>

Appending a bit $b$ sends remainder $r$ to $2r+b\pmod3$; only a previous zero allows an appended one.

</details>

<details>
<summary>Worked solution</summary>

A product automaton combines a forbidden-pattern memory with arithmetic remainder propagation.

1. Let $A_r,B_r$ count prefixes of remainder $r$ ending in zero or one. Start $A=[1,0,0]$, $B=[0,0,0]$ for the empty prefix.
2. The update sends $A_r+B_r$ to the zero-ending remainder $2r\pmod3$, and $A_r$ to the one-ending remainder $2r+1\pmod3$.
3. At lengths $6,7,8,9$, the pairs $(A,B)$ are $([4,5,4],[3,2,3])$, $([7,7,7],[5,4,4])$, $([12,11,11],[7,7,7])$, and $([19,18,18],[11,12,11])$.
4. The final pair is $([30,29,30],[18,19,18])$. Remainder zero therefore has $30+18=48$ strings, including the all-zero string.

</details>
