# 17. Singular values and the pseudoinverse

## Purpose and preparation

An eigenvector describes a direction that a square matrix preserves. Many practical maps are rectangular: three measurements might constrain two unknowns, or four measurements might constrain twenty unknowns. Singular values describe stretching for every real matrix, including those that have no real eigenvectors. They also explain precisely which parts of an inverse problem are recoverable.

You should be comfortable with orthogonal matrices, the spectral theorem, rank–nullity, and least squares. After this chapter you should be able to read the geometry of a singular value decomposition, solve inconsistent and underdetermined systems, and explain why discarding information can sometimes improve an estimate. Allow two study sessions, including the experiments and exercises.

## A decomposition with the right shapes

For A of size m × n, a full singular value decomposition is

A = UΣVᵀ.

Here U is m × m and orthogonal, V is n × n and orthogonal, and Σ is m × n. Its only potentially nonzero entries are σ₁ ≥ σ₂ ≥ … ≥ σᵣ > 0 on its diagonal, where r = rank(A). The remaining entries are zero. The columns vᵢ of V are input directions; the columns uᵢ of U are output directions. For i ≤ r,

Avᵢ = σᵢuᵢ.

Consequently A = Σ from i = 1 to r of σᵢuᵢvᵢᵀ. This last expression is the compact, rank-r decomposition. Each term measures one input component, scales it, and sends it along one output direction. Different texts use “thin SVD” for different truncated shapes, so always state the dimensions.

To see why the construction exists, apply the spectral theorem to AᵀA. This matrix is symmetric and xᵀAᵀAx = ‖Ax‖² ≥ 0, so its eigenvalues are nonnegative. Choose an orthonormal eigenbasis vᵢ and set σᵢ to the square roots of the positive eigenvalues. Defining uᵢ = Avᵢ/σᵢ gives orthonormal vectors because their inner products reduce to vᵢᵀAᵀAvⱼ/(σᵢσⱼ). Complete these vectors to an orthonormal basis of the output space.

This proof is conceptual. Numerically forming AᵀA squares the Euclidean condition number for a full-column-rank matrix. Reliable numerical software normally computes the SVD directly instead.

## Experiment: what rotates, and what stretches?

This square example identifies the input and output planes on one set of axes. The blue circle is the set of unit inputs; the teal ellipse is their image. The amber vector is one chosen input and the rose vector is its image. Here A = diag(3, s)R(−θ).

```mathviz
scene "The unit circle under a singular-value map";
domain -4 4;
range -4 4;
coordinates equal;
param s = 1 from 0 to 3;
param theta = 0 from -3.14 to 3.14;
param a = 0.7 from 0 to 6.28;
parametric unit(x) = (cos(x), sin(x)) from 0 to 6.283185 color blue;
parametric image(x) = (3*cos(x), s*sin(x)) from 0 to 6.283185 color teal;
vector input = (cos(a), sin(a)) color amber;
vector output = (3*cos(a-theta), s*sin(a-theta)) color rose;
```

**Predict:** Which values of a give maximum and minimum output length? What happens at s = 0? **Manipulate:** Hold s = 1, vary θ, and find those directions again. Then reduce s to zero. **Explain:** The image ellipse does not change when θ changes because a rotation permutes the input unit circle; individual inputs do change their outputs. At s = 0 the circle collapses to a segment. **Transfer:** Write a 3 × 2 matrix with singular values 3 and 1 whose image lies in the yz-plane of ℝ³. Check that its unit-circle image is still an ellipse, although it is embedded in a different space.

In general the vᵢ with i > r span null(A), and the uᵢ with i ≤ r span col(A). Thus nullity is n − r. The unused output directions span null(Aᵀ), of dimension m − r. Singular values reveal both kinds of missing direction; a two-dimensional picture only illustrates them.

## Worked example: measurements that cannot all agree

Let A have rows (3, 0), (0, 1), (0, 0), and let b = (6, 2, 5). The singular values are 3 and 1. Every output has third coordinate zero, so no x can satisfy Ax = b. Nevertheless x = (2, 2) gives the closest output (6, 2, 0), with residual b − Ax = (0, 0, 5). This residual is perpendicular to the column space. The minimum residual norm is 5; fitting the other components imperfectly only increases it.

The SVD makes this separation explicit. Write β = Uᵀb and z = Vᵀx. Orthogonal changes of coordinates preserve length, so

‖Ax − b‖² = Σᵢ₌₁ʳ(σᵢzᵢ − βᵢ)² + Σᵢ₌ᵣ₊₁ᵐβᵢ².

The minimum occurs when zᵢ = βᵢ/σᵢ for i ≤ r. The remaining n − r components of z are free. Setting them to zero gives the unique least-squares solution of smallest Euclidean norm.

## The pseudoinverse and minimum norm

Define Σ⁺ by transposing its rectangular shape and replacing each positive σᵢ by 1/σᵢ. Zero entries remain zero. The Moore–Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, an n × m matrix. The preceding calculation proves that

x₊ = A⁺b = Σᵢ₌₁ʳ (uᵢᵀb/σᵢ)vᵢ

is the minimum-norm least-squares solution. Every least-squares solution has the form x₊ + z with z ∈ null(A). Since x₊ is perpendicular to that nullspace, its squared norm only increases when a nonzero z is added. Also AA⁺ is the orthogonal projector onto col(A), whereas A⁺A projects onto the row space.

