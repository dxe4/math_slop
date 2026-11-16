# Compute a commutator from an explicit group law

*Easy · [Abstract algebra problems](index.md)*

Over F5 use the group law $(a,b,c)(d,e,f)=(a+d,b+e,c+f+ae)$. Put x=(1,0,0), y=(0,1,0). For \[x,y\]=xyx^(-1)y^(-1), find its third coordinate in {0,1,2,3,4}.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested finite structural quantity only; no group-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The inverses of these two specific generators simply negate their nonzero coordinates.

</details>

<details>
<summary>Hint 2</summary>

Multiply in the stated order; the cross term belongs to the first factor's first coordinate and second factor's second.

</details>

<details>
<summary>Worked solution</summary>

An explicit central coordinate records the failure of two elementary motions to commute.

1. One has xy=(1,1,1), x inverse=(-1,0,0), and y inverse=(0,-1,0), with coordinates reduced modulo five.
2. Then xyx inverse=(0,1,1), and multiplying by y inverse gives (0,0,1).
3. Thus the third commutator coordinate is one.

</details>
