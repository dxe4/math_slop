# Sharp bounds on unobserved individual-effect variation

*Hard · [Statistics and probability](index.md)*

Binary potential outcomes satisfy $P(Y(0)=1)=p_0$ and $P(Y(1)=1)=p_1$, with $0<p_0,p_1<1$. Only these two marginal probabilities are known. Determine the exact interval of possible values of $\operatorname{Var}(Y(1)-Y(0))$, prove every value in it is attainable, and evaluate the interval at $p_0=1/3,p_1=2/3$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Parameterize the unknown joint binary table by its probability that both outcomes equal one.

</details>

<details>
<summary>Hint 2</summary>

Nonnegativity of all four cells bounds that free probability; express the effect variance in terms of it.

</details>

<details>
<summary>Model proof</summary>

The unknown coupling, rather than either observed marginal, determines individual-effect variation.

1. Let $q=P(Y(0)=1,Y(1)=1)$. The four cells are $q,p_0-q,p_1-q,1-p_0-p_1+q$. Their nonnegativity is equivalent to $L\le q\le U$, where $L=\max(0,p_0+p_1-1)$ and $U=\min(p_0,p_1)$.
2. For $D=Y(1)-Y(0)$, $ED=p_1-p_0$ and $ED^2=p_0+p_1-2q$. Thus $\operatorname{Var}(D)=C-2q$, where $C=p_0+p_1-(p_1-p_0)^2$.
3. The exact interval is $[C-2U,C-2L]$. Every $q$ in its admissible interval defines a proper four-cell law with the required marginals, and the displayed affine map covers the whole variance interval. This proves sharpness, not just endpoint bounds.
4. At the stated marginals, $L=0$, $U=1/3$, and $C=8/9$, giving $[2/9,8/9]$. The average effect is identified as $1/3$, but its individual-level variance is not identified from the marginal laws alone.

**Self-assessment rubric**

- Parameterize and bound the complete joint table.
- Derive both effect moments and the variance formula.
- Prove attainment throughout the interval.
- Evaluate the example and distinguish mean-effect identification.

</details>
