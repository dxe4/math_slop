# Certify a decimal root estimate

*Difficulty 1 of 5 · [Powers, roots, and scale solved studio](index.md) · exercise 6 of 12*

Simplify `sqrt(200)` exactly, bracket it between consecutive integers, and then prove that it lies between `14.14` and `14.15` using squared endpoints.

<details>
<summary>Hint 1</summary>

Factor out the largest convenient perfect square

</details>

<details>
<summary>Hint 2</summary>

The square function is increasing on nonnegative numbers

</details>

<details>
<summary>Worked solution</summary>

Since `200=100*2`, `sqrt(200)=10sqrt(2)`. Also `14^2=196<200<225=15^2`, so the root lies between 14 and 15. For the tighter bracket, `14.14^2=199.9396<200`, while `14.15^2=200.2225>200`. All endpoints are nonnegative and squaring is increasing there, so `14.14<sqrt(200)<14.15`. The interval is a certificate; it justifies the displayed precision instead of relying on an unexamined calculator decimal.

**Answer.** `sqrt(200)=10sqrt(2)` and `14.14<sqrt(200)<14.15`.

</details>

*Tags: powers-roots, radicals, bounds*
