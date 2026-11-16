# Leave one out residual

*Easy · [Statistics and probability](index.md)*

In a full-column-rank ordinary least-squares fit, observation $i$ has residual $e_i=2$ and leverage $h_{ii}=1/2$. Its deleted design also has full column rank. Using $e_{i,\mathrm{deleted}}=e_i/(1-h_{ii})$, what is its leave-one-out prediction residual?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Use the supplied identity and keep the denominator in parentheses.

</details>

<details>
<summary>Hint 2</summary>

The denominator represents one minus leverage; divide the ordinary residual by that factor.

</details>

<details>
<summary>Worked solution</summary>

The deletion adjustment rescales the ordinary residual.

1. The supplied identity applies to prediction of observation $i$ using the fit with that observation removed.
2. Here $1-h_{ii}=1-1/2=1/2>0$, so the denominator is nonzero.
3. Thus $e_{i,\mathrm{deleted}}=2/(1/2)=4$. This is a deleted-fit residual, not the original residual or a new observed response.

</details>
