# Enumerate rationals without counting duplicate names twice

*Hard · [Set theory](index.md)*

Prove that the rational numbers are countable by listing integer pairs (p,q) with $q\geq1$ in increasing height \|p\|+q, then retaining only the first occurrence of each rational value p/q. Justify the listing after duplicates are removed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Each positive height contains finitely many allowed pairs.

</details>

<details>
<summary>Hint 2</summary>

Every rational has a representation at a finite height, and infinitely many different integer values also appear.

</details>

<details>
<summary>Model proof</summary>

Finite height blocks guarantee that duplicate removal preserves every rational at a finite position.

1. At height h&gt;=1 there are only finitely many pairs, because \|p\|&lt;=h-1 and q=h-\|p\|. Order each such block by increasing p.
2. Every rational value has a representation with integer p and positive q, so it appears in some finite block. Its first occurrence is retained.
3. Before any fixed block only finitely many pairs have been listed, so every retained value has a finite position. The outputs are infinite because all distinct integers occur with q=1.
4. The resulting nonrepeating sequence lists all rationals, proving countability.

**Self-assessment rubric**

- Specify a finite ordering within every height block.
- Show every rational has a retained occurrence at a finite position.
- Explain why filtering duplicates still leaves an infinite sequence covering the whole set.

</details>