For a second worked example, take A with rows (1, 0, 1) and (0, 1, 0), and b = (2, 3). Exact solutions are x = (t, 3, 2 − t). Their squared norms equal 2(t − 1)² + 11, minimized at t = 1. Hence x₊ = (1, 3, 1); the unused direction is (1, 0, −1). Minimum norm selects one answer by a geometric criterion. It does not establish that this answer is the physical truth.

## Experiment: a small measurement error can become a large answer

Here A = diag(3, s), the true input is (1, 0), and the measurement is (3, δ), where δ is the `noise` slider. The blue arrow is the truth, the rose arrow is the exact inverse estimate, and the teal point is the estimate that discards the second singular direction. The teal point and blue arrow's tip coincide in this particular model.

```mathviz
scene "Inverse sensitivity and a truncated estimate";
domain -1 3;
range -4.5 4.5;
coordinates equal;
param s = 0.5 from 0.05 to 1;
param noise = 0.1 from -0.2 to 0.2;
vector truth = (1, 0) color blue;
vector inverse = (1, noise/s) color rose;
point truncated = (1, 0) color teal;
segment error from (1, 0) to (1, noise/s) color amber;
```

**Predict:** If s is divided by ten with δ fixed, how does the vertical error change? **Manipulate:** Try δ = 0.1 with s = 1, 0.1, and 0.05. Reverse the noise sign. **Explain:** The inverse multiplies the second measurement error by 1/s; the forward map itself remains bounded. **Transfer:** Change the hypothetical true second component to 2. Determine the bias of the truncated estimate before deciding whether truncation is helpful.

For full-rank inversion on the recoverable subspaces, the ratio σ₁/σᵣ measures worst-direction relative sensitivity in the Euclidean norm. Tiny singular values create unstable directions even when none is exactly zero. Rank is exact in mathematics; “numerical rank” requires a stated tolerance and a scale or noise model.

Truncated SVD retains only k positive singular values and estimates xₖ = Σᵢ₌₁ᵏ(uᵢᵀb/σᵢ)vᵢ. It reduces amplification in discarded directions but introduces bias when the truth has components there. Choosing k is a modeling decision, supported by noise estimates or validation data, rather than a consequence of an attractive picture.

**Misconception:** A matrix's eigenvalues are its singular values. The matrix with rows (0, 10), (0, 0) has both eigenvalues zero but singular values 10 and 0. Eigenvalues describe invariant directions; singular values describe orthogonal stretching.

## Exercises

1. **Foundation.** State the shapes of U, Σ, V, and A⁺ when A is 5 × 3. If rank(A) = 2, give both nullities.
2. **Foundation.** Find the singular values and pseudoinverse of diag(4, −2, 0).
3. **Core.** Solve the first worked example with b replaced by (3, −2, 7). Give the residual norm.
4. **Core.** Find all solutions and the minimum-norm solution of x₁ + x₂ + x₃ = 6.
5. **Core.** Prove that AA⁺ is symmetric and idempotent, and identify its range.
6. **Core.** For A = diag(2, 0.01), true x = (1, 1), and measured b = (2, 0.03), compare full inversion with rank-one truncation using solution error and data residual.
7. **Stretch.** Prove that A and Aᵀ have the same positive singular values, including multiplicities.
8. **Stretch.** Construct a 3 × 2 matrix with singular values 3 and 1 and output in the yz-plane. Give its compact SVD.

9. **Core.** Let A have rows (2,0), (0,0), (0,0), and b=(6,4,0). Give A⁺, every least-squares solution, the minimum-norm solution and the residual. Explain the roles of the zero singular value and the unfit observation.
10. **Stretch.** For real square orthogonal U,V of appropriate sizes, prove (UAVᵀ)⁺=VA⁺Uᵀ. Show that the analogous expression for an arbitrary invertible right change of coordinates can fail, using A=[1 1] and D=diag(2,1).

<details><summary>Hints</summary>

1. Full factors act on the entire input or output space. 2. Singular values are nonnegative. 3. The third component cannot be fitted. 4. Split a vector into a multiple of (1, 1, 1) and an orthogonal component. 5. Use the columns uᵢ. 6. Distinguish fitting observations from recovering truth. 7. Transpose the decomposition. 8. Send the coordinate input vectors to multiples of e₂ and e₃.


9. **Hint 1.** Only the first coordinate affects the prediction, and only the first observation can vary. **Hint 2.** Invert the positive singular value two and keep the zero direction at zero in the pseudoinverse.
10. **Hint 1.** Absorb U and V into the orthogonal factors of an SVD. **Hint 2.** Compare (AD)⁺ with D⁻¹A⁺; normalization of the row [2 1] supplies its pseudoinverse.

</details>

<details><summary>Full solutions</summary>

