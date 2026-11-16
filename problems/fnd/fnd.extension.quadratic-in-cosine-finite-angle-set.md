# Factor a trigonometric equation before listing angles

*Medium · [Foundations bridge](index.md)*

Solve $2\cos^2\theta-3\cos\theta+1=0$ for θ∈\[0,2π). Return all coefficients c such that θ=cπ.

```answer
{"answer":{"kind":"set","expected":["0","1/3","5/3"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Treat cosθ as one algebraic variable.

</details>

<details>
<summary>Hint 2</summary>

For each allowed cosine root list every angle in the stated half-open turn.

</details>

<details>
<summary>Worked solution</summary>

Algebraic roots and periodic angle solutions are separate steps.

1. Factoring gives (2cosθ−1)(cosθ−1)=0, so cosθ is 1/2 or 1.
2. Cosine 1/2 occurs at π/3 and 5π/3; cosine 1 occurs at 0 in this interval, while 2π is excluded.
3. The coefficient set is {0,1/3,5/3}.

</details>
