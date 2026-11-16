# Include poles when converting an argument change into a zero count

*Easy · [Complex analysis problems](index.md)*

A meromorphic f has no zero or pole on a positively oriented circle. The total argument change of f on it is $6\pi$, and the interior contains two poles counted with order. Use Z-P=argument change/(2 pi). Find the interior zero count with multiplicity.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Convert the supplied argument change into its winding integer.

</details>

<details>
<summary>Hint 2</summary>

The winding gives zeros minus poles, rather than zeros alone.

</details>

<details>
<summary>Worked solution</summary>

The argument principle counts a signed difference before the pole correction.

1. The winding integer is three.
2. The formula gives Z-2=3.
3. Thus there are five interior zeros counted with multiplicity.

</details>
