# Evaluate a coboundary with its group-law argument

*Easy · [Abstract algebra problems](index.md)*

Let h:C3 to C3 have h(0)=0,h(1)=1,h(2)=0. Define $c(a,b)=h(a)+h(b)-h(a+b)$ with all coordinates modulo three. Find c(1,1) in {0,1,2}.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The last argument is the sum modulo three.

</details>

<details>
<summary>Hint 2</summary>

Apply h to that sum before subtracting.

</details>

<details>
<summary>Worked solution</summary>

A coboundary compares two separate choices with the choice at their product.

1. The sum 1+1 is two modulo three.
2. Thus c(1,1)=h(1)+h(1)-h(2)=1+1-0.
3. The canonical value modulo three is two.

</details>
