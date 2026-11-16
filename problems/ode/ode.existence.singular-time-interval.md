# Keep a singular time out of the solution interval

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}=1/(t-2)$ with $y(0)=0$, find the maximal real interval of the solution containing time zero.

```answer
{"answer":{"kind":"interval","expected":"(-infinity, 2)","checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The equation has an excluded time even before the initial value is imposed.

</details>

<details>
<summary>Hint 2</summary>

Integrate on the connected side containing the initial point.

</details>

<details>
<summary>Worked solution</summary>

The equation domain limits continuation across its singular time.

1. On $t<2$, integration gives $y(t)=\log(2-t)-\log2$.
2. Its derivative is $-1/(2-t)=1/(t-2)$ and its initial value is zero.
3. The right-hand side is undefined at $2$ and the solution diverges there. The maximal interval containing zero is $(-\infty,2)$.

</details>
