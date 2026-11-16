# Compose permutations in the declared order

*Easy · [Abstract algebra problems](index.md)*

Let $\sigma=(1\ 2\ 3)$ and $\tau=(1\ 2)$ in $S_3$. Compute $\sigma\tau$ with the rightmost permutation acting first. Enter $[\sigma\tau(1),\sigma\tau(2),\sigma\tau(3)]$.

```answer
{"answer":{"kind":"vector","expected":[3,2,1],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Follow each input through the right-hand permutation before the left-hand one.

</details>

<details>
<summary>Hint 2</summary>

Do not replace composition with addition of cycle labels.

</details>

<details>
<summary>Worked solution</summary>

Compute the composed function on each element of the underlying set.

1. Input $1$ goes to $2$ under $\tau$ and then to $3$ under $\sigma$.
2. Input $2$ goes to $1$ and then to $2$; input $3$ goes to itself and then to $1$.
3. The image vector is $[3,2,1]$, representing the transposition $(1\ 3)$.

</details>
