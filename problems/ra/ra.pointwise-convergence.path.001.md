# Compute a pointwise power limit at three inputs

*Easy · [Real analysis](index.md)*

For $f_{n}(x)=x^n$ on $[0,1], n\geq 1$, give the pointwise limit values at $x=0, x=1/2$ and $x=1$ in fields at\_zero, at\_half and at\_one.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"at_zero":"0","at_half":"0","at_one":"1"},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

At each requested input, substitute that fixed value before letting n grow.

</details>

<details>
<summary>Hint 2</summary>

Powers of $1$ stay $1$, whereas powers of a fixed number strictly between $0$ and $1$ tend to zero.

</details>

<details>
<summary>Worked solution</summary>

Pointwise convergence treats each fixed domain point separately.

1. At $x=0$, every value is $0$. At $x=1/2$, values are $(1/2)^n\to 0$.
2. At $x=1$, every value is $1$. Thus the three limit values are $0,0,1$.

</details>
