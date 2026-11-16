# Recover nilpotent block sizes from ranks of powers

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A nilpotent real operator on $\mathbb R^6$ has ranks $4,2,1,0$ for its first four powers. Return its Jordan block sizes in descending order.

```answer
{"answer":{"kind":"vector","expected":["4","2"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Convert the ranks to kernel dimensions, including the zero-th power.

</details>

<details>
<summary>Hint 2</summary>

The increase of nullity at each step counts blocks at least that long.

</details>

<details>
<summary>Worked solution</summary>

Read a conjugacy type from the entire kernel-growth profile.

1. The nullities from powers zero through four are $0,2,4,5,6$.
2. The successive increases are $2,2,1,1$, counting the numbers of blocks of sizes at least one, two, three and four.
3. Thus there are two blocks, both at least two long, only one reaching three and four, and none longer. Their sizes are four and two.

</details>