1. U is 5 × 5, Σ is 5 × 3, V is 3 × 3, and A⁺ is 3 × 5. The nullities of A and Aᵀ are 3 − 2 = 1 and 5 − 2 = 3.
2. The singular values are 4, 2, and 0. A⁺ = diag(1/4, −1/2, 0). The negative sign belongs in an orthogonal factor, not in Σ; for example U = diag(1, −1, 1) and V = I work.
3. Minimize (3x₁ − 3)² + (x₂ + 2)² + 49. The unique minimizer is (1, −2), the fitted output is (3, −2, 0), and the residual norm is 7.
4. All solutions are (2, 2, 2) + z with z₁ + z₂ + z₃ = 0. The cross term in the squared norm vanishes because (2, 2, 2)·z = 0. Thus the squared norm is 12 + ‖z‖², uniquely minimized by (2, 2, 2).
5. AA⁺ = Σᵢ₌₁ʳuᵢuᵢᵀ. Each summand is symmetric. Multiplication of the sum by itself eliminates cross terms through uᵢᵀuⱼ = 0 and preserves the diagonal terms, proving idempotence. Its range is span(u₁, …, uᵣ) = col(A).
6. Full inversion gives (1, 3), whose error norm is 2 and whose data residual is zero. Truncation gives (1, 0), whose error norm is 1 and whose data residual norm is 0.03. In this instance the less exact fit gives the better recovered input. With zero noise the full inverse would recover the truth exactly and truncation would retain error 1.
7. Aᵀ = VΣᵀUᵀ is an SVD after interpreting the rectangular diagonal shape. The same positive diagonal entries appear with the same multiplicities; dimensions only change the numbers of zero directions.
8. Choose A with rows (0, 0), (3, 0), (0, 1). Let Uᵣ have columns e₂ and e₃, Σᵣ = diag(3, 1), and Vᵣ = I₂. Their product is A, the columns are orthonormal, and its outputs have first coordinate zero.


9. The pseudoinverse has rows (1/2,0,0), (0,0,0). Every least-squares solution is (3,t), t∈ℝ, and the minimum-norm one is (3,0). The prediction is (6,0,0) and residual (0,4,0), with norm four. The zero input singular direction leaves the second coefficient undetermined; the observation in the second output direction lies outside the column space and causes the unavoidable residual. These are distinct nullspace phenomena.
10. Write A=U₀ΣV₀ᵀ. Then UAVᵀ=(UU₀)Σ(VV₀)ᵀ is an SVD up to the unchanged ordering of singular values, giving its pseudoinverse VV₀Σ⁺U₀ᵀUᵀ=VA⁺Uᵀ. In the counterexample A⁺=(1/2,1/2)ᵀ, so D⁻¹A⁺=(1/4,1/2)ᵀ. But AD=[2 1] has pseudoinverse (2/5,1/5)ᵀ, which differs. An arbitrary invertible coordinate change alters Euclidean lengths and therefore the minimum-norm convention; an orthogonal one preserves that geometry.

</details>

## Readiness check

Explain why an inconsistent problem can have a unique minimum-norm least-squares solution even when it has infinitely many least-squares solutions. Then distinguish an exact zero singular value from a small nonzero one without referring to a picture.


## Optional clinic: certify an unseen coordinate from bounded data

This optional untimed continuation is outside the chapter's original two-session promise. Its timing and independent marking remain uncalibrated. The earlier experiment reveals a truth and then measures an error. Here the truth stays unseen: use only a recorded datum and justified bounds to decide what accuracy is possible. This is a deterministic guarantee, not a probability or confidence level.

Work in one singular coordinate:
\[
\begin{gathered}
y=sz+e,\\
|z|\le R,\qquad |e|\le\varepsilon.
\end{gathered}
\]
All quantities here are finite real numbers. The gain \(s\ge0\) is known exactly; \(y\) is the recorded datum. The bounds \(R,\varepsilon\ge0\) are supplied assumptions, not inferred from fitting \(y\). There is no operator uncertainty in this model. A tolerance \(\tau\ge0\) asks for an estimate whose error is at most \(\tau\) for **every** truth and error obeying these assumptions and producing this same record.

The coordinate \(z\), \(R\) and \(\tau\) have the same units; \(y\) and \(\varepsilon\) have data units; \(s\) converts coordinate units to data units. Thus \(\varepsilon/s\) is a coordinate error only when \(s>0\). Numerical examples below are dimensionless. For \(\operatorname{diag}(3,s)\), this may be the second input coordinate with the first already known. A bound for this coordinate alone is not automatically a bound for an entire unknown vector.

### Saved investigation: choose using information, not a revealed truth

Write a prediction in each saved stage before opening its reasoning. All diagrams are intervals of the scalar \(z\); vertical rows merely separate comparisons.

