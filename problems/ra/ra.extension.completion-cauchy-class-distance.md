# Read a completion distance as a limit of original distances

*Easy · [Real analysis](index.md)*

In the Cauchy-sequence construction of the completion of Q, distance between classes is $\lim_n|a_n-b_n|$. For a\_n=1+1/n and b\_n=3-1/n, find this distance.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested metric observation or finite covering count only; no completeness proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

For sufficiently large n the difference has a fixed sign.

</details>

<details>
<summary>Hint 2</summary>

Only the limiting original distance is needed.

</details>

<details>
<summary>Worked solution</summary>

Completion changes which limits exist while retaining distances continuously.

1. The difference is b\_n-a\_n=2-2/n.
2. Its absolute value tends to two.
3. Thus the two completion classes have distance two.

</details>
