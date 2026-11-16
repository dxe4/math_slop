
# The Elements and the Idea of Proof

A proof answers a question different from “does the result work in these examples?” It explains why a conclusion follows from stated premises for every object in its domain. A historical proof is also a text: its diagrams, definitions, earlier propositions and editorial transmission affect how we read it. The *Elements* gives a sustained case. [David Joyce's Clark University edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/bookI.html) displays Book I's definitions, postulates, common notions and propositions; [MacTutor's Greek source study](https://mathshistory.st-andrews.ac.uk/HistTopics/Greek_sources_1/) explains why the version now read is mediated by copying and editing. This chapter studies three genuine *Elements* tasks: I.1, VII.2 and IX.20.

The mathematical preparation is elementary geometry, divisibility and multiplication of whole numbers. The historical preparation is the distinction between a source proposition and our modern restatement. We will prove some modern versions fully, indicate where their domains differ from the selected proposition, and avoid assigning a new notation to the older witness. The purpose is not to declare the *Elements* a perfect formal system. It is to see how a long proof sequence can make warrants visible and where a modern reader must add a premise.

## Premises have jobs

The [Book I postulates in Joyce's edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/bookI.html) permit such acts as drawing a straight line between two points and describing a circle with a given centre and radius. Its common notions articulate relations of equality, such as equality to the same thing. These are not interchangeable roles. A postulate licenses an operation or property within the geometry; a common notion lets a proof pass from some equalities to another. A definition states how a term is being used. The order of propositions gives a later proof access to earlier established results.

For a modern reader, the easiest error is to replace an inferential step with a picture. A diagram can reveal a conjecture or track named points, but it is not a universal proof unless the argument explains why every permitted configuration has the displayed property. The second error is to supply a true modern theorem without saying it is new. If a selected source assumes two circles meet, coordinates can prove that in the usual Euclidean plane; the coordinates are a supplement, not a quotation. The third error is to use a conclusion outside its domain. A proposition about positive whole numbers cannot be applied to arbitrary real numbers merely because its modern algebraic shape looks familiar.

## Worked example 1: Elements I.1 and a missing existence question

[Elements I.1 in Heath's 1908 English edition](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php) constructs an equilateral triangle on a finite straight line $AB$. The circle with centre $A$ and radius $AB$ and the circle with centre $B$ and that radius are drawn. At their common off-line point $C$, the first circle gives $AC=AB$ and the second $BC=BA=AB$. Equality to the same segment yields all three equal sides. The equalities prove the property conditional on $C$ being available. [Lardner's 1855 §§57–58](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookIProp01_Lardner1855.php) discusses circle intersection explicitly in its local presentation.

Our modern existence supplement lets $A=(0,0)$ and $B=(d,0)$ with $d>0$. A common point satisfies $x^2+y^2=d^2$ and $(x-d)^2+y^2=d^2$. Subtraction gives $x=d/2$, then $y^2=3d^2/4>0$. Thus two noncollinear common points exist in the Euclidean plane. This proof uses real coordinates and a square root. It is logically helpful while historically separate. It also shows why the condition $d>0$ matters: a zero-length “base” would not give the required nondegenerate triangle.

## Worked example 2: Elements VII.2 and the greatest common measure

[Elements VII.2 in Joyce's edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookVII/propVII2.html) seeks the greatest common measure of two given numbers that are not relatively prime. In modern notation choose 84 and 30. Division gives $84=2(30)+24$, $30=1(24)+6$, and $24=4(6)$. The last nonzero remainder is 6. Why is it the greatest common divisor? A number divides 84 and 30 if and only if it divides 30 and $84-2(30)=24$. The same argument passes from $(30,24)$ to $(24,6)$. Every common divisor of the original pair divides 6, while 6 itself divides both 84 and 30. Therefore no common divisor can exceed 6, and 6 is the greatest.

The numerical divisions are a compressed form of repeated subtraction. The proof relies on a stable invariant: replacing a pair by the smaller number and the remainder preserves their common divisors. Joyce's commentary on VII.2 notes the source proposition's domain restriction and its treatment of the unit. Our modern algorithm typically allows relatively prime inputs and returns 1; the selected VII.2 concerns a pair not relatively prime. Describing our general routine as literally the source proposition would erase that domain difference. The example teaches how an algorithm and proof of its invariant fit together.

## Worked example 3: Elements IX.20 and a finite list of primes

[Elements IX.20 in Joyce's edition](https://mathcs.clarku.edu/~djoyce/java/elements/bookIX/propIX20.html) argues that prime numbers exceed any proposed finite collection. A modern worked instance starts with primes 2, 3 and 5. Their product is 30; add one to get 31. None of 2, 3 or 5 divides 31, because division by any of them leaves remainder one. In this instance 31 is itself prime. The general proof must not assume that the product-plus-one number is always prime. It might be composite, but any prime factor of it is outside the proposed list.

Here is the complete modern argument. Suppose a finite list $p_1,\ldots,p_n$ contains all primes. Form $N=p_1\cdots p_n+1$. Since $N>1$, it has a prime divisor $q$. If $q$ were one of the $p_i$, then it would divide both $N$ and the product $p_1\cdots p_n$, hence their difference 1. No prime divides 1. Thus $q$ is not on the list, contradicting its supposed completeness. The proof works for every finite list, not just the three numerical primes above. Joyce's selected IX.20 presentation has its own number-theoretic vocabulary and illustrative finite choice; our indexed notation is a general modern reconstruction.

## Counterexamples keep the proof honest

A proof can fail because a step is false even if its final conclusion happens to be true. For instance, “$N$ is prime because no listed prime divides it” is invalid: $N$ could have factors not on the list. The corrected IX.20 argument asks only for *some* prime divisor outside the list. This is a useful exercise in proving exactly what is needed. Likewise, in VII.2 a sequence of successful divisions alone does not prove the answer is greatest; the invariant about all common divisors does that work. In I.1, equal radii alone do not supply a common point. Each proof has a distinct obligation.

A **counterexample** refutes a universal claim by exhibiting a case that satisfies its premises and not its conclusion. It does not, by itself, establish what an older author believed. If a modern paraphrase says every product-plus-one is prime, $2\cdot3\cdot5\cdot7\cdot11\cdot13+1=30031=59\cdot509$ refutes the paraphrase. It is not a refutation of the actual IX.20 strategy, which needs a new prime factor, not primality of the whole number. This distinction between a source claim and an overstrong paraphrase is central to historical reading.

## The text and its later readers

[MacTutor's Euclid biography](https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/) records scant secure personal detail, while the *Elements* survives as a transmitted mathematical collection. [Joyce's notes on the Book I material](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/defI1.html) caution that some parts of the received definitions and surrounding framework have an editorial history. We therefore cite the edition we read when discussing a particular line and avoid claiming that every present heading is recoverable from an autograph. The mathematics remains valuable even where textual genealogy is open.

Later proof standards can also expose implicit assumptions without erasing the achievement of the earlier work. A modern formalisation of plane geometry may specify incidence and continuity axioms in detail. That can help locate where a circle-intersection step gets its warrant. It would be anachronistic to call the historical argument a modern formalisation that merely omitted notation. Conversely, saying that an omitted axiom was “obvious” can hide a genuine dependency. A fair comparison states both the older local argument and the modern supplement.

The three tasks span geometry and arithmetic. This matters because “Euclidean proof” is not just a way of presenting triangles. Its methods include construction, equality, divisibility, contradiction and generality over a chosen domain. It is easy to remember the 3-4-5 triangle or the number 31; it takes more work to remember which premise makes a result universal. Try the exercises by writing the warrant beside each step. The next chapter follows other Greek works, where area, conics and number problems invite different forms of reasoning.

## Exercises

### Exercise 1
<a id="elements-and-the-idea-of-proof-ex-1"></a>

In I.1, list the premise that permits each of $AC=AB$ and $BC=AB$.

<details><summary>Hint 1</summary>

Each equality comes from a circle.

</details>
<details><summary>Hint 2</summary>

Name its centre and radius.

</details>
<details><summary>Solution</summary>

$AC=AB$ follows because C and B lie on the circle centred at A with radius $AB$. $BC=BA=AB$ follows from the circle centred at B with radius $BA$. The conclusion still depends on an off-line intersection C existing.

</details>

### Exercise 2
<a id="elements-and-the-idea-of-proof-ex-2"></a>

Use coordinates to show the two circles in I.1 intersect when the base length is 4.

<details><summary>Hint 1</summary>

Place centres at $(0,0)$ and $(4,0)$.

</details>
<details><summary>Hint 2</summary>

Subtract squared-distance equations.

</details>
<details><summary>Solution</summary>

Subtraction gives $x=2$ and then $y^2=16-4=12$. Thus $C=(2,\pm2\sqrt3)$ are common points, each off the base. The calculation is a modern existence supplement to the source construction.

</details>

### Exercise 3
<a id="elements-and-the-idea-of-proof-ex-3"></a>

Run repeated division on 91 and 35 and prove the last nonzero remainder is their gcd.

<details><summary>Hint 1</summary>

Find two remainders.

</details>
<details><summary>Hint 2</summary>

Preserve the common-divisor set at each step.

</details>
<details><summary>Solution</summary>

$91=2(35)+21$, $35=1(21)+14$, and $21=1(14)+7$, while $14=2(7)$. Every common divisor is preserved under replacing a pair by smaller number and remainder; 7 divides the original pair. Hence the gcd is 7.

</details>

### Exercise 4
<a id="elements-and-the-idea-of-proof-ex-4"></a>

Why does the last nonzero remainder in the modern Euclidean algorithm divide both original inputs?

<details><summary>Hint 1</summary>

Work backwards through equations.

</details>
<details><summary>Hint 2</summary>

Use divisibility of a linear combination.

</details>
<details><summary>Solution</summary>

The last nonzero remainder divides the preceding one by the final exact division. If it divides both entries of one pair, each preceding equation shows it divides the earlier entry too. Repeating backward reaches both original inputs. This is the divisibility part of the algorithm’s invariant.

</details>

### Exercise 5
<a id="elements-and-the-idea-of-proof-ex-5"></a>

Explain why applying the selected VII.2 wording to the relatively prime pair 8 and 15 requires a domain note.

<details><summary>Hint 1</summary>

Read the proposition’s hypothesis.

</details>
<details><summary>Hint 2</summary>

State the modern result separately.

</details>
<details><summary>Solution</summary>

VII.2 is stated for two numbers not relatively prime. The modern algorithm on 8 and 15 returns gcd 1, but that is a broader formulation than the selected source proposition. A historical account should say it extends the domain instead of silently treating the two statements as identical.

</details>

### Exercise 6
<a id="elements-and-the-idea-of-proof-ex-6"></a>

Start with primes 2, 3 and 7. Form product plus one and test divisibility by the three listed primes.

<details><summary>Hint 1</summary>

Multiply, then add one.

</details>
<details><summary>Hint 2</summary>

Subtract the product after dividing by a listed prime.

</details>
<details><summary>Solution</summary>

$N=2\cdot3\cdot7+1=43$. Division by 2, 3 or 7 leaves remainder 1 because each divides 42. Here 43 is prime, but the general IX.20 proof requires only that a prime factor of N lie outside the list.

</details>

### Exercise 7
<a id="elements-and-the-idea-of-proof-ex-7"></a>

Give a composite example of product-plus-one and explain why it does not harm IX.20.

<details><summary>Hint 1</summary>

Use the six primes stated in the chapter.

</details>
<details><summary>Hint 2</summary>

Factor 30031.

</details>
<details><summary>Solution</summary>

$2\cdot3\cdot5\cdot7\cdot11\cdot13+1=30031=59\cdot509$. The number is composite, yet 59 and 509 are outside the original six-prime list. The contradiction needs a new prime factor, not a prime product-plus-one.

</details>

### Exercise 8
<a id="elements-and-the-idea-of-proof-ex-8"></a>

Why must $N>1$ in the modern IX.20 argument?

<details><summary>Hint 1</summary>

Find what the next step invokes.

</details>
<details><summary>Hint 2</summary>

Every integer above one has a prime divisor.

</details>
<details><summary>Solution</summary>

The proof invokes a prime divisor of N. That existence applies to integers greater than one. Since the finite product of positive primes is at least two, $N$ is greater than one, so the step is justified.

</details>

### Exercise 9
<a id="elements-and-the-idea-of-proof-ex-9"></a>

Classify the statement “Lardner explicitly discusses I.1 intersection in §§57–58” and the coordinate proof that intersection occurs.

<details><summary>Hint 1</summary>

One is an edition observation.

</details>
<details><summary>Hint 2</summary>

The other uses our coordinate system.

</details>
<details><summary>Solution</summary>

The first is a bounded observation about the inspected Lardner English edition. The coordinate calculation is our modern mathematical reconstruction. It cannot be quoted as a line from the edition or used alone to establish a manuscript history.

</details>

### Exercise 10
<a id="elements-and-the-idea-of-proof-ex-10"></a>

A student argues that examples 84,30 and 2,3,5 prove VII.2 and IX.20 for all inputs. Repair the argument.

<details><summary>Hint 1</summary>

Find the universal warrants.

</details>
<details><summary>Hint 2</summary>

Use an invariant and a contradiction.

</details>
<details><summary>Solution</summary>

The 84,30 calculation illustrates VII.2; the common-divisor invariant proves why every permitted division step preserves the gcd. The 2,3,5 calculation illustrates IX.20; the product-plus-one contradiction applies to any finite list. Finite examples do not by themselves establish those universal claims.

</details>

## Summary

The *Elements* joins permitted constructions, equality rules and earlier propositions into proofs. I.1 needs an intersection, VII.2 needs a common-divisor invariant, and IX.20 needs a prime factor outside every proposed finite list. A modern proof can clarify an implicit dependency while remaining explicitly separate from the selected historical edition. Chapter 6 turns to other Greek mathematical genres and their varied questions.
