
# Historiography and Comparative Mathematical Practice

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-history-culture-advanced) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Real analysis](#/courses/course-lucent-analysis) · [Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction](#/courses/atlas-paper-reading-reproduction-core).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

This advanced course teaches how to build and test an account of mathematical practice. Three sustained case studies ask different questions: what is preserved when a bridge problem becomes a network; what justifies passing from continuous terms to an infinite sum; and what changes when an array becomes something that can itself be composed and inverted? The work combines historiography, source criticism, and comparative mathematical practice. It extends the [historical mathematics core](#/courses/atlas-historical-mathematics-core) and its [Euclid preparation](../articles/euclid-two-editions-source-criticism.md) with additional witnesses, algorithms, counterexamples, and competing interpretations.

The course is complete for offline study. Its source capsules and passage ledgers supply bounded, independently written paraphrases of the inspected windows; all assigned mathematics and model answers are embedded here. External links offer optional direct audits. A capsule is neither a transcription nor a replacement critical edition. Record “course capsule” when that is your access level, and record your own date and witness if you open an external page. The source register's 2026-11-04 access date describes the course's research, not an inspection automatically performed by a learner.

Whole-course effort is unknown; no calibrated duration or academic credit is assigned. The source is a beta advanced-undergraduate course. Its public models support deliberate work and revision; they do not establish observed mastery, original-language expertise, or a research qualification.

## Scope, evidence, and dated work records

Historiography studies the construction of historical accounts: what an account selects, how it connects events, what it calls a mathematical object, and which evidence bears on its conclusions. A theorem's modern validity and the historical adequacy of a story about that theorem are different questions. Here an actual later account by Rouse Ball is compared with Euler's text; editors' notes about Abel are compared with the argument they assess; and a change in the treatment of arrays is studied through specified Sylvester and Cayley passages. We do not assign invented positions to unnamed schools of historians.

Retain the core's W/T/M/I distinctions: **W** is an observation about the consulted witness, **T** an identified translator/editor intervention, **M** our modern reconstruction, and **I** an inference about historical practice. Add **H** for a claim made by a later historical account. H is evidence about that account, while its claims about earlier events need their own evaluation. A digital host's date or language label is metadata, not a substitute for the title leaf and passage. A reprint, translation, OCR stream, and autograph are different witnesses.

For every required task retain three separate dated learner-owned files: YYYY-MM-DD-TASK-first.md, YYYY-MM-DD-TASK-comparison.md, and YYYY-MM-DD-TASK-revised.md. Substitute the stable task ID for TASK, use the actual date, and add an attempt suffix if a name would repeat. Save the first attempt before opening its public key and preserve it. If the key was already seen, disclose that exposure and call the attempt public-key practice. In the comparison file record the exact keys/passages opened and when, assistance from people, tools or AI, errors and disagreements, and which reasoning is your own. Put corrected work and reasons for changes in the revised file; never overwrite earlier attempts. This trail supports recovery and honest comparison, not a claim of unseen work or a verified delay.

## Preparation diagnostic and precise repairs

Preparation is the core course's source-card protocol, W/T/M/I distinctions, fixed P/C/R comparison work, and the Euclid unit's separation of conditional proof from existence. You also need elementary graph incidence, polynomial algebra, sequences and continuity, two-by-two matrices, and proof by invariant. The following diagnostic and complete repairs make the additional mathematical requirements explicit.

| ID | Attempt before opening the diagnostic key |
| --- | --- |
| D1 | Explain why seven edge traversals give eight vertex positions, and why an internal visit pairs arrival with departure. |
| D2 | Prove \(1+q+\cdots+q^{N-1}=(1-q^N)/(1-q)\) for \(q\ne1\), and give the missing \(q=1\) value. |
| D3 | Explain the difference between \(\forall x\,\exists N(x,\varepsilon)\) and \(\exists N(\varepsilon)\,\forall x\). |
| D4 | Multiply \(\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\1&1\end{pmatrix}\), then reverse the factors. |
| D5 | Distinguish a journal volume's nominal year, a paper's publication date, a reading date, a reprint date, and an access date. |

**Diagnostic key and repairs.** D1: the initial position contributes one, and each traversal contributes one new position; an internal visit consumes two incident edges. Seminar A1 supplies the full incidence identity, including the endpoints, and proves the construction theorem. D2: multiply the sum by \(1-q\); all internal powers cancel and the result is \(1-q^N\). For \(q=1\) the finite sum is N, and division is unavailable. Seminar A2 uses the same cancellation without dividing at \(q=1\), then proves the geometric-power limit with Bernoulli's inequality. D3: the first cutoff can vary with the point; the second must work at all points at once. A2 gives an explicit moving-point obstruction and the complete uniform-limit proof. D4: the products are \(\begin{pmatrix}2&1\\1&1\end{pmatrix}\) and \(\begin{pmatrix}1&1\\1&2\end{pmatrix}\). A3 derives the column-vector convention, determinant and inverse checks, and the singular boundary. D5: dates concern distinct events; none may be silently substituted for another. A0's ledger gives actual cases with a complete answer.

If the source distinctions are unfamiliar, redo the core's H0–H1 checkpoints and E4 card with their full keys before A0. If the conditional-proof distinction is unfamiliar, redo the Euclid primary proof and changed-radius key. For the new mathematics, complete the indicated seminar's worked repair, close it, and repeat the failed diagnostic. No source-language competence is assumed: the course assesses a bounded comparison of identified editions and renderings, not a translation of an uninspected original.

## Seminar A0 — Dates, genres, and what counts as a witness

A historical argument starts by choosing its unit of evidence. “Euler solved this in 1736” can conceal at least three events. The E53 archive reports a written date of 1735 and publication in 1741; the journal volume carries 1736. Ball's 1905 account instead gives 1736 as a presentation date. Those are not equivalent fields. The archive's written date does not independently disprove or verify Ball's presentation claim. We have not inspected an Academy record establishing the presentation date, so leave that event unresolved rather than turning a volume label into it.

A similar distinction arises with Abel. His selected memoir belongs to a journal volume labelled 1826. The 1881 editors report that the relevant fascicle appeared in February or March 1827, and describe a French composition followed by Crelle's German translation. We consult their French collected witness and notes, not that German printing or an autograph. The editors' account is identified evidence; a full publication-history investigation would check the records they cite.

Genre also matters. Euler's research article, Ball's mathematical recreation and historical retelling, Cauchy's textbook argument and later note, a collected edition's editorial diagnosis, and Cayley's memoir offer different kinds of testimony. An account can preserve a mathematical result while changing its representation or explanatory emphasis. Its genre does not make it automatically reliable or unreliable.

**Task history-advanced-a0-v1.** Fill the event fields in the two preceding cases, then repair “Ball proves Euler presented his published paper in 1736, and Abel's French words are the German journal's original wording.”

**A0 complete key.** Euler: written 1735 is an archive report; volume 1736 is a nominal label; publication 1741 is the archive's publication field; presentation remains unverified here; Ball 1905 is a later account; the bilingual digital rendering is another layer. Abel: nominal volume 1826, fascicle 1827 according to the 1881 editors, French collected witness 1881, and access 2026-11-04 are distinct. The repaired statement attributes Ball's presentation claim to Ball and labels the French as the consulted collected rendering. Neither supplies an inspected Academy minute or German first-print wording.

## Seminar A1 — Bridge traversal, construction, and a later account

The G1 capsule records Euler's letter-sequence method, including the required adjacency multiplicities in §§4–7 and the impossibility count in §§8–9. The G2 capsule records Ball's later point-and-line representation and his explicit inference about the practical reach of Euler's method. Read the full cards and ledgers below; these capsules are sufficient to do the mathematical work offline.

**Our modern reconstruction:** a finite undirected multigraph has vertices for regions and distinct edge identities for bridges. Parallel edges stay distinct. A loop contributes two to degree. The support consists of vertices incident with at least one edge. For the selected seven bridges the incidence data are:

| edge | first endpoint | second endpoint |
| --- | --- | --- |
| a | A | B |
| b | A | B |
| c | A | C |
| d | A | C |
| e | A | D |
| f | B | D |
| g | C | D |

| region | degree | minimum occurrences in a hypothetical all-edge vertex sequence |
| --- | ---: | ---: |
| A | 5 | 3 |
| B | 3 | 2 |
| C | 3 | 2 |
| D | 3 | 2 |

The degrees sum to \(14=2\cdot7\). If \(n_v\) counts occurrences of v in an all-edge trail's vertex sequence and \(s_v,t_v\) indicate its start and finish, then
\[
 d(v)=2n_v-s_v-t_v.
\]
Every internal occurrence pairs one arrival and one departure; start and finish each remove one incidence from that count. Consequently an odd-degree vertex must be exactly one endpoint. A single trail has only two endpoints, while this graph has four odd-degree vertices. Alternatively, at least \(3+2+2+2=9\) letter occurrences are required, but seven traversals provide only eight positions. Impossibility holds even when different starting and finishing regions are allowed.

Necessity is not yet a construction theorem. Here is a complete modern sufficiency argument, with no claim that this wording is Euler's or Ball's algorithm. Assume at least one edge, connected support, and all degrees even. Start at a vertex with an edge and follow unused edges until first returning to it. You cannot become stuck at a different vertex: an arrival there leaves an odd number of used incidences, so an initially even unused-incidence count cannot be exhausted. Finiteness gives a closed trail. Removing that closed trail leaves even residual degrees. If unused edges remain, original connectivity ensures that a vertex on the accumulated trail touches an unused edge: along an original path to the unused part, the first edge leaving its visited vertices must be unused. Construct a residual closed trail there and splice it into the accumulated trail. Each splice consumes edges, so the process terminates with every edge used exactly once. Isolated vertices are irrelevant; disconnected nonempty components are not.

For exactly two odd vertices p,q, add one distinguished artificial edge pq. The even-degree construction gives a circuit. Rotate its cyclic edge order to cut at that artificial edge, then remove it; what remains is a trail between p and q. This also proves the correct endpoint restriction.

**Task history-advanced-a1-v1.** Add \(h:AB\) and \(i:CD\) to the seven-edge graph. Construct a closed trail by splicing, prove two new edges are minimal for a closed traversal, and explain what adding only h permits.

**A1 complete key.** The degrees become \((6,4,4,4)\). Three closed trails at A are \(a,b\); \(c,g,e\); and \(d,i,f,h\). Splicing gives the edge sequence \(a,b,c,g,e,d,i,f,h\) and vertex sequence A,B,A,C,D,A,C,D,B,A. Every one of the nine edge identities occurs once. One added non-loop edge flips parity at only two vertices, so cannot repair four odd degrees for a circuit; two are minimal. With only h, C and D remain odd. An open trail is edges \(c,a,b,d,g,f,h,e\), vertices C,A,B,A,C,D,B,A,D. Its endpoints are precisely the two odd vertices.

## Seminar A2 — Continuous terms, infinite sums, and a disputed warrant

F1 records Cauchy's 1821 partial-sum/remainder argument. F2 records Abel's criticism through the 1881 French collected witness, while F3 records the editors' diagnosis of a dependence gap in Abel's own proof. F4 records Cauchy's 1853 note through a 1900 reprint, including an explicit all-points finite-tail condition. This is a history of a contested inference and its reformulations. It is not a story in which a correct later formula automatically settles every question about earlier meanings.

Use the following **new modern example**, not an example attributed to Cauchy or Abel. On \(I=[-1,1]\), for \(n\ge1\), let
\[
 u_n(x)=x^2(1-x^2)^{n-1},\qquad S_N(x)=\sum_{n=1}^{N}u_n(x).
\]
Write \(q=1-x^2\). Then \(u_n=q^{n-1}-q^n\), so cancellation gives
\[
 S_N(x)=1-(1-x^2)^N.
\]
The identity includes x=0 because it never divides by \(1-q\). Every term and partial sum is a polynomial and hence continuous.

At x=0, all partial sums are 0. At every \(0<|x|\le1\), \(0\le q<1\), so \(q^N\to0\). To prove this elementary limit, if \(0<q<1\), put \(c=q^{-1}-1>0\). Bernoulli's inequality, proved by induction from \((1+c)^{N+1}\ge(1+Nc)(1+c)\ge1+(N+1)c\), gives \(q^N\le1/(1+Nc)\to0\). Thus the pointwise sum S is 0 at 0 and 1 elsewhere. It is discontinuous at the interior point 0: for any \(\delta>0\), \(x=\min(\delta/2,1/2)\) is nonzero, lies within delta, and changes S by 1. Continuous terms and pointwise convergence throughout a neighbourhood do not suffice.

The remainder is 0 at 0, but \((1-x^2)^N\) at nonzero x. Put \(x_N=1/(2N)\). The elementary Bernoulli bound \((1-t)^N\ge1-Nt\), for \(0\le t\le1\), follows by induction as well. Therefore
\[
 |S(x_N)-S_N(x_N)|=\left(1-\frac1{4N^2}\right)^N
 \ge1-\frac1{4N}\ge\frac{3}{4}.
\]
A cutoff working at 0 says nothing about nearby moving points. Here are exact checks, not numerical samples used as a proof:

| N | \(x_N\) | exact error | Bernoulli lower bound |
| ---: | ---: | ---: | ---: |
| 1 | 1/2 | 3/4 | 3/4 |
| 2 | 1/4 | 225/256 | 7/8 |
| 3 | 1/6 | 42875/46656 | 11/12 |

The finite-tail version is sharper for comparing F4. Set \(y_N=\sqrt{1-2^{-1/N}}\). Then \(0<y_N<1\), and
\[
 S_{2N}(y_N)-S_N(y_N)=\frac{1}{2}-\frac{1}{4}=\frac{1}{4}
\]
for every positive integer N. Thus one index cannot make every later finite tail small for all points. This is a modern quantified obstruction, not a literal translation of one historical word.

For a changed domain \(J=[a,1]\), \(0<a<1\), the limit is the constant 1 and
\[
 |S(x)-S_N(x)|\le(1-a^2)^N\quad(x\in J).
\]
The bound tends to zero independently of x, so convergence is uniform. A full sufficient theorem explains why this matters. If continuous functions \(S_N\) converge uniformly to S on D, fix z in D and epsilon>0. Choose one N for which \(|S-S_N|<\varepsilon/3\) everywhere on D. Continuity of this fixed \(S_N\) gives delta so that \(|S_N(x)-S_N(z)|<\varepsilon/3\) for x in D within delta of z. Then
\[
 |S(x)-S(z)|\le|S(x)-S_N(x)|+|S_N(x)-S_N(z)|+|S_N(z)-S(z)|<\varepsilon.
\]
The order “choose N, then delta for that fixed N” is part of the proof.

**Task history-advanced-a2-v1.** For \(J=[1/2,1]\), find the smallest positive N making the actual maximum error strictly less than 1/4. Does continuity of a particular pointwise limit imply uniform convergence?

**A2 complete key.** The maximum is attained at 1/2 and equals \((3/4)^N\). The following exact table proves N=5 is smallest because these positive powers strictly decrease.

| N | maximum error on \([1/2,1]\) |
| ---: | ---: |
| 1 | 3/4 |
| 2 | 9/16 |
| 3 | 27/64 |
| 4 | 81/256 |
| 5 | 243/1024 |

\(81/256>1/4\), whereas \(243/1024<1/4\). For the second question, remove only 0 from I. The pointwise limit is then constantly 1 and continuous on the punctured domain, yet the same \(x_N\) obstruct uniform convergence. Uniform convergence is sufficient for the theorem, not necessary for continuity of an individual limit. These distinctions prevent a repair from becoming a new overclaim.

## Seminar A3 — Arrays, compositions, and the scope of a certificate

L1 records Sylvester's rectangular array as a source of square determinants obtained by row/column selections. L2 records Cayley's treatment of composition, inverse and a polynomial identity, with a stated general-proof limit. The selected passages support two mathematical practices that can coexist. They do not establish a clean replacement, direct influence, or an invention priority.

All numbers below are **our modern teaching adaptation**, over the real numbers with column vectors. They are not reported numerical examples from either source. Define
\[
 A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad
 B=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad M=AB.
\]
The convention is \((AB)v=A(Bv)\). Full entry calculation gives \(AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}\), while \(BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}\). For v=(1,2), Bv=(1,3) then A(Bv)=(4,3), while Av=(3,2) then B(Av)=(3,5). Both products have determinant 1. Equal scalar determinants do not certify equal transformations.

