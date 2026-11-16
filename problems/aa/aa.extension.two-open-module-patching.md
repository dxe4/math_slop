# Glue compatible fractions on a two-open affine cover

*Hard · [Abstract algebra problems](index.md)*

Suppose f,g in a commutative ring generate the unit ideal. For every R-module M prove the sequence $0\to M\to M_f\oplus M_g\to M_{fg}$ is exact, where the last map is the difference of restrictions. Localization at a nilpotent element is interpreted as the zero module. Construct a global element for any compatible pair; do not assume M finitely generated.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Powers of f and g also generate the unit ideal.

</details>

<details>
<summary>Hint 2</summary>

Clear a compatibility witness, then combine high powers using coefficients A\*f^N+B\*g^N=1.

</details>

<details>
<summary>Model proof</summary>

Finite denominator clearing and a partition of unity glue local elements without a module finiteness assumption.

1. If u in M vanishes in both localizations, some f^r and g^s kill it. The ideals(f^r),(g^s) are comaximal by expanding a sufficiently high power of1=a\*f+b\*g. Hence a linear combination of those powers is one and kills u, proving injectivity.
2. Write a compatible pair as m/f^a and n/g^b. Compatibility means(f\*g)^k\*(g^b\*m-f^a\*n)=0 for some k. Choose N&gt;=a+k,b+k, and A,B with A\*f^N+B\*g^N=1, possible by powered comaximality.
3. Define w=A\*f^(N-a)\*m+B\*g^(N-b)\*n in M. In M\_f, subtracting m/f^a leaves B\*g^N\*(n/g^b-m/f^a), which is zero by the compatibility witness because N-b&gt;=k and f is invertible. The symmetric argument in M\_g uses N-a&gt;=k. Thus w restricts to the chosen pair.
4. Every global element has equal restrictions on the overlap. Conversely the construction handles every pair in the difference-map kernel, proving exactness; uniqueness follows from the injectivity already proved. No finite generation entered.

**Self-assessment rubric**

- Prove the zero element is detected by this finite open cover.
- Use the correct extra multiplier and choose sufficient common powers.
- Construct w and verify both restrictions with the actual witness.
- Identify the kernel/image relationship and the absence of a finiteness assumption.

</details>
