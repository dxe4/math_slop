# Compare projective presentation kernels through a pullback

*Hard · [Abstract algebra problems](index.md)*

Suppose $0\to K\to P\to M\to0$ and0 to L to Q to M to0 are exact with P,Q projective. Prove K direct-sum Q is isomorphic to L direct-sum P. Deduce projectivity of one kernel is equivalent to projectivity of the other, and give an example where the kernels themselves are not isomorphic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Form the pairs(p,q) whose two images in M agree.

</details>

<details>
<summary>Hint 2</summary>

Each projection from this pullback is surjective and has the other kernel.

</details>

<details>
<summary>Model proof</summary>

Two split descriptions of one pullback give a stable, rather than literal, kernel comparison.

1. Let F={(p,q) in P times Q:pi(p)=rho(q)}. Projection to P is surjective because Q maps onto M, and its kernel is L. Since P is projective this exact sequence splits, so F is isomorphic to L direct-sum P.
2. Projection to Q similarly has kernel K and splits because Q is projective, giving F isomorphic to K direct-sum Q. Combining the two descriptions gives the desired stable isomorphism.
3. If K is projective, K direct-sum Q is projective, so L as a direct summand of L direct-sum P is projective; reverse the argument for the converse. The kernels need not be isomorphic: take M=Z, P=Z mapping identically with K=0, and Q=Z^2 mapping by first coordinate with L=Z. The stable equality holds although0 and Z differ.

**Self-assessment rubric**

- Construct the common module and identify both surjective projections and kernels.
- Use projectivity on the quotient side of each sequence.
- Derive the projectivity equivalence and exhibit nonisomorphic actual kernels.

</details>