```visual-story
{
  "id": "bounded-inverse-recovery",
  "title": "What accuracy does this record actually certify?",
  "prompt": "The horizontal coordinate is one unknown scalar. Vertical rows separate comparisons; they do not represent a second unknown. Save a prediction before revealing each proof.",
  "stages": [
    {
      "title": "One record, two possible truths",
      "body": "Work in one singular coordinate with known positive gain \\(s\\). The recorded datum is \\(y=0\\), and the only error information in this first stage is \\(|e|\\le\\varepsilon\\) in \\(y=sz+e\\). No prior range is imposed yet. Blue marks the possible interval and its endpoints. Amber is an estimate \\(a\\); rose horizontal segments compare it with the endpoint truths. Row heights are layout only, so error means horizontal absolute difference. Move the estimate as well as gain and error bound.",
      "question": "Find all possible truths and the noise at each endpoint. For an arbitrary estimate a, what is its largest possible absolute error? Can any rule using only this record guarantee less than half the distance between the endpoint truths?",
      "checkpoint": {
        "hint": "Solve |s z|≤epsilon. The endpoint worlds must produce exactly the same recorded datum. Use the triangle inequality between those truths through an arbitrary estimate.",
        "explanation": "Because s>0, the possible truths are exactly [-epsilon/s,epsilon/s]. At z=-epsilon/s choose e=+epsilon; at z=+epsilon/s choose e=-epsilon. Both produce y=0. Write d=epsilon/s. For every real a, the largest endpoint error is max(|a+d|,|a-d|)=d+|a|, and no interior truth gives a larger error. The midpoint a=0 uniquely minimizes this value, giving radius d. More generally, 2d≤|a+d|+|a-d|, so one of the same-record worlds has error at least d for every rule. No revealed true z was used. If epsilon=0, both worlds coincide at zero and the radius is exactly zero; the formula still holds.",
        "criteria": [
          "Solves the positive-gain data inequality.",
          "Supplies two noises for the same record.",
          "Derives worst error for an arbitrary estimate.",
          "Proves a lower bound for every recovery rule."
        ]
      },
      "scene": "scene \"Same record, indistinguishable endpoint truths\";\ndomain -2.4 2.4; range -0.25 1.25;\nparam s=0.2 from 0.1 to 1;\nparam eps=0.1 from 0 to 0.2;\nparam a=0 from -2 to 2;\nlet d=eps/s;\nsegment compatible from (-d,0) to (d,0) color blue;\npoint left_truth=(-d,0) color blue;\npoint right_truth=(d,0) color blue;\npoint estimate=(a,0.5) color amber;\nsegment left_error from (a,0.5) to (-d,0.5) color rose;\nsegment right_error from (a,1) to (d,1) color rose;\nmeasure left_possible_truth=-d; measure right_possible_truth=d;\nmeasure left_endpoint_noise=eps; measure right_endpoint_noise=-eps;\nmeasure unavoidable_radius=d; measure worst_absolute_error=d+abs(a);",
      "focus": [
        "point-left_truth",
        "point-right_truth",
        "point-estimate"
      ]
    },
    {
      "title": "Add a justified prior and decide a tolerance",
      "body": "Keep the record y=0, but now suppose an independent bound |z|≤R is supplied. This bound is information about admissible truths, not a conclusion from a small data residual. Blue is the prior interval, rose the data interval, teal their intersection. The amber interval is the target tube [-tau,tau] around estimate zero. All lengths and errors use the horizontal coordinate. The controls keep s positive; exact zero gain is a separate written case below.",
      "question": "Which truths survive both bounds? Derive the best guaranteed error and decide exactly when estimate zero meets target tau. Compare full inversion with discarding this coordinate over every admissible record, not only y=0. Can a gain increase be unnecessary when the prior already meets the target?",
      "checkpoint": {
        "hint": "Intersect two centred intervals. For a uniform claim, bound the full inverse's error by epsilon/s and the zero estimate's error by R. Then use the same-record endpoint worlds at y=0 for a lower bound.",
        "explanation": "At y=0 the interval is [-r,r], with r=min(R,epsilon/s). Its midpoint zero has worst error r. The target is attainable exactly when r≤tau, equivalently R≤tau or epsilon≤s*tau. This form also handles tau=0 without division by tau. For all admissible records, full inversion a=y/s has error |e|/s≤epsilon/s, whereas the fixed zero estimate has error |z|≤R. Choosing the better of these two rules gives uniform error at most min(R,epsilon/s). At y=0, truths ±r with noises ∓s*r obey both bounds, so every rule has worst error at least r. Hence this uniform value is sharp. A large data residual or a pretty plot does not establish the supplied prior or noise bound. If R≤tau, improving s is unnecessary for this guarantee.",
        "criteria": [
          "Intersects the prior and data constraints.",
          "States a necessary and sufficient target condition.",
          "Separates a uniform claim from one record.",
          "Proves sharpness with admissible same-record worlds."
        ]
      },
      "scene": "scene \"Intersect independent bounds before choosing accuracy\";\ndomain -2.4 2.4; range -0.25 1.45;\nparam s=0.2 from 0.1 to 1;\nparam eps=0.1 from 0 to 0.2;\nparam R=1 from 0.1 to 2;\nparam tau=0.25 from 0 to 2;\nlet d=eps/s; let r=(R+d-abs(R-d))/2;\nsegment prior from (-R,0) to (R,0) color blue;\nsegment data from (-d,0.4) to (d,0.4) color rose;\nsegment compatible from (-r,0.8) to (r,0.8) color teal;\npoint left_truth=(-r,0.8) color teal;\npoint right_truth=(r,0.8) color teal;\nsegment target_tube from (-tau,1.2) to (tau,1.2) color amber;\nmeasure inverse_uniform_error=d; measure zero_uniform_error=R;\nmeasure best_uniform_error=r; measure target_margin=tau-r;\nmeasure left_possible_truth=-r; measure right_possible_truth=r;",
      "focus": [
        "line-compatible",
        "line-target_tube"
      ]
    },
    {
      "title": "A nonzero record can change the best estimate",
      "body": "Now the displayed record is y=s*R*q. The normalized control -1≤q≤1 generates only consistent records with |y|≤sR, a subset of all consistent records; it does not include every boundary or inconsistent case. Prior and error bounds stay fixed while you choose an estimate a. Blue is the prior, rose the data interval, teal their intersection and its midpoint. The amber point is your estimate. Its horizontal offset from the midpoint is only one part of its worst error. Default data: s=1/4, R=1, epsilon=1/8, q=1, so y=1/4.",
      "question": "Derive the compatible interval for this record, its best estimate and sharp worst error. At the default, compare exact inversion a=y/s with the midpoint and target tau=1/4. Why need an exact data fit fail to be conditionally best? Prove your formula for every consistent record before experimenting with a.",
      "checkpoint": {
        "hint": "Use L=max(-R,(y-epsilon)/s) and U=min(R,(y+epsilon)/s). Write L=c-r and U=c+r. Compare distances from a to those endpoints.",
        "explanation": "For any consistent record, I(y)=[L,U], with c=(L+U)/2 and r=(U-L)/2. The largest possible error is max(|a-L|,|a-U|)=r+|a-c|. Every point of the interval is an admissible truth, because e=y-s*z meets the error bound. The midpoint c is the unique conditionally best estimate and has radius r; the two endpoint worlds prove no rule at this same record can do better. At the default, I=[1/2,1], c=3/4 and r=1/4. Inversion returns 1, with worst error 1/2; the midpoint meets target 1/4. The endpoint noises are +1/8 at z=1/2 and 0 at z=1. The midpoint has residual 1/16, which is allowed. Fitting the recorded datum exactly does not minimize uncertainty about the unseen truth. A failed worst-case certificate means some compatible truth violates the target, not that the actual truth does.",
        "criteria": [
          "Derives the clipped endpoints and centre.",
          "Proves the full r+|a-c| error formula.",
          "Compares inversion and midpoint at the default.",
          "Distinguishes possible failure from actual error."
        ]
      },
      "scene": "scene \"Choose an estimate for a nonzero recorded datum\";\ndomain -4.2 4.2; range -0.25 1.45;\nparam s=0.25 from 0.1 to 1;\nparam R=1 from 0.25 to 1.5;\nparam eps=0.125 from 0 to 0.25;\nparam q=1 from -1 to 1;\nparam a=1 from -2 to 2;\nlet record=s*R*q; let lo=(record-eps)/s; let hi=(record+eps)/s;\nlet L=(-R+lo+abs(-R-lo))/2;\nlet U=(R+hi-abs(R-hi))/2;\nlet c=(L+U)/2; let r=(U-L)/2;\nsegment prior from (-R,0) to (R,0) color blue;\nsegment data from (lo,0.4) to (hi,0.4) color rose;\nsegment compatible from (L,0.8) to (U,0.8) color teal;\npoint midpoint=(c,0.8) color teal;\npoint estimate=(a,1.2) color amber;\nsegment centre_offset from (a,1.2) to (c,1.2) color amber;\nmeasure recorded_y=record; measure left_possible_truth=L; measure right_possible_truth=U;\nmeasure best_estimate=c; measure unavoidable_radius=r; measure worst_absolute_error=r+abs(a-c);",
      "focus": [
        "line-compatible",
        "point-midpoint",
        "point-estimate"
      ]
    }
  ]
}
```

