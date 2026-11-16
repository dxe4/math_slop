# Prove the class-two power formula and its odd-prime consequence

*Hard · [Abstract algebra problems](index.md)*

Suppose all commutators of G are central, with \[x,y\]=xyx^(-1)y^(-1). Prove $(xy)^n=x^ny^n[y,x]^{n(n-1)/2}$ for n&gt;=0. Deduce that if an odd prime p satisfies x^p=e for each member of a generating set, then every group element has pth power e. Give a class-two counterexample at p=2.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Central commutators can be moved past all factors during the induction.

</details>

<details>
<summary>Hint 2</summary>

For the exponent consequence, \[x^p,y\]=\[x,y\]^p controls the commutator's pth power.

</details>

<details>
<summary>Model proof</summary>

A central correction term explains the special role of odd prime exponents.

1. The relation yx=\[y,x\]\*xy and centrality give y^n\*x=\[y,x\]^n\*x\*y^n. Inducting on n in (xy)^n proves the displayed binomial power formula, with zero and one as initial cases.
2. Central commutator identities also give \[u^p,v\]=\[u,v\]^p. If u and v already have pth power e, their commutator's pth power is e, and the power formula for uv has central exponent p\*(p-1)/2 divisible by p when p is odd. Thus (uv)^p=e. Induction on words in generators and their inverses proves the conclusion.
3. For p=2 use the order-eight dihedral group with r^4=s^2=e, srs=r inverse. The generators s and r\*s are involutions, and its commutators are central, but their product s\*r\*s=r inverse has order four. Thus the conclusion fails at two.

**Self-assessment rubric**

- Derive the exact correction exponent with the chosen commutator convention.
- Control the commutator pth power and extend the two-factor result to all words.
- Give and verify a genuine class-two involution-generated counterexample.

</details>
