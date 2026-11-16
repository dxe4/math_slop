# Prove irreducibility from many unit values

*Hard · [Original olympiad-style problems](index.md)*

For pairwise distinct integers $a_1,\ldots,a_n$ with $n\ge2$, prove $\prod_{j=1}^n(x-a_j)-1$ is irreducible over the rationals.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

By the integer polynomial factorization lemma for primitive polynomials, a rational factorization would give nonconstant integer factors.

</details>

<details>
<summary>Hint 2</summary>

At every listed input their product is negative one, so the sum of the two factors vanishes.

</details>

<details>
<summary>Model proof</summary>

Use the number of forced roots of a sum of hypothetical factors.

1. The polynomial is monic, hence primitive. A rational factorization would, by Gauss’ lemma, provide integer polynomials Q,R of positive degree less than n whose product is the polynomial.
2. At each listed integer, Q and R are integers with product negative one. They are therefore one and negative one in some order, so $Q(a_j)+R(a_j)=0$.
3. The polynomial $Q+R$ has degree at most $n-1$ and has n distinct roots, so it is identically zero.
4. Then the proposed product is $-Q^2$, whose leading coefficient is negative, contradicting the monic positive leading coefficient. Thus no nontrivial rational factorization exists.

**Self-assessment rubric**

- Use primitivity to justify integer factors.
- Extract the exact sum relation at every distinct integer.
- Force the factor sum identically zero using its degree.
- Obtain the final leading-coefficient contradiction.

</details>
