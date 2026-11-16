var e=`---
id: course-research-frontiers-specialist
title: "Investigation: What Does a Persistence Rank Audit Identify?"
level: graduate
status: beta
estimated_minutes: null
license: CC BY-SA 4.0
---

# Investigation: What Does a Persistence Rank Audit Identify?

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-research-frontiers-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Research Frontiers: A Two-Paper Seminar and Reproduction Project](/courses/atlas-research-frontiers-advanced/) · [Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction](/courses/atlas-paper-reading-reproduction-core/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A reproducible calculation can still answer the wrong question. This specialist programme investigates a precise example: when do sampled ranks of persistence maps identify a barcode, and when do they leave several possible explanations? You will reconstruct an additional primary-source argument, prove identification under explicit hypotheses, expose two different failures, run and independently audit a bounded reference program, and write a report with a substantive referee response.

The completed [finite-path stability clinic](#/item/deep-dive-research-frontier-persistence-stability-clinic) is our starting theorem, not our new project. The [advanced two-paper seminar](#/item/course-research-frontiers-advanced) supplies landscape comparisons, research ethics and a first reproducibility programme. Here the new mathematical work concerns images, kernels, rectangle counts, rank inversion, observation error and sampling resolution. It is a sustained investigation in one specialist branch, with complete closed-project models. Its extensions remain questions; no novelty, human supervision or broad research qualification is claimed. Study time depends on the selected reading, attempts and corrections.

## RFS-0 — Entry requirements and exact repairs

Bring finite-dimensional linear algebra over a field, quotient spaces, proof with quantifiers, persistence modules and interval summands. Homology calculations here use $\\mathbb F_2$; the rank identities work over any field. Real-valued endpoint distances and observation errors use ordinary real arithmetic. You need enough JavaScript to copy a complete function, supply a JSON object, run it in an existing JavaScript environment and retain the actual input/output. No package or browser installation is required. Running the bounded public function is required work: a hand derivation is its independent mathematical check, not a substitute execution claim.

Use this ordered source work. Retain earlier completed work if it already exists, with its help exposure; repeat only what you cannot reconstruct. Every assignment has a complete key, rather than an invitation to select an unspecified exercise.

| Order and exact source address | Required output | Complete feedback address |
| --- | --- | --- |
| S1. [Linear Algebra](#/item/course-linear-algebra-standard), **Unit 2 — Vector spaces, basis, and dimension** and **Unit 3 — Linear maps and rank–nullity**; polynomial bridge **B1** and **B4** | Prove basis extension/rank–nullity, distinguish an image from its domain, and identify a fiber and a restricted inverse. | The two units' full proofs; **Explanations for the polynomial bridge**, **B1 explanation** and **B4 explanation**. |
| S2. [Finite-path clinic](#/item/deep-dive-research-frontier-persistence-stability-clinic), **Original proof task — persistence-stability-original-v1**, all five parts | All-real-height barcode classification, universal fixed-path stability, original exact comparison, natural PL correspondence and inference limit. | **Complete model for the original proof task**, all five parts. |
| S3. Same clinic, **Changed matching task — persistence-stability-changed-v1**, all five parts; then its final translated return | Exact alternatives for p/q/r and the common translation by −3; account for essential and diagonal matches. | **Complete model for the changed matching task** and **Descriptive rubric, repair and later reconstruction**, final paragraph. |
| S4. [Paper-reading core](#/item/course-paper-reading-reproduction-core), **RESEARCH-PAPER-P**, **RESEARCH-PAPER-C** and **RESEARCH-PAPER-R** | Retain the selected Bauer proof/reduction portfolios, including the distinction between changed graph and changed tie order. | Each portfolio's following **Complete model**; imported matrix-pairing and stability boundaries remain explicit. |
| S5. [Advanced seminar](#/item/course-research-frontiers-advanced), **RFA-3 — Landscapes, averaging and two finite proofs**, **RFA-C — Changed inputs and a methods comparison**, **RFA-R — Later return: rescaling and the true units** | Reconstruct the finite area/sup-stability proofs; retain the complete changed and return projects, including unit/design and rights corrections. | RFA-3's full proofs; **RFA-C — Complete model and repair**; **RFA-R — Complete model, ledger and ethics decisions**. |
| S6. New source capsule RFS-3, then proofs RFS-4/5 | Translate the selected primary statements into images/kernels, prove the alternating formula and additivity, then derive finite identification and its limits. | Complete local proofs in RFS-4/5; this is additional work beyond the fixed-path and landscape arguments. |

For S2/S3 the fixed clinic yields $D(f)=\\{[0,\\infty),[1,3)\\}$, $D(g)=\\{[0,\\infty),[1,2)\\}$ and exact distance 1. It proves the general three-height formula and handles the disappearing bar; these numerical answers alone do not answer its universal proof. For $p=(2,6,3)$ and $q=(3,4,3)$ the input sup error is 2 and exact bottleneck distance is $3/2$, since deleting both finite bars beats pairing them. Replacing q by $(3,3,3)$ leaves distance $3/2$ with input error 3. Translating both p and q by −3 translates their bars without changing either distance. These checks locate the complete source keys; they do not replace the component-map and naturality proofs.

If an image/kernel proof fails, repair S1 before RFS-4. If half-open intervals, diagonal matching or essential bars fail, repair S2/S3. If field arithmetic or induced homology maps fail, use [Compute Simplicial Homology](#/item/recipe-simplicial-homology-computation), **Steps 3–7**, with its triangle-boundary/filled-triangle matrices and complete ranks, then S4. If scientific significance is being inferred from deterministic stability, return to S5's methods/ethics model. The native TDA survey's square must be read on nonnegative scales; under its diameter rule negative scales give the empty complex. This course uses interval modules, not an unqualified negative-scale square claim.

## RFS-1 — Diagnostic, answers and a repair gate

Attempt before comparing:

1. Let $A=\\langle e_1,e_2\\rangle$, $B=\\langle e_1\\rangle$ in $\\mathbb F_2^3$, and $T(x,y,z)=(x,0,0)$. Find $A\\cap\\ker T$, $B\\cap\\ker T$ and the quotient dimension.
2. A bar is $[1,3)$. What are its contributions to ranks $r(1,2)$, $r(1,3)$ and $r(0,2)$?
3. Two spaces both have dimension 2. Must a map between them have rank 2?
4. Does knowing every vector-space dimension determine all persistence maps?
5. Four rank observations each have absolute error at most $\\eta$. Bound the error of an alternating sum with coefficients $+1,-1,-1,+1$.
6. A finite rank table ends at time 4. Does an observed survivor prove that its actual death is infinite?

**Complete diagnostic key.** (1) The intersections are $\\langle e_2\\rangle$ and $0$; the quotient has dimension 1. The two restrictions have ranks 1 and 1, so $(2-1)-(1-1)=1$. (2) The contributions are 1,0,0: both indices must lie in the half-open bar. (3) No: the zero map has rank 0, and a projection has rank 1. (4) No; RFS-P supplies two complete counterexamples with identical dimensions. (5) The triangle inequality gives $4\\eta$; independent worst-case signs can attain it, so cancellations cannot be assumed. (6) No: $[0,5)$ and $[0,\\infty)$ agree on all observations at times at most 4. A known finite-horizon/essential convention is an input hypothesis.

For (1)/(3), explicitly restrict T to A and B and use S1's rank–nullity proof; derive a quotient's dimension by extending a basis of its denominator. For (2)/(4), draw identity maps within one bar and zero maps after death; do S2's merger map before the counterexample. For (5), write the four error terms and bound each absolute value; RFS-5 proves the general estimate. For (6), retain the finite bar ending at 5 as an alternative rather than calling it a numerical glitch. Redo the diagnostic with $[2,4)$ and $T(x,y,z)=(0,y,0)$: the three rank contributions at (2,3),(2,4),(1,3) are again 1,0,0; the intersections for A,B become $\\langle e_1\\rangle,\\langle e_1\\rangle$, so quotient dimension 0. These are complete repair checks, not an automatic readiness score.

## RFS-2 — Ordered investigation episodes and dated records

The programme has nine ordered episodes. Their outputs make the investigation cumulative; do not jump directly to a final checklist.

| Episode | Work and concrete output | Feedback and advancement condition |
| --- | --- | --- |
| E1. Recover the earlier theorem | S1–S5 and diagnostic: retain proofs and explicit remaining gaps. | Exact keys above; repair every failed diagnostic distinction. |
| E2. Freeze the question | Write the RFS-P protocol below before comparing its model: objects, field, support, observations, methods, prediction and stop rules. | RFS-P's complete protocol/report model. |
| E3. Reconstruct another source | S6: image/kernel quotient, alternating formula and splitting proof. | RFS-4's full derivations with each hypothesis used. |
| E4. Investigate identification | RFS-P full maps/ranks/inversion and competing dimension-only method. | Full P matrices, recovered intervals, matching and report. |
| E5. Audit reproducibility | Execute the exact RFS-9 code on P; compare its bars against independent structure maps and keep an actual receipt. | RFS-9 specifies complete outputs and discrepancy handling; no invented run is supplied. |
| E6. Change the evidence | RFS-C repeated/essential bars; invalid +1 and valid −1 observations; compare rival explanations. | Full C models including negative multiplicity and alternative valid bars. |
| E7. Return after intervening work | RFS-R coarse and affine-transformed observations, identification bound and counterexample. | Full R and transformed models; declare prior exposure rather than claim enforced delay. |
| E8. Referee and revise | Write the report, respond to all three objections, revise its exact erroneous sentences and issue a versioned correction. | RFS-8's actual report, objection-response-revision models. |
| E9. Close and propose | Reproduce outputs in a fresh execution context, compare versions, complete ethics/rights decisions and leave a bounded next question unanswered. | RFS-10's complete closeout and descriptive rubric. |

Keep learner-owned dated files with stable task IDs \`RFS-P-v1\`, \`RFS-C-v1\`, \`RFS-R-v1\`, not array positions: \`YYYY-MM-DD-RFS-P-v1-protocol.txt\`, \`...-first.txt\`, \`...-comparison.txt\`, \`...-revised-01.txt\`; repeat for C/R. Keep the first files unchanged by convention, then check their bytes after revision and reopen a recoverable copy after restarting. This is a manual retained-version workflow; the browser notebook is one editable note, not automatic immutable attempt storage. Include source edition/addresses, matrix times, complete rank data, support/essential promise, coefficients, code bytes/version, actual runtime/version, actual outputs/errors, method, source/key/tool exposure, claim changes and a dated next action. A timestamp is your declaration, not verified timing; public return models and code establish neither unseen work nor an enforced delay. Study marks and rubric judgments become no grade, qualified marking or evidence of mastery.

A minimal honest execution receipt is: \`task=RFS-P-v1; date=<actual>; environment=<actual>; code=<your saved bytes/hash if computed>; input=<exact JSON>; output=<actual complete value>; discrepancy=<none or actual>; help=<actual>\`. Angle-bracket fields are filled only after doing that work. No exemplar receipt here asserts that you ran the program.

## RFS-3 — Source edition, rights and an additional reconstruction

The new primary source is Frédéric Chazal, Vin de Silva, Marc Glisse and Steve Oudot, *The structure and stability of persistence modules*, **arXiv:1207.3674v3**, posted **20 March 2013**, internal manuscript date **18 March 2013**. Required addresses are §1.4 (interval conventions), §2.2 **Propositions 2.3, 2.4 and 2.5**, printed pp.20–21. [Versioned primary HTML](https://arxiv.org/html/1207.3674v3), [version record](https://arxiv.org/abs/1207.3674v3). Inspected 4 November 2026. This is the preprint version, not the separately paginated 2016 Springer book. Its arXiv record uses a perpetual nonexclusive licence, not a claimed CC licence; no manuscript, figure or PDF is bundled.

The selected source gives an alternating-rank expression for a persistence rectangle, additivity under splitting, and image/kernel quotient descriptions. Its hypotheses allow finite-dimensional spaces; a weaker finite-rank condition is also stated. We use the finite-dimensional case only. The quotient derivation below is our elementary reconstruction by rank–nullity; it is not a transcription of the source's quiver-notation proof or its localisation reference. General decorated diagrams, measure existence, q-tame stability and isometry remain outside this reconstruction.

The locally complete teaching and new examples below are original exposition. Optional source access audits provenance; the tasks require no external download or verbatim copying. Translate the source's decorated endpoint framework to our fixed convention: a bar $[p,q)$ is present at p and absent at q. Thus its rank contribution is $1$ exactly when $p\\le s\\le t<q$. Rectangle endpoint inequalities are derived below, rather than guessed from an undecorated picture.

| Dependency | Role here | Result actually reconstructed |
| --- | --- | --- |
| Fixed-path clinic; Cohen-Steiner–Edelsbrunner–Harer theorem as attributed there | Prior all-real fixed-path proof; broader common-space stability stays imported. | No new general function-space stability proof is claimed. |
| Bauer core and Bubenik advanced seminar | Prior reconstruction, landscapes and method/design comparison. | Prior work retained, not relabelled as the additional proof. |
| Chazal–de Silva–Glisse–Oudot v3, §2.2 | Additional specialist source selection. | Finite-dimensional quotient/rank formula and splitting; full proof below. |
| Interval decomposition for arbitrary finite sequences | General structural background. | Imported if applied to an unknown module. Our identification theorem is conditional on an explicit finite direct sum, and our validator constructs one. |
| A sampling/population theorem | Would connect mathematical objects to a scientific target. | None is supplied; no cluster, causal or empirical conclusion follows. |

## RFS-4 — Images, kernels and rectangle additivity

A persistence module assigns a vector space $V_t$ and a linear map $v_s^t:V_s\\to V_t$ for each $s\\le t$, satisfying $v_t^t=\\mathrm{id}$ and $v_t^u v_s^t=v_s^u$. Let $r(s,t)=\\operatorname{rank}v_s^t$. Fix $a<b\\le c<d$, with all four spaces finite-dimensional. Set

$$A=\\operatorname{im}v_b^c,\\quad B=\\operatorname{im}v_a^c\\subseteq A,\\quad T=v_c^d.$$

The inclusion follows from the composition law: $v_a^c=v_b^cv_a^b$. Let $K=\\ker T$. Then $B\\cap K\\subseteq A\\cap K$, so the quotient $(A\\cap K)/(B\\cap K)$ exists and has nonnegative integer dimension. Basis extension proves that dimension is the difference of the two intersection dimensions.

Rank–nullity for $T|_A$ gives $\\dim(A\\cap K)=\\dim A-\\dim T(A)=r(b,c)-r(b,d)$. The last equality again uses composition: $T(A)=\\operatorname{im}v_b^d$. Similarly $\\dim(B\\cap K)=r(a,c)-r(a,d)$. Therefore

$$\\mu(a,b;c,d):=\\dim\\frac{A\\cap K}{B\\cap K}
=r(b,c)-r(a,c)-r(b,d)+r(a,d)\\ge0.$$

This proves the finite-dimensional alternating-rank identity together with its quotient meaning. It counts what reaches c from b, dies by d, and was not already represented by the image from a; subtracting whole space dimensions instead of image dimensions would change the question.

For a vertical split $a<p<b$, expand

$$\\mu(a,p;c,d)+\\mu(p,b;c,d).$$

The terms $r(p,c)$ and $r(p,d)$ cancel, leaving exactly $\\mu(a,b;c,d)$. For a horizontal split $c<q<d$, expanding $\\mu(a,b;c,q)+\\mu(a,b;q,d)$ cancels $r(b,q)$ and $r(a,q)$ and yields the same result. All ranks exist finitely under our hypotheses. Repeated splitting proves finite grid additivity. Nonnegativity plus such a tiling also proves monotonicity for nested admissible rectangles. This is a complete splitting argument, not a visual overlap convention.

For an explicitly given finite direct sum of half-open bars, ranks add because the map is block diagonal. One bar $[p,q)$ contributes

$$1_{p\\le b}1_{c<q}$$

to $r(b,c)$, because $b\\le c$. Substitution into the four-term expression factors as

$$(1_{p\\le b}-1_{p\\le a})(1_{q>c}-1_{q>d})
=1_{a<p\\le b}\\,1_{c<q\\le d}.$$

Thus $\\mu$ counts births in $(a,b]$ and deaths in $(c,d]$, with multiplicity. An essential bar $q=\\infty$ contributes zero to every finite-death rectangle. The $b=c$ case is allowed: a positive bar alive at b can die later; a zero-length interval is absent by convention. This finite argument translates the source's endpoint issue explicitly and does not prove existence of a general decorated measure.

## RFS-5 — Exact identification, observation error and coarse sampling

Let observation times be $t_0<\\cdots<t_m$. Promise that every finite bar has endpoints among these times, every birth is among them, every finite death is at most $t_m$, and bars alive at $t_m$ are genuinely essential. Work with an explicitly finite direct sum. Define $R_{ij}=r(t_i,t_j)$ for $i\\le j$ and put $R_{-1,j}=0$. The diagonal $R_{ii}$ gives dimensions; off-diagonal entries give persistence-map information.

For $0\\le i<j\\le m$ the multiplicity of $[t_i,t_j)$ is

$$M_{ij}=R_{i,j-1}-R_{i-1,j-1}-R_{ij}+R_{i-1,j},$$

and the essential multiplicity born at $t_i$ is

$$E_i=R_{i,m}-R_{i-1,m},\\qquad0\\le i\\le m.$$

**Proof.** $R_{i,j-1}-R_{i-1,j-1}$ counts bars born exactly at $t_i$ and still alive at $t_{j-1}$. Subtract the analogous count alive at $t_j$. With no allowed endpoint strictly between these two times, exactly the bars dying at $t_j$ remain in the difference. The final-column difference counts births at $t_i$ that survive the final time, essential by the promise. This includes repeated bars and essential births at the final time. Every allowed bar has one such birth/death label; these formulae recover its multiplicity, proving uniqueness in the declared direct-sum class.

Conversely, given a finite triangular integer table, compute these multiplicities. If any is negative, it cannot be such a rank table. If all are nonnegative, build that many interval summands and recompute every supplied rank. Accept only if every entry agrees. This constructive check supplies a realization and catches a mistaken formula or convention; it does not identify an unobserved real-world generator. It imports no claim that every arbitrary module has been decomposed. A table that passes is exact data consistency, not evidence that a noisy measurement equals truth.

**Observation error.** If each observed rank differs from the true rank by at most $\\eta$, the four-term multiplicity error is at most $4\\eta$, by adding the four absolute errors. For $E_i$ the bound is $2\\eta$. These algebraic bounds need no probabilistic independence. They allow negative apparent multiplicities and several integer explanations. If the errors are real, a priori bounded by $\\eta<1/8$, and the exact formula/endpoint promise holds, rounding each four-term result to its nearest integer recovers M: its error is strictly below $1/2$. The essential result also rounds correctly. At equality $\\eta=1/8$ ties can occur, so that guarantee is not asserted. This is a sufficient guarantee for rounding the inverted values directly, not a sharp threshold under valid-module constraints. If one knows each true rank is an integer, a different procedure first rounds each input observation correctly whenever $\\eta<1/2$, then applies exact inversion and validation; it has a different, stronger sufficient error allowance. Neither procedure is implemented by our exact-integer validator. This sufficient bound concerns observation error in ranks; it is not a bottleneck stability theorem or a statistical confidence statement.

**Coarse restriction.** Let $G=(g_0<\\cdots<g_k)$ cover every finite endpoint and birth, and define $q(x)$ to be the least grid value at least x. A finite bar restricted to G is represented at physical scale by $[q(b),q(d))$, omitting it if the endpoints coincide; an essential bar becomes $[q(b),\\infty)$. Indeed, for $t\\in G$, $b\\le t<d$ holds exactly when $q(b)\\le t<q(d)$. The same identity at s and t proves agreement of persistence ranks, not only dimensions.

Let $\\Delta=\\max(g_{i+1}-g_i)$. Matching each surviving original bar to its rounded bar costs at most $\\Delta$ in endpoints. A vanished bar has endpoints in a single grid cell, length at most $\\Delta$, so diagonal cost at most $\\Delta/2$. Essential births also move by at most $\\Delta$. This proves $d_B(D,qD)\\le\\Delta$. It is deterministic coarsening error under covered endpoints, not a measurement or population guarantee.

More strongly, if two covered diagrams have exactly the same rounded barcode, pair corresponding copies with the same rounded endpoints. Each pair of original births, and each pair of deaths, lies in a common cell of width at most $\\Delta$, so their endpoint differences are at most $\\Delta$. Pair essential bars similarly. Send bars lost under rounding to the diagonal individually, at cost at most $\\Delta/2$ on either side. All bars are accounted for, proving $d_B(D,E)\\le\\Delta$ for this common rounded fiber. Exact identification still fails. No such finite bound follows if endpoints outside the covered range or unknown finite deaths are quietly called essential.

## RFS-P — Primary protocol and two rival methods

Task ID \`RFS-P-v1\`. The following are authored interval-module fixtures, not observed data or copied paper experiments. Times are $(0,1,2,3,4)$; both diagrams are finite direct sums over $\\mathbb F_2$:

$$D=\\{[0,2),[1,3)\\},\\qquad E=\\{[0,3),[1,2)\\}.$$

1. Freeze a protocol naming the question, source/version, support promise, field, complete ranks as the primary method, dimension-only audit as the rival method, prediction, execution/comparison and stop rule. State the origin of these inputs.
2. Give a basis at every time, write maps by tracking bar labels, and compute every triangular rank entry for D and E. Explain why the module composition law holds.
3. Reconstruct RFS-4's quotient identity and additivity with hypotheses, then RFS-5's inversion. Recover every nonzero multiplicity; compare the dimension-only rival's answer.
4. Calculate the exact bottleneck distance with both an upper matching and a lower bound. Explain whether this is scientific feature identity.
5. Run the public program on the two printed JSON fixtures. Compare its actual complete outputs with your map/inversion calculations; retain the receipt and a discrepancy/correction if needed. Compare two fresh-context reruns without inventing a successful run.
6. Write a short specialist report: question, methods, proof, actual mathematical results, execution status, rival method, limitations and next question. Supply the referee/revision work in RFS-8 after C/R.

## RFS-P — Complete mathematical and reporting model

Use label d0 for D's first bar and d1 for its second; similarly e0,e1. D's bases at times 0,1,2,3,4 are respectively $(d0)$, $(d0,d1)$, $(d1)$, $()$, $()$. E's are $(e0)$, $(e0,e1)$, $(e0)$, $()$, $()$. A map sends a label to the identical label if still alive and to zero otherwise. Identity within a bar and permanent zero after death give the composition law. For example D's map from time 0 to 2 is zero; E's is the one-dimensional identity. The adjacent maps at 1 to 2 have row matrices $(0,1)$ for D and $(1,0)$ for E in the printed bases.

| Diagram and row i | R(i,0) | R(i,1) | R(i,2) | R(i,3) | R(i,4) |
| --- | --- | --- | --- | --- | --- |
| D,0 | 1 | 1 | 0 | 0 | 0 |
| D,1 | — | 2 | 1 | 0 | 0 |
| D,2 | — | — | 1 | 0 | 0 |
| D,3 | — | — | — | 0 | 0 |
| D,4 | — | — | — | — | 0 |
| E,0 | 1 | 1 | 1 | 0 | 0 |
| E,1 | — | 2 | 1 | 0 | 0 |
| E,2 | — | — | 1 | 0 | 0 |
| E,3 | — | — | — | 0 | 0 |
| E,4 | — | — | — | — | 0 |

Inversion gives D: $M_{0,2}=1-0-0+0=1$ and $M_{1,3}=1-0-0+0=1$; E: $M_{0,3}=1-0-0+0=1$ and $M_{1,2}=2-1-1+1=1$. Every other M and every E is zero; substitution or the four-term formula verifies each zero. Thus the complete outputs are exactly the original two interval multisets, without discarded features.

The diagonal dimension vectors are both $(1,2,1,0,0)$. The rival therefore reports a tie, but the off-diagonal entry (0,2) differs. This is a complete counterexample to dimension-only identification. It does not contradict identification by all ranks. For a concrete rectangle take $(a,b,c,d)=(0,1,1,2)$. Its measure is 0 in D and $2-1-1+1=1$ in E, correctly finding E's bar born at 1 and dying at 2. RFS-4 supplies the general quotient proof, not merely this example.

Pair $[0,2)$ with $[0,3)$ and $[1,3)$ with $[1,2)$; both costs are 1. For a lower bound the E bar $[0,3)$ costs at least 1 to either D bar, or $3/2$ to the diagonal. Essential destinations do not exist. Hence $d_B(D,E)=1$. The matching is a mathematical interval comparison; nothing identifies a physical object.

**Complete protocol model.** “Question: do the full ranks or only dimensions identify these promised finite sums? Source dependency: CDGO v3 §2.2 and the proved finite formulae. Inputs: authored D/E, exact endpoints 0–4, field F2, no omitted essential bars, no finite death beyond 4. Primary output: all ranks and recovered multiplicities. Rival: the diagonal alone. Prediction: equal dimensions may conceal changed map ranks. Stop on negative/incompatible multiplicities, execution failure or a disagreement with independent maps; retain the failed result and repair a separately versioned input/code. No randomness, sampling model, biological target or seed is involved. Run the exact public function, preserve actual outputs and repeat in a fresh context.”

**Complete report model, mathematical portion.** “We reconstructed the finite-dimensional rectangle identity by restricting the death map to two nested images, then proved splitting by cancellation. In the explicit finite-sum class, differences across births and deaths recover unique multiplicities. D and E have the same dimensions but differ at rank (0,2); inversion returns their distinct bars. Their exact bottleneck distance is 1. Dimension-only comparison therefore loses information. The result is conditional on complete allowed endpoint observations and known essential status. It does not prove a general decomposition theorem, source-wide stability or a population conclusion. The next episodes test corruption and coarser observations.” Append your actual execution result or honestly state that execution remains unfinished; this printed model supplies no learner execution evidence.

## RFS-C — Changed evidence, invalidity and a valid rival explanation

Task ID \`RFS-C-v1\`. Keep times $(0,1,2,3,4)$ and now use

$$N=\\{[0,4),[0,4),[1,3),[2,\\infty)\\}.$$

The essential promise is part of this authored object. Prepare three observation versions: exact N; \`Cplus\`, which changes only $R_{1,2}$ from 3 to 4; and \`Cminus\`, which changes that entry from 3 to 2. Retain all three, with a one-entry change ledger. They are authored error scenarios, not measured uncertainty estimates.

1. Give every map/rank and recover repeats and the essential bar. Compare with P's no-essential case.
2. Invert Cplus. Show every negative multiplicity, explain the failed mathematical hypothesis and record the required program error rather than quietly clipping negatives or changing data.
3. Invert Cminus. Is the altered table realizable? Give its complete rival diagram and prove equality of its entire rank table with the observation. Calculate exact bottleneck distance to N.
4. Apply the $4\\eta$/$2\\eta$ bounds and the strict rounding guarantee. Explain why the one-unit perturbation does not license exact recovery or a probability statement. Contrast valid input consistency with identification of truth.
5. Run all three supplied fixtures and independent checks; preserve actual errors/outputs. Write the changed report and answer the referee's proposed negative-clipping repair.

## RFS-C — Complete changed model and error ledger

Give labels n0,n1 to the duplicate long bars, n2 to $[1,3)$ and n3 to the essential bar. Bases are $(n0,n1)$, $(n0,n1,n2)$, $(n0,n1,n2,n3)$, $(n0,n1,n3)$, $(n3)$. Maps retain the labels that survive. In particular rank 0→4 is 0 and rank 2→4 is 1. The complete exact table is:

| Row i | R(i,0) | R(i,1) | R(i,2) | R(i,3) | R(i,4) |
| --- | --- | --- | --- | --- | --- |
| 0 | 2 | 2 | 2 | 2 | 0 |
| 1 | — | 3 | 3 | 2 | 0 |
| 2 | — | — | 4 | 3 | 1 |
| 3 | — | — | — | 3 | 1 |
| 4 | — | — | — | — | 1 |

Nonzero recovered values are $M_{0,4}=2-0-0+0=2$, $M_{1,3}=3-2-2+2=1$ and $E_2=1-0=1$. All other values vanish. The duplicate bar is counted twice; the essential bar is retained without a plotting cutoff.

| Version | Change at (1,2) | Nonzero finite multiplicities | Nonzero essential multiplicity | Mathematical decision |
| --- | --- | --- | --- | --- |
| C | 3, exact | (0,4):2; (1,3):1 | birth 2:1 | Realizes N. |
| Cplus | 4 | (0,4):2; (1,2):−1; (1,3):2; (2,3):−1 | birth 2:1 | Reject: negative multiplicities. |
| Cminus | 2 | (0,4):2; (1,2):1; (2,3):1 | birth 2:1 | Realizes a different valid diagram Nminus. |

For Cplus, $M_{1,2}=3-2-4+2=-1$ and $M_{2,3}=4-4-3+2=-1$. Its $M_{1,3}=4-2-2+2=2$ does not rescue the negatives. A rank from time 1 to 2 cannot exceed the dimension 3 at time 1; this gives a second independent inconsistency witness. Clipping −1 to zero would create an arbitrary replacement object and fails reproduction of the declared input. The required public error is \`negative multiplicity\`.

For Cminus,

$$Nminus=\\{[0,4),[0,4),[1,2),[2,3),[2,\\infty)\\}.$$

The split short bars change only rank (1,2): the old $[1,3)$ contributed 1 there, and neither split bar spans both indices. At every other allowed pair, exactly one split bar contributes whenever the old one did; on diagonal 2 the new $[2,3)$ replaces the old contribution. This proves the full table match and is independently checked by the label maps. A matching keeps duplicate long and essential bars fixed, pairs $[1,3)$ to $[1,2)$ at cost 1, and sends $[2,3)$ to the diagonal at cost $1/2$. Conversely, N's $[1,3)$ costs at least 1 to every finite destination in Nminus, and 1 to its own diagonal. Hence $d_B(N,Nminus)=1$.

The changed observation has $\\eta=1$. The guaranteed multiplicity error bound 4 is deliberately loose; actual changed multiplicities are ±1. The essential values are unchanged. The strict rounding condition $\\eta<1/8$ does not apply. Cminus is compatible with exact ranks from Nminus and with one-entry-corrupted ranks from N; these rival explanations cannot be separated from the table alone. No random error distribution, likelihood or probability has been supplied.

**Complete changed report model.** “The exact C object contains four bars including a repeated finite bar and a genuine essential bar. The public validator must return N on C, reject Cplus and return five bars on Cminus. A rejection is evidence of incompatibility with the contract; a success is evidence of a constructed compatible interval sum. It does not establish that Nminus generated the observation. The explicit one-entry error gives a competing explanation with bottleneck discrepancy 1. We retain both the failure and the valid alternative, forbid negative clipping, and report the error-bound assumptions rather than call the output robust to arbitrary noise.” Add actual execution outputs/errors and any repair; the model does not invent them.

## RFS-R — Public return, resolution and an affine change

Task ID \`RFS-R-v1\`. After intervening work reconstruct this project with declared prior exposure. The fine inputs are

$$U=\\{[0,3),[1,4),[1,4)\\},\\qquad V=\\{[0,4),[2,3),[2,3)\\}.$$

Observe only $G=(0,2,4)$. The finite-support/no-later-death promise still holds. No essential bar is present.

1. Compute both complete fine rank tables at times 0,1,2,3,4 and restrict them to G. Derive the common rounded barcode Q, giving every multiplicity. Decide exactly what is identified.
2. Prove the coarsening and common-fiber bounds in RFS-5. Give an exact matching/lower bound for U versus V and for each versus Q. Explain why equal coarse ranks do not imply equal modules.
3. Transform every time/endpoint by $h(t)=2t+1$. Give transformed U/V/G/Q, all coarse ranks, exact distances and bound. Prove the transformation rules; do not merely copy a scaled answer.
4. Execute the exact program on R and Rscaled; compare the outputs and independent fine-map predictions. Diagnose a report that quietly treats a survivor at 4 as essential when its finite death might be 5.
5. Complete the final report, source/claim ledger, referee revisions, ethics decisions and closeout. Give one unanswered local extension with a precise success criterion. Do not claim it is an unsolved mathematical problem or a newly discovered result.

## RFS-R — Complete return and transformed model

The fine ranks come from label survival exactly as before. These are all entries:

| Diagram and row i | R(i,0) | R(i,1) | R(i,2) | R(i,3) | R(i,4) |
| --- | --- | --- | --- | --- | --- |
| U,0 | 1 | 1 | 1 | 0 | 0 |
| U,1 | — | 3 | 3 | 2 | 0 |
| U,2 | — | — | 3 | 2 | 0 |
| U,3 | — | — | — | 2 | 0 |
| U,4 | — | — | — | — | 0 |
| V,0 | 1 | 1 | 1 | 1 | 0 |
| V,1 | — | 1 | 1 | 1 | 0 |
| V,2 | — | — | 3 | 1 | 0 |
| V,3 | — | — | — | 1 | 0 |
| V,4 | — | — | — | — | 0 |

Selecting rows/columns 0,2,4 gives the same coarse table for both:

| Physical row time | r(s,0) | r(s,2) | r(s,4) |
| --- | --- | --- | --- |
| 0 | 1 | 1 | 0 |
| 2 | — | 3 | 0 |
| 4 | — | — | 0 |

Its inversion yields one $[0,4)$ and two $[2,4)$, hence $Q=\\{[0,4),[2,4),[2,4)\\}$. No essential bar appears. This identifies the restricted module's barcode in physical grid times, with repeated bars; it identifies neither original fine barcode. In U the births at 1 round to 2 and the death at 3 rounds to 4. In V the two deaths at 3 round to 4. Thus both give Q.

Pair U's $[0,3)$ with V's $[0,4)$ and its two $[1,4)$ copies with V's two $[2,3)$ copies; all costs are 1. For a lower bound either U copy $[1,4)$ costs at least 1 to every V bar and $3/2$ to the diagonal. Thus $d_B(U,V)=1$. Match the corresponding rounded bars to get $d_B(U,Q)\\le1$ and $d_B(V,Q)\\le1$. The U long copy $[1,4)$ has no destination in Q below cost 1; the V long bar $[0,4)$ must match Q's long bar at cost 0 in a hypothetical matching of cost below 1, leaving each Q $[2,4)$ with either a V short bar at cost 1 or diagonal cost 1. Thus both distances to Q are exactly 1. The general bounds have $\\Delta=2$, so give at most 2; these examples satisfy them with slack. The complete proofs in RFS-5 account for lost bars too, even though none disappears in this packet.

Under $h(t)=2t+1$ the transformed data are

$$hU=\\{[1,7),[3,9),[3,9)\\},\\quad hV=\\{[1,9),[5,7),[5,7)\\},$$
$$hG=(1,5,9),\\quad hQ=\\{[1,9),[5,9),[5,9)\\}.$$

The indexed coarse rank array is unchanged because h is increasing and $b\\le s\\le t<d$ is equivalent to $h(b)\\le h(s)\\le h(t)<h(d)$. Inversion therefore returns hQ. Each endpoint matching cost and finite lifetime/2 doubles; transforming any matching gives the upper inequality, and applying $h^{-1}$ to a transformed matching gives the reverse one. All three exact distances above become 2. The mesh is now 4, giving bounds 4. Translation alone would change neither cost nor lifetime; a negative scale would reverse order and is outside this argument.

**Horizon repair.** If the support promise is removed, $[0,5)$ and $[0,\\infty)$ have identical ranks on G, although one dies and the other does not. Calling the last observed survivor essential is then an unverified extrapolation. Record a right-censored object or obtain a justified support theorem; do not pass that unknown object to a function whose input contract promises essential status. The software can verify array consistency, not this substantive promise.

**Complete return report model.** “The fine rank tables distinguish U and V, whereas their G-restrictions coincide and recover Q. Direct matchings and lower bounds give all three distances 1. The general common-rounded-fiber bound is 2 and rests on covered endpoints; it certifies finite ambiguity rather than unique identification. An increasing affine transformation preserves indexed ranks and doubles the exact distances. We retain input resolution, support and essential status as explicit metadata and distinguish executed outputs from printed predictions. Nothing here estimates sampling error or validates a scientific metric. A future project could optimize observation times for a specified endpoint class; its answer is not supplied here.” Append the actual R/Rscaled execution record and fresh-context comparison.

## RFS-8 — Full report, referee response and supervision workflow

Here is a complete concise mathematical closeout report joining P/C/R. Replace its execution sentence only with your own actual evidence.

**Report version 1, worked mathematical model.** “We asked whether persistence rank audits identify an interval-module object. Our source selection was CDGO arXiv v3 §2.2; the fixed-path clinic and earlier Bauer/Bubenik work were preparation. Using nested images and rank–nullity we reconstructed the finite-dimensional rectangle formula, proved splitting, and recovered finite-grid bar multiplicities under a finite direct-sum/support promise. P's D/E agree in every dimension but differ at rank (0,2), and their distance is 1. Thus complete ranks are a stronger method than dimensions alone. C recovers a duplicate pair and an essential bar; increasing rank (1,2) by 1 produces two negative multiplicities and must be rejected. Decreasing it by 1 produces a different realizable five-bar explanation at distance 1 from N. R's U/V are distinguished by fine ranks but have the same coarse ranks and rounded Q; all pairwise distances in that triangle are 1. The general common-rounded-fiber bound is Δ=2, and affine scaling doubles the exact distances. The mathematical results are exact proofs/calculations for declared fixtures. Our printed output is a prediction until compared against an actual retained run. No participant, population, novelty or source-wide isometry claim is made. We close the stated finite project and leave observation-grid design unanswered.”

Now review this deliberately overstrong **draft abstract**: “A rank audit always recovers the true barcode. Clipping negative values makes the method robust. Equal sampled ranks mean equal persistence, and our computer reproduction validates a biological interpretation.” Each of the following objection-response-revision groups is required; copying a polite acknowledgment is insufficient.

| Referee objection | Complete response with evidence | Concrete revised abstract sentence |
| --- | --- | --- |
| R1. Your theorem forgot support, full ranks and decomposition. | We limit identification to explicit finite direct sums with endpoints in the full known grid and a justified essential promise. P gives equal dimensions but ranks 0→2 of 0 and 1; R supplies equal coarse ranks with U≠V. We add the formula proof and retain the general decomposition theorem as imported if used elsewhere. | “Full-grid ranks uniquely recover multiplicities in the declared finite direct-sum/support class; dimension-only and coarse observations can leave rival objects.” |
| R2. Clipping conceals incompatibility; consistency need not identify truth. | Cplus yields $M_{1,2}=M_{2,3}=-1$ and rank 1→2 exceeding source dimension. We reject it, preserve its raw input and issue a separate correction. Cminus is valid yet differs from N by a split short bar, with exact distance 1. Our $4\\eta$ bound and strict $\\eta<1/8$ rounding condition replace an unsupported robustness claim. | “The validator rejects incompatible ranks; a valid output is a constructed compatible explanation, and exact recovery under observation error needs additional stated bounds.” |
| R3. A software comparison and deterministic theorem do not validate biology. | We distinguish the authored synthetic modules, actual rerun receipts and independent map checks from sampling or metric validation. There are no biological records, participants, ethics approvals or human validation. The coarsening bound concerns covered mathematical endpoints only. | “Our exact fixture reproduction and proofs provide no population, causal or biological validation; such extensions need their own design, permissions and inference theorem.” |

**Complete revised abstract.** “For finite direct sums with known endpoint support and essential status, we reconstruct a primary rectangle formula and prove rank-based multiplicity identification. Same-dimension examples expose lost map information; changed observations separate invalid tables from alternative valid explanations. Coarse restrictions identify a rounded barcode and bound, but need not eliminate, fine-scale ambiguity. Bounded software outputs are compared with independent structure-map calculations. These proofs and authored fixtures establish no population interpretation, novelty or empirical validation.”

Retain draft abstract, objection text, response calculations, revised abstract and a dated change log. A complete change-log entry identifies R2, preserves the Cplus raw table, replaces the clipping claim by rejection, adds the exact negative values and keeps Cminus as a distinct valid rival. This is a substantive mathematical correction, not a record of an actual journal review.

A real supervision arrangement would agree the question, preparation, meeting frequency, roles, attribution, data rights, expected deliverables and how to escalate mathematical or ethical uncertainty. Before a meeting send the precise lemma, attempted proof, smallest failing example, source address and question. Afterward retain the advice and your resulting correction, with permission before attributing a person's words. If no supervisor is arranged, perform these written roles yourself and label them self-review; do not invent a person, endorsement or qualified mark.

**Illustrative authored meeting dialogue.** Learner: “The final column is nonzero, so I called the survivor essential.” Supervisor role: “What rules out death after the last observation?” Learner: “Nothing in an arbitrary dataset. Our fixture promise does; without it I must report right censoring.” Supervisor role: “Can your program verify that promise?” Learner: “It checks ranks under the declared contract, not the physical origin. I have added the [0,5) counterexample and will ask the data owner what supports the horizon.” These are teaching roles, not an actual conversation or supervision record.

**Ethical review model for a proposed real extension.** An instructor proposes collecting named students' barcode summaries and feedback on the interface. Stop recruitment and data transfer while the responsible institution determines whether ethics review is required. Submit a protocol with research purpose, recruitment/consent, power relationships, voluntary refusal/withdrawal, data minimization, retention/access, risks, accessibility accommodations and analysis/reporting plans. Seek the authorized decision before starting; a self-declared “educational” purpose is not approval. If an existing dataset is offered, verify licence, consent/data-use scope, identifiability and redistribution rights with its owner. Derived summaries are not automatically anonymous. Use the public synthetic fixtures for the present course. Record the decision and limitations; claim no approval, participant data, teacher/AT validation or human review from this model.

## RFS-9 — Complete bounded reference, actual inputs and independent checks

The required function accepts **2–7 increasing integer times in [−16,16]**, a complete square triangular rank array with **null below the diagonal**, integer ranks **0–8**, and a maximum of **8 reconstructed bars**. It assumes the declared full endpoint/support/essential contract. It reconstructs bars, verifies every rank, and returns all nonzero multiplicities and dimensions. It rejects invalid observations; it does not round uncertain ranks. This is a public reference for this finite contract, not general persistence software. With at most seven times and eight bars its exact integer arithmetic stays far below $2^{53}$. It uses no randomness, network, packages or seed.

Save the exact function and JSON inputs in your own worksheet workspace, call \`rankAudit(fixture)\`, and preserve actual complete outputs/errors. Use an existing Node.js REPL/script or browser JavaScript console; record which, the actual version, and all help. Rerun in a fresh context and compare objects by their fields; do not infer execution from reading this code. The complete predicted outputs are the interval/multiplicity/dimension tables above and the table below. \`null\` death means infinity. Lower-triangle null means “not an allowed ordered pair”, a different convention.

<!-- rfs-public-code:start -->
\`\`\`js
function rankAudit(input) {
  const fail = message => { throw new RangeError(message); };
  if (!input || typeof input !== 'object' || Array.isArray(input)) fail('object required');
  const {times, ranks} = input;
  if (!Array.isArray(times) || times.length < 2 || times.length > 7 ||
      Array.from(times).some((t,i) => !Number.isInteger(t) || t < -16 || t > 16 || (i && t <= times[i-1]))) fail('bounded increasing integer times required');
  const n = times.length, m = n-1;
  if (!Array.isArray(ranks) || ranks.length !== n || Array.from(ranks).some(row => !Array.isArray(row) || row.length !== n)) fail('square complete ranks required');
  for (let i=0;i<n;i++) for (let j=0;j<n;j++) {
    const v=ranks[i][j];
    if (j<i ? v!==null : !Number.isInteger(v) || v<0 || v>8) fail('triangular bounded integer ranks required');
  }
  const r = (i,j) => i<0 ? 0 : ranks[i][j];
  const bars=[], multiplicities=[];
  const add = (i,j,count) => {
    if (!Number.isInteger(count) || count<0) fail('negative multiplicity');
    if (count===0) return;
    if (bars.length+count>8) fail('at most eight bars required');
    multiplicities.push({birth:times[i],death:j===null?null:times[j],count});
    for (let k=0;k<count;k++) bars.push([times[i],j===null?null:times[j]]);
  };
  for (let i=0;i<n;i++) {
    for (let j=i+1;j<n;j++) add(i,j,r(i,j-1)-r(i-1,j-1)-r(i,j)+r(i-1,j));
    add(i,null,r(i,m)-r(i-1,m));
  }
  for (let i=0;i<n;i++) for (let j=i;j<n;j++) {
    const rebuilt=bars.filter(([b,d])=>b<=times[i] && (d===null || times[j]<d)).length;
    if (rebuilt!==ranks[i][j]) fail('incompatible rank table');
  }
  return {bars,multiplicities,dimensions:ranks.map((row,i)=>row[i])};
}
\`\`\`
<!-- rfs-public-code:end -->

<!-- rfs-inputs:start -->
\`\`\`json
{
  "P_D":{"times":[0,1,2,3,4],"ranks":[[1,1,0,0,0],[null,2,1,0,0],[null,null,1,0,0],[null,null,null,0,0],[null,null,null,null,0]]},
  "P_E":{"times":[0,1,2,3,4],"ranks":[[1,1,1,0,0],[null,2,1,0,0],[null,null,1,0,0],[null,null,null,0,0],[null,null,null,null,0]]},
  "C":{"times":[0,1,2,3,4],"ranks":[[2,2,2,2,0],[null,3,3,2,0],[null,null,4,3,1],[null,null,null,3,1],[null,null,null,null,1]]},
  "Cplus":{"times":[0,1,2,3,4],"ranks":[[2,2,2,2,0],[null,3,4,2,0],[null,null,4,3,1],[null,null,null,3,1],[null,null,null,null,1]]},
  "Cminus":{"times":[0,1,2,3,4],"ranks":[[2,2,2,2,0],[null,3,2,2,0],[null,null,4,3,1],[null,null,null,3,1],[null,null,null,null,1]]},
  "R":{"times":[0,2,4],"ranks":[[1,1,0],[null,3,0],[null,null,0]]},
  "Rscaled":{"times":[1,5,9],"ranks":[[1,1,0],[null,3,0],[null,null,0]]}
}
\`\`\`
<!-- rfs-inputs:end -->

For an exact first call after defining the function, paste:

\`\`\`js
rankAudit({times:[0,1,2,3,4],ranks:[[1,1,0,0,0],[null,2,1,0,0],[null,null,1,0,0],[null,null,null,0,0],[null,null,null,null,0]]});
\`\`\`

To run the whole corpus, paste \`const fixtures =\` followed by the complete JSON object above and a semicolon. Then use this complete invocation sequence; record the actual values printed in your environment:

\`\`\`js
for (const [name,input] of Object.entries(fixtures)) {
  try { console.log(name, JSON.stringify(rankAudit(input))); }
  catch (error) { console.log(name, error.name, error.message); }
}
\`\`\`

| Fixture | Predicted bars, in returned order | Predicted dimensions or error |
| --- | --- | --- |
| P_D | [[0,2],[1,3]] | [1,2,1,0,0] |
| P_E | [[0,3],[1,2]] | [1,2,1,0,0] |
| C | [[0,4],[0,4],[1,3],[2,null]] | [2,3,4,3,1] |
| Cplus | no returned object | RangeError: negative multiplicity |
| Cminus | [[0,4],[0,4],[1,2],[2,3],[2,null]] | [2,3,4,3,1] |
| R | [[0,4],[2,4],[2,4]] | [1,3,0] |
| Rscaled | [[1,9],[5,9],[5,9]] | [1,3,0] |

The \`multiplicities\` field groups repeated identical bars into one row \`{birth,death,count}\`, preserving birth order and then increasing finite death before essential death. For example C returns \`{birth:0,death:4,count:2}\`, \`{birth:1,death:3,count:1}\`, \`{birth:2,death:null,count:1}\`. The printed nonzero multiplicity tables completely specify all other cases, and an empty-module check returns \`bars=[]\`, \`multiplicities=[]\`, and one zero in \`dimensions\` per observation time.

Required negative controls are Cplus, a fractional or negative rank, missing entry, a non-null lower-triangle entry, repeated/decreasing times, out-of-bound times/ranks, an array of eight times, and a compatible table requiring nine bars. Record the exact refusal; never substitute an empty barcode for a failed input. A nine-bar table can have ranks bounded by 8 if the bars occupy separate times: on seven times, use two copies each of [0,1), [1,2), [2,3), [3,4) and one [4,5), giving diagonal dimensions [2,2,2,2,1,0,0] and every off-diagonal rank zero. It must fail the total-bar limit. Also test two bars born at the final time and essential thereafter; the final-column formula returns them, while their finite past ranks are zero.

The independent root oracle reads the **actual printed inputs and exact public function**, constructs interval-module structure matrices from the stated bars, computes ranks over F2 by elimination, and enumerates every multiset of up to three allowed bars on a smaller full grid. This checks identification without using the inversion formula as its expected-answer engine. It independently enumerates all allowed bottleneck destinations for the printed comparisons and checks invalid input behavior. Such bounded checks support implementation; the general proofs above carry the universal claims. An oracle pass, checksum or rerun verifies neither source rights nor support/essential metadata, observed teaching effectiveness or an unseen learner attempt.

## RFS-10 — Review, open work and a truthful closeout

Use this descriptive rubric separately on P/C/R, recording a reason and repair for every row. It is public self-review; no numerical score, reserved test or qualified marker is supplied.

| Criterion | Complete work | Specific repair |
| --- | --- | --- |
| New source reconstruction | Exact version/addresses/rights; nested-image quotient, composition uses, rank–nullity and both splitting cancellations. | Rebuild A/B/T and the diagnostic quotient; do not count the imported decomposition or general stability theorem as reconstructed. |
| Identification mathematics | Every map/rank, nonzero and zero multiplicity, endpoint/essential promise, uniqueness proof. | Derive one birth difference then one death difference; verify the entire rank table from the recovered bars. |
| Rival explanations | P dimension counterexample; both Cplus failure and Cminus valid alternative; R coarse alias. | Retain the full failed input and the complete competing bars; clipping or keeping only favourable cases is incomplete. |
| Error and matching guarantees | $4\\eta$/$2\\eta$, strict rounding condition, all matching destinations/lower bounds, covered-grid bounds. | Separate rank errors from endpoint distances; handle vanished bars and essential births explicitly. |
| Actual reproduction | Exact public code/inputs, actual complete outputs/errors, independent map check, fresh-context comparison and retained versions. | If unfinished, label it unfinished; compare by values and repair discrepancies in a new version. A printed prediction is no run. |
| Research report and critique | A report joining all cases; all three substantive objections answered with changed claims and evidence; correction log. | Replace the overstrong draft abstract with the complete revised one and keep both versions. |
| Ethics, source and limits | Authored fixtures/dialogue, lawful source attribution, permission/escalation decisions, no invented human/participant evidence. | Apply RFS-8's real-extension decision before recruitment or redistribution; disclose assistance and rights uncertainty. |
| Next question | A precise unanswered local question, required assumptions/work and an achievable success criterion. | Do not call an uncompleted extension a novel or globally open theorem. |

One optional next project is: among all covered grids of three observation times on integer endpoints 0–4, which minimizes the worst bottleneck ambiguity for diagrams with at most two finite bars? To answer it, fix the endpoint class and whether zero modules/repeated bars are allowed, enumerate every candidate grid and complete fiber of rank observations, compute each fiber's diameter with independent matchings, and prove that the enumeration covers the class. This course does **not** provide that optimization answer. A broader question about selecting grids from noisy, adaptively chosen observations additionally needs an observation/selection model and new guarantees; the present deterministic theorems do not settle it. A current-literature novelty or global open-status claim would need a separate dated primary-source search.

**Complete closeout model.** “The closed project reconstructs an additional primary rectangle argument, proves finite-sum rank identification and deterministic error/coarsening bounds, and supplies complete primary/changed/return mathematical reports with rival explanations and substantive referee revisions. Required software reproduction is complete only after my own actual saved runs, negative controls and fresh-context comparison agree with independent map checks. Public model exposure is declared. No actual supervisor, participant dataset, ethics approval, assistive-technology or teacher validation, qualified marking, novelty or population inference is supplied. My unanswered next question and required additional work are recorded separately.”

You may arrange qualified supervision or empirical evaluation independently, using the taught workflows and permissions. For local self-study it is optional; the course does not manufacture its availability or require a fictitious sign-off. If a proof, source or runtime discrepancy remains, record the precise unresolved dependency and continue its named repair before calling the corresponding episode complete.
`;export{e as default};