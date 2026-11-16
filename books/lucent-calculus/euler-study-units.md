# Return to calculus: test the rule's hypotheses

These public written tasks extend the [product-rule investigation](derivative-rules.md). They are unassessed self-study. Public model arguments and rubric comparisons do not automatically verify a proof, establish unseen retention or record qualified human review.

For delayed practice, return after a gap, close the old examples and preserve the first argument before asking for help. Record the actual time and any previous exposure. If the model has already been read, describe the attempt as reconstruction. No delay or learning outcome is inferred from opening this page.

## Product identity return

The three-term finite identity is algebraic. The usual product-rule theorem adds differentiability hypotheses to justify its limit. A hypothesis can be sufficient without being necessary for every particular product to have a derivative.

```exercise
{"id":"euler-product-hypothesis-return","type":"written","prompt":"At a=1 let f(x)=√|x−1| and g(x)=x−1, both defined for every real x. Determine whether f is differentiable at 1, and determine whether the product f g is differentiable there. Use the exact three-term finite product identity to identify the two strip quotients and the corner quotient. May the usual theorem requiring both factors to be differentiable be invoked here? Justify every two-sided limit without relying on plotted samples.","hints":["For h≠0, f(1)=g(1)=0, Δf=√|h| and Δg=h. Write the quotient before trying to use the product rule.","The quotient for f is √|h|/h. The quotient for the product is √|h|. To bound the latter by ε, restrict |h| using ε²."],"rubric":["Checks that both functions are defined on a real neighborhood of 1","Shows the first factor has no finite two-sided derivative at 1","Uses the exact finite identity with both strip quotients zero and corner quotient √|h|","Proves that the product quotient tends to zero from both sides","Distinguishes a true product derivative from an ineligible invocation of the usual product-rule theorem"],"solution":"For h≠0, the quotient for f at 1 is √|h|/h: it equals 1/√h on the positive side and −1/√(−h) on the negative side. It has no finite limit, so f is not differentiable at 1. The exact identity is Δ(fg)/h=f(1)Δg/h+g(1)Δf/h+ΔfΔg/h. Its two strip terms are zero, and its corner is √|h|·h/h=√|h|. Given ε>0, 0<|h|<ε² implies this quotient has absolute value less than ε. Therefore (fg)′(1)=0. The usual product-rule theorem with two differentiable factors cannot be invoked, because f fails its hypothesis. Direct use of the difference quotient still establishes this particular derivative. No positive-area picture or division by g(1) is needed.","transfer":"On a later return, take u(x)=√|x| and v(x)=√|x| at a=0. Decide whether their product has a derivative at 0. Again compute its strip and corner quotients from the finite identity. Compare this result with the first task: does the fact that both factors vanish at the base point guarantee that the corner quotient vanishes? Give the exact reason for your conclusion.","transferSolution":"Both base values are zero, so the two strip quotients are zero. For h≠0 the corner quotient is (√|h|)²/h=|h|/h, equal to 1 for h>0 and −1 for h<0. These one-sided limits differ, so u v=|x| is not differentiable at 0. Both increments tend to zero, but their product is divided by h; that quotient need not tend to zero. In the first task the extra factor h left √|h| after division, which did tend to zero. Thus vanishing base values or increments alone cannot replace the needed quotient estimate. The exact finite identity remains valid in both tasks even when a standard differentiability hypothesis fails."}
```

## Product feedback and repair

<details>
<summary>Use after an attempt: distinguish the identity from its limit</summary>

- **A failed hypothesis was called a failed conclusion.** The usual theorem does not apply in the first task. That does not prove the product lacks a derivative; calculate its own quotient.
- **The factor quotient was silently assigned a value at zero.** All quotient calculations concern h ≠ 0 and then a limit. Neither dividing by a zero base value nor assigning a value to an unbounded quotient is allowed.
- **“Both increments vanish” was used to discard the corner.** Estimate the entire quantity Δf Δg / h. In the changed task this is a sign, not a small error.
- **A few small positive h were checked.** A two-sided derivative also concerns negative h. Give an all-small-h estimate in the first task and the incompatible one-sided limits in the second.

Use the rubric to identify the first unjustified line, then rewrite that line and every conclusion depending on it. Valid alternative arguments using the product's explicit formula are welcome, but they must still address the task's requested finite identity and theorem-hypothesis distinction.

</details>

Repair a quotient/limit gap in [The derivative as a local rate](derivative.md). Repair the finite identity in [Rules, implicit functions, and inverses](derivative-rules.md). For absolute values and real domains, return to the [algebra refresher](../lucent-refresher/algebra-functions.md).
