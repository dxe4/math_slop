# Shrinkage risk below the observation risk

*Hard · [Statistics and probability](index.md)*

Observe $X\sim N_p(\theta,I_p)$ with $p\ge3$. Under squared Euclidean loss, investigate $\delta_a(X)=X-aX/\|X\|^2$, with any value assigned at $X=0$. Derive its risk and determine which constants $a$ give strictly smaller risk than $X$ at every $\theta$. You may use Gaussian integration by parts for smooth truncated vector fields, but justify the limiting singularity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand squared loss using the adjustment vector field and convert the cross term by integration by parts.

</details>

<details>
<summary>Hint 2</summary>

Use polar coordinates near zero to examine both the reciprocal-radius moment and the inner-boundary term.

</details>

<details>
<summary>Model proof</summary>

The divergence of the radial adjustment makes a uniform risk reduction possible.

1. Write $g(x)=-ax/\|x\|^2$. Away from zero, $\|g(x)\|^2=a^2/\|x\|^2$ and $\operatorname{div}g(x)=-a(p-2)/\|x\|^2$.
2. The Gaussian density is bounded near zero. Thus $E_\theta\|X\|^{-2}<\infty$ for $p>2$, since the radial integral there is proportional to $\int_0^1 r^{p-3}\,dr$. Gaussian tails control the corresponding integrals at infinity.
3. Apply integration by parts off a ball of radius $\varepsilon$ and inside a ball of radius $R$. The inner surface term is bounded by a constant times $\varepsilon^{p-2}$ and tends to zero; the outer surface term tends to zero by Gaussian decay. The displayed integrability permits passage to the limit, yielding $E[(X-\theta)^{\mathsf T}g(X)]=E\operatorname{div}g(X)$.
4. Expanding loss therefore gives $R(\theta,\delta_a)=p+[a^2-2a(p-2)]E_\theta\|X\|^{-2}$. The reciprocal-radius expectation is finite and strictly positive.
5. The risk is strictly below $p$ exactly when $0<a<2(p-2)$. At either endpoint it equals $p$; outside that interval it is larger. The restriction $p\ge3$ was essential to the singular integration argument.

**Self-assessment rubric**

- Compute the adjustment norm and divergence.
- Control reciprocal-radius integrability and both boundary terms.
- Use the justified integration identity in squared loss.
- Identify the exact interval of constants giving strict improvement.

</details>
