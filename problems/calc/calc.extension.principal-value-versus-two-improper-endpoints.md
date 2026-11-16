# Distinguish a principal value from an ordinary improper integral

*Hard · [Calculus](index.md)*

For $1/x$ on $[-1,1]$, prove the ordinary improper integral diverges, calculate its symmetric Cauchy principal value, and show why unequal cutoffs cannot define a unique finite value. Use positive cutoffs a,b→0 in ∫₋₁^{−a}1/x dx+∫\_b¹1/x dx.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

An ordinary improper integral requires each side of the internal singularity to converge separately.

</details>

<details>
<summary>Hint 2</summary>

The two-cutoff sum equals log(a/b), so its value depends on the relation between the cutoffs.

</details>

<details>
<summary>Model proof</summary>

A synchronized cancellation is a distinct limiting prescription from ordinary improper integration.

1. The left integral equals log a and tends to −∞ as a→0⁺. The right equals −log b and tends to +∞ as b→0⁺. Neither side has a finite limit, so the ordinary improper integral does not converge.
2. For symmetric cutoffs a=b=ε, their sum is log(ε/ε)=0 for every ε&gt;0. The symmetric principal value is therefore 0.
3. For the unequal path a=cb with fixed c&gt;0, the sum is log c, giving different finite limits for different c. Other paths can make the sum unbounded.
4. Thus there is no independent two-variable finite limit. The principal value is meaningful only with its explicitly synchronized symmetric convention and cannot be reported as the ordinary integral.

**Self-assessment rubric**

- Computes and separates the two infinite endpoint limits required by ordinary improper integration.
- Calculates the symmetric principal value as zero with matching cutoffs.
- Uses log(a/b) to exhibit different unequal-cutoff limits and explains the differing notions.

</details>
