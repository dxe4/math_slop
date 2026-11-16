# Prove monotonicity from a one-sided lower derivative

*Hard · [Real analysis](index.md)*

Let f be continuous on \[a,b\] and for every x&lt;b suppose $\liminf_{h\downarrow0}[f(x+h)-f(x)]/h\ge0$, using only h with x+h≤b. Prove f is nondecreasing without assuming an ordinary derivative exists. Give a function showing continuity cannot be omitted, even if every right derivative exists and is zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Add εx and use a maximum on an arbitrary smaller closed interval.

</details>

<details>
<summary>Hint 2</summary>

A maximum attained before the right endpoint contradicts a strictly positive lower right difference-quotient bound.

</details>

<details>
<summary>Model proof</summary>

A small positive tilt forces the maximum to the right endpoint; removing the tilt yields weak monotonicity.

1. Fix u&lt;v in \[a,b\] and ε&gt;0. Set g(x)=f(x)+εx. Its lower right Dini derivative is at least ε at every x&lt;v. Hence for each such x, all sufficiently small positive increments give g(x+h)&gt;g(x).
2. If g(v)≤g(u), continuity gives a maximum on \[u,v\] attained at some c&lt;v: if the endpoint values tie, the left endpoint is an alternative maximizer whenever the maximum occurs there. A sufficiently small h&gt;0 with c+h&lt;v would then satisfy g(c+h)&gt;g(c), a contradiction. Thus g(v)&gt;g(u).
3. Therefore f(v)−f(u)&gt;−ε(v−u). Letting ε↓0 gives f(v)≥f(u). Since u&lt;v were arbitrary, f is nondecreasing. The conclusion is weak, since a constant f satisfies the original hypothesis.
4. For the missing-continuity example on \[0,1\], set f(x)=0 for x&lt;1/2 and f(x)=−1 for x≥1/2. At every x&lt;1 the right derivative is zero, including x=1/2, but the function has a downward jump and is not nondecreasing.

**Self-assessment rubric**

- Obtains a strictly positive lower right increment condition for f+εx.
- Uses continuity and a maximizer strictly before v to get the contradiction.
- Passes ε to zero on every subinterval and obtains nondecrease without ordinary differentiability.
- Verifies all right derivatives and the downward jump in an explicit example.

</details>
