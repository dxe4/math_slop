
# Examples, Proofs and Evidence: A First Research-Literacy Course

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-claims-evidence-entry) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A pattern can suggest a good question without answering it. A counterexample can settle that question while leaving a better one behind. A proof can cover infinitely many inputs, and an exact computer check can cover a finite domain completely. Learning to tell these achievements apart is a first step towards reading mathematical research.

This course joins polynomial patterns, real-number algebra and a three-vertex persistence calculation. You will write and revise claims, justify their hypotheses, and keep a ledger of what each piece of evidence supports. You do not need calculus, homology or experience reading papers. This is an entry route into research literacy; it does not reconstruct a graduate paper or propose a new research result.

## Preparation, diagnostic and a work trail

You need whole-number arithmetic, negative numbers, substitution into a polynomial and the distributive law. A prime is an integer greater than 1 whose only positive divisors are 1 and itself. A real square is nonnegative. An interval $[b,d)$ includes its left endpoint and excludes its right endpoint. The graph and matching conventions will be taught here and in the selected source.

Try the diagnostic before reading its key:

1. Calculate $0^2+0+41$, $1^2+1+41$, and $(-3)^2$.
2. Negate “every real number $x$ satisfies $x^2>0$,” keeping the domain. Give a witness for the negation.
3. Does $a^2=b^2$ force $a=b$ for real numbers? Give a reason or a counterexample.
4. The path has vertices $a,b,c$, edges $ab,bc$, and heights $(0,3,1)$. At threshold 1 include vertices with height at most 1, and edges only when both endpoints are included. Which vertices and edges are present?
5. An exact calculation checks every member of the eight-element set $\{0,1\}^3$. Does that exhaust all real height triples? Explain.

Keep a worksheet portfolio. For each task P, C and R, save separate dated **first**, **comparison** and **revised** text files, for example `RESEARCH-ENTRY-P-2026-11-03-first.txt`. If you make another version, give it a new name. In the comparison file name the source questions, keys, hints, people or tools you used, including any earlier exposure to the public models. Keep the earlier first file when you revise. Euler reading notes are editable; a note or study checkmark does not preserve this three-file trail or become a grade.

Work in sittings that suit you. There is no required waiting interval and no measured workload estimate. For the later public return, do some intervening work of your choice, then state what that work was and which keys you had already seen. A timestamp or a declaration does not verify an unseen attempt or a delay. Every task and model below is public self-study material.

## Diagnostic key and repair

1. The answers are 41, 43 and 9. If the last answer was negative, write $(-3)(-3)=9$ before proceeding. Substitution includes the sign inside the parentheses.
2. “There exists a real number $x$ with $x^2\le0$.” The witness $x=0$ works. The negation of “every” asks for one allowed failure; it does not say that every square is negative.
3. No: $a=1,b=-1$ have equal squares and unequal values. A counterexample must satisfy the hypothesis and fail the conclusion.
4. Vertices $a$ and $c$ are present. Vertex $b$ and both edges are absent. Being included at the same threshold does not make disconnected vertices connected.
5. No. For example, $(0,1/2,0)$ is a real triple outside that set. Complete exact checking can prove a statement about those eight triples, but it cannot exhaust all real triples.

