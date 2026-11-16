# Use the minimal polynomial with the correct odd-degree sign

*Easy · [Abstract algebra problems](index.md)*

Let alpha be the real cube root of two and L=Q(alpha). Use $N_{L/Q}(c-\alpha)=c^3-2$. Find N(1+alpha).

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Set c=-1 in the given identity.

</details>

<details>
<summary>Hint 2</summary>

Negating an element negates its norm in degree three.

</details>

<details>
<summary>Worked solution</summary>

A translated norm is a polynomial evaluation with a degree-dependent sign.

1. The formula gives N(-1-alpha)=(-1)^3-2=-3.
2. The element1+alpha is the negative of-1-alpha. Since the extension degree is three, N(-v)=(-1)^3\*N(v)=-N(v).
3. Thus N(1+alpha)=3.

</details>
