# Extract parity and signature obstructions from manifold duality

*Hard · [Topology problems](index.md)*

For a closed connected oriented smooth manifold $M$ of dimension $4k+2$, prove $\chi(M)$ is even. For a closed connected oriented smooth manifold N of dimension 4k, prove that an orientation-reversing self-homeomorphism forces the signature of its rational middle-dimensional intersection form to be zero. State why the two middle-dimensional forms have different symmetry.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Pair Betti numbers in complementary degrees, leaving only the middle term in the Euler sum modulo two.

</details>

<details>
<summary>Hint 2</summary>

Graded commutativity makes the middle form skew-symmetric in dimension 4k+2 and symmetric in dimension 4k.

</details>

<details>
<summary>Model proof</summary>

Duality gives a perfect middle pairing, and its parity determines whether rank or signature supplies the obstruction.

1. Poincaré duality gives b\_i(M)=b\_{4k+2−i}(M). In the Euler sum, each complementary pair contributes an even integer because these two indices have the same parity. Thus χ(M) modulo two equals the middle Betti number b\_{2k+1}.
2. The middle rational cup pairing is nondegenerate by duality and is skew-symmetric because the classes have odd degree 2k+1. Over Q a nondegenerate skew-symmetric matrix has even dimension: an odd-sized skew matrix has determinant equal to its negative and therefore determinant zero. Hence b\_{2k+1} is even and χ(M) is even.
3. For N of dimension 4k, middle classes have even degree 2k, so the nondegenerate form Q is symmetric. If h reverses orientation, evaluation gives Q(h\*α,h\*β)=−Q(α,β). Thus Q and −Q are isometric over Q and hence over R.
4. Isometric real symmetric forms have the same signature, whereas changing the sign of a form negates its signature. Therefore signature(Q)=−signature(Q), so it is zero. This is a necessary obstruction; a zero signature alone does not construct an orientation-reversing homeomorphism.

**Self-assessment rubric**

- Pairs complementary Betti numbers and isolates the correct middle-degree parity.
- Uses odd cup degree, duality and characteristic zero to prove even middle rank.
- Shows an orientation reversal carries the symmetric form to its negative.
- Derives signature zero and states the necessary-only scope.

</details>
