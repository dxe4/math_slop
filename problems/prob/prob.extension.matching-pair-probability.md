# A specified pair in a perfect matching

*Medium · [Probability problems](index.md)*

For an integer $n\ge1$, choose uniformly from all perfect matchings of $2n$ labelled vertices, meaning partitions into unordered pairs. For two specified distinct vertices $u,v$, prove that the probability they form a pair is $1/(2n-1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Fix $u$ and consider the possible identity of its partner.

</details>

<details>
<summary>Hint 2</summary>

A relabelling that fixes $u$ and exchanges two other vertices is a bijection of the matching space. Use it to compare partner events.

</details>

<details>
<summary>Model proof</summary>

Show that all partner events have equal probability and partition the sample space.

1. For each vertex $w\ne u$, let $A_w$ be the event that $u$ is paired with $w$. Every perfect matching lies in exactly one of these $2n-1$ disjoint events.
2. For any $w,z\ne u$, the relabelling that exchanges $w$ and $z$ while fixing $u$ maps matchings in $A_w$ bijectively onto matchings in $A_z$. Uniformity therefore gives $P(A_w)=P(A_z)$.
3. Writing the common value as $p$, finite additivity gives $(2n-1)p=1$. Thus $P(A_v)=1/(2n-1)$. This also covers $n=1$, when the only possible matching pairs the two vertices.

Relabelling makes the $2n-1$ possible partners of the first vertex equally likely; the specified partner has probability $1/(2n-1)$.

**Self-assessment rubric**

- Identify disjoint and exhaustive events according to the partner of the fixed vertex.
- Justify equal probabilities by a bijection preserving the uniform matching law.
- Normalise over exactly $2n-1$ possible partners.

</details>
