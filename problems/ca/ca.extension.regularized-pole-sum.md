# Build a meromorphic function by subtracting pole-tail constants

*Medium · [Complex analysis problems](index.md)*

Prove that $F(z)=\sum_{n=1}^{\infty}\left(1/(z-n)+1/n\right)$ converges locally uniformly away from the positive integers, extends meromorphically to the plane with simple poles of residue one there, and satisfies F(0)=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Combine the two fractions before estimating the tail.

</details>

<details>
<summary>Hint 2</summary>

Near one positive integer, separate that single summand from the remaining normally convergent series.

</details>

<details>
<summary>Model proof</summary>

A constant subtraction makes the pole tail decay quadratically.

1. Each summand equals z/\[n\*(z-n)\]. On a compact set \|z\|&lt;=R and for n&gt;2R, its modulus is at most 2R/n^2. This proves local uniform convergence on compact sets avoiding the pole locations.
2. Near m in the positive integers, all terms except the mth form a holomorphic normally convergent function: finitely many other terms are holomorphic there and the same tail bound applies. The mth term has the simple principal part 1/(z-m).
3. Thus F is meromorphic with precisely those simple poles and residue one. At zero each summand is zero, so F(0)=0.

**Self-assessment rubric**

- Combine terms and establish a compact-uniform quadratic tail bound.
- Separate a chosen pole and prove the remaining sum holomorphic.
- Check the stated value without an unjustified cancellation of divergent series.

</details>