If substitution or signs need repair, redo item 1 with $n=2$ and with $(-2)^2$; the answers are 47 and 4. If quantifiers or counterexamples need repair, read Session 1 of [Proof Foundations](#/courses/atlas-proof-foundations), then explain why $0$ defeats the strict-positivity claim. If item 4 is unclear, build its graph on paper before learning bars. There is no access gate: use these repairs to choose a useful starting point.

## Read the selected sources and their full keys

The following are exact reading and answer addresses inside native Atlas items. Open the named item, find the printed heading and question, write first, and then read the complete named key. Question numbers below refer to the source, not to this course's diagnostics. Only Questions 1, 3 and 4 of the counterexample article are assigned.

| Source address | Required work | Complete feedback address |
| --- | --- | --- |
| [One Counterexample, Better Theorems](../articles/counterexamples-and-hypotheses.md), **Practice: break, repair, prove**, Question 1 | Refute the universal prime-polynomial claim with an exact factorization. | Same heading, **Exercise 1**, **Solution**: $n=41$, value $41(41+2)=41\cdot43$. |
| [One Counterexample, Better Theorems](../articles/counterexamples-and-hypotheses.md), **Practice: break, repair, prove**, Question 3 | Break the equal-squares implication; state and prove a correct conclusion over the reals. | Same heading, **Solutions. (3)**: $(1,-1)$ and the factorization giving $a=b$ or $a=-b$. |
| [One Counterexample, Better Theorems](../articles/counterexamples-and-hypotheses.md), **Practice: break, repair, prove**, Question 4 | Explain what ten successful integer tests establish and when exact exhaustive testing is a proof. | Same heading, **Solutions. (4)**: only the tested inputs, unless an exact finite domain is completely covered. |
| [Persistence claim lab](../articles/research-frontier-persistence-claim-lab.md), **Original task — persistence-claim-original-v1**, parts 1–4 | Derive $D(g)$, compare it with $D(f)$, audit the population claim, and give a reproducible record. | **Complete model for the original task**, all paragraphs, including the diagonal alternative and lower bound. |
| [Persistence claim lab](../articles/research-frontier-persistence-claim-lab.md), **Changed task — persistence-claim-changed-v1**, parts 1–4 | Derive $D(h)$, compare it with $D(f)$, explain disappearance and repair the bar-survival claim. | **Complete model for the changed task**, including its component table and exact-distance argument. |
| [Persistence claim lab](../articles/research-frontier-persistence-claim-lab.md), **Self-review rubric and error-specific repair**, final paragraph | Later reconstruct the supplied common-units change: multiply both original height lists by 2. | That paragraph prints both scaled barcodes and distances 2; this course's complete R model supplies the full matching and scaling argument. |
| [Persistence claim lab](../articles/research-frontier-persistence-claim-lab.md), **Claim and reproducibility ledger**, every row | Separate the three exact examples, the finite-path theorem, the imported theorem, bounded computation and unsupported population inference. | The row's **Evidence here** and **Boundary** cells, used with this course's ledgers and models. |

The sources remain their own mathematical readings. This course adds a taught sequence, new portfolios and complete comparison models. Attribution: the selected article and lab are Euler/Math Atlas sources; their own licences and primary-paper references remain on their pages. The lab's persistence conventions and original, changed and scaling examples are reused with attribution here.

## From patterns to quantified claims

Write the domain before testing a claim. “For every nonnegative integer $n$, $p(n)$ is prime” permits $n=0,1,2,\ldots$ and promises no allowed failure. “There exists a nonnegative integer $n$ with $p(n)$ prime” needs only one successful input. The same calculation can serve different logical jobs.

Let

$$p(n)=n^2+n+41.$$

The values at 0, 1 and 2 are 41, 43 and 47. These are examples supporting the search for a pattern. They do not establish a universal statement. The source's Question 1 uses $n=41$:

$$p(41)=41^2+41+41=41\cdot43=1763.$$

Both factors exceed 1, so the value is composite. This single allowed failure refutes the universal prime claim. It does not say that all the other values are composite.

A repair must earn its own justification. A modest repair is “$p(n)$ is prime for $n\in\{0,1,2\}$.” That is a finite statement, supported by all three exact checks and primality certificates. A different, infinite statement is also available:

$$p(41k)=41(41k^2+k+1)\qquad(k\text{ an integer},\ k\ge1).$$

The second factor is at least $41+1+1=43$, so every such value is composite. This is a general proof of an infinite family of counterexamples, using algebra rather than sampling the family. It leaves many other inputs undecided.

Use six working labels in your ledger. A **conjecture** is a proposed statement whose offered support does not prove it; the conjecture may later be refuted. An **example** is one case satisfying a specified claim. A **counterexample** is one case refuting a specified universal claim. A **general proof** covers every input in its stated domain by a justified argument. An **imported theorem** is used with attribution and hypotheses, while its proof is outside the present work. A **bounded computation** checks a stated finite collection exactly or approximately, with those limits declared. These labels describe the role of the evidence, not how confident its author sounds.

The labels can overlap. An exact exhaustive bounded computation can prove a universal statement over a finite domain. In a ledger, record its method as bounded computation and its conclusion as a proved finite-domain statement. Do not silently replace that finite domain by the reals. A counterexample can also be an example of a different claim; always name the claim it addresses.

## Equal squares: repair the conclusion and the hypothesis

The implication “for real $a,b$, equal squares force equal numbers” loses sign information. The source's Question 3 gives $1$ and $-1$ as a failure. Subtract and factor instead:

$$a^2-b^2=(a-b)(a+b).$$

The real numbers have the zero-product property: if a product is zero, one factor is zero. If the first factor is nonzero, division by it forces the second factor to be zero; otherwise the first already is zero. Hence

$$a^2=b^2\quad\Longrightarrow\quad a=b\ \text{or}\ a=-b\qquad(a,b\in\mathbb R).$$

That conclusion keeps both possible signs. It includes $a=b=0$; “or” permits both alternatives.

You can instead strengthen the hypotheses: **if $a,b$ are nonnegative real numbers and $a^2=b^2$, then $a=b$**. From the factorization, either $a=b$ already or $a=-b$. In the second case nonnegativity gives $a\ge0$ and $-a=b\ge0$, so $a=0=b$. This proves the repair for all allowed inputs, including zero. It does not prove equality for arbitrary signed inputs.

A useful changed question is whether the same conclusion holds for two nonpositive real numbers. It does: $-a$ and $-b$ are nonnegative with equal squares, so the result just proved gives $-a=-b$, hence $a=b$. A sign assumption must apply to both numbers; assuming only $a\ge0$ leaves the counterexample $(1,-1)$.

## When a finite check is a proof

Suppose two formulas agree at 0, 1 and 2. The following formulas show why that need not establish an identity on all real inputs:

$$U(x)=x^2,\qquad V(x)=x^2+x(x-1)(x-2).$$

| Input $x$ | $U(x)$ | $V(x)$ |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 2 | 4 | 4 |
| 3 | 9 | 15 |

At each of the first three inputs, one extra factor is zero. At 3 the added term is $3\cdot2\cdot1=6$. Thus equality is proved on the finite domain $\{0,1,2\}$ by its complete table and refuted on the reals by the witness 3. The source's Question 4 makes the same distinction for ten integer tests. For any ten distinct tested real numbers $s_1,\ldots,s_{10}$, the product $(x-s_1)\cdots(x-s_{10})$ vanishes at each tested input but is nonzero at any other input. Adding that product to a formula creates a different formula agreeing on every test.

The qualification matters: finite checking can prove more when additional hypotheses genuinely bound the problem. For example, a separately proved degree bound can limit how many roots a nonzero polynomial has. No such degree-bound theorem is being assumed in the unrestricted identity claim above. A test suite alone does not supply it.

To call an exhaustive check a finite-domain proof, state the whole domain, ensure every case occurs, and justify exact evaluation and the acceptance rule. A rounded decimal comparison, a sampled subset or an uninspected report is weaker evidence. Recording these limits makes computation useful rather than dismissing it.

## A finite persistence bridge with exact metrics

Use the source lab's fixed path $a-b-c$, with edges $ab,bc$ and no edge $ac$. A height list orders its values at $a,b,c$. At threshold $t$, include a vertex when its height is $\le t$ and include an edge when both endpoints are included. Tied events enter simultaneously. A component is a set of vertices connected by present edges.

We use ordinary degree-zero persistence over $\mathbb F_2$. In this graph it means tracking components as thresholds increase. At a merger retain the older birth; end the younger birth. Equal-birth labels may be chosen either way. Omit zero-length bars. Record a component that never dies as an essential interval $[b,\infty)$; it is not discarded at the last table row.

For $f=(0,3,1)$, the component list is empty below 0, then $\{a\}$ on $[0,1)$, then $\{a\},\{c\}$ on $[1,3)$, then $\{a,b,c\}$ from 3 onwards. Therefore the full barcode is $D(f)=\{[0,\infty),[1,3)\}$. At 3 the new middle vertex and both edges enter together; they create no extra positive-length bar.

The input metric is the maximum coordinate change:

$$\|x-y\|_\infty=\max\{|x_a-y_a|,|x_b-y_b|,|x_c-y_c|\}.$$

To compare finite bars $[b,d)$ and $[b',d')$, use the larger endpoint difference $\max(|b-b'|,|d-d'|)$. A finite bar can instead match to the diagonal $(s,s)$. Its least diagonal cost is $(d-b)/2$: two errors at most $r$ imply $d-b\le2r$, and the midpoint $s=(b+d)/2$ attains equality. For $[1,3)$ the cost is 1 at $(2,2)$.

Every finite bar on both sides must be paired once or sent to the diagonal. Essential bars pair only with essential bars, at the absolute difference of their births. For any permitted matching take its largest cost. The bottleneck distance $d_B$ is the minimum of these largest costs. A displayed matching proves an upper bound; an exact distance also needs a lower bound ruling out every cheaper choice.

The source gives $g=(0,2,1)$ and the changed list $h=(0,1,2)$. Complete both source tasks and their full keys before the portfolios below. A correct calculation proves a statement about those inputs and conventions. It does not prove that a measured population has two genuine clusters: no population object, sampling mechanism or input-error probability has been supplied.

The broader result is an **imported theorem**. As stated and sourced in the [stability clinic](../articles/research-frontier-persistence-stability-clinic.md), Cohen-Steiner, Edelsbrunner and Harer's theorem concerns continuous tame functions $F,G$ on a common triangulable space, using the paper's persistence-diagram conventions and $\mathbb F_2$. Here triangulable means homeomorphic to a finite simplicial complex; tame means finitely many homological critical values and finite-dimensional sublevel homology in every degree. The theorem bounds diagram bottleneck distance by $\sup_{z\in X}|F(z)-G(z)|$. Our finite graph calculations neither prove that general theorem nor assert it for arbitrary filtrations. The clinic separately proves the all-real-height, fixed-path degree-zero case. You may use the broader theorem as an attributed statement without claiming to have reconstructed its proof.

## RESEARCH-ENTRY-P — First claim portfolio

Write before opening the complete P model. You may use the selected sources; declare which questions and keys you have already read.

1. For $p(n)=n^2+n+41$ on the nonnegative integers, check $n=0,1,2$ and the source's $n=41$. Refute or prove the universal prime claim. Give both a justified finite repair and a proved infinite family of composite values. Include exact factors.
2. Audit “for real $a,b$, $a^2=b^2$ implies $a=b$.” Give a counterexample, prove the repaired two-alternative conclusion, and prove the equal-number conclusion under nonnegativity. Check the zero case.
3. Derive $D(f)$ and $D(g)$ from component tables; calculate both input and output distances. Give a permitted matching and a complete lower bound, allowing finite bars on both sides to go to the diagonal. Repair “these close barcodes establish two population clusters.”
4. Classify the six initially unlabelled cards below, using the six working labels. Name the domain and the strongest supported conclusion for each. Do not treat a claim and the offered support as the same thing. For P2, use the finite grid table in the complete model after attempting your own enumeration; machine execution is not required.
5. Write a reproducibility record naming the path, input ordering, height lists, threshold, ties, field, interval conventions, metrics, complete bars and exact witnesses. Compare with the full model and revise in separate files.

| Card | Statement and offered support |
| --- | --- |
| P1 | At $n=3$, $p(n)=53$ is prime. |
| P2 | Enumerating every list in $\{0,1\}^3$ and every ordered pair gives $d_B\le\Vert x-y\Vert _\infty$ on that grid. |
| P3 | For all nonnegative integers $n$, $p(n)$ is prime; the offered support is its values at 0, 1 and 2. |
| P4 | Continuous tame functions on a common triangulable space obey the stability bound in the primary theorem cited by the clinic; that paper supplies its proof. |
| P5 | For arbitrary real $a,b$, factoring $a^2-b^2$ and using the real zero-product property proves that equal squares imply $a=b$ or $a=-b$. |
| P6 | The real inputs $a=1,b=-1$ have equal squares but unequal values. |

## RESEARCH-ENTRY-P — Complete model and repair

For part 1 the exact values and certificates are:

| Polynomial | Input | Value | Certificate |
| --- | --- | --- | --- |
| p | 0 | 41 | prime: test divisors 2, 3, 5 |
| p | 1 | 43 | prime: test divisors 2, 3, 5 |
| p | 2 | 47 | prime: test divisors 2, 3, 5 |
| p | 3 | 53 | prime: test divisors 2, 3, 5, 7 |
| p | 41 | 1763 | 41 * 43 |

If a composite positive integer $N$ equals $rs$ with $1<r\le s$, then $r^2\le N$, so it has a prime divisor at most $\sqrt N$. The listed trial divisors exhaust the primes up to that bound for each proposed prime. None divides. Thus the finite repair “$p(n)$ is prime on $\{0,1,2\}$” has a complete proof. At 41 the two proper factors disprove the infinite prime claim. The formula $p(41k)=41(41k^2+k+1)$ follows by substitution and distribution; for every integer $k\ge1$ both factors exceed 1. It proves infinitely many composite values. Neither repair says that every other input is prime.

For part 2, $(1,-1)$ refutes the unrestricted implication. Over the reals, $(a-b)(a+b)=0$ gives $a=b$ or $a=-b$. Under $a,b\ge0$, the second alternative forces both to be zero unless the first already holds. These are complete general proofs under their stated hypotheses, not conclusions drawn from a sign table.

For part 3 the complete component tables are:

| Threshold | Components for f | Components for g |
| --- | --- | --- |
| $t<0$ | none | none |
| $0\le t<1$ | $\{a\}$ | $\{a\}$ |
| $1\le t<2$ | $\{a\},\{c\}$ | $\{a\},\{c\}$ |
| $2\le t<3$ | $\{a\},\{c\}$ | $\{a,b,c\}$ |
| $t\ge3$ | $\{a,b,c\}$ | $\{a,b,c\}$ |

| List | Heights in a,b,c order | Full barcode |
| --- | --- | --- |
| f | (0,3,1) | $[0,\infty),[1,3)$ |
| g | (0,2,1) | $[0,\infty),[1,2)$ |

The coordinate differences are $(0,1,0)$, so the input distance is 1. Match the essential bars for cost 0 and the finite bars for cost $\max(0,1)=1$. For a lower bound, $[1,3)$ must go either to $[1,2)$ at cost 1 or to the diagonal at cost 1. There is no third destination. Hence $d_B=1$. Sending both finite bars to the diagonal also has largest cost $\max(1,1/2)=1$; forgetting the bar on the right would leave an incomplete matching. The justified replacement for the population sentence is: “These exact height lists on this fixed filtration have bottleneck distance 1 and input sup distance 1.” No population-cluster conclusion follows from the supplied evidence.

For part 4 the key is:

| Card | Working label | Supported conclusion and boundary |
| --- | --- | --- |
| P1 | example | The input 3 gives a prime value, 53, by the certificate above. One input does not prove the prime conjecture. |
| P2 | bounded computation | The exact exhaustive table below proves the inequality for the 64 ordered binary-grid pairs. It does not cover every real triple. |
| P3 | conjecture | Its three offered examples do not prove it; $n=41$ refutes it. Keep both its original status and its later refutation in the ledger. |
| P4 | imported theorem | The clinic cites the primary stability theorem with its hypotheses. Its general proof is outside this course. |
| P5 | general proof | The factorization and real zero-product property cover every allowed pair, including zero. |
| P6 | counterexample | Both the hypothesis and failure of the original equal-number conclusion are checked for this allowed pair. |

Here is a hand alternative to code for the finite grid. The eight binary lists fall into three classes. Each row lists every member, not a sample. The middle-peak list is the only binary list with a finite bar: its endpoints appear together at 0 and merge at 1. In every Z list, a vertex of height 0 begins the surviving component and the remaining vertices attach without a positive-length second bar. List O is born entirely at 1.

| Class | All member height lists | Full barcode | Count |
| --- | --- | --- | --- |
| Z | (0,0,0), (0,0,1), (0,1,1), (1,0,0), (1,0,1), (1,1,0) | $[0,\infty)$ | 6 |
| M | (0,1,0) | $[0,\infty),[0,1)$ | 1 |
| O | (1,1,1) | $[1,\infty)$ | 1 |

The complete class-to-class bottleneck table is:

| Left / right | Z | M | O |
| --- | --- | --- | --- |
| Z | 0 | 0.5 | 1 |
| M | 0.5 | 0 | 1 |
| O | 1 | 1 | 0 |

A finite bar's diagonal cost gives 0.5 between Z and M, with a matching and a forced lower bound. Essential-birth difference 1 forces every distance involving O and a different class to be 1; matching the essential bars and sending any finite bar to the diagonal attains it. Identical barcodes have distance 0. Input sup distance is 0 on identical lists and 1 on every distinct binary pair. These observations check all $8\cdot8=64$ ordered pairs, including distinct lists in Z. This is an exact bounded calculation and a proof of the stated finite-domain result. No claim that a computer was run is needed, and no conclusion over all real inputs follows from the enumeration alone.

For part 5 a sufficient record contains vertices $(a,b,c)$, edges $(ab,bc)$ only, the ordered f/g heights, inclusion rule $\le t$, simultaneous ties, ordinary $H_0$ over $\mathbb F_2$, omission of zero-length bars, the essential intervals, the sup input metric, the endpoint/diagonal output metric and both lower-bound alternatives. Include the polynomial domain, its exact factors, and the real sign hypotheses. There is no seed or numerical approximation in these exact tasks.

If a successful prime example was called a proof, rebuild the P3/P1 distinction and retain $n=41$ beside it. If only an upper distance bound was supplied, list every destination of $[1,3)$ and its cost. If zero was dropped from the square repair, prove it separately and reconnect it to the factorization. If P2 was promoted to an all-real theorem, write one real input outside its domain and restore the finite quantifier.

## RESEARCH-ENTRY-C — Changed claim portfolio

Keep a new first/comparison/revised file set. The following changes require new arguments even if you read the P model.

1. Replace the polynomial by $q(n)=n^2+n+17$ on the nonnegative integers. Check 0, 1 and 2. Investigate $n=17$, give a justified finite repair, and prove a family of composite values indexed by integers $k\ge1$.
2. Repair “if real $a,b$ satisfy $a\ge0$ and $a^2=b^2$, then $a=b$.” Then prove the conclusion under the changed hypotheses $a\le0,b\le0$. Preserve the zero case and say why the one-sided sign assumption failed.
3. Keep $f=(0,3,1)$ but compare it with $h=(0,1,2)$. Derive the complete component table and both metrics, prove exact $d_B$, and repair “stability guarantees every finite bar survives.”
4. Compare $A(x)=2x+1$ and $B(x)=2x+1+(x+1)x(x-1)$. Check every input in $\{-1,0,1\}$ and test $x=2$. State exactly which equality claim is proved and which is refuted.
5. Classify the six unlabelled cards. For each give its scope, the support it needs, and a prohibited stronger inference. Record prior P/source-key exposure and revise after the complete C model.

| Card | Statement and offered support |
| --- | --- |
| C1 | The original pair $(1,-1)$ still has $a\ge0$ and equal squares but unequal values. |
| C2 | The primary stability result cited by the clinic bounds diagram error for continuous tame functions on a common triangulable space. |
| C3 | Every nonnegative input gives a prime $q(n)$; its first three values are offered as support. |
| C4 | For all nonpositive real $a,b$ with equal squares, apply the nonnegative result to $-a,-b$ to conclude $a=b$. |
| C5 | The complete three-input table for $A$ and $B$ gives equality on $\{-1,0,1\}$. |
| C6 | $q(1)=19$ is a prime value of $q$. |

## RESEARCH-ENTRY-C — Complete model and repair

The new exact values are:

| Polynomial | Input | Value | Certificate |
| --- | --- | --- | --- |
| q | 0 | 17 | prime: test divisors 2, 3 |
| q | 1 | 19 | prime: test divisors 2, 3 |
| q | 2 | 23 | prime: test divisors 2, 3 |
| q | 17 | 323 | 17 * 19 |

The prime-divisor bound proved in P justifies those complete divisor checks. The three values prove the finite statement on $\{0,1,2\}$. The factorization

$$q(17)=17^2+17+17=17\cdot19=323$$

refutes the universal prime conjecture. More generally,

$$q(17k)=17(17k^2+k+1)\qquad(k\text{ an integer},\ k\ge1).$$

The second factor is at least 19, so every listed family member is composite. This proof changes the parameter, coefficients and factorization, while retaining the nonnegative-integer domain. It makes no prime assertion about the unexamined inputs.

The one-sided sign claim fails at $(1,-1)$, since only $a$ was constrained. A correct conclusion with that one-sided hypothesis is still $a=b$ or $a=-b$, proved by real factorization. A sufficient hypothesis for equality is that both numbers are nonnegative, as proved earlier. Under the changed hypotheses $a,b\le0$, put $u=-a\ge0$ and $v=-b\ge0$. Then $u^2=v^2$, so $u=v$ by the proved nonnegative case, and $a=b$. If either is zero, equal squares force the other to be zero. Every repaired statement has its domain and justification.

For the changed persistence list:

| Threshold | Components for h |
| --- | --- |
| $t<0$ | none |
| $0\le t<1$ | $\{a\}$ |
| $1\le t<2$ | $\{a,b\}$ |
| $t\ge2$ | $\{a,b,c\}$ |

At 1 the vertex $b$ enters with edge $ab$; at 2 the vertex $c$ enters with edge $bc$. Neither is an isolated new component after its simultaneous event.

| List | Heights in a,b,c order | Full barcode |
| --- | --- | --- |
| h | (0,1,2) | $[0,\infty)$ |

The input distance is $\max(0,2,1)=2$. The essential bars of f and h match at cost 0, and f's finite bar $[1,3)$ goes to the diagonal at cost 1. Because h has no finite bar, that destination is forced. The attained and unavoidable cost gives $d_B=1\le2$.

The repaired statement is: “Under the stability theorem's stated hypotheses and input/output metrics, the diagrams admit a matching whose maximum cost is at most the input sup distance; a finite bar may disappear through a diagonal match.” This is the imported theorem's matching conclusion, not a proof of the general theorem. Our exact f/h calculation witnesses compatible disappearance and does not prove it for every filtration. A finite bar of lifetime $L$ costs $L/2$ to disappear; if a matching has maximum cost at most $\varepsilon$ and $L>2\varepsilon$, that particular bar cannot be sent to the diagonal in that matching. This last statement follows directly from the diagonal-cost proof; equality $L=2\varepsilon$ permits disappearance.

For the formula comparison the full exact table is:

| Input $x$ | $A(x)$ | $B(x)$ |
| --- | --- | --- |
| -1 | -1 | -1 |
| 0 | 1 | 1 |
| 1 | 3 | 3 |
| 2 | 5 | 11 |

The added term vanishes at -1, 0 and 1. Thus equality holds for every input in that finite set. At 2 the added term is $3\cdot2\cdot1=6$, so the formulas are not identical on the reals. Neither a fourth passing value nor more rounded tests would turn the unrestricted claim into a proof.

| Card | Working label | Supported conclusion and boundary |
| --- | --- | --- |
| C1 | counterexample | It refutes the one-sided sign implication, with both its hypothesis and failed conclusion checked. It does not refute the two-nonpositive-input theorem. |
| C2 | imported theorem | Use the named common-space, continuity, tameness, field and diagram conventions. This source attribution is not an elementary proof in the present portfolio. |
| C3 | conjecture | The prime pattern was proposed from examples and is now refuted at 17. |
| C4 | general proof | Negation of both inputs reduces every allowed pair to the proved nonnegative case, including zero. |
| C5 | bounded computation | Complete exact checking proves a finite-domain equality. The witness 2 refutes the proposed extension to all reals. |
| C6 | example | This is one prime output, justified by checking primes 2 and 3. It cannot repair the universal conjecture. |

If you made h's arrivals into separate positive bars, rebuild the whole graph immediately at 1 and 2. If you reported distance 2 because the input distance is 2, distinguish an upper bound from an exact optimum and prove the diagonal lower bound. If your square repair constrained only one input, test $(1,-1)$ again. If you called C5 a universal real identity, retain the row at 2 beside the finite-domain repair. Keep these corrections and their mathematical reasons in the revised file.

## RESEARCH-ENTRY-R — Later public reconstruction

After intervening work of your choice, begin a separate dated response before reopening these models. State your earlier source/key exposure and any support used now. If you already read this return key, describe the work as public reconstruction after that exposure. There is no enforced delay or claim of a fresh assessment.

1. Reconstruct a mixed ledger for the six unlabelled cards below: give each working label, allowed domain, strongest supported conclusion and one tempting overclaim. For each false universal statement, give a concrete failure and a proved repair. If a card supplies a proof, explain its crucial step rather than naming it only.
2. Reconstruct the lab's supplied common-units return: $2f=(0,6,2)$ and $2g=(0,4,2)$. Give complete component tables and barcodes, the input sup distance, a permitted matching and a lower bound for exact $d_B$. Explain why diagonal matching remains necessary as an option.
3. Prove that multiplying both height lists by any real $\lambda>0$ multiplies their input sup distance and barcode bottleneck distance by $\lambda$, under our fixed conventions. Use that proof to transport the binary-grid result to the scaled grid $\{0,2\}^3$ without pretending it covers all real triples.
4. Compare first, comparison and revised files. Name one repaired claim whose new proof matters, one finite witness and one inference still unsupported. Choose a next study action using the final section.

| Card | Statement and offered support |
| --- | --- |
| R1 | On the scaled grid $\{0,2\}^3$, every one of its 64 ordered input pairs satisfies the stability inequality, obtained from the complete binary-grid calculation by scaling. |
| R2 | All odd integers at least 3 are prime; 3, 5 and 7 are offered as support. |
| R3 | The stability theorem for common-space continuous tame functions is supplied by the clinic's cited primary paper. |
| R4 | The real pair $(-3,3)$ has equal squares and unequal values. |
| R5 | $p(2)=47$ is a prime output. |
| R6 | For arbitrary real $a,b$, $a^2=b^2$ implies $(a-b)(a+b)=0$, hence $a=b$ or $a=-b$. |

## RESEARCH-ENTRY-R — Complete model and repair

| Card | Working label | Supported conclusion and boundary |
| --- | --- | --- |
| R1 | bounded computation | The exact finite result transfers to all 64 ordered scaled-grid pairs. Scaling does not introduce non-grid real inputs. |
| R2 | conjecture | The offered odd primes suggest a false universal statement; 9 is odd and $9=3\cdot3$ is composite. |
| R3 | imported theorem | The broader common-space theorem is attributed with its hypotheses. Neither our examples nor the finite grid proves it. |
| R4 | counterexample | Both squares equal 9 and $-3\ne3$, refuting unrestricted equality of the numbers. |
| R5 | example | The complete prime-divisor check for 47 uses 2, 3 and 5. One successful input does not undo the failure at 41. |
| R6 | general proof | Subtraction, factorization and the real zero-product property cover all allowed pairs. Zero is included. |

For R2 a useful proved repair is **every prime integer greater than 2 is odd**. If a prime $r>2$ were even, $r=2s$ for an integer $s>1$, giving two proper factors and contradicting primality. This changes the implication and keeps its hypotheses visible; it does not claim every odd integer is prime. An alternative finite repair is “3, 5 and 7 are prime.” For 3 there is no prime divisor at most $\sqrt3$; for 5 and 7 the only prime candidate at most their square roots is 2, which divides neither. The prime-divisor bound therefore proves all three cases. For R4, the general repair is the two-alternative conclusion proved in R6; restricting both inputs to nonnegative reals gives equality by the P proof. The false universal claims therefore have exact failures and proved replacements.

The complete scaled component tables are:

| Threshold | Components for 2f | Components for 2g |
| --- | --- | --- |
| $t<0$ | none | none |
| $0\le t<2$ | $\{a\}$ | $\{a\}$ |
| $2\le t<4$ | $\{a\},\{c\}$ | $\{a\},\{c\}$ |
| $4\le t<6$ | $\{a\},\{c\}$ | $\{a,b,c\}$ |
| $t\ge6$ | $\{a,b,c\}$ | $\{a,b,c\}$ |

| List | Heights in a,b,c order | Full barcode |
| --- | --- | --- |
| 2f | (0,6,2) | $[0,\infty),[2,6)$ |
| 2g | (0,4,2) | $[0,\infty),[2,4)$ |

The input distance is $\max(0,2,0)=2$. Essential bars match at cost 0. Pairing the finite bars costs 2, giving an upper bound. For the lower bound, $[2,6)$ either pairs to $[2,4)$ at cost 2 or goes to the diagonal at cost $(6-2)/2=2$. Thus every matching has cost at least 2, and the proposed matching attains it. Alternatively both finite bars go to the diagonal, costing 2 and 1, again with maximum 2. Sending just the first bar to the diagonal would leave an unmatched bar on the other side.

| Comparison | Input sup distance | Output bottleneck distance |
| --- | --- | --- |
| f,g | 1 | 1 |
| f,h | 2 | 1 |
| 2f,2g | 2 | 2 |

For the scaling proof, fix $\lambda>0$. A scaled vertex is present at threshold $t$ exactly when its old height is at most $t/\lambda$. The same is true of edges, so the component sequence, simultaneous ties and merger ordering are unchanged, with every finite birth and death multiplied by $\lambda$. Essential deaths stay infinite. Coordinate differences, finite endpoint differences, essential-birth differences and half-lifetime diagonal costs each multiply by $\lambda$.

Every old matching therefore gives a scaled matching with cost $\lambda$ times its old cost, so the scaled optimum is at most $\lambda$ times the old optimum. Conversely divide any scaled matching by $\lambda$: it gives an old permitted matching with cost divided by $\lambda$. This gives the reverse inequality and proves equality of the scaled optimum with $\lambda$ times the old optimum. Positivity of $\lambda$ was needed for the order correspondence and inverse rescaling.

Multiplication by 2 bijects the eight binary lists with the eight lists in $\{0,2\}^3$, and hence bijects their 64 ordered pairs. The bottleneck class table is multiplied by 2, giving entries 0, 1 and 2; input sup distance is 0 on identical lists and 2 on distinct lists. The transported inequality is an exact finite result. The scaling proof is general in positive $\lambda$ for fixed input lists; the finite grid is still finite. Neither proves the imported common-space theorem or any population interpretation.

Repair a return error by reconstructing the affected step without copying its conclusion alone. If the finite-bar lifetime was used as its diagonal cost, derive the midpoint bound again. If one bar was left unmatched, list every interval on each side. If R2 was “repaired” by an unproved new pattern, give either the three exact prime certificates or the prime-greater-than-2 proof. If public key exposure was omitted, add it to the comparison file without rewriting the first response.

## Self-review and the next useful choice

Use this descriptive review after each portfolio. It awards no score, mastery status or research qualification.

| Question for your argument | Evidence to keep | Useful repair |
| --- | --- | --- |
| Did I state the domain and quantifier? | A complete sentence specifying reals, nonnegative integers or the exact finite grid. | Give an allowed input and an excluded input; rewrite the quantifier. |
| Did my counterexample satisfy the hypothesis and break the conclusion? | Substitution and the failed equality, primality or identity claim. | Test both halves explicitly; keep the exact factor or sign. |
| Did the repaired theorem earn a proof? | A factorization, sign argument, prime-divisor check or complete finite table with its hypotheses. | Do not replace one unproved conjecture with another; prove the weaker statement you can justify. |
| Did I cover every matching option? | Essential match, finite-to-finite options and all required diagonal matches, with a lower bound. | Account for every bar on both sides and list the obstructing bar's possible destinations. |
| Did I keep finite computation and an imported theorem distinct? | The exact grid and count beside the theorem's source and hypotheses. | Restore the finite scope; attribute the broader result rather than announcing it proved. |
| Did I preserve my work and disclose support? | Separate dated first, comparison and revised files with earlier key exposure named. | Retain the first file and add an honest comparison; editable notes remain useful scratch work. |

If signs, substitution or quantifiers still interrupt you, repair the diagnostic and selected [counterexample questions](../articles/counterexamples-and-hypotheses.md). If you can explain the models but cannot yet construct a proof, take [Proof Foundations](#/courses/atlas-proof-foundations), preserving its own preparation and course scope. If you can reconstruct all three portfolios and want the next mathematical argument, choose the [finite-path stability clinic](../articles/research-frontier-persistence-stability-clinic.md), reading its stated additional preparation before its all-real-height proof. The [TDA research survey](../articles/research-frontier-topological-data-analysis.md) is a further specialist option with additional prerequisites; completing this entry course does not remove them.

A useful stopping record says what you can justify now, which proof step still needs work and which next source addresses it. Public-model comparison and your own study marks support planning; they are not observed learning outcomes or graded Practice evidence.

## Copyable exact record

This small optional record restates the printed inputs and answers for checking. A null death denotes infinity, not a missing bar. The component tables, finite-grid classes and matching arguments above are the full hand alternative. Reading or running code is not required to complete the course.

<!-- research-entry-data:start -->
~~~json
{
  "version": 1,
  "taskIds": ["RESEARCH-ENTRY-P", "RESEARCH-ENTRY-C", "RESEARCH-ENTRY-R"],
  "vertices": ["a", "b", "c"],
  "edges": [["a", "b"], ["b", "c"]],
  "coefficientField": "F2",
  "thresholdComparison": "<=",
  "simultaneousTies": true,
  "zeroLengthBars": "omit",
  "examples": [
    {"id": "f", "heights": [0, 3, 1], "bars": [[0, null], [1, 3]]},
    {"id": "g", "heights": [0, 2, 1], "bars": [[0, null], [1, 2]]},
    {"id": "h", "heights": [0, 1, 2], "bars": [[0, null]]},
    {"id": "2f", "heights": [0, 6, 2], "bars": [[0, null], [2, 6]]},
    {"id": "2g", "heights": [0, 4, 2], "bars": [[0, null], [2, 4]]}
  ],
  "comparisons": [
    {"left": "f", "right": "g", "sup": 1, "bottleneck": 1},
    {"left": "f", "right": "h", "sup": 2, "bottleneck": 1},
    {"left": "2f", "right": "2g", "sup": 2, "bottleneck": 2}
  ],
  "finiteGrid": [0, 1],
  "finitePairCount": 64
}
~~~
<!-- research-entry-data:end -->
