# Audit a tempting power-law chain

*Difficulty 3 of 5 · [Powers, roots, and scale solved studio](index.md) · exercise 10 of 12*

A learner writes `sqrt(x^2)=x` and then substitutes `x=-5` to claim `sqrt(25)=-5`. Identify the invalid step, give the correct identity for every real `x`, and prove it by considering the two possible signs of `x`.

<details>
<summary>Hint 1</summary>

The principal square root is never negative

</details>

<details>
<summary>Hint 2</summary>

Handle `x>=0` and `x<0` separately

</details>

<details>
<summary>Worked solution</summary>

The invalid step is replacing `sqrt(x^2)` by `x` without a sign condition. The correct identity is `sqrt(x^2)=|x|`. If `x>=0`, then `|x|=x`; the nonnegative number whose square is `x^2` is therefore `x`. If `x<0`, then `-x>0`, `(-x)^2=x^2`, and the principal square root must choose the nonnegative candidate `-x=|x|`. At `x=-5`, the identity gives `sqrt(25)=|-5|=5`, so the claimed negative principal root is impossible.

**Answer.** The correct identity is `sqrt(x^2)=|x|`; the two sign cases show why the principal root is nonnegative.

</details>

*Tags: powers-roots, principal-root, proof, counterexample*
