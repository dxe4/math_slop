# Compute a distance infimum across separate components

*Easy · [Real analysis](index.md)*

For $K=[-2,-1]\cup[1,3]$, find inf{\|x\|:x in K}, the distance from zero to K.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested order quantity or extremization observation only; no general argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The interval gap contains zero, while each component has a closest endpoint.

</details>

<details>
<summary>Hint 2</summary>

Compare the best distance from both components.

</details>

<details>
<summary>Worked solution</summary>

Distance to a union takes the smaller component distance.

1. On \[-2,-1\], the least absolute value is one, attained at -1.
2. On \[1,3\], the least absolute value is one, attained at 1.
3. Thus the infimum over the union is one, and it is attained.

</details>
