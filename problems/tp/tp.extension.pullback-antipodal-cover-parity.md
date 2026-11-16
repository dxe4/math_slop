# Read components of a pulled-back double covering from parity

*Medium · [Topology problems](index.md)*

Pull back $S^2\to\mathbb{RP}^2$ along based loops representing respectively the nonzero and zero elements of $\pi_1(\mathbb{RP}^2)=\mathbb Z/2$. Return \[components of the first pullback, components of the second\]. The pullbacks are spaces over S¹, not interval path lifts.

```answer
{"answer":{"kind":"vector","expected":["1","2"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A generator of π₁(S¹) permutes the two sheets of the pullback by the original loop monodromy.

</details>

<details>
<summary>Hint 2</summary>

Components correspond to orbits of that permutation.

</details>

<details>
<summary>Worked solution</summary>

A loop may exchange sheets, making a double covering of the circle connected.

1. The antipodal map S²→RP² is the universal double cover. A nontrivial based loop exchanges the two points of a fiber, whereas a nullhomotopic loop acts trivially.
2. The pullback covering over S¹ has precisely these actions as its monodromy. The exchange has one orbit; the identity has two singleton orbits.
3. Therefore the nontrivial loop gives one circle covering S¹ twice, while the trivial loop gives two disjoint circles each covering once. The vector is \[1,2\].

</details>
