
# Knot Theory for Fun

A **knot** is a closed loop of string embedded in three-dimensional space. Two knots are equivalent if one can be deformed into the other without cutting or passing the string through itself. Knot theory asks how to tell knots apart, how to classify them, and what invariants survive deformation. The subject is deep---it connects to topology, quantum physics, and molecular biology---but its basic puzzles require only careful drawing and counting.

<a id="section-5-worked-example-1-the-unknot-and-the-trefoil"></a>
<a id="section-3-worked-example-1-the-unknot-and-the-trefoil"></a>

## Worked example 1: the unknot and the trefoil

The simplest knot is the **unknot**, a plain circle. The next simplest is the **trefoil**, which has three crossings and cannot be untangled. To prove the trefoil is nontrivial, we need an invariant: a quantity that is the same for all diagrams of the same knot but different for the unknot.

<a id="section-9-crossing-number"></a>
<a id="section-7-crossing-number"></a>

## Crossing number

The **crossing number** of a knot is the minimum number of crossings in any diagram of that knot. The unknot has crossing number $0$, and the trefoil has crossing number $3$. No knot has crossing number $1$ or $2$: a single crossing is removable by a twist, and two crossings always simplify to the unknot.

The unknot has crossing number zero and is not prime. The numbers of nontrivial prime knots by crossing number grow rapidly:

The unknot is recorded separately: one knot of crossing number $0$.
- $3$ crossings: $1$ (trefoil)
- $4$ crossings: $1$ (figure-eight)
- $5$ crossings: $2$
- $6$ crossings: $3$
- $7$ crossings: $7$
- $8$ crossings: $21$

