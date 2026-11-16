# Maps into an indiscrete target

*Easy · [Topology problems](index.md)*

An indiscrete $2$-point space maps to an indiscrete three-point space. How many such functions are continuous?

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The target has only two open sets to pull back.

</details>

<details>
<summary>Hint 2</summary>

After checking those preimages, count unrestricted functions.

</details>

<details>
<summary>Worked solution</summary>

The two target open sets make continuity automatic.

1. The only target opens are the empty set and the whole target.
2. Their preimages are the empty domain and the whole domain, both open. Hence every function is continuous.
3. There are $3^2=9$ functions.

</details>
