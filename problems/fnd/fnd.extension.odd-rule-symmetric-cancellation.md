# Use oddness to simplify a rule without knowing the function

*Medium · [Foundations bridge](index.md)*

Let f be odd on R and satisfy f(2)=5. Define $g(x)=f(x-1)+f(1-x)+2f(x)$. Find g(−2).

```answer
{"answer":{"kind":"integer","expected":-10,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The arguments x−1 and 1−x are opposites, even when x is negative.

</details>

<details>
<summary>Hint 2</summary>

Cancel that pair using oddness, then obtain f(−2) from the given value f(2).

</details>

<details>
<summary>Worked solution</summary>

One use of oddness simplifies a composite rule and a second determines the remaining output.

1. Since 1−x=−(x−1), oddness gives f(x−1)+f(1−x)=0. Thus g(x)=2f(x).
2. The given f(2)=5 and oddness imply f(−2)=−5.
3. Therefore g(−2)=2(−5)=−10.

</details>