### Proof route: compatible truths and the best conditional estimate

For \(s>0\), rearrange the error inequality before choosing an estimate:
\[
\begin{gathered}
\frac{y-\varepsilon}{s}\le z\le\frac{y+\varepsilon}{s},\\
L=\max\left(-R,\frac{y-\varepsilon}{s}\right),\\
U=\min\left(R,\frac{y+\varepsilon}{s}\right).
\end{gathered}
\]
The compatible set is \(I(y)=[L,U]\) if \(L\le U\); otherwise it is empty. It is nonempty exactly when
\[
|y|\le sR+\varepsilon.
\]
Indeed the data interval intersects the prior precisely when its left endpoint is at most \(R\) and its right endpoint at least \(-R\). These two inequalities are \(y\le sR+\varepsilon\) and \(y\ge-sR-\varepsilon\). Every point in the intersection is an actual possible truth: set \(e=y-sz\). This proves sufficiency, not just a necessary bound.

For a nonempty interval define
\[
c=(L+U)/2,\qquad r=(U-L)/2.
\]
For any returned real estimate \(a\), including one outside \(I(y)\),
\[
\begin{gathered}
\max_{z\in I(y)}|a-z|\\
=\max(|a-L|,|a-U|)\\
=r+|a-c|.
\end{gathered}
\]
To prove the first equality, when \(z\) lies between the endpoints, its distance from \(a\) cannot exceed the larger endpoint distance. To prove the second, write \(a-c=t\) and the endpoints as \(c-r,c+r\): the larger of \(|t+r|,|t-r|\) is \(r+|t|\).

Consequently the unique best conditional estimate is \(c\), with guaranteed radius \(r\). This remains true for a singleton: \(r=0\), and only \(a=c\) gives zero error. Both endpoint truths have admissible noises and the same \(y\). Since
\[
U-L\le |a-L|+|a-U|,
\]
every rule returning one estimate for this record incurs error at least \(r\) in one endpoint world. The midpoint attains that lower bound. “Minimax” here means minimizing the largest admissible error; it does not identify which world occurred.

