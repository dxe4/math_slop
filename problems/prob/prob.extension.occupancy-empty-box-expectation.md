# Expected empty boxes

*Medium · [Probability problems](index.md)*

Let $n\ge1$ and $m\ge1$ be integers. Each of $n$ balls independently chooses a uniformly distributed box among $m$ labelled boxes. Prove that the expected number of empty boxes is $m(1-1/m)^n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Introduce one indicator for each box being empty, rather than indicators for individual balls.

</details>

<details>
<summary>Hint 2</summary>

For a fixed box, express emptiness as every ball avoiding it. Distinguish independence across balls from possible dependence across empty-box indicators.

</details>

<details>
<summary>Model proof</summary>

Compute the expectation of each empty-box indicator and add.

1. For $1\le j\le m$, let $I_j=\mathbf1_{\{\text{box }j\text{ is empty}\}}$. The number of empty boxes is exactly $N=\sum_{j=1}^mI_j$.
2. A given ball avoids box $j$ with probability $1-1/m$. Independence of the ball choices gives $P(I_j=1)=\prod_{r=1}^n(1-1/m)=(1-1/m)^n$.
3. Each indicator is bounded and hence integrable. By linearity, $E[N]=\sum_{j=1}^mE[I_j]=m(1-1/m)^n$. No independence between the $I_j$ is used. For $m=1$, the formula gives zero, as it should when $n\ge1$.

Each empty-box indicator has mean $(1-1/m)^n$; adding the $m$ means gives $m(1-1/m)^n$.

**Self-assessment rubric**

- Define an indicator for each empty box and identify their sum with the requested count.
- Use independence across ball choices to compute the emptiness probability of one fixed box.
- Apply linearity to bounded indicators without claiming independence between boxes.

</details>
