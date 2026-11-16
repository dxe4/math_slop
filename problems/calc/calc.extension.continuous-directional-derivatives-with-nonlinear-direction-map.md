# Separate continuity and all directional derivatives from total differentiability

*Hard · [Calculus](index.md)*

Define f(0,0)=0 and $f(x,y)=x^3/(x^2+y^2)$ elsewhere. Prove continuity at the origin, calculate the two-sided directional derivative D\_vf(0) for every nonzero v=(u,w), and show f is not totally differentiable there. Use D\_vf(0)=lim\_{t→0}\[f(tv)−f(0)\]/t without normalizing v.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The bound \|f(x,y)\|≤\|x\| gives continuity.

</details>

<details>
<summary>Hint 2</summary>

Along a fixed line the t factors cancel, but the resulting map of v is not linear.

</details>

<details>
<summary>Model proof</summary>

All line derivatives can exist while failing the linearity required of a total differential.

1. For nonzero (x,y), \|f(x,y)\|=\|x\|x²/(x²+y²)≤\|x\|≤√(x²+y²). Thus f→0 at the origin and is continuous there.
2. For v=(u,w)≠0, f(tu,tw)=t u³/(u²+w²). Therefore the two-sided directional derivative is u³/(u²+w²).
3. The coordinate derivatives are D\_(1,0)=1 and D\_(0,1)=0. If a total differential existed, its linearity would force D\_(1,1)=1.
4. But the actual diagonal derivative is 1/2. This contradiction proves total differentiability fails despite continuity and all two-sided directional derivatives.

**Self-assessment rubric**

- Proves the stated norm bound and continuity at zero.
- Calculates the two-sided line quotient for every nonzero direction.
- Uses coordinate directions to identify the only candidate linear map and contradicts it on a diagonal direction.

</details>
