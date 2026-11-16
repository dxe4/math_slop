# Combine two coprimality hypotheses rigorously

*Hard · [Number theory](index.md)*

Let integers a,b,c satisfy $\gcd(a,b)=\gcd(a,c)=1$. Prove gcd(a,bc)=1 using integer linear-combination identities.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use a separate Bezout identity for each coprimality hypothesis.

</details>

<details>
<summary>Hint 2</summary>

Multiply the identities and group all terms containing a.

</details>

<details>
<summary>Model proof</summary>

Multiplication of Bezout identities constructs a witness for the product case.

1. Choose integers u,v,s,t with $au+bv=1$ and $as+ct=1$.
2. Multiplication gives $1=a(aus+uct+bvs)+bc(vt)$. Every coefficient is an integer.
3. Any common divisor of a and bc divides the right-hand side and thus one, so their positive gcd is one.

**Self-assessment rubric**

- Use both coprimality hypotheses to obtain integer identities.
- Expand and collect a correct integer combination of a and bc.
- Explain why the displayed combination forces gcd one.

</details>
