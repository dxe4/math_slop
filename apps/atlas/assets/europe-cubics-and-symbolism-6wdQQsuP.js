var e=`---
parent_id: book-history-of-mathematics
chapter_id: europe-cubics-and-symbolism
title: "Europe 1100–1600: Cubics and Symbolism"
level: undergraduate
license: CC BY-SA 4.0
---

# Europe 1100–1600: Cubics and Symbolism

Mathematics in medieval and Renaissance Europe moved through manuscripts, translations, commercial calculation, contests and print. One numerical method could be represented as a verbal rule, a column of figures or a line of symbols. This chapter follows three attested problems: the rabbit count in Leonardo of Pisa's *Liber abaci*, a cubic in Cardano's *Ars magna*, and Bombelli's striking cubic whose formal solution passes through square roots of negative numbers. The problems show how notation changes a calculation without giving us a simple story in which symbols replace words all at once.

The [MAA's source feature on *Liber abaci*](https://old.maa.org/node/1734149) identifies its numeral teaching and rabbit page; another [MAA account of its editions](https://old.maa.org/press/periodicals/convergence/fibonaccis-liber-abaci) distinguishes original and revised publication. The [MAA's Cardano source packet](https://old.maa.org/sites/default/files/images/upload_library/46/Berlinghoff_Gouvea_Pathways/Berlinghoff_Gouvea_Pathways_Packet_2.pdf) gives a concrete *Ars magna* case, while an [Indiana University of Pennsylvania study of Bombelli's printed example](https://www.people.iup.edu/gsstoudt/history/bombelli/bombelli.pdf) identifies its source page. These named sources support the numbers below. They do not make every modern notation on this page historical.

## From an algorithm to a named sequence

The rabbit problem in the [MAA's *Liber abaci* exhibit](https://old.maa.org/node/1734149) supposes breeding and maturation rules. We can model pair counts with $R_n=R_{n-1}+R_{n-2}$ after choosing initial terms. The recurrence makes a pattern visible: each month's living pairs comprise the pairs already present plus the newly produced pairs. It is a model of the stated idealised conditions, not a biological report. The exhibited printed or manuscript page also has its own indexing convention, so a modern textbook list beginning $1,1$ should be described as a reconstruction rather than a literal row copied from the page.

## Worked example 1: the rabbit problem

Use $R_1=1$, $R_2=1$, then $R_n=R_{n-1}+R_{n-2}$ for $n\\ge3$, as a modern convention for the [attested *Liber abaci* problem](https://old.maa.org/node/1734149). The next values are $R_3=2$, $R_4=3$, $R_5=5$, $R_6=8$, $R_7=13$. To check $R_6$, separate the five previous pairs from the three new pairs contributed under the model; $5+3=8$. The answer depends on when an initial pair is called month one. State that convention before comparing with a historical column. A recurrence without its initial state does not determine a sequence.

The problem also shows that a surviving numerical list can prompt new mathematics without being identical to it. We can ask for ratios of consecutive terms or a closed formula, but those are additional questions. Their modern interest does not prove that every reader of *Liber abaci* investigated them. The MAA source identifies commercial calculation and numeral instruction as a larger setting for the work. A rabbit story is one part of that setting, not the whole book.

## Cubics and cases

The [MAA source packet on Cardano's *Ars magna*](https://old.maa.org/sites/default/files/images/upload_library/46/Berlinghoff_Gouvea_Pathways/Berlinghoff_Gouvea_Pathways_Packet_2.pdf) gives an attested case in modern symbols as $x^3+6x=20$. A cubic relation with all positive magnitudes was one form among several then classified separately. [MacTutor's account of Tartaglia](https://mathshistory.st-andrews.ac.uk/Biographies/Tartaglia/) and its [Cardano biography](https://mathshistory.st-andrews.ac.uk/Biographies/Cardan/) document the complex publication and priority dispute. The historical question is not answered by saying only that a formula now bears Cardano's name. A source can record publication, another a later accusation, and another a retrospective explanation; these are different kinds of evidence.

For a depressed cubic $x^3+px=q$, modern substitution $x=u-v$ with $uv=p/3$ gives $u^3-v^3=q$ because the mixed term is $-3uv(u-v)=-p(u-v)$. The two cubes can be found from their difference $q$ and product $(p/3)^3$. This is a modern derivation of the solution rule's algebra. It should not be put into quotation marks as Cardano's exact symbolism. It does, however, make the numerical example checkable.

## Worked example 2: Cardano's $x^3+6x=20$

The [MAA packet's *Ars magna* case](https://old.maa.org/sites/default/files/images/upload_library/46/Berlinghoff_Gouvea_Pathways/Berlinghoff_Gouvea_Pathways_Packet_2.pdf) has $p=6$, $q=20$. Let $uv=p/3=2$ and $u^3-v^3=20$. Then $u^3v^3=8$. Solving for the cubes gives $u^3=10+\\sqrt{108}$ and $v^3=\\sqrt{108}-10$, both positive, so $x=\\sqrt[3]{10+\\sqrt{108}}-\\sqrt[3]{\\sqrt{108}-10}$. Direct substitution $x=2$ yields $8+12=20$, confirming the positive solution. The radical expression also equals 2, though that equality is less obvious by inspection.

To check it algebraically, write $u=1+\\sqrt3$ and $v=\\sqrt3-1$. Their product is 2. Expanding cubes gives $u^3=10+6\\sqrt3=10+\\sqrt{108}$ and $v^3=6\\sqrt3-10=\\sqrt{108}-10$. Thus $u-v=2$. This makes the nested radical calculation transparent without claiming that the sixteenth-century printed rule used our $u,v$ notation.

## When an intermediate expression looks impossible

The [IUP study of Bombelli's *Algebra*, page 293](https://www.people.iup.edu/gsstoudt/history/bombelli/bombelli.pdf) identifies the cubic $x^3=15x+4$ and cautions that Bombelli's actual presentation should be read rather than retold from a simplified legend. Applying a modern depressed-cubic rule gives terms involving $\\sqrt{-121}$. If one insists every intermediate term must be real, the calculation seems blocked even though $x=4$ is an easily checked real answer. This is a historical reason to study how operations with such expressions were developed, not proof that a modern complex-number field was already stated in our notation.

## Worked example 3: Bombelli's cubic

For the [attested $x^3=15x+4$ case](https://www.people.iup.edu/gsstoudt/history/bombelli/bombelli.pdf), first check $x=4$: $4^3=64$ and $15(4)+4=64$. Now set $i^2=-1$ in our modern notation. Expand $(2+i)^3=8+12i+6i^2+i^3=2+11i$, and similarly $(2-i)^3=2-11i$. Thus the sum of the two chosen cube roots is $(2+i)+(2-i)=4$. The non-real intermediate terms cancel. The arithmetic is a modern reconstruction of the source's operational example; it is not a claim that Bombelli wrote the symbol $i$.

The factorisation $x^3-15x-4=(x-4)(x^2+4x+1)$ also reveals other real roots $-2\\pm\\sqrt3$. The cited positive solution is not the entire real root set. This distinction echoes earlier quadratic chapters: a particular source problem and a modern full solution set may have different goals. Calling the older computation “incomplete” without stating the requested domain would impose a later task on it.

## Letters do not erase older mathematical objects

[MacTutor's biography of François Viète](https://mathshistory.st-andrews.ac.uk/Biographies/Viete/) describes systematic use of letters for known and unknown quantities, but notes that familiar conventions such as using alphabet-end letters for unknowns belong to later developments. Symbolism made general relations easier to manipulate and compare. It did not remove the need to state what a square, root or magnitude meant in a particular problem. The three worked examples show the range: a recurrence with indexed terms, a cubic solved by radical relations, and operational use of non-real intermediates. Our single modern alphabet can express all three, but the historical witnesses did not share one notation.

The [MAA review of *Ars magna*](https://old.maa.org/press/maa-reviews/the-rules-of-algebra-ars-magna) emphasises the classification of cubic and quartic cases, while the [MAA account of Tartaglia's method](https://old.maa.org/node/116637) treats publication and priority with more detail. A reader should separate a theorem's later name, an attested printed example, an unpublished claim and a modern textbook derivation. A priority contest cannot be settled by finding the first web page to mention a formula. It needs dated sources and a precise definition of what achievement is being credited.

The next chapter follows analytic geometry and calculus, where equations and curves become tightly linked and the meaning of an infinitesimal or limiting step becomes a central problem. The shift is not a clean replacement of geometry by symbols: the evidence shows several practices side by side. Keep solving the source problem, then ask what the source page can and cannot establish.

## Why the cubic formula needs conditions

The relation $x=u-v$ with $uv=p/3$ was chosen to make the mixed term match $px$. It works algebraically for the positive-coefficient Cardano case, but the signs and kinds of radicals in another cubic may differ. In Bombelli's example the corresponding discriminant is negative: for $x^3=15x+4$, the modern quantity $(4/2)^2-(15/3)^3=4-125=-121$. That is why $\\sqrt{-121}$ appears in the rule even though direct substitution reveals a real answer. The calculation is a reason to enlarge the operational setting; it is not permission to claim that every sixteenth-century text already defined complex numbers as ordered pairs of reals. To verify the result, one can use the explicit cubes of $2+i$ and $2-i$ without assuming a single-valued cube-root function on all complex numbers. Each has three complex cube roots, so the choice of branches matters in a modern formula.

## Print, secrecy and credit

The MAA and MacTutor accounts of Cardano, Tartaglia and earlier cubic work involve disclosure, contested promises and a printed book. A published rule is evidence of its availability in that edition; it is not, by itself, proof of first discovery. A private claim may be earlier yet difficult to reconstruct from surviving testimony. A contest may test practical skill on cases without establishing a general theorem for every equation. These distinctions let us discuss credit without forcing one person into the role of sole originator. They also explain why solving Cardano's attested $x^3+6x=20$ is necessary but insufficient for historical judgement: the numerical verification is exact, while the priority question is documentary.

## What symbolism permits

Viète's use of letters for given and sought quantities makes it possible to compare several numerical cases through a shared relation. Yet algebraic generality has a price: the symbols need hypotheses. In $x^3+px=q$, is $p$ positive, zero or negative? Is $x$ a positive magnitude or any real number? Which radical choices are allowed? The answers change the solution procedure and its interpretation. The earlier verbal case classifications retain information that a bare polynomial can conceal. A well-written modern reconstruction combines the symbolic efficiency with an explicit domain, then returns to the source to ask which distinctions the historical text itself made.

## Exercises

The exercises use modern notation to revisit the sourced questions. They are not additional quotations from *Liber abaci*, *Ars magna* or Bombelli's book. When a cubic is solved by checking a candidate root, that check establishes an answer to the stated equation; it does not explain how a historical practitioner found the candidate. When a radical expression is manipulated, its domain and branch choices have to be stated. Keep these two standards separate as you work: mathematical verification can be complete while the history of discovery remains uncertain. The source links above allow the original numerical cases and later accounts of priority to be examined on their own terms.

### Exercise 1
<a id="europe-cubics-and-symbolism-ex-1"></a>

With $R_1=R_2=1$, compute $R_8$ and state which assumption creates the recurrence.

<details><summary>Hint 1</summary>

Continue adding consecutive terms.

</details>
<details><summary>Hint 2</summary>

Use $R_6=8$ and $R_7=13$.

</details>
<details><summary>Solution</summary>

$R_8=R_7+R_6=13+8=21$. The idealised maturation and reproduction rule makes new pairs depend on the earlier mature count; without that model, the recurrence is only an algebraic sequence.

</details>

### Exercise 2
<a id="europe-cubics-and-symbolism-ex-2"></a>

Explain why a rabbit count without stated initial months is ambiguous.

<details><summary>Hint 1</summary>

A recurrence needs starting values.

</details>
<details><summary>Hint 2</summary>

Compare $1,1$ with a shifted list.

</details>
<details><summary>Solution</summary>

The rule $R_n=R_{n-1}+R_{n-2}$ alone permits many sequences. Even the familiar rabbit list may start its indexing at a different stage. Stating $R_1=R_2=1$ fixes this reconstruction and permits an honest comparison with the *Liber abaci* column.

</details>

### Exercise 3
<a id="europe-cubics-and-symbolism-ex-3"></a>

Check $x=2$ in Cardano’s attested cubic and say what that does not prove.

<details><summary>Hint 1</summary>

Substitute in both sides.

</details>
<details><summary>Hint 2</summary>

Distinguish one root from a general solution rule.

</details>
<details><summary>Solution</summary>

$2^3+6(2)=8+12=20$, so 2 solves this particular equation. One substitution does not derive the general cubic rule or establish a historical priority claim.

</details>

### Exercise 4
<a id="europe-cubics-and-symbolism-ex-4"></a>

Verify that $u=1+\\sqrt3$, $v=\\sqrt3-1$ satisfy the modern relations for Cardano’s case.

<details><summary>Hint 1</summary>

Multiply, then cube.

</details>
<details><summary>Hint 2</summary>

Use $\\sqrt{108}=6\\sqrt3$.

</details>
<details><summary>Solution</summary>

$uv=(1+\\sqrt3)(\\sqrt3-1)=2$. Cubing gives $u^3=10+6\\sqrt3$ and $v^3=6\\sqrt3-10$, so $u^3-v^3=20$. Therefore $u-v=2$ satisfies the depressed cubic relation.

</details>

### Exercise 5
<a id="europe-cubics-and-symbolism-ex-5"></a>

Expand $(2+i)^3$ from $i^2=-1$.

<details><summary>Hint 1</summary>

Use the binomial formula.

</details>
<details><summary>Hint 2</summary>

Replace $i^3$ by $-i$.

</details>
<details><summary>Solution</summary>

$8+12i+6i^2+i^3=8+12i-6-i=2+11i$. This is a modern complex-number verification of the intermediate expression in Bombelli’s cited cubic example.

</details>

### Exercise 6
<a id="europe-cubics-and-symbolism-ex-6"></a>

Verify all three real roots of $x^3=15x+4$ by factorisation.

<details><summary>Hint 1</summary>

Take out the known factor $x-4$.

</details>
<details><summary>Hint 2</summary>

Solve the remaining quadratic.

</details>
<details><summary>Solution</summary>

$x^3-15x-4=(x-4)(x^2+4x+1)$. The quadratic roots are $-2\\pm\\sqrt3$, in addition to 4. The historical selected computation targets a particular real answer; the full modern real root set is a further question.

</details>

### Exercise 7
<a id="europe-cubics-and-symbolism-ex-7"></a>

Why is the assertion that Bombelli used the symbol $i$ unsupported by the chapter’s source?

<details><summary>Hint 1</summary>

Our notation is modern.

</details>
<details><summary>Hint 2</summary>

Separate operation from glyph.

</details>
<details><summary>Solution</summary>

The cited source concerns operational treatment of square roots of negative quantities. This chapter writes $i^2=-1$ to calculate clearly today. The symbolic letter i is our reconstruction and cannot be attributed to Bombelli without evidence from his printed notation.

</details>

### Exercise 8
<a id="europe-cubics-and-symbolism-ex-8"></a>

Describe one reason the name “Cardano’s formula” does not settle invention priority.

<details><summary>Hint 1</summary>

Look at publication and earlier claims separately.

</details>
<details><summary>Hint 2</summary>

Name the sources on Tartaglia and Cardano.

</details>
<details><summary>Solution</summary>

A later label identifies a familiar formula, but MacTutor and MAA accounts describe prior methods, exchanges and contested publication. A priority claim must specify which case, which method, whether discovery or print is meant, and the dated evidence for each.

</details>

### Exercise 9
<a id="europe-cubics-and-symbolism-ex-9"></a>

For $x^3+6x=20$, explain why a positive root is unique.

<details><summary>Hint 1</summary>

The left side rises as x rises.

</details>
<details><summary>Hint 2</summary>

Compare values for any $a<b$.

</details>
<details><summary>Solution</summary>

For $a<b$, $b^3-a^3=(b-a)(a^2+ab+b^2)\\ge0$ and $6(b-a)>0$, so $b^3+6b>a^3+6a$. The function is strictly increasing on the reals; since 2 is a root, it is the only real root. This is a modern proof, not a quoted *Ars magna* passage.

</details>

### Exercise 10
<a id="europe-cubics-and-symbolism-ex-10"></a>

Compare the three worked examples as numerical tasks and evidence.

<details><summary>Hint 1</summary>

Name recurrence, cubic radicals and non-real intermediate.

</details>
<details><summary>Hint 2</summary>

Keep source and reconstruction distinct.

</details>
<details><summary>Solution</summary>

The *Liber abaci* rabbit problem gives an idealised count represented here by a recurrence. The *Ars magna* case gives a particular positive cubic root. Bombelli’s cited cubic has a real answer reached through operational non-real intermediates. Our formulas verify them, while the MAA and IUP source records identify distinct historical witnesses.

</details>

## Summary

The rabbit problem, Cardano’s printed cubic and Bombelli’s non-real intermediate calculation show different roles for numerical lists, verbal cases and emerging symbolism. Exact modern checks clarify the mathematics without deciding disputed priority or reproducing the original notation. Chapter 10 joins algebraic equations to geometry and follows changing arguments about rates and areas.
`;export{e as default};