# Complete a primitive integer vector in every possible way

*Hard · [Original olympiad-style problems](index.md)*

Let $a,b$ be integers with $\gcd(a,b)=1$. Construct all integer pairs $(c,d)$ satisfying $ad-bc=1$. Prove your list is complete, and explain why the resulting matrix is a bijection of the integer lattice.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Bezout gives $au+bv=1$, yielding one completion.

</details>

<details>
<summary>Hint 2</summary>

The difference of two completions solves $a\Delta d=b\Delta c$; use coprimality, with zero coordinates handled separately.

</details>

<details>
<summary>Model proof</summary>

Use Bezout for existence and a homogeneous equation for the full family.

1. Choose integers $u,v$ with $au+bv=1$. Then $(c_0,d_0)=(-v,u)$ satisfies the determinant condition.
2. Every pair $(c,d)=(c_0+ka,d_0+kb)$ with integer $k$ has the same determinant, so it is a completion.
3. Conversely, subtract a completion from the chosen one. If both $a,b$ are nonzero, coprimality in $a\Delta d=b\Delta c$ forces $a\mid\Delta c$, then $\Delta c=ka$ and $\Delta d=kb$. If $a=0$, then $b=\pm1$ and the equation fixes $c$ while allowing every $d$, exactly the same family. The case $b=0$ is analogous.
4. The integer matrix with columns $(a,b),(c,d)$ has determinant one and inverse with integer entries, its adjugate. It therefore maps the integer lattice bijectively to itself, not merely injectively into a sublattice.

**Self-assessment rubric**

- Construct one exact determinant-one completion.
- Give and verify the complete integer parameter family.
- Handle possible zero components without illegal divisibility cancellation.
- Use the integer inverse to prove both directions of the lattice map.

</details>
