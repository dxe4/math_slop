# Construct the limit of an Lp Cauchy sequence

*Hard · [Real analysis](index.md)*

For an arbitrary measure space and 1≤p&lt;∞, prove $L^p$ is complete. You may use finite-sum Minkowski and Fatou. Construct the almost-everywhere limit from a summable-difference subsequence and derive its norm convergence, taking care that Lp elements are classes modulo null sets.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a subsequence whose successive norm differences have a summable geometric bound.

</details>

<details>
<summary>Hint 2</summary>

The pointwise sum of their absolute differences is in Lp by finite Minkowski followed by Fatou; use the same reasoning for its tails.

</details>

<details>
<summary>Model proof</summary>

A fast Cauchy subsequence produces an integrable pointwise telescoping majorant without assuming completeness in advance.

1. Choose measurable representatives and discard a common null set so all countably many representatives are finite. From the Cauchy property extract f\_{n\_j} with \|\|f\_{n\_{j+1}}−f\_{n\_j}\|\|\_p≤2^{−j}. Put g\_j=\|f\_{n\_{j+1}}−f\_{n\_j}\| and G\_m=Σ\_{j=1}^m g\_j.
2. Finite Minkowski gives \|\|G\_m\|\|\_p≤Σ2^{−j}≤1. For G=lim\_mG\_m, Fatou gives ∫Gᵖ≤1. Hence G is finite almost everywhere and belongs to Lp. At those points the telescoping difference series converges absolutely; define f=f\_{n\_1}+Σ\_j(f\_{n\_{j+1}}−f\_{n\_j}), assigning zero on the remaining null set.
3. The bound \|f\|≤\|f\_{n\_1}\|+G shows f∈Lp. For a tail starting at j, finite Minkowski and Fatou give \|\|Σ\_{k≥j}g\_k\|\|\_p≤Σ\_{k≥j}2^{−k}=2^{1−j}. Therefore \|\|f−f\_{n\_j}\|\|\_p≤2^{1−j}, so the subsequence converges in norm.
4. Finally given ε&gt;0 choose a Cauchy tail for the original sequence, and then a subsequence term in that tail within ε/2 of f. The norm triangle inequality puts every sufficiently late original term within ε of f.
5. Changing representatives only changes the construction on a countable union of null sets, so the resulting limit is a valid Lp class. This establishes completeness from finite-sum inequalities and Fatou, without assuming an infinite Minkowski sum or completeness to build f.

**Self-assessment rubric**

- Chooses representatives and a subsequence with explicitly summable norm differences.
- Uses only finite Minkowski and Fatou to prove the absolute difference sum lies in Lp.
- Constructs f and bounds its Lp tail error without circular completeness assumptions.
- Transfers convergence from the subsequence to every late original term.
- Keeps all representative and almost-everywhere choices consistent with Lp equivalence classes.

</details>
