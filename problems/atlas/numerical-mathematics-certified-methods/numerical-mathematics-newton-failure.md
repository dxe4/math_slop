# A Newton two-cycle

*Difficulty 3 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 4 of 16*

Apply Newton's method to `f(x)=x^3-2x+2` starting at `x_0=0`. Show that the iteration cycles. Then give a sign-changing bracket for a real root and describe a safeguarded response.

<details>
<summary>Hint 1</summary>

Compute the first two Newton updates exactly

</details>

<details>
<summary>Hint 2</summary>

Check f at -2 and -1

</details>

<details>
<summary>Worked solution</summary>

Newton uses `x_new=x-f(x)/f'(x)` with `f'(x)=3x^2-2`. At `x_0=0`, `f(0)=2` and `f'(0)=-2`, so `x_1=0-2/(-2)=1`. At one, `f(1)=1` and `f'(1)=1`, so `x_2=1-1=0`. The sequence repeats `0,1,0,1,...` and never approaches a root. This does not contradict local quadratic convergence, which requires a simple root, sufficient smoothness, and a start sufficiently close to it. Since `f(-2)=-2` and `f(-1)=3`, continuity gives a root in `[-2,-1]`. A safeguarded method retains this bracket, accepts a Newton proposal only when it remains useful inside the bracket, and otherwise bisects. It returns both fast local steps and an existence/location invariant.

**Answer.** Newton alternates 0 and 1; `[-2,-1]` is a valid bracket, so retain it and fall back to bisection when needed.

</details>

*Tags: root-finding, newton-method, failure-mode*
