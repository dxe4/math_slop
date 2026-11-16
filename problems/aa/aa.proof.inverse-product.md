# Reverse the factors in an inverse

*Easy · [Abstract algebra problems](index.md)*

In an arbitrary group $G$, prove that $(ab)^{-1}=b^{-1}a^{-1}$ for all $a,b\in G$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use the definition of a two-sided inverse.

</details>

<details>
<summary>Hint 2</summary>

Associativity lets you place each element beside its own inverse without commuting factors.

</details>

<details>
<summary>Model proof</summary>

Verify the candidate by multiplication on both sides.

1. Associativity gives $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=aea^{-1}=e$.
2. In the other order, $(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=b^{-1}eb=e$.
3. Thus $b^{-1}a^{-1}$ is a two-sided inverse of $ab$, and uniqueness of inverses gives the claimed equality.

**Self-assessment rubric**

- Show that the candidate multiplied on the right gives the identity.
- Show that the candidate multiplied on the left also gives the identity.
- Use associativity without assuming commutativity, then invoke inverse uniqueness.

</details>
