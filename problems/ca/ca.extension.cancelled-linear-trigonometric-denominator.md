# Resolve a hidden third-order pole before extracting its residue

*Hard · [Complex analysis problems](index.md)*

Find the residue at zero of $1/(z-\sin z)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":10},"checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The linear terms cancel in the denominator.

</details>

<details>
<summary>Hint 2</summary>

Compute far enough beyond the first surviving term to recover the simple Laurent power.

</details>

<details>
<summary>Worked solution</summary>

Cancellation raises the pole order, making the next relative series correction essential.

1. The denominator is z^3/6-z^5/120+O(z^7)=(z^3/6)(1-z^2/20+O(z^4)).
2. Its reciprocal is 6z^(-3)(1+z^2/20+O(z^4)).
3. The simple-pole coefficient is 6/20=3/10.

</details>