| named matrix | row | first entry | second entry |
| --- | ---: | ---: | ---: |
| A | 1 | 1 | 1 |
| A | 2 | 0 | 1 |
| B | 1 | 1 | 0 |
| B | 2 | 1 | 1 |
| AB | 1 | 2 | 1 |
| AB | 2 | 1 | 1 |
| BA | 1 | 1 | 1 |
| BA | 2 | 1 | 2 |
| \(M^{-1}\) | 1 | 1 | -1 |
| \(M^{-1}\) | 2 | -1 | 2 |
| \(M^2\) | 1 | 5 | 3 |
| \(M^2\) | 2 | 3 | 2 |

To solve \(M(x,y)^T=(4,3)^T\), form the augmented array with columns 1,2,3:
\[
 R=\begin{pmatrix}2&1&4\\1&1&3\end{pmatrix}.
\]
Its two-column determinants are \(D_{12}=1,D_{13}=2,D_{23}=-1\). Our modern solution formula gives \(x=-D_{23}/D_{12}=1\), \(y=D_{13}/D_{12}=2\). This is a reconstruction using determinant selection; Sylvester's selected passage is not being credited with this entire solution formula. A different certificate is
\[
 M^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix},\quad
 MM^{-1}=\begin{pmatrix}2-1&-2+2\\1-1&-1+2\end{pmatrix}=I,
