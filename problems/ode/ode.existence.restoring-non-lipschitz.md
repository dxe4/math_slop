# A non-Lipschitz equation with a forced forward value

*Hard · [Differential equations problems](index.md)*

Let $y$ be any real $C^1$ solution on $[0,1]$ of $y^{\prime}=-\sqrt[3]{y}$, where the cube root is real, with $y(0)=0$. Find $y(1)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Do not infer nonuniqueness merely from failure of a Lipschitz hypothesis.

</details>

<details>
<summary>Hint 2</summary>

Differentiate a nonnegative energy quantity to exploit the restoring sign of the vector field.

</details>

<details>
<summary>Worked solution</summary>

A nonincreasing squared magnitude starting at zero must remain zero.

1. Differentiation gives $(y^2)^{\prime}=2yy^{\prime}=-2y\sqrt[3]y=-2|y|^{4/3}\le0$.
2. Thus $y(t)^2\le y(0)^2=0$ for all forward times in the stated interval.
3. Nonnegativity forces $y(t)=0$ throughout. It satisfies the equation directly, and in particular $y(1)=0$.

</details>
