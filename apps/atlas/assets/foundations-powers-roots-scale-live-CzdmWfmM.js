var e=`---
id: visual-lab-foundations-powers-roots-scale
title: "Powers, Roots, and Scale Explorer"
level: foundation
estimated_minutes: 45
license: CC-BY-4.0
---

# Powers, roots, and scale explorer

This static instrument connects three uses of the same exponent structure:
moving along integer powers, reversing a power with a root, and changing a
geometric quantity's dimension. It uses exact integers and reduced rational
numbers throughout. Decimal rounding never decides a displayed claim.

## Experiment 1: walk the power ladder

Choose an integer base from -9 through 9. The complete table displays every
integer exponent from -4 through 4. Moving one step right multiplies by the
base. For a nonzero base, moving one step left divides by the base, so negative
exponents appear as exact reciprocals.

Two boundaries remain visible instead of being simplified away:

- $0^0$ receives no ordinary algebraic value in this instrument;
- $0^{-n}$ is undefined for positive $n$ because it would divide by zero.

Try base $-2$. Positive odd exponents are negative and positive even exponents
are positive. The same alternating sign continues through reciprocal values:
$(-2)^{-3}=-1/8$, while $(-2)^{-4}=1/16$. Parentheses are essential because
the selected base really is negative.

## Experiment 2: demand a root certificate

Choose an integer radicand from -200 through 200 and an index from 2 through 5.
If the root is an integer, the engine prints the exact power identity. If it is
not an integer, the engine finds consecutive integers whose indexed powers lie
on either side of the radicand.

For example,

$7^2=49 < 50 < 64=8^2$,

so $7<\\sqrt{50}<8$. This is a proof of an interval, not a sampled graph or a
calculator guess. For $cuberoot(-20)$, the correct ordering is

$(-3)^3=-27 < -20 < -8=(-2)^3$,

so $-3<\\sqrt[3]{-20}<-2$. Odd powers preserve order across negative inputs.
An even root of a negative input is marked outside the real-number domain.

## Experiment 3: let dimension choose the exponent

Choose a positive rational scale factor $p/q$. Assume uniform scaling of similar
figures, with that same factor in every linear direction. Stretching only one
direction does not have the area-square or volume-cube multiplier below.
The engine reduces the factor and shows
three exact multipliers:

| quantity | multiplier | reason |
| --- | --- | --- |
| length | $(p/q)^1$ | one length factor |
| area | $(p/q)^2$ | two length factors |
| volume | $(p/q)^3$ | three length factors |

With scale $3/2$, length multiplies by $3/2$, area by $9/4$, and volume by
$27/8$. Using $3/2$ for all three would ignore dimension. The table keeps
numerators and denominators exact, so it also shows contraction clearly: scale
$2/3$ gives area factor $4/9$ and volume factor $8/27$.

## Exactness and implementation boundary

The pure engine uses \`bigint\` arithmetic. Inputs are bounded native controls,
so every result is deterministic and the display remains responsive. The root
routine proves its answer by integer powers; it does not approximate an
irrational root beyond the consecutive-integer bracket. The laboratory is not
a general symbolic algebra system and does not define arbitrary real or
complex exponentiation.

## Accessibility and motion

Every control is a labeled native range input and works from a keyboard. The
power strip is supplementary: the adjacent table contains every exponent,
exact value, and undefined-case reason. Root conclusions appear as complete
sentences and definition lists. Scale cards repeat their values in an exact
table, and labels repeat every visual distinction. The instrument contains no
canvas, animation, autoplay, or timed transition; reduced-motion mode remains
fully static.

## Investigations

1. Compare bases $2$, $-2$, $1$, $-1$, and $0$. Which patterns depend on sign,
   and which depend on whether the base is zero?
2. Find every exact square root in the radicand range, then repeat for cube
   roots. Explain why the negative side behaves differently.
3. Swap a scale factor's numerator and denominator. How do all three
   multipliers change, and why is each new value the reciprocal of the old
   one?
4. Select scale $5/3$. Explain in words why volume grows more than area, which
   grows more than length.

The compact course and solved studio provide proofs, common-error diagnosis,
and exercises for the same relationships after central integration.
`;export{e as default};