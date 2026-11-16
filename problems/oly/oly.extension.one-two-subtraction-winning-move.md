# Choose a first move that preserves a reply strategy

*Medium · [Original olympiad-style problems](index.md)*

A pile has $20$ stones. Players alternately remove one or two stones; taking the last stone wins. How many stones should the first player remove on the unique winning first move?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Look for pile sizes that let the other player answer every move to make a fixed total removed.

</details>

<details>
<summary>Hint 2</summary>

Compare the two possible first moves with the resulting residue class.

</details>

<details>
<summary>Worked solution</summary>

A fixed-total reply strategy makes multiples of three losing positions.

1. From a multiple of three, any move leaves one or two modulo three, and the opponent can remove the complementary amount to return to a multiple of three. This establishes those multiples as losing positions.
2. Twenty is two modulo three, so removing two leaves the losing pile eighteen.
3. Removing one leaves nineteen, from which the opponent can remove one to leave eighteen. Therefore the unique winning first removal is two.

</details>
