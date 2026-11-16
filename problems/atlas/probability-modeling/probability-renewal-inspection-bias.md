# Why a random observer sees longer gaps

*Difficulty 4 of 5 · [Probability modeling](index.md) · exercise 10 of 15*

A renewal process has interarrival time $W$ equal to $1$ or $3$ hours, each with probability $1/2$. Compare $E[W]$ with the mean length of the interval containing a time chosen uniformly far into equilibrium, using $E[W^2]/E[W]$.

<details>
<summary>Hint 1</summary>

Compute first and second moments

</details>

<details>
<summary>Hint 2</summary>

Long intervals occupy more clock time

</details>

<details>
<summary>Worked solution</summary>

$E[W]=(1+3)/2=2$ hours and $E[W^2]=(1+9)/2=5$ hours$^2$. The equilibrium interval containing a random observation time has mean $E[W^2]/E[W]=5/2=2.5$ hours. Longer gaps are more likely to contain the observation time; this is length bias, not a change in the original interarrival law.

**Answer.** Ordinary mean $2$ hours; observed containing-interval mean $2.5$ hours.

</details>

*Tags: renewal, inspection paradox, length bias*
