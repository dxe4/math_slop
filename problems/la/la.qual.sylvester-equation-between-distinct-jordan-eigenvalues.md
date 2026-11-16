# Solve a nontrivial Jordan-to-Jordan Sylvester equation

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, let $A=J_3(1)$ and $B=J_2(2)$, with ones on their superdiagonals. Find the $3\times2$ matrix X satisfying $AX-XB=C$, where C has its sole one in position (3,1). All entries are dimensionless.

```answer
{"answer":{"kind":"matrix","expected":[["-1","3"],["-1","2"],["-1","1"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":3,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Write the equation as $-X+N_3X-XN_2=C$.

</details>

<details>
<summary>Hint 2</summary>

Begin with its last row and proceed upward, tracking the shifted second-column entries.

</details>

<details>
<summary>Worked solution</summary>

Distinct eigenvalues make the entrywise recursion invertible, but the nilpotent couplings still matter.

1. Write the rows of X as $(a,b),(c,d),(e,f)$. The last row equations are $-e=1$ and $-f-e=0$, giving $e=-1$, $f=1$.
2. The middle row equations are $-c+e=0$ and $-d+f-c=0$, giving $c=-1$, $d=2$.
3. The first row gives $-a+c=0$ and $-b+d-a=0$, hence $a=-1$, $b=3$. Each step determines its entries uniquely, giving the stated matrix.

</details>
