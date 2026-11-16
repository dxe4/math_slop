# Classify finite connected torus covers by lattices

*Hard · [Topology problems](index.md)*

Classify connected finite-sheeted based coverings of $T^n=\mathbb R^n/\mathbb Z^n$ by finite-index subgroups H≤Zⁿ. Prove H is a full-rank lattice, give its cover $\mathbb R^n/H$, and identify the deck group and sheet number. Explain the role of a change of lattice basis; do not change the base coordinates.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use covering classification and the universal cover Rⁿ.

</details>

<details>
<summary>Hint 2</summary>

A finite-index subgroup contains mZⁿ for some m; a subgroup basis gives an integer matrix whose columns span H.

</details>

<details>
<summary>Model proof</summary>

The covering is a lattice inclusion, and changing its basis changes its matrix but not the subgroup in the fixed base lattice.

1. The torus is connected, locally path connected and semilocally simply connected, with universal cover Rⁿ and fundamental group Zⁿ acting by integer translations. The based covering classification associates a connected finite cover to a finite-index subgroup H; conversely Rⁿ/H→Rⁿ/Zⁿ realizes that subgroup.
2. If the quotient Zⁿ/H is finite of order d, multiplication by d annihilates it, so dZⁿ⊂H. Thus H spans Rⁿ. The subgroup theorem for finitely generated free abelian groups supplies a Z-basis of H of size n, forming a nonsingular integer matrix A with H=AZⁿ.
3. Integer translations act on Rⁿ/H over the base. Their kernel is H, and they act transitively on each fiber. All intermediate subgroups are normal because Zⁿ is abelian; thus these are all deck maps and the group is Zⁿ/H. The number of sheets is \[Zⁿ:H\]=\|det A\|.
4. Replacing a chosen basis of H right-multiplies A by a unimodular integer matrix U and leaves H unchanged. Left multiplication would alter the fixed base coordinates and generally the embedded subgroup. Smith normal form describes the abstract deck group, whereas H itself determines the based covering.

**Self-assessment rubric**

- Applies covering classification with the actual universal cover and finite-index condition.
- Proves H has full rank and represents it as AZⁿ with integer nonsingular A.
- Identifies the deck quotient and determinant index.
- Distinguishes right basis changes from changes of fixed base coordinates.

</details>