\]
and \(M^{-1}(4,3)^T=(1,2)^T\).

There is also a full modern two-by-two polynomial certificate. For \(X=\begin{pmatrix}a&b\\c&d\end{pmatrix}\), direct multiplication gives
\[
 X^2=\begin{pmatrix}a^2+bc&b(a+d)\\c(a+d)&d^2+bc\end{pmatrix}.
\]
Subtracting \((a+d)X\) and adding \((ad-bc)I\) makes all four entries zero: the upper-left becomes \(a^2+bc-a(a+d)+ad-bc=0\); upper-right \(b(a+d)-(a+d)b=0\); lower-left \(c(a+d)-(a+d)c=0\); lower-right \(d^2+bc-d(a+d)+ad-bc=0\). Thus \(X^2-\operatorname{tr}(X)X+\det(X)I=0\). This proves the identity for every real two-by-two X, not for every matrix size. For M it yields \(M^2-3M+I=0\), hence \(M^{-1}=3I-M\).

The determinant hypothesis is essential for taking an inverse. Let \(N=\begin{pmatrix}2&2\\1&1\end{pmatrix}\). For output (4,2), all augmented two-column determinants vanish, and the solutions are \((t,2-t)\) for every real t. For output (4,3), both non-coefficient augmented determinants equal 2, and the equations demand \(x+y=2\) and \(x+y=3\), so there is no solution. In both cases \(\det N=0\) and \(N(1,-1)^T=0\); an inverse would imply \((1,-1)=0\), a contradiction. The polynomial identity still holds: \(N^2=3N\). Singularity does not decide whether a particular system has infinitely many solutions or none.

**Task history-advanced-a3-v1.** Explain the two solution certificates, identify why determinant agreement does not show AB=BA, and repair “Cayley's singular matrix is called indeterminate, so its system always has infinitely many solutions.”

**A3 complete key.** A minor quotient certifies a solution under \(D_{12}\ne0\), while an inverse certifies a reversible transformation and solves every output. AB and BA give different results on(1,2) despite equal determinants. Cayley's historical term is a lexical observation; our two singular-output cases prove that a modern system can be consistent with infinitely many solutions or inconsistent. Do not import a present-day meaning of “indeterminate system” into the selected matrix term.

## Seminar A4 — Passage ledgers and translation decisions

A passage ledger should make a transformation auditable. Give its exact witness/locator, a bounded observation, your rendering or mathematical reformulation, and the historical claim that remains unavailable. A short token cannot stand in for a complete semantic history. The tables below are completed models, using the source cards' access levels.

| Graph passage | Bounded observation | Rendering or reconstruction | Boundary |
| --- | --- | --- | --- |
| G1 §1, pp. 128–129; G1t §1 | Latin has “geometriam situs”; Behrend renders a geometry of position | Retain that vocabulary before introducing our graph terminology | Do not silently translate it as the whole modern field of topology |
| G1 §5, pp. 130–131; G1t §5 | Latin transcription flags ABDG; English gives ABDC | Our defined regions make the walk A,B,D,C intelligible | The digital note is an editorial observation; print fidelity and the origin of the discrepancy were not collated |
| G1 §§4–7; G2 pp. 143–145 | Euler uses region-letter sequences; Ball explicitly replaces regions/bridges by points/lines | Our edge table preserves incidences and parallel identities | Equivalent information does not prove an identical historical notation |

| Series passage | Bounded observation | Rendering or reconstruction | Boundary |
| --- | --- | --- | --- |
| F1 pp. 131–132 | Partial sum, remainder and total are used to infer continuity of the sum | We isolate the dependency of a remainder cutoff on the point | Pointwise and uniform quantifiers here are M, not a certified literal translation |
| F2 I pp. 224–225; F3 II pp. 302–303 | The collected text criticises Cauchy's assertion; editors also criticise a dependence in Abel's proof | Keep mathematical author and later editors as distinct voices | Neither the German first printing nor an autograph was inspected |
| F4 pp. 32–33 | A sufficiently large index is required to control finite tails for all x; the theorem uses “toujours” | Our uniform-Cauchy formulation makes the scope explicit | A translation of that single word as “always” does not settle every historical interpretation of infinitesimals |

| Array passage | Bounded observation | Rendering or reconstruction | Boundary |
| --- | --- | --- | --- |
| L1 p. 150 | A rectangular array supplies square determinants by selecting rows/columns | Our three two-column minors instantiate the selection | The modern system-solution formula is additional mathematics |
| L2 pp. 17,21 | “convertible” concerns interchange of matrix factors | Our AB/BA comparison tests commutation | It does not mean that the matrices have inverses |
| L2 p. 22 §18 | A zero-determinant matrix is called “indeterminate” | Our modern word is singular | Infinitely many solutions and no solutions remain separate cases |
| L2 pp. 23–24 §§21–23 | Particular polynomial identities are verified; general formal proof is expressly not undertaken | Our entry calculation proves the two-by-two case | It is not a proof for arbitrary size or a verdict on the truth of the general theorem |

