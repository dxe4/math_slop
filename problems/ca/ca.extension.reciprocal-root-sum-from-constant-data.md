# Recover a root reciprocal sum without solving a cubic

*Medium · [Complex analysis problems](index.md)*

Let a,b,c be the roots of $P(z)=z^3-2z^2+3z-4$, counted with multiplicity. Find 1/a+1/b+1/c using a logarithmic derivative at zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The nonzero constant term guarantees none of the roots is zero.

</details>

<details>
<summary>Hint 2</summary>

At zero, the root-factor logarithmic derivative gives the negative of the desired reciprocal sum.

</details>

<details>
<summary>Worked solution</summary>

A local polynomial coefficient ratio encodes a global sum over roots.

1. Factoring formally gives Pprime(z)/P(z)=1/(z-a)+1/(z-b)+1/(z-c), with multiplicities retained.
2. At zero, Pprime(0)/P(0)=3/(-4)=-3/4.
3. This is the negative reciprocal-root sum, so the requested value is three quarters.

</details>
