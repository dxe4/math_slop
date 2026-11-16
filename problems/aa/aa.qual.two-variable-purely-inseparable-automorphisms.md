# Separate extension degree from automorphism count in a two-generator inseparable extension

*Hard · [Abstract algebra problems](index.md)*

Let s,t be algebraically independent over Fp, and put $K=\mathbb F_p(s,t)$ and L=K(u,v), where u^p=s and v^p=t. Prove \[L:K\]=p^2 but Aut\_K(L) is trivial.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use Eisenstein in each transcendental variable along a two-step tower.

</details>

<details>
<summary>Hint 2</summary>

Each pth-root equation has only one distinct solution in an algebraic closure.

</details>

<details>
<summary>Model proof</summary>

Pure inseparability can make a large finite extension have no nontrivial base-field symmetry.

1. The polynomial X^p-s is Eisenstein at s over Fp(t)\[s\], giving \[K(u):K\]=p. This first field is Fp(u,t), where u and t remain algebraically independent.
2. Over Fp(u,t), the polynomial Y^p-t is Eisenstein at t over Fp(u)\[t\], so adjoining v gives a second degree p. The total tower degree is p squared.
3. A K-automorphism must send u to a root of X^p-s and v to a root of Y^p-t. In characteristic p each has a unique distinct root, so both generators are fixed and the automorphism is the identity.

**Self-assessment rubric**

- Prove the first irreducible pth-root step over the rational function field.
- Justify the remaining transcendental variable and the second Eisenstein step.
- Use uniqueness of distinct pth roots to fix both generators and every automorphism.

</details>
