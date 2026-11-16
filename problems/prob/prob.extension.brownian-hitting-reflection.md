# Derive the Brownian maximum tail by reflection

*Medium · [Probability problems](index.md)*

For standard Brownian motion, $a>0$ and $t>0$, prove $P(\max_{0\le s\le t}B_s\ge a)=2P(B_t\ge a)$. You may use continuity and the fact that reflection of the path after its first hit of $a$ preserves Brownian path measure and is an involution.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Split barrier-hitting paths by whether their terminal value is below, equal to, or above the barrier.

</details>

<details>
<summary>Hint 2</summary>

The allowed reflection maps a below-barrier terminal value to the corresponding above-barrier value. Continuity ensures any above-barrier endpoint already belongs to the hitting event.

</details>

<details>
<summary>Model proof</summary>

Measure-preserving reflection pairs the two terminal classes of hitting paths.

1. Let $H=\{\max_{0\le s\le t}B_s\ge a\}$. Brownian continuity on the compact interval ensures the maximum is attained; on $H$ a first hit exists. Also $\{B_t>a\}\subseteq H$ because $B_0=0<a$.
2. For a path in $H$ with first hit $\tau$, reflection replaces its later values by $2a-B_s$. It maps $H\cap\{B_t<a\}$ bijectively onto $\{B_t>a\}$, is its own inverse, and preserves probability by the allowed theorem. These two classes therefore have equal probability.
3. The remaining class with $B_t=a$ has probability zero because $B_t\sim N(0,t)$ has a density. Adding the two disjoint equal classes gives $P(H)=2P(B_t>a)=2P(B_t\ge a)$, as required.

Hitting paths ending below the barrier pair with those ending above; the terminal equality class is null, giving twice the terminal tail.

**Self-assessment rubric**

- Use continuity and the initial value to relate terminal-above paths to the barrier-hitting event.
- Apply the allowed reflection involution to the two terminal classes and justify equality of their masses.
- Remove the terminal equality class using the nondegenerate normal law and add the disjoint classes.

</details>
