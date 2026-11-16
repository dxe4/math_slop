# Principal stresses with an invariant check

*Difficulty 4 of 5 · [Mathematical physics audit studio](index.md) · exercise 8 of 10*

A symmetric plane stress in tension-positive convention is $\sigma=\begin{bmatrix}90&25\\25&30\end{bmatrix}$ MPa. Compute mean stress, Mohr radius, principal stresses, maximum in-plane shear, trace, and determinant. Verify eigenvalue sum and product against the invariants.

<details>
<summary>Hint 1</summary>

$m=(\sigma_x+\sigma_y)/2$ and $R=\sqrt{((\sigma_x-\sigma_y)/2)^2+\tau_{xy}^2}$

</details>

<details>
<summary>Hint 2</summary>

Principal stresses are $m\pm R$

</details>

<details>
<summary>Hint 3</summary>

Their product should equal $\sigma_x\sigma_y-\tau_{xy}^2$

</details>

<details>
<summary>Worked solution</summary>

Mean stress is $m=(90+30)/2=60$ MPa. Half-difference is 30 MPa, so $R=\sqrt{30^2+25^2}=\sqrt{1525}\approx 39.051$ MPa. Principal stresses are approximately 99.051 and 20.949 MPa, and maximum in-plane shear magnitude is 39.051 MPa. Trace is 120 MPa; the principal stresses sum to 120 MPa. Determinant is $90\cdot 30-25^2=2075\,\mathrm{MPa}^2$; $(60+\sqrt{1525})(60-\sqrt{1525})=3600-1525=2075\,\mathrm{MPa}^2$. These results assume symmetric Cauchy stress; a yield conclusion would require a material criterion.

**Answer.** $m=60$ MPa, $R=39.051$ MPa, principals 99.051 and 20.949 MPa, max shear 39.051 MPa, trace 120 MPa, determinant 2075 $MPa^2$.

</details>

*Tags: continuum mechanics, stress tensor, principal stress, Mohr circle*
