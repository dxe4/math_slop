# Count common finite-field zeros through a polynomial indicator

*Hard · [Abstract algebra problems](index.md)*

Let F\_q have characteristic p, and let nonzero polynomials f\_1,...,f\_r in n&gt;=1 variables satisfy sum of their degrees &lt; n. Prove the number of their common zeros is divisible by $p$. Deduce a nontrivial common zero for homogeneous positive-degree polynomials under this bound. You may use that sum over t in F\_q of t^j is zero in F\_q for0&lt;=j&lt;q-1, with t^0 interpreted as one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The product of1-f\_i^(q-1) is the zero-set indicator on field points.

</details>

<details>
<summary>Hint 2</summary>

Its degree bound forces every monomial to have some coordinate exponent below q-1.

</details>

<details>
<summary>Model proof</summary>

Finite-field power sums annihilate the common-zero indicator total.

1. At a field point, a nonzero value has(q-1)th power one and zero has that power zero. Thus P=product\_i(1-f\_i^(q-1)) is one exactly at the common zeros and zero elsewhere.
2. The degree of P is at most(q-1)\*sum\_i deg f\_i &lt;(q-1)\*n. Every monomial therefore has at least one variable exponent j&lt;q-1. Summing that monomial over all F\_q^n factors into coordinate sums, and the specified j sum is zero. Hence the sum of P over all points is zero in F\_q.
3. That sum is the integer zero count mapped into characteristic p, so p divides the count. In the homogeneous positive-degree case the zero vector is a common zero. The positive count divisible by p is at least p, so there is another, nonzero common zero.

**Self-assessment rubric**

- Verify the indicator at every possible field value.
- Use the total degree bound to find a vanishing coordinate sum in each monomial.
- Translate field zero into p-divisibility and retain the zero-vector contribution.

</details>
