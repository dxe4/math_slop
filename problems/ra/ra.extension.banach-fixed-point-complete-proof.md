# Derive existence, uniqueness and the full geometric tail estimate

*Hard · [Real analysis](index.md)*

Let T map a nonempty complete metric space to itself and satisfy $d(Tx,Ty)\le qd(x,y)$ with 0&lt;=q&lt;1. Prove T has exactly one fixed point and every Picard iteration x\_(n+1)=T(x\_n) converges to it. Derive the error bound used in the finite observation problem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Bound successive displacements geometrically.

</details>

<details>
<summary>Hint 2</summary>

Sum a finite tail before taking the completeness limit.

</details>

<details>
<summary>Model proof</summary>

A summable chain of displacements gives existence before the fixed-point equation is invoked.

1. Induction gives d(x\_(n+1),x\_n)&lt;=q^n\*d(x\_1,x\_0). For m&gt;n the triangle inequality gives d(x\_m,x\_n)&lt;=sum\_(j=n)^(m-1) q^j\*d(x\_1,x\_0)&lt;=q^n\*d(x\_1,x\_0)/(1-q), with the q=0 case immediate after the first step.
2. Thus the iterates are Cauchy and converge to some x\_\* by completeness. The contraction inequality makes T continuous, so T(x\_\*)=lim T(x\_n)=lim x\_(n+1)=x\_\*.
3. If y\_\* is another fixed point, d(x\_\*,y\_\*)&lt;=q\*d(x\_\*,y\_\*), forcing zero distance. Finally let m tend to infinity in the tail estimate to obtain d(x\_n,x\_\*)&lt;=q^n\*d(x\_1,x\_0)/(1-q), including n=0 and interpreting q^0=1.

**Self-assessment rubric**

- Prove the displacement and finite-tail estimates.
- Use completeness and continuity in the correct order.
- Establish uniqueness and pass to the limit in the quantitative tail bound.

</details>
