# Prove exact interlacing for one self-adjoint equation

*Hard · [Differential equations problems](index.md)*

Let p be positive C^1 and q,w continuous real on an interval. For a fixed real lambda, let u,v be independent real solutions of $-(p y')'+q y=\lambda w y$. Prove that between consecutive zeros a&lt;b of u there is exactly one zero of v.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The weighted Wronskian p\*(u'\*v-u\*v') is constant and nonzero.

</details>

<details>
<summary>Hint 2</summary>

First prove at least one zero, then apply the same fact with the two solutions interchanged to rule out two.

</details>

<details>
<summary>Model proof</summary>

A conserved nonzero concomitant forces exact zero separation.

1. The equation gives p\*(uprime\*v-u\*vprime) constant. Independence makes this constant nonzero, so the solutions cannot share a zero; uniqueness also makes every zero of a nontrivial solution simple.
2. Choose u&gt;0 on (a,b), hence uprime(a)&gt;0 and uprime(b)&lt;0. If v had no zero inside, choose v&gt;0 there. Since it cannot vanish at a or b, the weighted Wronskian would be positive at a and negative at b, contradicting constancy. Thus v has at least one interior zero.
3. If v had two or more interior zeros, choose consecutive ones c&lt;d inside (a,b). The same at-least-one argument with u,v interchanged would force a zero of u in (c,d), contradicting consecutiveness of a,b. Thus v has exactly one.

**Self-assessment rubric**

- Derive a constant nonzero weighted Wronskian and its uniqueness consequences.
- Use endpoint signs to force an interior zero.
- Reverse the existence argument between consecutive zeros to exclude a second one.

</details>
