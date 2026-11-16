# Choose the central value that restores continuity

*Medium · [Calculus](index.md)*

Let $f(x)=(x^2-9)/(x-3)$ for x!=3 and f(3)=c. Find c making f continuous at 3.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Continuity requires the central value to equal the punctured limit.

</details>

<details>
<summary>Hint 2</summary>

Factor and cancel on the original punctured domain.

</details>

<details>
<summary>Worked solution</summary>

A removable hole has one compatible continuous extension value.

1. For x different from three, the function equals x+3.
2. Its limit at three is six.
3. Thus continuity holds exactly when c=6.

</details>
