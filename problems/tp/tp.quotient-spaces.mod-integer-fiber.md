# Find representatives of one quotient point

*Easy · [Topology problems](index.md)*

On $\mathbb R$, define $x\sim y$ when $x-y\in\mathbb Z$. Which points of $[-2,2]$ lie in the equivalence class of $0$? Enter the point set.

```answer
{"answer":{"kind":"set","expected":[-2,-1,0,1,2],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Apply the equivalence relation directly with the chosen representative.

</details>

<details>
<summary>Hint 2</summary>

Then impose the closed interval restriction on all valid representatives.

</details>

<details>
<summary>Worked solution</summary>

The zero class consists of integers, restricted here to a bounded window.

1. The relation $x\sim0$ means precisely $x\in\mathbb Z$.
2. The integers in the closed interval are $-2,-1,0,1,2$.
3. The requested set is $\{-2,-1,0,1,2\}$.

</details>
