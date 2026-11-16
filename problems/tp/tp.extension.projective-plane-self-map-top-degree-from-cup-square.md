# Determine a top degree from a lower cohomology action

*Medium · [Topology problems](index.md)*

Let f:CP²→CP² satisfy f\*(h)=−2h for the integral degree-two generator h, with the complex orientation and $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[h]/(h^3)$, ⟨h²,\[CP²\]⟩=1. What is the oriented degree of f?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Naturality of cup products determines f\*(h²) from f\*(h).

</details>

<details>
<summary>Hint 2</summary>

The coefficient of h² is the degree in the given orientation convention.

</details>

<details>
<summary>Worked solution</summary>

The top-dimensional action is constrained by the ring, not independently chosen.

1. Cup-product naturality gives f\*(h²)=f\*(h)∪f\*(h). The degree-two class has even degree, so no sign occurs when it is multiplied by itself.
2. Thus f\*(h²)=(−2h)²=4h². Pairing with the fundamental class identifies the coefficient with the oriented degree.
3. Therefore deg f=4. A negative action on H² need not reverse the four-dimensional orientation.

</details>
