# Reduce a rank-one matrix solve to one scalar coupling

*Medium · [Computational arithmetic problems](index.md)*

Let $u=(1,2,-1)^T$, $v=(2,0,1)^T$, and $b=(3,1,2)^T$. Solve $(I+uv^T)x=b$ and return the three entries of $x$.

```answer
{"answer":{"kind":"vector","expected":["-1","-7","6"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Introduce the scalar $s=v^Tx$ before expanding all matrix entries.

</details>

<details>
<summary>Hint 2</summary>

Apply $v^T$ to the equation to solve for $s$, then recover $x=b-us$.

</details>

<details>
<summary>Worked solution</summary>

A rank-one correction couples the whole system through a single scalar.

1. The equation reads $x+u(v^Tx)=b$. With $s=v^Tx$, it gives $x=b-us$.
2. Applying $v^T$ yields $s+(v^Tu)s=v^Tb$. Here $v^Tu=1$ and $v^Tb=8$, so $s=4$.
3. Thus $x=(3,1,2)^T-4(1,2,-1)^T=(-1,-7,6)^T$.
4. The scalar coefficient $1+v^Tu=2$ is nonzero, so this reduction determines a unique solution.

</details>