These tabulation values use the usual convention of counting mirror pairs
together. The further classification and polynomial results in this chapter
are cited continuations: see [Bar-Natan’s Rolfsen table](https://www.math.toronto.edu/~drorbn/private/KAtlas/Knots/index.html) and [Jones’s original polynomial-invariant paper](https://metaphor.ethz.ch/x/2019/fs/401-3574-61L/files/Jones_original_1985.pdf), rather than classification proofs. The elementary
nontriviality argument supplied below uses three-colouring. A drawn diagram's
crossings can exceed its knot's crossing number by any number of removable
twists, so counting the crossings in a single complicated picture gives only
an upper bound for the represented knot.

<a id="section-31-reidemeister-moves"></a>
<a id="section-29-reidemeister-moves"></a>

## Reidemeister moves

In 1927, Kurt Reidemeister proved that two knot diagrams represent the same knot if and only if one can be transformed into the other by a sequence of three local moves:

1. **Type I:** add or remove a twist.
2. **Type II:** slide one strand over or under another.
3. **Type III:** slide a strand over or under a crossing.

Any knot invariant must be unchanged by all three move types. This is the acid test for a proposed invariant.

<a id="section-41-worked-example-2-a-complete-small-invariant"></a>
<a id="section-39-worked-example-2-a-complete-small-invariant"></a>

## Worked example 2: a complete small invariant

Colour each arc of a diagram by a residue 0,1 or 2 modulo 3. An arc continues
through overcrossings but ends whenever it passes underneath another arc.
At a crossing with over-arc colour $b$ and under-arc colours $a,c$, require
$a+c=2b\pmod3$. This says that the three colours are either all equal or
all different. Count every valid colouring, including the constant colourings.

Here is why this count survives the moves. Write $R_b(a)=2b-a$ for the
under-strand colour after passing under colour $b$. In type I the local
equation forces the small loop's colour to equal its continuing strand's
colour, so every exterior colouring extends uniquely. In type II the two
successive changes cancel because $R_b(R_b(a))=a$. For type III the identity

$$R_c(R_b(a))=R_{R_c(b)}(R_c(a))$$

holds: both sides equal $a-2b+2c$ modulo 3. It expresses equality of
the output colours in the two three-crossing configurations. The remaining
strands keep their colours, and the equations determine intermediate colours
uniquely. Reversing a move reverses these correspondences. Thus each move gives
a bijection of valid colourings. Reidemeister's theorem, cited above, turns
this local calculation into a knot invariant. The theorem itself requires a
topological proof beyond this introductory chapter.

In a standard trefoil diagram there are three arcs $a,b,c$, and the crossing
equations are $2a=b+c$, $2b=a+c$, $2c=a+b$. Modulo 3 they are all equivalent
to $a+b+c=0$. Choosing $a,b$ arbitrarily determines $c$, giving nine
colourings. Exactly three are constant. A circle with no crossings has a single
arc and only three colourings. Consequently the trefoil cannot be equivalent
to the unknot. This supplies the promised obstruction without requiring a
Jones-polynomial computation. Equal colouring counts would not in general
prove two knots equivalent.

<a id="section-74-the-linking-number"></a>
<a id="section-72-the-linking-number"></a>

## The linking number

For an oriented two-component link, orient the drawing plane and take the
ordered pair of tangent vectors along the over-strand and under-strand. Assign
$+1$ when its determinant is positive and $-1$ when negative, keeping this
convention throughout. Reversing the global sign convention changes every
linking number's sign but not the distinction from zero. The
**linking number** is

\[
  \operatorname{lk}(L_1,L_2)
  =\frac12\sum_{c\text{ between }L_1\text{ and }L_2}\operatorname{sign}(c).
\]

The factor $1/2$ matters: intercomponent crossings occur with an even signed
sum. Self-crossings of either component are omitted.

The linking number is invariant under Reidemeister moves and changes sign if the orientation of one component is reversed. The **Hopf link**, consisting of two circles linked once, has linking number $\pm 1$. The **Borromean rings** consist of three circles arranged so that no two are linked, yet the three together cannot be separated. Each pair has linking number $0$, but the triple has a nontrivial higher-order invariant.

<a id="section-93-worked-example-3-signs-and-components"></a>
<a id="section-91-worked-example-3-signs-and-components"></a>

### Worked example 3: signs and components

Suppose an oriented two-component diagram has three positive and one negative
intercomponent crossings, as well as five self-crossings. Its linking number is
$(3-1)/2=1$; the self-crossings are not counted. Reversing both component
orientations reverses both tangent vectors at each mixed crossing and therefore
preserves the determinant sign. Reversing just one reverses every mixed sign,
giving linking number $-1$. The nonzero value obstructs separation into two
circles in disjoint balls, since such a split diagram has linking number zero.
The converse fails: zero alone does not prove a link is split.

<a id="section-104-the-jones-polynomial"></a>
<a id="section-102-the-jones-polynomial"></a>

## The Jones polynomial

In 1984, Vaughan Jones discovered a powerful knot invariant that assigns to each knot a Laurent polynomial in a variable $t$. The Jones polynomial distinguishes many knots that simpler invariants cannot. For the unknot, $V(t)=1$. For one handedness of the trefoil, with a compatible normalisation,

$$V(t) = t^{-1} + t^{-3} - t^{-4}.$$

The Jones polynomial is computed via a **skein relation**: a recursive formula that relates the polynomial of a knot to those of knots with one crossing changed or removed. The computation is algorithmic but can be lengthy for complicated knots.

<a id="section-112-braids-and-knots"></a>
<a id="section-110-braids-and-knots"></a>

## Braids and knots

A **braid** is a collection of strands running from top to bottom, with each strand moving monotonically downward and crossing over or under other strands. Every knot can be represented as a closed braid: connect the top ends to the bottom ends without introducing new crossings. The **braid group** on $n$ strands has generators $\sigma_1,\dots,\sigma_{n-1}$, where $\sigma_i$ crosses strand $i$ over strand $i+1$. These generators satisfy:

- $\sigma_i \sigma_j = \sigma_j \sigma_i$ when $|i-j|>1$;
- $\sigma_i \sigma_{i+1} \sigma_i = \sigma_{i+1} \sigma_i \sigma_{i+1}$.

<a id="section-119-common-errors"></a>
<a id="section-117-common-errors"></a>

## Common errors

- **Confusing a knot with its mirror image.** The trefoil comes in left-handed and right-handed forms; they are not equivalent.
- **Trusting a diagram without checking Reidemeister equivalence.** A complicated diagram may secretly represent the unknot.
- **Ignoring orientation.** The linking number depends on the choice of orientation.
- **Assuming all invariants are complete.** Unequal invariant values prove inequivalence. Using equal crossing numbers or equal Jones polynomials to prove equivalence would require a completeness theorem for that test, which this chapter does not supply.

<a id="section-126-exercises"></a>
<a id="section-124-exercises"></a>

## Exercises


### Exercise 1 {#knot-theory-for-fun-ex-1}

**Explorer.** Draw the trefoil knot and label its three crossings with $+1$ or $-1$ according to the right-hand rule. Compute the sum.

<details>
<summary>Hint 1</summary>

Choose an orientation and retain one crossing-sign convention.

</details>

<details>
<summary>Hint 2</summary>

The standard three-crossing trefoil has three like-signed crossings.

</details>

<details>
<summary>Solution</summary>

For the standard right-handed trefoil, all three crossings have the same sign, say $+1$, giving sum $+3$. The writhe (signed crossing count) is $+3$.

</details>

### Exercise 2 {#knot-theory-for-fun-ex-2}

**Foundation.** Explain why no knot has crossing number $1$ or $2$.

<details>
<summary>Hint 1</summary>

Look for an innermost loop in a one- or two-crossing diagram.

</details>

<details>
<summary>Hint 2</summary>

This statement is about one closed component; the two-crossing
   Hopf link is a different object.

</details>

<details>
<summary>Solution</summary>

A single crossing is removable by a type I Reidemeister move, yielding the unknot. Two crossings can be removed by a type II move unless they form a twist, which simplifies to the unknot by a type I move.

</details>

### Exercise 3 {#knot-theory-for-fun-ex-3}

**Secondary.** In a standard oriented Hopf-link diagram, both
   intercomponent crossings have sign $+1$. Compute its linking number, then
   reverse one component's orientation and recompute it.

<details>
<summary>Hint 1</summary>

Sum only intercomponent signs.

</details>

<details>
<summary>Hint 2</summary>

Divide that sum by
   two, and reverse every mixed sign when reversing one orientation.

</details>

<details>
<summary>Solution</summary>

The signed sum is $1+1=2$, so the linking number is $2/2=1$.
   Reversing one component reverses the sign of both intercomponent crossings,
   giving $(-1-1)/2=-1$.

</details>

### Exercise 4 {#knot-theory-for-fun-ex-4}

**Secondary.** Write the braid word $\sigma_1 \sigma_2^{-1} \sigma_1$ for the three-strand braid group. Draw its closure and identify the resulting knot or link.

<details>
<summary>Hint 1</summary>

Follow the induced permutation of endpoints.

</details>

<details>
<summary>Hint 2</summary>

Each
   permutation cycle becomes one closure component.

</details>

<details>
<summary>Solution</summary>

Ignoring crossing signs, the braid permutes the endpoints by
   $(12)(23)(12)=(13)$, which has two cycles. Its closure therefore has two
   components and cannot be a knot. Tracking components shows that the two
   positive $\sigma_1$ crossings are intercomponent crossings, while the
   negative middle crossing is a self-crossing of the other component. Removing
   that self-crossing by a Reidemeister I move leaves a Hopf-link diagram. Thus
   the closure is a Hopf link (with handedness determined by the drawing
   convention), not the figure-eight knot.

</details>

### Exercise 5 {#knot-theory-for-fun-ex-5}

**Undergraduate.** Prove that the linking number is invariant under Reidemeister moves of type II and type III. (Type I involves only one component, so it does not change the linking number.)

<details>
<summary>Hint 1</summary>

Type II adds opposite signs.

</details>

<details>
<summary>Hint 2</summary>

Type III keeps each
   crossing's component pair and sign, although its location changes.

</details>

<details>
<summary>Solution</summary>

For type II, two crossings of opposite sign are introduced or removed. If
   the two strands belong to different components, their contributions cancel;
   if they belong to one component, neither enters the linking sum. A type III
   move preserves the sign and the component-pair identity of each of its three
   corresponding crossings, so the intercomponent signed sum is unchanged.

</details>

<a id="section-136-complete-solutions"></a>
<a id="section-134-complete-solutions"></a>
## Complete solutions

[Exercise 1](#knot-theory-for-fun-ex-1) · [Exercise 2](#knot-theory-for-fun-ex-2) · [Exercise 3](#knot-theory-for-fun-ex-3) · [Exercise 4](#knot-theory-for-fun-ex-4) · [Exercise 5](#knot-theory-for-fun-ex-5)

<a id="section-161-hints-for-exercises-1-5"></a>
<a id="section-159-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#knot-theory-for-fun-ex-1) · [Exercise 2](#knot-theory-for-fun-ex-2) · [Exercise 3](#knot-theory-for-fun-ex-3) · [Exercise 4](#knot-theory-for-fun-ex-4) · [Exercise 5](#knot-theory-for-fun-ex-5)

<a id="section-175-exercise-6-enumerate-trefoil-colourings-knot-theory-for"></a>
<a id="section-173-exercise-6-enumerate-trefoil-colourings-knot-theory-for"></a>
### Exercise 6: enumerate trefoil colourings {#knot-theory-for-fun-ex-6}

List the nonconstant triples of arc colours for the trefoil modulo 3.

<details><summary>Hint 1</summary> The equation is $a+b+c=0$.
</details>
<details><summary>Hint 2</summary> If two colours agree, the equation forces the third to agree too.
</details>
<details><summary>Solution</summary> Nonconstant solutions must use all three colours. They are the
six permutations of $(0,1,2)$, each summing to zero modulo 3. The remaining
three solutions are $(0,0,0),(1,1,1),(2,2,2)$. The distinction between six
nonconstant and nine total colourings matters when comparing conventions.
</details>
<a id="section-188-exercise-7-writhe-fails-one-move-knot-theory-for-fun-ex"></a>
<a id="section-186-exercise-7-writhe-fails-one-move-knot-theory-for-fun-ex"></a>
### Exercise 7: writhe fails one move {#knot-theory-for-fun-ex-7}

Is the sum of all signed crossings a knot invariant under unrestricted
Reidemeister moves? Give a decisive example.

<details><summary>Hint 1</summary> Consider a circle before and after adding one small twist.
</details>
<details><summary>Hint 2</summary> Compare a self-crossing with an intercomponent crossing.
</details>
<details><summary>Solution</summary> A circle has writhe zero; a type I move introduces a single
crossing of sign $+1$ or $-1$. The diagrams represent the same unknot but have
different writhe. Hence writhe alone is not a knot invariant. Linking number
avoids this issue because type I self-crossings are omitted from its sum.
</details>
<a id="section-202-exercise-8-component-count-of-a-braid-closure-knot-theo"></a>
<a id="section-200-exercise-8-component-count-of-a-braid-closure-knot-theo"></a>
### Exercise 8: component count of a braid closure {#knot-theory-for-fun-ex-8}

Find the number of components in the closures of the three-strand braids
$\sigma_1\sigma_2$ and $\sigma_1^2$, without trying to identify their knot types.

<details><summary>Hint 1</summary> Replace each generator by the transposition of its two endpoints.
</details>
<details><summary>Hint 2</summary> Count cycles, including fixed points.
</details>
<details><summary>Solution</summary> The product $(12)(23)$ is a three-cycle, whose closure has one
component. The product $(12)^2$ is the identity on three endpoints, giving
three one-cycles and thus three components. Signs affect crossing information,
but not these endpoint transpositions. Component count alone does not identify
the isotopy type of a knot or link.
</details>
<a id="section-217-exercise-9-colour-reflections-knot-theory-for-fun-ex-9"></a>
<a id="section-215-exercise-9-colour-reflections-knot-theory-for-fun-ex-9"></a>
### Exercise 9: colour reflections {#knot-theory-for-fun-ex-9}

Prove directly that $R_b(R_b(a))=a$ and
$R_c(R_b(a))=R_{R_c(b)}(R_c(a))$ modulo 3.

<details><summary>Hint 1</summary> Substitute $R_b(a)=2b-a$ twice.
</details>
<details><summary>Hint 2</summary> Expand both sides of the second identity before reducing.
</details>
<details><summary>Solution</summary> The first expression is $2b-(2b-a)=a$. The left side of
the second is $2c-(2b-a)=a-2b+2c$. The right side is
$2(2c-b)-(2c-a)=a-2b+2c$. The identities hold over integers as well as
modulo 3. They provide the reversible local colour rules for moves II and III.
</details>
<a id="section-231-exercise-10-identical-weak-invariants-knot-theory-for-f"></a>
<a id="section-229-exercise-10-identical-weak-invariants-knot-theory-for-f"></a>
### Exercise 10: identical weak invariants {#knot-theory-for-fun-ex-10}

The pairwise linking numbers of the Borromean rings and a three-component unlink
are all zero. What conclusion about equivalence follows from those numbers?

<details><summary>Hint 1</summary> Recall the direction of an invariant obstruction.
</details>
<details><summary>Hint 2</summary> Pairwise data need not detect a relation involving all three components.
</details>
<details><summary>Solution</summary> These numbers do not distinguish the links, so they give no
equivalence conclusion. Borromean rings are not an unlink, although removing
any one component leaves two unlinked circles. A stronger invariant or a
separate topological argument is required to prove that distinction. Equal
values mean only that this particular obstruction is silent.
</details>
<a id="section-246-project-knot-tabulation"></a>
<a id="section-244-project-knot-tabulation"></a>
## Project: knot tabulation

Construct the input diagram as follows: draw the standard three-crossing trefoil (the closure of the two-strand braid $\sigma_1^3$), then add three separate small Reidemeister-I curls on crossing-free arc segments, in disjoint discs meeting no other strands. The resulting diagram has exactly six drawn crossings. Record a drawing before and after each curl is removed. These three inverse moves certify equivalence to the trefoil. Compute its nine three-colourings using the chapter’s invariant to rule out the unknot, which has only three. Distinguish the six crossings in this input diagram from the trefoil’s crossing number three; failure to simplify an arbitrary diagram would not prove minimality.

<a id="section-255-summary"></a>
<a id="section-253-summary"></a>
## Summary

A drawn crossing count depends on the diagram, while crossing number minimizes
over all diagrams. Reidemeister moves provide the local equivalence framework.
Three-colouring gives an elementary nontriviality proof for the trefoil, linking
number detects some two-component entanglement, and braid permutations count
closure components. Keep orientation conventions and the limits of every
invariant explicit.
