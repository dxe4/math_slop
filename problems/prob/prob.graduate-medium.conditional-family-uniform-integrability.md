# Control conditional expectations uniformly over all information sets

*Medium · [Probability problems](index.md)*

Let $X\in L^1(P)$. For every sub-sigma-field $\mathcal G\subseteq\mathcal F$, choose a version $Y_{\mathcal G}=E[X\mid\mathcal G]$. Prove that the entire family $\{Y_{\mathcal G}:\mathcal G\subseteq\mathcal F\}$ is uniformly integrable. The sigma-fields need not be nested or form a countable collection. Give a tail estimate depending only on the distribution of $|X|$, not on $\mathcal G$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For fixed $\mathcal G$, the event $\{|Y_{\mathcal G}|>K\}$ is measurable with respect to exactly the sigma-field needed to test a conditional expectation.

</details>

<details>
<summary>Hint 2</summary>

Split $|X|$ into a large-value part and a bounded part. On the conditional tail event, compare its probability times $K$ with the tail expectation you are trying to estimate, and absorb that term.

</details>

<details>
<summary>Model proof</summary>

The event that a conditional mean is large must carry enough of the original integrable mass, uniformly in the information used.

1. Fix $\mathcal G$, let $Y=E[X\mid\mathcal G]$, and put $A=\{|Y|>K\}$ and $t=E[|Y|1_A]$. Conditional positivity gives $|Y|\le E[|X|\mid\mathcal G]$, so $t\le E[|X|1_A]$. Also $KP(A)\le t$. These statements use $A\in\mathcal G$.
2. Split the last expectation at $K/2$: $t\le E[|X|1_{\{|X|>K/2\}}]+(K/2)P(A)\le E[|X|1_{\{|X|>K/2\}}]+t/2$. Since $Y$ is integrable, $t$ is finite and may be absorbed, giving $E[|Y|1_{\{|Y|>K\}}]\le2E[|X|1_{\{|X|>K/2\}}]$.
3. The right side tends to zero by integrability of $X$ and is independent of $\mathcal G$. Taking the supremum over every sub-sigma-field and then sending $K$ to infinity proves uniform integrability. No random supremum over sigma-fields is formed; the supremum is of numerical expectations, so no countability or joint-version assertion is needed.

**Self-assessment rubric**

- Use the $\mathcal G$-measurable event $\{|E[X\mid\mathcal G]|>K\}$ to obtain an integral bound from conditional positivity.
- Split $|X|$ at a suitable threshold and absorb the event-probability term into the desired tail expectation.
- Obtain a bound independent of $\mathcal G$ and explain why it establishes uniform integrability even for an uncountable collection.

</details>
