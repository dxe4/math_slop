# Ignore only the measure-zero exception in an essential norm

*Easy · [Real analysis](index.md)*

On \[0,1\] with Lebesgue measure, let f(0)=100 and f(x)=1 for x&gt;0. Find its essential supremum, the least almost-everywhere upper bound $M$ with f&lt;=M almost everywhere.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The exceptional singleton has measure zero.

</details>

<details>
<summary>Hint 2</summary>

A proposed bound below one fails on a set of full positive length.

</details>

<details>
<summary>Worked solution</summary>

Essential bounds discard null exceptions, not positive-measure behavior.

1. Outside the null set {0}, the function equals one, so one is an almost-everywhere upper bound.
2. Any number below one fails at every x in (0,1\], a set of positive measure.
3. Thus the essential supremum is one, while the ordinary supremum is one hundred.

</details>
