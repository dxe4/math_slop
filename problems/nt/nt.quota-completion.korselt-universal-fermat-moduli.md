# Prove the complete criterion for a universal Fermat modulus

*Hard · [Number theory](index.md)*

For composite n&gt;1, prove $a^n\equiv a\pmod n$ for every integer a iff n is squarefree and p−1 divides n−1 for every prime p\|n. You may use cyclicity of the nonzero residues modulo a prime. Verify the criterion for 561.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If p² divides n, test a=p before considering only units.

</details>

<details>
<summary>Hint 2</summary>

For squarefree n, reduce independently modulo each prime; necessity of the exponent condition uses a generator modulo that prime.

</details>

<details>
<summary>Model proof</summary>

All-integer congruences force squarefreeness, and finite-order conditions then control each independent prime component.

1. Assume the congruence for every a. If p²\|n, choose a=p. Since n&gt;1, pⁿ−p=p(p^{n−1}−1) has p-valuation exactly one, contradicting divisibility by p². Thus n is squarefree.
2. For each p\|n choose an integer g whose residue generates F\_p×. The congruence gives g^{n−1}≡1 mod p. Its order is p−1, so p−1\|n−1.
3. Conversely assume the stated conditions. Modulo each p\|n, if p\|a then both aⁿ and a vanish; otherwise Fermat and p−1\|n−1 give a^{n−1}≡1. Thus aⁿ≡a at every prime factor. Squarefreeness and CRT combine these into the congruence modulo n.
4. Finally 561=3·11·17 is squarefree, and 2,10,16 each divide 560. It therefore satisfies the universal congruence even though it is composite. Testing only units at the squarefreeness step would have omitted the necessary a=p obstruction.

**Self-assessment rubric**

- Uses a nonunit test to rule out every repeated prime factor.
- Uses a prime-field generator to force p−1\|n−1.
- Handles both units and nonunits modulo each prime before combining.
- Checks the full criterion at 561 and distinguishes it from a primality test.

</details>