A target \(\tau\) is possible precisely when \(r\le\tau\). In that case **all** estimates meeting it form
\[
[U-\tau,L+\tau].
\]
The two endpoint error conditions give these bounds directly; they intersect exactly when \(U-L\le2\tau\). A negative margin \(\tau-(r+|a-c|)\) disproves a uniform guarantee for that estimate by exhibiting a possible failing world. It does not prove that its error for the actual, unknown truth is large.

### Uniform recovery over all possible records

Now fix \(s>0,R,\varepsilon\) but allow every record produced by the assumptions. Every compatible interval has width at most \(2R\) and at most \(2\varepsilon/s\), so
\[
\begin{gathered}
\sup_{\text{consistent }y}r_y\\
=\min(R,\varepsilon/s).
\end{gathered}
\]
The upper bound follows from those two widths. Equality is attained at \(y=0\), whose interval is centered and has exactly that half-width. Thus choosing the midpoint for each record is globally minimax, with that sharp uniform error. At the zero record the two truths
\[
z=\pm\min(R,\varepsilon/s)
\]
with noises \(e=-sz\) establish the lower bound for every rule over all records.

Full inversion \(a=y/s\) has uniform error at most \(\varepsilon/s\); the fixed truncated estimate \(a=0\) has uniform error at most \(R\). Choosing inversion if \(\varepsilon/s\le R\) and zero otherwise also attains the uniform minimax value. These simple rules need not be conditionally optimal at a particular nonzero record: clipping can shift the midpoint. The default third stage demonstrates exactly that distinction.

At \(y=0\), a target is attainable if and only if
\[
R\le\tau\quad\hbox{or}\quad\varepsilon\le s\tau.
\]
No division by \(\tau\) is needed. If the prior alone meets the tolerance, reducing noise or increasing gain is unnecessary for this guarantee. If \(R>\tau\), the required positive-gain condition is \(\varepsilon\le s\tau\). For \(\tau=0\), this says that a singleton prior or exact positive-gain data is required.

### Exact zero, endpoint and inconsistent cases

The controls deliberately avoid dividing by zero. Their positive lower gain is a computational domain, not a mathematical claim that zero gain is impossible.

* If \(s=0\), the observation equation is \(y=e\). If \(|y|\le\varepsilon\), the compatible set is the whole prior \([-R,R]\), so the best estimate is zero and its radius is \(R\). If \(|y|>\varepsilon\), the assumptions are inconsistent. Never evaluate \(y/s\) or \(\varepsilon/s\) in either case. Even \(\varepsilon=0,y=0\) reveals no coordinate information when \(s=0\).
* If \(s>0,\varepsilon=0\), a consistent record gives the singleton \(\{y/s\}\). If \(R=0\), the only possible truth is zero whenever \(|y|\le\varepsilon\), including zero gain.
* For \(s>0\), the record \(y=sR+\varepsilon\) gives the singleton \(\{R\}\), including the degenerate zero-width cases. A larger record is inconsistent. At \(y=-sR-\varepsilon\), the singleton is \(\{-R\}\).
* An empty compatible set diagnoses a conflict among the model, bounds and observation. There is no admissible truth on which to interpret a recovery error. A vacuous logical implication is not an informative perfect-recovery certificate.

The normalized controls \(y=sRq\), \(-1\le q\le1\), cover only the consistent subset \(|y|\le sR\), rather than all \(|y|\le sR+\varepsilon\). The boundary records and inconsistent cases just proved lie outside that interface in general.

### Notebook: change the recovery rule while keeping the record

Predict seven outputs in order: \(L,U,c,r,a\), the worst admissible error for \(a\), and its target margin. The source below uses only positive gain and the same normalized consistent subset. Absolute-value formulas implement max and min without adding a new engine operation.

```notebook
param s=0.25 from 0.1 to 1;
param R=1 from 0.25 to 1.5;
param eps=0.125 from 0 to 0.25;
param q=1 from -1 to 1;
param tau=0.25 from 0 to 2;
let record=s*R*q;
let lo=(record-eps)/s;
let hi=(record+eps)/s;
let L=(-R+lo+abs(-R-lo))/2;
let U=(R+hi-abs(R-hi))/2;
let center=(L+U)/2;
let rad=(U-L)/2;
let estimate=record/s;
let worst=rad+abs(estimate-center);
show L;
show U;
show center;
show rad;
show estimate;
show worst;
show tau-worst;
```

**Recovery-rule edit.** With all data and bounds fixed, replace only
```text
let estimate=record/s;
```

by
```text
let estimate=center;
```

Keep the seven output commands unchanged. Before running, explain which outputs must stay fixed, which change, and why a smaller data residual is not the goal of this edit.

<details><summary>Recovery-rule hint</summary>

Only the returned estimate changes. The compatible truths are determined by the original record and bounds, not by your algorithm. Use the exact formula \(r+|a-c|\) to predict the last two outputs.

</details>

<details><summary>Recovery-rule model reasoning</summary>

