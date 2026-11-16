# An explicitly indexed tangent-circle chain

*Hard · [Original olympiad-style problems](index.md)*

Let the circles with centers $(1,0)$ and $(1/2,0)$ and radii $1$ and $1/2$ share tangency point $O=(0,0)$. For $n=0,1,2,\ldots$, invert the circles with centers $(3/4,n/2)$ and radius $1/4$ by unit inversion about $O$. Prove that their images have centers $(3/(n^2+2),2n/(n^2+2))$ and radii $1/(n^2+2)$, are tangent internally to the large circle and externally to the smaller one, and consecutive images are tangent. Deduce that the height of the $n$th center is $2n$ times its radius.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The two original circles through $O$ invert to the parallel lines $x=1/2$ and $x=1$.

</details>

<details>
<summary>Hint 2</summary>

A circle of center $c$ and radius $t$ avoiding $O$ maps to center $c/(|c|^2-t^2)$ and radius $t/\bigl||c|^2-t^2\bigr|$. Derive this by substitution if needed.

</details>

<details>
<summary>Model proof</summary>

Equal circles stacked in a strip become a tangent chain with exact rational centers.

1. Unit inversion sends $x^2+y^2-2x=0$ to $x=1/2$ and $x^2+y^2-x=0$ to $x=1$. Each supplied radius-$1/4$ circle touches both vertical lines. Consecutive centers differ vertically by $1/2$, exactly the sum of their radii.
2. For a general circle equation $|x-c|^2=t^2$, substitution $x=y/|y|^2$ gives $(|c|^2-t^2)|y|^2-2c\cdot y+1=0$. Completing the square yields the image-center and radius formulas when $|c|^2\ne t^2$.
3. Here $|c|^2-t^2=9/16+n^2/4-1/16=(n^2+2)/4>0$. The formulas give center $(3/(n^2+2),2n/(n^2+2))$ and radius $1/(n^2+2)$, so every image is a genuine circle avoiding $O$.
4. Inversion preserves tangency at all relevant finite nonzero contact points. The strip corresponds to the region inside the large circle and outside the small one, as can also be checked at the image center using the circle inequalities. Thus the tangencies have the stated internal/external types, consecutive circles touch, and their center height divided by radius is $2n$. The index-zero circle is the right semicircle circle, with center $(3/2,0)$ and radius $1/2$.

**Self-assessment rubric**

- Identify both image lines and the consecutive equal-circle contacts.
- Derive or explicitly verify the center and radius inversion formulas.
- Substitute the actual n-dependent center and positive denominator.
- Preserve the correct tangency sides and derive the exact height ratio.

</details>
