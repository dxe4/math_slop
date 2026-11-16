# Decide when four positive conditional rows belong to one joint law

*Hard · [Probability problems](index.md)*

Given $a_0,a_1,b_0,b_1\in(0,1)$, characterise when there is a strictly positive joint law of Bernoulli $X,Y$ satisfying $P(X=1\mid Y=j)=a_j$ and $P(Y=1\mid X=i)=b_i$. Prove necessity, sufficiency and uniqueness. Then decide the case $(a_0,a_1,b_0,b_1)=(1/4,3/4,1/4,1/2)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Express every joint cell as a multiple of the positive cell $p_{00}$.

</details>

<details>
<summary>Hint 2</summary>

There are two paths for recovering $p_{11}$ from that cell; compatibility requires them to agree before a final normalisation.

</details>

<details>
<summary>Model proof</summary>

A positive loop of conditional odds imposes one compatibility equation that separate row normalisations do not guarantee.

1. Write $A_j=a_j/(1-a_j)$ and $B_i=b_i/(1-b_i)$. Positivity gives $p_{10}=A_0p_{00}$ and $p_{01}=B_0p_{00}$.
2. The remaining cell must satisfy both $p_{11}=A_1p_{01}=A_1B_0p_{00}$ and $p_{11}=B_1p_{10}=B_1A_0p_{00}$. Thus compatibility is exactly $A_1B_0=B_1A_0$.
3. If that equality holds, take $p_{00}=(1+A_0+B_0+A_1B_0)^{-1}$ and the other cells as above. They are strictly positive, sum to one, and reproduce every conditional odds ratio. Those same ratios and normalisation also prove uniqueness.
4. For the specified values, $A_0=B_0=1/3$, $A_1=3$, $B_1=1$. The two products are $1$ and $1/3$, so no such positive joint law exists.

**Self-assessment rubric**

- Derive all cell ratios from the specified positive conditionals.
- Identify and prove the necessary compatibility relation from the two paths to the last cell.
- Construct and verify the unique positive normalised joint table when compatible.
- Evaluate the concrete conditional rows and justify the impossibility conclusion.

</details>
