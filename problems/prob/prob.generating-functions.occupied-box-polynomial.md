# Generate an occupied-box count

*Medium · [Probability problems](index.md)*

Two labelled balls independently choose one of three labelled boxes, each uniformly. Let $X$ be the number of occupied boxes. Find $E[x^X]$ as a polynomial, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(x+2*x^2)/3","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The count is determined by whether the two boxes chosen agree.

</details>

<details>
<summary>Hint 2</summary>

Count the collision outcomes among all ordered box choices.

</details>

<details>
<summary>Worked solution</summary>

A collision event distinguishes the two possible occupancy counts.

1. The nine ordered box choices are equally likely. Three put both balls in the same box.
2. Hence $P(X=1)=1/3$ and $P(X=2)=2/3$.
3. The polynomial is $x/3+2x^2/3=(x+2x^2)/3$.

</details>
