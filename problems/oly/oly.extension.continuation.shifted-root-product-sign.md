# Evaluate a shifted product of cubic roots

*Medium · [Original olympiad-style problems](index.md)*

Let $a,b,c$ be the complex roots, with multiplicity, of $x^3-3x+1$. Find $(a+1)(b+1)(c+1)$.

```answer
{"answer":{"kind":"integer","expected":"-3","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the monic factorization at negative one.

</details>

<details>
<summary>Hint 2</summary>

Three sign reversals contribute one overall minus sign.

</details>

<details>
<summary>Worked solution</summary>

Use polynomial evaluation rather than individual cubic roots.

1. The factorization at negative one gives $P(-1)=(-1-a)(-1-b)(-1-c)$.
2. This is negative the requested product. Direct evaluation gives $P(-1)=3$.
3. The requested value is therefore negative three, regardless of whether roots are represented explicitly.

</details>
