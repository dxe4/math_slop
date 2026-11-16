# Bezout coefficients: integer linear combination

*Medium · [Number theory](index.md)*

Find integers x,y with $17x + 7y = 1$ and $0 \leq  x < 7$. The bound on x selects one pair.

```answer
{"answer":{"kind":"integer_pair","expected":{"x":5,"y":-12},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Solve $y = (1 - 17x)/7$, and test the permitted integers $x = 0,1$,...,$6$.

</details>

<details>
<summary>Hint 2</summary>

Keep only candidates for which the numerator is an integer multiple of $7$.

</details>

<details>
<summary>Worked solution</summary>

Bezout witnesses need integer coefficients; a stated bound can select a unique witness.

1. For $x=0,1,2,3,4,5,6$, the numerators $1-17x$ are respectively $1,-16,-33,-50,-67,-84,-101$. Only $-84$ is divisible by $7$.
2. Thus $x=5$ and $y=-84/7=-12$. Check $17\times 5+7\times (-12)=1$ and $0\leq 5<7$.

</details>
