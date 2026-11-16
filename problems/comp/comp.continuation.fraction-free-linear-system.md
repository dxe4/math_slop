# Eliminate a small exact system without introducing fractions early

*Medium · [Computational arithmetic problems](index.md)*

Solve $2x+y-z=1$, $x+3y+2z=13$, $3x-y+z=4$. Return $[x,y,z]$.

```answer
{"answer":{"kind":"vector","expected":["1","2","3"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Eliminate $x$ with integer multiples of the first equation.

</details>

<details>
<summary>Hint 2</summary>

The two resulting equations become a sum and a difference of the remaining variables.

</details>

<details>
<summary>Worked solution</summary>

Integer row combinations preserve a simple exact elimination path.

1. Twice the second equation minus the first gives $5y+5z=25$, so $y+z=5$.
2. Twice the third minus three times the first gives $-5y+5z=5$, so $-y+z=1$.
3. Adding yields $z=3$, and then $y=2$. The first equation gives $2x=2$, so $x=1$.
4. The reduced two-variable system has nonzero determinant, and the first equation uniquely determines $x$. Thus the solution vector is $[1,2,3]$.

</details>
