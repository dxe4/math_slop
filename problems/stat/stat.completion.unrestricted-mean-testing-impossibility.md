# No power against an unrestricted finite-variance mean null

*Hard · [Statistics and probability](index.md)*

Fix $n\ge1$ and $0\le\alpha<1$. Let $\varphi:\mathbb R^n\to[0,1]$ be a measurable randomized test such that $E_{Q^n}\varphi\le\alpha$ for every distribution $Q$ with finite variance and mean zero. Prove that $E_{P^n}\varphi\le\alpha$ for every finite-variance distribution $P$, including those with nonzero mean. No common bound on the variances or supports is imposed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A small contamination can make a large change in a mean if its added point is far enough away.

</details>

<details>
<summary>Hint 2</summary>

Compare the contaminated experiment with the original one on the event that none of the sample observations came from the contamination.

</details>

<details>
<summary>Model proof</summary>

Rare remote contamination moves the mean without forcing the finite sample to notice.

1. Fix a finite-variance $P$, with mean $\mu$, and take $0<\varepsilon<1$. Define $c_\varepsilon=-(1-\varepsilon)\mu/\varepsilon$ and $Q_\varepsilon=(1-\varepsilon)P+\varepsilon\delta_{c_\varepsilon}$.
2. For each fixed $\varepsilon$, this distribution has finite variance and mean $(1-\varepsilon)\mu+\varepsilon c_\varepsilon=0$. Its variance may grow as $\varepsilon$ decreases, which the null class permits.
3. Generate the $n$ draws using independent contamination indicators. With probability $(1-\varepsilon)^n$ none is contaminated, and conditional on this event the sample has law $P^n$.
4. Because the test is nonnegative, $E_{Q_\varepsilon^n}\varphi\ge(1-\varepsilon)^n E_{P^n}\varphi$. Null validity therefore gives $E_{P^n}\varphi\le\alpha/(1-\varepsilon)^n$.
5. Letting $\varepsilon\downarrow0$ yields $E_{P^n}\varphi\le\alpha$. The obstruction uses the unrestricted null class, not a claim that inference under a fixed bounded-support or uniformly bounded-variance model is impossible.

**Self-assessment rubric**

- Construct a finite-variance mean-zero contamination for each positive contamination weight.
- Identify the untouched-sample event and its conditional distribution.
- Use nonnegativity and null validity, then take the contamination weight to zero.

</details>
