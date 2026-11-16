# Repeated decay and threshold time

*Difficulty 2 of 5 · [Applied modeling and decisions](index.md) · exercise 2 of 4*

A quantity starts at 200 mg and 15% is removed at the end of each hour. Build a discrete model and find the first whole hour at which less than 100 mg remains.

<details>
<summary>Hint 1</summary>

Each hourly update multiplies by 0.85

</details>

<details>
<summary>Hint 2</summary>

Solve $200(0.85)^n<100$ and then respect that n is an integer

</details>

<details>
<summary>Worked solution</summary>

After n whole hourly removals, $M_n=200(0.85)^n$. The inequality M_n<100 becomes $(0.85)^n<0.5$. Taking logarithms gives $n>\ln(0.5)/\ln(0.85)\approx 4.265$ because $\ln(0.85)$ is negative and reverses the inequality when dividing. The first integer satisfying it is $n=5$. Indeed $M_4\approx 104.4$ mg while $M_5\approx 88.7$ mg. This is a discrete end-of-hour model, not continuous exponential decay.

**Answer.** $M_n=200(0.85)^n$; it first falls below 100 mg after 5 hours.

</details>

*Tags: discrete model, percentage decay, logarithm*
