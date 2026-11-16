# Retain the next odd correction in a reciprocal trigonometric series

*Medium · [Complex analysis problems](index.md)*

Find the residue at zero of $1/(z^2\sin z)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Factor the leading z from the sine series.

</details>

<details>
<summary>Hint 2</summary>

The first nonconstant reciprocal correction determines the simple-pole coefficient after division by z squared.

</details>

<details>
<summary>Worked solution</summary>

The residue depends on a higher series term even though the leading pole is easy to identify.

1. The sine expansion is z(1-z^2/6+O(z^4)).
2. Its reciprocal is z^(-1)(1+z^2/6+O(z^4)). Dividing by z squared gives z^(-3)+(1/6)z^(-1)+O(z).
3. The residue is one sixth.

</details>
