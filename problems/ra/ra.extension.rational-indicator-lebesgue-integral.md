# Distinguish a null set from dense pointwise occurrence

*Easy · [Real analysis](index.md)*

On \[0,1\], let f be one at rational points and zero at irrational points. For the Lebesgue integral, use that countable sets have measure zero. Find $\int_0^1 f$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The rational points are dense but countable.

</details>

<details>
<summary>Hint 2</summary>

An indicator's Lebesgue integral is the measure of its set.

</details>

<details>
<summary>Worked solution</summary>

Density and measure answer different questions.

1. The set of rational points in \[0,1\] is countable.
2. Its Lebesgue measure is therefore zero.
3. The integral of its indicator is that measure, so the integral is zero. This does not make the function Riemann integrable.

</details>
