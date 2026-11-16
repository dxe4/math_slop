# Construct a vector potential by radial homotopy

*Hard · [Calculus](index.md)*

Let U⊂R³ be open and star-shaped about zero, with B∈C¹(U) and div B=0. Prove $A(x)=\int_0^1t\,[B(tx)\times x]\,dt$ satisfies curl A=B. Derive the vector identity used and check the t=0 endpoint.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply curl to B(tx)×x, remembering that derivatives of B(tx) contribute a factor t.

</details>

<details>
<summary>Hint 2</summary>

After using div B=0 the t-weighted result is d\[t²B(tx)\]/dt.

</details>

<details>
<summary>Model proof</summary>

A radial contraction produces a vector primitive when the divergence obstruction vanishes.

1. The product identity for curl of P×Q is P div Q−Q div P+(Q·∇)P−(P·∇)Q. With P=B(tx),Q=x it gives curl(B(tx)×x)=2B(tx)+t(x·∇)B(tx)−t x(div B)(tx).
2. The last term vanishes. Multiplying by t leaves 2tB(tx)+t²(x·∇)B(tx)=d\[t²B(tx)\]/dt.
3. As for any compact radial segment inside the open star-shaped domain, continuity of B and its first derivatives justifies taking curl under the finite parameter integral locally. Thus curl A=\[t²B(tx)\]₀¹.
4. The upper endpoint is B(x), and the lower is zero because B is bounded near zero. Hence curl A=B. For constant B this gives A=(B×x)/2, consistent with the factor in the formula.

**Self-assessment rubric**

- Derives the two B terms and both chain-rule contributions in the cross-product curl.
- Uses div B=0 and identifies the exact t derivative.
- Justifies differentiation under the integral on the actual domain.
- Checks the vanishing lower endpoint and the constant-field normalization.

</details>