At the default, the outputs before editing are
\[
\begin{gathered}
1/2,\quad1,\quad3/4,\quad1/4,\\
1,\quad1/2,\quad-1/4.
\end{gathered}
\]
After editing, the first four outputs are unchanged. The last three become \(3/4,1/4,0\). The midpoint's residual is
\[
\begin{gathered}
|y-sc|=|1/4-3/16|\\
=1/16,
\end{gathered}
\]
within the allowed \(1/8\). The exact inverse has zero residual, but it is farther from one possible endpoint truth. The same-record endpoint lower bound proves the midpoint's guarantee is sharp, rather than merely an improvement in one numerical experiment. At other allowed controls, the center may equal the inverse; the proof, rather than a visible change, decides optimality. Floating computations illustrate the independently proved identities.

</details>

### Independent written task: two observations share one error budget

This changes the measurement geometry and the admissible noise set. It is not an extra setting of a default slider. Derive the set before selecting an estimator.

```exercise
{
  "id": "la-bounded-recovery-shared-budget",
  "type": "written",
  "prompt": "Independent changed measurement geometry, outside the controls: let z∈[-1,1], and observe (y1,y2)=(0,1) from y1=z+e1 and y2=2z+e2. The single joint budget is |e1|+|e2|≤3/4; there are not two separately available budgets of 3/4. Derive the entire compatible set by splitting the absolute-value expression into its linear pieces. Find the conditionally best estimate and sharp radius, and supply two endpoint noise vectors for the same observed pair to prove optimality against every recovery rule. Decide targets 1/6 and 1/7. Compare the ordinary least-squares estimate with that guarantee. Finally diagnose what happens when the joint budget becomes 1/2 or smaller.",
  "hints": [
    "For any proposed z, the noise is forced: e1=-z and e2=1-2z. Split |z|+|1-2z| at z=0 and z=1/2, retaining the prior.",
    "Use the interval endpoints, their midpoint and half-width. Two compatible truths must use the same recorded pair.",
    "Least squares minimizes z²+(1-2z)². Its data objective differs from maximum absolute error over compatible truths."
  ],
  "rubric": [
    "Derives all three absolute-value pieces.",
    "Intersects the budget inequality with the prior.",
    "Finds the midpoint and sharp radius.",
    "Provides both admissible endpoint noise vectors.",
    "Decides both requested tolerances.",
    "Compares least squares using worst truth error.",
    "Handles singleton and inconsistent budget cases."
  ],
  "solution": "The compatible truths satisfy |z|+|1-2z|≤3/4 as well as -1≤z≤1. For z≤0 the left side is 1-3z≥1, so this piece contributes nothing. For 0≤z≤1/2 it is 1-z, giving z≥1/4. For z≥1/2 it is 3z-1, giving z≤7/12. Thus I=[1/4,7/12]. Its midpoint is 5/12 and its radius is 1/6. The endpoint noise vectors are (-1/4,1/2) and (-7/12,-1/6); each has joint norm 3/4 and produces exactly (0,1). Their truth separation is 1/3, so the triangle inequality forces every estimate to have error at least 1/6 in one of those worlds. The midpoint attains that bound. Target 1/6 is possible, and target 1/7 is impossible under these premises.\n\nLeast squares minimizes 5z²-4z+1=5(z-2/5)²+1/5 and returns 2/5, within the prior. Its endpoint errors are 3/20 and 11/60, so its worst error is 11/60>1/6. Its own noise (-2/5,1/5) has joint norm 3/5 and is allowed; compatibility does not imply conditional optimality. The piecewise expression has global minimum 1/2, uniquely at z=1/2. A budget of 1/2 therefore leaves the singleton {1/2}, while a smaller budget makes the stated observations and assumptions inconsistent. There is no admissible truth in that case, rather than a meaningful perfect-recovery certificate.\n\nIf the joint budget were replaced by two componentwise bounds of 3/4, the resulting interval would be [1/8,3/4], strictly larger. That replacement changes the information and cannot be used to answer the original task.",
  "transfer": "Changed budget, still outside the controls: keep both gains, prior and observed pair, but replace 3/4 by a symbol eta with 1/2≤eta≤1. Derive the compatible interval, best estimate and radius as functions of eta. Give exactly the budgets in this range that permit target 1/10. Explain why the scalar single-sensor formula min(R,epsilon/s) cannot simply be reused.",
  "transferSolution": "The negative-z piece contributes no negative truths when eta≤1; at eta=1 it includes z=0. The middle piece gives z≥1-eta, and the upper piece gives z≤(1+eta)/3. These bounds lie in [0,1] for the declared eta range, so I_eta=[1-eta,(1+eta)/3]. Its centre is (2-eta)/3 and radius (2eta-1)/3, including the singleton at eta=1/2. Target 1/10 is possible exactly when (2eta-1)/3≤1/10, hence 1/2≤eta≤13/20. The shared noise budget couples the two residuals through one sum of absolute values; it is a different feasible set from one scalar error interval or two independent budgets. Rebuilding that set is the mathematical operation, rather than substituting a new number into an unrelated formula."
}
```

