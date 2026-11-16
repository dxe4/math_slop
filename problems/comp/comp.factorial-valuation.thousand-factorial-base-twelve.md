# Interpret trailing zeros in a composite base

*Hard · [Computational arithmetic problems](index.md)*

How many trailing zeros occur when $1000!$ is written in base twelve?

```answer
{"answer":{"kind":"integer","expected":"497","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

One base-twelve zero requires a factor $12=2^2\cdot3$.

</details>

<details>
<summary>Hint 2</summary>

Compare the number of available pairs of twos with the number of available threes.

</details>

<details>
<summary>Worked solution</summary>

Trailing zeros in a composite base depend on every prime exponent in that base.

1. The factorial valuations are $v_2(1000!)=994$ and $v_3(1000!)=498$, obtained by summing the corresponding prime-power floors.
2. The greatest exponent $t$ with $12^t\mid1000!$ is $\min(\lfloor994/2\rfloor,498)$.
3. This equals $\min(497,498)=497$, the base-twelve trailing-zero count.

</details>
