# Derive a nontrivial center from conjugacy orbit sizes

*Medium · [Abstract algebra problems](index.md)*

Let G be a finite group of order $p^n$, with p prime and n&gt;=1. Prove the center Z(G) has order divisible by p and hence is nontrivial.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use conjugation orbits, not the action of G on itself by left translation.

</details>

<details>
<summary>Hint 2</summary>

Every noncentral conjugacy class has size a positive power of p larger than one.

</details>

<details>
<summary>Model proof</summary>

The class equation isolates the central singleton orbits modulo the group prime.

1. For x in G, its conjugacy class has size \[G:C\_G(x)\], a power of p by Lagrange. It is one exactly when x is central.
2. Partitioning G into conjugacy classes gives \|G\|=\|Z(G)\| plus a sum of noncentral class sizes, all divisible by p.
3. Thus p divides \|Z(G)\|. Since the identity belongs to the center, its positive order cannot be zero and is at least p, proving nontriviality.

**Self-assessment rubric**

- Use the conjugation orbit-stabilizer formula and characterize singleton classes.
- Separate central terms from noncentral p-divisible terms.
- Deduce positive center size at least p from the congruence.

</details>
