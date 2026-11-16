# Use Čech cohomology in Alexander duality for a Cantor set

*Hard · [Topology problems](index.md)*

Let C⊂S³ be any embedded space homeomorphic to the standard Cantor set. Compute the integral homology of $S^3\setminus C$ using Alexander duality with Čech cohomology. Describe H₂ as a direct limit and prove it is a free abelian group of countably infinite rank. Explain why singular H⁰(C) is the wrong replacement. You may use $\widetilde H_i(S^3\setminus C;\mathbb Z)\cong\widetilde{\check H}^{2-i}(C;\mathbb Z)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the cofinal clopen partitions of C into 2ⁿ cylinder sets; refinement duplicates each coordinate in Z^{2ⁿ}.

</details>

<details>
<summary>Hint 2</summary>

After quotienting out constants, the refinement is a split injection with free cokernel.

</details>

<details>
<summary>Model proof</summary>

For a compact non-locally-contractible set, Čech cohomology records finite clopen information needed by complement duality.

1. The binary clopen cylinder partitions are cofinal among finite open covers of C. Their nerves are finite discrete sets, so all positive Čech cohomology vanishes. In degree zero the direct system is Z^{2ⁿ} with refinement (a\_1,…,a\_r)↦(a\_1,a\_1,…,a\_r,a\_r). It represents locally constant integer-valued functions on C.
2. The reduced group is B=colim B\_n with B\_n=Z^{2ⁿ}/Z·(1,…,1). Refinement is injective. Its cokernel is Z^{2ⁿ}, seen by taking the difference between the two new coordinates in each old cylinder; quotienting constants does not alter this cokernel. Because the cokernel is free, each inclusion splits as an abelian-group map.
3. Starting with B\_0=0 and choosing such splittings, the direct limit is a countable direct sum of finite-rank free groups with unbounded cumulative rank. Hence B is free abelian of countably infinite rank. Alexander duality gives H₂(S³∖C)=B, H₁=0 and H̃₀=0; all degrees ≥3 vanish. Thus H₀=Z and the complement is path connected.
4. Singular H⁰(C;Z) permits arbitrary integer assignments on its singleton path components, whereas Čech H⁰ consists of locally constant assignments. They are different for a Cantor set. The compact-set duality formula here requires Čech cohomology, not a locally contractible version with singular cohomology substituted. The vanishing H₁ alone makes no claim that π₁ vanishes.

**Self-assessment rubric**

- Uses cofinal finite clopen partitions and the duplication refinement maps to compute Čech groups.
- Quotients out constants and identifies the free refinement cokernels.
- Justifies splitting and countably infinite free rank rather than only asserting infinitude.
- Lists the complement groups with correct degree reversal and distinguishes singular from Čech H⁰.

</details>
