# Balance even and odd subset sizes

*Medium · [Combinatorics](index.md)*

Let $X$ be a finite nonempty set. Prove that $X$ has equally many subsets of even cardinality and of odd cardinality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Pair subsets by changing membership of one fixed element.

</details>

<details>
<summary>Hint 2</summary>

The same operation must reverse itself and switch the parity in both directions.

</details>

<details>
<summary>Model proof</summary>

A parity-reversing involution is a bijection between the two classes.

1. Fix $x_0\in X$ and define $T(S)=S\mathbin{\triangle}\{x_0\}$, toggling whether that element belongs.
2. This changes the cardinality by exactly one, so it switches even and odd sizes.
3. Applying the toggle twice returns $S$. Hence it is a bijection between the even and odd subset families, proving equality of their finite counts.

**Self-assessment rubric**

- Use nonemptiness to choose one element for every subset pairing.
- Show the map reverses cardinality parity.
- Show it is its own inverse and infer equality of the counts.

</details>
