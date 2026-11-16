# Translate element order into regular permutation cycles

*Easy · [Abstract algebra problems](index.md)*

A group G has order 12 and g has order three. Left multiplication by g permutes the twelve elements of G. Find the sign of this regular-action permutation $L_g$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Every cycle has the element's order as its length.

</details>

<details>
<summary>Hint 2</summary>

Count the disjoint cycles before taking their signs.

</details>

<details>
<summary>Worked solution</summary>

Regular translations decompose the entire group into equal-length cycles.

1. The orbit of any x under repeated left multiplication is x,gx,g^2x and then x, with three distinct terms.
2. Thus the permutation consists of four disjoint cycles of length three.
3. Each three-cycle has sign one, so the whole sign is one.

</details>
