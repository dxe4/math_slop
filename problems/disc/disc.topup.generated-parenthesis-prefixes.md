# Prove a prefix property through two word constructors

*Hard · [Discrete mathematics](index.md)*

Words are built by finitely many applications of these rules: the empty word is allowed; from allowed u,v form uv; from allowed u form (u). Let $B(w)$ count opening minus closing parentheses in w. Prove every allowed word has B(w)=0 and every prefix p satisfies B(p)&gt;=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The induction is on a finite construction, so each constructor input has the property already.

</details>

<details>
<summary>Hint 2</summary>

A concatenation prefix ends either inside its first word or inside its second word after the first has balanced.

</details>

<details>
<summary>Model proof</summary>

Structural induction must track the total and prefix properties together.

1. The empty word has balance zero, and so does its only prefix.
2. For uv, total balances add to zero. A prefix within u has nonnegative balance; a prefix extending into v has balance B(u) plus a prefix balance of v, again nonnegative.
3. For (u), the initial opening parenthesis gives balance one. Prefixes inside u have balance one plus a nonnegative prefix balance of u; the final closing parenthesis restores the total to zero.
4. Both constructors preserve both properties, proving the claim for every finite construction.

**Self-assessment rubric**

- Check both the total and prefix assertions at the empty word.
- Handle prefixes ending in either component without circular assumptions.
- Track the extra opening and final closing parentheses.

</details>
