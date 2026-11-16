# Show how a vanishing leading coefficient permits a flat branch

*Hard · [Differential equations problems](index.md)*

Define y(t)=exp(1/t) for t&lt;0 and y(t)=0 for t&gt;=0. Prove y is a nonzero C-infinity solution on the real line of $t^2y'=-y$, all its derivatives at zero vanish, and it is not analytic at zero. Explain why this does not contradict analytic initial-value uniqueness at an ordinary point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Each derivative on the negative side is exp(1/t) times a polynomial in 1/t.

</details>

<details>
<summary>Hint 2</summary>

Exponential decay as t approaches zero from below dominates every inverse power.

</details>

<details>
<summary>Model proof</summary>

An irregular singular coefficient allows smooth flatness without analytic uniqueness.

1. For t&lt;0, direct differentiation gives yprime=-exp(1/t)/t^2, so t^2\*yprime=-y; for t&gt;0 both sides are zero. Every repeated left derivative has the form exp(1/t) times a polynomial in 1/t, proved by induction.
2. As t increases to zero, exp(1/t) decays faster than every power of \|t\|. Thus all these left derivatives tend to zero and join the zero right derivatives. Inductively the extension is smooth with every derivative zero at zero, and the equation also holds at zero because both sides vanish.
3. The function is positive for t&lt;0, so its all-zero Taylor series cannot represent it near zero. There is no contradiction with ordinary-point uniqueness: the leading derivative coefficient t^2 vanishes at zero, and the divided equation yprime=-y/t^2 is not defined there.

**Self-assessment rubric**

- Prove the derivative form and the decay needed at every order.
- Justify the smooth join and the equation at the singular point.
- Distinguish the nonzero smooth solution from its Taylor series and identify the failed ordinary-point hypothesis.

</details>
