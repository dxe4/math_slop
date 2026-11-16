# Include local mapping degree in a pulled-back residue

*Medium · [Complex analysis problems](index.md)*

Let $f(w)=1/[w(w-1)]$ and g(z)=z^2. Find the residue at zero of f(g(z))gprime(z).

```answer
{"answer":{"kind":"integer","expected":"-2","checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Keep the derivative factor from the change of variable.

</details>

<details>
<summary>Hint 2</summary>

The map is ramified at zero, so a one-to-one local substitution must not be assumed.

</details>

<details>
<summary>Worked solution</summary>

A ramified pullback repeats the original local residue according to its degree.

1. The composed differential coefficient simplifies to 2/\[z(z^2-1)\].
2. Near zero its regular factor is 2/(z^2-1), with value negative two.
3. Hence the residue is negative two, twice the original residue negative one at w=0.

</details>
