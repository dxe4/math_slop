# Find the Jordan type of a nonlinear operator function

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb C$, let N be one nilpotent Jordan block of size three. Return the Jordan block sizes of $N^2$ in descending order. Use the convention $Ne_3=e_2$, $Ne_2=e_1$, $Ne_1=0$.

```answer
{"answer":{"kind":"vector","expected":["2","1"],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The square still has a two-step chain from the last to the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

Find the independent vector killed immediately outside that chain.

</details>

<details>
<summary>Worked solution</summary>

An operator polynomial can split one original chain.

1. $N^2e_3=e_1$ and $N^2e_1=N^2e_2=0$.
2. The pair $(e_1,e_3)$ gives one length-two chain for $N^2$, while $e_2$ gives an independent length-one chain.
3. These three vectors form a basis, so the complete Jordan type is $[2,1]$.

</details>