**Task history-advanced-a4-v1.** Select one row from each table. Identify what is genuinely a translation, what is an editorial intervention or older-English revoicing, and what is M. Explain one consequence of conflating the layers.

**A4 complete key.** G1t is a named English translation; ABDC versus the flagged Latin token is an editing question whose print origin remains open. F1/F4 English descriptions are our paraphrases, while the quantified conditions and counterexamples are M; the French word does not encode an entire modern theorem by itself. L1/L2 are English witnesses, so replacing an older English technical sense is revoicing, not translation from French or Latin. Reading convertible as invertible would falsely predict AB=BA from the existence of both inverses; A3 supplies a counterexample. Other selections earn full credit when the same distinctions and exact locators are supplied.

## Seminar A5 — Competing historical accounts and their burdens of proof

Consider a real interpretive disagreement rather than a list of great names. Euler's §21 offers advice to remove parallel bridge pairs, find a remaining route, and restore them. Ball pp. 146–147 explicitly presents an inference that Euler had not obtained the practical rule Ball has in mind without knowledge of the figure. The article and the later account can be compared on the level of an explicit general decision criterion, construction advice, and fully specified procedures. They do not give direct access to an unrecorded intention.

One reading emphasises the article's change of representation and economical impossibility argument. Another, exemplified by Ball's stated inference, emphasises the practical specification of construction. These can compete in emphasis without contradicting the same arithmetic. A stronger account states what its criterion of achievement is and then checks it. It does not turn Ball's inference into Euler's confession or turn a modern algorithm into something every earlier reader possessed.

Test construction advice mathematically. Take triangles ABC and DEF and two distinct edges j,k joining C to D. The graph has eight edges, connected support and degrees A=2, B=2, C=4, D=4, E=2, F=2. Deleting the parallel pair j,k preserves even degrees but leaves two disconnected nonempty triangles. Thus arbitrary pair deletion need not preserve connected support. This is a counterexample to that unrestricted modern proposition. It identifies a safeguard that a general implementation must supply; it does not, without further reading, establish that every possible interpretation or restoration of Euler's advice fails. A1's splice construction supplies the safeguard explicitly.

The series history tests a different narrative. A formal pointwise interpretation of the 1821 assertion fails on our polynomial example. The 1853 window explicitly discusses restrictions and finite tails across all x. The 1881 editors, however, identify a dependence weakness in Abel's own argument. This evidence resists a simple rescue story. It still does not decide, by an English paraphrase alone, every scholarly dispute over historical variables and infinitesimal meanings. Distinguish a mathematical criticism with stated definitions from a claim about what an earlier author intended.

For arrays, a narrative of new objects stresses Cayley's operations on matrices as single quantities. A narrative of continuing practices stresses determinant selection and the ongoing usefulness of scalar certificates. Our calculation supports coexistence: minors and an inverse solve the same fixed problem while disclosing different structure. A chronological ordering of two selected publications does not establish replacement or influence.

**Task history-advanced-a5-v1.** Write an evidence table with four columns: claim, supporting passage, strongest limitation, and additional evidence needed. Use Ball's practical-rule inference and one series or array claim.

**A5 complete key.** For Ball: claim H about the practical reach of Euler's method; support G2 pp. 146–147 and comparison G1 §21; limitation that it is Ball's stated inference and that implementation requirements are partly ours; needed evidence includes fuller reception, drafts or correspondence for intentions, and careful analysis of permissible restoration steps. For the series rescue claim: F2 footnote supports a criticism, but F3's proof diagnosis blocks “complete repair”; the exact German printing and wider argument would be needed for a stronger transmission/semantic account. For the replacement claim: L1/L2 support different operations, but no selected passage proves that one practice displaced the other; wider mathematical use, teaching and citation records would be needed. This is a completed reasoning pattern, not an invitation to invent missing evidence.

## Seminar A6 — Comparative practice and a defensible synthesis

A productive comparison follows operations and certificates. In A1, erasing edge identity loses information needed to distinguish parallel crossings; erasing connectedness preserves a parity test but can destroy a single all-edge route. In A2, changing the order of quantifiers changes a theorem's hypotheses; restricting a domain can make a bound uniform. In A3, replacing a transformation by its determinant loses information, and dividing by a zero determinant invalidates a solution formula. These are three precise ways in which a mathematically convenient compression can overstate what has been established.

Compare how each setting organises work. A research article's letter encoding avoids a burdensome enumeration; a later recreation re-presents the problem for a different exposition; a textbook and corrective note discuss warrants for infinite processes; collected editors can change wording and add diagnoses; arrays organise families of determinants or compositions of linear substitutions. These observations concern the selected printed practices and genres. They do not identify every actual reader, classroom, social group, or transmission route.

Write a synthesis with four commitments. Name the witness and the access layer. Reconstruct the operation with all hypotheses. Give the strongest supported alternative interpretation. State which further evidence could distinguish the alternatives. A historical claim becomes stronger through a more exact question, not through an unqualified superlative.

**Task history-advanced-a6-v1.** Repair this comparative thesis: “In every case a genius created the modern object, later mathematicians merely improved rigour, and matching modern answers prove unchanged meanings.”

**A6 complete key.** A defensible revision says that the selected witnesses organise different operations and warrants, and later accounts select different achievements. The modern graph, uniform quantifiers and column-vector notation are labelled reconstructions. Matching outputs can coexist with different representations and admissible operations. Named criticisms and editorial interventions complicate a simple progression. Priority, unchanged meaning and a complete transmission genealogy require additional evidence; none follows from these calculations. Preserve the mathematical advances actually demonstrated without making a universal ranking of people or cultures.

## Required assignments and feedback map

Complete the preparation diagnostic and needed repairs, A0–A6 with their full local keys, then all three portfolios below. The portfolios use different mathematical practices; a numerical substitution in an earlier essay does not replace the changed or return work.

