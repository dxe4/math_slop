# A finite integral domain is a field

*Medium · [Abstract algebra problems](index.md)*

Let $R$ be a finite commutative ring with $1\ne0$ and no zero divisors. Prove that $R$ is a field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Fix a nonzero element and examine multiplication by it as a map of the finite set.

</details>

<details>
<summary>Hint 2</summary>

Cancellation gives injectivity; finiteness converts that property into a statement about which outputs occur.

</details>

<details>
<summary>Model proof</summary>

Injective multiplication on a finite set must reach the identity.

1. Fix $a\ne0$ and define $m_a:R\to R$ by $m_a(x)=ax$.
2. If $ax=ay$, then $a(x-y)=0$. The absence of zero divisors and $a\ne0$ give $x=y$, so the map is injective.
3. A self-map of a finite set that is injective is surjective. Hence $ab=1$ for some $b\in R$.
4. Commutativity gives $ba=1$ too. Every nonzero element is invertible, so $R$ is a field.

**Self-assessment rubric**

- Fix an arbitrary nonzero element and define its multiplication map.
- Use the no-zero-divisors hypothesis to prove injectivity.
- Use finiteness to obtain an inverse and conclude the field property.

</details>
