# Find the first nontrivial universal power identity

*Hard · [Number theory](index.md)*

Find the least integer n&gt;1 such that $a^n\equiv a\pmod7$ for every integer a.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Fermat supplies one exponent that works, including a separate zero-residue case.

</details>

<details>
<summary>Hint 2</summary>

The residue three has order six; use it to constrain any candidate exponent.

</details>

<details>
<summary>Worked solution</summary>

A universal identity needs both an existence theorem and a lower-bound witness.

1. Fermat gives $a^7\equiv a$ for every nonzero residue modulo seven, and it also holds for the zero residue. Thus n=7 works.
2. For residue three the successive powers have residues 3,2,6,4,5,1, so its order is six. Any valid n must have $3^{n-1}\equiv1$, forcing six to divide n-1.
3. The least n greater than one with that property is seven.

</details>
