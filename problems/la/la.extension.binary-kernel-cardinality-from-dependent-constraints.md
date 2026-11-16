# Count a binary kernel after finding redundant equations

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb F_2$, using arithmetic modulo two. How many vectors in $\mathbb F_2^4$ satisfy $x_1+x_2+x_3=0$, $x_2+x_3+x_4=0$ and $x_1+x_4=0$?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Add the first two equations in characteristic two.

</details>

<details>
<summary>Hint 2</summary>

Choose the middle two coordinates freely and determine the outer ones.

</details>

<details>
<summary>Worked solution</summary>

Rank and cardinality are linked only after identifying the actual independent constraints.

1. The third equation is the sum of the first two, so it adds no restriction.
2. For each choice of $x_2,x_3$, the equations force $x_1=x_4=x_2+x_3$.
3. The two free binary coordinates give exactly $2^2=4$ solutions.

</details>
