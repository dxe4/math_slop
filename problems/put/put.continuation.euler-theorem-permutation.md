# Euler theorem permutation

*Hard · [Original Putnam-style training](index.md)*

If $\gcd(a,n)=1$ with $n\ge2$, prove $a^{\varphi(n)}\equiv1\pmod n$ by permuting the unit residues.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by $a$ is a bijection of units modulo $n$.

</details>

<details>
<summary>Hint 2</summary>

Compare products and cancel a unit product.

</details>

<details>
<summary>Model proof</summary>

Every $u_i$ is invertible modulo $n$, so their product can be canceled, yielding $a^{\varphi(n)}\equiv1$.

1. List the $\varphi(n)$ units modulo $n$ as $u_1,\ldots,u_r$. Because $a$ is a unit, the residues $au_i$ permute that list.
2. Therefore $a^r\prod_i u_i\equiv\prod_i u_i\pmod n$.
3. Every $u_i$ is invertible modulo $n$, so their product can be canceled, yielding $a^{\varphi(n)}\equiv1$.

**Self-assessment rubric**

- Show multiplying by a unit permutes all unit residues.
- Compare original and permuted unit products.
- Cancel the invertible product to obtain the Euler exponent.

</details>
