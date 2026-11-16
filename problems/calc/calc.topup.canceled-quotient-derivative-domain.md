# Preserve a hole after differentiating an algebraically canceled quotient

*Medium · [Calculus](index.md)*

For the original function $f(x)=(x^2-1)/(x-1)$, enter the derivative polynomial and the real input excluded from the original derivative domain. Do not extend the original function.

```answer
{"answer":{"kind":"expression","expected":"1","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced.","domain":{"variable":"x","excluded":["1"]}}}
```

<details>
<summary>Hint 1</summary>

Cancellation describes the function only where its original denominator is nonzero.

</details>

<details>
<summary>Hint 2</summary>

A derivative of the original function cannot be assigned at a point where that function is absent.

</details>

<details>
<summary>Worked solution</summary>

Simplifying the derivative expression does not restore a missing source-domain point.

1. On its actual domain x!=1, f(x)=x+1 and its derivative is one.
2. The original function is not defined at x=1, so its original derivative has no value there.
3. Thus the derivative representation is the constant polynomial one with excluded input set {1}.

</details>
