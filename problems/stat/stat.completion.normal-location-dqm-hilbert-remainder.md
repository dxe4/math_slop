# DQM by a Hilbert-space Taylor bound

*Medium · [Statistics and probability](index.md)*

For $p_\theta(x)=(2\pi)^{-1/2}e^{-(x-\theta)^2/2}$, put $q_\theta=\sqrt{p_\theta}\in L^2(dx)$. Use the second-order Taylor theorem in $L^2$ to prove differentiability in quadratic mean at every $\theta$: find the score $\dot\ell_\theta$ and show $\|q_{\theta+h}-q_\theta-\tfrac12h\dot\ell_\theta q_\theta\|_2=o(|h|)$. Derive the Fisher information. You may use Gaussian moments through order four.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the square-root density rather than the density itself.

</details>

<details>
<summary>Hint 2</summary>

Bound the norm of its second derivative uniformly in the location; a quadratic Taylor remainder is smaller than the required first-order scale.

</details>

<details>
<summary>Model proof</summary>

Translation leaves the square-root density second-derivative norm uniformly bounded.

1. Differentiation gives $q_\theta'(x)=(x-\theta)q_\theta(x)/2$ and $q_\theta''(x)=[(x-\theta)^2/4-1/2]q_\theta(x)$. On compact location neighborhoods, Gaussian envelopes times fixed polynomials justify these as $L^2$ derivatives.
2. With $Z\sim N(0,1)$, $\|q_\theta''\|_2^2=E[(Z^2/4-1/2)^2]=3/16$, independent of $\theta$. The Hilbert-space integral remainder is consequently bounded by $\sqrt3\,h^2/8$.
3. Thus the required norm is $O(h^2)=o(|h|)$, with score $\dot\ell_\theta(x)=x-\theta$. This verifies the square-root remainder, rather than only pointwise differentiability of a likelihood.
4. The score has mean zero and squared norm $E_\theta(X-\theta)^2=1$, so the one-observation Fisher information is one.

**Self-assessment rubric**

- Compute and justify derivatives in the relevant Hilbert space.
- Use Gaussian moments to bound the second derivative norm.
- Obtain the norm remainder and identify the score.
- Compute information as the squared score norm.

</details>
