# Same points, different schemes

*Difficulty 5 of 5 · [Topology and modern geometry](index.md) · exercise 8 of 8*

Let A=k[x]/(x) and B=k[x]/(x²) for a field k. Compare the prime spectra as topological spaces, then prove the rings are not isomorphic. Explain which scheme-level structure distinguishes them and why an ordinary zero-set picture cannot.

<details>
<summary>Hint 1</summary>

Every prime ideal contains every nilpotent

</details>

<details>
<summary>Hint 2</summary>

A is a field

</details>

<details>
<summary>Hint 3</summary>

B contains the nonzero class of x whose square is zero

</details>

<details>
<summary>Worked solution</summary>

The ring A is isomorphic to k, so Spec A has one prime. In B, the class ε of x is nilpotent, hence belongs to every prime ideal. The quotient B/(ε) is k, so (ε) is the unique prime; Spec B also has one point. Both underlying topological spaces are therefore the same one-point space. The rings are not isomorphic: A is reduced and has no nonzero nilpotents, while ε is nonzero in B and $\varepsilon^2=0$. Their structure sheaves have different rings of global sections and different stalks. Classical zero sets radicalize $(x^2)$ to (x), discarding the infinitesimal thickening that the scheme retains.

**Answer.** Both spectra are one-point spaces, but B has a nonzero nilpotent and A does not; the structure sheaf, not the point set, distinguishes them.

</details>

*Tags: scheme, nilpotent, structure sheaf*
