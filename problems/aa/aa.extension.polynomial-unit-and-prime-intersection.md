# Prove the nilradical theorem needed for polynomial units

*Hard · [Abstract algebra problems](index.md)*

For a commutative unital ring R prove the nilradical is the intersection of all prime ideals, then deduce $f=\sum_{j=0}^m a_jx^j$ is a unit in R\[x\] exactly when a\_0 is a unit and all a\_j for j&gt;0 are nilpotent. You may use Zorn's lemma; include the zero-ring case separately.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

If a is not nilpotent, the multiplicative set{1,a,a^2,...} is disjoint from some maximal disjoint ideal, which is prime.

</details>

<details>
<summary>Hint 2</summary>

Finitely many nilpotent coefficients generate a nilpotent ideal.

</details>

<details>
<summary>Model proof</summary>

Prime reductions prove necessity and a finite geometric inverse proves sufficiency.

1. Every nilpotent belongs to each prime ideal. If a is not nilpotent, apply Zorn to ideals disjoint from{1,a,a^2,...}. A maximal such ideal P is prime: if u,v are outside P, each larger ideal P+(u),P+(v) meets the multiplicative set; multiplying their witness powers would put a power in P if uv belonged to P, a contradiction. Thus a is omitted by some prime, proving the intersection claim.
2. If f is a unit, evaluation at zero makes a\_0 a unit. Modulo each prime P its image is a unit polynomial over the domain R/P, so it is constant: degrees of nonzero polynomials add in a domain. Hence every higher a\_j lies in all primes and is nilpotent.
3. Conversely finitely many higher nilpotents generate a nilpotent ideal I. If a\_j^(e\_j)=0, every product of more than sum\_(j&gt;0)(e\_j-1) generators has one excessive exponent, so I has a zero power. Write f=a\_0\*(1+h) with all h coefficients in I. A finite alternating geometric sum in h is its inverse.
4. In the zero ring the only polynomial is its identity element zero and is a unit under the identity-equals-zero convention; the coefficient criterion also holds. This case needs no prime ideal.

**Self-assessment rubric**

- Use a maximal multiplicatively disjoint ideal and verify it is prime.
- Derive the necessary coefficient conditions through evaluation and prime quotients.
- Prove a common nilpotence bound and construct an actual inverse.
- Treat the stated degenerate convention without assuming a prime exists.

</details>
