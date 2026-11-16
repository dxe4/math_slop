# Classify an affine involution from one displaced point

*Medium · [Original olympiad-style problems](index.md)*

An affine real function $f(x)=ax+b$ satisfies $f(f(x))=x$ for every real $x$, and $f(0)=3$. Find $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["-1","3"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The value at zero fixes the offset.

</details>

<details>
<summary>Hint 2</summary>

Compare the linear and constant coefficients after composing the affine expression.

</details>

<details>
<summary>Worked solution</summary>

Use the full identity rather than one fixed-point equation.

1. The offset is $b=3$. Composition gives $a^2x+3a+3=x$.
2. The constant coefficient requires $a+1=0$, so $a=-1$, also satisfying the linear condition $a^2=1$.
3. The function $3-x$ indeed composes with itself to the identity.

</details>
