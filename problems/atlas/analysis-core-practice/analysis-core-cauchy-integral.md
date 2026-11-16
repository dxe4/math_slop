# A contour integral by the Cauchy integral formula

*Difficulty 4 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 10 of 12*

Compute $\displaystyle \oint_{|z| = 1} \frac{e^z}{z} \, dz$, stating precisely which theorem you use and verifying that its hypotheses hold.

<details>
<summary>Hint 1</summary>

The integrand is $f(z)/z$ with $f$ entire; the contour encloses $0$.

</details>

<details>
<summary>Hint 2</summary>

The Cauchy integral formula reads $f(a) = \frac{1}{2\pi i} \oint \frac{f(z)}{z - a} dz$.

</details>

<details>
<summary>Worked solution</summary>

Write the integrand as $f(z)/(z - 0)$ with $f(z) = e^z$, which is holomorphic on all of $\mathbb{C}$, in particular on and inside the unit circle. The point $a = 0$ lies inside the contour $|z| = 1$, and the contour is a simple closed positively oriented curve, so the hypotheses of the Cauchy integral formula hold. The formula gives $\oint_{|z|=1} \frac{e^z}{z} dz = 2\pi i \, f(0) = 2\pi i \cdot e^0 = 2\pi i$. The same answer follows from the residue theorem, since the residue of $e^z/z$ at the simple pole $0$ is $e^0 = 1$; checking a result through two theorems is good practice, because each theorem makes different hypotheses explicit.

**Answer.** $2\pi i$.

</details>

*Tags: complex-analysis, contour-integration, cauchy-formula*
