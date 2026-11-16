# Assemble three compatible coprime conditions

*Hard · [Number theory](index.md)*

Find x in $0\le x<280$ satisfying x congruent to -1 modulo 5, 2 modulo 7 and 3 modulo 8.

```answer
{"answer":{"kind":"integer","expected":"219","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Start with x=3+8k and impose the modulus-five condition.

</details>

<details>
<summary>Hint 2</summary>

Then use the modulus-seven condition on the resulting progression.

</details>

<details>
<summary>Worked solution</summary>

Successive substitution builds the unique class for pairwise coprime moduli.

1. Write $x=3+8k$. Modulo five, $3+3k\equiv4$, so k=2+5t and x=19+40t.
2. Modulo seven this becomes $5+5t\equiv2$, giving t congruent to five. Thus $x=219+280s$.
3. The canonical representative is 219, with residues four, two and three modulo five, seven and eight respectively.

</details>
