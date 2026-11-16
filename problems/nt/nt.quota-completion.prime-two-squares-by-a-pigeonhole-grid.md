# Prove the prime two-square theorem with a finite grid

*Hard · [Number theory](index.md)*

For an odd prime p, prove p is a sum of two integer squares exactly when $p\equiv1\pmod4$. In the forward direction use residues; in the converse construct a small nonzero pair from a pigeonhole grid. You may use Wilson theorem to obtain a square root of −1 mod p.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

When p≡1 mod4, pair the two halves of (p−1)! to get a²≡−1 mod p.

</details>

<details>
<summary>Hint 2</summary>

Take all x,y from 0 through ⌊√p⌋ and compare the residues x+ay; a collision yields a squared norm strictly between zero and 2p.

</details>

<details>
<summary>Model proof</summary>

A modular isotropic direction becomes an exact small norm through a two-dimensional pigeonhole argument.

1. If an odd prime is x²+y², one square is odd and the other even; they cannot both be odd because that would make the sum even. Squares modulo 4 then give p≡1 mod4.
2. Conversely assume p≡1 mod4 and put P=(p−1)/2, even. Wilson gives −1≡(p−1)!≡(−1)ᴾ(P!)²=(P!)² mod p. Thus a=P! has a²≡−1 mod p.
3. Let M=⌊√p⌋. There are (M+1)²&gt;p pairs (x,y) with 0≤x,y≤M, so two distinct pairs have the same x+ay mod p. Their difference (u,v) is nonzero, has \|u\|,\|v\|≤M, and satisfies u+av≡0.
4. Hence u²+v²≡0 mod p. But 0&lt;u²+v²≤2M²&lt;2p because a prime is not a square. The only positive multiple of p in this range is p itself, giving p=u²+v² and proving the converse.

**Self-assessment rubric**

- Handles parity and square residues for an odd prime representation.
- Derives the modular root using the factorial pairing and Wilson theorem.
- Chooses the grid size and obtains a nonzero bounded congruence pair.
- Uses both strict norm bounds to turn divisibility into equality with p.

</details>
