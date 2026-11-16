# Find the whole preimage of a quotient image

*Easy · [Topology problems](index.md)*

For $q:\mathbb R\to\mathbb R/\mathbb Z$, find $q^{-1}(q((0,1/4)))\cap[-1,1]$ as an interval union. Equivalence is difference by an integer.

```answer
{"answer":{"kind":"interval","expected":"(-1,-3/4) U (0,1/4)","checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The full saturation consists of all integer translates of the open interval.

</details>

<details>
<summary>Hint 2</summary>

Keep the translates meeting the requested closed ambient window, and retain their open endpoints.

</details>

<details>
<summary>Worked solution</summary>

Taking an image and then a preimage saturates equivalence classes.

1. The full preimage is $\bigcup_{k\in\mathbb Z}(k,k+1/4)$.
2. Within the window the only nonempty pieces are the translates at k=-1 and k=0.
3. The translate at k=1 does not include its endpoint one, so contributes nothing. The result is $(-1,-3/4)\cup(0,1/4)$.

</details>