The deterministic signal-set and bounded-noise framework is discussed by [Juditsky and Nemirovski, *Near-Optimality of Linear Recovery from Indirect Observations*, version 5, section 4.1](https://arxiv.org/pdf/1704.00835v5). The interval formulas, exact minimax proofs and joint-budget task here are developed directly, without importing a general recovery theorem. For spectral filtering and truncated SVD as background, see [Per Christian Hansen's *Discrete Inverse Problems* teaching page](https://people.compute.dtu.dk/pcha/DIPbook.html). These references do not turn a supplied deterministic bound into an empirically established one.

## Core development: identifying the pseudoinverse uniquely

The full bounded-data investigation is available in [Inference from linear data](inference-linear-data.md). The additional core argument here concerns the pseudoinverse itself: why it is determined by the matrix, how its projector properties select a minimum-norm solution, and exactly which error directions it controls.

**Theorem 17.1 (Moore–Penrose characterisation).** For every real m×n matrix A there is exactly one n×m matrix B satisfying

ABA=A, BAB=B, (AB)ᵀ=AB, (BA)ᵀ=BA.

It is B=A⁺ constructed by the SVD.

*Proof.* Substituting A=UΣVᵀ and B=VΣ⁺Uᵀ reduces all four identities to diagonal rectangular products. Every positive diagonal σ multiplies 1/σ, and every zero direction stays zero, proving existence and symmetry of both products.

For uniqueness, suppose B satisfies the four identities. The matrix AB is symmetric and idempotent, since (AB)²=A(BAB)=AB. Its range lies in col(A), and ABA=A says it fixes every vector in col(A). Thus AB is the orthogonal projector onto that space.

Also BA is symmetric. If z∈ker(A), then BAz=0, so for every x the vector BAx is perpendicular to ker(A): zᵀBAx=(BAz)ᵀx=0. Moreover A(x−BAx)=Ax−ABAx=0. Consequently x=BAx+(x−BAx) is the orthogonal decomposition into the row space ker(A)⊥ and the kernel. Thus BA is the orthogonal projector onto the row space.

The relation B=BAB now says that Bb lies in the row space for every b. Its image under A is ABb, the uniquely determined projection of b onto col(A). There is at most one vector in the row space with that image, because the difference of two would belong to both ker(A) and its perpendicular complement. Hence Bb is determined uniquely for every b. It equals the SVD construction, establishing uniqueness of B. ∎

This proof distinguishes the uniqueness of the matrix A⁺ from nonuniqueness of the original equation's coefficients. The pseudoinverse supplies one canonical linear rule, selected by Euclidean geometry; it does not make the other solutions disappear.

### Worked example 3: a redundant fit with an unavoidable residual

Let A=[[1,1],[1,1]] and b=(2,0). The image is the line span{(1,1)}, and the kernel is span{(1,−1)}. The positive singular value is two. The pseudoinverse is A⁺=(1/4)[[1,1],[1,1]], so x₊=(1/2,1/2).

Its prediction is (1,1), with residual (1,−1), perpendicular to the image. All least-squares solutions are x=(1/2+t,1/2−t). Their squared norms are 1/2+2t², proving that t=0 uniquely selects x₊. The residual cannot be eliminated by changing t, because changing t moves only along the invisible kernel. Both the projection and the minimum-norm criterion can therefore be checked directly in this singular example.

### Worked example 4: the zero matrix has a well-defined pseudoinverse

For A=0 of size m×n, all singular values are zero and A⁺=0 of size n×m. Every x gives the same prediction zero, so all coefficients minimise the residual norm ‖b‖. The unique minimum-norm coefficient vector is zero. Both projectors AA⁺ and A⁺A are zero, corresponding to zero column and row spaces. This case requires no division by a “smallest positive singular value,” because no such value exists.

## What the positive singular directions can recover

**Proposition 17.2 (Sharp noise amplification on the row space).** Suppose rank(A)=r≥1 and σᵣ is its smallest positive singular value. If the true x belongs to the row space and the data are b=Ax+e, then

‖A⁺b−x‖≤‖e‖/σᵣ.

The constant 1/σᵣ is sharp.

*Proof.* The row-space projector gives A⁺Ax=x. Thus A⁺b−x=A⁺e=Σᵢ₌₁ʳ(uᵢᵀe/σᵢ)vᵢ. Orthonormality makes its squared norm Σ(uᵢᵀe)²/σᵢ², bounded by ‖e‖²/σᵣ². Taking e to be a multiple of uᵣ attains equality, so the constant cannot be lowered. ∎

If the true input also has a kernel component z, that component is absent from every observation Ax. Writing x=x_row+z, the estimate error is A⁺e−z; its two terms are perpendicular. Its squared norm is therefore ‖A⁺e‖²+‖z‖². Without information bounding z, a residual or a positive-singular-value calculation cannot give a uniform bound on total recovery error. The separate clinic develops explicit compatible-set versions of that limitation rather than assuming invisible components vanish.

## Sources

The added proofs and examples are original. Complementary primary material is Gilbert Strang, MIT OpenCourseWare, [Singular Value Decomposition](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/singular-value-decomposition/), consulted 13 November 2026. The retained earlier clinic carries its own bounded-data references.

## Summary

The SVD separates orthogonal input and output directions for rectangular as well as square matrices. Positive singular values can be inverted; zero input directions cannot be observed, and unused output directions cause unavoidable residuals. The four Moore–Penrose equations uniquely characterise A⁺, whose two products are row- and column-space projectors. Its least-squares output is the unique minimum-norm member of a possibly larger solution family. Noise amplification is controlled by the smallest positive singular value only on the recoverable subspace; invisible truth needs additional information.
