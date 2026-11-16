# Prove linear independence of distinct field homomorphisms

*Hard · [Abstract algebra problems](index.md)*

Let sigma\_1,...,sigma\_n be distinct field homomorphisms from L to a field E. Prove they are linearly independent over E as functions: $\sum_i a_i\sigma_i(x)=0$ for all x implies every a\_i=0. Do not confuse independence of functions with independence of one tuple of values.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose a nonzero relation with the fewest nonzero coefficients.

</details>

<details>
<summary>Hint 2</summary>

Evaluate it at x\*y and subtract one chosen image of y times the relation at x.

</details>

<details>
<summary>Model proof</summary>

A minimal relation cannot survive a multiplier distinguishing two embeddings.

1. Suppose a nonzero relation exists and choose one with the minimum number m of nonzero coefficients. One term cannot vanish for all x because evaluating at one gives its coefficient nonzero. Thus m&gt;=2; relabel the active embeddings sigma\_1,...,sigma\_m.
2. Choose y with sigma\_1(y) different from sigma\_m(y), possible because the maps differ. Subtract sigma\_m(y) times the relation at x from the relation at x\*y. This gives sum\_(i=1)^(m-1) a\_i\*(sigma\_i(y)-sigma\_m(y))\*sigma\_i(x)=0 for every x.
3. The coefficient at i=1 is nonzero, so this is a genuine relation with fewer active terms, contradicting minimality. Therefore no nonzero relation exists.

**Self-assessment rubric**

- Choose a global relation and rule out a one-term case.
- Use homomorphism multiplication with a value separating two maps.
- Retain a nonzero coefficient while eliminating one term.

</details>
