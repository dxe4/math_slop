
# Archimedes, Apollonius and Diophantus

The *Elements* is one route through Greek mathematics, not a complete definition of it. Archimedes' surviving works investigate areas, volumes and bounds; Apollonius' *Conics* develops properties of curves cut from cones; Diophantus' *Arithmetica* organises numerical problems with unknown quantities. Their texts survive through different manuscript and editorial histories. This chapter solves one selected problem from each tradition in modern notation and asks what is lost when all three are called simply “algebra.” [MacTutor's Greek literature survey](https://mathshistory.st-andrews.ac.uk/Extras/Rose_literature/) supplies a source-oriented overview of the surviving works, while the individual sources below support the particular claims.

A useful comparison has four parts: what object is under study, what operation is permitted, what result is requested and how the result is warranted. For Archimedes' circle problem, inequalities bind a curved measurement. For Apollonius' parabola, an equality of a square and a rectangle characterises a locus. For Diophantus, a division of a given number is checked by sum and difference. The same present symbol $x$ can help solve all three, but its historical roles are not interchangeable.

## Bounds as mathematical answers

An exact numerical decimal is not the only valuable answer to a measurement problem. A lower and upper bound can be more informative because it states guaranteed limits. The [MAA's study of Archimedes as translated by John Wallis](https://old.maa.org/node/321045) identifies the result in *Measurement of a Circle*: the circumference-to-diameter ratio lies above $3+10/71=223/71$ and below $3+1/7=22/7$. The historical argument uses inscribed and circumscribed polygons; the cited later Latin translation is a witness to a transmission, not an inspected autograph. The result is an inequality, so writing $\pi=22/7$ would replace a strict upper bound by a false equality.

We can compare the rational bounds without decimals. Their difference is $22/7-223/71=(1562-1561)/497=1/497$. For a circle of diameter $d>0$, multiplying preserves the order: $223d/71<C<22d/7$. For $d=7$ this becomes $1561/71<C<22$. That is a modern application of the attested ratio bound. It is especially useful because an upper estimate of 22 alone does not tell how close the circumference must be; the lower bound supplies a controlled interval.

## Worked example 1: Archimedes' circle bound

Take the historical *Measurement of a Circle* bound as stated in the [MAA source study](https://old.maa.org/node/321045), and ask about a diameter of 14. Multiplying both sides by 14 gives $14(223/71)<C<14(22/7)$, so $3122/71<C<44$. Since $3122/71=43+69/71$, the circumference lies strictly between about 43.972 and 44. Our decimal is an explanatory approximation, whereas both rational inequalities are exact consequences of the stated bound. A midpoint estimate would be another modern choice; it would not be Archimedes' asserted exact circumference.

The steps are valid because diameter 14 is positive, so inequality direction does not reverse. If a “diameter” were a negative algebraic variable, the geometric statement would no longer have its intended domain. The problem illustrates a historical technique of enclosing an unknown magnitude by two computable quantities. It also demonstrates how a later edition or scholarly description can transmit a result without giving us every step of the original polygon calculation on this page.

## A curve is not only its graph

[MacTutor's study of Apollonius](https://mathshistory.st-andrews.ac.uk/Strick/apollonius.pdf) identifies *Conics* Book I as developing characteristic properties of the sections. A [Holy Cross primary-source teaching study of Book I proposition 11](https://mathcs.holycross.edu/~little/ReturningToRoots.pdf) presents the parabola case. In modern coordinates a parabola with vertex at the origin and suitable scaling can be written $y^2=px$ for $p>0$. That algebra is a reconstruction of a geometrical square-rectangle relation; it should not be read as an ancient Cartesian graph with x- and y-axes drawn by the author.

The equation says that for each positive $x$ the square on an ordinate of length $|y|$ has area $px$, the area of a rectangle with sides $p$ and $x$. It also admits a reflected negative $y$ value in modern signed coordinates. A source may speak instead of a line segment and a square on it; a nonnegative length and a signed coordinate are different objects. The equation is powerful because it predicts a whole locus, but a historical account must retain the cone and diameter construction in the proposition's setting.

## Worked example 2: Apollonius' parabola property

Use the square-rectangle relation associated with [*Conics* I.11 in the Holy Cross source discussion](https://mathcs.holycross.edu/~little/ReturningToRoots.pdf). For a modern illustrative parameter $p=4$ and abscissa $x=9$, $y^2=4(9)=36$, so the ordinate has geometric length 6. In signed coordinates there are points $(9,6)$ and $(9,-6)$. The check is area: a square of side 6 has area 36, equal to the rectangle of sides 4 and 9. These particular numbers are ours; the source proposition is the historical problem of characterising a parabolic section.

If $x=-9$ while $p>0$, the right side is negative and no real $y$ satisfies the equation. This is a domain fact in the modern representation, not a statement about an ancient negative segment. If $p$ changes, the locus changes its width. Thus a seemingly compact equation records a family of geometrical relations only after we fix units and coordinate conventions. Later analytic geometry will make that translation central, but it does not retroactively turn Apollonius' proof into coordinate algebra.

## An unknown as a numerical tool

[Cal State LA's text and translation of *Arithmetica* Book I](https://web.calstatela.edu/faculty/hmendel/Ancient%20Mathematics/Diophantus/Arithmetica/Diophantus.I.1-6.html) and a [MacTutor source study of Diophantus](https://mathshistory.st-andrews.ac.uk/Strick/diophantus.pdf) identify Book I problem 1: divide a given number into two parts with a given difference. The MacTutor account gives the numerical instance total 100 and difference 40. It is a determinate problem. Later problems in the *Arithmetica* can seek selected rational answers to more open questions, so “Diophantine” in current usage should not be projected uniformly onto every problem in the work.

## Worked example 3: Diophantus I.1

Let the greater part be $u$ and the lesser $v$, with $u+v=100$ and $u-v=40$, following the [MacTutor account's numerical instance](https://mathshistory.st-andrews.ac.uk/Strick/diophantus.pdf). Add the equations to obtain $2u=140$, so $u=70$; then $v=30$. Check both requested properties: $70+30=100$ and $70-30=40$. Another modern method sets the parts as $50+t$ and $50-t$. Their difference is $2t=40$, giving $t=20$ and the same pair. The two methods share an invariant sum but arrange the unknown differently.

For general total $T$ and difference $D$, the solution is $u=(T+D)/2$, $v=(T-D)/2$. If both parts must be positive, we require $T>D>0$; if they must be whole numbers, $T$ and $D$ must have matching parity. These conditions make explicit what our modern answer set assumes. They are not quoted as a list of hypotheses from the selected ancient problem. Mathematical generalisation is welcome when labelled and verified.

## Three mathematical genres

The examples contrast an enclosure, a locus property and a numerical division. A lower and upper bound is not a failed exact answer. A conic's square-rectangle relation is not merely a graphing instruction. A problem with two conditions on two numbers is not automatically a universal symbolic theory. Each source sets a standard of success that our reconstruction must respect. [MacTutor's overview of Archimedes](https://mathshistory.st-andrews.ac.uk/Biographies/Archimedes/) and its [Apollonius account](https://mathshistory.st-andrews.ac.uk/Biographies/Apollonius/) give additional work and transmission context, but the calculations above attach to named propositions.

The history of the texts is also plural. The MAA's Wallis volume is a Latin translation of Archimedes, the Holy Cross study is a modern guide to an Apollonius proposition, and the Cal State LA page is an interpreted presentation of Diophantus. An attribution to the underlying work has to retain this mediation. A different translation might choose different English words for a magnitude or unknown without changing the underlying numerical check. Conversely, an editor's modern symbol can make a proof look more like present algebra than the source presentation warrants.

When comparing chapters, do not make a single path from “geometry” to “algebra.” The three traditions coexist in the surviving Greek corpus and answer different questions. A later mathematician may use more than one of them. A historically useful claim says how a particular operation appears in a particular witness and what later reinterpretation does to it. The next chapter moves to Chinese and Indian records, where algorithm, commentary, positional notation and astronomical computation create other routes through elementary mathematics.

## Reading the mathematical result against its witness

Before using a named result, identify what has actually been consulted. The Wallis volume discussed by the MAA is a later Latin translation containing Archimedes material; its image is evidence for that printed edition. The Holy Cross account identifies a selected Apollonius proposition and explains its geometrical relation; our numerical graph points are a teaching adaptation. The Diophantus examples are read through a modern source presentation that provides an ancient problem and its numbers; our two-letter system belongs to our solution. None of these reading routes is identical to viewing an ancient author's working draft. That limit does not make the numerical work disposable. It tells us how to cite it honestly. Keep a short ledger with the exact proposition, consulted version, numerical data, operation and open uncertainty. Doing so lets another reader verify the calculation and challenge an overlarge historical inference separately.

## Exercises

### Exercise 1
<a id="archimedes-apollonius-diophantus-ex-1"></a>

Compute the exact width of Archimedes’ cited rational interval for the circle ratio.

<details><summary>Hint 1</summary>

Put fractions over a common denominator.

</details>
<details><summary>Hint 2</summary>

Use denominator $7\cdot71$.

</details>
<details><summary>Solution</summary>

$22/7-223/71=(22\cdot71-223\cdot7)/497=(1562-1561)/497=1/497$. This is the width between bounds, not an exact value of the circle ratio.

</details>

### Exercise 2
<a id="archimedes-apollonius-diophantus-ex-2"></a>

For a diameter of 7, state the exact circumference interval implied by the cited bound.

<details><summary>Hint 1</summary>

Multiply by the positive diameter.

</details>
<details><summary>Hint 2</summary>

Keep both inequalities strict.

</details>
<details><summary>Solution</summary>

$7(223/71)<C<7(22/7)$ gives $1561/71<C<22$. Positivity of 7 preserves inequality order. The result encloses C rather than claiming it equals either endpoint.

</details>

### Exercise 3
<a id="archimedes-apollonius-diophantus-ex-3"></a>

Why is the claim $\pi=22/7$ a misreading of the cited Archimedes result?

<details><summary>Hint 1</summary>

Read the inequality.

</details>
<details><summary>Hint 2</summary>

Distinguish upper bound from equality.

</details>
<details><summary>Solution</summary>

The source-oriented MAA account gives the ratio as strictly less than $22/7$ and strictly greater than $223/71$. Setting it equal to the upper endpoint contradicts that bound. A decimal approximation must also be labelled as such.

</details>

### Exercise 4
<a id="archimedes-apollonius-diophantus-ex-4"></a>

In the modern parabola relation $y^2=4x$, find the geometric ordinate length at $x=16$.

<details><summary>Hint 1</summary>

Calculate the rectangle area.

</details>
<details><summary>Hint 2</summary>

Take the nonnegative square root for length.

</details>
<details><summary>Solution</summary>

$y^2=4(16)=64$, so the geometric ordinate length is 8. Signed coordinate points have $y=8$ or $y=-8$. The numerical choice is ours, while the square-rectangle property is the historical source proposition.

</details>

### Exercise 5
<a id="archimedes-apollonius-diophantus-ex-5"></a>

For $y^2=4x$, explain why $x=-1$ gives no real point and why that is not a claim about Apollonius using negative segments.

<details><summary>Hint 1</summary>

A real square is nonnegative.

</details>
<details><summary>Hint 2</summary>

Compare it with the right side.

</details>
<details><summary>Solution</summary>

$y^2=-4$ has no real solution because every real square is nonnegative. This is a domain consequence of our signed-coordinate reconstruction; the ancient geometric segment in the cited proposition is not thereby assigned a negative length.

</details>

### Exercise 6
<a id="archimedes-apollonius-diophantus-ex-6"></a>

Solve a modern variation of Diophantus I.1 with total 84 and positive difference 18.

<details><summary>Hint 1</summary>

Add sum and difference.

</details>
<details><summary>Hint 2</summary>

Then check both conditions.

</details>
<details><summary>Solution</summary>

The greater number is $(84+18)/2=51$ and the lesser $(84-18)/2=33$. They sum to 84 and differ by 18. The changed numbers are our practice version, not an additional cited ancient instance.

</details>

### Exercise 7
<a id="archimedes-apollonius-diophantus-ex-7"></a>

For general total $T$ and difference $D$, derive both parts and the condition for two positive parts.

<details><summary>Hint 1</summary>

Add and subtract the two equations.

</details>
<details><summary>Hint 2</summary>

Inspect the smaller part.

</details>
<details><summary>Solution</summary>

$u+v=T$, $u-v=D$ imply $u=(T+D)/2$, $v=(T-D)/2$. For $D>0$, both are positive exactly when $T>D$. If whole numbers are required, T and D must also have the same parity.

</details>

### Exercise 8
<a id="archimedes-apollonius-diophantus-ex-8"></a>

A learner treats the modern points $(9,6)$ and $(9,-6)$ as two lengths in Apollonius’ source. Repair the wording.

<details><summary>Hint 1</summary>

Distinguish signed coordinate from length.

</details>
<details><summary>Hint 2</summary>

Use the single nonnegative magnitude.

</details>
<details><summary>Solution</summary>

Our modern equation gives two reflected signed-coordinate points. The corresponding geometric ordinate length is 6. The source proposition uses a relation of geometrical magnitudes; it does not thereby describe a segment of length negative six.

</details>

### Exercise 9
<a id="archimedes-apollonius-diophantus-ex-9"></a>

Identify the three different kinds of answer in the chapter’s worked examples.

<details><summary>Hint 1</summary>

Think interval, locus and pair.

</details>
<details><summary>Hint 2</summary>

Name each source problem.

</details>
<details><summary>Solution</summary>

The Archimedes example gives strict numerical bounds on a circle measurement. The Apollonius example checks a square-rectangle property of a parabolic locus. The Diophantus example finds two numbers satisfying a given sum and difference. Their warrants and domains differ.

</details>

### Exercise 10
<a id="archimedes-apollonius-diophantus-ex-10"></a>

Why can a modern solution to Diophantus I.1 not by itself prove that the source used two simultaneous equations?

<details><summary>Hint 1</summary>

Separate reconstruction from notation in the witness.

</details>
<details><summary>Hint 2</summary>

Name the source layer read.

</details>
<details><summary>Solution</summary>

Our variables u and v and paired equations correctly solve the stated numerical relation. The selected source reaches us through translations and source studies with its own expression of an unknown. To claim its author wrote our simultaneous-equation system would require evidence in the source text, not just an equivalent modern calculation.

</details>

## Summary

The three selected Greek works ask for bounds, a conic property and a number division. Their modern algebra is useful because it lets us check each relation and its domain. It remains a reconstruction of distinct geometrical and arithmetical sources, not proof that the sources shared our notation or aims. Chapter 7 considers Chinese and Indian problems with the same attention to witness and method.
