# Kaplan-Meier factors, a censored tie, and restricted mean

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 10 of 12*

Five records are (1,event), (2,censored), (3,event), (3,censored), and (4,event). Using the convention that everyone recorded at t is at risk just before t and events precede tied censoring, compute every Kaplan-Meier step, the median, and restricted mean through time 4. State the censoring assumption.

<details>
<summary>Hint 1</summary>

Risk counts are 5,4,3,1

</details>

<details>
<summary>Hint 2</summary>

A censoring-only time has factor one

</details>

<details>
<summary>Hint 3</summary>

Sum rectangle areas between successive times

</details>

<details>
<summary>Worked solution</summary>

At time 1, $n=5,d=1$, so survival is 4/5. At time 2, $n=4,d=0,c=1$, so the factor is 1 and survival stays 4/5. At time 3, $n=3,d=1,c=1$, giving factor 2/3 and survival 8/15. At time 4, only one remains and has the event, giving factor 0 and survival 0. Since 8/15 exceeds one half, the first time at or below one half is 4, the estimated median. Restricted mean through 4 is $1\cdot 1+1\cdot (4/5)+1\cdot (4/5)+1\cdot (8/15)=47/15\approx 3.133$. Identification requires right censoring independent of the event process, possibly conditional on adequately recorded covariates/history, plus correct time origin and risk sets.

**Answer.** Steps are 4/5, 4/5, 8/15, 0; median 4 and RMST through 4 equals 47/15, under non-informative right censoring.

</details>

*Tags: survival analysis, Kaplan-Meier, right censoring, restricted mean*
