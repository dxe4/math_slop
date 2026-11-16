# Prove invariant vectors form a descended basis

*Hard · [Abstract algebra problems](index.md)*

Let $L/K$ be finite Galois with group $G$, and let $V$ be a finite-dimensional $L$-vector space with a semilinear $G$-action: $g(av)=g(a)g(v)$. Prove that $L\otimes_K V^G\to V$, $a\otimes v\mapsto av$, is an isomorphism. You may use independence of field automorphisms.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Show the $L$-span of invariant vectors is all of $V$ using sums $sum_g g(av)$.

</details>

<details>
<summary>Hint 2</summary>

For injectivity, choose a shortest $L$-linear relation among $K$-independent invariant vectors, normalize one coefficient and apply each $g$.

</details>

<details>
<summary>Model proof</summary>

Automorphism independence gives enough invariant vectors; a minimal relation gives independence.

1. Let $W$ be the $L$-span of $V^G$. It is $G$-stable. For every $a\in L$ and $v\in V$, the sum $\sum_g g(av)$ is invariant and hence maps to zero in $V/W$. If a nonzero class $\bar v$ existed, this would give $\sum_g g(a)g(\bar v)=0$ for all $a$. Taking a nonzero coordinate functional contradicts independence of the automorphisms. Thus $W=V$.
2. Suppose $K$-independent invariant vectors have a shortest nonzero $L$-relation $\sum_{i=1}^r a_i v_i=0$, normalized by $a_1=1$. Applying $g$ and subtracting gives a relation with fewer terms. Minimality forces $g(a_i)=a_i$ for every $g$, so all $a_i\in K$, a contradiction.
3. Thus any finite $K$-independent family of invariants is $L$-independent, and invariants span $V$ over $L$. Choosing an invariant basis proves both surjectivity and injectivity of the displayed tensor map.

**Self-assessment rubric**

- Use invariant sums and automorphism independence on the quotient to prove spanning.
- Show a shortest relation among invariant vectors must have all coefficients in the fixed field.
- Combine spanning and independence to justify the tensor map in both directions.

</details>
