# A two-event Cox partial likelihood

*Difficulty 5 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 11 of 12*

Three subjects A,B,C have fixed covariates $x=(1,0,1)$. At the first distinct event time A has the event while all three are at risk. At the second event time B has the event while B and C are at risk. There is no censoring before those events. Write the Cox partial likelihood, find its maximizing $\exp(\beta)>0$ and β, and state two interpretation boundaries.

<details>
<summary>Hint 1</summary>

Let $u=\exp(\beta)$

</details>

<details>
<summary>Hint 2</summary>

The likelihood is u/(2u+1) times 1/(1+u)

</details>

<details>
<summary>Hint 3</summary>

Differentiate log L with respect to u

</details>

<details>
<summary>Worked solution</summary>

Let $u=\exp(\beta)>0$. At the first event the numerator is $u$ and risk-set denominator is $2u+1$. At the second event B has numerator 1 and denominator $1+u$. Hence $L(u)=u/[(2u+1)(u+1)]$. Differentiating $\log L$ gives $1/u-2/(2u+1)-1/(u+1)$. Setting this to zero yields $2u^2+3u+1=u(4u+3)$, hence $2u^2=1$ and $u=1/\sqrt{2}$. Thus $\beta=\log u=-\frac12\log2\approx-0.3466$. This toy estimate assumes proportional hazards and correct risk sets with independent censoring; it has only two events and no reliable large-sample precision. $\exp(\beta)$ is a conditional hazard ratio, not a risk ratio or a causal effect without additional identification.

**Answer.** $L(\beta)=e^{\beta}/[(2e^{\beta}+1)(1+e^{\beta})]$, maximized at $e^{\beta}=1/\sqrt{2}$ and $\beta=-(\log2)/2$.

</details>

*Tags: survival analysis, Cox model, partial likelihood, risk set*
