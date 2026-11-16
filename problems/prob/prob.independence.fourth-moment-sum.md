# A fourth moment of an independent sum

*Medium · [Probability problems](index.md)*

Independent variables $X,Y$ are each uniform on $\{-1,1\}$. Find $E[(X+Y)^4]$.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find the distribution of the sum, including its zero value.

</details>

<details>
<summary>Hint 2</summary>

Only the two nonzero sum values contribute to the fourth moment.

</details>

<details>
<summary>Worked solution</summary>

The independent sign pairs give a short exact sum distribution.

1. The sum equals $2$ and $-2$ with probabilities $1/4$ each, and equals zero with probability $1/2$.
2. The two nonzero fourth powers are both $16$.
3. Thus the expectation is $(1/4)16+(1/4)16=8$.

</details>
