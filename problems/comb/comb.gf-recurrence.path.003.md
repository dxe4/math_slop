# A constant increment creates a squared denominator

*Medium · [Combinatorics](index.md)*

Let c0=$0$ and $c_{n}=c_{n-1}+1$ for $n\geq 1$. Write C(x)=Nx/(1+D1x+D2x²). Enter N,D1,D2 and c4. Work with formal series only.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"N":1,"D1":-2,"D2":1,"c4":4},"checker_scope":"Exact coefficients in the stated normalized rational form and one sequence term; no analytic convergence or unrestricted derivation claim."}}
```

<details>
<summary>Hint 1</summary>

The constant forcing summed from $n=1$ is $x/(1-x)$.

</details>

<details>
<summary>Hint 2</summary>

Move xC to the left, then expand the squared denominator.

</details>

<details>
<summary>Worked solution</summary>

An inhomogeneous term contributes its own generating series.

1. Summing gives C=xC+x/(1−x), so $C=x/(1-x)^2$.
2. The denominator expands to $1-2x+x^{2}$; hence $N=1$,D1=$-2$,D2=$1$. The recurrence gives c4=$4$.

</details>
