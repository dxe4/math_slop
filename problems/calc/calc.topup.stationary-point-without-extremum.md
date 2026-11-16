# Read local extrema from complete derivative signs

*Hard · [Calculus](index.md)*

A differentiable function on \[-3,3\] has derivative $f^{\prime}(x)=(x-1)^2(x+2)$ in the interior. Return the set of its interior local-extremum locations.

```answer
{"answer":{"kind":"set","expected":["-2"],"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

A squared derivative factor can vanish without changing sign.

</details>

<details>
<summary>Hint 2</summary>

Track the sign on both sides of each derivative zero.

</details>

<details>
<summary>Worked solution</summary>

Stationarity alone does not establish an extremum.

1. The derivative is negative for x&lt;-2 and positive for x&gt;-2 except for its zero at one.
2. Thus the function changes from decreasing to increasing at negative two, producing a local minimum.
3. It remains increasing on both sides of one, so that stationary point is not a local extremum; the answer is {-2}.

</details>
