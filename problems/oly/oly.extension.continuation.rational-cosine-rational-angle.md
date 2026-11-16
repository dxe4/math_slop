# Classify rational cosines at rational multiples of pi

*Hard · [Original olympiad-style problems](index.md)*

If $\theta/\pi$ is rational and $\cos\theta$ is rational, prove $\cos\theta\in\{-1,-1/2,0,1/2,1\}$. Verify every listed value is possible.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Put $t=2\cos\theta$ and use the recurrence $S_0=2,S_1=t,S_{j+1}=tS_j-S_{j-1}$ for $2\cos(j\theta)$.

</details>

<details>
<summary>Hint 2</summary>

A suitable positive multiple of the angle is a whole turn, making $t$ a root of a monic integer polynomial.

</details>

<details>
<summary>Model proof</summary>

Turn a rational trigonometric value into a rational root of a monic integer polynomial.

1. The cosine addition identity gives the stated recurrence. By induction, for every $j\ge1$, $S_j$ is a monic integer polynomial of degree $j$ in $t$ and equals $2\cos(j\theta)$.
2. Write $\theta=a\pi/b$ with integers $a$ and $b>0$. Then $S_{2b}(t)-2=0$, so rational $t$ is a root of a monic integer polynomial.
3. The rational-root theorem makes $t$ an integer. Since $|t|\le2$, it is one of $-2,-1,0,1,2$.
4. Dividing by two gives the listed cosines. Angles $\pi,2\pi/3,\pi/2,\pi/3,0$ verify all five, each a rational multiple of pi.

**Self-assessment rubric**

- Prove the recurrence yields monic integer polynomials of the required degrees.
- Use the rational angle to obtain a genuine polynomial equation.
- Force an integer t and restrict it by the cosine bound.
- Exhibit every claimed cosine value.

</details>
