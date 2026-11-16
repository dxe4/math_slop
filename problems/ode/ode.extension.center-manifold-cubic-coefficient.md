# Use the invariance equation rather than the nullcline

*Medium · [Differential equations problems](index.md)*

For $x'=x^2$, y'=-y+x^2, a smooth local center-manifold graph has expansion y=h(x)=a\_2\*x^2+a\_3\*x^3+O(x^4). Use its invariance equation to find a\_3.

```answer
{"answer":{"kind":"integer","expected":-2,"checker_scope":"Exact requested manifold or linearization coefficient only; no full dynamical argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The graph derivative must follow x', so h'(x)\*x^2=-h(x)+x^2.

</details>

<details>
<summary>Hint 2</summary>

Match the quadratic coefficient before the cubic one.

</details>

<details>
<summary>Worked solution</summary>

A center manifold is invariant under motion and generally differs from the zero-derivative nullcline.

1. Substitute the expansion into hprime\*x^2=-h+x^2.
2. The quadratic equation is 0=1-a\_2, so a\_2=1.
3. The cubic equation is 2\*a\_2=-a\_3, hence a\_3=-2. Simply setting yprime=0 would miss this term.

</details>
