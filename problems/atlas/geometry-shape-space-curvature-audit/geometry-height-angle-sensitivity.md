# Propagate angle error in a height estimate

*Difficulty 4 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 12 of 12*

Model height by $h=h_i+d\tan(\theta)$, with $h_i=1.50$ m, $d=20.0$ m, and $\theta=37.0^\circ$. Compute $h$, then use a first-order absolute bound for $|\Delta h_i|\le0.02$ m, $|\Delta d|\le0.10$ m, and $|\Delta\theta|\le0.5^\circ$. Identify the dominant measured input and the limitation of the linear bound.

<details>
<summary>Hint 1</summary>

Convert $0.5^\circ$ to about 0.00873 radians

</details>

<details>
<summary>Hint 2</summary>

$dh\approx dh_i+\tan(\theta)\,dd+d\sec^2(\theta)\,d\theta$

</details>

<details>
<summary>Hint 3</summary>

Compare the three absolute contributions

</details>

<details>
<summary>Worked solution</summary>

The central estimate is $h=1.50+20\tan(37^\circ)\approx16.57$ m. The first-order bound is $0.02+\tan(37^\circ)(0.10)+20\sec^2(37^\circ)(0.00873)\approx0.02+0.075+0.274=0.369$ m. Angle error dominates. A defensible rounded report is about 16.6 m with a roughly 0.4 m local sensitivity bound, before adding model error such as ground slope or target misidentification. The derivative bound is local and approximate; for large intervals or angles near $90^\circ$, evaluate nonlinear endpoints or use a controlled interval method.

**Answer.** $h\approx 16.57$ m and the first-order bound is about 0.37 m, dominated by angle uncertainty; the bound is only a local linear approximation.

</details>

*Tags: measurement, trigonometry, uncertainty, sensitivity*
