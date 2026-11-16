# Select the genuinely linear condition

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. In $\mathbb R^2$, consider $a_1=\{(x,y):x+y=0\}$, $a_2=\{(x,y):x+y=1\}$ and $a_3=\{(x,y):xy=0\}$. Return the set of labels defining vector subspaces.

```answer
{"answer":{"kind":"set","expected":["a_1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A subspace must contain zero and be closed under addition.

</details>

<details>
<summary>Hint 2</summary>

Use the two coordinate unit vectors to check the nonlinear condition.

</details>

<details>
<summary>Worked solution</summary>

Apply different closure obstructions to two plausible impostors.

1. $a_1$ is the kernel of the linear functional $x+y$, hence a subspace.
2. $a_2$ excludes the zero vector and is not a subspace.
3. $a_3$ contains both coordinate unit vectors but not their sum $(1,1)$, so it also fails. Only $a_1$ is admitted.

</details>