| Stable task | Required work | Public comparison |
| --- | --- | --- |
| history-advanced-preparation-v1 | D1–D5, repeating failed items after the specified repair | Diagnostic key and the named seminar proofs |
| history-advanced-a0-v1 through history-advanced-a6-v1 | Every seminar task, including its mathematical and evidence requirements | Complete local keys |
| history-advanced-primary-v1 | P1–P8: graph traversal and Ball's historical interpretation | [Primary model](#section-264-primary-model-complete-reconstruction-and-historical-ar) |
| history-advanced-changed-v1 | C1–C8: infinite sums, a changed domain, and editorial criticism | [Changed model](#section-298-changed-model-complete-counterexample-repair-and-interp) |
| history-advanced-return-v1 | R1–R8: array selection, matrix operations and singular systems | [Return model](#section-332-return-model-complete-algebraic-certificates-and-interp) |
| history-advanced-synthesis-v1 | Revise A6 after comparing all three portfolios; name one retained and one changed conclusion | A6 key, the three model positions, and [rubric](#section-362-rubric-repair-and-completion) |

The later public return is done after the changed portfolio and a later study interval of your choice. Record the actual interval and all help. Public materials cannot establish an unseen return or measured retention. Source-language or archival extensions are optional additional projects with their own preparation; they are not silently required to make these offline tasks complete.

## Primary portfolio — Bridges and historical interpretation

**Task history-advanced-primary-v1.** Use the G1/G1t/G2 capsules and ledgers. Submit eight deliverables: **P1** exact cards for the Latin digital witness, its named English translation, and Ball 1905, distinguishing all date fields and your own access level; **P2** a three-row passage ledger covering vocabulary, the flagged letter discrepancy, and representation; **P3** the seven-edge degree/letter impossibility proof with the endpoint identity; **P4** the nine-edge circuit, the one-added-edge open trail, minimality of two additions for a circuit, and the full construction proof with its hypotheses; **P5** the two-triangle deletion counterexample and the precise proposition it refutes; **P6** two supported interpretive positions, including Ball's stated inference and the strongest limitation of each; **P7** repairs of “Euler drew our graph”, “1736 is the verified publication and presentation date”, and “a parity criterion alone is a fully specified general route algorithm”; **P8** a 250–350-word revised position, with its strongest counter-reading, plus the separate dated comparison/help record. All edge sequences must use named edge identities.

## Primary model — Complete reconstruction and historical argument

**P1.** G1 is Euler E53, Latin article in volume 8 labelled 1736, pp. 128–140, printed 1741 according to the archive, which reports written 1735. Our access is the course capsule based on Behrend's digital Latin transcription, not an inspected original printing. G1t is Behrend's independent English translation of that article, with original-page markers, accessed for course research 2026-11-04; its digital publication date and express reuse licence were not established. G2 is Rouse Ball's fourth edition, London, Macmillan, 1905, Chapter VI pp. 143–147, through the specified Gutenberg reproduction with editorial correction notes. Its 1736 presentation claim is H, not an Academy record inspected here. The source register supplies exact links; a learner's optional direct access must be separately dated.

**P2.** The completed graph ledger in A4 is retained in this model: geometry-of-position vocabulary is kept distinct from modern graph terminology; the Latin transcription flags ABDG while the English gives ABDC, and our defined walk uses A,B,D,C; Euler's letter sequence and Ball's explicit point/line representation preserve incidences in different presentations. The discrepancy's print origin and original-language fidelity remain unverified.

**P3.** From the edge table, degrees are A=5, B=3, C=3, D=3, sum 14. Counting visits gives \(d(v)=2n_v-s_v-t_v\); every odd-degree vertex must supply a start or finish. Four odd vertices cannot be covered by only two endpoint indicators. Equivalently A needs at least 3 occurrences and B,C,D at least 2 each: at least 9 against 8 positions available. Requiring a return to the start would be stronger than the original question and is unnecessary for this impossibility.

**P4.** Add h:AB and i:CD. The degrees are 6,4,4,4. Use the closed pieces A-a-B-b-A, A-c-C-g-D-e-A, and A-d-C-i-D-f-B-h-A. Splicing at A gives vertices A,B,A,C,D,A,C,D,B,A with edges a,b,c,g,e,d,i,f,h, all nine distinct. With only h, use C-c-A-a-B-b-A-d-C-g-D-f-B-h-A-e-D; its endpoints C,D have odd degree. One new edge changes parity at at most two vertices, so two additions are necessary for a circuit and our construction attains that bound. For general sufficiency, an unused-edge walk from an even-degree start cannot be exhausted elsewhere after an unmatched arrival. First return gives a closed trail; removing it leaves even residual degrees. Connected support guarantees a current-trail vertex adjacent to the unused part. Construct and splice another residual closed trail there. Each splice uses edges and finiteness terminates. With two odd vertices add a distinguished artificial edge, construct a circuit, cut there and remove it. These are modern proofs with the hypotheses stated.

**P5.** Take edges AB,BC,CA,DE,EF,FD and the two parallel CD edges j,k. All degrees are even and support connected. Deleting j,k leaves two nonempty triangles. Therefore parity-preserving pair deletion does not always preserve connected support. This refutes the unrestricted modern deletion assertion, not all interpretations of Euler's advice. A general procedure must preserve or explicitly restore the component connections and account for every deleted edge.

**P6.** Position one emphasises Euler's economical decision procedure and letter encoding; support G1 §§3–9 and 16–20, with §21 supplying construction advice. Its limit is that a modern, fully specified algorithm must not be read into every sentence. Position two uses Ball's explicitly marked inference concerning practical route construction; support G2 pp. 146–147, checked against G1 §21. Its limit is that an inference in a later account does not establish Euler's unrecorded intention. The positions have different criteria of practical achievement and can overlap.

**P7.** Repair1: our graph is a modern reconstruction of the specified incidences; Ball supplies the later explicit point/line representation. Repair2: distinguish archive-written 1735, nominal-volume 1736, archive-publication 1741 and an unverified presentation event; Ball's claim remains attributed. Repair3: distinguish an impossibility criterion, general sufficiency proof and step-by-step construction. The splice algorithm supplies the latter two here; do not retroactively attribute our precise formulation.

**P8. Model revised position.**

The selected bridge texts support a history of changing representations and standards of practical explanation. Euler records a question about crossing distinct bridges and develops a notation of successive regions. The impossibility argument can be checked without knowing bridge lengths or drawing a modern graph. Four odd-degree regions cannot all become the two endpoints of one complete trail.

Ball later presents regions and bridges through points and lines. That presentation helps his account of unicursal networks, but mathematical equivalence does not make it the original notation. His judgement about the practical reach of Euler's construction is explicitly an inference. A historical account should retain that qualification rather than convert it into testimony about Euler's intentions.

The strongest counter-reading emphasises that Euler does offer construction advice. It would therefore be misleading to say that the article contains nothing beyond a negative example. The question is what level of procedural specification the advice supplies. Our modern deletion counterexample identifies a connectivity issue for an unrestricted implementation; it does not prove that every possible restoration strategy fails.

A complete modern construction makes the needed assumptions explicit: finite edges, connected support and appropriate parity. Closed residual trails can be spliced until every edge is consumed. This proof clarifies the mathematical burden without establishing that earlier authors possessed our formulation.

Chronology needs the same care. A volume label, a written-date report, a publication field and a later presentation claim are separate evidence. Their different numbers cannot simply be treated as contradictory dates for one event.

My revised account therefore distinguishes decision, construction, representation and later interpretation. It acknowledges Ball's criticism while testing its scope against the article and the mathematics. Stronger claims about intentions, first invention or actual readership would require evidence beyond these windows. The result is a supported comparative history rather than a priority verdict.

## Changed portfolio — Infinite sums and the order of quantifiers

**Task history-advanced-changed-v1.** Use F1–F4, changing both mathematical practice and evidence problem. Submit **C1** exact source cards and date/access layers; **C2** a passage ledger separating the 1821 argument, the collected criticism, the editors' diagnosis, and the later all-points tail condition; **C3** the polynomial telescoping identity, pointwise convergence and interior discontinuity; **C4** both moving-point obstructions, including the exact finite tail; **C5** the changed domain \(J=[1/2,1]\), smallest strict 1/4 cutoff, full uniform-limit continuity proof, and a reason uniformity is not necessary for an individual continuous limit; **C6** two interpretive accounts with their strongest limits; **C7** repair the claims “the French is the inspected German original”, “Abel's criticism establishes a complete repair of his own proof”, and “one translated word proves all historical meanings are our modern quantifiers”; **C8** a 250–350-word revised position with the strongest counter-reading and a separate comparison/help record. The polynomial example is explicitly ours.

## Changed model — Complete counterexample, repair, and interpretation

**C1.** F1 is the original 1821 Cours, Chapter VI §1 pp. 131–132, through ETH's OCR of its identified edition. F2 is Abel's French collected witness in the 1881 nouvelle édition, tome I memoir XIV pp. 224–225, not the German first printing. F3 is Sylow/Lie's editorial note, tome II pp. 302–303, in that collection; its publication-history statements remain attributed to the editors. F4 is Cauchy's 1853 note read through the 1900 first-series tome XII reprint, no. 518 pp. 30–36, selected 32–33. The original 1853 printing and Abel's autograph were not inspected. This model uses the capsules; course research access was 2026-11-04. The exact external records are in the source cards.

**C2.** F1 supports observation of a partial-sum/remainder continuity argument, not an explicit modern uniform quantifier. F2 supplies a criticism in a mediated French witness; F3 is a different editorial voice locating a cutoff's dependence on a nearby point. F4 explicitly requires finite-tail control across all x with one sufficiently large index. The A4 ledger's paraphrases and modern quantifiers remain distinct. No word alone settles the interpretation of an entire historical continuum.

**C3.** For n≥1, \(u_n=x^2(1-x^2)^{n-1}=q^{n-1}-q^n\), where \(q=1-x^2\). Summing gives \(S_N=1-q^N\) even at 0, without dividing. The terms are continuous polynomials. At0, \(S_N=0\); for nonzero x in[-1,1], \(0\le q<1\), and Bernoulli gives \(q^N\le1/(1+N(q^{-1}-1))\to0\) when q>0, while q=0 is immediate. Thus S(0)=0 and S(x)=1 elsewhere. Given any delta>0, the nonzero point \(\min(\delta/2,1/2)\) changes S by 1, disproving continuity at 0 with epsilon 1/2.

**C4.** At \(x_N=1/(2N)\), the error is \((1-1/(4N^2))^N\ge1-1/(4N)\ge3/4\), by the elementary negative-increment Bernoulli induction. The explicit rational checks in A2 confirm the first three cases; the inequality proves all positive N. At \(y_N=\sqrt{1-2^{-1/N}}\), the remainder powers are 1/2 and 1/4 for N and 2N, giving the finite tail \(S_{2N}-S_N=1/4\). Hence even arbitrarily late finite tails cannot be made uniformly small on I. A small tail at 0 is insufficient for a neighbourhood.

**C5.** On J=[1/2,1], the maximum error is \((3/4)^N\), attained at 1/2. N=4 gives 81/256>1/4, N=5 gives 243/1024<1/4; strict decrease proves minimality 5. More generally \(J=[a,1]\) gives the x-independent bound \((1-a^2)^N\to0\). For continuity at any z, first choose N making both tails below epsilon/3 at every point, then choose delta from continuity of that fixed \(S_N\); the three-term triangle inequality bounds the total difference by epsilon. On the punctured interval, S is constantly 1 but the same \(x_N\) defeats uniform convergence. Thus uniformity is a sufficient hypothesis for the theorem, not a necessary property of each continuous limit.

**C6.** One account emphasises a formally invalid inference under modern pointwise definitions; our interior counterexample establishes that mathematical criticism completely. Another attends to changing formulations, meanings and editorial interventions, supported by F1–F4. Its limit is that semantic possibilities cannot erase the false modern statement, while the first account cannot establish historical intentions from its formalisation alone. F3 prevents assigning an uncomplicated completed repair to Abel. F4 supports a specific stronger condition, not an unlimited claim about all later rigour.

**C7.** The French collected witness is not a directly inspected German first printing or autograph. A criticism of another theorem does not certify the critic's own proof; keep F3's diagnosis visible. Translate the bounded wording and label our quantifiers M, checking the full all-points condition in F4 rather than deriving a theorem from one token. Nominal-volume 1826 and the editors' reported fascicle 1827 are different date statements with different provenance.

**C8. Model revised position.**

The series witnesses show why a history of rigour needs both mathematics and source criticism. Under our modern pointwise definitions, convergence of continuous terms does not ensure a continuous sum. The polynomial series has continuous partial sums and converges at every point of a neighbourhood, yet its sum jumps at an interior point. This is a complete mathematical objection to that formulation.

The moving-point calculations locate the difficulty. A remainder that vanishes at the central point can stay large nearby. A finite tail can equal one quarter at a point chosen for its index. Exchanging a point-dependent cutoff for one common cutoff therefore changes the proof's assumptions. Restricting the domain away from zero supplies the missing uniform control in this example.

The strongest counter-reading asks whether our formalisation captures every meaning of the historical variables. That is a legitimate source question. It does not invalidate the counterexample, but it limits what the counterexample alone can establish about an author's intentions. English paraphrase and a single French token cannot settle all such semantic questions.

The consulted editions also contain several voices. Abel's criticism reaches us in a French collected witness. The same collection's editors describe translation and publication layers and identify a dependence weakness in his own argument. A simple account in which criticism immediately produces a complete repair would suppress this evidence.

Cauchy's later note, read through its stated reprint, explicitly discusses a condition on finite tails across all points. Our uniform-Cauchy formulation clarifies that condition's mathematical role without claiming a complete literal equivalence of conceptual systems.

The revised history therefore separates a false modern inference, a valid modern sufficient theorem, recorded criticism and later formulation. Further linguistic or archival evidence could refine the historical interpretation. It cannot be replaced by either reverence for an author or a verdict drawn only from today's notation.

## Return portfolio — Arrays, operations, and singular systems

**Task history-advanced-return-v1.** After C and a later recorded study interval, use L1/L2. Submit **R1** exact source cards, date events and access levels; **R2** a passage ledger distinguishing determinant selection, composition, older-English terms and proof scope; **R3** the A/B products and vector images, with determinant checks; **R4** all three augmented minors, the solution and inverse, and the general two-by-two polynomial identity with its four entry checks; **R5** both singular-output cases for N and a direct no-inverse certificate; **R6** two supported accounts of the change in mathematical practice, with evidence needed for influence or replacement; **R7** repair “convertible means invertible”, “zero determinant means infinitely many solutions”, and “the selected particular verifications are a general proof for every matrix size”; **R8** a 250–350-word revised position and a separate comparison/help record. Use our fixed numerical adaptation; do not claim that either author printed these numbers.

## Return model — Complete algebraic certificates and interpretation

**R1.** L1 is Sylvester's paper 25 in the 1904 Collected Mathematical Papers I, pp. 145–151, selected 147–148 and 150. Its heading attributes the article to Philosophical Magazine37(1850),363–370; that original journal printing was not inspected. L2 is Cayley's 1858 Philosophical Transactions 148,17–37, selected 20–24 §§11–23, from the original-journal scan. The first page records received 10 December 1857 and read 14 January 1858; those are not publication dates. Both witnesses are English, so the ledger's revoicing is not a translation from another language. Model access is the capsule; course research access 2026-11-04, with exact records below.

**R2.** L1's rectangular array generates square determinants by row/column choices; our solution formula adds a modern interpretation. L2's composition and inverse support operations on arrays, but its convertible concerns commuting factors, while indeterminate concerns a zero determinant. The selected polynomial verification and the explicit general-proof limitation must both be recorded. The completed A4 array ledger supplies the exact passage-level correspondences.

**R3.** Direct products are AB rows (2,1),(1,1), and BA rows (1,1),(1,2), each determinant 1. With v=(1,2), Bv=(1,3), A(Bv)=(4,3), Av=(3,2), B(Av)=(3,5). Thus invertible matrices need not commute, and equal determinants do not mean equal transformations. The convention puts the nearer operation B on the vector first in AB.

**R4.** For R rows (2,1,4),(1,1,3), \(D_{12}=2\cdot1-1\cdot1=1\), \(D_{13}=2\cdot3-4\cdot1=2\), \(D_{23}=1\cdot3-4\cdot1=-1\). Therefore x=1,y=2 and M(1,2)=(4,3). The inverse rows (1,-1),(-1,2) multiply with M to I and recover that solution. For general \(X=(a,b;c,d)\), the four entries of \(X^2-(a+d)X+(ad-bc)I\) are \(a^2+bc-a(a+d)+ad-bc\), \(b(a+d)-(a+d)b\), \(c(a+d)-(a+d)c\), and \(d^2+bc-d(a+d)+ad-bc\), all zero. This proves every real two-by-two case. For M, trace 3 and determinant 1 give M² rows (5,3),(3,2), \(M^2-3M+I=0\), and \(M^{-1}=3I-M\). It is not an arbitrary-size proof.

**R5.** For N rows (2,2),(1,1), determinant 0. With output (4,2), the three augmented minors are 0,0,0 and both equations reduce to x+y=2, giving all (t,2-t). With output (4,3), the minors are 0,2,2 and the equations require x+y=2 and x+y=3, so none exist. In either case N(1,-1)=0 with a nonzero input, ruling out an inverse. Also N²=3N, so the polynomial identity remains valid even though division by the determinant is forbidden.

**R6.** An object-centred account emphasises composing matrices and manipulating functions of one matrix. A practice-centred account emphasises the coexistence of scalar minor certificates and transformation certificates. Both are supported by the selected windows and our comparative reconstruction. Neither demonstrates a direct Sylvester-to-Cayley influence route or the displacement of determinant methods. That would require fuller citations, correspondence, teaching or use records. Cayley's linear-equation setting and Sylvester's determinant setting are stated contexts, not a census of readers.

**R7.** Convertible is revoiced here as commuting; A and B invertible yet noncommuting separate it from invertible. A zero coefficient determinant must be followed by a consistency analysis; our two outputs demonstrate different outcomes. Finally, distinguish a true general mathematical theorem from the proof actually supplied in a particular text: L2 §23 does not undertake the general formal proof, and our entry calculation covers size 2 only.

**R8. Model revised position.**

The array witnesses support a comparison of operations rather than a simple story of replacement. Sylvester's selected passage organises families of determinants by choosing rows and columns. Cayley's selected passages treat matrices through composition, inverses and polynomial expressions. Our numerical adaptation makes the difference mathematically visible without pretending that either author printed it.

Two invertible factors give different products when their order is reversed. Their determinants agree, so the determinant is not a complete record of the transformation. An array used to organise scalar conditions and an array treated as an operative quantity can therefore expose different information about the same problem.

The strongest counter-reading stresses continuity between these practices. That reading is supported by the fact that minor quotients and an inverse recover the same solution here. We should not describe one as disappearing when the other becomes available. Nor does a chronological ordering of selected publications establish who influenced whom.

Older terminology adds another caution. Reading convertible as invertible would confuse commutation with reversibility. Reading an indeterminate matrix as a guarantee of infinitely many solutions would confuse singularity with consistency. Our two singular-output cases separate those questions explicitly.

Proof scope also matters. The two-by-two polynomial identity is verified entry by entry, and it supplies an inverse when the determinant is nonzero. That does not turn our proof into a proof for every matrix size. The consulted memoir itself distinguishes particular verification from a general formal proof.

My revised account treats these witnesses as evidence for changing and coexisting mathematical practices. It identifies what each selected operation certifies, what it discards, and which hypotheses its use requires. It leaves stronger claims about priority, replacement, influence and actual reception open to further evidence. The mathematics supports the historical question; it does not answer every historical question by itself.

## Rubric, repair, and completion

Use a 100-point public self-review rubric for each portfolio: **30 mathematical reconstruction and hypotheses; 25 source/edition/translation traceability; 25 historiographic argument and competing interpretation; 10 context and comparison of practices; 10 accessible presentation, revision and help disclosure**. Score each category from 0 to 4, multiplying its weight by score/4. A 4 is complete and correct with explicit limits; 3 is a local omission leaving the argument sound; 2 misses a substantial distinction; 1 is mostly unsupported; 0 is absent or incompatible with the task. This is a feedback convention, not a validated grade, credit award or observation of learner ability.

Mathematical full credit requires the requested proof or complete edge/table certificate, not only a final value. Traceability full credit requires exact selected editions, passage locators, separate date events and honest access levels. Argument full credit requires both supported interpretations, the strongest counter-reading, and a reason why the remaining evidence cannot decide a stronger claim. Context full credit distinguishes a stated purpose or genre from demonstrated use and connects the practices without ranking communities. Revision full credit includes the 250–350-word position, an equivalent text/table for any diagram, preserved attempts and explicit key/help exposure.

A portfolio cannot pass with an unsupported invention, influence or manuscript-genealogy claim merely because its calculations score well. Mark it repair-required. Likewise an unlabelled modern counterexample attributed to a historical author, a missing graph connectedness condition, an exchanged quantifier, or division by a zero determinant requires correction before proceeding.

After each first attempt, compare the full public model and passage ledger, mark each disagreement by category, and write a reasoned repair. Reconstruct a failed algorithm on the actual named edges; replace a pointwise cutoff by a proven uniform bound only on its stated domain; check all entries and determinants when revising an inverse claim. For a historical disagreement, identify the exact evidence that would distinguish the interpretations, and leave it open when those records are unavailable. Then close the key and reattempt the relevant seminar task, declaring earlier exposure.

Completion for self-study means D1–D5 and needed repairs, A0–A6, all eight deliverables in P/C/R, and the revised A6 synthesis with dated first/comparison/revised files. Optional human discussion can supply additional feedback; availability or completion is not asserted. A checkmark or mutable browser note does not replace these files or establish a supervised performance.

## Source cards and bounded offline capsules

All research windows below were inspected digitally on **2026-11-04**. “Inspected” here means the stated digital text, OCR, translation or reproduction, not universal scan collation or original-language certification. Printed page numbers are the passage locators; an OCR line number is not a historical page. The capsules and ledgers contain the source observations required for offline work. External audits are optional and must be honestly distinguished from capsule access.

### G1 and G1t — Euler's article and Behrend's renderings

Leonhard Euler, Solutio problematis ad geometriam situs pertinentis, Commentarii academiae scientiarum Petropolitanae 8, pp. 128–140 with Plate VIII. The [Euler Archive E53 record](https://scholarlycommons.pacific.edu/euler-works/53/) reports written 1735 and published 1741; the volume is labelled 1736. Consulted [Latin digital transcription](https://www.cantab.net/users/michael.behrend/repubs/maze_maths/pages/euler.html), §§1–21, and [Michael Behrend's English translation](https://www.cantab.net/users/michael.behrend/repubs/maze_maths/pages/euler_en.html). The [collection index](https://www.cantab.net/users/michael.behrend/repubs/maze_maths/pages/index.html) identifies its English translations as MB's own. Their digital publication date and express reuse licence were not established. This is not an inspected eighteenth-century printing or a critical edition.

**Capsule.** §1 pp. 128–129 distinguishes a geometry of position from magnitude calculations and invokes Leibniz. §§2–3 pp. 129–130 set a general crossing problem and avoid exhaustive enumeration. §§4–9 pp. 130–133 encode region sequences and establish the nine-versus-eight impossibility count. §§16–20 pp. 137–139 give the general parity criterion; §21 p. 140 offers deletion/restoration advice. The digital Latin §5 flags ABDG while the English reads ABDC. We have not assigned that discrepancy to an inspected print source. The incidence table and proofs in A1 are our reconstruction of the specified data, not a copied map.

### G2 — Rouse Ball's reception and interpretation

W. W. Rouse Ball, Mathematical Recreations and Essays, fourth edition, London, Macmillan, 1905, Chapter VI, printed pp. 143–147, [Gutenberg reproduction](https://www.gutenberg.org/files/26839/26839-pdf.pdf#page=159). Its title matter identifies the fourth edition; transcriber notes identify corrections and editorial footnote conventions. [The host's rights page](https://www.gutenberg.org/ebooks/26839) supplies its distribution conditions and United States public-domain notice. This re-typeset reproduction is not an unmodified scan.

**Capsule.** Pages 143–145 explicitly represent islands/bridges by points/lines. Pages146–147 give a hook-pairing construction and state Ball's inference about Euler's failure to obtain the practical rule he discusses without knowing the figure. Page 143 gives 1736 as a presentation date. We retain its status as Ball's claim; our selected archive record separately identifies written and publication dates without verifying that presentation event. The capsule supports a comparison of later interpretation and earlier argument, not an invention-priority verdict.

### F1 — Cauchy's original 1821 textbook window

Augustin-Louis Cauchy, Cours d'analyse de l'École royale polytechnique, première partie, Analyse algébrique, Paris, Imprimerie Royale / Debure frères, 1821, Chapter VI §1, printed pp. 131–132. Consulted [ETH original-edition OCR](https://www.e-rara.ch/zut/download/ftpack/plain/8445462); [edition/rights record](https://www.e-rara.ch/zut/content/titleinfo/8445462), ETH Rar 10366, DOI 10.3931/e-rara-26185, Public Domain Mark. This 1821 window is distinct from the 1897 reprint used for the core's earlier limit-definition window.

**Capsule.** Page131 introduces partial sum, remainder and total, and argues that the remainder's increment becomes negligible with a sufficiently large index. The continuity theorem starts there and continues on 132. The wording does not state our modern uniform quantifiers explicitly. Our polynomial example tests a declared modern pointwise formulation; it is not printed in the passage and does not independently determine all historical meanings of the variables. OCR is a reading aid, not a guarantee about every printed symbol.

### F2 and F3 — Abel's collected text and the editors' notes

Niels Henrik Abel, Œuvres complètes, nouvelle édition, ed. L. Sylow and S. Lie, Christiania, Grøndahl & Søn, 1881, tome I memoir XIV pp. 219–250, selected footnote pp. 224–225; tome II editorial notes pp. 302–303. Consulted [collected title, preface, text and notes OCR](https://archive.org/stream/117742591/117742591_djvu.txt), reached through the [digitised item](https://archive.org/details/117742591). The inspected text is French; a host language label does not turn it into English or the German first printing. No autograph was inspected, and the host did not supply an explicit reuse licence for all digital components.

**Capsule.** F2's footnote quotes Cauchy's assertion, reports exceptions and supplies a sine-series example. We do not reconstruct that example's convergence here. F3 reports a French composition in winter 1825–26, translation into German by Crelle, and publication of the relevant nominal 1826-volume fascicle in February/March 1827. It also identifies a possible cutoff dependence on the neighbouring-point increment in Abel's own theorem V proof. These editorial statements are attributed, not independently verified publication or manuscript records. They complicate a simple critic-as-complete-repairer account.

### F4 — Cauchy's 1853 note through a 1900 reprint

Augustin-Louis Cauchy, Note sur les séries convergentes…, original reference Comptes rendus 36(1853), pp. 454–459; consulted Œuvres complètes, première série, tome XII, Paris, Gauthier-Villars, 1900, no. 518, pp. 30–36, selected pp. 31–33. [Inspected reprint OCR](https://www.e-rara.ch/zut/download/ftpack/plain/5705720); [edition/rights record](https://www.e-rara.ch/zut/content/titleinfo/5705720), Public Domain Mark. The title leaf gives MCM. The original 1853 printing was not inspected.

**Capsule.** Page31 acknowledges restrictions on the earlier assertion. Page32 asks for a sufficiently large index that controls finite tails for all x within the stated limits and every later tail endpoint. Page33 states its theorem with the token toujours. This supports the bounded uniform-Cauchy comparison in A2. It does not by itself settle every interpretation of infinitesimal language or prove a complete history of uniform convergence.

### L1 — Sylvester's English collected witness

J. J. Sylvester, Additions to the Articles…, Collected Mathematical Papers, vol. I, Cambridge University Press, 1904, paper 25, pp. 145–151, selected pp. 147–148 and 150. [Seven-page reprint](https://rcin.org.pl/Content/113694/PDF/WA35_138834_11371-1_Art25.pdf#page=6); [repository record and public-domain declaration](https://rcin.org.pl/dlibra/publication/138834/edition/113694). The reprint heading gives Philosophical Magazine 37(1850),363–370. That original printing was not inspected; an exact original publication day/month was not verified. The consulted language is English, not an English translation made for this course.

**Capsule.** The selected paragraphs discuss square minors obtained by deleting rows/columns, then describe an oblong array from which equal numbers of rows and columns are selected to form square determinants. Our augmented-array calculations instantiate this selection but add a modern system-solution interpretation. The surrounding general claims about independent vanishing conditions are not adopted as proved theorems in this course.

### L2 — Cayley's original journal memoir

Arthur Cayley, A Memoir on the Theory of Matrices, Philosophical Transactions of the Royal Society of London 148(1858), pp. 17–37, selected pp. 20–22 §§11–18 and 23–24 §§21–23. [Original journal scan](https://upload.wikimedia.org/wikipedia/commons/1/1a/A_Memoir_on_the_Theory_of_Matrices_%28IA_jstor-108649%29.pdf#page=4); [scan provenance/public-domain declaration](https://commons.wikimedia.org/wiki/File:A_Memoir_on_the_Theory_of_Matrices_%28IA_jstor-108649%29.pdf). The first page records received 10 December 1857 and read 14 January 1858; they are separate from the 1858 journal publication. English original; our notation and numbers are labelled M. No wider editorial or manuscript collation is claimed.

**Capsule.** Composition order and inverse appear in §§11–18, including the zero-determinant boundary. Pages17,21 use convertible for commuting factors; §18 uses indeterminate for a zero-determinant matrix. §§21–23 give particular polynomial verifications and expressly decline a general formal proof. Our four-entry calculation establishes size 2, while the general theorem's truth is not being denied. Its proof in arbitrary size is outside the assigned reconstruction.

## Limits, rights, and further inquiry

Our prose, problem formulations, tables and modern proofs are licensed **CC BY-SA 4.0**. This does not relicense linked translations, scans, OCR or reproductions. The e-rara records carry Public Domain Mark; the Sylvester repository and Cayley scan page provide their own public-domain declarations. Gutenberg states United States public-domain and distribution conditions. Behrend's independent translation has no express reuse licence established here; the Abel item's digital components have no blanket licence established here. Use the independently written capsules, exact mathematical data and links; no source image, PDF copy or long source extract is embedded. Attributed lexical tokens are kept brief, with no more than 25 verbatim words from any one web source.

These witnesses teach advanced historiography, source criticism and comparative practice through actual arguments and their retelling, rather than by extending the core's I.1 exercise. The cases are a sustained study of specified printed practices, not a census of every community or a complete original-language historiography. Global/contextual breadth remains part of the accepted core preparation. Claims about manuscript genealogy, uninspected printed variants, actual classroom reception or original-language fidelity require further evidence. A specialist archival or linguistic project would need its own sources, preparation and assessment; completion of this public course supplies no such qualification.
