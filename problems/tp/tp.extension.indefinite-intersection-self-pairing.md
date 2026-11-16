# Evaluate a class in an indefinite intersection form

*Medium · [Topology problems](index.md)*

On $M=\mathbb{CP}^2\#\overline{\mathbb{CP}^2}$ choose integral H² generators e,f with ⟨e²,\[M\]⟩=1, ⟨f²,\[M\]⟩=−1 and e∪f=0. Compute the self-intersection ⟨(2e+3f)²,\[M\]⟩.

```answer
{"answer":{"kind":"integer","expected":-5,"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the cup square and use the vanishing mixed product.

</details>

<details>
<summary>Hint 2</summary>

The bar on the second summand reverses that summand’s intersection sign.

</details>

<details>
<summary>Worked solution</summary>

An intersection form retains orientation information absent from a list of Betti numbers.

1. The two degree-two generators commute, so (2e+3f)²=4e²+12e∪f+9f².
2. The mixed product vanishes by the given connected-sum intersection convention. Evaluation leaves 4·1+9·(−1).
3. The self-intersection is −5. It is not a squared Euclidean norm because this oriented form is indefinite.

</details>
