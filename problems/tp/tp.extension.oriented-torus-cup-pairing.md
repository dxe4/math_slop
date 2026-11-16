# Evaluate a signed cup pairing on an oriented torus

*Medium · [Topology problems](index.md)*

For an oriented torus let a,b∈H¹(T²;Z) satisfy ⟨a∪b,\[T²\]⟩=1. Put α=2a+3b and β=−a+4b. Compute $\langle\alpha\smile\beta,[T^2]\rangle$. Use graded commutativity and the torsion-free torus cohomology groups.

```answer
{"answer":{"kind":"integer","expected":11,"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The squares of a and b vanish, and b∪a=−a∪b.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign on the term involving 3b and −a.

</details>

<details>
<summary>Worked solution</summary>

Odd-degree classes anticommute, so this pairing records oriented intersection rather than an ordinary dot product.

1. The torus ring has a²=b²=0 and b∪a=−a∪b. The square vanishing also follows from graded commutativity because H² has no two-torsion.
2. Expanding gives (2a+3b)∪(−a+4b)=8a∪b−3b∪a=11a∪b.
3. The chosen orientation evaluates a∪b as 1, so the result is 11. Reversing the orientation would change this evaluated integer’s sign.

</details>
