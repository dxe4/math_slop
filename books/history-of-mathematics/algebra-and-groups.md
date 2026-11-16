
# Algebra and Groups: Galois to Noether

Equations remained central to nineteenth-century algebra, but attention increasingly turned to the operations that preserve their relations. Permuting roots, composing transformations and studying sets stable under algebraic operations can reveal a structure not visible from one numerical answer. This chapter offers three L2-sized windows onto that shift: a root-symmetry question associated with Galois, composition in Cayley's matrix memoir, and a small ideal-chain problem inspired by Noether. The particular numbers and matrices are modern teaching adaptations. The historical questions and source attributions come from named works and studies.

[MacTutor's Galois source discussion](https://mathshistory.st-andrews.ac.uk/Extras/Neumann_Peter_books/) distinguishes manuscript, later copy and print; the [Galois biography](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) identifies the equation-solvability problem. [Cayley's original 1858 memoir](https://upload.wikimedia.org/wikipedia/commons/1/1a/A_Memoir_on_the_Theory_of_Matrices_%28IA_jstor-108649%29.pdf#page=4) gives a direct printed witness for composition and polynomial relations, as documented in the [advanced history course's source card](../../course-texts/atlas-history-culture-advanced.md). [MacTutor's Noether biography](https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/) identifies her 1921 ideal-theory work and its chain condition. These sources do not make our elementary calculations literal extracts from the papers.

## A symmetry of an equation

Suppose a polynomial has distinct roots $r_1,r_2,r_3$. Exchanging labels does not change a symmetric expression such as $r_1+r_2+r_3$ or $r_1r_2r_3$. But a labelled expression such as $r_1-r_2$ does change. For a particular polynomial, not every permutation necessarily preserves all algebraic relations among its roots and coefficients. Galois' question about solvability by radicals depends on the allowed root symmetries, not simply the fact that any three objects can be relabelled. [MacTutor's history of Galois theory](https://mathshistory.st-andrews.ac.uk/Projects/Brunk/chapter-3/) gives the historical equation-centred setting; a full Galois correspondence is beyond this chapter's school preparation.

A **group** in modern terms is a set of operations closed under composition, with an identity and inverses, where composition is associative. The six permutations of three distinct labels form a group. This definition is ours; nineteenth-century texts did not all use it in the same abstract form. It gives a precise way to explain why a collection of substitutions can itself become the object of study.

## Worked example 1: a cubic and its root permutations

Take the modern illustrative cubic $p(x)=x^3-6x^2+11x-6=(x-1)(x-2)(x-3)$. Its roots are 1, 2 and 3. Their sum is 6, pairwise-product sum is 11, and product is 6; all six permutations preserve those three symmetric values. For instance exchanging labels 1 and 2 changes the ordered triple $(1,2,3)$ to $(2,1,3)$ while leaving $1+2+3=6$ and $1\cdot2\cdot3=6$. Composition matters: swapping 1 with 2 and then 2 with 3 is generally not the same as reversing the order. The source problem associated with [Galois' equation studies](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) asks which substitutions preserve the relevant algebraic information and what that implies for solving equations. Our split cubic is only an entry example; over the rational coefficients it has all roots already rational, so its actual field automorphism group is trivial. We do not claim it has Galois group $S_3$.

The last qualification is essential. A permutation of formal labels is not automatically an automorphism of a field extension. In this split example, an automorphism fixing rational numbers must fix 1, 2 and 3 individually. A more advanced example needs an irreducible polynomial and a careful definition of the coefficient field. The elementary example teaches symmetric expressions and composition without pretending to prove the general solvability theorem.

## Rectangular arrays and square matrices

[J. J. Sylvester's collected-paper witness](https://rcin.org.pl/Content/113694/PDF/WA35_138834_11371-1_Art25.pdf#page=6) describes selecting square subarrays from an oblong array for determinants. [Cayley's 1858 memoir](https://upload.wikimedia.org/wikipedia/commons/1/1a/A_Memoir_on_the_Theory_of_Matrices_%28IA_jstor-108649%29.pdf#page=4) treats square matrices as objects to compose and, when possible, invert. The [advanced history source card](../../course-texts/atlas-history-culture-advanced.md) records the selected passages and warns that Cayley's word “convertible” in one place concerns changing factor order, not the existence of an inverse. These are distinct practices, and a shared rectangular layout does not prove one simply replaced the other.

## Worked example 2: Cayley-style composition

Let $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$. In our column-vector convention, $AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ while $BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}$. Thus order matters. The matrices are our small example of the composition question in [Cayley's memoir §§11–18](https://upload.wikimedia.org/wikipedia/commons/1/1a/A_Memoir_on_the_Theory_of_Matrices_%28IA_jstor-108649%29.pdf#page=4), not reported numerical arrays from that page.

Both $A$ and $B$ have determinant 1 and inverses, but that fact does not make $AB=BA$. Inverses answer whether an operation can be undone; commutation asks whether two orders produce the same result. Applying $AB$ and $BA$ to $(1,0)^T$ gives $(2,1)^T$ and $(1,1)^T$, respectively, an independent check of the difference. The example shows why a notation for a whole array can support questions about composition that are not merely shorthand for solving one system.

## Finiteness as a structural condition

[MacTutor's account of Noether's 1921 *Idealtheorie in Ringbereichen*](https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/) links ideal decomposition with an ascending-chain condition. An **ideal** of a commutative ring is an additive subgroup of the ring that is closed under multiplication by any ring element. An ascending chain $I_1\subseteq I_2\subseteq\cdots$ **stabilises** if some $N$ satisfies $I_n=I_N$ for all $n\ge N$. These modern definitions let us solve a very small case without pretending that the full historical theorem is elementary.

## Worked example 3: ideals of whole numbers

For each positive integer $d$, the multiples $d\mathbb Z$ form an ideal of $\mathbb Z$: sums of multiples and integer multiples remain multiples. Consider $8\mathbb Z\subset 4\mathbb Z\subset 2\mathbb Z\subset\mathbb Z$. The inclusions are strict because 4 is not a multiple of 8, 2 is not a multiple of 4, and 1 is not a multiple of 2. The chain then stops at $\mathbb Z$. More generally every ideal of $\mathbb Z$ is $d\mathbb Z$ for some $d\ge0$: if the ideal has a positive member, choose the least positive $d$; division with remainder shows every member is a multiple of $d$, or the smaller positive remainder would contradict minimality.

Why must an ascending chain of ideals of $\mathbb Z$ stabilise? Write each nonzero term as $d_n\mathbb Z$. Inclusion $d_n\mathbb Z\subseteq d_{n+1}\mathbb Z$ means $d_{n+1}$ divides $d_n$, so the positive generators can decrease only finitely many times before becoming constant. The zero ideal may occur first and then be left once. This is a complete elementary proof for $\mathbb Z$, a modern example of the finiteness question highlighted by [Noether's source record](https://mathshistory.st-andrews.ac.uk/Strick/noether_emmy.pdf). It is not a proof of her general decomposition theorem for arbitrary rings.

## A historical change with limits

Root substitutions, matrix composition and ideal chains are three ways to study operations or collections rather than only final numbers. But the subjects have different original questions. Galois considered equations and radical solvability; Sylvester and Cayley worked with determinants and arrays in changing ways; Noether's ideal theory asks structural questions of rings. A claim that one “invented abstract algebra” would hide predecessors, distinct contributions and later reinterpretation. [MacTutor's Galois publication history](https://mathshistory.st-andrews.ac.uk/Extras/Neumann_Peter_papers/) distinguishes rejected manuscript, later publication and subsequent reception, while Cayley's original journal records received and read dates distinct from print.

The examples also warn against a common mathematical shortcut. All permutations of labels preserve a symmetric sum, but not all are field automorphisms. Two matrices can both be invertible without commuting. A chain can stabilise in $\mathbb Z$ without every possible ring satisfying the same condition. Each theorem needs its domain. The next chapter asks how sets and formal languages were used to state such domains and whether every desired mathematical statement can be proved within a chosen system.

## A change in what is held fixed

In a polynomial equation, the coefficients are treated as given while the roots are sought. A root substitution is relevant only if it respects the algebraic relations over the chosen coefficient field. In the split cubic, all roots are already rational, so fixing the rationals leaves no nontrivial root movement. A different irreducible cubic can have a nontrivial group, but establishing it requires more than noticing three possible labels. This is why the example states both a large combinatorial permutation set and a trivial field-automorphism group. The distinction is not a technical afterthought: it is the bridge from a puzzle about rearranging symbols to the historical equation-solvability question. The source-linked Galois material concerns that deeper bridge; our chapter teaches only its first safe steps.

## An operation can be the subject of arithmetic

Multiplying the two matrices does not simply package four separate scalar products. It represents composition of two linear actions on vectors. If A is applied first and B second under a column-vector convention, the resulting matrix is BA. Reversing the action order produces AB. The difference has a visible effect on $(1,0)^T$, so noncommutation is not a typographical issue. Cayley's memoir explores composition and inverse at a more general level; our two small shears make the order dependence tangible. Sylvester's rectangular array, by contrast, draws attention to square selections and their determinants. Both practices use entries arranged in rows and columns, but what is held fixed and what operation is asked for differs.

## Finiteness has a proof obligation

The integer-ideal example may look like a matter of listing divisors, but an ascending chain can have arbitrarily many terms before it stops. The proof uses the least positive generator to reduce each nonzero ideal to $d\mathbb Z$. An inclusion forces the next positive generator to divide the previous one; a strict inclusion forces it to be strictly smaller. There cannot be infinitely many strict decreases among positive integers. This proves stabilisation for every such chain, not only the displayed chain of four ideals. Noether's historical theorem concerns general ring conditions and decomposition, so the elementary proof is a bounded model of the question rather than a substitute for her paper.

## Exercises

The following questions test what an operation preserves. Root labels can be permuted on paper, but a field automorphism must also preserve algebraic relations and the chosen coefficient field. Matrix multiplication packages the composition of linear maps, so its order matters even if both factors have an inverse. Inclusion among integer ideals reverses the direction of divisibility among their positive generators. These three facts are easy to conflate if one remembers only the names “group,” “matrix” and “ideal.” Work through the concrete object first, then name the invariant or condition that justifies the general statement. That habit prevents a modern structural slogan from being attributed to an earlier source without evidence.

### Exercise 1
<a id="algebra-and-groups-ex-1"></a>

Factor the illustrative cubic and list its roots.

<details><summary>Hint 1</summary>

Try 1, 2 and 3.

</details>
<details><summary>Hint 2</summary>

Multiply the linear factors.

</details>
<details><summary>Solution</summary>

$p(x)=(x-1)(x-2)(x-3)$ has roots 1, 2 and 3. Multiplication gives $x^3-6x^2+11x-6$. This is our teaching cubic, not a quoted Galois numerical example.

</details>

### Exercise 2
<a id="algebra-and-groups-ex-2"></a>

State three expressions in the cubic roots that every relabelling preserves.

<details><summary>Hint 1</summary>

Use coefficients of the product.

</details>
<details><summary>Hint 2</summary>

Consider sum, pairwise products and total product.

</details>
<details><summary>Solution</summary>

The sum is 6, the sum of pairwise products is 11, and the product is 6. Every permutation preserves these symmetric expressions. A labelled difference such as $r_1-r_2$ generally changes.

</details>

### Exercise 3
<a id="algebra-and-groups-ex-3"></a>

Explain why the split cubic’s six label permutations are not its Galois group over $\mathbb Q$.

<details><summary>Hint 1</summary>

All roots are rational already.

</details>
<details><summary>Hint 2</summary>

An automorphism fixing Q fixes each root.

</details>
<details><summary>Solution</summary>

A field automorphism over $\mathbb Q$ fixes every rational number, including roots 1, 2 and 3. Hence only the identity acts on the splitting field $\mathbb Q$. Formal permutations of labels are a broader set than the actual Galois group in this example.

</details>

### Exercise 4
<a id="algebra-and-groups-ex-4"></a>

Compute $AB$ for the chapter’s matrices.

<details><summary>Hint 1</summary>

Use row-by-column products.

</details>
<details><summary>Hint 2</summary>

Keep the multiplication order.

</details>
<details><summary>Solution</summary>

$AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}$. Its first entry is $1\cdot1+1\cdot1=2$. The array illustrates composition of transformations in a modern convention.

</details>

### Exercise 5
<a id="algebra-and-groups-ex-5"></a>

Compute $BA$ and show it differs from $AB$ on $(1,0)^T$.

<details><summary>Hint 1</summary>

Reverse the matrix order.

</details>
<details><summary>Hint 2</summary>

Apply both products to the first basis vector.

</details>
<details><summary>Solution</summary>

$BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}$. It sends $(1,0)^T$ to $(1,1)^T$, while $AB$ sends it to $(2,1)^T$. Thus the operations do not commute.

</details>

### Exercise 6
<a id="algebra-and-groups-ex-6"></a>

Why do determinants of one not imply two matrices commute?

<details><summary>Hint 1</summary>

Invertibility and commutation ask different questions.

</details>
<details><summary>Hint 2</summary>

Use the example.

</details>
<details><summary>Solution</summary>

Both example matrices have determinant 1 and therefore inverses, but their products in opposite orders differ. Having an undo operation does not make every pair of operations order-independent.

</details>

### Exercise 7
<a id="algebra-and-groups-ex-7"></a>

Show that $6\mathbb Z$ is an ideal of $\mathbb Z$.

<details><summary>Hint 1</summary>

Check sums and integer multiples.

</details>
<details><summary>Hint 2</summary>

Use divisibility by six.

</details>
<details><summary>Solution</summary>

If $6a$ and $6b$ are in the set, their sum is $6(a+b)$; if $k\in\mathbb Z$, then $k(6a)=6(ka)$. Both remain multiples of six. The set also contains zero, so it is an ideal.

</details>

### Exercise 8
<a id="algebra-and-groups-ex-8"></a>

Determine whether $12\mathbb Z\subseteq6\mathbb Z$ and whether the reverse holds.

<details><summary>Hint 1</summary>

Test the generator.

</details>
<details><summary>Hint 2</summary>

Every multiple of twelve is a multiple of six.

</details>
<details><summary>Solution</summary>

$12\mathbb Z\subseteq6\mathbb Z$ because $12k=6(2k)$. The reverse fails: 6 belongs to $6\mathbb Z$ but not $12\mathbb Z$. The inclusion direction reverses the size of positive generators.

</details>

### Exercise 9
<a id="algebra-and-groups-ex-9"></a>

Prove every nonzero ideal of $\mathbb Z$ has a least positive member and is generated by it.

<details><summary>Hint 1</summary>

Use well ordering on positive members.

</details>
<details><summary>Hint 2</summary>

Divide any member by the least positive one.

</details>
<details><summary>Solution</summary>

A nonzero ideal contains a positive integer after taking a sign, so its positive members have a least d. For any a in the ideal, write $a=qd+r$ with $0\le r<d$. Closure makes $r=a-qd$ lie in the ideal, so minimality forces r=0. Hence every a is a multiple of d and the ideal is $d\mathbb Z$.

</details>

### Exercise 10
<a id="algebra-and-groups-ex-10"></a>

A student says Noether’s 1921 theorem is proved by the four-term chain $8\mathbb Z\subset4\mathbb Z\subset2\mathbb Z\subset\mathbb Z$. Repair the claim.

<details><summary>Hint 1</summary>

An example is not a general theorem.

</details>
<details><summary>Hint 2</summary>

State what the chapter actually proves.

</details>
<details><summary>Solution</summary>

The displayed chain illustrates stabilisation. The least-positive-generator argument proves the ascending-chain condition for ideals of $\mathbb Z$. Noether’s general ideal-theory results concern a much broader class of rings and are cited, not proved by this four-term example.

</details>

## Summary

Root permutations, matrix composition and ideal chains make operations and stable collections into mathematical objects. The elementary examples demonstrate symmetric expressions, noncommuting transformations and a finiteness theorem for integer ideals while explicitly stopping short of the full historical theories. Chapter 14 examines sets, formal proof and limits on what a fixed system can establish.
