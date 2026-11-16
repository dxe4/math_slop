# Projecting a distribution onto Gaussian likelihoods

*Hard · [Statistics and probability](index.md)*

Let a real density $f$ have mean $\mu$, variance $\sigma^2\in(0,\infty)$, and finite relative entropy to the standard normal. Among all Gaussian densities $g_{a,b}$ with mean $a\in\mathbb R$ and standard deviation $b>0$, find the unique minimizer of $D(f\|g_{a,b})$. Prove a Pythagorean identity separating the unavoidable non-Gaussian discrepancy from parameter mismatch. Here $D(f\|g)=\int f\log(f/g)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The log ratio of two Gaussian densities is a quadratic function.

</details>

<details>
<summary>Hint 2</summary>

Its expectation under the given law depends only on two moments; compare that expectation with the Gaussian sharing those moments.

</details>

<details>
<summary>Model proof</summary>

Moment matching isolates the Gaussian-family information projection.

1. Let $g_*=g_{\mu,\sigma}$. Finite relative entropy to a standard normal and finite second moments make all the displayed Gaussian relative entropies finite, because Gaussian log-density differences are integrable quadratic functions.
2. Subtraction gives $D(f\|g_{a,b})-D(f\|g_*)=E_f\log(g_*/g_{a,b})$. Since that log ratio is quadratic, its expectation is unchanged on replacing $f$ by $g_*$.
3. Hence $D(f\|g_{a,b})=D(f\|g_*)+D(g_*\|g_{a,b})$, with the final term equal to $\tfrac12[\log(b^2/\sigma^2)+(\sigma^2+(\mu-a)^2)/b^2-1]$.
4. Relative entropy is nonnegative and equals zero between two positive Gaussian densities only when their laws agree. Thus the unique minimizing Gaussian has $a=\mu$ and $b=\sigma$. The remaining term $D(f\|g_*)$ can be positive: matching fitted Gaussian moments does not establish that the original density is Gaussian.

**Self-assessment rubric**

- Justify the finite relative-entropy differences.
- Use moment matching for the Gaussian log ratio.
- Derive the identity and explicit mismatch term.
- Prove uniqueness and distinguish fitting from a normality claim.

</details>
